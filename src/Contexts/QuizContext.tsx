import { createContext, ReactNode, useState } from "react";
import { allquiz, defaultQuiz, IQuiz } from "../untils/QuizUntil";

interface IQuizContext{
    currentUserQuiz: IQuiz[];
}

const defaultQuizContext = {
    currentUserQuiz: [],
  };

export const QuizContext = createContext<IQuizContext>(defaultQuizContext);

export const QuizContextProvider = ({ children }: { children: ReactNode }) => {

  const [currentUserQuiz, setCurrentUserQuiz] = useState<IQuiz[]>(allquiz);



  return (
    <QuizContext.Provider value={{currentUserQuiz}}>
      {children}
    </QuizContext.Provider>
  );
};