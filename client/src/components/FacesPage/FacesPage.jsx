import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

export default function FacesPage() {
  const [img, setImg] = useState('');
  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios.get('/faces')
        .then((res) => setImg(res.data.imgs));
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [img]);
  return (
    <Row>
      <Col>
        <img src={img} alt="happy faces" height={300} />
      </Col>
    </Row>
  );
}
