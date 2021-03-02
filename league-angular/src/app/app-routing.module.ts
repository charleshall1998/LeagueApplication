import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { CreateItemsetComponent } from './create-itemset/create-itemset.component';
import { CreateRunesetComponent } from './create-runeset/create-runeset.component';
import { CreateSummonerspellsetComponent } from './create-summonerspellset/create-summonerspellset.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemsetlistComponent } from './itemsetlist/itemsetlist.component';
import { RunelistComponent } from './runelist/runelist.component';
import { RunesetlistComponent } from './runesetlist/runesetlist.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';
import { SummonerspellsetlistComponent } from './summonerspellsetlist/summonerspellsetlist.component';

const routes: Routes = [{path: "", component: HomePageComponent},
                        {path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionComponent},
                        {path: "itemlist", component: ItemlistComponent},
                        {path: "createitemset", component: CreateItemsetComponent},
                        {path: "itemsetlist", component: ItemsetlistComponent},
                        {path: "runelist", component: RunelistComponent},
                        {path: "createruneset", component: CreateRunesetComponent},
                        {path: "runesetlist", component: RunesetlistComponent},
                        {path: "summonerspelllist", component: SummonerspelllistComponent},
                        {path: "createsummonerspellset", component: CreateSummonerspellsetComponent},
                        {path: "summonerspellsetlist", component: SummonerspellsetlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
