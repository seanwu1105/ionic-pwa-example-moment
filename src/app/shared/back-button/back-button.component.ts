import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
  @Input()
  color: string | undefined;

  @Input()
  standalone: boolean | undefined;

  constructor(private readonly navController: NavController) {}

  back() {
    this.navController.back();
  }
}
