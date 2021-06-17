import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];
  @Input() sortAZ: boolean[];

  constructor() {
  }

  ngOnInit() {
  }

  sort(column: string): void {
    if (column === "name") {
      if (this.sortAZ[0]) {
        this.satellites.sort(function(a: Satellite, b: Satellite): number {
          if (a[column].toLowerCase() < b[column].toLowerCase()) {
            return -1;
          } else if (a[column].toLowerCase() === b[column].toLowerCase()) {
            return 0;
          }
          return 1;
        });
      } else {
        this.satellites.sort(function(a: Satellite, b: Satellite): number {
          if (a[column].toLowerCase() > b[column].toLowerCase()) {
            return -1;
          } else if (a[column].toLowerCase() === b[column].toLowerCase()) {
            return 0;
          }
          return 1;
        });
      }
      this.sortAZ[0] = !this.sortAZ[0];
      this.sortAZ[1] = true;
    } else if (column === "type") {
      if (this.sortAZ[1]) {
        this.satellites.sort(function(a: Satellite, b: Satellite): number {
          if (a[column].toLowerCase() < b[column].toLowerCase()) {
            return -1;
          } else if (a[column].toLowerCase() === b[column].toLowerCase()) {
            return 0;
          }
          return 1;
        });
      } else {
        this.satellites.sort(function(a: Satellite, b: Satellite): number {
          if (a[column].toLowerCase() > b[column].toLowerCase()) {
            return -1;
          } else if (a[column].toLowerCase() === b[column].toLowerCase()) {
            return 0;
          }
          return 1;
        });
      }
      this.sortAZ[1] = !this.sortAZ[1];
      this.sortAZ[0] = true;
    }
  }

  isThisRowOdd(sat: Satellite): boolean {
    if (this.satellites.indexOf(sat) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

}
