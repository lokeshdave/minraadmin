import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Fund_management extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Fund management
      </div>
    )
  }
}

export default adminLayout(Fund_management);
