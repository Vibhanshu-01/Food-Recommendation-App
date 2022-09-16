import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import emptyGraph from './../../imgs/graph_placeholder.png'

ReactChartkick.addAdapter(Chart)

export default class IronPieChart extends Component {
  static propTypes = {
    iron: PropTypes.number.isRequired,
  }
  calculatePercentage = (item, total) => parseInt((item * 100) / total, 10) || 0
  pieChartData() {
    const { iron } = this.props
    console.log(iron)
    const total = 8000
    return [
      ['Iron', this.calculatePercentage(iron, total)],
    ]
  }
 
  render() {
    return (
      <div className="macroNutrient macroChart">
        {this.props.iron === 0 ? (
          <Tooltip title="Iron consumed to required Ratio">
            <img className="macroChartEmpty" src={emptyGraph} alt="Empty Graph" />
          </Tooltip>
        ) : (
          <PieChart
            colors={['#5ca0d3', '#64CEAA', '#f9fd50']}
            id="macro_ratio_chart"
            suffix="%"
            legend={false}
            height="100px"
            width="100px"
            data={this.pieChartData()}
          />
        )}
      </div>
    )
  }
}
