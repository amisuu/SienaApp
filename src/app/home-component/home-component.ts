import { Component } from '@angular/core';
import { setNonBreakingSpace } from '../shared/helpers';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
  contentText = '<strong>Nazywam się Natalia Sienkiewicz-Ciszewska.</strong> Jestem logopedą i neurologopedą. Ukończyłam studia na Uniwersytecie Gdańskim oraz Gdańskim Uniwersytecie Medycznym.</br></br>Specjalizuję się w terapii dzieci i młodzieży z trudnościami w zakresie rozwoju mowy, komunikacji oraz funkcji prymarnych, takich jak oddychanie, połykanie, gryzienie, żucie, pozycja spoczynkowa języka i warg.</br></br>Prowadzę również terapię miofunkcjonalną osób dorosłych, zwłaszcza przygotowujących się do leczenia ortodontycznego lub będących w jego trakcie. Terapia ta skupia się na pracy nad właściwym napięciem mięśniowym w jamie ustnej oraz podstawowymi funkcjami narządu orofacjalnego.';

  get nonBreakingSpace() {
    return setNonBreakingSpace(this.contentText);
  }
}
