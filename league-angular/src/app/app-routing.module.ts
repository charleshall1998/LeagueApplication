import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionByIdComponent } from './champion-by-id/champion-by-id.component';
import { ChampionByNameComponent } from './champion-by-name/champion-by-name.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { CreateItemsetComponent } from './create-itemset/create-itemset.component';
import { CreateRunesetComponent } from './create-runeset/create-runeset.component';
import { CreateSummonerspellsetComponent } from './create-summonerspellset/create-summonerspellset.component';
import { DeleteItemsetComponent } from './delete-itemset/delete-itemset.component';
import { DeleteRunesetComponent } from './delete-runeset/delete-runeset.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemByIdComponent } from './item-by-id/item-by-id.component';
import { ItemByNameComponent } from './item-by-name/item-by-name.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ItemsetlistComponent } from './itemsetlist/itemsetlist.component';
import { RuneByIdComponent } from './rune-by-id/rune-by-id.component';
import { RuneByNameComponent } from './rune-by-name/rune-by-name.component';
import { RunelistComponent } from './runelist/runelist.component';
import { RunesetlistComponent } from './runesetlist/runesetlist.component';
import { SummonerspellByIdComponent } from './summonerspell-by-id/summonerspell-by-id.component';
import { SummonerspellByNameComponent } from './summonerspell-by-name/summonerspell-by-name.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';
import { SummonerspellsetComponent } from './summonerspellset/summonerspellset.component';
import { SummonerspellsetlistComponent } from './summonerspellsetlist/summonerspellsetlist.component';
import { UpdateItemsetComponent } from './update-itemset/update-itemset.component';
import { UpdateRunesetComponent } from './update-runeset/update-runeset.component';
import { UpdateSummonerspellsetComponent } from './update-summonerspellset/update-summonerspellset.component';

const routes: Routes = [{path: "", component: HomePageComponent},
                        {path: "home", component: HomePageComponent},
                        {path: "championlist", component: ChampionlistComponent},
                        {path: "championname", component: ChampionByNameComponent},
                        {path: "championid", component: ChampionByIdComponent},
                        {path: "itemlist", component: ItemlistComponent},
                        {path: "itemname", component: ItemByNameComponent},
                        {path: "itemid", component: ItemByIdComponent},
                        {path: "createitemset", component: CreateItemsetComponent},
                        {path: "itemsetlist", component: ItemsetlistComponent},
                        {path: "updateitemset", component: UpdateItemsetComponent},
                        {path: "deleteitemset", component: DeleteItemsetComponent},
                        {path: "runelist", component: RunelistComponent},
                        {path: "runename", component: RuneByNameComponent},
                        {path: "runeid", component: RuneByIdComponent},
                        {path: "createruneset", component: CreateRunesetComponent},
                        {path: "runesetlist", component: RunesetlistComponent},
                        {path: "updateruneset", component: UpdateRunesetComponent},
                        {path: "deleteruneset", component: DeleteRunesetComponent},
                        {path: "summonerspelllist", component: SummonerspelllistComponent},
                        {path: "summonerspellname", component: SummonerspellByNameComponent},
                        {path: "summonerspellid", component: SummonerspellByIdComponent},
                        {path: "createsummonerspellset", component: CreateSummonerspellsetComponent},
                        {path: "summonerspellsetlist", component: SummonerspellsetlistComponent},
                        {path: "updatesummonerspellset", component: UpdateSummonerspellsetComponent},
                      ];
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
