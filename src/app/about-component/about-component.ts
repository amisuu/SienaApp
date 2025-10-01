import { Component, OnInit } from '@angular/core';
import { setNonBreakingSpace } from '../shared/helpers';
import { GalleryItem, ImageItem, GalleryComponent, Gallery } from 'ng-gallery';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about-component',
  standalone: true,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
  imports: [GalleryComponent]
})
export class AboutComponent implements OnInit  {
  contentText: string = 'Jestem logopedą i neurologopedą. Ukończyłam studia na Uniwersytecie Gdańskim oraz Gdańskim Uniwersytecie Medycznym. Specjalizuję się w terapii dzieci i młodzieży z trudnościami w zakresie rozwoju mowy, komunikacji oraz funkcji prymarnych, takich jak oddychanie, połykanie, gryzienie, żucie, pozycja spoczynkowa języka i warg. Prowadzę również terapię miofunkcjonalną osób dorosłych, zwłaszcza przygotowujących się do leczenia ortodontycznego lub będących w jego trakcie. Terapia ta skupia się na pracy nad właściwym napięciem mięśniowym w jamie ustnej oraz podstawowymi funkcjami narządu orofacjalnego.<br><br>Na co dzień pracuję w Przychodni NZOZ Brzeźno, Niepublicznym Przedszkolu w Gdańsku oraz prowadzę własny gabinet logopedyczny. Różnorodność środowisk pracy pozwala mi na kontakt z osobami w różnym wieku, posiadającymi odmienne potrzeby. Dzięki temu umiejętnie i elastycznie dopasowuję metody terapeutyczne do możliwości, zainteresowań i indywidualnych potrzeb pacjentów. W pracy z dziećmi opieram się na metodach aktywizujących, które wykorzystują naturalną ciekawość, ruch i zabawę. Każde spotkanie traktuję jako okazję do budowania relacji opartej na zaufaniu i wzajemnym zrozumieniu.<br><br>Gabinet Rozkwitaj w Mowie stworzyłam z myślą o miejscu, w którym dziecko może rozwijać się w swoim tempie, a jego potencjał ma przestrzeń do swobodnego rozkwitu. Dbam o to, by każdy pacjent czuł się komfortowo i towarzyszę mu w drodze do komunikacyjnej samodzielności. Zależy mi na wspieraniu dzieci w odkrywaniu własnego, niepowtarzalnego sposobu porozumiewania się ze światem, bo każdy człowiek zasługuje na to, by być usłyszany i zrozumiany.';
  images: GalleryItem[] = [];
  imagesDesktop: GalleryItem[] = [
      new ImageItem({ src: 'opinions/opinion1.png' }),
      new ImageItem({ src: 'opinions/opinion2.png' }),
      new ImageItem({ src: 'opinions/opinion3.png' }),
      new ImageItem({ src: 'opinions/opinion4.png' }),
      new ImageItem({ src: 'opinions/opinion5.png' }),
      new ImageItem({ src: 'opinions/opinion6.png' }),
      new ImageItem({ src: 'opinions/opinion7.png' }),
  ];

  imagesMobile: GalleryItem[] = [
      new ImageItem({ src: 'opinions/opinion1-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion2-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion3-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion4-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion5-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion6-mobile.png' }),
      new ImageItem({ src: 'opinions/opinion7-mobile.png' }),
  ];

  constructor(
    private gallery: Gallery,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.images = result.matches ? this.imagesMobile : this.imagesDesktop;
    });

    const galleryRef = this.gallery.ref('opinionsGallery');
    galleryRef.load(this.images);

    let index = 0;

    galleryRef.indexChanged.subscribe(newIndex => {
      if (typeof newIndex.currIndex === 'number') {
        index = newIndex.currIndex;
      } 
    });

    setInterval(() => {
      index = (index + 1) % this.images.length;
      galleryRef.set(index);
    }, 5000);
  }

  get nonBreakingSpace() {
    return setNonBreakingSpace(this.contentText);
  }
}
