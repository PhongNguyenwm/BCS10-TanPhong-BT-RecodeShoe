import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* render with map */}
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price * item.amount + "$"}</td>
                  <td>
                    <button
                      onClick={() => this.props.amountChange(item.id, false)}
                      className="btn=dark"
                    >
                      -
                    </button>
                    <strong>{item.amount}</strong>
                    <button
                      onClick={() => this.props.amountChange(item.id, true)}
                      className="btn-warning"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img width={80} src={item.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.deleteItem(item.id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
