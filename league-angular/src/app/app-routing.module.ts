import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionlistComponent } from './championlist/championlist.component';

const routes: Routes = [{path: "", component: ChampionlistComponent},
                        {path: "list", component: ChampionlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
