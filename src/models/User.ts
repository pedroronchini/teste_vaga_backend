import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  nickname: string;

  @Column()
  address: string;

  @Column()
  bio: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
