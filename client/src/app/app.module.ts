import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService} from './services/auth.service';
import {BlogService} from './services/blog.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {NotAuthGuard} from './guards/notAuth.guard';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
