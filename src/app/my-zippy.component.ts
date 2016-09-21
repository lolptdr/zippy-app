import { Component, Input } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'my-zippy',
  templateUrl: 'my-zippy.component.html'

})

export class ZippyComponent {

  @Input() title;

  visible = true;

  toggle() {
    this.visible = !this.visible;
  }

}