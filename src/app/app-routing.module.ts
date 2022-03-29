import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginGuard} from './ngrx/login/login.guard';
import { DefaultLayoutComponent } from './containers';
import {LoginComponent} from './components/login/login.component';
import {DetailsComponent} from './components/sprache/details/details.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {ListSpracheComponent} from './components/sprache/list-sprache/list-sprache.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },



  {
    path: 'willkommen',
    component: DefaultLayoutComponent,
    canActivate: [LoginGuard],

    data: {
      title: 'Home'
    },
    children: [
       { path:'willkommen/sprache/liste-sprache/details/:codeSprache',
        component: DetailsComponent
},

      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
              path: 'niveau',
              loadChildren: () =>
                import('./components/niveau/niveau.module').then((m) => m.NiveauModule)
            },
 {
              path: 'berechtigung',
              loadChildren: () =>
                import('./components/berechtigung/berechtigung.module').then((m) => m.BerechtigungModule)
            },

             {
                  path: 'kurs',
                          loadChildren: () =>
                            import('./components/kurs/kurs.module').then((m) => m.KursModule)
                        },




                             {
                          path: 'defaultHeader',
                          loadChildren: () =>
                            import('./containers/default-layout/default-module.module').then((m) => m.DefaultModuleModule)
                        },
                             {
                          path: 'user-profile',
                          loadChildren: () =>
                            import('./components/user-profile/user-profile.module').then((m) => m.UserProfileModule)
                        },


                             {
                          path: 'raum',
                          loadChildren: () =>
                            import('./components/raum/raume.module').then((m) => m.RaumeModule)
                        },
                           {
                          path: 'benachrichtungen',
                          loadChildren: () =>
                            import('./components/benachrichtungen/benachrichtungen.module').then((m) => m.BenachrichtungenModule)
                        },


{
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
         {
              path: 'sprache',
              loadChildren: () =>
                import('./components/sprache/sprache.module').then((m) => m.SpracheModule),
                },


               {
              path: 'betreuer',
              loadChildren: () =>
                import('./components/betreuer/betreuer.module').then((m) => m.BetreuerModule),
                },
                   {
                              path: 'lehrer',
                              loadChildren: () =>
                                import('./components/lehrer/lehrer.module').then((m) => m.LehrerModule),
                                },
                                   {
                                              path: 'leiter',
                                              loadChildren: () =>
                                                import('./components/leiter/leiter.module').then((m) => m.LeiterModule),
                                                },
                                                   {
                                                              path: 'sekretaer',
                                                              loadChildren: () =>
                                                                import('./components/sekretaer/sekretaer.module').then((m) => m.SekretaerModule),
                                                                },
                                                                   {
                                                                              path: 'student',
                                                                              loadChildren: () =>
                                                                                import('./components/student/student.module').then((m) => m.StudentModule),
                                                                                },
                                                {
                                                 path: 'verwalter',
                                                  loadChildren: () =>
                                                  import('./components/verwalter/verwalter.module').then((m) => m.VerwalterModule),
                                                  },




    ]

  },
        { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },


  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
