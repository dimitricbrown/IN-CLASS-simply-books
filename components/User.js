import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function User({ userObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={userObj.photoURL} alt={userObj.displayName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{userObj.displayName}</Card.Title>
        <Card.Text>
          {userObj.email}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Last Sign In: {userObj.metadata.lastSignInTime}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }).isRequired,
};
