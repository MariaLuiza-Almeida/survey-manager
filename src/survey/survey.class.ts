import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/question.class';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  DataSource,
  Repository,
} from 'typeorm';

@Injectable()
@Entity()
export class Survey {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<any>,
    private dataSource: DataSource,
  ) {}

  @PrimaryGeneratedColumn()
  @OneToMany(() => Question, (question) => question.surveyId)
  id?: number;

  @Column()
  title: string;

  @Column()
  about: string;

  @Column()
  enabled: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

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

  async getTotalSurveyForm(id: number): Promise<any> {
    return await this.dataSource
      .getRepository(Survey)
      .createQueryBuilder('survey')
      .leftJoinAndSelect('question.surveyId', 'question')
      .where('survey.id = :id', { id: id })
      .getMany();
  }

  async createSurvey(survey): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Survey)
      .values(survey)
      .execute();
  }

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
        deletedAt: new Date(),
      })
      .where('survey.id = :id', { id: id })
      .execute();
  }
}
