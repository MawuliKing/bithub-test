# bithub-test

This project is a simple Node.js Express application that demonstrates basic CRUD operations with a SQL database using TypeORM.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js]
- [SQL Database](MySQL database)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MawuliKing/bithub-test.git
   cd bithub-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root of the project and add your database connection details. Here is an example configuration:

   ```env
   DB_HOST=localhost
   DB_USERNAME=root
   DB_PASSWORD=
   DB_DATABASE=finance
   ```

4. **Run migrations**

   Open `src/core/data-source.ts` and turn `synchronize` to `true` to automatically run migrations and create tables in the database:

   ```typescript
   synchronize: true,  // Set this to true for the first run
   ```

5. **Start the application**

   ```bash
   npm start
   ```

   The server will start running on port `2000` by default. You can access the application at `http://localhost:2000`.

## API Endpoints

Here are the available API endpoints:

### Inventory

- **Add Inventory**

  **Endpoint:** `POST /inventory`

  **Request Body:**

  ```json
  {
    "name": "System Unit",
    "quantity": 10,
    "cost": 20000,
    "accountId": 2
  }
  ```

- **Get Store Inventory Items**

  **Endpoint:** `GET /inventory`

  **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "System Unit",
      "quantity": 10,
      "cost": 20000,
      "accountId": 2
    }
  ]
  ```

### GL Accounts

- **Get GL Accounts**

  **Endpoint:** `GET /gl-accounts`

  **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "Cash",
      "accountNumber": "1000",
      "accountTypeId": 1
    },
    {
      "id": 2,
      "name": "Inventory",
      "accountNumber": "1010",
      "accountTypeId": 1
    }
  ]
  ```

### Account Types

- **Get All Account Types**

  **Endpoint:** `GET /account-types`

  **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "Asset"
    },
    {
      "id": 2,
      "name": "Liability"
    }
  ]
  ```

### Transactions

- **Create a Transaction**

  **Endpoint:** `POST /transaction`

  **Request Body:**

  ```json
  {
    "amount": 50000,
    "debitAccountId": 1,
    "creditAccountId": 3
  }
  ```

## Example API Calls Using curl

1. **Input Initial Capital:**

   ```
   -d '{
       "amount": 50000,
       "debitAccountId": 1,
       "creditAccountId": 3
   }'
   ```

2. **Record Inventory Purchase:**

   ```
   -d '{
       "amount": 20000,
       "debitAccountId": 2,
       "creditAccountId": 1
   }'
   ```

3. **Record Sales Transaction (Sales Revenue):**

   ```
   -d '{
       "amount": 20000,
       "debitAccountId": 1,
       "creditAccountId": 4
   }'
   ```

4. **Record Sales Transaction (COGS):**

   ```
   -d '{
       "amount": 10000,
       "debitAccountId": 5,
       "creditAccountId": 2
   }'
   ```

## Stored Procedure

The stored procedure for the deliverables is in the `procedure.sql` file. This procedure demonstrates how to calculate the balance sheet, ensuring that the total amount of debits equals the total amount of credits.
