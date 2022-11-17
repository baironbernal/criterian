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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    OptimistComponent,
    PessimistComponent,
    HurwiczComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
