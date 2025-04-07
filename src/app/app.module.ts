import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { MainContentComponent } from './componentes/main-content/main-content.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DirectivesComponent } from './directivas/compo-directiva/directives.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormReactiveComponent } from './pages/contact/form-reactive/form-reactive.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    DirectivesComponent,
    ContactComponent,
    FormReactiveComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
