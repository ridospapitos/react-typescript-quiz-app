import React, { useEffect, useMemo, useRef, useState } from 'react'
import s from './GameScreen.module.css'

interface onGameEnd {
    onGameEnd: () => void;
    giveScore: (score: number) => void;
}

const GameScreen = ( { onGameEnd, giveScore }: onGameEnd ) => {

    interface Question {
        id: string,
        title: string,
        answers: string,
        correct: string,
    }

    let QUESTIONS = useRef<Question[]>([])
    let [question, setQuestion] = useState(0)

    const [time, setTime] = useState(60)
    const timeRef = useRef<number | undefined>(undefined)

    const [isAnswered, setisAnswered] = useState(false)
    let correctAnswer = useRef<string | undefined>(undefined)

    const shuffledIndexes = useMemo(() => {
        return [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    }, [question])

    let userPointsRef = useRef<number>(0)

    const handleAnswer = (answer: string, question: number) => {
        if (isAnswered) return

        setisAnswered(true)
        isCorrect(answer, question)
    }

    async function getQ() {
        try {
        const resp = await fetch("http://localhost:3000/questions")
        const data = await resp.json()
        QUESTIONS.current = data
        } catch(err) {
        console.log(err)
        }
    }

    const startTimer = () => {
        if (timeRef.current) return 

        timeRef.current = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timeRef.current)
        timeRef.current = undefined
    }

    const nextQuestion = () => {
        getAnswers(question)
        setisAnswered(false)
        setQuestion(prev => prev + 1)
        setTime(60)
    }

    const getAnswers = (question: number) => {
        const Answers: string | undefined = QUESTIONS.current[question]?.answers
        if (!Answers) return []
        return Answers.split(', ')
    }

    const isCorrect = (answer: string, question: number) => {
        correctAnswer.current = QUESTIONS.current[question]?.correct
        if (!correctAnswer) return
        if (answer === correctAnswer.current) {
            setTimeout(() => {
                userPointsRef.current += 1
                nextQuestion()
            }, 2000)
        } else {
            setTimeout(() => {
                nextQuestion()
            }, 2000)
        }
        
    }

    useEffect(() => {
        getQ()
        startTimer()

        return () => {
            if (timeRef.current) stopTimer()
        }
    }, [])

    const isTimeOver = () => {
        if (time >= 1) {
            return
        } else {
            nextQuestion()
        }
    }
    useEffect(() => {
        isTimeOver
    }, [time])

    const isGameOver = () => {
        if (question <= 9) return
        
        onGameEnd()
        giveScore(userPointsRef.current)
    }
    useEffect(() => {
        isGameOver()
    }, [question])


    const QuestionTemplate = (i: number) => {
        if (QUESTIONS.current.length === 0) return

        return (
            <button 
            className={`${isAnswered ? (getAnswers(question)?.[i] === correctAnswer.current ? s.correct : s.wrong) : s.QuestionBtn}`} 
            onClick={(event) => {handleAnswer(event.currentTarget.textContent, question)}}
            >{getAnswers(question)?.[i] || ''}
            </button>
        )
    }

    return (
        <div className={s.Wrapper}>
            <p>{time}</p>
            <h1 className={s.Title}>{QUESTIONS.current[question]?.title || 'Loading...'}</h1>
            {shuffledIndexes.map((index) => (
                    <React.Fragment key={index}>
                        {QuestionTemplate(index)}
                    </React.Fragment>
            ))}
        </div>
    )
}

export default GameScreen