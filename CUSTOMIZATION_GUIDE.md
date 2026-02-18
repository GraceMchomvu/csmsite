# 🎨 CUSTOMIZATION QUICK REFERENCE

## 📝 Edit These Key Information Points

### 1. Church Name (in index.html)
- **Line 24:** Navigation brand
  ```html
  <h1>CSM</h1>
  <span>Christ Synagogue Ministries</span>
  ```

### 2. Contact Information (in index.html)
- **Lines 400-425:** All contact details
  - Address: Line ~408
  - Phone: Line ~414
  - Email: Line ~420
  - Hours: Line ~427

### 3. Service Times (in index.html)
- **Line 257:** Sunday Worship service time
- **Line 264:** Prayer meeting day/time
- **Line 271:** Sunday School time
- **Line 286:** Praise & Worship time

### 4. Church Events (in index.html)
- **Lines 320-380:** Update event dates, times, and descriptions
- Change dates in `.date-day` and `.date-month` divs
- Update event titles and details

---

## 🎨 COLOR SCHEME CUSTOMIZATION

### Primary Colors in styles.css:
- **Primary Blue:** `#6366f1` → Change to your color
- **Dark Blue:** `#4f46e5` → Darker shade for gradients
- **Light Background:** `#f8f7ff` → Light version of primary
- **Text Color:** `#333` → Dark gray text

### Steps to change color:
1. Open `styles.css`
2. Use Find & Replace (Ctrl+H)
3. Find: `#6366f1`
4. Replace with: Your chosen color
5. Repeat for `#4f46e5` with darker shade

### Suggested Color Combinations:

**Royal Theme:**
- Primary: `#4169E1` (Royal Blue)
- Dark: `#2E5BC0`
- Light: `#E8EFF8`

**Nature Theme:**
- Primary: `#228B22` (Forest Green)
- Dark: `#1B6B1B`
- Light: `#E8F5E9`

**Traditional Theme:**
- Primary: `#800020` (Burgundy)
- Dark: `#660018`
- Light: `#F5E6E8`

**Gold/Elegant:**
- Primary: `#FFD700` (Gold)
- Dark: `#DAA520`
- Light: `#FFFEF0`

---

## 🖼️ ADDING IMAGES

### 1. Church Logo
Replace line 24 in index.html:
```html
<!-- FROM: -->
<h1>CSM</h1>

<!-- TO: -->
<img src="images/logo.png" alt="CSM Logo" style="height: 50px;">
```

### 2. Church Photo (About Section)
Replace line ~373:
```html
<!-- FROM: -->
<div class="placeholder-image">
    <p>Church Photo</p>
</div>

<!-- TO: -->
<img src="images/church-photo.jpg" alt="Church Building" style="width: 100%; border-radius: 15px;">
```

### 3. Event Photos
Add images in event cards (around line 330):
```html
<div class="event-card">
    <img src="images/event.jpg" alt="Event" style="width: 100%; height: 150px; object-fit: cover;">
    <!-- rest of card -->
</div>
```

### Image Optimization Tips:
- Use JPEG for photos (smaller file size)
- Use PNG for logos with transparency
- Compress images with TinyPNG.com
- Keep images under 200KB each
- Use consistent aspect ratios

---

## 📱 UPDATE NAVIGATION LINKS

In index.html (lines 28-34), you can customize section links:
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="#home" class="nav-link active">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#events" class="nav-link">Events</a></li>
    <li><a href="#giving" class="nav-link">Give</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

Add new links by:
1. Adding `<li><a href="#section-id" class="nav-link">Label</a></li>`
2. Creating matching section with `id="section-id"`
3. Styling with existing CSS patterns

---

## 🎯 HERO SECTION CUSTOMIZATION

Update main message (lines 43-47):
```html
<h1>Welcome to Christ Synagogue Ministries</h1>
<p>Building Faith, Community, and Hope</p>
```

Change button text or links (lines 48-51):
```html
<a href="#contact" class="btn btn-primary">Join Us</a>
<a href="#services" class="btn btn-secondary">Our Services</a>
```

---

## 📄 ABOUT SECTION UPDATES

