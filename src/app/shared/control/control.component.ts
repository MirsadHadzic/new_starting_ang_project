import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // disable encapsulation so css styles can work
  encapsulation: ViewEncapsulation.None
  //.emulated is the default one
})
export class ControlComponent {
  label = input.required<string>();
}
