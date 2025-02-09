import { Component, Input, input } from '@angular/core';
import { Personagem } from '../../models/Personagem';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';

@Component({
  selector: 'app-card-personagem',
  imports: [],
  templateUrl: './card-personagem.component.html',
  styleUrl: './card-personagem.component.css'
})
export class CardPersonagemComponent {
  @Input() personagem!: Personagem;
  verSobre: boolean = false;

  constructor(private googleAnalyticsService: GoogleAnalyticsService){}

  verSobrePersonagem() {
    this.verSobre = !this.verSobre;
    this.googleAnalyticsService.eventEmitter('Clicando no personagem', 'button_click', 'Clicando no personagem', 'Example Button', 0);
  }
}
