/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="Display">
        <p>
          Equals:
          {result}
        </p>
      </div>
    );
  }
}

Display.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  result: PropTypes.string,
};

export default Display;
