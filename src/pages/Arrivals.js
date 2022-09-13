import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Arrivals extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Arrivals
      </div>
    )
  }
}

export default adminLayout(Arrivals);
