import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dishes } from './dishes.entity';
import { Dish } from '../../../CastroKitchen/src/app/dish.model';

@Controller('dishes')
export class DishesController {

    constructor(private readonly dishesService: DishesService) {}

    @Post()
    async create(@Body() dish: Dish): Promise<Dishes[]> {
        return this.dishesService.create(dish);
    }

    @Get()
    async findAll(): Promise<Dishes[]> {
        return this.dishesService.findAll();
    }

    @Get('query/:cuisine')
    async query(@Param('cuisine') cuisine: string): Promise<any> {
        return this.dishesService.query(cuisine);
    }

    @Patch("update/:id")
    async update(@Param('id') id: number, @Body() dish: Dish): Promise<any> {
        dish.id = id
        return this.dishesService.update(dish);
    }

    @Delete("delete/:id")
    delete(@Param('id') id): string {
        return `this will delete dish ${id}`;//this.dishesService.delete(id);
    }

}
