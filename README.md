**ssm-to-env**

**Overview:**

ssm-to-env is a tool designed to simplify the process of creating a .env file by fetching parameters from AWS Systems Manager (SSM) Parameter Store. 

## Demo

https://github.com/user-attachments/assets/d145398a-d3d2-42c1-a820-87a0cdf6e3a2


## Instructions





1. Add the Key and Value pairs from SSM to your `env` file.
For example:

```
DB_POSTGRES_DATA_PORT=/db/postgres/data/port
DB_POSTGRES_DATA_USERNAME=/db/postgres/data/username
DB_POSTGRES_DATA_PASSWORD=/db/postgres/data/password
DB_POSTGRES_DATA_ENDPOINT=/db/postgres/data/endpoint
```
    

2. In the root directory of your project, run the following commands:

```bash
npm install
npm run build
node dist/app.js
```

---

