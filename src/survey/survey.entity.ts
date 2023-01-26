import { Question } from 'src/question/question.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Question, (question) => question.surveyId)
  id?: number;

  @Column()
  title: string;

  @Column()
  about: string;

  @Column()
  enabled: boolean;

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
