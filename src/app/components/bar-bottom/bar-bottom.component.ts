import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-bottom',
  templateUrl: './bar-bottom.component.html',
  styleUrls: ['./bar-bottom.component.css']
})
export class BarBottomComponent implements OnInit {

  @Input()
  icon_L:string=''
  @Input()
  icon_G:string=''
  @Input()
  icon_F:string=''


  constructor() { }

  ngOnInit(): void {
  }

}
