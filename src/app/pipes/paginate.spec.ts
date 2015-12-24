import {PaginatePipe} from './paginate.ts';

describe('PaginatePipe', () => {
  let pipe: PaginatePipe;
  let collection: number[] =
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  beforeEach(() => {
    pipe = new PaginatePipe();
  });

  it("gets nth page of collection", () => {
    expect(pipe.transform(collection, ['0'])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(pipe.transform(collection, ['1'])).toEqual([11,12,13,14,15,16,17,18,19,20]);
    expect(pipe.transform(collection, ['2'])).toEqual([21,22,23,24,25]);
  });

  it("gets pages of different size", () => {
    expect(pipe.transform(collection, ['0', '5'])).toEqual([1,2,3,4,5]);
    expect(pipe.transform(collection, ['1', '8'])).toEqual([9,10,11,12,13,14,15,16]);
  });
});
