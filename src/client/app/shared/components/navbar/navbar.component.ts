import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sd-navbar',
  templateUrl: 'app/shared/components/navbar/navbar.component.html',
  styleUrls: ['app/shared/components/navbar/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
