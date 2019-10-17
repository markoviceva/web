import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
import { ProfileComponent } from './components/profile/profile.component'
import { BlogComponent} from './components/blog/blog.component'
import { LoginComponent} from './components/login/login.component'
import { RegisterComponent} from './components/register/register.component'
import { AuthGuard} from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import {EditBlogComponent} from './components/blog/edit-blog/edit-blog.component';
import {DeleteBlogComponent} from './components/blog/delete-blog/delete-blog.component';
import {PublicProfileComponent} from './components/public-profile/public-profile.component';


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
  },
  { path: 'user/:username',
  component: PublicProfileComponent,
  canActivate: [AuthGuard]
  },
  { path: 'blog',
  component: BlogComponent,
  canActivate: [AuthGuard]
},
{ path: 'edit-blog/:id',
  component: EditBlogComponent,
  canActivate: [AuthGuard]
},
{ path: 'delete-blog/:id',
  component: DeleteBlogComponent,
  canActivate: [AuthGuard]
},
{ path: 'login',
component: LoginComponent,
canActivate: [NotAuthGuard]
},
{ path: 'register',
component: RegisterComponent,
canActivate: [NotAuthGuard]
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