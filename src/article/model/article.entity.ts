import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../shared/model/base-model.entity';
import { UserEntity } from '../../user/model/user.entity';

@Entity("article_entity")
export class ArticleEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, user => user.articles)
  @JoinColumn({name: "user_id"})
  user_id: number;
}