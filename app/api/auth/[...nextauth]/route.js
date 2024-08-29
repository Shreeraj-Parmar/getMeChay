import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import User from "@/models/User";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";

export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        //connect to db
        await connectDB();
        // check if already exist inn db ?
        const currentUser = await User.findOne({ email: email });
        if (!currentUser) {
          // create new user if not currUser
          const newUser = new User({
            email: email,
            username: email.split("@")[0],
          });
        }
      }
      // if you not writing return true , so github sign in not works , thats why :
      return true;
    },
  },
  async session({ session, user, token }) {
    const dbUser = await User.findOne({ email: session.user.email });
    console.log(dbUser);
    session.user.name = dbUser.username;
    return session;
  },
});

export { authOptions as GET, authOptions as POST };
