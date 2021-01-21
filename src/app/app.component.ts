import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private _store: Store<AppState>){
    this._store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    this._store.dispatch(actions.incrementar());
  }

  decrementar() {
    this._store.dispatch(actions.decrementar());
  }

}
