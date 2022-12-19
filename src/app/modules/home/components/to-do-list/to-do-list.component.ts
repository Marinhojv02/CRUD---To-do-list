import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, DoCheck{

  public list: Array<{todo: String, checked:boolean}> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor(){}
  ngDoCheck(): void {
    this.setLocalStorage()
  }
  ngOnInit(): void {}

  public deletaItem(event: number) : void{
    this.list.splice(event,1)
  }

  public deletaTudo():void{
    const confirm = window.confirm("voce realmente deseja deletar tudo?")

    if(confirm){
    this.list = [];
    }
  }

  public setEmitItemToDo(event:string):void{
    this.list.push({todo:event, checked:false})
  }

  public setLocalStorage():void{
    if(this.list){
      this.list.sort( (first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.list))
    }
  }
}
