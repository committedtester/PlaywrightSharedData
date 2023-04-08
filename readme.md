# Playwright TypeScript

Looking at a need to share a central repository of users among multiple tests.
This user list could be provided by an external system. Right now it's a hardcoded JSON.
Declare once as a project dependency, write to csv and then have the tests reference this.

# Installation Overview

Please run:

1. **npm install**
2. **npm init playwright@latest**
3. _Build typescript (see below)_
4. **npm run test**

Key thing to note is that the tests will pull through a unique user from the json body established in
.setup.ts

## Build Typescript

As you are hopefully using vscode remember to

-   Open the command pallette (**CTRL+Shift+B**)
-   And select **tsc:watch**

This will automatically recompile your code whenever you save it. Typescript is currently writing to the dist folder
Alternatively in your terminal/command line run **npm run build** to trigger the process manually
