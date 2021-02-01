import React from "react";
import StudentData from "../../StudentData/StudentData";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryAxis,
  VictoryLegend,
} from "victory";
import { Link } from "react-router-dom";

class BarChartSingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentIdentifier: props.match.params.studentName,
    };
  }

  render() {
    const students = StudentData.students;
    const getSingleStudentData = students.filter(
      (student) => student.Name === this.state.studentIdentifier
    );

    const studentName = getSingleStudentData[0].Name;

    return (
      <div>
        <h4 className="titleBarChart">{studentName}</h4>
        <VictoryChart
          height={500}
          width={2000}
          theme={VictoryTheme.material}
          domainPadding={20}
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
            label={"Opdrachten "}
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
          <VictoryGroup offset={10} colorScale={"qualitative"}>
            <VictoryBar
              // barRatio={1}
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
              data={getSingleStudentData}
              x="Project"
              y="Rating"
            />
          </VictoryGroup>
        </VictoryChart>
        <div className="listItemDiv">
          <Link className="backButton" to={`/`}>
            <li className="list-item">Terug</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default BarChartSingleStudent;
