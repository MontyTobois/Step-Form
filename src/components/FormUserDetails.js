import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  continue = e => () => {
    e.preventDefaut();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title = "Enter you Info" />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
