# Christ Synagogue Ministries (CSM) - Church Website

A modern, professional, and responsive website for Christ Synagogue Ministries.

## 📋 Project Overview

This website is designed to serve the Christ Synagogue Ministries community with:
- **Home Page** - Welcoming hero section with call-to-action buttons
- **About Section** - Church mission, vision, and values
- **Services** - Overview of all church services and programs
- **Events** - Upcoming church events and announcements
- **Giving** - Multiple giving options and financial transparency
- **Contact** - Contact form and church information
- **Responsive Design** - Mobile-friendly on all devices

## 🚀 Features

✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
✅ **Modern Design** - Clean, professional, gradient-based UI
✅ **Interactive Elements** - Smooth scrolling, animations, and form validation
✅ **Mobile Navigation** - Hamburger menu for mobile devices
✅ **Fast Loading** - Optimized assets and clean code
✅ **SEO Friendly** - Proper HTML structure and semantic tags
✅ **Accessibility** - Keyboard navigation and screen reader support
✅ **No Dependencies** - Pure HTML, CSS, and JavaScript (no external frameworks needed)

## 📁 File Structure

```
MOTO ULAO CHURCH/
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 📝 How to Use

### 1. Open the Website
Simply open `index.html` in your web browser. No server required for basic viewing.

### 2. Customize Content

#### Update Church Information
Edit the following in `index.html`:

**Contact Information (Line ~400):**
```html
<p>Christ Synagogue Ministries<br>
123 Faith Street<br>
City, State 12345</p>
```

**Phone Numbers (Line ~407):**
```html
<p>(123) 456-7890<br>
(123) 456-7891</p>
```

**Email Addresses (Line ~413):**
```html
<p>info@csm.church<br>
pastor@csm.church</p>
```

**Office Hours (Line ~420):**
```html
<p>Monday - Friday: 9 AM - 5 PM<br>
Sunday: 8 AM - 1 PM<br>
Closed Saturdays</p>
```

#### Update Church Service Times
Edit service times in the Services section (~Line 250):
```html
<p class="service-time">10:00 AM - 12:00 PM</p>
```

#### Update Events
Edit upcoming events in the Events section (~Line 320):
- Change event dates
- Update event titles and descriptions
- Modify event times and locations

#### Update Colors
The primary color is `#6366f1` (indigo). To change it:
1. Search for `#6366f1` in `styles.css`
2. Replace with your preferred color
3. Also update `#4f46e5` (darker shade) for gradients

### 3. Add Your Church Logo
Replace the text "CSM" in the navigation with an image:

Replace (around line 24 in index.html):
```html
<div class="nav-brand">
    <h1>CSM</h1>
    <span>Christ Synagogue Ministries</span>
</div>
```

With:
```html
<div class="nav-brand">
    <img src="logo.png" alt="CSM Logo" style="height: 50px;">
    <span>Christ Synagogue Ministries</span>
</div>
```

### 4. Add Images
- Add church photos to replace placeholder images
- Update the `.placeholder-image` section in the About area
- Add images to the `/images` folder and reference them in HTML

### 5. Deploy the Website

**Option A: Free Hosting Services**
- **Netlify** (https://netlify.com) - Drag and drop the folder
- **Vercel** (https://vercel.com) - Push to GitHub, auto-deploys
- **GitHub Pages** - Free hosting directly from GitHub

**Option B: Web Hosting Provider**
- Upload files via FTP to your hosting provider
- Contact your hosting provider for domain setup

**Option C: Local Server**
For testing locally with PHP support:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Change Color Scheme
Primary colors are defined at the top of `styles.css`:
- Primary Color: `#6366f1`
- Secondary Color: `#4f46e5`
- Light Background: `#f8f7ff`
- Text Color: `#333`

### Change Fonts
Fonts are imported from Google Fonts. Change in `index.html` (line ~8):
- `Poppins` - Body text
- `Playfair Display` - Headings

### Add New Sections
Copy an existing section and modify:
1. Add new section ID in navigation
2. Create new section HTML with unique ID
3. Add CSS styling following existing patterns
4. Add navigation link

### Form Integration
The contact form currently shows an alert. To send emails:
1. Use a service like Formspree (https://formspree.io)
2. Or Firebase (https://firebase.google.com)
3. Update the form action/backend in `script.js`

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:
- **Desktop:** 1200px+ width
- **Tablet:** 768px - 1199px width
- **Mobile:** Below 768px width

Test on mobile by:
1. Opening DevTools (F12)
2. Clicking the device toggle (mobile icon)
3. Testing different screen sizes

## 🔒 SEO & Best Practices

- Update the `<title>` tag in index.html
- Add meta description in `<head>`
- Use semantic HTML tags
- Include alt text for images
- Create a sitemap.xml file for large sites
- Add robots.txt for search engines

## 🐛 Troubleshooting

**Q: Images aren't showing**
A: Make sure image paths are correct relative to index.html

**Q: Navigation isn't scrolling smoothly**
A: Check browser support for smooth scrolling (works in modern browsers)

**Q: Form submission not working**
A: Forms need backend setup. Use Formspree or Firebase as mentioned above.

**Q: Mobile menu not closing**
A: Clear browser cache and refresh (Ctrl+Shift+R)

## 🔗 Useful Links

- **Google Fonts:** https://fonts.google.com
- **Font Awesome Icons:** https://fontawesome.com
- **Formspree (Contact Forms):** https://formspree.io
- **Netlify Hosting:** https://netlify.com
- **Web Performance Tools:** https://pagespeed.web.dev

## 📧 Next Steps

1. **Customize all text** with your church's actual information
2. **Add your church logo** and photos
3. **Integrate giving payments** (Stripe, PayPal, etc.)
4. **Set up email notifications** for contact form
5. **Add a blog** for sermons and updates
6. **Implement online registration** for events
7. **Add prayer request system**
8. **Create member login area**
9. **Add sermon video library**
10. **Set up social media integration**

## 💡 Advanced Features (Optional Add-ons)

- **Blog System** - For sermons and news
- **Event Ticketing** - For paid events
- **Donation Platform** - Integrated payment processing
- **Member Portal** - Registration and login
- **Live Streaming** - Video integration
- **Announcement System** - Push notifications
- **Photo Gallery** - Event photos
- **Sermon Library** - Audio/video archive
- **Prayer Wall** - Community prayer requests
- **Visitor Counter** - Analytics

## 📄 License

This template is provided as-is for Christ Synagogue Ministries.

## 📞 Support

For questions or issues, refer to the customization guide above or consult with a web developer for advanced features.

---

**Last Updated:** February 18, 2026
**Version:** 1.0.0
**Status:** Ready for Deployment ✨
