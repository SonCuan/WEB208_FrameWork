import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  onSubmit (form : NgForm) { 
    if(!form.valid) return;
    console.log(form.value);
  }
  // @Output () onAdd = new EventEmitter<any>();
  // onSubmit (formAdd  : NgForm) {
  //   this.onAdd.emit(formAdd.value);
  // }
}
