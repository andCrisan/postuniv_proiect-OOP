import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartiComponent } from './carti/carti.component';

const routes: Routes = [
  { path: '', component: CartiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
