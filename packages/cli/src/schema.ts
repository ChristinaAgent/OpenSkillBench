import { Ajv, type ErrorObject } from "ajv";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export type SchemaValidationResult = {
  valid: boolean;
  errors: string[];
};

export function validateSkillMetadata(
  metadata: Record<string, unknown>,
  schema = loadSkillSchema()
): SchemaValidationResult {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const valid = validate(metadata);

  return {
    valid,
    errors: valid ? [] : formatAjvErrors(validate.errors ?? [])
  };
}

function loadSkillSchema(): Record<string, unknown> {
  const schemaPath = findSchemaPath();
  return JSON.parse(readFileSync(schemaPath, "utf8")) as Record<string, unknown>;
}

function findSchemaPath(): string {
  const candidates = [
    resolve(process.cwd(), "schemas/skill.schema.json"),
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../schemas/skill.schema.json"),
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../../schemas/skill.schema.json")
  ];

  const schemaPath = candidates.find((candidate) => existsSync(candidate));

  if (!schemaPath) {
    throw new Error("Could not locate schemas/skill.schema.json.");
  }

  return schemaPath;
}

function formatAjvErrors(errors: ErrorObject[]): string[] {
  return errors.map((error) => {
    const path = error.instancePath || "/";
    return `${path} ${error.message ?? "is invalid"}`;
  });
}
