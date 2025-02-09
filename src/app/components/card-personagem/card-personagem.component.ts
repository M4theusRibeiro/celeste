import { Component, Input, input } from '@angular/core';
import { Personagem } from '../../models/Personagem';

@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.component.html',
  styleUrl: './card-personagem.component.css'
})
export class CardPersonagemComponent {
  @Input() personagem!: Personagem;
  verSobre: boolean = false;

  verSobrePersonagem() {
    console.log(this.verSobre);
    this.verSobre = !this.verSobre;
  }
}
