
import { useContext } from 'react';
import { MainContextState } from "../context/MainContextProvider";
import Button from 'react-bootstrap/Button';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { appFirebase } from "@/firebase/initConfigNew";

const SocialLogin = () => {
  const { state, dispatch } = useContext(MainContextState);

  const googleProvider = new GoogleAuthProvider();

  function doLogin() {
    const auth = getAuth(appFirebase);
    signInWithPopup(auth, googleProvider)
      .then((credentials) => {
        const user = credentials.user;
        console.log("El usuario es ", user);
        dispatch({ type: "LOGIN" });
        dispatch({ type: "SETUSERNAME", username: user.displayName });  
        router.push('/home') 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    // <Button variant="warning" onClick={() => doLogin()}>Login with Google</Button>


 <Button
  variant="contained"
 color="primary"
 onClick={() => doLogin()}
>
 <img
   width="20px"
   style={{ marginBottom: "3px", marginRight: "5px" }}
   alt="Google sign-in"
   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
 />
 Ingresar con Google
</Button>


  );
};

export default SocialLogin;
