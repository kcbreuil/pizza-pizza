import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Pizza Pizza`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best place in Hamilton!',
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '05hux260',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
