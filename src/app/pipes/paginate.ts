import {Pipe} from 'angular2/core';
import * as _ from 'lodash';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe {
  transform(value: any[], args: string[]): any[] {
    let pageNum = parseInt(args[0]);
    let pageSize = parseInt(args[1]) || 10;

    return _(value)
      .drop((pageNum) * pageSize)
      .take(pageSize)
      .value();
  }
}
