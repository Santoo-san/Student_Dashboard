import React from "react";
import StudentData from "../../StudentData/StudentData";

// function Graph() {
//   return (
//     <div>
//       <h1> About Us</h1>
//       <p>Sla jouw favo playlist op!</p>
//     </div>
//   );
// }

import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryLegend,
} from "victory";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: StudentData.students,
    };
  }

  render() {
    const students = StudentData.students;
    const allProjects = students.map((a) => a.Project);
    const getProjectNames = [...new Set(allProjects)];

    const sortedProjects = getProjectNames.map((project) => {
      return students.filter((x) => x.Project === project);
    });

    const sumProjects = sortedProjects.map((projects) => {
      return projects.reduce((sum, project) => {
        return {
          Project: project.Project,
          Difficulty: sum.Difficulty + project.Difficulty,
          Rating: sum.Rating + project.Rating,
        };
      });
    });

    const findNumberOfProjects = sortedProjects.map((project) => {
      return {
        project: project[0].Project,
        sumOfProjects: project.length,
      };
    });

    const findNumberOfProject = (projectName) => {
      const selectedProject = findNumberOfProjects.find(
        (p) => p.project === projectName
      );
      return selectedProject.sumOfProjects;
    };

    const findAverage = sumProjects.map((project) => {
      return {
        Project: project.Project,
        Difficulty: project.Difficulty / findNumberOfProject(project.Project),
        Rating: project.Rating / findNumberOfProject(project.Project),
      };
    });

    return (
      <div>
        <h4 className="titleBarChart">Totaal alle studenten</h4>
        <VictoryChart
          height={500}
          width={2000}
          theme={VictoryTheme.material}
          domainPadding={0}
          padding={{ left: 50, right: 30, top: 10, bottom: 150 }}
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
                  fill: "Gray",
                  type: "square",
                },
              },
              {
                name: "Plezier",
                labels: { fontSize: 17, fill: "white" },
                symbol: {
                  fill: "MediumSeaGreen",
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
          <VictoryGroup offset={0} colorScale={"qualitative"}>
            <VictoryLine
              style={{
                data: { strokeWidth: 15, strokeLinecap: "round" },
                parent: { border: "1px solid #ccc" },
              }}
              // domainPadding={0.1}
              // animate={{
              //   duration: 2000,
              //   onLoad: { duration: 1000 },
              // }}
              data={findAverage}
              x="Project"
              y="Difficulty"
            />
            <VictoryLine
              // barRatio={1}
              // animate={{
              //   duration: 2000,
              //   onLoad: { duration: 2000 },
              // }}
              style={{
                data: { strokeWidth: 15, strokeLinecap: "round" },
                parent: { border: "1px solid #ccc" },
              }}
              data={findAverage}
              x="Project"
              y="Rating"
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default Graph;
