import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LocationListComponent } from './location-list/location-list.component';
import { BodyComponent } from './body/body.component';
import { LoginHostComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HostPageComponent } from './host-page/host-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyHostDetailsComponent } from './property-host-details/property-host-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LocationListComponent,
    BodyComponent,
    HostPageComponent,
    SignUpComponent,
    PropertyHostDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
      { path: 'login', component: LoginHostComponent},
      { path: 'anfitriao', component: HostPageComponent},
      { path: 'cadastre-se', component: SignUpComponent},
      { path: 'details', component: PropertyDetailsComponent },
      { path: 'details-host', component: PropertyHostDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
