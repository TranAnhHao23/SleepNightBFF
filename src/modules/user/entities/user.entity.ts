import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm";

@Entity({ name: 'user'})
export class User extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ name: 'name', nullable: false})
  name: string;

  @Column({ name: 'email', nullable: false})
  email: string;

  @Column({ name: 'password', nullable: false})
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

}
