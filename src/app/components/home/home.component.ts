import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardPersonagemComponent } from "../card-personagem/card-personagem.component";
import { Personagem } from '../../models/Personagem';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CardPersonagemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {


  madeline: Personagem = {nome: 'Madeline', imagem: '../../../assets/img/personagensGif/madeline/normal.gif', cor: 'red', descricao: 'Madeline é a protagonista do jogo Celeste. Ela é uma jovem mulher que decide escalar a montanha Celeste. Madeline é uma personagem muito carismática e determinada.'};
  theo: Personagem = {nome: 'Theo', imagem: '../../../assets/img/personagensGif/theo/normal.gif', cor: 'orange', descricao: 'Theo é um fotógrafo que Madeline conhece durante sua jornada. Ele é um personagem muito amigável e divertido.'};

}
