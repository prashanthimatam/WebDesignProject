import React from "react";
import "./blog.styles.css";
import { Grid, Container } from "@material-ui/core";
import BlogHeader from "./BlogSubComponents/blogheader.component";
import MainFeaturedPost from "./BlogSubComponents/mainFeaturedPost.component";
import FeaturedPost from "./BlogSubComponents/featuredPost.component";
// import BlogPost from "./BlogSubComponents/BlogPost.component";
import CreatePost from "./BlogSubComponents/createPostButton.component";
import Post from "./BlogSubComponents/post.component";
import SideBar from "./BlogSubComponents/sidebar.component";
const Blog = (props) => {
  return (
    <Container className="container" maxWidth="lg">
      <BlogHeader />
      <MainFeaturedPost />
      <Grid container direction="row" spacing={4}>
        <FeaturedPost />
        <FeaturedPost />
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={8}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <CreatePost />
            </Grid>
            <Grid item>
              <Post />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Blog;