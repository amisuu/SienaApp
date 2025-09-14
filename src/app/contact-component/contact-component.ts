import { Component, OnInit } from '@angular/core';
import { scrollToTop } from '../shared/helpers';

@Component({
  selector: 'app-contact-component',
  standalone: false,
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss'
})
export class ContactComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 54.3867105, lng: 18.5788906 };
  zoom = 15;
  markers: google.maps.LatLngLiteral = this.center;

  phoneNumber = '+48 536 063 769';
  email = 'nsienkiewicz.logopeda@gmail.com';
  address = 'ul. Chrzanowskiego 51, 80-278 Gdańsk';
  social = 'nat.logo';

  ngOnInit(): void {
    scrollToTop();
  }
}
