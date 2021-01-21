import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  //   VictoryStack,
} from "victory";

class BarChartSingleStudent extends React.Component {
  render() {
    const { students } = this.props;
    const item = "Martina";
    console.log(students);
    console.log(item);
    // Zoiets:

    const individualStudentData = students.filter(
      (student) => student.Name === item
    );
    console.log(individualStudentData);
    const studentName = individualStudentData[0].Name;
    console.log(studentName);
    // const getProjectsOfSingleStudents = students.filter(
    //   (x) => x.Name === onclick.name
    // ); //onclick.name
    // this.props.studentData[this.props.id].name

    // const allProjects = students.map((a) => a.Project);
    // const getProjectNames = [...new Set(allProjects)];

    // const sortedProjects = getProjectNames.map((project) => {
    // return students.filter((x) => x.Project === project);
    // });

    // const sumProjects = sortedProjects.map((projects) => {
    //   return projects.reduce((sum, project) => {
    //     return {
    //       Project: project.Project,
    //       Difficulty: sum.Difficulty + project.Difficulty,
    //       Rating: sum.Rating + project.Rating,
    //     };
    //   });
    // });

    // const findNumberOfProjects = sortedProjects.map((project) => {
    //   return {
    //     project: project[0].Project,
    //     sumOfProjects: project.length,
    //   };
    // });

    // const findNumberOfProject = (projectName) => {
    //   const selectedProject = findNumberOfProjects.find(
    //     (p) => p.project === projectName
    //   );
    //   return selectedProject.sumOfProjects;
    // };

    // const findAverage = sumProjects.map((project) => {
    //   return {
    //     Project: project.Project,
    //     Difficulty: project.Difficulty / findNumberOfProject(project.Project),
    //     Rating: project.Rating / findNumberOfProject(project.Project),
    //   };
    // });

    return (
      <VictoryChart
        height={500}
        width={2000}
        theme={VictoryTheme.material}
        domainPadding={20}
        padding={{ left: 50, right: 30, top: 80, bottom: 150 }}
      >
        <VictoryAxis
          label={"Opdrachten"}
          fixLabelOverlap={true}
          style={{
            grid: { strokeDasharray: "none", strokeWidth: 0 },
            axisLabel: { padding: 50, fill: "gold" },
            tickLabels: {
              padding: 1,
              angle: -45,
              verticalAnchor: "middle",
              textAnchor: "end",
              fill: "white",
              y: 10,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={"Beoordeling"}
          style={{
            axisLabel: { fill: "gold" },
            tickLabels: { fill: "white", padding: 20 },
          }}
        />
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar
            // barRatio={1}
            // domainPadding={0.1}
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 1000 },
            // }}
            barWidth={12}
            cornerRadius={{ topLeft: 3, topRight: 3 }}
            // data={findAverage}

            data={individualStudentData}
            x="Project"
            y="Difficulty"
          />
          {/* <VictoryBar
            // barRatio={1}
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 2000 },
            // }}
            barWidth={12}
            cornerRadius={{ topLeft: 3, topRight: 3 }}
            // data={findAverage}
            data={this.props.studentData[this.props.key].Project}
            x="Project"
            y="Rating"
          /> */}
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default BarChartSingleStudent;
