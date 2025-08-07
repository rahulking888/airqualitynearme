/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://airqualitynearme.org',
  generateRobotsTxt: true,
  sitemapSize: 5000,

  
  additionalPaths: async (config) => {
    const cities = [
      'new-york',
      'los-angeles',
      'chicago',
      'houston',
      'phoenix',
      'philadelphia',
      'san-antonio',
      'san-diego',
      'dallas',
      'san-jose',
      'austin',
      'jacksonville',
      'fort-worth',
      'columbus',
      'charlotte'
    ];

    return cities.map((city) => ({
      loc: `/current-air-quality/${city}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  }
};