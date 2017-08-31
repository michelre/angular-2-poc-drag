import { Component, OnInit } from '@angular/core';
import { MathquillService } from 'mathquill-angular2';
declare var MathJax: any;

@Component({
  selector: 'app-poc-matjax',
  templateUrl: './poc-matjax.component.html',
  styleUrls: ['./poc-matjax.component.scss']
})
export class PocMatjaxComponent implements OnInit {

  inputValue: String = '';

  constructor() {}

  ngOnInit() {}

}
