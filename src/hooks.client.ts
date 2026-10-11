import { handleErrorWithSentry } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

const LOCALHOST = 'localhost';

const isLocalhost = () => globalThis.window.location.hostname === LOCALHOST;

const inializeSentry = () => {
  Sentry.init({
    dsn: 'https://355ea9d91915a8f092d5bd491cf977e0@o4512233025503232.ingest.de.sentry.io/4512233421537360',

    tracesSampleRate: 1.0,



    // Turns off collection of data that could identify users. Adjust per category:
    // https://docs.sentry.io/platforms/javascript/configuration/options/#dataCollection
    dataCollection: {
      userInfo: false,
      graphQL: { document: false, variables: false },
      genAI: { inputs: false, outputs: false },
      databaseQueryData: false,
      queues: false,
      httpBodies: [],
      httpHeaders: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
      cookies: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
      urlQueryParams: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
    },
  });
};


if (!isLocalhost) {
  inializeSentry();
}

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
