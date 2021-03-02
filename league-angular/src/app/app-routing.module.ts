import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { RunelistComponent } from './runelist/runelist.component';
import { SummonerspellComponent } from './summonerspell/summonerspell.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';

const routes: Routes = [{path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionComponent},
                        {path: "itemlist", component: ItemlistComponent},
                        {path: "runelist", component: RunelistComponent},
                        {path: "summonerspelllist", component: SummonerspelllistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
