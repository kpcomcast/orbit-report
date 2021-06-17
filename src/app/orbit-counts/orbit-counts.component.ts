import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  totalsArray: number[];
  typesArray: string[];
  totaled: number;
  
  constructor() { }
  
  ngOnInit() {
  }

  totalSat(array: Satellite[]): boolean {
    this.totaled = array.length;
    this.totalsArray = [this.totaled, 0, 0, 0, 0, 0, 0];
    this.typesArray = ["Total: ", "Space Debris: ", "Communication: ", "Probe: ", "Positioning: ", "Space Station: ", "Telescope: "];
    
    for (let thing of array) {
      if (thing.type === "Space Debris") {
        this.totalsArray[1] += 1;
      }
      if (thing.type === "Communication") {
        this.totalsArray[2] += 1;
      }
      if (thing.type === "Probe") {
        this.totalsArray[3] += 1;
      }
      if (thing.type === "Positioning") {
        this.totalsArray[4] += 1;
      }
      if (thing.type === "Space Station") {
        this.totalsArray[5] += 1;
      }
      if (thing.type === "Telescope") {
        this.totalsArray[6] += 1;
      }
    }

    return true;
  }

}
