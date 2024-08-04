const AWS = require("aws-sdk");
const fs = require("fs");
AWS.config.update({ region: "eu-west-1" });
const ssm = new AWS.SSM();

async function extractParametersFromSSM(paths: any[]) {
  const secretsResult = [];
  for (const item of paths) {
    try {
      if (!item) continue;
      const result = await ssm
        .getParameters({
          Names: [item.path],
          WithDecryption: true,
        })
        .promise();

      let valuePath = item.path;

      if (result.Parameters?.length > 0) {
        const values = result.Parameters.map(
          (parameter: any) => parameter.Value
        );
        valuePath = values[0];
        console.log(`extracted from ssm: ${item.name}`);
      }
      secretsResult.push({ name: item.name, value: valuePath });
    } catch (error) {
      console.error("Error retrieving parameters:", error);
    }
  }

  return secretsResult;
}

const envFile = fs.readFileSync("env", "utf8");
const list = envFile.split("\n").map((line: string) => {
  let sp = line.split("=");
  sp = line.split(":");
  const name = sp[0];
  let path = sp[1];

  path = path.split('"')[1];
  if (name)
    return {
      name,
      path,
    };
});

extractParametersFromSSM(list)
  .then((values) => {
    fs.writeFileSync(
      ".env",
      values.map((item) => `${item.name}=${item.value}`).join("\n")
    );
    console.log("created .env file");
  })
  .catch((error) => {
    console.error("error: ", error);
  });
