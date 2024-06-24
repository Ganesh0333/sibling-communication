import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCommunicationComponent } from './components/edit-communication/edit-communication.component';
import { CreateCommunicationComponent } from './components/create-communication/create-communication.component';
import { ViewCommunicationsComponent } from './components/view-communications/view-communications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EditCommunicationComponent,
    CreateCommunicationComponent,
    ViewCommunicationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
