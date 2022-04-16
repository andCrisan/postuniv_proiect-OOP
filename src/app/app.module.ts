import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartiComponent } from './carti/carti.component';
import { CarteItemComponent } from './carte-item/carte-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCarteDialogComponent } from './edit-carte-dialog/edit-carte-dialog.component';

import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    AppComponent,
    CartiComponent,
    CarteItemComponent,
    EditCarteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
