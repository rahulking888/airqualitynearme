/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://airqualitynearme.org',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const cities = [
      'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix',
      'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
      'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
      'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington',
      'boston', 'el-paso', 'nashville', 'detroit', 'oklahoma-city',
      'portland', 'las-vegas', 'memphis', 'louisville', 'baltimore',
      'milwaukee', 'albuquerque', 'tucson', 'fresno', 'sacramento',
      'mesa', 'kansas-city', 'atlanta', 'long-beach', 'oregon-city',
      'colorado-springs', 'raleigh', 'miami', 'virginia-beach',
      'omaha', 'oakland', 'minneapolis', 'tulsa', 'arlington',
      'tampa', 'new-orleans', 'wichita', 'cleveland', 'bakersfield',
      'aurora', 'anaheim', 'honolulu', 'santa-ana', 'riverside',
      'corpus-christi', 'lexington', 'stockton', 'henderson',
      'saint-paul', 'st-petersburg', 'cincinnati', 'pittsburgh',
      'greensboro', 'anchorage', 'plano', 'lincoln', 'orlando',
      'irvine', 'newark', 'toledo', 'durham', 'chula-vista',
      'fort-wayne', 'jersey-city', 'st-louis', 'stockton', 'santa-clarita',
      'norfolk', 'virginia-beach', 'reno', 'madison', 'salt-lake-city',
      'richmond', 'boise', 'tampa', 'birmingham', 'atlanta', 'miami',
      'des-moines', 'rochester', 'grand-rapids', 'modesto',
      'santa-ana', 'oregon-city', 'salem', 'ann-arbor', 'providence',
      'hartford', 'cambridge', 'new-haven', 'athens', 'wichita-falls',
      'jackson', 'mobile', 'augusta', 'columbia-sc', 'des-oto', 'el-monte',
      'tallahassee', 'pueblo', 'wichita', 'fayetteville', 'topeka',
      'boise', 'chattanooga', 'borders', 'eugene', 'flint', 'hampton',
      'irving', 'jefferson-city', 'kansas-city', 'lafayette', 'miami-gardens',
      'naples', 'omaha', 'pensacola', 'quincy', 'rochester', 'springfield',
      'tucson', 'utica', 'valdosta', 'wichita', 'yoakum', 'zanesville'
    ];
   
    return cities.map((city) => ({
      loc: `/current-air-quality/${city}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  }
};