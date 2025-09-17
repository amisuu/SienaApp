import { Component } from '@angular/core';
import { setNonBreakingSpace } from '../shared/helpers';

@Component({
  selector: 'app-about-component',
  standalone: false,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutComponent {
  contentText: string = 'Jestem logopedą i neurologopedą. Ukończyłam studia na Uniwersytecie Gdańskim oraz Gdańskim Uniwersytecie Medycznym. Specjalizuję się w terapii dzieci i młodzieży z trudnościami w zakresie rozwoju mowy, komunikacji oraz funkcji prymarnych, takich jak oddychanie, połykanie, gryzienie, żucie, pozycja spoczynkowa języka i warg. Prowadzę również terapię miofunkcjonalną osób dorosłych, zwłaszcza przygotowujących się do leczenia ortodontycznego lub będących w jego trakcie. Terapia ta skupia się na pracy nad właściwym napięciem mięśniowym w jamie ustnej oraz podstawowymi funkcjami narządu orofacjalnego.<br><br>Na co dzień pracuję w Przychodni NZOZ Brzeźno, Niepublicznym Przedszkolu w Gdańsku oraz prowadzę własny gabinet logopedyczny. Różnorodność środowisk pracy pozwala mi na kontakt z osobami w różnym wieku, posiadającymi odmienne potrzeby. Dzięki temu umiejętnie i elastycznie dopasowuję metody terapeutyczne do możliwości, zainteresowań i indywidualnych potrzeb pacjentów. W pracy z dziećmi opieram się na metodach aktywizujących, które wykorzystują naturalną ciekawość, ruch i zabawę. Każde spotkanie traktuję jako okazję do budowania relacji opartej na zaufaniu i wzajemnym zrozumieniu.<br><br>Gabinet Rozkwitaj w Mowie stworzyłam z myślą o miejscu, w którym dziecko może rozwijać się w swoim tempie, a jego potencjał ma przestrzeń do swobodnego rozkwitu. Dbam o to, by każdy pacjent czuł się komfortowo i towarzyszę mu w drodze do komunikacyjnej samodzielności. Zależy mi na wspieraniu dzieci w odkrywaniu własnego, niepowtarzalnego sposobu porozumiewania się ze światem, bo każdy człowiek zasługuje na to, by być usłyszany i zrozumiany.';

  get nonBreakingSpace() {
    return setNonBreakingSpace(this.contentText);
  }
}
