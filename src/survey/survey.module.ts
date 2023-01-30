import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { Survey } from './survey.class';
import { SurveyService } from './survey.service';
import { Question } from 'src/question/question.class';
import { QuestionModule } from 'src/question/question.module';
import { OptionModule } from 'src/option/option.module';
import { Option } from 'src/option/option.class';
import { ISurvey } from './ISurvey.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Survey]), QuestionModule, OptionModule],
  exports: [TypeOrmModule],
  controllers: [SurveyController],
  providers: [SurveyService, Survey, Question, Option],
})
export class SurveyModule {}
