import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LocationListComponent } from './location-list/location-list.component';
import { BodyComponent } from './body/body.component';
import { PropertyHostComponent } from './property-host/property-host.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { RouterModule } from '@angular/router';
import { PropertiesService } from './services/properties.service';
import { PropertyHostDetailsComponent } from './property-host-details/property-host-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LocationListComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NavbarComponent },
      { path: 'host', component: PropertyHostComponent},
      { path: 'details', component: PropertyDetailsComponent }

    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
