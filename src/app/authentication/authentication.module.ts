import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    DropDownsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class AuthenticationModule { }
