$ErrorActionPreference = "Stop"

# === CONFIGURATION ===
$DEPLOY_BRANCH = "deploy"
$BUILD_DIR = "dist"
$MAIN_BRANCH = "main"

Write-Host ""
Write-Host "🚀 Starting deployment for GitHub Pages..."
Write-Host "------------------------------------------"

# === STEP 1: Build the project ===
Write-Host "🏗️  Building project..."
npm run build

# === STEP 2: Switch to deploy branch ===
Write-Host "🪄 Switching to branch $DEPLOY_BRANCH..."
git checkout $DEPLOY_BRANCH

# === STEP 3: Clean old files ===
Write-Host "🧹 Cleaning old files..."
Get-ChildItem -Force | Where-Object { $_.Name -notin @('.git') } | Remove-Item -Recurse -Force

# === STEP 4: Copy new build ===
Write-Host "📦 Copying new build files..."
Copy-Item -Recurse -Force "../$BUILD_DIR/*" .

# === STEP 5: Add .nojekyll ===
Write-Host "📘 Adding .nojekyll file..."
New-Item -ItemType File -Force -Name ".nojekyll" | Out-Null

# === STEP 6: Commit and push ===
Write-Host "📤 Committing and pushing to $DEPLOY_BRANCH..."
git add -A
if (git diff --cached --quiet) {
  Write-Host "ℹ️  No changes to deploy."
} else {
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss UTC"
  git commit -m "Deploy $timestamp"
  git push origin $DEPLOY_BRANCH
}

# === STEP 7: Return to main branch ===
Write-Host "↩️  Returning to $MAIN_BRANCH..."
git checkout $MAIN_BRANCH

Write-Host ""
Write-Host "✅ Deployment complete!"
Write-Host "🌍 Your site should be live at:"
Write-Host "https://pitsianisparaskevas.github.io/kp/"
Write-Host "------------------------------------------"
