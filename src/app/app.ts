import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    this.loadGoogleMapsScript();
  }

  private loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.GoogleMapsApiKey}&libraries=places&language=pl`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.initMap();
    };
    document.body.appendChild(script);
  }

  private initMap() {
    const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 54.352, lng: 18.646 },
      zoom: 12
    });
  }
}
