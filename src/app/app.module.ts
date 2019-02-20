import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatIconModule, MatGridListModule, MatProgressSpinnerModule } from '@angular/material';
// import * as components from './common/components';
import { ContentformComponent } from './common/components/contentform/contentform.component';
import { ButtonComponent } from './common/components/button/button.component';
import { MainNavComponent } from './common/components/main-nav/main-nav.component';
import { StageComponent } from './common/components/stage/stage.component';
import { AppRoutingModule } from './app-routing.module';
import { TeaserComponent } from './common/components/teaser/teaser.component';
import { TeaserlistComponent } from './common/components/teaserlist/teaserlist.component';
import { TextimageComponent } from './common/components/textimage/textimage.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // all common components
    // ...Object.keys(components).map(v => components[v]),
    ButtonComponent,
    MainNavComponent,
    StageComponent,
    TeaserComponent,
    TeaserlistComponent,
    TextimageComponent,
    ContentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // all services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
