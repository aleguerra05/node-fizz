# Simple fizzbuzz NodeJs Site

To run please clone the repo:

```bash
git clone https://github.com/aleguerra05/node-fizz.git
```

then install dependencies and run:

```bash
npm install
npm run dev
```

You can see the site on http://localhost:8000

For run the tests:

```bash
npm test
```

For run the application on docker:

```bash
docker build -t node-fizz:1.0 .
```

then:

```bash
docker run -d -p 8000:8000 node-fizz:1.0
```
or:
```bash
docker compose up -d
```

Also the site is currently publish on https://fizzbuzz-five.vercel.app/


