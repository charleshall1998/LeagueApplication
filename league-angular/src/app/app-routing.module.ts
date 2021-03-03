import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionByIdComponent } from './champion-by-id/champion-by-id.component';
import { ChampionByNameComponent } from './champion-by-name/champion-by-name.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { CreateItemsetComponent } from './create-itemset/create-itemset.component';
import { CreateRunesetComponent } from './create-runeset/create-runeset.component';
import { CreateSummonerspellsetComponent } from './create-summonerspellset/create-summonerspellset.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemByIdComponent } from './item-by-id/item-by-id.component';
import { ItemByNameComponent } from './item-by-name/item-by-name.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemsetlistComponent } from './itemsetlist/itemsetlist.component';
import { RunelistComponent } from './runelist/runelist.component';
import { RunesetlistComponent } from './runesetlist/runesetlist.component';
import { SummonerspellByIdComponent } from './summonerspell-by-id/summonerspell-by-id.component';
import { SummonerspellByNameComponent } from './summonerspell-by-name/summonerspell-by-name.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';
import { SummonerspellsetComponent } from './summonerspellset/summonerspellset.component';
import { SummonerspellsetlistComponent } from './summonerspellsetlist/summonerspellsetlist.component';

const routes: Routes = [{path: "", component: HomePageComponent},
                        {path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionByNameComponent},
                        {path: "championid", component: ChampionByIdComponent},
                        {path: "itemlist", component: ItemlistComponent},
                        {path: "itemname", component: ItemByNameComponent},
                        {path: "itemid", component: ItemByIdComponent},
                        {path: "createitemset", component: CreateItemsetComponent},
                        {path: "itemsetlist", component: ItemsetlistComponent},
                        {path: "runelist", component: RunelistComponent},
                        {path: "createruneset", component: CreateRunesetComponent},
                        {path: "runesetlist", component: RunesetlistComponent},
                        {path: "summonerspelllist", component: SummonerspelllistComponent},
                        {path: "summonerspellname", component: SummonerspellByNameComponent},
                        {path: "summonerspellid", component: SummonerspellByIdComponent},
                        {path: "createsummonerspellset", component: CreateSummonerspellsetComponent},
                        {path: "summonerspellsetlist", component: SummonerspellsetlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
