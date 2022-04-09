import fs from "fs";

export const loadJsonFile = (file: string) => {
  try {
    const data = fs.readFileSync(file);
    return JSON.parse(data as any);
  } catch (err) {
    return {};
  }
};

export const writeJsonFile = (args: {path: string; data: Object}) => {
  const appRoot = require("app-root-path");
  const prevData = loadJsonFile(appRoot + args.path);
  const parsedData = JSON.stringify(
    {
      ...prevData,
      ...args.data,
    },
    null,
    2
  );
  console.log("Writting", appRoot + args.path);
  fs.writeFileSync(appRoot + args.path, parsedData);
  console.log(`Generated ${appRoot}${args.path}`);
};
