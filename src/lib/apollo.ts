// Apollo Configure

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4q7odd4397p01z4dpmhdifj/master',
    cache: new InMemoryCache()
})