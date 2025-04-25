import { QuizProvider } from '@/context/QuizContext'
import React from 'react'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QuizProvider>
      {children}
    </QuizProvider>
  )
}
