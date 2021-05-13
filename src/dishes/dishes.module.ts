import { Module } from '@nestjs/common';
import { DishesController} from './dishes.controller';
import { DishesService } from './dishes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dishes } from './dishes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Dishes])],
    controllers: [DishesController],
    providers: [DishesService]
})
export class DishesModule {}
