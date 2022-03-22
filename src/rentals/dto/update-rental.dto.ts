import { PartialType } from '@nestjs/swagger';
import { Book } from 'src/book/schemas/book.schema';
import { User } from 'src/user/entities/user.entity';
import { CreateRentalDto } from './create-rental.dto';

export class UpdateRentalDto extends PartialType(CreateRentalDto) {
  readonly fromDate: Date;
  readonly toDate: Date;
  readonly status: number;
  readonly rentCost: number;
  readonly book: Book;
  readonly user: User;
}
