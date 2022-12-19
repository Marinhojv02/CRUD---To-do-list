import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeadToDoComponent } from './components/head-to-do/head-to-do.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { InputAddListComponent } from './components/input-add-list/input-add-list.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    HeadToDoComponent,
    ToDoListComponent,
    InputAddListComponent,
    ButtonDeleteAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
