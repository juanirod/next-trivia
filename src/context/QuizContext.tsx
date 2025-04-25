"use client"
import React, { createContext, useContext } from 'react';
import { useQuiz as useQuizHook } from '@/hooks/useQuiz';
const QuizContext = createContext<ReturnType<typeof useQuizHook> | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = useQuizHook();
    return <QuizContext.Provider value={auth}>{children}</QuizContext.Provider>;
};


export const useQuiz = () => {  
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz debe usarse dentro de un QuizProvider');
    }
    return context;
};
