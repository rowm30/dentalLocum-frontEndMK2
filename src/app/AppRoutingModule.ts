import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    // other imports
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
