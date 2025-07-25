# 💸 Paytm Clone - Full Stack Application

This is a full-stack Paytm clone built with **Next.js**, **Prisma**, and **PostgreSQL**, supporting real-time transaction tracking, user authentication, merchant payments, and balance management. It follows modern development practices with a **monorepo structure** and **CI/CD integration**.

---

## 🚀 Tech Stack

| Layer       | Technology                  |
|-------------|------------------------------|
| Frontend    | Next.js, Tailwind CSS        |
| Backend     | Next.js API Routes, Prisma   |
| Auth        | NextAuth.js (Credentials)    |
| Database    | PostgreSQL                   |
| DevOps      | GitHub Actions (CI/CD), Vercel |
| Monorepo    | Turborepo structure (assumed) |

---

## ✨ Features

- ✅ User registration and login (NextAuth credentials provider)
- 💰 Balance management for users
- 🏬 Merchant payment flow
- 📲 On-ramp transaction history
- 🔐 Secure session-based authentication
- 🧾 Transaction ledger per user
- 📦 Clean monorepo structure
- 🔄 Continuous deployment (CI/CD)

---

## 📁 Project Structure

paytm-complete/
```
│
├── apps/
│ └── user-app/ # Next.js frontend
│
├── packages/
│ ├── db/ # Prisma schema and DB logic
│ ├── config/ # Shared configs (env, auth, etc.)
│
├── prisma/ # Migrations & seed
│
├── .github/workflows/ # CI/CD configs
├── .env.example # Sample environment variables
└── README.md

```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Harsheetsharma/paytm-complete.git
cd paytm-complete
```
### Install Dependencies
```
npm install
```
### Set up Environment Variables
Create a .env file in the root and in packages/db based on .env.example.
```
# Root .env
DATABASE_URL=docker_database_URL
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```
### Migrate Database
```
cd packages/db
npx prisma migrate dev
npx prisma generate
```
