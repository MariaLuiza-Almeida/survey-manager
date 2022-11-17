import { Injectable } from '@nestjs/common';
import { Survey } from './survey.model';

@Injectable()
export class SurveyService {
  public surveys: Array<Survey> = [
    {
      id: 1,
      title: 'Survey 1',
      about: 'Breve Descrição',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Survey 2',
      about: 'Breve Descrição',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Survey 3',
      about: 'Breve Descrição',
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAllSurveys(): Array<Survey> {
    return this.surveys;
  }
}
