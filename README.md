# 1delta landing page

Deployed [here](https://1delta.io).

## Local development

```bash
npm ci --legacy-peer-deps
npm run dev
```

`react-ga` and older React components retain pre-existing React 16 peer ranges,
so installs require `--legacy-peer-deps` with the current React 18 app.

## Production build

```bash
npm run build
npm start
```

The production build uses Next.js 15 and the maintained
`@ducanh2912/next-pwa` plugin. The PWA retains `/sw.js` at the site root.
`next` pins a patched PostCSS 8 release, and the PWA uses patched Workbox 7
within their existing major-version APIs.

The compressed Three.js landing model loads its Draco decoder from `public/draco`
instead of an external CDN. Keep these decoder assets aligned with `three` when
upgrading the renderer.

The city lighting HDRI (`public/potsdamer_platz_1k.hdr`) comes from the
[pmndrs/drei-assets collection](https://github.com/pmndrs/drei-assets),
attributed there to HDRI Haven. Serving it locally keeps the scene usable
without a third-party CDN.
