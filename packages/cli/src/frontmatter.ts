import { parse } from "yaml";

export type SkillDocument = {
  metadata: Record<string, unknown>;
  body: string;
};

export function parseSkillDocument(content: string): SkillDocument {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("SKILL.md must start with YAML front matter delimited by ---.");
  }

  const metadata = parse(match[1]) as unknown;

  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    throw new Error("YAML front matter must parse to an object.");
  }

  return {
    metadata: metadata as Record<string, unknown>,
    body: match[2].trimStart()
  };
}
