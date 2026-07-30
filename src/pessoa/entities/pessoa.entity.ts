import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar', length: 100 })
  user!: string;

  @Column({ type: 'varchar', length: 16 })
  password!: string;

  @Column({ type: 'varchar', length: 300 })
  name!: string;

  @Column({ type: 'date', length: 300 })
  birtyDate?: Date;

  @Column({ type: 'boolean', length: 300 })
  permissions!: boolean;
}
