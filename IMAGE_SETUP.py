#!/usr/bin/env python3
"""
CSM Church Website - Image Setup Assistant
Helps download and optimize stock images for the church website
"""

import os
import json
from datetime import datetime

# Image requirements
IMAGE_REQUIREMENTS = {
    "logo.png": {
        "description": "Church Logo",
        "size": "200x200px",
        "format": "PNG",
        "purpose": "Navigation bar and footer",
        "source": "Use official church logo if available"
    },
    "hero-banner.jpg": {
        "description": "Hero Banner Background",
        "size": "1920x600px",
        "format": "JPG",
        "purpose": "Large hero section background",
        "source": "Unsplash: search 'church worship community'"
    },
    "church-main.jpg": {
        "description": "Church Building/Interior",
        "size": "1200x800px",
        "format": "JPG",
        "purpose": "About section main image",
        "source": "Unsplash: search 'church sanctuary interior'"
    },
    "worship-team.jpg": {
        "description": "Worship Service Photo",
        "size": "800x600px",
        "format": "JPG",
        "purpose": "Sunday Worship service card",
        "source": "Unsplash: search 'modern worship praise'"
    },
    "prayer-service.jpg": {
        "description": "Prayer Service Photo",
        "size": "800x600px",
        "format": "JPG",
        "purpose": "Prayer event card",
        "source": "Unsplash: search 'prayer hands faith'"
    },
    "youth-group.jpg": {
        "description": "Youth Fellowship Photo",
        "size": "800x600px",
        "format": "JPG",
        "purpose": "Youth group events",
        "source": "Unsplash: search 'young people community'"
    },
    "community-event.jpg": {
        "description": "Community Service Photo",
        "size": "800x600px",
        "format": "JPG",
        "purpose": "Outreach/community events",
        "source": "Unsplash: search 'community help service'"
    }
}

def print_header():
    """Print welcome header"""
    print("\n" + "="*70)
    print("  🖼️  CSM CHURCH WEBSITE - IMAGE SETUP GUIDE")
    print("="*70)

def print_instructions():
    """Print detailed instructions"""
    print("\n📸 IMAGE DOWNLOAD INSTRUCTIONS:\n")
    
    for filename, details in IMAGE_REQUIREMENTS.items():
        print(f"\n{'─'*70}")
        print(f"📄 File: {filename}")
        print(f"   Description: {details['description']}")
        print(f"   Recommended Size: {details['size']}")
        print(f"   Format: {details['format']}")
        print(f"   Use: {details['purpose']}")
        print(f"   Source: {details['source']}")
        print(f"{'─'*70}")

def print_quick_steps():
    """Print quick setup steps"""
    print("\n\n⚡ QUICK SETUP (5 MINUTES):\n")
    
    steps = [
        ("1. Visit Unsplash", "https://unsplash.com"),
        ("2. Search for image", "Use source keywords above"),
        ("3. Download image", "Click download button"),
        ("4. Compress on TinyPNG", "https://tinypng.com"),
        ("5. Save to images/", "Use filename from above"),
        ("6. Refresh browser", "Your website updates instantly!")
    ]
    
    for step, action in steps:
        print(f"   {step:<25} → {action}")

def print_recommended_sites():
    """Print recommended image sources"""
    print("\n\n🌐 RECOMMENDED FREE IMAGE SITES:\n")
    
    sites = [
        ("Unsplash", "https://unsplash.com", "High quality, free commercial use"),
        ("Pexels", "https://pexels.com", "Great church & community photos"),
        ("Pixabay", "https://pixabay.com", "Filter by category (religion, people)"),
        ("Unsplash Search", "https://unsplash.com/napi/search/photos?query=church", "Direct API"),
        ("Pexels Search", "https://www.pexels.com/search/worship/", "Direct search"),
    ]
    
    for site, url, description in sites:
        print(f"   • {site:<20} {description}")
        print(f"     {url}\n")

