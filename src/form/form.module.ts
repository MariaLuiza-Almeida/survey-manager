import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from 'src/question/question.module';
import { QuestionService } from 'src/question/question.service';
import { SurveyModule } from 'src/survey/survey.module';
import { SurveyService } from 'src/survey/survey.service';
import { FormController } from './form.controller';
import { Form } from './form.entity';
import { FormService } from './form.service';

@Module({
  imports: [TypeOrmModule.forFeature([Form]), SurveyModule, QuestionModule],
  exports: [TypeOrmModule],
  controllers: [FormController],
  providers: [FormService, SurveyService, QuestionService],
})
export class FormModule {}
