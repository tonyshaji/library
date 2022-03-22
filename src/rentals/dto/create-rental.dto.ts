import { Book } from 'src/book/schemas/book.schema';
import { User } from 'src/user/entities/user.entity';

export class CreateRentalDto {
  readonly fromDate: Date;
  readonly toDate: Date;
  readonly status: number;
  readonly rentCost: number;
  readonly book: Book;
  readonly user: User;
}
