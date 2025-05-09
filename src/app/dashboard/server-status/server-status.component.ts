import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// interfaces are good, cause you make a stupid typo, like ngoninit() instead of an ngOnInit(), you can basically fuck it up
export class ServerStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    
  }

  ngOnInit()
  {
    setInterval(() => {
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
  }

}
