export interface IQuiz{
    id: number
    question: string
    answer1: string
    answer2: string
    answer3: string
    answer4: string
    goodAnswer: number
    userId: number
}

export const defaultQuiz: IQuiz ={
    id: 0,
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    goodAnswer: 0,
    userId: 0
}

export const allquiz: IQuiz[] = [
    {
        id:1,
        question: "Milyen szinű az alma?",
        answer1: "kék",
        answer2: "barna",
        answer3: "piros",
        answer4: "lila",
        goodAnswer: 3,
        userId: 0
    }
];