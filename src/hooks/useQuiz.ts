"use client"
import { QuizService } from "@/services/quiz.service";
import { Question } from "@/services/quiz.type";
import { useState } from "react";

export function useQuiz() {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1)
    }
    
    const reset = () => {
        setCurrentIndex(0)
        setScore(0)
        setQuestions([])
    }


    const addOnePoint = () => {
        const sc = score + 1
        setScore(sc);
    };

    const getQuestions = async () => {
        setLoading(true)
        try {
            const response = await QuizService.getQuestions();
            if (response) {
                setQuestions(response.results);
            }
        } catch (error) {
            console.error('Error fetching quiz questions:', error);
            return undefined;
        }finally{
            setLoading(false)
        }
    };


    return { questions, getQuestions, score, addOnePoint, currentIndex, handleNext , loading , reset};
}