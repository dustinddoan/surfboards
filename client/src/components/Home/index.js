import React, { Component } from 'react'
import HomeSlider from './home_slider'
import HomePromition from './home_promotions'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider/>
        <HomePromition/>
      </div>
    )
  }
}
