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

    const getSingleStudentData = students.filter(
      (student) => student.Name === item
    );
    const studentName = getSingleStudentData[0].Name;

    return (
      <div>
        <h4 className="titleSingleStudentBar" >{studentName}</h4>
        <VictoryChart
          height={500}
          width={2000}
          theme={VictoryTheme.material}
          domainPadding={20}
          padding={{ left: 50, right: 30, top: 80, bottom: 150 }}
        >
          <VictoryAxis
            label={"Opdrachten " + studentName}
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
              data={getSingleStudentData}
              x="Project"
              y="Difficulty"
            />
            <VictoryBar
              // barRatio={1}
              // animate={{
              //   duration: 2000,
              //   onLoad: { duration: 2000 },
              // }}
              barWidth={12}
              cornerRadius={{ topLeft: 3, topRight: 3 }}
              // data={findAverage}
              data={getSingleStudentData}
              x="Project"
              y="Rating"
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default BarChartSingleStudent;
