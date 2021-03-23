import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToursComponent } from './tours/tours.component';
import { LoginComponent } from './login/login.component';
import { AsiaComponent } from './asia/asia.component';
import { AfricaComponent } from './africa/africa.component';
import { AustraliaComponent } from './australia/australia.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { EuropeComponent } from './europe/europe.component';
import { AntarktikosComponent } from './antarktikos/antarktikos.component';
import { PasswordComponent } from './password/password.component';
import { RegistreComponent } from './registre/registre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ToursComponent,
    LoginComponent,
    AsiaComponent,
    AfricaComponent,
    AustraliaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    EuropeComponent,
    AntarktikosComponent,
    PasswordComponent,
    RegistreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
