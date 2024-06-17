import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingServicesService {

  public todos:any=[]
  constructor() { }

  // to post Data
  public dataSub$:BehaviorSubject<any>= new BehaviorSubject([])
  setValue(data:any){
    this.todos.push(data)
    this.dataSub$.next(this.todos)
  }
  getValue(){
    return this.dataSub$.asObservable();
  }

//to view data
public viewSub$:BehaviorSubject<any>=new BehaviorSubject({})
viewSetValue(data:any){
  this.viewSub$.next(data)
  
}
getviewValue(){
  return this.viewSub$.asObservable();
}


//to view data
public editSub$:BehaviorSubject<any>=new BehaviorSubject({})
editSetValue(data:any){
  this.editSub$.next(data)
  
}
getEditValue(){
  return this.editSub$.asObservable();
}

}
