// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // mbatServer: 'http://localhost:8080/',
  // auth0: {
  //   domain: 'blr-mbat.auth0.com',
  //   clientId: 'qqNdkcYcmvJQVkImasI89REx8vLM6XQC',
  //   clientSecret: 'O56J1R58lLqsR8BMyhBWmP_h89QsqEJDTFjw3pqr6FPmz6Fg3hy9MaZ9NqEZha3E'
  // },
  mbatServer: 'https://api.mbatapp.xyz/',
  auth0: {
    domain: 'mbat-staging.eu.auth0.com',
    clientId: '50PT42OeP7iJr8FdzIt5r4zTJS3cglFZ',
    clientSecret: 'HI8le1hd8pCao9t7Qsx5Ih_2LLzOKAuTQ5UK760tG6s9m-yTuJ2UlX0CNdPiXsnU'
  },
  ticketIframe: 'https://in.explara.com/widget-new/mba-tournament',
  validEmailDomain: ['gmail.com', 'xyz.com'],
  paymentPage: 'https://www.helloasso.com/associations/hec-mbat/evenements/mbat-2021-1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
