import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Carte } from '../shared/carte.model';

@Component({
  selector: 'app-carte-item',
  templateUrl: './carte-item.component.html',
  styleUrls: ['./carte-item.component.scss']
})
export class CarteItemComponent implements OnInit {

  @Input() carte: Carte
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(){
    this.editClicked.emit()
  }
  onDeleteClicked(){
    this.deleteClicked.emit()
  }

}
