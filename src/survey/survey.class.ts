import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from 'src/option/option.class';
import { Question } from 'src/question/question.class';
import { ISurvey } from './ISurvey.interface';
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
    private question: Question,
    private option: Option,
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

  async getTotalSurveyForm(id: number, fullForm: ISurvey): Promise<any> {
    this.getSurveyById(id).then((res) => {
      fullForm.surveyName = res.title;
    });
    this.question.getQuestionBySurveyId(id).then((result) => {
      fullForm.surveyQuestions = result;
      result.forEach((question) => {
        this.option.getOptionByQuestionId(question.id).then((options) => {
          fullForm.QuetionsOption = options;
        });
      });
    });

    return fullForm;
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
