import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemsetlistComponent } from './itemsetlist/itemsetlist.component';
import { RunelistComponent } from './runelist/runelist.component';
import { RunesetlistComponent } from './runesetlist/runesetlist.component';
import { SummonerspellComponent } from './summonerspell/summonerspell.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';

const routes: Routes = [{path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionComponent},
                        {path: "itemlist", component: ItemlistComponent},
                        {path: "itemsetlist", component: ItemsetlistComponent},
                        {path: "runelist", component: RunelistComponent},
                        {path: "runesetlist", component: RunesetlistComponent},
                        {path: "summonerspelllist", component: SummonerspelllistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
