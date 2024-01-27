import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
  onSubmit(){
    //this.userForm.updateValueAndValidity();
    console.log("Hello world");
    

  }
    

  constructor(
    private fb: UntypedFormBuilder
  ){

  }
  ngOnInit() : void{
    // this.userForm = this.fb.group({ 
    //   userName : ['',Validators.required] ,
    //   password : ['',Validators.required]
    //  });
    
    
  }
}
