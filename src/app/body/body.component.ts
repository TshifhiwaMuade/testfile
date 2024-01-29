import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  // onSubmit(){
  //   //this.userForm.updateValueAndValidity();
  //   console.log("Hello world");
  // }

  @Input() collapsed = false;
  @Input() screenWidth = 0;
    
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
  // constructor(
  //   private fb: UntypedFormBuilder
  // ){

  // }
  // ngOnInit() : void{
  //   // this.userForm = this.fb.group({ 
  //   //   userName : ['',Validators.required] ,
  //   //   password : ['',Validators.required]
  //   //  });
    
    
  // }
}
