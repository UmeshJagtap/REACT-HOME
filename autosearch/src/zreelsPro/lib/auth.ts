import { bcrypt } from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers/credentials';
import { connectToDatabase } from 

export const authOptions: NextAuthOptions = {
  providers: {
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "text"},
            password: {label: "Password", type: "password"}
        },

        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Missing email or password");
            }

            try {
                await connectToDatabase() 
                const user = await User.findOne({email: CredentialsProvider.email})

                if(!user){
                    throw new Error("No user found");
                }

                await
            }
        }
    })
  },
};
