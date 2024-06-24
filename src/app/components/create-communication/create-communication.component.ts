import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SiblingServicesService } from 'src/app/services/sibling-services.service';

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

constructor(private _siblingService:SiblingServicesService){
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
