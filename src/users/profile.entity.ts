import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('perfil_usuario')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;
}
