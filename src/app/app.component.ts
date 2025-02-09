import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celeste';
  usuarioLogado = false;

  constructor(private googleAnalyticsService: GoogleAnalyticsService){}

  login(){
    this.usuarioLogado = true;
  }
}
