import { describe, expect, test } from "bun:test"
import { buildSystemExtras } from "../../src/session/build-system-extras"
import type { Agent } from "../../src/agent/agent"

function baseAgent(over: Partial<Agent.Info>): Agent.Info {
  return {
    name: "outliner",
    mode: "all",
    options: {},
    permission: [{ permission: "*", pattern: "*", action: "allow" }],
    ...over,
  }
}

describe("buildSystemExtras", () => {
  test("returns empty when systemPromptOnly is true", () => {
    const agent = baseAgent({ systemPromptOnly: true, prompt: "ONLY_AGENT" })
    const out = buildSystemExtras(agent, {
      env: ["ENV_BLOCK"],
      skills: "SKILLS",
      instructions: ["Instructions from: /x/CLAUDE.md\nhello"],
    })
    expect(out).toEqual([])
  })

  test("merges env, skills, instructions when systemPromptOnly is false", () => {
    const agent = baseAgent({ systemPromptOnly: false })
    const out = buildSystemExtras(agent, {
      env: ["E1"],
      skills: "S1",
      instructions: ["I1"],
    })
    expect(out).toEqual(["E1", "S1", "I1"])
  })

  test("omits skills slice when skills undefined", () => {
    const agent = baseAgent({})
    const out = buildSystemExtras(agent, {
      env: ["E"],
      skills: undefined,
      instructions: ["I"],
    })
    expect(out).toEqual(["E", "I"])
  })
})
