import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadAuthors, saveAuthor } from './actions/author';

class App extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  componentDidMount() {
    this.props.abracadabra()
  }

  handleText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.saveAuthor(this.state)
      .then(() => {
        this.setState({ firstName: '', lastName: '' });
      })
  }
  render() {
    const {
      firstName,
      lastName
    } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" value={firstName} onChange={this.handleText} placeholder="First Name" />
          <br />
          <input type="text" name="lastName" value={lastName} onChange={this.handleText} placeholder="Last Name" />
          <br />
          <input type="submit" value="ADD AUTHOR" />
        </form>
        <h1>Correct Authors!</h1>
        {this.props.authors.map((author, index) => {
          return (
            <div key={index}>
              <p>{author.firstName} {author.lastName}</p>
              <p>ID: {author.id}</p>
              <hr />
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    abracadabra: () => dispatch(loadAuthors()),
    saveAuthor: (author) => dispatch(saveAuthor(author))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
