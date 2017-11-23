import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
   model = {
    'name' : 'zhangsan'
  }
  hobbys = ['Read', 'Music', 'Food'];
  constructor() { }
  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

}
