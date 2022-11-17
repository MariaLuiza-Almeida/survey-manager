import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';

@Module({
  imports: [],
  controllers: [AppController, SurveyController],
  providers: [AppService, SurveyService],
})
export class AppModule {}

//estou optando, por enquanto, a usar o module geral para a minha aplicação
