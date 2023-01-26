import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Survey } from './survey.entity';
import { SurveyService } from './survey.service';

//PD: uso a segmentação -> separo survey, question, option

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  //OBS: As requisições que estão retornando object, retornam isso por ser o padrão de retorno de query executada

  //show alll surveys
  @Get()
  getAll(): Promise<Array<object>> {
    return this.surveyService.getAllSurveys();
  }

  //Show one survey by id
  @Get(':id')
  getOne(@Param() params): Promise<Survey> {
    return this.surveyService.getSurveyById(params.id);
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
