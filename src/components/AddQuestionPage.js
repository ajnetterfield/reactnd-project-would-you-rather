import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.focusRef = React.createRef();

    this.state = {
      error: false,
      optionOneText: '',
      optionTwoText: '',
      toHome: false
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: false
    });
  }

  componentDidMount() {
    this.focusRef.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const optionOneText = this.state.optionOneText.trim();
    const optionTwoText = this.state.optionTwoText.trim();

    if (optionOneText !== '' && optionTwoText !== '' && optionOneText !== optionTwoText) {
      this.props.handleAddQuestion({
        author: this.props.authedUser,
        optionOneText,
        optionTwoText
      });

      this.setState(() => ({
        optionOneText: '',
        optionTwoText: '',
        toHome: true
      }));
    } else {
      this.setState({
        optionOneText,
        optionTwoText,
        error: true
      });
    }
  }

  render() {
    const { error, optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="add-question-page">
        <form className="add-question-form" onSubmit={this.handleSubmit}>
          <div className="add-question-form-left">
            {'Would you rather '}

            <input
              className={error ? 'input text error' : 'input text'}
              name="optionOneText"
              onChange={this.handleChange}
              ref={this.focusRef}
              required
              value={optionOneText}
            />

            {' or '}

            <input
              className={error ? 'input text error' : 'input text'}
              name="optionTwoText"
              onChange={this.handleChange}
              required
              value={optionTwoText}
            />

            {' ?'}
          </div>

          <div className="add-question-form-right">
            <input
              className={error ? 'input button red error' : 'input button green'}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

const mapDispatchToProps = {
  handleAddQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);

