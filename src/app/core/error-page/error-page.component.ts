import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ErrorCode {
  code: number,
  description: string
}

const errors: ErrorCode[] = [
  { code: 404, description: 'Страница не найдена' },
  { code: 403, description: 'Доступ запрещён' },
]

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  @Input() errorCode: number = 404

  getError(): ErrorCode {
    let error = errors.find(e => e.code == this.errorCode)

    if (error) {
      return error
    }

    return { code: 0, description: 'Как вы попали сюда?' }
  }
}

