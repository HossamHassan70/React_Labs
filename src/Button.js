import React from 'react';

class MyButton extends React.Component {
  render() {
    const { variant, children } = this.props;
    
    return (
        <button className={`btn btn-${variant}`}>{children}</button>
    );
  }
}

export default MyButton;