import React from "react";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log("Parent CompDidMount called");
  }

  render() {
    console.log("Parent Render called");
    return (
      <div>
        <div>
          <h1>AboutUs</h1>
          <h2>This is About us page</h2>         
          <userContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-bold">Logged in user : {loggedInUser}</h1>}
          </userContext.Consumer>
        </div>
        {/* <User name={"Ajith"} location = {"Allpy fun"}   /> */}
        <UserClass name={"First"} location={"Allpy class"} />
        <UserClass name={"Second"} location={"Allpy class"} />
        <UserClass name={"Third"} location={"Allpy class"} />
      </div>
    );
  }
}

export default AboutClass;
