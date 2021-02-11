import React, { Fragment, useContext } from "react";
import Navigation from "../navigation";
import { Heading, Text, NewPostButton, BackgroundDiv, MainBody } from "./style";
import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

import { Redirect } from "react-router-dom";

import { AuthenticationContext } from "../../AuthenticationContext";

const MainFeed = () => {
  const [authentication, setAuthentication] = useContext(AuthenticationContext);

  const [showPost, setShowPost] = useState(false);
  const [numPosts, setNumPosts] = useState(1);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John",
      title: "Hive Summer 2021 Internship Positions Now Available!",
      date: "01/03/21",
      description:
        "They have positions for electrical engineering, business, and computer science majors. The deadline to apply is 1/17/21.",
    },
  ]);

  const toggleShowPost = () => {
    if (showPost) {
      setShowPost(false)
    }
    else {
      setShowPost(true)
    }
  }

  if (!authentication.displayName) {
    return (<Redirect to="/login" />);
  }

  return (
    <Fragment>
      <MainBody>
        <Navigation />
        <BackgroundDiv>
        {showPost ? <AddPost numPosts={numPosts} setNumPosts={setNumPosts} setPosts={setPosts} toggleShowPost={toggleShowPost} /> : ''}
          <Heading>
            <Text> Most Recent Posts </Text>
            {showPost ? '' : <NewPostButton onClick={toggleShowPost}>Create New Post</NewPostButton>}
          </Heading>
          {posts.map((post) => (
            <Post
              id={post.id}
              author={post.author}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
        </BackgroundDiv>
      </MainBody>
    </Fragment>
  );
};

export default MainFeed;
