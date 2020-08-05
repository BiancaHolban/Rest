import { Component } from '@angular/core';

import { Item } from '../shared';

@Component({
  selector: 'item.component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.componentt.css']
})
export class ItemComponent {


  model = new Item(11, 'Lee Ki', 3, 8,7,8);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}