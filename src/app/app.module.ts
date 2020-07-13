import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule, HomeComponent, NotFoundComponent]
})
export class AppModule { }
