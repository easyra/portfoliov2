import React, { Component } from 'react';

class ArrowIcons extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className='arrow-icons'>
        <div>
          <i class='fas fa-arrow-alt-circle-left fa-6x' />
          <i class='fas fa-arrow-alt-circle-right fa-6x' />
        </div>
      </div>
    );
  }
}

export default ArrowIcons;
