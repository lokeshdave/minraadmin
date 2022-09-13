import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Check_in extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy check-in
      </div>
    )
  }
}

export default adminLayout(Check_in);
