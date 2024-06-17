import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-communication',
  templateUrl: './edit-communication.component.html',
  styleUrls: ['./edit-communication.component.css']
})
export class EditCommunicationComponent {

  public todos:any=[]

constructor(private _siblingService:SiblingService){
  _siblingService.getValue().subscribe(
    (data:any)=>{
      this.todos = data;
    }
  )
}

view(todo:any){
this._siblingService.viewSetValue(todo)

}

edit(todo:any){
  this._siblingService.editSetValue(todo)
  
  }

  delete(i:any){
    this.todos.splice(i,1)
    }

}
