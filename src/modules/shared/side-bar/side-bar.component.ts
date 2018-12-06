import { Component, OnInit } from '@angular/core';
import {AppSettings} from '../../../constants/app-settings.constant';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private appSettings: AppSettings) {}

  ngOnInit() {
  }

}
