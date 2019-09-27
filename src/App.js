import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {
    comment: '',
    commentList: [],
    charCounter: 0,
    limit: 140
  }

  componentDidMount() {
    this.getAllTweets();
  }

   getAllTweets = async () => {
    const url = 'http://localhost:8080/nolla/tweets';
    
    fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((res) => console.log('response ==', res))
    .catch((error) => console.log('error', error));
  }

  getOneTweet = () => {

  }

  deleteTweet = (id) => {


  }

  updateTweet = () => {

  } 

  getCurrentDateAndTime = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
  }

  handleOnchange = (event) => {
    const {value} = event.target;
    this.setState({
      comment: value,
      charCounter: value.length
    })
  };

  handleOnClick = () => {
    this.setCommentState();
  };

  handleKeyPress(event) {
    const key = event.key || event.keyCode || event.which;
    if (key === 'Enter' || key === 13 || key === 0) {
      this.setCommentState();
    }
  }

  setCommentState = () => {
    const eachTweet = {
      comment: this.state.comment.trim(),
      commentTime: this.getCurrentDateAndTime()
    }

    if (eachTweet.comment.length > 0) {
      this.setState({
        commentList: [...this.state.commentList, eachTweet],
        comment: '',
        charCounter: 0
      });
    }
  }

  render() {
    console.log('=====')
    return (
      <div className="App">
        <Header/>
        <Main
          addComment={this.handleOnClick}
          change={this.handleOnchange}
          addCommentByEnter={(e) => {this.handleKeyPress(e)}}
          comment={this.state.comment}
          commentList={this.state.commentList}
          charCounter={this.state.charCounter}
        />
      </div>
    );
  }
}

export default App;
