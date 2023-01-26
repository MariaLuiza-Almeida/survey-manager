import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { Survey } from './survey.class';
import { SurveyService } from './survey.service';
import { Question } from 'src/question/question.class';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  exports: [TypeOrmModule],
  controllers: [SurveyController],
  providers: [SurveyService, Survey],
})
export class SurveyModule {}
