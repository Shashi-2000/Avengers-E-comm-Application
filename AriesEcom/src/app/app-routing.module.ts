import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guards.service';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : '', component : MasterComponent },
  { path : 'distributer', loadChildren : () => import('./distributer/distributer.module').then(a => a.DistributerModule), canActivate : [AuthGuardService] },
  { path : 'authorizer', loadChildren : () => import('./authorizer/authorizer.module').then( a => a.AuthorizerModule), canActivate : [AuthGuardService] },
  { path :'admin', loadChildren : () => import('./admin/admin.module').then(a=>a.AdminModule), canActivate : [AuthGuardService] },
  { path : 'warehouse',  loadChildren : () => import('./warehouse/warehouse.module').then(a => a.WarehouseModule), canActivate : [AuthGuardService] },
  { path : 'register', component : RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
