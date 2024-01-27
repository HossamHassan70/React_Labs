import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
