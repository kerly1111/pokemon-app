import { TestBed } from '@angular/core/testing';
import {PokemonComponent} from './pokemon.component';
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('PokemonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonRoutingModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PokemonComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PokemonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokemon-app'`, () => {
    const fixture = TestBed.createComponent(PokemonComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokemon-app');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(PokemonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pokemon-app app is running!');
  });*/

});
