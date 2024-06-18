import { Component } from '@angular/core';
import { SiblingServicesService } from 'src/app/services/sibling-services.service';

@Component({
  selector: 'app-view-communications',
  templateUrl: './view-communications.component.html',
  styleUrls: ['./view-communications.component.css']
})
export class ViewCommunicationsComponent {
  public viewtodo:any={}

  constructor(private _siblingService:SiblingServicesService){
    _siblingService.getviewValue().subscribe(
      (data:any)=>{
        this.viewtodo=data
      }
    )
  }
  
  edit(data:any){
    
  }
}
