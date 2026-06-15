# Portfolio — Carsten Lebek

A minimal, plain-HTML personal website. Built with [Astro](https://astro.build),
which compiles the pages down to static HTML — no client-side framework.

## Structure

```
/
├── public/            Static assets served from the site root
├── src/
│   ├── layouts/
│   │   └── Layout.astro    Shared HTML shell + global styles
│   └── pages/
│       ├── index.astro     Home / portfolio
│       └── impressum.astro  Legal notice (Impressum)
├── astro.config.mjs
└── package.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Install dependencies                         |
| `pnpm dev`        | Start the local dev server                   |
| `pnpm build`      | Build the static site to `./dist/`           |
| `pnpm preview`    | Preview the production build locally         |
