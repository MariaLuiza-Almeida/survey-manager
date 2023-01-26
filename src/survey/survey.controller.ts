import {
  Body,
  ConsoleLogger,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import console from 'console';
import { Survey } from './survey.class';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  //show alll surveys
  @Get()
  getAll(): Promise<Object> {
    return this.surveyService.getAllSurveys();
  }
  @Get(':id')
  getOne(@Param() params): Promise<Survey> {
    return this.surveyService.getSurveyById(params.id);
  }

  @Get('/fullForm/:id')
  getTotalSurvey(@Param() params): Promise<Survey> {
    return this.surveyService.getTotalSurvey(params.id);
  }

  //Create a survey
  @Post()
  create(@Body() survey: Survey): Promise<object> {
    return this.surveyService.createSurvey(survey);
  }

  //Edit a Survey
  @Put(':id')
  update(@Param() params, @Body() survey: Survey): Promise<object> {
    return this.surveyService.updateSurvey(params.id, survey);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.surveyService.deleteSurvey(params.id);
  }
}
