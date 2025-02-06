# Classify Number API

An API that takes a number and returns interesting mathematical properties about it, along with a fun fact fetched from the Numbers API.

## Features
- Determines if a number is **prime**
- Checks if a number is **perfect**
- Identifies **Armstrong numbers**
- Classifies a number as **even or odd**
- Calculates the **sum of its digits**
- Fetches a **fun fact** about the number from the Numbers API

## API Endpoint
**Base URL:** `<https://number-classification-api-nu.vercel.app/>`

### `GET /api/classify-number?number={number}`
#### Request Parameters:
- `number` (integer) - The number to classify

#### Example Request:
```bash
curl "https://number-classification-api-nu.vercel.app/api/classify-number?number=371"
```

#### Success Response (200 OK):
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response (400 Bad Request):
```json
{
    "number": "abc",
    "error": true
}
```

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/ebtaryoh/Number-Classification-API-
cd number-classification-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the API Locally
```bash
node index.js
```
The API will be available at `http://localhost:5000`.

## Deployment
You can deploy this API to **Railway, Render, Vercel, or any Node.js hosting platform.**

## Technologies Used
- **Node.js** with **Express.js**
- **Axios** (to fetch fun facts from the Numbers API)
- **CORS Handling** (for cross-origin requests)

## Contributions
Feel free to **fork** the repo and submit a **pull request** with improvements!



