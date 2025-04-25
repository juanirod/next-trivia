"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz App</h1>
        <p className="text-lg mb-8">Test your knowledge with our quiz!</p>
        <Link className="bg-blue-500 rounded-lg px-4 py-2" href={'/quiz'}>
          <span className="font-bold">Start Quiz</span>
        </Link>
      </div>

    </div>
  );
}
