import React, { useContext, useState } from "react";
import { auth } from "../../firebaseSetup";
import { login } from "../apiFunctions";
import {
  MainBody,
  LogoDiv,
  Item,
  Button,
  ContentDiv,
  HomeLink,
  Email,
  Pwd,
  SignUpButton,
} from "./style";

import { AuthenticationContext } from "../../AuthenticationContext";

const Login = (props) => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Event: Form Submit");
    if (email === "" || password === "") {
      // this.setState({error:"Missing fields"})
      console.log("missing fields");
      return;
    } else {
      login(email, password).then((res) => {
        console.log(res);
        console.log("redirect to home feed");

        setAuthentication(auth.currentUser);
        props.history.push("/trackr");

        // redirect to home feed
        //console.log(auth.currentUser);
        //console.log(auth.currentUser.displayName);
      });
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (e.target.name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <MainBody>
      <div>
        <LogoDiv>
          <HomeLink to="/">Pipeline</HomeLink>
        </LogoDiv>
        <ContentDiv>
          <form onSubmit={submit}>
            <Item className="title">Welcome Back</Item>
            <Email
              className="email"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            ></Email>
            <Pwd
              className="pwd"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></Pwd>
            <Button type="submit">Log In</Button>
            <SignUpButton href="/SignUp">
              Don’t have an account? Sign up here.
            </SignUpButton>
          </form>
        </ContentDiv>
      </div>
    </MainBody>
  );
};

export default Login;
