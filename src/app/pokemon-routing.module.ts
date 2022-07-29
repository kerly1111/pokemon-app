import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes: Routes = [
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

