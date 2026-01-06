# 💸 Paytm Clone - Full Stack Application

Modern digital wallets must handle concurrent payments, prevent duplicate transactions, process payments asynchronously, and provide real-time feedback to users. This project simulates a simplified Paytm-like wallet system focusing on correctness, idempotency, and system reliability rather than UI polish..

---

## ✅ Stripe payment integration (Checkout flow)

## 🚀 Tech Stack

| Layer    | Technology                 |
| -------- | -------------------------- |
| Frontend | Next.js, Tailwind CSS      |
| Backend  | Next.js API Routes, Prisma |
| Auth     | NextAuth.js (Credentials)  |
| Database | PostgreSQL (Docker)        |
| DevOps   | GitHub Actions (CI/CD)     |
| Monorepo | Turborepo structure        |

---

## ✨ Features

- ✅ User registration and login (NextAuth credentials provider)
- 💰 Balance management for users
- 🏬 Merchant payment flow
- 📲 On-ramp transaction history
- 📲 Race conditions
- 🔐 Secure session-based authentication
- 🧾 Transaction ledger per user
- 📦 Clean turborepo structure
- 🔄 Continuous deployment (CI/CD)

---
## Payment Flow

- 1.User initiates payment from dashboard
- 2.Backend validates session & balance
- 3.Idempotency key prevents duplicate requests
- 4.Payment job is queued asynchronously
- 5.Worker creates Stripe Payment Intent
- 6.Stripe webhook confirms final status
- 7.Database updated atomically
- 8.Real-time UI update via WebSocket
---
## System Architecture

---<img width="1563" height="800" alt="Screenshot 2025-08-01 155849" src="https://github.com/user-attachments/assets/f25a0feb-978b-417a-ade7-7d9aadcf4333" />


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

### 2. Install Dependencies

```
npm install
```

### 3. Set up Environment Variables

Create a .env file in the root and in packages/db based on .env.example.

```
# Root .env
DATABASE_URL=docker_database_URL
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Migrate Database

```
cd packages/db
npx prisma migrate dev
npx prisma generate
```
