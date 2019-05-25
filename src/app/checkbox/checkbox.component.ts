import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  public isChecked: boolean = false;
  @Input() public value1: string;

  constructor() {
  }

  ngOnInit() {
  }

}