def print_image_optimization():
    """Print image optimization tips"""
    print("\n\n⚙️  IMAGE OPTIMIZATION:\n")
    
    print("   1. Size Optimization:")
    print("      • Use TinyPNG.com to compress (50-150KB target)")
    print("      • Reduces load time by 70%")
    print("      • Maintains quality\n")
    
    print("   2. Format Selection:")
    print("      • JPG: Photos & complex images")
    print("      • PNG: Logos & images with transparency\n")
    
    print("   3. File Naming:")
    print("      • Use lowercase: 'church-photo.jpg'")
    print("      • No spaces: Use hyphens instead")
    print("      • Match filenames: (see list above)\n")

def print_file_structure():
    """Print expected directory structure"""
    print("\n\n📁 FILE STRUCTURE:\n")
    
    structure = """   MOTO ULAO CHURCH/
   ├── index.html          # Website (already done)
   ├── styles.css          # Styling (already done)
   ├── script.js           # Interactivity (already done)
   └── images/             # ← Create this folder
       ├── logo.png
       ├── hero-banner.jpg
       ├── church-main.jpg
       ├── worship-team.jpg
       ├── prayer-service.jpg
       ├── youth-group.jpg
       ├── community-event.jpg
       └── README.md       # (guide file)"""
    
    print(structure)

def print_download_checklist():
    """Print checklist for downloads"""
    print("\n\n✅ DOWNLOAD CHECKLIST:\n")
    
    print("   Priority 1 (Essential):")
    print("      ☐ church-main.jpg (About section)")
    print("      ☐ hero-banner.jpg (Hero background)\n")
    
    print("   Priority 2 (Important):")
    print("      ☐ logo.png (Footer & nav)")
    print("      ☐ worship-team.jpg (Service image)\n")
    
    print("   Priority 3 (Nice to have):")
    print("      ☐ prayer-service.jpg")
    print("      ☐ youth-group.jpg")
    print("      ☐ community-event.jpg\n")

def print_next_steps():
    """Print next steps"""
    print("\n\n🚀 NEXT STEPS:\n")
    
    print("   1. ✅ Your website is READY for images")
    print("   2. 📥 Download images from sources above")
    print("   3. 🔧 Compress on TinyPNG.com")
    print("   4. 📁 Save to: images/ folder")
    print("   5. 🔄 Refresh browser → Images appear!\n")

def print_tips():
    """Print pro tips"""
    print("\n\n💡 PRO TIPS:\n")
    
    print("   • Start with just 2-3 images (hero + about + logo)")
    print("   • Website works perfectly without images")
    print("   • Update images anytime by replacing files")
    print("   • All image changes apply instantly")
    print("   • No coding required!\n")

def print_support():
    """Print support info"""
    print("\n\n❓ SUPPORT:\n")
    
    print("   Need help?")
    print("   • Check images/README.md for details")
    print("   • Google: 'unsplash [your search]'")
    print("   • YouTube: 'how to optimize images'")
    print("   • Your website works without images!\n")

def print_footer():
    """Print footer"""
    print("\n" + "="*70)
    print(f"  Generated: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}")
    print("  Status: Website Ready ✨")
    print("="*70 + "\n")

def main():
    """Run the image setup guide"""
    print_header()
    print_instructions()
    print_quick_steps()
    print_recommended_sites()
    print_image_optimization()
    print_file_structure()
    print_download_checklist()
    print_next_steps()
    print_tips()
    print_support()
    print_footer()

    # Save to file
    with open('IMAGE_SETUP_GUIDE.txt', 'w', encoding='utf-8') as f:
        f.write("\n" + "="*70 + "\n")
        f.write("  🖼️  CSM CHURCH WEBSITE - IMAGE SETUP GUIDE\n")
        f.write("="*70 + "\n")
        f.write("\nGenerated: " + datetime.now().strftime('%B %d, %Y at %I:%M %p') + "\n\n")
        
        f.write("IMAGE REQUIREMENTS:\n\n")
        for filename, details in IMAGE_REQUIREMENTS.items():
            f.write(f"File: {filename}\n")
            f.write(f"  Description: {details['description']}\n")
            f.write(f"  Size: {details['size']}\n")
            f.write(f"  Format: {details['format']}\n")
            f.write(f"  Purpose: {details['purpose']}\n")
            f.write(f"  Source: {details['source']}\n\n")

if __name__ == '__main__':
    main()
