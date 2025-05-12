import { Component, contentChild, ContentChild, contentChildren, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
  private el = inject(ElementRef); 
  // @HostListener('click')
  // upitnik je da moze biti undefined ako nicega nema
//  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
//  private control = contentChildren<ElementRef>('input');
private control = 
   contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  onClick() 
  {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
