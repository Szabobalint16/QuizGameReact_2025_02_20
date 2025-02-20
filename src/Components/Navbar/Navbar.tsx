import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { Button } from "@mui/material";


function Navbar() {
const {isLoggedIn, logout, currentUser} = useContext(UserContext);
  const navigate = useNavigate();
  function logoutUser() {
    logout();
    navigate("/");
  }

  return isLoggedIn ? (
    <div className="bg-orange-400 h-12 w-full flex flex-row flex-nowrap;">
      <div className='w-1/2 flex flex-row ms-4 flex-nowrap justify-start items-center'>
        <p>{currentUser?.username}</p>
      </div>
      <div className='w-1/2 flex flex-row flex-nowrap justify-end items-center  mx-2'>
				<Button onClick={logoutUser}>Log out</Button>
			</div>
    </div>
  ) : (
    <div className="py-2 bg-orange-400 ps-4">
      <Link to={"/"}><Button>Belépés</Button></Link>
      <Link to={"/regist"}><Button>Regisztrálás</Button></Link>
    </div>
  );
}

export default Navbar;
