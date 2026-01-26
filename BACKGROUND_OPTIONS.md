# Background Image Placement Options

You can choose from different background image styles by editing `data/portfolio.ts`:

## Option 1: "none" (No Background Image)
- No background image, only the animated network diagram
- Clean, minimal look
- Best for: Professional, tech-focused aesthetic

## Option 2: "full" (Full Background)
- Background image covers entire hero section
- Low opacity overlay (configurable)
- Network diagram remains visible on top
- Best for: Subtle texture or abstract patterns

## Option 3: "behind-profile" (Behind Profile Picture Only)
- Background image only appears behind the profile picture
- Creates a focused accent on your photo
- Rest of section remains clean
- Best for: Highlighting your profile picture

## Option 4: "gradient-overlay" (Gradient Overlay)
- Background image with a dark gradient overlay
- More dramatic effect while keeping text readable
- Network diagram visible
- Best for: Bold, modern look

## Option 5: "corner-accent" (Corner Accent)
- Background image appears in one corner (top-right)
- Subtle accent, doesn't dominate
- Most of section remains clean
- Best for: Minimal with a touch of visual interest

## How to Change:

Edit `data/portfolio.ts` and change the `backgroundImageStyle` value:

```typescript
backgroundImageStyle: "none", // Change to: "full", "behind-profile", "gradient-overlay", or "corner-accent"
```

You can also adjust opacity (0.1 to 1.0):
```typescript
backgroundImageOpacity: 0.2, // Adjust this value
```

