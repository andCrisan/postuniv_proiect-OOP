import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Carte } from '../shared/carte.model';

@Component({
  selector: 'app-edit-carte-dialog',
  templateUrl: './edit-carte-dialog.component.html',
  styleUrls: ['./edit-carte-dialog.component.scss']
})
export class EditCarteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditCarteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public carte: Carte) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm){
    if(form.invalid){
      return
    }
    
    const updatedCarte = {
      ...this.carte,
      ...form.value
    }
    this.dialogRef.close(updatedCarte)

  }

}
