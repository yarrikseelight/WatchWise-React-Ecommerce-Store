import { createClient } from 'contentful';

const apiKey = import.meta.env.VITE_API_KEY;
const spaceId = import.meta.env.VITE_SPACE_ID;



export const contentfulClient = createClient({
    space: spaceId,
    accessToken: apiKey,
    host: "cdn.contentful.com"
  });