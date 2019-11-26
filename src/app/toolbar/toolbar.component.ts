import { Component, OnInit } from '@angular/core';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  faChartPie = faChartPie;

  constructor() { }

  ngOnInit() {
  }

}
