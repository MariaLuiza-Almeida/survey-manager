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
export class Option {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<any>,
    private dataSource: DataSource,
  ) {}

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content: string;

  @Column()
  enabled: boolean;

  @Column()
  questionId: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  async getAllOptions(): Promise<Array<object>> {
    return await this.dataSource
      .getRepository(Option)
      .createQueryBuilder('option')
      .getMany();
  }

  async getOptionById(id: number): Promise<Option> {
    return await this.dataSource
      .getRepository(Option)
      .createQueryBuilder('option')
      .where('option.id = :id', { id: id })
      .getOne();
  }

  async getOptionByQuestionId(questionId: number): Promise<any> {
    return await this.dataSource
      .getRepository(Option)
      .createQueryBuilder('option')
      .where('option.questionId = :id', { id: questionId })
      .getMany();
  }

  async createOption(option): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Option)
      .values(option)
      .execute();
  }

  async updateOption(id: number, option: Option): Promise<object> {
    return await this.dataSource
      .createQueryBuilder()
      .update(Option)
      .set({
        content: option.content,
        enabled: option.enabled,
        questionId: option.questionId,
        updatedAt: new Date(),
      })
      .where('option.id = :id', { id: id })
      .execute();
  }

  async deleteOption(id: number) {
    return await this.dataSource
      .createQueryBuilder()
      .update(Option)
      .set({
        enabled: false,
        deleted: true,
        deletedAt: new Date(),
      })
      .where('option.id = :id', { id: id })
      .execute();
  }
}
