import Modal from 'react-bootstrap/Modal';

export default function Contact(
  {show, hide}:{show:boolean, hide:any}
){
  return(
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <h3>Contact</h3>
      </Modal.Header>
      <Modal.Body>
        <p>Hello</p>
      </Modal.Body>
      <Modal.Footer>
        <button>Done</button>
      </Modal.Footer>
    </Modal>
  )
}