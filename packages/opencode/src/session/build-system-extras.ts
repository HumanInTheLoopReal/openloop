import type { Agent } from "@/agent/agent"

/** Pieces merged after the agent prompt in {@link packages/opencode/src/session/llm.ts}. */
export type SystemExtrasInput = {
  env: string[]
  skills: string | undefined
  instructions: string[]
}

/** When `agent.systemPromptOnly` is set, skip project instructions, skills preamble, and env block. */
export function buildSystemExtras(agent: Agent.Info, parts: SystemExtrasInput): string[] {
  if (agent.systemPromptOnly) return []
  return [...parts.env, ...(parts.skills ? [parts.skills] : []), ...parts.instructions]
}
