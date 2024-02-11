import { Component } from "react";
import PropTypes from 'prop-types';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      count: 0,
      like:0,
      username : "example"
    };
   
  }

  render() {
    
    return (
      <>
      <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button className="button" onClick={()=>this.setState((prevState) => ({count: prevState.count + 1}))} >
        count is {this.state.count}
      </button>
      <br></br>
      <button className="button" onClick={()=>this.setState((prevState) => ({like: prevState.like + 1}) ) }>
        Like  {this.state.like}
      </button>
      <br></br>
      <Link to="/home" >To Home Page</Link>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
      </>
    );
  }
}
Main.propTypes = {
  username : PropTypes.string,
}
export default Main;
