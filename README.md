## Password Generator

Simple website and API to generate strong random passwords.

Website URL:\
[pass-gen-richh.vercel.app/](https://pass-gen-richh.vercel.app)

API Endpoint:\
[pass-gen-richh.vercel.app/api](https://pass-gen-richh.vercel.app/api)

API Documentation:\
[pass-gen-richh.vercel.app/api-docs](https://pass-gen-richh.vercel.app/api-docs)

---

### Website Summary

Click the `Generate` button to create a strong random password.

Options include:

- Password length
- Include lowercase characters
- Include uppercase characters
- include numbers
- Include special characters

The generated password is automatically copied to clipboard.

---

### Development summary

- The website and API are developed using `JavaScript` / `TypeScript` with the `NextJS` framework.
- The components are build in `React` and styled using `Styled Components`.
- End to end tests are written in `Cpress`.
- `GitHub Actions` are used to deploy to `Vercel`.

---

### Scripts

To run the development server:

```bash
pnpm dev
```

<br />

To perform a production build:

```bash
pnpm build
```

<br />
 
To start a preview server on a production build:

```bash
pnpm start
```

<br />

To run the linter:

```bash
pnpm lint
```

<br />

To run the Cypress end to end tests in headless mode:\
_(used in CI/CD)_

```bash
pnpm test
```

<br />

To run the Cypress end to end tests in a browser:

```bash
pnpm cypress:open
```

<br />

---

### Future improvements

- add password strength indicator. eg. [zxcvbn](https://github.com/dropbox/zxcvbn)
- add component tests.
- deploy to own domain name.

---
