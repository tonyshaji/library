export class CreateBookDto {
  readonly name: string;
  readonly code: string;
  readonly author: string;
  readonly isUsable: boolean;
  readonly price: number;
  readonly publisher: string;
  readonly publishedOn: Date;
};
