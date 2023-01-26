import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { Survey } from 'src/survey/survey.entity';
import { Option } from 'src/option/option.entity';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Form } from './form.entity';
import { SurveyService } from 'src/survey/survey.service';
import { QuestionService } from 'src/question/question.service';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    @InjectRepository(Survey)
    @InjectRepository(Question)
    @InjectRepository(Option)
    private formRepository: Repository<any>,
    private dataSource: DataSource,
    private surveyService: SurveyService,
    private questionService: QuestionService,
  ) {}

  async getFormById(id: number): Promise<any> {
    const formSurvey = this.surveyService.getSurveyById(id);
  }
}
