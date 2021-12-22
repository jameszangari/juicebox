const withPWA = require("next-pwa");

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    siteTitle: "juicebox.nyc",
    siteDescription: "Age is just a number.",
    siteKeywords: "shopping, hats, hoodies, shirts",
    siteUrl: "https://www.juicebox.nyc",
    siteImagePreviewUrl: "/images/card.png",
    twitterHandle: "@juiceboxnyc",
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
});
