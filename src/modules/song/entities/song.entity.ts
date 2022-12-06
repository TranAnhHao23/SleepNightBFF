import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export enum Voice {
  MALE = 'male',
  FEMALE = 'female',
}
@Entity({ name: 'song' })
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'song_id' })
  songId: string;

  @Column({ name: 'song_name', nullable: true })
  songName: string;

  @Column({ name: 'author', nullable: true })
  author: string;

  @Column({ name: 'singer', nullable: true })
  singer: string;

  // @Column({ name: 'genre', type: 'text', array: true})
  // genre: string[];

  @Column({ name: 'url', type: 'text', nullable: false })
  songUrl: string;

  @Column({ name: 'voice', type: 'enum', enum: Voice, default: Voice.MALE })
  voice: Voice;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
