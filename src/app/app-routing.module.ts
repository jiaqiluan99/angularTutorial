import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Public/home.component';
import { JobsComponent } from './Public/jobs.component';
import { LoginGuard } from './Core/Guards/login.guard';
import { AdminGuard } from './Core/Guards/admin.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "Jobs", component: JobsComponent},
  {path: "Account", loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule)},
  {path: "Admin", loadChildren: () => import("./Admin/admin.module").then(mod => mod.AdminModule), canLoad: [AdminGuard]},
  {path: "User", loadChildren: () => import("./User/user.module").then(mod => mod.UserModule), canActivateChild: [LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
