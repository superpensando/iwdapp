import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Sponsor } from '../../models/sponsor/sponsor.model';
import { SPONSORS } from '../../mocks/sponsors';
import { ORGANIZERS } from '../../mocks/organizers';


@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})

export class TeaserComponent implements OnInit {
  @Input() teasertype: number;
  public collection: string;
  private data: any = [];
  private breakpointOne: number;
  private breakpointTwo: number;
  private breakpointThree: number;
  private types: any = {
    '0': 'speakers',
    '1': 'sponsors',
    '2': 'organizers',
    '3': 'events'
  };
  private sponsors = SPONSORS;
  private organizers = ORGANIZERS;
  constructor() { }

  onResize(event: any) {
    this.breakpointOne = (event.target.innerWidth <= 600) ? 1 : 3;
    this.breakpointTwo = (event.target.innerWidth <= 600) ? 1 : 2;
    this.breakpointThree = (event.target.innerWidth <= 600) ? 2 : 9;
  }

  ngOnInit() {
    this.breakpointOne = (window.innerWidth <= 600) ? 1 : 3;
    this.breakpointTwo = (window.innerWidth <= 600) ? 1 : 2;
    this.breakpointThree = (window.innerWidth <= 600) ? 2 : 3;
    this.collection = this.types[this.teasertype.toString()];
    if (this.collection === 'sponsors') {
      this.data = this.sponsors;
    } else if (this.collection === 'organizers') {
      this.data = this.organizers;
    }
  }
}
