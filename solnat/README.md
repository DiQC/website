# SolNat – Energia Solar a Catalunya 🌿☀️

Lloc web professional per a serveis d'energia solar a Catalunya.  
Website profesional para servicios de energía solar en Cataluña.

---

## 🗂 Estructura del projecte / Estructura del proyecto

```
solnat/
├── index.html              ← Pàgina principal (CA + ES)
├── css/
│   └── style.css           ← Tots els estils
├── js/
│   └── main.js             ← Lògica: idiomes, calculadora, formularis, FAQ
├── images/                 ← Imatges (afegiu les vostres aquí)
│   └── README.md
├── pages/
│   ├── ca/                 ← Pàgines legals en català
│   │   ├── privacitat.html
│   │   ├── avis-legal.html
│   │   └── cookies.html
│   └── es/                 ← Páginas legales en castellano
│       ├── privacidad.html
│       ├── aviso-legal.html
│       └── cookies.html
├── blog/
│   └── index.html          ← Llistat d'articles del blog
└── README.md
```

---

## 🌐 Funcionalitats / Funcionalidades

- **Bilingüe (CA / ES)** – Canvi d'idioma sense recàrrega. La preferència es desa al navegador.
- **Calculadora solar** – Dos modes: teulada (longitud × amplada) i terra/coberta plana (m²). Calcula plaques, kWp, estalvi anual, CO₂ evitat i retorn de la inversió.
- **Formulari de contacte** – Validació HTML5 + missatge d'èxit animat.
- **FAQ acordió** – Obertura/tancament fluid.
- **Blog** – Secció de 3 articles amb paginació futura.
- **Navbar fixa** – Canvi d'estil en scroll. Menú mòbil amb hamburger.
- **Animacions Scroll** – `IntersectionObserver` per a `fade-up` i `stagger-children`.
- **Responsive** – 320px fins a 1440px+.

---

## 🚀 Com posar-ho en marxa / Cómo ponerlo en marcha

### Desplegament estàtic simple
Qualsevol servidor web o servei d'hosting estàtic funciona:

```bash
# Opció 1: Python (per proves locals)
python3 -m http.server 8000
# Obre http://localhost:8000

# Opció 2: Node.js live-server
npx live-server

# Opció 3: VS Code → Live Server extension
```

### GitHub Pages
1. Puja el repositori a GitHub
2. Settings → Pages → Source: `main` branch, `/root`
3. El lloc estarà disponible a `https://<usuari>.github.io/<repo>`

### Netlify / Vercel
- Arrossega la carpeta a [netlify.com/drop](https://netlify.com/drop)  
- O connecta el repositori GitHub per a desplegament automàtic en cada `push`

---

## ✏️ Personalització ràpida / Personalización rápida

### Canviar dades de contacte
Edita `js/main.js`, busca les claus:
```js
contact_phone: '+34 93 XXX XX XX',
contact_email: 'hola@solnat.cat',
contact_address: 'Igualada, Catalunya',
```
Canvia-les **tant a `ca:` com a `es:`**.

### Afegir imatges reals
Substituïu els emojis placeholder per elements `<img>`:
```html
<!-- Abans -->
<div style="...font-size:6rem">🌞</div>

<!-- Després -->
<img src="images/equip-solnat.jpg" alt="Equip SolNat" />
```

### Colors principals
Edita les variables CSS a `css/style.css`:
```css
:root {
  --green-mid:  #2d6a4f;  /* Color principal */
  --gold:       #d4a853;  /* Accent / CTA */
  --green-deep: #1a3a2a;  /* Fons fosc */
}
```

### Formulari de contacte real
El formulari actual mostra un missatge d'èxit fals (demo).  
Per enviar emails reals, integra un d'aquests serveis gratuïts:
- **Formspree**: `<form action="https://formspree.io/f/YOUR_ID">`
- **Netlify Forms**: afegir `data-netlify="true"` al `<form>`
- **EmailJS**: crida API des de `main.js`

---

## 🏗 Pàgines pendents de crear / Páginas pendientes de crear

- `pages/ca/privacitat.html` – Política de privacitat
- `pages/ca/avis-legal.html` – Avís legal
- `pages/ca/cookies.html` – Política de cookies
- `pages/es/privacidad.html` – Política de privacidad
- `pages/es/aviso-legal.html` – Aviso legal
- `pages/es/cookies.html` – Política de cookies
- `blog/index.html` – Llistat complet d'articles
- Pàgines de servei individuals (opcional)

---

## 📦 Dependències externes (CDN)

```html
<!-- Google Fonts (Playfair Display + DM Sans) -->
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600
```

Cap altre framework ni libreria. **Vanilla HTML + CSS + JS pur.**

---

## 📋 Llista de tasques recomanades / Lista de tareas recomendadas

- [ ] Afegir logotip SVG real (substituir l'emoji 🌿)
- [ ] Afegir fotos reals a les seccions hero, about i blog
- [ ] Configurar el formulari de contacte (Formspree / Netlify)
- [ ] Crear les pàgines legals (privacitat, avís legal, cookies)
- [ ] Afegir Google Analytics o Plausible
- [ ] Afegir meta tags Open Graph per a xarxes socials
- [ ] Registrar i configurar el domini `solnat.cat`
- [ ] Afegir favicon
- [ ] Configurar SSL (automàtic a Netlify/Vercel/GitHub Pages)
- [ ] Testar a dispositius reals (iOS Safari, Chrome Android)

---

## 📄 Llicència

© 2025 SolNat. Tots els drets reservats.
