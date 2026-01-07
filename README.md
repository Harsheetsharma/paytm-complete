# 💸Problem statement

Modern digital wallet systems must handle concurrent payment requests, prevent duplicate transactions, process payments asynchronously, and provide real-time status updates to users — all while maintaining data consistency and reliability.

This project simulates a Paytm-like digital wallet system, focusing on backend correctness and system design rather than UI polish. The goal was to design and implement a production-grade payment flow that handles real-world failure scenarios such as retries, race conditions, and webhook duplication.

Primary focus: correctness, idempotency, async processing, and observability — not just feature count.

---

## 🎯 System Goals

- Prevent duplicate or double payments
- Handle concurrent requests safely
- Process payments asynchronously
- Maintain accurate user balances
- Provide real-time transaction status updates
- Remain resilient to failures (network, webhook retries, worker crashes)

---

## 🏗️ Architecture Overview

Core Components

- ### Web Client
  Next.js application for user interaction (dashboard, payments, history)
- ### API Layer
  Handles authentication, validation, idempotency enforcement, and transaction creation
- ### Database (PostgreSQL + Prisma)
  Stores users, balances, transactions, and ledger entries with transactional guarantees
- ### Redis
  Used for idempotency keys and asynchronous job queuing
- ### Worker Service
  Processes payment jobs independently from API requests
- ### Stripe
  External payment processor using Payment Intents
- ### Webhooks
  Receives final payment status from Stripe
  The system is designed to decouple user requests from payment execution to improve reliability and scalability.

---

🔁 End-to-End Payment Flow

- User initiates a payment from the dashboard
- Backend validates authentication and input
- An idempotency key is generated and checked to prevent duplicate requests
- A payment record is created in the database with status PENDING
- A payment job is pushed to a Redis queue
- Worker service consumes the job
- Worker creates a Stripe Payment Intent
- Stripe processes the payment asynchronously
- Stripe sends the final status via webhook
- Webhook handler updates the database atomically (SUCCESS / FAILED)
- This ensures user requests are fast, while payment execution is reliable and retry-safe.

---

## System Architecture

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
