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
    console.log(allProjects);
    const projects = [...new Set(allProjects)];
    console.log(projects);
    // const sortedProjects = projects.sort();
    const sortedProjects = projects.map((project) => {
      return students.filter((x) => x.Project === project);
    });
    console.log(sortedProjects);

    const projectSum = sortedProjects.map((a) => {
      console.log(a);
      return a.reduce((sum, value) => {
        return {
          project: value.Project,
          difficulty: sum.difficulty + value.difficulty,
          rating: sum.rating + value.rating,
        };
      });
    });
    console.log(projectSum);
    //check why 'scrum' does not appear in 'projectsum"
    //put single project into function findAverage

    const findAverage = (arr) => {
      const { length } = arr;
      return arr.reduce((acc, val) => {
        return acc + val.Difficulty / length;
      }, 0);
    };
    console.log(findAverage(students));

    //make array with project,difficulty and rating

    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar data={students} x="Project" y="Difficulty" />
          <VictoryBar data={students} x="Project" y="Rating" />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default BarChart;
