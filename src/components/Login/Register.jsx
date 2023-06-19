import { useState, useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";
import { useRouter } from 'next/router'
import { appFirebase } from "../../firebase/initConfigNew"
import { getAuth,  createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';


const Register = () => {
 
  const { state, dispatch } = useContext(MainContextState);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({});
  const router = useRouter()

const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;      
    const email= form.emailRegister.value
    const nombre= form.nombre.value
    const pass= form.passRegister.value
    const pass2= form.passRegister2.value
    console.log(email)

    ///// valida el correo
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let test = reg.test(email);
    if(!test) {
      setShowMessage(true)
      setMessage({mensaje:'correo inválido'})
      return
    }
////valida el nombre de usuario
    if( nombre.length < 4) {
      setShowMessage(true)
      setMessage({mensaje:'nombre de usuario inválido'})
      return
    }

////valida la contraseña
    if( pass.length < 6) {
      setShowMessage(true)
      setMessage({mensaje:'contraseña inválida'})
      return
    }
    if ( pass!=pass2) {
      setShowMessage(true)
      setMessage({mensaje:'las contraseñas no coinciden'})
      return
    }

    registerUser(email, nombre, pass)
}

  function registerUser(email, nombre, password) {
    //console.log("Estoy invocando la funcion submit...")
    
    const auth = getAuth(appFirebase);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
     })
    .then(()=>{
       updateProfile(  auth.currentUser,{
          displayName: nombre
            }).then(() => {              
              console.log("nombre actualizado")
              // ...
            }).catch((error) => {
            console.log("se produjo un error", error)
            // ...
        });
      })
      .then(()=>{
        dispatch({ type: "LOGIN" });
        dispatch({ type: "SETUSERNAME", username: nombre });
      })
      .then(()=>router.push('/home'))
      
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      if (errorCode=='auth/email-already-in-use'){
        setShowMessage(true)
        setMessage({mensaje:'usuario ya registrado'})
      }
    });
}
  
  if (state.isLoggedIn) {
    return (
      <>
        <div className="p-5 text-center vh-80">
          <h1>ACTUALMENTE ESTAS LOGUEADO</h1>
        </div>
      </>
    );
  }

  return (
    <div className="row pantalla__login p-5">
      <div className="col-7">
        <img src="./Netflix.png" alt="Imagen Titulo de Netflix" />
      </div>
      <Container className="col-5 py-2 container__login rounded border border-danger">
      { 
      showMessage &&
        <Alert variant="danger" onClose={() => setShowMessage(false)} dismissible>
        <Alert.Heading>Error</Alert.Heading>
        <p>
          {message.mensaje}
        </p>
      </Alert>
      }
        <Form className="p-3 formulario__login" onSubmit={handleSubmit}>
          <h2 className="mb-4">Ingresa tus datos</h2>
          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="email"
              name="emailRegister"
              id="emailRegister"
              placeholder="Ingrese un email"
              defaultValue={router.query.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="text"
              name="nombre"
              id="nombre"
              placeholder="ingresa tu nombre"
              
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="password"
              name="passRegister"
              id="passRegister"
              placeholder="Contraseña"
              
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="password"
              name="passRegister2"
              id="passRegister2"
              placeholder="Repite tu contraseña"
              
            />
          </Form.Group>

          <div className=" ">
            <Button
              className="container w-50 rojo text-white"
              variant=""
              type="submit"              
             
            >
              Registrame
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
