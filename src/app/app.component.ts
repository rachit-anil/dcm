import { Component } from '@angular/core';
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes';

import * as countries from 'i18n-iso-countries';
import * as enLocale from 'i18n-iso-countries/langs/en.json';
import * as frLocale from 'i18n-iso-countries/langs/fr.json';
import idx from 'idx';
import { jsPDF } from 'jspdf';
import { chunk, shuffle } from 'lodash';
// Import BlockUI decorator & optional NgBlockUI type
import { BlockUI, NgBlockUI } from 'ng-block-ui';

type User = {
  user: { name?: string; friends?: Array<User> } | null;
} | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.blockUI.start('Loading...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 200);
  }

  @BlockUI() blockUI!: NgBlockUI;

  user: User = null;
  // {
  //   user: {
  //     name: 'Rachit',
  //     friends: [{ user: { name: 'Rahul' } }],
  //   },
  // };
  title = 'dcm';
  linkyText = `Pretty text with some links:

  http://angularjs.org/,
  
  mailto:us@somewhere.org,
  another@somewhere.org,
  and one more: ftp://127.0.0.1/.`;

  ngOnInit(): void {
    countries.registerLocale(enLocale);
    countries.registerLocale(frLocale);
    console.log('US (Alpha-2) => ' + countries.getName('US', 'en')); //
    console.log('USA (Numeric) => ' + countries.getName('840', 'en'));

    //idx
    console.log(idx(this.user, (_) => _.user.friends[0].user.name));

    //jspdf
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');

    //lodash
    console.log(this.getChunkedArray([1, 2, 3, 4, 5, 6, 6, 7, 7, , 7], 3));
  }

  getChunkedArray(array: any[], size: number): any[][] {
    return chunk(array, size);
  }

  getShuffledArray(array: any[]): any[] {
    return shuffle(array);
  }
}
