const AWS = require("aws-sdk");
const fs = require("fs");
AWS.config.update({ region: "eu-west-1" });
const ssm = new AWS.SSM();

async function extractParametersFromSSM(paths: any[]) {
  try {
    const secretsResult = [];
    for (const item of paths) {
      if (!item) continue;

      const result = await ssm
        .getParameters({
          Names: [item.path],
        })
        .promise();
      const values = result.Parameters.map((parameter: any) => parameter.Value);
      console.log(`extracted: ${item.name}`);
      secretsResult.push({ name: item.name, value: values[0] });
    }
    return secretsResult;
  } catch (error) {
    console.error("Error retrieving parameters:", error);
    throw error;
  }
}

const envFile = fs.readFileSync("env", "utf8");
const list = envFile.split("\n").map((line: string) => {
  const sp = line.split("=");
  const name = sp[0];
  const path = sp[1];
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
