$ErrorActionPreference = "Stop"

# === CONFIG ===
$DEPLOY_BRANCH = "deploy"
$BUILD_DIR = "dist"
$MAIN_BRANCH = "main"

Write-Host ""
Write-Host "Starting deployment for GitHub Pages..."
Write-Host "------------------------------------------"

# 1) Build (run from main)
Write-Host "Building project..."
npm run build

# 1a) Resolve dist path BEFORE switching branches
$distPath = Join-Path (Get-Location) $BUILD_DIR
if (-Not (Test-Path $distPath)) {
    Write-Host "ERROR: Build directory not found at '$distPath'. Aborting."
    exit 1
}

# 2) Checkout deploy
Write-Host "Switching to branch $DEPLOY_BRANCH..."
git checkout $DEPLOY_BRANCH

# Safety: ensure we are really on deploy branch
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne $DEPLOY_BRANCH) {
    Write-Host "ERROR: Not on $DEPLOY_BRANCH. Aborting to protect your files."
    git checkout $MAIN_BRANCH
    exit 1
}

# 3) Clean old files ONLY on deploy
Write-Host "Cleaning old files in $DEPLOY_BRANCH..."
Get-ChildItem -Force | Where-Object { $_.Name -notin @('.git') } | Remove-Item -Recurse -Force

# 4) Copy build output using saved dist path
Write-Host "Copying build files from '$distPath'..."
Copy-Item -Recurse -Force "$distPath\*" .

# 5) Add .nojekyll (prevents Jekyll from interfering with assets)
Write-Host "Adding .nojekyll..."
New-Item -ItemType File -Force -Name ".nojekyll" | Out-Null

# 5a) Optional SPA fallback (copy index.html -> 404.html)
if (-Not (Test-Path "404.html") -and (Test-Path "index.html")) {
    Copy-Item "index.html" "404.html" -Force
}

# 6) Commit & Push
Write-Host "Committing and pushing to $DEPLOY_BRANCH..."
git add -A
if (git diff --cached --quiet) {
    Write-Host "No changes to deploy."
} else {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss UTC"
    git commit -m "Deploy $timestamp"
    git push origin $DEPLOY_BRANCH
}

# 7) Return to main
Write-Host "Returning to $MAIN_BRANCH..."
git checkout $MAIN_BRANCH

Write-Host ""
Write-Host "Deployment complete."
Write-Host "Live URL: https://pitsianisparaskevas.github.io/kp/"
Write-Host "------------------------------------------"
