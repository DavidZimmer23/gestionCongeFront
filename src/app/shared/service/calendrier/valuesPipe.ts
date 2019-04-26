import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values' })
class ValuesPipe implements PipeTransform {
    transform(value, args: string[]): any {
        // tslint:disable-next-line:prefer-const
        let values = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            values.push(value[key]);
        }
        return values;
    }
}
