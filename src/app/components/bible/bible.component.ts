import { Component } from '@angular/core';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css']
})
export class BibleComponent {

  reference: string
  text: string

  constructor() {
    this.text = '"Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, ' +
    'para que todo o que nele crê não pereça, mas tenha a vida eterna."'
    this.reference = 'João 3:16'
  }
}
