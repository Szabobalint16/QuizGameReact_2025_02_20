import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../Contexts/QuizContext";
import { allUsers } from "../../untils/UserUntil";
import { IQuiz } from "../../untils/QuizUntil";
import { UserContext } from "../../Contexts/UserContext";
import { Button, TextField } from "@mui/material";

function QuizViewPage() {
  const { currentUserQuiz } = useContext(QuizContext);
  const { add, currentUser } = useContext(UserContext);
  useEffect(() => {
    currentUserQuiz.forEach((element: IQuiz) => {
      //console.log(element.question);
    });
  }, [currentUserQuiz]);

  const [inputanswer, setInputAnswer] = useState<number>(0);
  
  

  function handleSend(){
    
    currentUserQuiz.forEach((element: IQuiz, index: number) => {
      if (index === element.id && inputanswer === element.goodAnswer) {
        add(0, currentUser?.userId as number);
      }
    });
  }

  return (
    <div className="text-center mt-30">
      {currentUserQuiz.map((element, index) => (
        <div key={index}>
          <h2 className="text-2xl mb-3">{element.question}</h2>
          <ol className="my-4">
            <li>1. {element.answer1}</li>
            <li>2. {element.answer2}</li>
            <li>3. {element.answer3}</li>
            <li>4. {element.answer4}</li>
          </ol>
          <TextField type="number" onChange={(e) => setInputAnswer(parseInt(e.target.value))}/>
        </div>
      ))}

      <div className="flex flex-row justify-center gap-5 mt-5">
        <Button variant="outlined" onClick={handleSend}>Ellenőrzés</Button>
        <Link to={"/home"}>
          <Button variant="outlined">Vissza</Button>
        </Link>
      </div>
    </div>
  );
}

export default QuizViewPage;
