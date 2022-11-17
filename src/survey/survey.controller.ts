import { Controller, Get } from '@nestjs/common';
import { Survey } from './survey.model';
import { SurveyService } from './survey.service';

//PD: uso a segmentação -> separo survey, question, option
//PD: uso a injeção de dependencias

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  //show alll surveys
  @Get()
  getAll(): Array<Survey> {
    return this.surveyService.getAllSurveys();
  }
}
