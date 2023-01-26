import { Injectable } from '@nestjs/common';
import { Question } from './question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

//tentar, ao final de tudo, exibir a survey toda montada -> no objeto da survey (talvez possa ser u, model separado) ter o question e o option
@Injectable()
export class QuestionService {
  //como o repository é a tabela, tÔ injetando a tabela aqui no service (para que eu possa manipular)
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<any>,
    private dataSource: DataSource,
  ) {}

  //aqui já posso user o find one by
  async getAllQuestions(): Promise<Array<object>> {
    return await this.dataSource
      .getRepository(Question)
      .createQueryBuilder('question')
      .getMany();
  }

  async getQuestionById(id: number): Promise<Question> {
    return await this.dataSource
      .getRepository(Question)
      .createQueryBuilder('question')
      .where('question.id = :id', { id: id })
      .getOne();
  }

  async createQuestion(question): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values(question)
      .execute();
  }

  //prnsei em fazer dessa maneira pq as vezes to no getOne da survey e posso aproveitar o parametro que ja estará na url
  async updateQuestion(id: number, question: Question): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .update(Question)
      .set({
        content: question.content,
        enabled: question.enabled,
        surveyId: question.surveyId,
        updatedAt: new Date(),
      })
      .where('question.id = :id', { id: id })
      .execute();
  }

  async deleteQuestion(id: number) {
    return await this.dataSource
      .createQueryBuilder()
      .update(Question)
      .set({
        enabled: false,
        deleted: true,
        deletedAt: new Date(),
      })
      .where('question.id = :id', { id: id })
      .execute();
  }
}
