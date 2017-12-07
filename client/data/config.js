import Raven from 'raven-js';

const sentry_key = "d6f67df229ba413da98ddb74767b0ebf";
const sentry_app = "255999";

const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException( ex, context ) {
    Raven.captureException(ex, {
        extra: context
    });
    window && window.conosole && console.error && console.error(ex);
}

export  default sentry_url;