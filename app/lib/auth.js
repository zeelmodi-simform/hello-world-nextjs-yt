import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GithubProvider from 'next-auth/providers/github'
import clientPromise from './mongodb';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // NOTE: to connect with mongo Database
    // adapter: MongoDBAdapter(clientPromise),
    // session: {
    //     strategy: 'jwt'
    // }
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            session.user.id = token.id
    
            return session
        }
    }
};