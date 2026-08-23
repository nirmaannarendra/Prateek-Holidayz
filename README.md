# Rann Voyages / Prateek Holidayz Website

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

The contact and corporate enquiry forms require a delivery webhook:

```bash
INQUIRY_WEBHOOK_URL=https://example.com/your-crm-or-email-webhook
```

If this is missing, `/api/inquiry` returns an error instead of pretending the enquiry was delivered.

## Checks

```bash
npm run lint
npm run build
```

The production build fetches Google Fonts through `next/font/google`, so build environments need outbound network access or the fonts should be self-hosted.
