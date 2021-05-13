import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dishes } from './dishes.entity';
import { Dish } from '../../../CastroKitchen/src/app/dish.model';

@Injectable()
export class DishesService {

    constructor(@InjectRepository(Dishes)
        private readonly dishesRepository: Repository<Dishes>
    ) {}

    async create(dish: Dish): Promise<any> {
        return await this.dishesRepository.save(dish);
    }

    async findAll(): Promise<Dishes[]> {
        return this.dishesRepository.find();
    }

    async query(cuisine: string): Promise<Dishes[]> {
        return this.dishesRepository.find({ where: { cuisine: cuisine } });
    }

    async update(dish: Dish): Promise<UpdateResult> {
        return await this.dishesRepository.update(dish.id, dish);
    }

    async delete(id: number): Promise<any> {
        return this.dishesRepository.delete(id);
    }
}
