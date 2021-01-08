import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  //   VictoryStack,
} from "victory";

class BarChart extends React.Component {
  render() {
    const { students } = this.props;
    const allProjects = students.map((a) => a.Project);
    // console.log(allProjects);
    const projects = [...new Set(allProjects)];
    // console.log(projects);

    const sortedProjects = projects.map((project) => {
      return students.filter((x) => x.Project === project);
    });
    console.log(sortedProjects);

    const projectSum = sortedProjects.map((projects) => {
      console.log(projects);
      return projects.reduce((sum, value) => {
        console.log(value.Project);
        console.log(value.Difficulty);
        console.log(value.Rating);
        return {
          project: value.Project,
          difficulty: sum.Difficulty + value.Difficulty,
          rating: sum.Rating + value.Rating,
        };
      });
    });
    console.log(projectSum);
    //put single project into function findAverage
    const numberOfProjects = sortedProjects.map((b) => {
      //   console.log(b[0].Project);
      return {
        project: b[0].Project,
        sumOfProjects: b.length,
      };
    });
    // console.log(numberOfProjects);

    const findAverage = projectSum.map((value) => {
      const numberOfProjects2 = numberOfProjects[0].sumOfProjects;
      console.log(
        value.project,
        value.difficulty,
        value.rating,
        numberOfProjects2
      );
      return {
        project: value.project,
        difficulty: value.difficulty / numberOfProjects2,
        rating: value.rating / numberOfProjects2,
      };
    });
    console.log(findAverage);

    //make array with project,difficulty and rating

    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar data={findAverage} x="project" y="difficulty" />
          <VictoryBar data={findAverage} x="project" y="rating" />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default BarChart;
