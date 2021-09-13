import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {CountriesDropdownComponent} from './utils/countries-dropdown/countries-dropdown.component';
import {MatSelectCountryModule} from '@angular-material-extensions/select-country';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatSelectCountryModule.forRoot('en'), // you can use// 'br' | 'de' | 'en' | 'es' | 'fr' | 'hr' | 'it' | 'nl' | 'pt'
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CountriesDropdownComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
