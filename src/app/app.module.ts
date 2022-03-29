import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {  Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
//import {SpracheModule} from './components/sprache/SpracheModule';
import {Store} from '@ngrx/store';
import {AppState} from "./Appstore/app.state";

import {LoginService} from './services/login/login.service'
import{BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import {StoreModule, StoreRootModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {GetAllSprachenActions} from "./ngrx/sprache/sprachen.actions";
import {GetAllRaumeActions} from "./ngrx/raum/raume.actions";
import {GetAllNiveausActions} from "./ngrx/niveau/niveau.actions";
import {GetAllRolesActions} from "./ngrx/roles/roles.actions";
import {rolesReducer} from "./ngrx/roles/roles.reducer";

import {niveausReducer} from "./ngrx/niveau/niveau.reducer";
import {raumeReducer} from './ngrx/raum/raume.reducer';
import {sprachenReducer} from "./ngrx/sprache/sprachen.reducer";

import { EffectsModule } from '@ngrx/effects';
import {LoginReducer} from "./ngrx/login/login.reducer";
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { environment } from 'src/environments/environment';
import { CustomSerializer } from './Appstore/router/custom-serializer';
import { appReducer } from './Appstore/app.state';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {LoginGuard} from './ngrx/login/login.guard';
import {  HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDatepickerModule } from '@angular/material/datepicker';
    import { MatNativeDateModule } from '@angular/material/core';
    import {MatInputModule} from '@angular/material/input';
    import { MatCardModule } from '@angular/material/card';
        import { MatButtonModule } from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { LoginEffect } from './ngrx/login/login.effect';
import { SPRACHE_STATE_NAME } from './ngrx/sprache/sprachen.selector';
import {NIVEAU_STATE_NAME} from './ngrx/niveau/niveau.selector';
import {RAUME_STATE_NAME} from './ngrx/raum/raume.selector';
import {ROLES_STATE_NAME} from './ngrx/roles/roles.selector';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,


} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  CardModule,
  ButtonModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgeComponent } from './components/benachrichtungen/badge/badge.component';
import {  MatSelectModule } from '@angular/material/select';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
 DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, LoadingSpinnerComponent, NewUserComponent, AlertsComponent,  BadgeComponent],
  imports: [
  MatCardModule,MatNativeDateModule,MatInputModule,MatIconModule,MatButtonModule,MatSelectModule,
BrowserAnimationsModule,

    AppRoutingModule,
AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    BrowserModule,

    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    ButtonModule,
        HttpClientModule,
    PerfectScrollbarModule,
    NavModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
ReactiveFormsModule,
    SidebarModule,
    SharedModule,
   // EffectsModule.forRoot([SprachenEffects]),
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    CommonModule,
    ModalModule.forRoot(),

     //StoreModule.forRoot({catalogueSprachenState: sprachenReducer}),
    // StoreModule.forRoot({catalogueNiveausState: niveausReducer}),
StoreModule.forFeature(NIVEAU_STATE_NAME, niveausReducer),
StoreModule.forFeature(RAUME_STATE_NAME, raumeReducer),
    StoreModule.forFeature(SPRACHE_STATE_NAME, sprachenReducer),
    StoreModule.forFeature(ROLES_STATE_NAME, rolesReducer),

        StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(appReducer),

        StoreDevtoolsModule.instrument({
             logOnly: environment.production,
           }),

StoreRouterConnectingModule.forRoot({
          serializer: CustomSerializer,
        }),

  ],
  providers: [
  {
provide: APP_INITIALIZER,
useFactory: (store: Store<AppState>)=>{
return ()=> {
store.dispatch(GetAllSprachenActions() );
store.dispatch(GetAllNiveausActions() );
store.dispatch(GetAllRaumeActions() );
store.dispatch(GetAllRolesActions() );


};
},
multi :true,
deps: [Store]
  },

  LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
LoginGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
