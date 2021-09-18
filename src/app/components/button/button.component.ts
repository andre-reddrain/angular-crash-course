import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // If the property is not initialized, it will generate a error: Property has no initializer and is not definitely assigned in the constructor
  // ! symbol to indicate that we are aware that the property is not initialized in the constructor and we will handle it elsewhere.
  // On tsconfig.json, "strictPropertyInitialization": false is also a way to prevent this error
  @Input() text: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
