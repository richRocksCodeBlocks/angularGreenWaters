import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchMapComponent } from './search/search-map/search-map.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchService } from './services/search.service';
import { AgmCoreModule } from '@agm/core';
import { PostPropertyComponent } from './post/post-property/post-property.component';
import { PostListingComponent } from './post/post-listing/post-listing.component';
import { AddService } from './services/add.service';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'post', component: PostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchFormComponent,
    SearchMapComponent,
    PostComponent,
    HomeComponent,
    AboutUsComponent,
    PostPropertyComponent,
    PostListingComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBU3TExBVL5aEaeNn6cQQE4H6Qzjd98MVA'
    })
  ],
  providers: [SearchService, AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
