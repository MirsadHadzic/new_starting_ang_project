import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// interfaces are good, cause you make a stupid typo, like ngoninit() instead of an ngOnInit(), you can basically fuck it up
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // it helps getting the current working content destroyed after it is finished so there's no mem. leak
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  // onCleanup hook -- strasna stvar, takodjer
  constructor() {
    // almost a lifecycle hook, uglavnom pomaze pri cahngeanju signala
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit()
  {

    console.log('ON INIT');
    // this.interval = 
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 1

      if (rnd < 0.5)
      {
        this.currentStatus.set("online");
      } else if (rnd < 0.9)
      {
        this.currentStatus.set('offline');
      } else 
      {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    // ngOnDestroy is alternative to this code
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit()
  {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
