import { useState, useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";
import { useRouter } from 'next/router'
import { appFirebase } from "../../firebase/initConfigNew"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import SocialLogin from "./SocialLogin";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import MyToast from "../Toast/toast";



const Login = () => {
   const [email, setEmail] = useState();
  // const [pass, setPass] = useState();
  const { state, dispatch } = useContext(MainContextState);
  const [showMessage, setShowMessage] = useState(false);
  const [correoInvalido, setCorreoInvalido] = useState(false);
  const [passInvalido, setPassInvalido] = useState(false);
  
  
  const router = useRouter()

  function submitFunction(event) {  
    event.preventDefault();
    const form = event.currentTarget;
    const emailLogin= form.email.value
    setEmail(form.email.value)
    const pass= form.pass.value
   
    ///// valida el correo
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let test = reg.test(emailLogin);
    if(!test) {
      setCorreoInvalido(true)
      return
    }

////valida la contraseña
    if( pass.length < 6) {
      setPassInvalido(true)
      return
    }
///// autentica el usuario en firebase
    const auth = getAuth(appFirebase);
      signInWithEmailAndPassword(auth, emailLogin, pass)
        
        .then((credentials) => {
          const user = credentials.user;
          dispatch({ type: "LOGIN" });
          dispatch({ type: "SETUSERNAME", username: user.displayName });        
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage)
          if (errorCode == "auth/user-not-found") {           
            //no existe el usuario - sugiere registrarse
            setShowMessage(true)
          }
          if (errorCode == "auth/wrong-password") {           
            //contraseña Incorrecta
            setPassInvalido(true)
          }

        })
  }

  
  if (state.isLoggedIn) {
    router.push('/home')
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
            <Alert.Heading>Cuenta inexistente!</Alert.Heading>
            <p>
              ¿Deseas registrarte ahora?
            </p>
            <Button onClick={() => router.push({
              pathname: '/registro',
              query: { email:email },
            })} variant="outline-danger">
              Registarme
            </Button>
          </Alert>
        }

    { correoInvalido && <MyToast toast='Ingrese un correo válido' variant='danger'/>}
    { passInvalido && <MyToast toast='la cotraseña no es válida' variant='danger'/>}
    
        <Form className="p-3 formulario__login" onSubmit={(e) => submitFunction(e)} >
          <h2 className="mb-4">Inicia Sesión</h2>
          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese un email"
              onChange={(e) => setCorreoInvalido(false)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="my-3 p-2"
              required
              type="password"
              name="pass"
              id="pass"
              placeholder="Contraseña"
              onChange={(e) => setPassInvalido(false)}
            />
          </Form.Group>

          <div className=" ">
            <Button
              className="container w-50 rojo text-white"
              variant=""
              type="submit"              
            >
              Iniciar sesión
            </Button>
            </div>
            <div>
            <SocialLogin></SocialLogin>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;

