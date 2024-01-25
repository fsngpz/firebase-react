import firebaseConfig from "../../config";
import React from "react";
import "firebase/database";
import firebase from "firebase/app";
import "./App.css";

class Connector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      database: null,
      height: "",
      status: "",
      battery: "",
      date: "",
      recent: [],
    };
  }

  componentDidMount = async () => {
    firebase.initializeApp(firebaseConfig);

    this.setState({
      database: firebase.database(),
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.database !== nextState.database) {
      return false;
    }
    return true;
  }

  connect = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };

  sendHeight = async () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { height, status, battery, date } = this.state;
    return (
      <div>
        {this.state.isConnected ? (
          <div>
            <h3>Send a message</h3>
            <input
              placeholder="to"
              value={""} // Tambahkan nilai atau variabel state di sini
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              placeholder="your message"
              value={""} // Tambahkan nilai atau variabel state di sini
              onChange={(e) => console.log(e.target.value)}
            />
            <button onClick={this.sendHeight}>Send</button>

            <div>Received messages:</div>
          </div>
        ) : (
          <div>
            <h3>What is your ID:</h3>
            <input
              value={""} // Tambahkan nilai atau variabel state di sini
              onChange={(e) => console.log(e.target.value)}
            />
            <button onClick={this.connect}>Connect</button>
          </div>
        )}
      </div>
    );
  }
}
