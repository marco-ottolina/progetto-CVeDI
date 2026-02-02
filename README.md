# 🌊 Riff - Ristorante Abissale

> **Un racconto in ogni portata.**
> *A multisensory dining experience located in the depths of the Atlas ocean.*

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 About The Project

**Riff** is a concept website for a fictional, high-end underwater restaurant. The project simulates an immersive digital experience where users can explore "bioluminescent" dishes, filter menus based on futuristic allergens (like "Marine Pollen" or "Abyssal Proteins"), and interact with the restaurant's narrative.

The design focuses on atmosphere—using dark tones, glowing accents, and fluid animations to mimic the sensation of being underwater.

**🔗 Live Demo:** [View the Website](https://marcottolina.github.io/progetto-CVeDI/menu.html)

---

## 🎨 Visual Style & Design

The UI/UX is built around the concept of **"Synesthesia"** and **"Deep Sea"**:

* **Color Palette:** Deep ocean blues and blacks (`#0a0a0a`, `#001f3f`) contrasted with bioluminescent accents (cyan, neon green, and electric purple) to guide the user's eye like lights in the abyss.
* **Typography:** Clean, modern sans-serif fonts that ensure readability while maintaining a futuristic, high-tech aesthetic.
* **Imagery:** High-quality imagery of "regenerated food" and underwater textures, presented with rounded edges and soft glows to integrate seamlessly into the dark background.
* **Iconography:** Custom SVG icons for specific allergens and dietary preferences, adding a layer of world-building to the interface.

---

## 🛠 Technologies Implemented

The project is built using standard web technologies, enhanced by powerful libraries for interactivity and layout:

### 1. **Bootstrap 5** (Layout & Responsiveness)
Used for the core grid system and responsive components.
* **Grid System:** Ensures the website looks perfect on mobile devices (vertical stacking) and desktops (multi-column layouts).
* **Components:** Utilizes Bootstrap's `offcanvas` for the mobile navigation menu and varying button styles.
* **Utility Classes:** Extensive use of flexbox utilities for alignment and spacing.

### 2. **D3.js** (Data Visualization / Map)
A key feature of the "Info" or "Location" section is the interactive map.
* **Implementation:** D3.js is used to render a custom SVG map or data visualization representing the restaurant's location (Coordinates: 24°N - 46°O, -230 m).
* **Interactivity:** Unlike static images, this allows for dynamic rendering and potentially interaction with the "depth" or specific coordinates of the restaurant in the Atlas ocean.

### 3. **Swiper.js** (Touch Slider)
Used to create fluid, touch-friendly carousels for the content.
* **Usage:** Likely implemented in the "Menu" or "Gallery" sections to allow users to swipe through dishes or atmospheric photos.
* **Experience:** Provides a native app-like feel, especially on mobile devices, with smooth transitions and momentum scrolling.

### 4. **Vanilla JavaScript & CSS3**
* **Filtering Logic:** Custom JS handles the filtering of menu items based on selected allergens and preferences.
* **CSS Animations:** Subtle hover effects and transitions (e.g., on buttons and cards) enhance the immersive feel without overwhelming the user.

---

## 🚀 How to Run Locally

To view or modify the code on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/marcottolina/progetto-CVeDI.git](https://github.com/marcottolina/progetto-CVeDI.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd progetto-CVeDI
    ```
3.  **Open the file:**
    Simply open `index.html` or `menu.html` in your preferred web browser.
    * *Note: For D3.js features to work correctly, you may need to run a local server (e.g., Live Server in VS Code) to avoid CORS issues with local file fetching.*

---

## 📂 Project Structure

```text
progetto-CVeDI/
├── css/                        # Custom styles and overrides
├── js/                         # Logic for filters, map (D3), and sliders (Swiper)
├── media/                      # Images, SVGs, and icons (Logos, Dishes)
├── vendor/                     # Third-party libraries (Bootstrap, Swiper, etc.)
├── gestisci-prenotazione.html  # Reservation management interface
├── index.html                  # Landing page
├── info.html                   # Information and Location (Map)
├── menu.html                   # Main menu page with filtering logic
├── prenota.html                # Booking form
├── ristorante.html             # The restaurant story and concept
└── serate-speciali.html        # Special events and theme nights
```
---

## 👥 Authors

**Alessio Meraldi**: Project Manager

**Marco Ottolina**: Developer #1

**Yousra El Alani**: Developer #2

**Alessia Schiattelli**: Designer #1

**Eleonora Ratti**: Designer #2

**Giulia Ferrari**: Content, Communications & Documentation
