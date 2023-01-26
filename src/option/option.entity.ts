import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content: string;

  @Column()
  enabled: boolean;

  @Column()
  questionId: number;

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
