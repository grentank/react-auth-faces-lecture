import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { deletePost } from '../../Redux/actions/postActions';

export default function PostItem({ post }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deletePost(post.id));
  };
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <CardBody>
        <CardTitle tag="h5">
          {post.id}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          post
        </CardText>
        <Button onClick={deleteHandler}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}
