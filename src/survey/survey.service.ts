import { Injectable } from '@nestjs/common';
import { ISurvey } from './ISurvey.interface';
import { Survey } from './survey.class';
@Injectable()
export class SurveyService {
  constructor(public survey: Survey) {}

  async getAllSurveys() {
    return this.survey.getAllSurveys();
  }

  async getSurveyById(id: number): Promise<Survey> {
    return this.survey.getSurveyById(id);
  }

  async getTotalSurvey(id: number, fullForm: ISurvey): Promise<Survey> {
    return this.survey.getTotalSurveyForm(id, fullForm);
  }

  async createSurvey(survey): Promise<object> {
    return this.survey.createSurvey(survey);
  }

  async updateSurvey(id: number, survey: Survey): Promise<object> {
    return this.survey.updateSurvey(id, survey);
  }

  async deleteSurvey(id: number) {
    return this.survey.deleteSurvey(id);
  }
}
