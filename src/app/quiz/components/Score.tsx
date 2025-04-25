"use client"
import { useQuiz } from '@/context/QuizContext'
import React from 'react'

export const Score = () => {
    const { score } = useQuiz()
    return (
        <div className='bg-blue-700 font-bold text-sm rounded-full px-4 py-2'>Puntaje: {score}</div>
    )
}
