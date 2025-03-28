import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = 'BORA FILHO';
  @Input() showBackButton: boolean = true;
  @Input() showCloseButton: boolean = true;
}