import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-dashboard',
  templateUrl: './appareil-dashboard.component.html',
  styleUrls: ['./appareil-dashboard.component.css']
})
export class AppareilDashboardComponent implements OnInit {
  isAllButtonDisabled = true;
  appareils: any[] = [];

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    // Utilisation locale pour le moment
    this.appareils = this.appareilService.getAppareilsLocal();
    
    // Pour utiliser l'API backend (une fois le backend prêt) :
    // this.appareilService.getAppareils().subscribe((listAppareils) => {
    //   this.appareils = listAppareils;
    // });

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
