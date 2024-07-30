import { Component } from '@angular/core';
import MyReact from '../react/my-react';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponent {
  reactProps = { name: 'My React Component' };
  MyReact = MyReact;
}
