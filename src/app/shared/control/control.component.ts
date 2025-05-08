import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // disable encapsulation so css styles can work 
  encapsulation: ViewEncapsulation.None,
  //.emulated is the default one
  host: {
    class: 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {
  // moze host binding, ali je obeshrabljeno da se koristi, bolje koristiti host property
  // @HostBinding('class') className = 'control';
  // @HostListener('click') 
  label = input.required<string>();
  // @HostListener('click')
  onClick() 
  {
    console.log('Clicked!');
  }
}
