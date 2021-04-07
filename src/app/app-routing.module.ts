import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AfricaComponent } from './africa/africa.component';
import { AntarktikosComponent } from './antarktikos/antarktikos.component';
import { AsiaComponent } from './asia/asia.component';
import { AustraliaComponent } from './australia/australia.component';
import { ChinaComponent } from './china/china.component';
import { ContactComponent } from './contact/contact.component';
import { EuropeComponent } from './europe/europe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { PasswordComponent } from './password/password.component';
import { SouthAmericaComponent } from './south-america/south-america.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [

  {path:'' ,redirectTo: '/home' , pathMatch:'full'},
  {path:'home' ,component: HomeComponent},
  {path:'about' ,component: AboutComponent},
  {path:'contact' ,component: ContactComponent},
  {path:'tours' ,component: ToursComponent},
  {path:'login' ,component: LoginComponent},
  {path:'tours' ,component: ToursComponent},
  
  {path:'china' ,component: ChinaComponent},

  {path:'asia' ,component: AsiaComponent},
  {path:'africa' ,component: AfricaComponent},
  {path:'australia' ,component: AustraliaComponent},
  {path:'antartiko' ,component: AntarktikosComponent},
  {path:'noth' ,component: NorthAmericaComponent},
  {path:'south' ,component: SouthAmericaComponent},
  {path:'europe' ,component: EuropeComponent},
  {path:'password' ,component: PasswordComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
