import { Component } from '@angular/core';

@Component({
  selector: 'app-srilanka',
  imports: [],
  templateUrl: './srilanka.component.html',
  styleUrl: './srilanka.component.scss'
})

export class SrilankaComponent {
  enemies: Array<string> = ['0', '1', '2', '3'];
  constructor() {

   }

  ngOnInit() {
  }

  removeGoomba(id: any) {
    const i = this.enemies.indexOf(id);
    if (i !== -1) {
      this.enemies.splice(i, 1);
    }
 
  }
}