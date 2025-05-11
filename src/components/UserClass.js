import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "Child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "Child CompDidMount called");
  }

  render() {
    console.log(this.props.name + "Child Render called");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Incr Count
        </button>
        <h3>Location : {location} </h3>
        <h4>Conact : some@gmal.com</h4>
      </div>
    );
  }
}

export default UserClass;
