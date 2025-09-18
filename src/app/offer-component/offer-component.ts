import { Component } from '@angular/core';
import { setNonBreakingSpace } from '../shared/helpers';

@Component({
  selector: 'app-offer-component',
  standalone: false,
  templateUrl: './offer-component.html',
  styleUrl: './offer-component.scss'
})
export class OfferComponent {
  contentText = 'To bardzo ważny krok w drodze do wspierania rozwoju mowy i komunikacji. Jej celem jest uważne przyjrzenie się potrzebom pacjenta oraz ustalenie jakie działania będą dla niego najbardziej korzystne.';
  contentText2 = 'To regularne spotkania terapeutyczne trwające około 45 minut. Najczęściej odbywają się raz w tygodniu, ale częstotliwość zawsze jest dostosowana do indywidualnych potrzeb i możliwości pacjenta. Każde spotkanie to zestaw starannie dobranych ćwiczeń, które wspierają rozwój mowy, komunikacji oraz innych funkcji powiązanych.';
  contentText3 = 'To pisemne podsumowanie konsultacji, przygotowywane na życzenie pacjenta. Dokument zawiera najważniejsze informacje dotyczące przebiegu spotkania, obserwacji logopedycznych oraz indywidualnych zaleceń i wskazówek do dalszej pracy.';

  nonBreakingSpace(text: string) {
    return setNonBreakingSpace(text);
  }
}
