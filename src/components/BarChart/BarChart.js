import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  //   VictoryStack,
} from "victory";

class BarChart extends React.Component {
  render() {
    const { students } = this.props;
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
      <VictoryChart
        width={2000}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          fixLabelOverlap={true}
          style={{ tickLabels: { padding: 20, angle: -45 } }}
        />
        <VictoryAxis dependentAxis style={{ tickLabels: { padding: 20 } }} />
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar data={findAverage} x="Project" y="Difficulty" />
          <VictoryBar data={findAverage} x="Project" y="Rating" />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default BarChart;
