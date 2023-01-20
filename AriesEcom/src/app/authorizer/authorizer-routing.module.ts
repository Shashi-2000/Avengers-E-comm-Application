import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuHomeComponent } from "./au-home/au-home.component";
import { AuNavbarComponent } from "./au-navbar/au-navbar.component";
import { AuProfileComponent } from "./au-profile/au-profile.component";


const routes : Routes = [
    { path : '', component : AuHomeComponent },
    { path : 'au-profile', component : AuProfileComponent }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class AuthorizerRoutingModule {}