import { Component, ElementRef, ViewChild } from '@angular/core';
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
    @ViewChild('form') form?: ElementRef<HTMLFormElement>; 

  onSubmit (title: string, ticketText: String)
  {
    console.log(title);
    console.log(ticketText);
    // to celar input elements nakon upisivanja
    this.form?.nativeElement.reset();
  }
}
