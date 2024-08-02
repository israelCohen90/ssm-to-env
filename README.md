**ssm-to-env**

**Overview:**

ssm-to-env is a tool designed to simplify the process of creating a .env file by fetching parameters from AWS Systems Manager (SSM) Parameter Store. 

## Demo



## Instructions



1. Add the Key and Value pairs from SSM to your `env` file.
For example:

```TYPE=HTTP
DB_POSTGRES_DATA_PORT=/db/postgres/data/port
DB_POSTGRES_DATA_USERNAME=/db/postgres/data/username
DB_POSTGRES_DATA_ENDPOINT=/db/postgres/data/endpoint
DB_POSTGRES_DATA_ENDPOINT_RO=/db/postgres/data/endpoint-ro
MESSAGE_BROKER_KAFKA_COBWEB_BOOTSTRAP_BROKER_TLS=/message-broker/kafka/cobweb/bootstrap-broker-tls
MESSAGE_BROKER_RMQ_OS_LSPORTSRUNNER_USERNAME=/message-broker/rmq/os/lsportsrunner-username
MESSAGE_BROKER_RMQ_OS_ENDPOINT=/message-broker/rmq/os/endpoint
MESSAGE_BROKER_RMQ_OS_PORT=/message-broker/rmq/os/port
DB_REDIS_BLACK_WIDOW_CLUSTERED_ENDPOINT=/db/redis/black-widow-clustered/endpoint
DB_REDIS_BLACK_WIDOW_CLUSTERED_PORT=/db/redis/black-widow-clustered/port
MESSAGE_BROKER_AWS_MQ_DATA_HOST=/message-broker/aws-mq/data/host
MESSAGE_BROKER_AWS_MQ_DATA_USERNAME=/message-broker/aws-mq/data/username
MESSAGE_BROKER_AWS_MQ_DATA_PORT=/message-broker/aws-mq/data/port

```
    

2. In the root directory of your project, run the following commands:

```bash
npm install
npm run build
node dist/app.js
```

---

