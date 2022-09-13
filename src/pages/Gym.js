import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Gym extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Gym
      </div>
    )
  }
}

export default adminLayout(Gym);
