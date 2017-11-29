import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators ,FormControl, FormGroup} from "@angular/forms";
import {equalValidator, mobileValidator} from "../../validator/validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formModel: FormGroup;
  model = {
    'hobbys': ['唱歌','跳舞','读书']
  }
  constructor(fb:FormBuilder) {
     this.formModel = fb.group({
         username:['Jetty', [Validators.required,Validators.minLength(6)]],
         mobile:['13244540000', mobileValidator],
         hobby:['-请选择-'],
         passwords:fb.group({
           password: ['123456',Validators.minLength(6)],
           confirmPass:['123456']
         },{
           validator:equalValidator
         })
     });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("onSubmit reactive");
    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
