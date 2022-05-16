import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.services';
import { AuthComponent } from './auth/auth.component';
import { ApparailViewComponent } from './apparail-view/apparail-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ComptesComponent } from './comptes/comptes.component';
import { HttpClientModule } from '@angular/common/http';
import { CompteService } from './services/compte.services';
import { AuthService } from './services/auth.service';
import { SimgleAppareilComponent } from './simgle-appareil/simgle-appareil.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuard], component: ApparailViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SimgleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'compte', component: ComptesComponent},
  {path: '', component: ApparailViewComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    ApparailViewComponent,
    ComptesComponent,
    SimgleAppareilComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AppareilService,
    CompteService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
