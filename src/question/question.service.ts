import { Injectable } from '@nestjs/common';
import { Question } from './question.class';

@Injectable()
export class QuestionService {
  constructor(public question: Question) {}

  async getAllQuestions(): Promise<Array<object>> {
    return this.question.getAllQuestions();
  }

  async getQuestionById(id: number): Promise<Question> {
    return this.question.getQuestionById(id);
  }

  async getQuestionBySurveyId(surveyId: number): Promise<Question> {
    return this.question.getQuestionBySurveyId(surveyId);
  }

  async createQuestion(question): Promise<object> {
    return this.question.createQuestion(question);
  }

  async updateQuestion(id: number, question: Question): Promise<object> {
    return this.question.updateQuestion(id, question);
  }

  async deleteQuestion(id: number) {
    return this.question.deleteQuestion(id);
  }
}
