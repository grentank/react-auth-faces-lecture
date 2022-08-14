import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row } from 'reactstrap';
import { addPosts } from '../../Redux/actions/postActions';
import { userAdd } from '../../Redux/actions/userActions';
import PostItem from '../PostItem/PostItem';

export default function PostPage() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPosts());
  }, []);
  const clickHandler = () => {
    dispatch(userAdd({ id: 2, name: 'Mary' }));
  };
  return (
    <Row>
      {posts.map((el) => <PostItem post={el} key={el.id} />)}
    </Row>
  );
}
