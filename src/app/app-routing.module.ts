import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OptimistComponent } from './pages/optimist/optimist.component';
import { PessimistComponent } from './pages/pessimist/pessimist.component';
import { HurwiczComponent } from './pages/hurwicz/hurwicz.component';

const routes: Routes = [
  { path: '', component:  WelcomeComponent},
  { path: 'optimista', component: OptimistComponent },
  { path: 'pesimista', component: PessimistComponent },
  { path: 'hurwizc', component: HurwiczComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
