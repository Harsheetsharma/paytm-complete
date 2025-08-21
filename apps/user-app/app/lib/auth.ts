import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "next-auth/react";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
                password: { label: "Password", type: "password", required: true },
                name: { label: "name", type: "text", required: true }
            },
            // TODO: User credentials type from next-aut
            async authorize(credentials: any) {
                // Do zod validation, OTP validation here
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null;
                }

                try {
                    const user = await db.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword,
                            name: credentials.name
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    }
                } catch (e) {
                    console.error(e);
                }

                return null
            },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.name = user.name
            }
            return token;
        }
    },
    pages: {
        signIn: '/pages/signin',
        newUser: '/setName'
    }
}
