import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/un-auth.guard';


const routes: Routes = [

  {
    path: '',
    children: [
      {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
      },
      {
        path: 'login',
        canActivate: [UnAuthGuard],
        component: LoginComponent
      },
      {
        path: 'economy',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/economy/economy.module').then(m => m.EconomyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
