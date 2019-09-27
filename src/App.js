import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {
    tweet: '',
    tweets: [],
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
    .then((res) => this.setState({tweets: res}))
    .catch((error) => console.log('error', error));
  }

  getOneTweet = () => {

  }

  postATweet = () => {

  } 

  //TODO: Remove this since it's coming from the backend
  getCurrentDateAndTime = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
  }

  handleOnchange = (event) => {
    const {value} = event.target;
    
    this.setState({
      tweet: value,
      charCounter: value.length
    })
  };

  handleOnClick = () => {    
    this.setTweetState();
  };

  handleKeyPress(event) {
    const key = event.key || event.keyCode || event.which;
    if (key === 'Enter' || key === 13 || key === 0) {
      this.setTweetState();
    }
  }

  setTweetState = () => {
    const eachTweet = {
      tweet: this.state.tweet.trim(),
      tweetTime: this.getCurrentDateAndTime() // TODO: Remive this since it's coming from the backend
    }

    if (eachTweet.tweet.length > 0) {      
      this.setState({
        tweets: [...this.state.tweets, eachTweet],
        tweet: '',
        charCounter: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main
          addTweet={this.handleOnClick}
          change={this.handleOnchange}
          addTweetByEnter={(e) => {this.handleKeyPress(e)}}
          tweet={this.state.tweet}
          tweets={this.state.tweets}
          charCounter={this.state.charCounter}
        />
      </div>
    );
  }
}

export default App;
