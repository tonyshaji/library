import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from './dto/book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
  ) {}

  async create(bookDto: BookDto): Promise<Book> {
    const createdBook = await this.bookModel.create(bookDto);
    return createdBook;
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({ _id: id }).exec();
  }
  async update(id: string, bookDto: BookDto): Promise<Book> {
    const user = this.bookModel.findByIdAndUpdate({ _id: id }).exec();
    const updatedUser = await (await user).update(bookDto);
    return updatedUser;
  }

  async delete(id: string) {
    const deletedBook = await this.bookModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBook;
  }
}
