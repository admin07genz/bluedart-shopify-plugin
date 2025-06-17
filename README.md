# Bluedart Shopify Plugin 🚀

This Node.js plugin integrates Shopify orders with Blue Dart’s logistics API to:
- Automatically generate waybills
- Send order data from Shopify to Blue Dart
- Sync tracking details

## Installation (Local)
```bash
npm install
npm start
```

## Environment Variables (`.env`)
```
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_SCOPES=
SHOPIFY_APP_URL=
MONGODB_URL=
BLUEDART_LICENSE_KEY=
BLUEDART_CUSTOMER_CODE=
```

## Built with
- Node.js + Express
- Shopify API
- Blue Dart API
- MongoDB (for AWB storage)
