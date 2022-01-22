import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { HttpClientModule } from '@angular/common/http';
import { ShellFeatureModule } from '@demo-app/shell/feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShellFeatureModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states that means 25 actions
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
