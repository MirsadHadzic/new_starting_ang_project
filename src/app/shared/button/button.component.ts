import { Component } from '@angular/core';

@Component({
  // for component and ng selectors, i mean a is for anchor tags
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {

}
