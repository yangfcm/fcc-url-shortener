# URL Shortener Microservice

FreeCodeCamp Back End Development and APIs Project

[Task](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

[My work](https://fcc-url-shortener-hxhb.onrender.com/)

## How To Run

1. Install dependencies

```bash
$ npm install
```

2. Add config file to specify MongoDB connection string `config/config.json`:

```json
{
  "development": {
    "MONGODB_URI": "your_MongoDB_URI"
  }
}
```

3. Start server

```bash
  $ npm run dev
```

## Endpoints

1. _POST_ `/api/shorturl`

   Body Example:

   ```
   url=https://google.com
   ```

   Response Example

   ```json
   {
     "original_url": "https://google.com",
     "short_url": "eiwjXse1w"
   }
   ```

2. _GET_ `/api/shorturl/:urlId`

   If given `urlId` is valid, you will be redirected to the corresponding origianl URL. Otherwise, you will get error response:

   ```json
   {
     "error": "No short URL found for the given input"
   }
   ```
