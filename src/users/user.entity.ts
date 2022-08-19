import { IsEmail } from 'class-validator';
import { AfterInsert, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  //   @BeforeInsert() {
  //   // return await bcrypt.hash(this.password,)
  // }

  @AfterInsert()
  logInsert() {
    console.log(`inserted into database with ${this.id}`);
  }
}
