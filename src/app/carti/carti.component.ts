import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditCarteDialogComponent } from '../edit-carte-dialog/edit-carte-dialog.component';
import { Carte } from '../shared/carte.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-carti',
  templateUrl: './carti.component.html',
  styleUrls: ['./carti.component.scss']
})
export class CartiComponent implements OnInit {

  carti: Carte[]
  showValidationErrors: boolean

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carti = this.dataService.getAllCarti()
  }

  onFormSubmit(form: NgForm){

    if(form.invalid){
      return this.showValidationErrors = true
    }

    this.dataService.addCarte(new Carte(form.value.id, form.value.autor, form.value.titlu,
      form.value.editura, form.value.localitatea, form.value.an, form.value.limba))

      form.reset()
  }

  editCarte(carte: Carte){

    const index = this.carti.indexOf(carte)

    let dialogRef = this.dialog.open(EditCarteDialogComponent, {
      height: '400px',
      width: '600px',
      data: carte
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataService.updateCarte(index, result)
      }
    })
  }

  deleteCarte(carte: Carte){
    const index = this.carti.indexOf(carte)
    this.dataService.deleteCarte(index)

  }

}
