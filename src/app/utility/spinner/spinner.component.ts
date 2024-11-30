import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgClass],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  @Input() text = 'Загрузка...'
  @Input() orientation: 'v' | 'h' = 'h'
}
