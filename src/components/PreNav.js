import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PreNav = () => {
  return (
    <div className="pre-nav">
      <Container>
        <Row>
          <Col className="text-center py-4">
            <span>Welcome to Cafe Coffee Day!</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PreNav;
