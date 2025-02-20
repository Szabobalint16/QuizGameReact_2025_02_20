import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

function LoginPage() {
    const {login, isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate()
    const [loginUser, setLoginUser] = useState<{username: string; password: string}>({username: "", password: ""})
    function handlelogin(){
        login(2, loginUser.username, loginUser.password)
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
        }
    }, [isLoggedIn])

  return (
    <div className="flex flex-col w-100 justify-center mx-auto mt-50">
        <TextField type="text" placeholder="Username..." onChange={(e) => setLoginUser({...loginUser, username: e.target.value})}/> <br />
        <TextField type="password" placeholder="Password..." onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}/> <br/>

        <Button onClick={handlelogin} variant="contained">Sign Up</Button>
    </div>
  )
}

export default LoginPage
