## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Missing environment variable.

When you first run the project you may see the following error:

```
Missing XXX environment variable. See README.md for instructions of how to fix this error.
```

You can fix this error by doing the following:

1. Duplicate the `.env.default` file and name that copy `.env.local`
1. Set `COLLECTION_NAME` to your own name, eg: `COLLECTION_NAME=johnSmith`
1. Set `DB_BASE_URL` to your MongoDB Cloud database URL, eg: `DB_BASE_URL=mongodb+srv://username:password@cluster-name.ab123.mongodb.net`
1. Re-run the project and the error should be resolved
