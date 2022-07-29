import {RouterModule, Routes} from "@angular/router";
import {AdminPokemonComponent} from "./modules/main-screen/components/admin-pokemon/admin-pokemon.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import(`./modules/main-screen/main.module`)
      .then(m => m.MainModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

