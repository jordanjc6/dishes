import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dishes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  cuisine: string;

  @Column('real')
  price: number;

  @Column('text')
  description: string;

  @Column('text')
  image: string;
}