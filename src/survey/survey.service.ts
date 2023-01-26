import { Injectable } from '@nestjs/common';
import { Survey } from './survey.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Question } from 'src/question/question.entity';

//tentar, ao final de tudo, exibir a survey toda montada -> no objeto da survey (talvez possa ser u, model separado) ter o question e o option
@Injectable()
export class SurveyService {
  //como o repository é a tabela, tÔ injetando a tabela aqui no service (para que eu possa manipular)
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<any>,
    private dataSource: DataSource,
  ) {}

  async getAllSurveys(): Promise<Array<object>> {
    return await this.dataSource
      .getRepository(Survey)
      .createQueryBuilder('survey')
      .getMany();
  }

  async getSurveyById(id: number): Promise<Survey> {
    return await this.dataSource
      .getRepository(Survey)
      .createQueryBuilder('survey')
      .where('survey.id = :id', { id: id })
      .getOne();
  }

  async createSurvey(survey): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Survey)
      .values(survey)
      .execute();
  }

  //prnsei em fazer dessa maneira pq as vezes to no getOne da survey e posso aproveitar o parametro que ja estará na url
  async updateSurvey(id: number, survey: Survey): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .update(Survey)
      .set({
        title: survey.title,
        about: survey.about,
        enabled: survey.enabled,
        updatedAt: new Date(),
      })
      .where('survey.id = :id', { id: id })
      .execute();
  }

  async deleteSurvey(id: number) {
    return await this.dataSource
      .createQueryBuilder()
      .update(Survey)
      .set({
        enabled: false,
        deleted: true,
        deletedAt: new Date(),
      })
      .where('survey.id = :id', { id: id })
      .execute();
  }
}
