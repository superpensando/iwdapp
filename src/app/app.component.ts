import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeaserType } from './common/enums/teasertypes.enum';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  teaserType = TeaserType;
  title = `International Women's Day`;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd || event instanceof Scroll )
    )
    .subscribe(() => window.scrollTo(0, 0));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
