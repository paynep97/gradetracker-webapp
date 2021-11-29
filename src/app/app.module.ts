import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { StudentPageComponent } from './student-page/student-page.component';
import { SettingsComponent } from './settings/settings.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeDashComponent,
    StudentPageComponent,
    SettingsComponent,
    CoursePageComponent,
    CalendarPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeDashComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'student', component: StudentPageComponent},
      {path: 'calendar', component: CalendarPageComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'courses', component: CoursePageComponent},

    ]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
