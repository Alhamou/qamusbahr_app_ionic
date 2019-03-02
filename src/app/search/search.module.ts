import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchPage } from './search.page';

import { TashkelPipe } from '../pipes/tashkel.pipe';
import { ReplacePipe } from '../pipes/replace.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { VerbsPipe } from '../pipes/verbs.pipe';
import { ExampcolorPipe } from '../pipes/exampcolor.pipe';
import { ExampcolordePipe } from '../pipes/exampcolorde.pipe';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ SearchPage, TashkelPipe, ReplacePipe, TypePipe, VerbsPipe, ExampcolorPipe, ExampcolordePipe]
})
export class SearchPageModule {}
