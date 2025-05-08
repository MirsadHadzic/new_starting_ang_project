import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // we can add host component to any component and not just view encapsulation
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
    // @Input({required: true}) image: { src: string; alt: string };
    // @Input({require: true}) title!: string;
    // this is a signal over here 
    image = input.required<{ src: string; alt: string }>();
    title = input.required<string>();
}
