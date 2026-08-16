# SMARTLOOK Bridal Studio & Academy — website export

This ZIP contains the complete source project for the SMARTLOOK Bridal Studio & Academy website.

## Run locally

Requirements: Node.js 20+ and pnpm 9+.

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/smartlook-soap run dev
```

Then open the local URL shown by Vite.

## Build for production

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/smartlook-soap run build
```

The production files are written to `artifacts/smartlook-soap/dist/public`.

## Included

- SMARTLOOK website source and responsive styling
- CSS 3D barber-soap product presentation
- Cropped storefront logo at `artifacts/smartlook-soap/public/smartlook-logo.png`
- Storefront image at `artifacts/smartlook-soap/public/smartlook-storefront.png`
- Original uploaded image under `attached_assets/`
- Vite, Tailwind, TypeScript, pnpm workspace, and lockfile configuration
- Shared workspace libraries needed by the app

Generated dependencies and build output are intentionally excluded; run `pnpm install` to restore them.
