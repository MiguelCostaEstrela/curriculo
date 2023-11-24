import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacaoPageRoutingModule } from './formacao-routing.module';

import { FormacaoPage } from './formacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacaoPageRoutingModule
  ],
  declarations: [FormacaoPage]
})
export class FormacaoPageModule {}
