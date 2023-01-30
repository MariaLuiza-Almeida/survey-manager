import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ISurvey } from './ISurvey.interface';
import { Survey } from './survey.class';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}
  @Get()
  getAll(): Promise<Object> {
    return this.surveyService.getAllSurveys();
  }
  @Get(':id')
  getOne(@Param() params): Promise<Survey> {
    return this.surveyService.getSurveyById(params.id);
  }

  @Get('/fullForm/:id')
  getTotalSurvey(@Param() params, @Body() fullForm: ISurvey): Promise<Survey> {
    return this.surveyService.getTotalSurvey(params.id, fullForm);
  }

  @Post()
  create(@Body() survey: Survey): Promise<object> {
    return this.surveyService.createSurvey(survey);
  }

  @Put(':id')
  update(@Param() params, @Body() survey: Survey): Promise<object> {
    return this.surveyService.updateSurvey(params.id, survey);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.surveyService.deleteSurvey(params.id);
  }
}
