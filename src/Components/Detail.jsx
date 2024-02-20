import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { name, image } = this.props.shoe;
    return (
      <div className="col-5">
        <img src={image} alt="" />
        <h3>{name}</h3>
      </div>
    );
  }
}
