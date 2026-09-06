import promptsData from "../../data/prompts.json";
import type { PromptItem } from "./types";

const prompts = promptsData as PromptItem[];

export function getAllPrompts(): PromptItem[] {
  return prompts;
}

export function getPromptById(id: string): PromptItem | undefined {
  return prompts.find((item) => item.id === id);
}
