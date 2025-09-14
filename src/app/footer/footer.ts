import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  phoneNumber = '+48 536 063 769';
  email = 'nsienkiewicz.logopeda@gmail.com';
  address = 'ul. Chrzanowskiego 51 80-278 Gdańsk';
}
