import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [{path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionComponent},
                        {path: "itemlist", component: ItemlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
