import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryLegend,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

class BarChartAllStudents extends React.Component {
  render() {
    const { students } = this.props;
    const getAllProjects = students.map((a) => a.Project);
    const getProjectNames = [...new Set(getAllProjects)];

    const sortProjects = getProjectNames.map((project) => {
      return students.filter((x) => x.Project === project);
    });

    const sumProjects = sortProjects.map((assignments) => {
      return assignments.reduce((sum, project) => {
        return {
          Project: project.Project,
          Difficulty: sum.Difficulty + project.Difficulty,
          Rating: sum.Rating + project.Rating,
        };
      });
    });

    const findNumberOfProjects = sortProjects.map((assignment) => {
      return {
        project: assignment[0].Project,
        sumOfProjects: assignment.length,
      };
    });

    const findNumberOfProject = (projectName) => {
      const selectedProject = findNumberOfProjects.find(
        (p) => p.project === projectName
      );
      return selectedProject.sumOfProjects;
    };

    const findAverage = sumProjects.map((assignments) => {
      return {
        Project: assignments.Project,
        Difficulty:
          assignments.Difficulty / findNumberOfProject(assignments.Project),
        Rating: assignments.Rating / findNumberOfProject(assignments.Project),
      };
    });

    return (
      <div>
        <h4 className="titleBarChart">Totaal alle studenten</h4>
        <VictoryChart
          height={500}
          width={2000}
          theme={VictoryTheme.material}
          domainPadding={20}
          padding={{ left: 50, right: 30, top: 10, bottom: 150 }}
          containerComponent={
            <VictoryVoronoiContainer mouseFollowTooltips voronoiDimension="x" />
          }
        >
          <VictoryLegend
            x={125}
            y={420}
            title="Legenda"
            centerTitle
            orientation="horizontal"
            gutter={40}
            colorScale={"qualitative"}
            style={{
              border: { stroke: "white" },
              title: { fontSize: 20, fill: "white" },
              data: { fill: "white" },
            }}
            data={[
              {
                name: "Moeilijkheid",
                labels: { fontSize: 17, fill: "white" },
                symbol: {
                  fill: "rgb(51, 77, 92)",
                  type: "square",
                },
              },
              {
                name: "Plezier",
                labels: { fontSize: 17, fill: "white" },
                symbol: {
                  fill: "rgb(69, 178, 157)",
                  type: "square",
                },
              },
            ]}
          />
          <VictoryAxis
            label={"Opdrachten"}
            fixLabelOverlap={true}
            style={{
              grid: { strokeDasharray: "none", strokeWidth: 0 },
              axisLabel: { padding: 60, fill: "#dead54", fontSize: 20 },
              tickLabels: {
                padding: 1,
                angle: -45,
                verticalAnchor: "middle",
                textAnchor: "end",
                fill: "white",
                y: 10,
                fontSize: 15,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            label={"Beoordeling"}
            style={{
              axisLabel: { fill: "#dead54", fontSize: 19 },
              tickLabels: { fill: "white", padding: 25, fontSize: 15 },
            }}
          />
          <VictoryGroup offset={13.5} colorScale={"qualitative"}>
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              barWidth={12}
              cornerRadius={{ topLeft: 3, topRight: 3 }}
              data={findAverage}
              x="Project"
              y="Difficulty"
            />
            <VictoryBar
              data={findAverage}
              x="Project"
              y="Rating"
              animate={{
                duration: 2000,
                onLoad: { duration: 2000 },
              }}
              barWidth={12}
              cornerRadius={{ topLeft: 3, topRight: 3 }}
              labelComponent={<VictoryTooltip />}
              labels={({ datum }) => `Opdracht: ${datum.Project}`}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default BarChartAllStudents;
