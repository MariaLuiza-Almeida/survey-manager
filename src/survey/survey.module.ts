import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { Survey } from './survey.entity';
import { SurveyService } from './survey.service';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  exports: [TypeOrmModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
