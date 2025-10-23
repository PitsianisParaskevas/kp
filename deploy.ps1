$ErrorActionPreference = "Stop"

# === CONFIG ===
$DEPLOY_BRANCH = "deploy"
$BUILD_DIR = "dist"
$MAIN_BRANCH = "main"

Write-Host ""
Write-Host "Starting deployment for GitHub Pages..."
Write-Host "------------------------------------------"

# 1) Build (τρέχεις το script από το main)
Write-Host "Building project..."
npm run build

# 2) Checkout deploy
Write-Host "Switching to branch $DEPLOY_BRANCH..."
git checkout $DEPLOY_BRANCH

# Safety: επιβεβαίωση ότι όντως είμαστε στο deploy
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne $DEPLOY_BRANCH) {
    Write-Host "ERROR: Not on $DEPLOY_BRANCH. Aborting."
    git checkout $MAIN_BRANCH
    exit 1
}

# 3) Clean παλιά αρχεία ΜΟΝΟ στο deploy
Write-Host "Cleaning old files in $DEPLOY_BRANCH..."
Get-ChildItem -Force | Where-Object { $_.Name -notin @('.git') } | Remove-Item -Recurse -Force

# 4) Copy build output από το main working dir (ίδιο folder)
Write-Host "Copying build files..."
Copy-Item -Recurse -Force "$BUILD_DIR\*" .

# 5) Add .nojekyll (για ασφάλεια assets)
Write-Host "Adding .nojekyll..."
New-Item -ItemType File -Force -Name ".nojekyll" | Out-Null

# 6) Commit & Push
Write-Host "Committing and pushing..."
git add -A
if (git diff --cached --quiet) {
    Write-Host "No changes to deploy."
} else {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss UTC"
    git commit -m "Deploy $timestamp"
    git push origin $DEPLOY_BRANCH
}

# 7) Back to main
Write-Host "Returning to $MAIN_BRANCH..."
git checkout $MAIN_BRANCH

Write-Host "Deployment complete! https://pitsianisparaskevas.github.io/kp/"
