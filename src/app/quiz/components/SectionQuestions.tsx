"use client"
import { Button } from '@/components/Button';
import { useQuiz } from '@/context/QuizContext';
import React, { useMemo, useState } from 'react'

interface CardQuestionsProps {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface AnswerOption {
    text: string
    isCorrect: boolean
}


export const CardQuestions = ({
    question,
    correct_answer,
    incorrect_answers,
}: CardQuestionsProps) => {
    const { addOnePoint, handleNext } = useQuiz()
    const [selected, setSelected] = useState<string | null>(null)

    const shuffledAnswers: AnswerOption[] = useMemo(() => {
        const allAnswers: AnswerOption[] = [
            { text: correct_answer, isCorrect: true },
            ...incorrect_answers.map(ans => ({ text: ans, isCorrect: false }))
        ]

        // Shuffle estilo Fisher-Yates
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = allAnswers[i];
            allAnswers[i] = allAnswers[j];
            allAnswers[j] = temp;
        }

        return allAnswers
    }, [correct_answer, incorrect_answers])


    const handleClick = (answer: AnswerOption) => {
        setSelected(answer.text)
        if (answer.isCorrect) {
            addOnePoint()
            console.log('✅ Correcta')

        } else {
            console.log('❌ Incorrecta')
        }
        setTimeout(() => {
            handleNext()
            setSelected(null)
        }, 1000)
    }

    return (
        <div className='max-w-sm border w-full rounded-lg flex flex-col gap-2 px-4 py-4'>
            <h2>{question}</h2>
            {shuffledAnswers.map((ans, index) => (
                <Button
                    key={index}
                    onClick={() => handleClick(ans)}
                    disabled={!!selected} // desactivar después de seleccionar
                    className={`p-2 rounded border 
                    ${selected ? ans.text === correct_answer ? 'bg-green-500 text-white'
                            : ans.text === selected ? 'bg-red-500 text-white' : 'bg-red-500'
                            : 'bg-blue-500 hover:bg-blue-400'}`}
                >
                    {/* 
                                if (selected) {
                                    if (ans.text === correct_answer) {
                                        return 'bg-green-500 text-white'
                                    } else if (ans.text === selected) {
                                        return 'bg-red-500 text-white'
                                    } else {
                                        return 'bg-red-500'
                                    }
                                } else {
                                return 'bg-blue-500 hover:bg-blue-400'
                                } */}

                    {ans.text}
                </Button>
            ))}


        </div>
    )
}
