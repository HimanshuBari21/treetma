# 🌳 Treetma

Welcome to **Treetma**, a magical interactive website that tells the story of mystical, shape-shifting forest spirits who live and swap between the trees of the Whispering Canopy.

## ✨ The Story of Treetma

Treetma are glowing, bioluminescent creatures of pure energy. Lacking a single permanent form, they cannot survive outside their tree hosts. To stay alive and spread vitality through the forest, they constantly migrate and bond with trees:

- **Root-to-Root (The Mycelial Transit):** Swapping through the soil's mycorrhizal mycelium network (the "wood wide web").
- **Branch-to-Branch (The Canopy Spark):** Leaping through the high canopy under moonlit skies as glowing pollen spores.
- **Heartwood Bond (The Harmony of Trees):** Coexisting with host trees and pulling together to heal sick trees.
- **Star-to-Canopy (The Celestial Echo):** Building resonant bridges of light with the stars to swap across vast forest distances.

---

## 🎨 Design System: Claymorphism

The website is designed using a **Claymorphism** aesthetic, giving it a friendly, tactile, and premium 3D feel. Key characteristics of the styling system include:

- **Rounded Corners:** Generous border-radius (`rounded-[28px]`, `rounded-2xl`) to evoke organic, clay-like shapes.
- **Double Inset Shadows:** Top-left white highlights and bottom-right dark/colored shadow boundaries (`inset 4px 4px 8px rgba(255,255,255,0.9)` and `inset -6px -6px 12px rgba(...)`).
- **Floating Outer Shadows:** Soft, diffuse drop shadows that make components appear to hover above the pastel-toned background.
- **Harmonious Pastel Colors:**
  - 🍃 **Sage & Mint Greens** representing the Elder Oak.
  - 🍂 **Amber & Gold Tans** representing the Sun Birch.
  - 🔮 **Lavender & Purple Violets** representing the Dreamwood.
  - 🌌 **Celestial Blue & Indigo** representing the Stardust Pines.
- **Smooth Micro-Animations:** Floating spirits, swaying trees, pulsing glows, and height-expanding grid accordions.

---

## 🚀 Getting Started

First, install dependencies (if you haven't already):

```bash
pnpm install
```

Next, start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the interactive application.

---

## 🛠️ Architecture & Structure

- **[app/page.tsx](file:///Users/himanshu/Desktop/learning-stuffs/treetma/app/page.tsx):** Contains the core layout, interactive playground state (Treetma spirit active positions), and state-controlled accordions.
- **[app/globals.css](file:///Users/himanshu/Desktop/learning-stuffs/treetma/app/globals.css):** Defines CSS variables, keyframe animations, and custom claymorphic container/button utilities.
