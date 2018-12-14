import React, { Component, PropTypes } from 'react';

class UserForm extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    step : 1,
    firstName : '',
    lastname : '',
    email : '',
    occupation : '',
    city : '',
    bio : ''
  }

  render() {
    return (

    );
  }
}

ComponentName.propTypes = {
  prop: PropTypes.type.isRequired
}

export default UserForm;
