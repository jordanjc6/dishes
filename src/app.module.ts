import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dishes } from './dishes/dishes.entity';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Jmilli0n!',
    database: 'castrokitchen',
    entities: [Dishes],
    synchronize: true,
  }), DishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
