import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './question.class';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  exports: [TypeOrmModule],
  controllers: [QuestionController],
  providers: [QuestionService, Question],
})
export class QuestionModule {}
