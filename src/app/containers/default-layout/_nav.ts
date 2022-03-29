import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Wir Sind die Besten',
    roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],

  },
  {
    name: 'Ihre mehrbeliebte Farbe',
    url: '/theme/colors',
    roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Zur unseren Webseite',
    url: '/theme/typography',
    roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
  roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
    name: 'Verwaltung der Schule',
    title: true
  },


   {

      name: 'Sprache',
      url: '/sprache',
      roles: ['VERWALTER','LEITER'],
      iconComponent: { name: 'cil-puzzle' },
      children: [
       {
          name: 'Neue Sprache',
          url: '/willkommen/sprache/neue-sprache'
        },

                 {
          name: 'Liste von Sprachen',
          url: '/willkommen/sprache/liste-sprache',
        },


      ]
    },
{
name: 'Niveau',
url: '/niveau',
roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
iconComponent: { name: 'cil-puzzle'},

children : [
{
name: 'Neues Niveau',
url: '/willkommen/niveau/neues-niveau',
roles:['LEITER','VERWALTER'],
},

{
name: 'Liste von Niveaus',
url: '/willkommen/niveau/liste-niveaus',
roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],

}
]

},

{
name: 'Kurs',
url: '/kurs',
roles:['STUDENT','LEITER','BETREUER','GAST','SEKRETAER','LEHRER','VERWALTER'],
iconComponent: { name: 'cil-puzzle'},

children : [
{
name: 'Neuer Kurs',
url: '/willkommen/kurs/neuer-kurs',

},

{
name: 'Liste von Kursen',
url: '/willkommen/kurs/liste-kurse',

}
]

},

{
name: 'Raum',
url: '/raum',
roles:['LEITER','VERWALTER'],
iconComponent: { name: 'cil-puzzle'},

children : [
{
name: 'Neuer Raum',
url: '/willkommen/raum/neuer-raum',

},

{
name: 'Liste von  Räumen',
url: '/willkommen/raum/liste-raume',
}
]

},

{
    roles:['LEITER','SEKRETAER','LEHRER','VERWALTER'],
    name: 'Verwaltung des Personnals',
    title: true
  },

 {
      name: 'Studenten',
      url: '/studenten',
      roles:['LEITER','GAST','SEKRETAER','LEHRER','VERWALTER'],
      iconComponent: { name: 'cil-puzzle' },
      children: [
       {
          name: 'Neuer Student',
          url: '/willkommen/student/neuer-student'
        },

                 {
          name: 'Liste von Studenten',
          url: '/willkommen/student/liste-student',
        },


      ]
    },

{
      name: 'Lehrer',
      url: '/lehrer',
      roles:['LEITER','VERWALTER'],
      iconComponent: { name: 'cil-puzzle' },
      children: [
       {
          name: 'Neuer Lehrer',
          url: '/willkommen/lehrer/neuer-lehrer',

        },

                 {
          name: 'Liste von Lehrern',
          url: '/willkommen/lehrer/liste-lehrer',

        },


      ]
    },


{
      name: 'Sekretär',
      url: '/sekretaer',
      roles:['LEITER','VERWALTER'],
      iconComponent: { name: 'cil-puzzle' },
      children: [
       {
          name: 'Neuer Sekretär',
          url: '/willkommen/sekretaer/neuer-sekretaer',

        },

                 {
          name: 'Liste von Sekretären',
          url: '/willkommen/sekretaer/liste-sekretaer',

        },


      ]
    },
    {
          name: 'Betreuer',
          url: '/betreuer',
          roles:['LEITER','SEKRETAER','LEHRER','VERWALTER'],
          iconComponent: { name: 'cil-puzzle' },
          children: [
           {
              name: 'Neuer Betreuer',
              url: '/willkommen/betreuer/neuer-betreuer',

            },

                     {
              name: 'Liste von Betreuern',
              url: '/willkommen/betreuer/liste-betreuer',

            },


          ]
        },
        {
              name: 'Verwalter',
              url: '/verwalter',
              roles:['LEITER'],
              iconComponent: { name: 'cil-puzzle' },
              children: [
               {
                  name: 'Neuer Verwalter',
                  url: '/willkommen/verwalter/neuer-verwalter',

                },

                         {
                  name: 'Liste von verwaltern',
                  url: '/willkommen/verwalter/liste-verwalter',

                },


              ]
            },
            {
                  name: 'Leiter',
                  url: '/leiter',
                  roles:['LEITER','VERWALTER'],
                  iconComponent: { name: 'cil-puzzle' },
                  children: [
                   {
                      name: 'Neuer Leiter',
                      url: '/willkommen/leiter/neuer-leiter',

                    },

                             {
                      name: 'Liste von Leitern',
                      url: '/willkommen/leiter/liste-leiter',

                    },


                  ]
                },

                   {
                                  name: 'Berechtigung',
                                  url: '/berechtigung',
                                  roles:['LEITER','VERWALTER'],
                                  iconComponent: { name: 'cil-puzzle' },
                                  children: [
                                   {
                                      name: 'Neue Berechtigung',
                                      url: '/willkommen/berechtigung/neue-berechtigung',

                                    },

                                             {
                                      name: 'Liste von Berechtigungen',
                                      url: '/willkommen/berechtigung/liste-berechtigungen',

                                    },


                                  ]
                                },


];
