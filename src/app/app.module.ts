import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { HostPageComponent } from './host-page/host-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { PropertyOffersComponent } from './property-offers/property-offers.component';
import { AddPropertyComponent } from './add-property/add-property.component';

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
    LocationDetailsComponent,
    HomeComponent,
    AuthComponent,
    PropertyOffersComponent,
    AddPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: AuthComponent},
      { path: 'anfitriao', component: HostPageComponent},
      { path: 'cadastre-se', component: SignUpComponent},
      { path: 'ofertas', component: PropertyOffersComponent},
      { path: 'detalhes/:id', component: LocationDetailsComponent},
      { path: 'details-host', component: AddPropertyComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
