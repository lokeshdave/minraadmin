import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Refunds extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Refunds
      </div>
    )
  }
}

export default adminLayout(Refunds);
