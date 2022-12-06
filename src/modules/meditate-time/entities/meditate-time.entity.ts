import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {User} from "../../user/entities/user.entity";

@Entity({name : 'meditate_time'})
export class MeditateTime extends BaseEntity{
  @PrimaryGeneratedColumn("uuid", {name: 'id'})
  meditateTimeId: string;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  userId: User;

  @Column({ name: 'time', nullable: true})
  meditateTime: Date;

  @Column({ name: 'day', nullable: true})
  meditateDays: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
