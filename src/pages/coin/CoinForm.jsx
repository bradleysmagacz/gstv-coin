import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from 'react-modal';
import MenuItem from 'material-ui/MenuItem';

class CoinForm extends React.Component {
  static propTypes = {
    clearError: PropTypes.func,
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    submitError: PropTypes.string,
    logout: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    router: PropTypes.object,
    submitting: PropTypes.bool,
    flag: PropTypes.object.isRequired,
    isOpen: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      formError: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.props.reset('coinForm');
    this.setState({
      formError: null
    });
  }

  componentWillMount() {
    this.reset();
  }

  handleSubmit(values) {
    console.log('values', values);
    this.props.loadCoins(values);
    this.reset();
  }

  render() {
    const { error, handleSubmit, submitError, submitting } = this.props;
    const { formError } = this.state;
    return (
      <Paper
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          padding: '20px 150px',
          transform: 'translate(-50%, -50%)',
          background: 'rgb(250, 250, 250)'
        }}
        zDepth={4}
      >
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="price_usdMin"
              type="text"
              component={TextField}
              floatingLabelText="Price Min"
              floatingLabelFocusStyle={{ color: '#ff5c5c' }}
              underlineFocusStyle={{ borderColor: '#ff5c5c' }}
              errorStyle={{
                fontStyle: 'italic',
                position: 'absolute',
                transform: 'translate(40%, 250%)'
              }}
            />
            <Field
              name="price_usdMax"
              type="text"
              component={TextField}
              floatingLabelText="Price Max"
              floatingLabelFocusStyle={{ color: '#ff5c5c' }}
              underlineFocusStyle={{ borderColor: '#ff5c5c' }}
              errorStyle={{
                fontStyle: 'italic',
                position: 'absolute',
                transform: 'translate(60%, 250%)'
              }}
            />
          </div>
          {/* <div style={{ margin: '10px 0' }}>
            <Field
              name="startDate"
              component={DatePicker}
              floatingLabelText="Start Date"
              floatingLabelFocusStyle={{ color: '#ff5c5c' }}
              underlineFocusStyle={{ borderColor: '#ff5c5c' }}
              errorStyle={{
                fontStyle: 'italic',
                position: 'absolute',
                transform: 'translate(50%, 250%)'
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="endDate"
              component={DatePicker}
              floatingLabelText="End Date"
              floatingLabelFocusStyle={{ color: '#ff5c5c' }}
              underlineFocusStyle={{ borderColor: '#ff5c5c' }}
              errorStyle={{
                fontStyle: 'italic',
                position: 'absolute',
                transform: 'translate(50%, 250%)'
              }}
              style={{ cursor: 'pointer' }}
            />
          </div> */}
          {(error || submitError || formError) && (
            <strong
              style={{
                color: 'red',
                fontStyle: 'italic',
                position: 'absolute',
                fontSize: '12px'
              }}
            >
              {error || submitError || formError}
            </strong>
          )}
          <div style={{ paddingTop: '35px' }}>
            <RaisedButton type="submit" disabled={submitting}>
              Submit
            </RaisedButton>
            <RaisedButton
              disabled={submitting}
              onClick={() => this.reset()}
              style={{ float: 'right' }}
            >
              Clear
            </RaisedButton>
          </div>
        </form>
      </Paper>
    );
  }
}

export default reduxForm({
  form: 'coinForm', // a unique identifier for this form,
  enableReinitialize: true
})(CoinForm);
