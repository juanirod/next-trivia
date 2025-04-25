'use client'

import { useQuiz } from '@/context/QuizContext'
import React, { useEffect, useState } from 'react'
import { CardQuestions } from './components/SectionQuestions'
import { Score } from './components/Score'
import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Page() {
  const { getQuestions, questions, score, currentIndex, loading,reset } = useQuiz()

  useEffect(() => {
    if (questions.length === 0) getQuestions()
  }, [getQuestions, questions.length])

  function resetQuestions () {
    reset()
    getQuestions()
  }


  const currentQuestion = questions[currentIndex]

  const isFinished = questions.length > 0 && currentIndex >= questions.length

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen p-4">
      {questions.length > 0 && !isFinished && !loading && (
        <>
          <Score />
          <CardQuestions
            question={currentQuestion.question}
            correct_answer={currentQuestion.correct_answer}
            incorrect_answers={currentQuestion.incorrect_answers}
          />
        </>
      )}
      {loading && (
        <span className='loader'></span>
      )}
      {isFinished && (
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-4">🎉 ¡Quiz terminado!</h2>
          <p className="text-xl">Puntaje: {score} / {questions.length}</p>
          <Button onClick={resetQuestions} className='bg-blue-500 mt-2 rounded-lg hover:bg-blue-400 transition-all px-4 py-2'>Comenzar de nuevo</Button>
        </div>
      )}
    </div>
  )
}
