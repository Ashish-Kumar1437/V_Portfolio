import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OppositeDirectionMoveDirective } from './directives/opposite-direction-move.directive';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { CursorHoverDirective } from './directives/cursor-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreloaderComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    OppositeDirectionMoveDirective,
    CustomCursorComponent,
    CursorHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
