import React, { Component } from 'react'
import adminLayout from "../hoc/adminLayout"

class Audit extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    render() {
    return (
      <div>
        hy Audit
      </div>
    )
  }
}

export default adminLayout(Audit);
