## LET'S GET STARTED

1. Install Packages

```bash
npm install
```

2. Check ./styles/icons if not empty. If empty, run:

```bash
npm run generate:icons
```

3. run the development server:

```bash
# LOCAL ENV
npm run development

# STAGING ENV
npm run staging

# PRODUCTION ENV
npm run production
```

Please configure env accordingly. You can find the file to
edit in ./.docs/.envs/.env.environmet_name

## CONFIGURATIONS

The app is using:

- [Next.js](https://nextjs.org/docs)
- [Material UI](https://mui.com/material-ui/)
- [REDUX THUNK](https://redux.js.org/usage/configuring-your-store)
- [API REQUEST](https://axios-http.com/docs/intro)
