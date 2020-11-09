import React, { Fragment } from "react";
import styled from "styled-components";
import Avatar from "@atlaskit/avatar";

import Comment, {
  CommentAction,
  CommentAuthor,
  CommentEdited,
  CommentTime
} from "@atlaskit/comment";
const Wrapper = styled.div`
  min-width: 200px;
  max-width: 300px;
  min-height: 200px;
`;

export default function Issue() {
  return (
    <Fragment>
      <Wrapper>
        <Comment
          author={<CommentAuthor>John Smith</CommentAuthor>}
          type="author"
          time={<CommentTime>30 August, 2016</CommentTime>}
          content={
            <p>
              Content goes here. This can include <a href="/link">links</a> and
              other content.
            </p>
          }
        />
      </Wrapper>
    </Fragment>
  );
}
