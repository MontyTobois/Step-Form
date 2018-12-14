import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title = "Enter Personal Info" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabaelText= "Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            hintText="Enter your City"
            floatingLabaelText= "City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            hintText="Enter your Bio"
            floatingLabaelText= "Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primay={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primay={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button:{
    margin:15
  }
}

export default FormPersonalDetails;
