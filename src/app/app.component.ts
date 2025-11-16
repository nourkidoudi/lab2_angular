import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appname';
  isAllButtonDisabled = true;
  appareilList: any[] = [];

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareilList = this.appareilService.getAppareilsLocal();
    
    setTimeout(() => {
      this.isAllButtonDisabled = false;
    }, 4000);
  }

  onAllumerTout() {
    console.log('Allumer tous les appareils!');
    this.appareilService.switchOnAll();
  }

  onEteindreTout() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
  }

  onSwitch(index: number) {
    this.appareilService.switchOne(index);
  }
}
