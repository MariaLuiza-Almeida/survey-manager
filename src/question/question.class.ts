import { InjectRepository } from '@nestjs/typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Repository,
  DataSource,
} from 'typeorm';

@Entity()
export class Question {
  constructor(
    @InjectRepository(Question)
    private questionsRepository: Repository<any>,
    private dataSource: DataSource,
  ) {}

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content: string;

  @Column()
  enabled: boolean;

  @Column()
  surveyId: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

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

  async getQuestionBySurveyId(surveyId: number): Promise<any> {
    return await this.dataSource
      .getRepository(Question)
      .createQueryBuilder('question')
      .where('question.surveyId = :id', { id: surveyId })
      .getMany();
  }

  async createQuestion(question): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values(question)
      .execute();
  }

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
        deletedAt: new Date(),
      })
      .where('question.id = :id', { id: id })
      .execute();
  }
}
