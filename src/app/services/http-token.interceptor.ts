import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError, from, TimeoutError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GenericDestroyPageComponent } from '../shared/generics/destroy.generic';
import { RootState } from '../store/root.reducer';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  public isLoading = new BehaviorSubject(false);
}

@Injectable()
export class TokenInterceptor extends GenericDestroyPageComponent implements HttpInterceptor {
  public requests: HttpRequest<any>[] = [];

  constructor(private loaderSrv: LoaderService, private store: Store<RootState>, private router: Router) {
    super();
  }

  private removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderSrv.isLoading.next(this.requests.length > 0);
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(request);
    
    const doNotLoadUrl = request?.url.includes('check-website-url') || request?.url.includes('check-api-url');
    if(!doNotLoadUrl) {
      this.loaderSrv.isLoading.next(true);
    }
  
    return Observable.create((observer: any) => {
      const subscription = next.handle(request)
        .subscribe(event => {
          if (event instanceof HttpResponse) {
            this.removeRequest(request);
            observer.next(event);
          }
        }, error => {
          /* Handle timeout error */
          if (error instanceof TimeoutError) {
            from(this.handleHttpErrorRequest(request, 'Timeout error, please try again!'));
            return throwError(error);
          };
          this.removeRequest(request);
          observer.error(error);
          return null;
        }, () => {
          this.removeRequest(request);
          observer.complete();
        });
      return () => {
        this.removeRequest(request);
        subscription.unsubscribe();
      };
    });
  }

  private async handleHttpErrorRequest(request: HttpRequest<any>, msg?: string) {
    const module = request.url;
    let message: string | undefined = '' ;
    if (module?.includes('upload')) {
      message = msg;
    }
    this.loaderSrv.isLoading.next(true);
  }

  private async handleUnauthorizedRequest(request: HttpRequest<any>) {
    console.log('%c SESSION EXPIRED!', 'background: red; color: white');

    this.loaderSrv.isLoading.next(false);
  }
}
