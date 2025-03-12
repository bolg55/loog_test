export default [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'media.hellorockstar.io.s3.us-east-1.amazonaws.com',
            'media.hellorockstar.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'media.hellorockstar.io.s3.us-east-1.amazonaws.com',
            'media.hellorockstar.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];