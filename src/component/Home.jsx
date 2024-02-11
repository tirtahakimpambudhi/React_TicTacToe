import {Component} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class HomePage extends Component {
    render () {
      const url = new URL(window.location.href)
      const name = (url.searchParams.has("name")) ?url.searchParams.get("name") :this.props.name
      return (
          <>
          <div>
            <h1>
              Welcome To My Home Page{" "}
              <span style={{ color: "red" }}>{name}</span>.
            </h1>
            <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iure cumque nam. Eligendi sed velit cum, porro, ab molestiae a repellat deserunt tempora dignissimos non nobis dolores facilis tempore nostrum accusantium, ratione iste quasi qui illo enim fuga illum impedit aut? Ea sapiente fugit dignissimos totam quos non voluptas rerum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos iure cumque nam. Eligendi sed velit cum, porro, ab molestiae a repellat deserunt tempora dignissimos non nobis dolores facilis tempore nostrum accusantium, ratione iste quasi qui illo enim fuga illum impedit aut? Ea sapiente fugit dignissimos totam quos non voluptas rerum!
            </p>
            <br></br>
            <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          </div>
        </>
        )
        
    }
}

HomePage.propTypes = {
    name : PropTypes.string.isRequired
}

export default HomePage