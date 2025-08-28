import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import SignInParams from 'next-auth'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: {
                    label: "Phone number",
                    type: "text",
                    placeholder: "1231231231",
                },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" },
            },
            async authorize(credentials) {
                if (!credentials?.phone || !credentials?.password || !credentials?.name) {
                    return null;
                }

                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone,
                    },
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(
                        credentials.password,
                        existingUser.password
                    );
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number,
                        };
                    }
                    return null;
                }

                // If new user, create account
                try {
                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
                    const user = await db.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword,
                            name: credentials.name,
                        },
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number,
                    };
                } catch (e) {
                    console.error("User creation failed:", e);
                    return null;
                }
            },
        }),
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async signIn(params) {
            return true;
        },
        async session({ token, session }) {
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
            }
            return token;
        },
    },
    pages: {
        signIn: "/pages/signin",
        newUser: "/setName",
    },
};
