/** @type {import('next-sitemap').IConfig} */

// locations.ts file se data import
const { locations } = require("./components/Locations.ts");

module.exports = {
  siteUrl: "https://airqualitynearme.org",
  generateRobotsTxt: false,
  sitemapSize: 5000,

  additionalPaths: async () => {
    const urls = [];

    // Nested structure → cities extract
    locations.forEach((countryObj) => {
      countryObj.states.forEach((stateObj) => {
        stateObj.cities.forEach((city) => {
          // current air quality
          urls.push({
            loc: `/current-air-quality/${city}`,
            changefreq: "daily",
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });

          // indoor air quality
          urls.push({
            loc: `/indoor-air-quality/${city}`,
            changefreq: "daily",
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        });
      });
    });

    return urls;
  },
};
