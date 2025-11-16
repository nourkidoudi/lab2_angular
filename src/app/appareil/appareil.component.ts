import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @Input() appareilName: string = '';
  @Input() appareilStatus: string = '';
  @Input() index: number = 0;
  @Output() switchEvent = new EventEmitter<void>();

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'Allumé') {
      return 'green';
    } else if (this.appareilStatus === 'Eteint') {
      return 'red';
    }
    return 'black';
  }

  onSwitch() {
    this.switchEvent.emit();
  }
}
