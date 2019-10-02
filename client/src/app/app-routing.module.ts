import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ProfileComponent } from './components/profile/profile.component'
import { BlogComponent} from './components/blog/blog.component'
import { LoginComponent} from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RegisterComponent} from './components/register/register.component'


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'profile',
  component: ProfileComponent
  },
  { path: 'blog',
  component: BlogComponent
},
{ path: 'login',
component: LoginComponent
},
{ path: 'logout',
component: LogoutComponent
},
{ path: 'register',
component: RegisterComponent
},
 { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }