import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'orbit-report';

  sourceList: Satellite[];
  displayList: Satellite[];
  sortBool: boolean[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    this.sortBool = [];
    let satellitesUrl = "https://handlers.education.launchcode.org/static/satellites.json";

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
        let fetchedSatellites = data.satellites;
        for (let space of fetchedSatellites) {
          this.sourceList.push(new Satellite(space.name, space.type, space.launchDate, space.orbitType, space.operational))
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));

    this.sortBool = [true, true];
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let satellite of this.sourceList) {
      let name = satellite.name.toLowerCase();
      let type = satellite.type.toLowerCase();
      let orbitType = satellite.orbitType.toLowerCase();

      if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(satellite);
      }
      if (type.indexOf(searchTerm) >= 0 && !matchingSatellites.includes(satellite)) {
        matchingSatellites.push(satellite);
      }
      if (orbitType.indexOf(searchTerm) >= 0 && !matchingSatellites.includes(satellite)) {
        matchingSatellites.push(satellite);
      }

    }
    this.displayList = matchingSatellites;
    this.sortBool[0] = true;
    this.sortBool[1] = true;
  }

}
