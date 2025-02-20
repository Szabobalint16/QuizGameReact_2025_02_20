import { useState } from "react"
import { allUsers, defaultRegisterUser, IRegisterUser } from "../../untils/UserUntil"
import { Button, TextField } from "@mui/material";

function RegiszPage() {
  const [newUser, setNewUser] = useState<IRegisterUser & {passWordAgain: string}>({...defaultRegisterUser, passWordAgain: ""})
  function handleRegist() {
    if 
    (
        newUser.username.length >= 4 &&
        newUser.password.length >= 8 &&
        newUser.passWordAgain === newUser.password &&
        !allUsers.find((u) => {return u.username === newUser.username})
    ) 
    {
        console.log(newUser);
        allUsers.push(newUser);
        console.log(allUsers);
        
    }
  }
   return (
    <div className="flex flex-col w-100 justify-center mx-auto mt-50">
        <TextField type="text" placeholder="Username..." onChange={(e) => setNewUser({...newUser, username: e.target.value})}/> <br />
        <TextField type="password" placeholder="Password..." onChange={(e) => setNewUser({...newUser, password: e.target.value})}/><br />
        <TextField type="passwordagain" placeholder="Password Again..." onChange={(e) => setNewUser({...newUser, passWordAgain: e.target.value})}/><br />

        <Button onClick={handleRegist} variant="contained">Register</Button>
    </div>
    )
}

export default RegiszPage
