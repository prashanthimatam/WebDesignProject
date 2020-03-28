import React from "react";
import { Typography } from "@material-ui/core";
const BlogPost = props => {
  const { post } = props;
  return (
    <div>
      <Typography variant="h3">Heading</Typography>
      <Typography variant="subtitle2" gutterBottom>
        March 2020
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam
        id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
        malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </Typography>
    </div>
  );
};
export default BlogPost;
