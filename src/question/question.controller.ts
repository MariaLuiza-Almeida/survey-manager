import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Question } from './question.class';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  //show alll questions
  @Get()
  getAll(): Promise<Array<object>> {
    return this.questionService.getAllQuestions();
  }

  //Show one question by id
  @Get(':id')
  getOne(@Param() params): Promise<Question> {
    return this.questionService.getQuestionById(params.id);
  }

  //Create a question
  @Post()
  create(@Body() question: Question): Promise<object> {
    return this.questionService.createQuestion(question);
  }

  //Edit a question
  @Put(':id')
  update(@Param() params, @Body() question: Question): Promise<object> {
    return this.questionService.updateQuestion(params.id, question);
  }

  //Delete a question
  @Delete(':id')
  delete(@Param() params) {
    return this.questionService.deleteQuestion(params.id);
  }
}
