import React from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
];
//victorystack gebruiken om data van meerdere studenten te stapelen in 1 bar?
class BarChart extends React.Component {
  render() {
    const { students } = this.props;
    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar data={students} x="Project" y="Difficulty" />
          {/* <VictoryBar data={data2013} x="quarter" y="earnings" />
          <VictoryBar data={data2014} x="quarter" y="earnings" />
          <VictoryBar data={data2015} x="quarter" y="earnings" /> */}
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

export default BarChart;
