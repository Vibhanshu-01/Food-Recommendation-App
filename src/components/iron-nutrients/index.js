import React, { Component } from 'react'
import PropTypes from 'prop-types'

import IronPieChart from '../iron-pie-chart'


import { defaultIron } from './../calculations'

import './../../App.css'
import IronNutrient from '../iron-nutrient'


export default class IronNutrients extends Component {
  static ironNutrientShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    raw: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  })

  static propTypes = {
    ironNutrients: PropTypes.shape({
      iron : IronNutrients.ironNutrientShape,
    }),
  }

  static defaultProps = {
    ironNutrients: defaultIron,
  }
  state = {
    ironNutrients: [],
  }
  static getDerivedStateFromProps(nextProps) {
    const ironNutrients = nextProps.ironNutrients
    // console.log(nextProps.ironNutrients)

    return {
      ironNutrients: [
        ironNutrients.iron,
       
      ],
    }
  }
  render() {
    return (
      <div className="macroNutrients">
        {this.state.ironNutrients.map(ironNutrient => (
          <IronNutrient
            key={ironNutrient.name}
            name={ironNutrient.name}
            amount={ironNutrient.amount}
            units={ironNutrient.unit}
          />
        ))}
        <IronPieChart
          iron={this.props.ironNutrients.iron.amount}
        />
      </div>
    )
  }
}
