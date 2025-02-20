import { Link } from "react-router-dom";
import { allquiz, defaultQuiz, IQuiz } from "../../untils/QuizUntil";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function QuizAddPage() {
  const [quitAdd, setQuitAdd] = useState<IQuiz>(defaultQuiz);
  function handleAddQuiz(){
    
    if (
      quitAdd.question != "" &&
      quitAdd.answer1 != "" &&
      quitAdd.answer2 != "" &&
      quitAdd.answer3 != "" &&
      quitAdd.answer4 != "" &&
      quitAdd.goodAnswer != 0
    ) {
      console.log(allquiz);
      
      allquiz.push(quitAdd);
      console.log(allquiz);
    }
  }

  return (
    <div className="text-center mt-30">
      <div>
        <TextField 
          type="text"
          placeholder="Kérdés..."
          onChange={(e) => setQuitAdd({ ...quitAdd, question: e.target.value })}
        />
        <br />
        <br />

        <div>
          <TextField
            type="text"
            placeholder="Első Válasz"
            onChange={(e) =>
              setQuitAdd({ ...quitAdd, answer1: e.target.value })
            }
          />
          <br />
          <br />

          <TextField
            type="text"
            placeholder="Második Válasz:"
            onChange={(e) =>
              setQuitAdd({ ...quitAdd, answer2: e.target.value })
            }
          />
          <br />
          <br />

          <TextField
            type="text"
            placeholder="Harmadik Válasz:"
            onChange={(e) =>
              setQuitAdd({ ...quitAdd, answer3: e.target.value })
            }
          />
          <br />
          <br />

          <TextField
            type="text"
            placeholder="Negyedik Válasz:"
            onChange={(e) =>
              setQuitAdd({ ...quitAdd, answer4: e.target.value })
            }
          />
          <br />
          <br />

          <TextField
            placeholder="Hanyas Válasz a helyes válasz (1 - 4)"
            type="number"
            onChange={(e) =>
              setQuitAdd({ ...quitAdd, goodAnswer: parseInt(e.target.value)  })
            }
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-5 mt-5">
        <Button onClick={handleAddQuiz} variant="outlined"> Add </Button>
        <Link to={"/home"}>
          <Button variant="outlined">Vissza</Button>
        </Link>
      </div>
    </div>
  );
}

export default QuizAddPage;
