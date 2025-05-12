import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // onSubmit(titleElement: HTMLInputElement) {
  //   // there's also a console.dir for logging
  //   const enteredTitle = titleElement.value;
  //   console.log(enteredTitle);

  // }
  // onSubmit(title: string, ticketText: string)
  // {
  //   const enteredTitle = titleElement.value;
  //   console.log('ENTERED TITLE: ' + enteredTitle);
  // }

  // ? needs to be here cause this property here will not be populated with a value instantly
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; 
  
  //private form = viewChild(ButtonComponent);

  // private form = viewChild('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // there's also a viewChildren if U want to select a multiple children
  onSubmit (title: string, ticketText: String)
  {
    console.log(title);
    console.log(ticketText);
    // to clear input elements nakon upisivanja
    this.form().nativeElement.reset();
  }
}
