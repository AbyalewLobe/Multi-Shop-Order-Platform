# Monorepo

Full-stack monorepo using npm workspaces with Next.js frontends and an Express API.

## Structure

```
monorepo/
├── apps/
│   ├── web/        # Public-facing Next.js app (port 3001)
│   └── admin/      # Admin dashboard Next.js app (port 3002)
├── services/
│   └── api/        # Express REST API (port 3000)
└── packages/
    ├── ui/         # Shared React components (Button, Card, Badge)
    └── utils/      # Shared utilities (apiFetch, apiUrl, formatDate)
```

## Getting started

**Install all dependencies from the root:**

```bash
npm install
```

**Run everything** (three separate terminals):

```bash
# API
npm run dev --workspace=services/api

# Web app
npm run dev --workspace=apps/web

# Admin panel
npm run dev --workspace=apps/admin
```

| App   | URL                       |
|-------|---------------------------|
| Web   | http://localhost:3001      |
| Admin | http://localhost:3002      |
| API   | http://localhost:3000      |

## API endpoints

| Method | Path                      | Description              |
|--------|---------------------------|--------------------------|
| GET    | /health                   | Health check             |
| GET    | /shops                    | List all shops           |
| GET    | /products                 | List all products        |
| GET    | /products?shopId=1        | Filter products by shop  |
| GET    | /shops/:id/products       | Products under a shop    |
| POST   | /products                 | Create a product         |

**POST /products** body:
```json
{ "name": "Espresso", "price": 3.50, "shopId": 1 }
```

## Shared packages

### `@monorepo/ui`

```js
import { Button, Card, CardHeader, CardBody, Badge } from '@monorepo/ui';
```

- `Button` — `variant`: `primary | secondary | ghost`, `size`: `sm | md | lg`
- `Card`, `CardHeader`, `CardBody` — composable card layout
- `Badge` — colour-coded category label

### `@monorepo/utils`

```js
import { apiFetch, apiUrl, ApiError, formatDate, capitalize } from '@monorepo/utils';
```

- `apiUrl(path)` — builds a full URL using `NEXT_PUBLIC_API_URL`
- `apiFetch(url, options)` — fetch wrapper with error handling, throws `ApiError`
- `ApiError` — carries `.status` (HTTP code) for conditional error handling

## Environment variables

Each app reads `NEXT_PUBLIC_API_URL` from its `.env.local`:

```
# apps/web/.env.local
# apps/admin/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Adding a new workspace

Drop a folder with a `package.json` under `apps/`, `services/`, or `packages/` and run `npm install` from the root.
