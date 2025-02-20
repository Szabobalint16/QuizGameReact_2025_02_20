import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-20">Köszöntelek a Quit Parkban ahol kitöltheted a mások és/vagy saját quizeidet!!!</h1>
      <p className="text-base mb-5">Kérem válasszon a két lehetőség közül:</p>
      <div className=" flex gap-4 justify-center">
        <Link to={"/quizadd"}><Button variant="outlined">Quiz HOZZÁADÁSA</Button></Link>
        <Link to={"/quizview"}><Button variant="outlined">Quizek KITÖLTÉSE</Button></Link>
      </div>
    </div>
  )
}

export default HomePage