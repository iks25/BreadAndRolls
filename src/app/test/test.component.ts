import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  testClick() {
    console.log('test');

    this.userService.save();
  }
  getData() {
    this.userService.getData();
  }
}
