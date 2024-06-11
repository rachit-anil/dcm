import { FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import {
  QueryBuilderClassNames,
  QueryBuilderConfig,
} from 'ngx-angular-query-builder';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrl: './query-builder.component.scss',
})
export class QueryBuilderComponent {
  query = {
    condition: 'and',
    rules: [
      { field: 'age', operator: '<=', value: 'Bob' },
      { field: 'gender', operator: '>=', value: 'm' },
    ],
  };

  config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' },
        ],
      },
    },
  };
}
