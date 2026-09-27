# Figma → Claude → Storybook sync loop

Figma file: https://www.figma.com/design/u3AgRYe4MxAIutmfGzHJGy/Figma-MCP-x-Claude-x-Storybook?node-id=1-838
Component: ToastNotification (node 1:838, variants Success/Fail/Warning/Default) → `src/components/ToastNotification/`
Also: FCA Disclosure banner → `src/components/DisclosureBanner/` (code-only for now)
Tokens: Figma variables → `src/tokens/tokens.css` (primitive → semantic → component)

## The loop
1. **Designer changes Figma**: edit a variable (e.g. warning border colour) or a component property/variant.
2. **Claude reads it through Figma MCP**: `get_variable_defs` + `get_design_context` on the banner node.
3. **Claude diffs it against the code**: it updates only the changed tokens or props and leaves component logic alone.
4. **Guardrails**: `npm run typecheck` + Storybook a11y addon (WCAG AA, set to fail on violations).
5. **Storybook shows the change**: `npm run storybook` (local) or `build-storybook` → Netlify deploy.

## Sync prompt (paste into Claude / Cursor)
> Using Figma MCP, read the variables and design context for node 1:838 in file u3AgRYe4MxAIutmfGzHJGy.
> Diff them against src/tokens/tokens.css and src/components/ToastNotification/.
> Update only what changed and keep UK spelling in token names (colour). Then run typecheck,
> list the changes as a table (token/prop · old · new) and flag any contrast ratio below 4.5:1.

## MCP budget
Figma account mai.t.tieu@ has a Full seat. A sync costs about 3 calls (metadata, design context, variables).

## Baseline accessibility finding (27 Sept)
All 4 variants fail WCAG AA contrast for 16px text: Success 2.44:1, Warning 1.63:1, Fail 3.75:1, Default 3.74:1.
Fix: add darker `*-text` tokens (e.g. success-70) in Figma, then sync.

## Sync log
### Sync 1 (27 Sept 2026)
| Change | Figma | Code: old → new |
|---|---|---|
| Toast horizontal padding | `px-16 py-8` | `--toast-padding: 8px` → `8px 16px` |
| Warning text, icon and bar colour | `#8A5A00` (**hard-coded fill, not bound to a variable**) | `--colour-function-warning` (#FFB800) → new `--toast-warning-fg: #8a5a00` |

Accessibility: Warning contrast rose from **1.63:1 to 5.57:1** (passes AA). Success (2.44), Fail (3.75) and Default (3.74) still fail.
Design-system flag: the warning colour is now detached from `Function/color.warning`. Either update the variable or add a `Function/color.warning.text` token in Figma, then re-sync.
