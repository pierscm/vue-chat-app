# Vue Chat App

The frontend for a real time chat application built using Vue, Tailwind, and Typescript. Sign in, see previous messages and add to the chat. Two separate browser tabs can be used to communicate as different users.

![gif](/src/assets/demo.gif)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

Make sure the backend is up and running. Once it is, run e2e tests.
```sh
npm run test:e2e:dev
```

### Improvements if I had additional time
1. Pinia store organization - pinia is new to me and ideally I would have liked more time to think about how I'd like to organize stores. I'd also liked to have spent a bit more time reading through the pinia documentation in general
2. Form error handling - add indications for the user that input is invalid and error states.
3. API error handling - fail gracefully, give the user an indication that something went wrong.
4. Tailwind and design improvements - I tried to get close to the provided sample and hoped to have time to come back to fonts, more specific colors and improve consistency.
5. Handle Websocket close, disconnect, errors.
