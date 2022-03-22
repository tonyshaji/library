import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalsService {
  constructor(
    @InjectModel(Rental.name) private readonly rentalModel: Model<Rental>,
  ) {}
  async create(createRentalDto: CreateRentalDto) {
    const createdRental = await this.rentalModel.create(createRentalDto);
    return createdRental;
  }

  async findAll() {
    return this.rentalModel.find().populate('book').populate('user').exec();
  }

  async findOne(id: string) {
    return this.rentalModel
      .findOne({ _id: id })
      .populate('book')
      .populate('user')
      .exec();
  }

  async update(id: string, updateRentalDto: UpdateRentalDto) {
    const rental = this.rentalModel.findByIdAndUpdate({ _id: id }).exec();
    const updatedRental = await (await rental).updateOne(updateRentalDto);
    return updatedRental;
  }

  async remove(id: string) {
    const deletedRental = await this.rentalModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedRental;
  }
}
