import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// interfaces are good, cause you make a stupid typo, like ngoninit() instead of an ngOnInit(), you can basically fuck it up
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // it helps getting the current working content destroyed after it is finished so there's no mem. leak
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    
  }

  ngOnInit()
  {

    console.log('ON INIT');
    // this.interval = 
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 1

      if (rnd < 0.5)
      {
        this.currentStatus = "online";
      } else if (rnd < 0.9)
      {
        this.currentStatus = 'offline';
      } else 
      {
        this.currentStatus = 'unknown';
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
