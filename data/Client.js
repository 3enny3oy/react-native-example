import { ApolloClient, InMemoryCache } from '@apollo/client';
export default function Client() {
    //React Native graphQL endpoint
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    });
}