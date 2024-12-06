import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: false,
  
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name: string  = "";
  @Input() userData! : {mail: string, password: string, age: number, job: string}

}
