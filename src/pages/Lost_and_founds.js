import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Lost_and_founds extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Lost and founds
      </div>
    )
  }
}

export default adminLayout(Lost_and_founds);
