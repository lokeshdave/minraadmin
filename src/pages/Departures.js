import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Departures extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Departures
      </div>
    )
  }
}

export default adminLayout(Departures);
