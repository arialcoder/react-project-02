import Toast from 'react-bootstrap/Toast';

export default function MyToast( props ) {
  return (
    <Toast bg={props.variant}>
      <Toast.Header>
        {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
        <strong className="me-auto">Netflix</strong>        
      </Toast.Header>
      <Toast.Body> { props.toast } </Toast.Body>
    </Toast>
  );
}