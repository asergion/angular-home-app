import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <img class="listing-photo" [src]="housingLocation.photo"
      alt="Exterior photo of {{housingLocation.photo}}">
      <h2 class="listing-title">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;

}
