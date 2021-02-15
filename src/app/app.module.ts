import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './result/result.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {collectionReducer} from './shared/redux/reducers/calculator.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forRoot({
      calculator: collectionReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
