import { Pipe, PipeTransform } from '@angular/core';
import { Observable, isObservable, map, startWith, catchError, of } from 'rxjs';

export interface LoadingState<T> {
  loading: boolean;
  value?: T;
  error?: any;
}

@Pipe({
  name: 'withLoading',
  standalone: true
})
export class WithLoadingPipe implements PipeTransform {

  transform<T>(val: Observable<T>): Observable<LoadingState<T>> {
    if (!isObservable(val)) {
      throw new Error('WithLoadingPipe expects an Observable as input.');
    }

    return val.pipe(
      map((value: T) => ({ loading: false, value } as LoadingState<T>)),
      startWith({ loading: true } as LoadingState<T>),
      catchError(error => of({ loading: false, error } as LoadingState<T>))
    );
  }

}
