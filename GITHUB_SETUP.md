# GitHub Repository Setup Guide

## ✅ Local Repository Ready!

Your local Git repository has been initialized and your first commit has been created with all your website files.

## 📤 Steps to Push to GitHub

### 1. Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `csm-church-website` (or your preferred name)
   - **Description:** "Christ Synagogue Ministries - Official Website"
   - **Visibility:** Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 2. Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
cd "C:\Users\Grace Mchomvu\Desktop\MOTO ULAO CHURCH"

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/csm-church-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### 3. Alternative: Using GitHub Desktop

If you prefer a graphical interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click **"File" → "Add Local Repository"**
4. Navigate to: `C:\Users\Grace Mchomvu\Desktop\MOTO ULAO CHURCH`
5. Click **"Publish repository"** to push to GitHub

## 🌐 Enable GitHub Pages (Optional)

To host your website for free on GitHub:

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/csm-church-website/`

## 📝 Future Updates

To update your GitHub repository after making changes:

```bash
cd "C:\Users\Grace Mchomvu\Desktop\MOTO ULAO CHURCH"

# Stage all changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## 🔐 Authentication

If you're asked for credentials when pushing:
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (not your GitHub password)
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate a new token with `repo` permissions
  - Use this token as your password

---

**Your repository is ready!** Just follow the steps above to push it to GitHub. 🚀
