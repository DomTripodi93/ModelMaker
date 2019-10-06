import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  modelForm: FormGroup;
  fieldTypes = [
    "String",
    "Boolean",
    "Integer",
    "DateTime"
  ]

  constructor() { }

  ngOnInit() {
    this.initForm();
  }  

  private initForm() {
    let model: string;
    let fields = new FormArray([]);

    this.modelForm = new FormGroup({
      'model': new FormControl(model, Validators.required),
      'fields': fields
    });

    this.newField();
  }

  getControls(){
    return (<FormArray>this.modelForm.get('fields')).controls;
  }

  newField() {
      (<FormArray>this.modelForm.get('fields')).push(
          new FormGroup({
            'fieldName': new FormControl(null, Validators.required),
            'fieldType': new FormControl("string", Validators.required),
            'foreignKey': new FormControl(false, Validators.required),
          })
      )
  }

  onRemoveBar(index: number){
      (<FormArray>this.modelForm.get('bars')).removeAt(index);
  }

  onSubmit(){
    console.log(this.modelForm.value)
  }

}
