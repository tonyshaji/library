import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  readonly name: string;
  readonly code: string;
  readonly author: string;
  readonly isUsable: boolean;
  readonly price: number;
  readonly publisher: string;
  readonly publishedOn: Date;
};
