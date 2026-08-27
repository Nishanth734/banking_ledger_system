# Tally — Final Plan

## Overview

Personal finance tracker: manual/voice/photo expense entry, income & expense tracking, categories, goals, budgets, transaction history, spending summaries, and an AI chat that answers questions using the user's stored transaction data.

## Tech Stack

* **Frontend:** HTML, CSS, JS — Chart.js (CDN) for dashboard charts, Web Speech API for voice entry
* **Backend:** Node.js + Express, REST API
* **DB:** MySQL / MariaDB
* **Auth:** JWT + bcrypt
* **Validation:** Zod
* **AI:** Groq API — finance chat, receipt/bill image extraction, and optionally voice transcription
* **Security:** helmet, cors, express-rate-limit
* **Tools:** Git/GitHub, Postman/Thunder Client, Jest + Supertest

## Features

1. **Auth** — register/login, JWT, bcrypt
2. **Dashboard** — balance, income/expense totals, category pie chart, balance trend line
3. **Transactions** — add/edit/delete, income or expense
4. **Expense entry — 4 ways:**

   * Manual form
   * **Voice** — mic → Web Speech API → text → parsed fields → user confirms
   * **Bill/receipt photo** — image → Groq vision → amount/merchant/date extracted → prefills form → user confirms
   * **Statement import** — upload UPI/bank statement CSV or PDF → parsed → bulk-imported
5. **Categories** — default seeded + user custom
6. **Goals** — target amount, deadline, progress
7. **Budgets** — monthly limit per category, actual vs. limit
8. **Recurring transactions** — auto-log salary/rent/subscriptions
9. **Transaction history** — filters, search, pagination
10. **Monthly/yearly summaries** — computed from transactions on the fly, never stored separately
11. **AI finance chat** — answers questions using relevant transaction/summary data; use tool/function calling where appropriate instead of sending the entire transaction table; no history required. User asks gets the answer.

## Data Model (MySQL)

| Table                    | Key fields                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `users`                  | id, name, email, password_hash, currency, timezone                                           |
| `categories`             | id, user_id (null = default), name, type, is_default                                         |
| `transactions`           | id, user_id, category_id, type, amount `DECIMAL(12,2)`, date, note, is_recurring, deleted_at |
| `goals`                  | id, user_id, title, target_amount, current_amount, deadline, status                          |
| `budgets`                | id, user_id, category_id, period (`YYYY-MM`), limit_amount                                   |
| `recurring_transactions` | id, user_id, category_id, type, amount, frequency, start_date, end_date, next_run_date       |
|                          |                                                                                              |

Use `DECIMAL`, never `FLOAT`, for money. Every query on every table filters by `user_id`.

## API Endpoints

* **Auth:** `POST /auth/register`, `/auth/login`, `/auth/forgot-password`, `/auth/reset-password`
* **Users:** `GET/PATCH /users/me`
* **Transactions:** `GET/POST /transactions`, `PATCH/DELETE /transactions/:id`
* **Entry helpers:** `POST /transactions/scan-bill`, `/transactions/parse-voice`, `/transactions/import`
* **Categories:** `GET/POST /categories`, `PATCH/DELETE /categories/:id`
* **Goals:** `GET/POST /goals`, `PATCH/DELETE /goals/:id`
* **Budgets:** `GET/POST /budgets`, `PATCH/DELETE /budgets/:id`
* **Summary:** `GET /summary/dashboard`, `/summary/monthly?month=YYYY-MM`, `/summary/yearly?year=YYYY`
* **AI:** `POST /ai/chat`

## Folder Structure

```text
tally/
├── client/
│   ├── index.html
│   ├── css/
│   └── js/
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── schemas/
│   │   ├── models/
│   │   └── app.js
│   └── tests/
└── README.md
```

## Build Order

1. Auth + DB schema + seeded default categories
2. Transaction/category/goal CRUD + dashboard totals
3. Budgets + recurring transactions
4. Filters/search/pagination + monthly/yearly summaries + charts
5. AI chat
6. Voice entry + bill-photo OCR + statement import
7. Security hardening, tests, deploy

## Important Rule

Do not introduce or change major technologies, frameworks, databases, or architecture without asking me first.

If another technology would be better, explain why and **wait for my confirmation** before using it.
