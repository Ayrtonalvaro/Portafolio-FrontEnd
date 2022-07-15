import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import * as appComponent from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SocialComponent } from './components/social/social.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarranavComponent } from './components/barranav/barranav.component';


@NgModule({
  declarations: [
    appComponent.AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercaDeComponent,
    SocialComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    BannerComponent,
    EducacionComponent,
    BarranavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
    
    

  ],
  providers: [],
  bootstrap: [appComponent.AppComponent]
})
export class AppModule { }