Main description (line ~144):
```html
<p>Christ Synagogue Ministries is dedicated to spreading...</p>
```

Mission, Vision, Values (lines ~153-168):
```html
<div class="feature-item">
    <h3>🙏 Our Mission</h3>
    <p>To glorify God and make disciples of all nations</p>
</div>
```

Change emoji or text as needed.

---

## 🔗 ADD SOCIAL MEDIA LINKS

In Footer (lines ~555-560):
```html
<div class="social-links">
    <a href="https://facebook.com/csm.church" class="social-icon">Facebook</a>
    <a href="https://instagram.com/csm.church" class="social-icon">Instagram</a>
    <a href="https://youtube.com/csm.church" class="social-icon">YouTube</a>
    <a href="https://twitter.com/csm.church" class="social-icon">Twitter</a>
</div>
```

---

## 💰 INTEGRATE PAYMENT SYSTEMS

### PayPal Donations:
Add to Giving section:
```html
<form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" />
</form>
```

### Stripe Payments:
```html
<stripe-pricing-table
    pricing-table-id="prctbl_..."
    publishable-key="pk_live_...">
</stripe-pricing-table>
```

---

## ✉️ CONTACT FORM SETUP

Default form uses alert. To send emails:

### Using Formspree:
1. Go to https://formspree.io
2. Create account
3. Get form endpoint
4. Update form action (line ~470):
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## 📧 NEWSLETTER SETUP

Update newsletter input (line ~560):
```html
<form action="https://mailchimp.us12.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID" method="POST">
    <input type="email" name="EMAIL" placeholder="Enter your email">
    <button type="submit">Subscribe</button>
</form>
```

---

## 🔐 SECURITY CUSTOMIZATION

The .htaccess file includes security settings. You can modify:
- HTTPS redirection (line 8)
- WWW redirection (line 12)
- Cache expiration times (lines 30-46)
- Security headers (lines 53-61)

---

## 📊 ANALYTICS SETUP

Add Google Analytics tracking ID to CONFIGURATION.html:
```html
<!-- Replace YOUR_TRACKING_ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
```

---

## 🎨 FONT CUSTOMIZATION

Google Fonts are imported (line 8 of index.html):
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

To change fonts:
1. Go to https://fonts.google.com
2. Select fonts you like
3. Copy import statement
4. Replace line 8
5. Update font references in styles.css

---

## 📱 RESPONSIVE BREAKPOINTS

Current breakpoints in styles.css:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

Customize in @media queries (bottom of styles.css):
```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

---

## 🚀 PERFORMANCE TIPS

1. **Compress Images:**
   - Use TinyPNG.com
   - Keep under 200KB per image

2. **Minimize CSS/JS:**
   - Use minifiers before launch
   - Test speed with PageSpeed

3. **Lazy Loading:**
   - Add `loading="lazy"` to images

4. **CDN for Fonts:**
   - Google Fonts already uses CDN ✓

5. **Caching:**
   - .htaccess handles caching ✓

---

## ✅ COMMON CUSTOMIZATIONS CHECKLIST

- [ ] Update church name
- [ ] Update contact information
- [ ] Change colors to match branding
- [ ] Add church logo
- [ ] Add church photos
- [ ] Update service times
- [ ] Add/update events
- [ ] Update footer information
- [ ] Add social media links
- [ ] Set up contact form (Formspree)
- [ ] Customize mission/vision statements
- [ ] Add pastor information
- [ ] Update donation information
- [ ] Set up analytics
- [ ] Test on mobile
- [ ] Deploy to hosting

---

## 🎯 ADDITIONAL PAGES TO ADD

Consider creating these new pages:

1. **Blog/Sermons** - Sermon library and articles
2. **Staff Directory** - Pastor and staff profiles
3. **Prayer Requests** - Community prayer board
4. **Photo Gallery** - Event and church photos
5. **Calendar** - Full event calendar
6. **Ministries** - Detailed ministry descriptions
7. **Resources** - Downloads and help materials
8. **Announcements** - Important updates

---

**Last Updated:** February 18, 2026
**Version:** 1.0.0
