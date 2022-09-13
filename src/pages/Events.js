import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Events
      </div>
    )
  }
}

export default adminLayout(Events);
