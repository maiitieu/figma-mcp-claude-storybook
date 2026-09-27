# Figma MCP × Claude × Cursor

A playground for design-to-code workflows using the [Figma MCP server](https://www.figma.com/developers/mcp), Claude, and Cursor.

## Setup

1. **Enable Figma MCP in Cursor** — this repo includes `.cursor/mcp.json`. Open the project in Cursor and authenticate with Figma when prompted.
2. **Install the Figma plugin** (optional, recommended) — adds skills like `/figma-use`, `/figma-generate-design`, and Code Connect support.
3. **Paste a Figma URL** in Agent chat and describe what you want — implement a screen, sync tokens, generate a diagram, etc.

## Workflows

| Goal | Example prompt |
|------|----------------|
| Design → code | "Implement this Figma screen in React: `https://figma.com/design/...`" |
| Code → design | "Push this page to Figma using the design system" |
| Diagrams | "Create a sequence diagram in FigJam for this auth flow" |
| Tokens | "Extract color and spacing tokens from this file and map them to CSS variables" |
| Code Connect | "Map this Button component to its Figma counterpart" |

See [`prompts/examples.md`](prompts/examples.md) for more.

## Project structure

```
.
├── .cursor/mcp.json    # Figma MCP server config
├── prompts/            # Example agent prompts
└── src/                # App code (add your stack here)
```

## Next steps

- Add your app framework under `src/` (React, Next.js, SwiftUI, etc.)
- Share a Figma file URL and ask the agent to implement or sync
- Use `/figma-use` skills for programmatic Figma edits
