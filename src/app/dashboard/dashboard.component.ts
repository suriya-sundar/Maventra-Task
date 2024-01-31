import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
selectedContent: any;

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

  animateSidenav() {
    const isSideNavOpened = this.sidenav?.opened;
    const $matSidenav = this.elementRef.nativeElement.querySelector('mat-sidenav');
    const $matSidenavContent = this.elementRef.nativeElement.querySelector('mat-sidenav-content');

    if (isSideNavOpened) {
      this.sidenav?.toggle();

    } else {
      this.renderer.removeStyle($matSidenav, 'width');
      this.renderer.removeStyle($matSidenav, 'transition');
      this.renderer.removeStyle($matSidenav, 'visibility');
      this.renderer.removeStyle($matSidenav, 'transform');
      this.renderer.removeStyle($matSidenavContent, 'margin-left');
      this.sidenav?.toggle();
      

    }
  }
}
