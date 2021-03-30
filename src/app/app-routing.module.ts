import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guard.service';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/main/people'},
  {path:'main',loadChildren:()=>import('src/app/main/main.module').then(m => m.MainModule) ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
