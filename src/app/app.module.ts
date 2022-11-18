import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OptimistComponent } from './pages/optimist/optimist.component';
import { PessimistComponent } from './pages/pessimist/pessimist.component';
import { HurwiczComponent } from './pages/hurwicz/hurwicz.component';
import { FormInitialComponent } from './pages/shared/form-initial/form-initial.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    OptimistComponent,
    PessimistComponent,
    HurwiczComponent,
    FormInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
