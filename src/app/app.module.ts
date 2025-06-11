import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import { AppComponent } from './app.component';
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/store/auth-store/auth.effects';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======


>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
<<<<<<< HEAD
    EffectsModule.forRoot([AuthEffects])
=======
    EffectsModule.forRoot([AuthEffects]),
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }