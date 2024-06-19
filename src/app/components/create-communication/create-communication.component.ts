import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-communication',
  templateUrl: './create-communication.component.html',
  styleUrls: ['./create-communication.component.css']
})
export class CreateCommunicationComponent {
  public text:string='';
  public time:string='';

public dataForm:FormGroup=new FormGroup(
  {text:new FormControl(),
    time:new FormControl()
  }
)

constructor(private _siblingService:SiblingServices){
  _siblingService.getEditValue().subscribe(
    (data:any)=>{
      this.dataForm.patchValue(data)
    }
  )
}

create(){
this._siblingService.setValue(this.dataForm.value)
}

reset(){
this.text=''
this.time=''
}

}
