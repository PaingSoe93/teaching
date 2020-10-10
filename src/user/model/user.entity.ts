import { Entity, Column, OneToMany } from 'typeorm';
import { ArticleEntity } from '../../article/model/article.entity';
import { BaseEntity } from '../../shared/model/base-model.entity';

@Entity("user_entity")
export class UserEntity extends BaseEntity {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => ArticleEntity, article => article.user_id)
    articles: ArticleEntity[];
}