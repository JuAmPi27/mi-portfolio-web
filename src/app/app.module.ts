import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatosPersonalesComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    MisProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
