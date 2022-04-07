import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './components/profile/profile.component';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailbikeComponent } from './components/detailbike/detailbike.component';
import { AddbikeComponent } from './components/addbike/addbike.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditbikeComponent } from './components/editbike/editbike.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    BicicletaComponent,
    CardComponent,
    DetailbikeComponent,
    AddbikeComponent,
    EditbikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-pp93gu3s.us.auth0.com',
      clientId: 'WTNY0RfhyxuapOXHVTbCSIIPQ45lBk7W'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
