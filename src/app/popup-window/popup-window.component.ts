import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
})
export class PopupWindowComponent implements OnInit {
  @Input() isVisible: boolean = true;
  @Input() title: string = 'Title';
  @Input() errorText: string = 'popup content';
  @Output() close = new EventEmitter();
  constructor() {}

  exit() {
    this.close.emit();
  }
  ngOnInit(): void {}
}
