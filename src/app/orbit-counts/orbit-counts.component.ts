import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  totalsObject: object;
  
  constructor() { }
  
  ngOnInit() {
  }

  totalSat(array: Satellite[]): boolean {
    this.totalsObject = {
      total: array.length,
      debris: 0,
      comms: 0,
      probe: 0,
      position: 0,
      station: 0,
      tele: 0
    };
    
    for (let thing of array) {
      if (thing.type === "Space Debris") {
        this.totalsObject["debris"] += 1;
      }
      if (thing.type === "Communication") {
        this.totalsObject["comms"] += 1;
      }
      if (thing.type === "Probe") {
        this.totalsObject["probe"] += 1;
      }
      if (thing.type === "Positioning") {
        this.totalsObject["position"] += 1;
      }
      if (thing.type === "Space Station") {
        this.totalsObject["station"] += 1;
      }
      if (thing.type === "Telescope") {
        this.totalsObject["tele"] += 1;
      }
    }
    return true;
  }

}
