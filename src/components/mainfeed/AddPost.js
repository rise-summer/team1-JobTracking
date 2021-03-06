import axios from 'axios';
import moment from "moment";
import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AuthenticationContext } from "../../AuthenticationContext";
import { auth } from "../../firebaseSetup";

const AddPost = ({ numPosts, setNumPosts, setPosts, toggleShowPost }) => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = auth.currentUser;

  const submitPost = async (e) => {
    e.preventDefault();
    currentUser.getIdToken().then(token => {
      axios.post(`http://localhost:5000/api/post/create`, {
        body: {
          title,
          content: description,
          created_at: new Date(),
          userEmail: currentUser.email
        }
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(
        res => {
          setNumPosts((prevNumPosts) => prevNumPosts + 1);
          setPosts((prevPosts) => [
            {
              id: numPosts + 1,
              author: authentication.displayName,
              title,
              date: moment().format("MM/DD/YY"),
              content: description,
              comments: [],
            },
            ...prevPosts,
          ]);
          setTitle("");
          setDescription("");
        }
      );
    });
  };

  return (
    <Container>
      <form onSubmit={submitPost}>
        <Title
          value={title}
          type="text"
          placeholder="Title of Post"
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr />
        <Description
          value={description}
          placeholder="Write a description here"
          onChange={(e) => setDescription(e.target.value)}
        ></Description>
        {/* <Input type="text" placeholder="Position" />
        <Input type="text" placeholder="Industry" />
        <Input type="text" placeholder="Status" /> */}
        <Submit>Post</Submit>
      </form>
    </Container>
  );
};

export default AddPost;

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  *:focus {
    outline: none;
  }
`;

const Title = styled.input`
  border: none;
  display: inline-block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  width: 97%;
`;

const CloseButton = styled.button`
  display: inline-block;
`;

const Description = styled.textarea`
  border: none;
  display: block;
  font-size: 2vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 7vh;
  resize: none;
  width: 100%;
  font-family: sans-serif;
`;

const Input = styled.input`
  border: none;
  font-size: 20px;
`;

// Modified NewPostButton from ./style.js
const Submit = styled.button`
  background: #175596;
  border-radius: 5px;
  min-height: 30px;
  width: 60px;
  text-align: center;
  /* margin-left: auto; */
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #2071c7;
  }
  &:active {
    transform: scale(0.97);
    transition: 0.1s;
  }
`;
