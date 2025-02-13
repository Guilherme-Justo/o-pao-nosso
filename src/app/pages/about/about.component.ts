import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  text: string
  title: string

  constructor() {
    this.title = 'Sobre nós'
    this.text = `Você é discípulo de Jesus ou deseja ser? Então está no Lugar certo!\n` +
    `Somos um blog dedicado em trazer para você a vontade de Deus revelada na Sua Palavra.\n` +
    `Fique a vontade para explorar todo o conteúdo disponível e aprender sobre Jesus. Ele é o centro desse blog!`
  }
}
