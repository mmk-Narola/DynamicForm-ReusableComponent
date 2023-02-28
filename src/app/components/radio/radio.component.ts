import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() option?: any[];
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() validator?: any;

  constructor() {}

  ngOnInit(): void {}
}
