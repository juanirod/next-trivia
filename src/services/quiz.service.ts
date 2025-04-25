import { api } from "@/lib/api";
import { Quiz } from "./quiz.type";

export class QuizService {
  static async getQuestions():Promise<Quiz | undefined> {
    try{
        const response = await api.get('/api.php?amount=2&type=boolean')
        return response.data;
    }catch(e){
        console.error(e);
        return undefined;
    }
  }
}   