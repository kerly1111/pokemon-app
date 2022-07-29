import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {constans} from "../constans/constans";
import {Observable} from "rxjs";
import {PokemonVo} from "../vo/pokemon-vo";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = constans.SERVICES.BASE_SERVICES.DOMAIN;
  }

  findAll = (): Observable<PokemonVo[]> =>
    this.httpClient.get<PokemonVo[]>(`${ this.baseUrl }/?idAuthor=${ constans.SERVICES.BASE_SERVICES.AUTHOR }`)

  findById = (id: number): Observable<PokemonVo> =>
    this.httpClient.get<PokemonVo>(`${ this.baseUrl }/${ id }`)

  savePokemon = (pokemon: PokemonVo): Observable<any> =>
    this.httpClient.post<any>(`${ this.baseUrl }/?idAuthor=${ constans.SERVICES.BASE_SERVICES.AUTHOR }`, pokemon)

  updatePokemon = (id: number, pokemon: PokemonVo): Observable<any> =>
    this.httpClient.put<any>(`${ this.baseUrl }/${id}`, pokemon)

  deletePokemon = (id: number): Observable<any> =>
    this.httpClient.delete<any>(`${ this.baseUrl }/${id}`)
}
