import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-add-list',
  templateUrl: './input-add-list.component.html',
  styleUrls: ['./input-add-list.component.scss']
})
export class InputAddListComponent implements OnInit {

  public ItemListToDo:string = ""

  @Output() public emmitListItem = new EventEmitter()
  constructor(){}

  ngOnInit():void {}

  public submitItem(){
    this.ItemListToDo = this.ItemListToDo.trim()
    if(this.ItemListToDo){
      this.emmitListItem.emit(this.ItemListToDo)
      this.ItemListToDo = ""
    }
  }

}
