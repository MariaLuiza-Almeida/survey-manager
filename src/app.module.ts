import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './survey/survey.class';
import { DataSource } from 'typeorm';
import { SurveyModule } from './survey/survey.module';
import { Question } from './question/question.class';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { OptionController } from './option/option.controller';
import { OptionService } from './option/option.service';
import { Option } from './option/option.class';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'estopa',
      database: 'surveymanager',
      entities: [Survey, Question, Option],
      synchronize: true,
    }),
    SurveyModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [
    AppController,
    SurveyController,
    QuestionController,
    OptionController,
  ],
  providers: [
    AppService,
    SurveyService,
    QuestionService,
    OptionService,
    Survey,
    Question,
    Option,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
