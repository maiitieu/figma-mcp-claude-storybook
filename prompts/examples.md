# Example prompts

Copy these into Cursor Agent chat. Replace Figma URLs with your own.

## Design to code

```
Implement the login screen from this Figma design.
Use existing components where possible and match spacing/colors from the design tokens.

https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1-2
```

## Inspect before building

```
Get design context for this node and summarize:
- layout structure
- typography scale
- color tokens
- interactive states

Then propose an implementation plan before writing code.

https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1-2
```

## Code to design

```
Take src/components/Dashboard.tsx and generate a matching Figma screen.
Search the design system first and reuse existing components/variables.
```

## FigJam diagrams

```
Generate a flowchart in FigJam for this checkout flow:
1. Cart review
2. Shipping
3. Payment
4. Confirmation
```

## Design system sync

```
Search the design system for Button variants, then create Code Connect mappings
for our src/components/ui/button.tsx file.
```
