import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../store/actions/userActions";

export class _SignupPage extends Component {
  state = {
    username: "",
  };

  async componentDidMount() {}

  onSignup = async (ev) => {
    ev.preventDefault();
    this.props.setUser(this.state.username);
    this.props.history.push("/");
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ username: value });
  };

  render() {
    const { username } = this.state;

    return (
      <section class="signup">
        <form onSubmit={this.onSignup} className="contact-edit">
          <section>
            <label htmlFor="username">Enter Username </label>
            <input
              value={username}
              onChange={this.handleChange}
              type="text"
              name="username"
              id="username"
            />
            <button>SIGNUP</button>
          </section>
        </form>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/971/108/small/stacked-golden-coins-icon-cartoon-in-black-and-white-free-vector.jpg"
          alt=""
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setUser,
};

export const SignupPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SignupPage);
