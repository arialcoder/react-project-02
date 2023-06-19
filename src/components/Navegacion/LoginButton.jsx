import Button from "react-bootstrap/Button";
import Link from "next/link"
const LoginButton = () => {

    return (
        <>
            <Link href='/' passHref>
                <Button
                    className="rojo"
                    variant="danger" size="sm"
                >
                    Iniciar sesión
                </Button>
            </Link>
        </>
    )

}

export default LoginButton;