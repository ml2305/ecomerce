import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4

import { Modal, Button } from 'react-bootstrap';

const modal = (props) => (
    <Modal show={props.show}>
        <Modal.Header closeButton onClick={props.onOk}>
          <Modal.Title>Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onOk}>Close</Button>
        </Modal.Footer>
    </Modal>
<<<<<<< HEAD
);

modal.propTypes = {
  show : PropTypes.bool,
  onOk : PropTypes.func
}
=======
)
>>>>>>> 8fae074a18eb002d814af1da65e1d401d4c4f0c4

export default modal;
