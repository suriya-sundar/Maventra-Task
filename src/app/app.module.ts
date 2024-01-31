import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeCardComponent } from './master/welcome-card/welcome-card.component';
import { ResultsComponent } from './master/results/results.component';
import { LearningTimeComponent } from './master/learning-time/learning-time.component';
import { CoursesComponent } from './master/courses/courses.component';
import { LogoutColumnComponent } from './logout-column/logout-column.component';
import { RemaindersComponent } from './logout-column/remainders/remainders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardService } from './dashboard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    SidebarComponent,
    WelcomeCardComponent,
    ResultsComponent,
    LearningTimeComponent,
    CoursesComponent,
    LogoutColumnComponent,
    RemaindersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,MatMenuModule,
    MatSidenavModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
