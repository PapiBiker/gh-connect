@echo off
SET REPO_URL=https://github.com/PapiBiker/gh-connect.git
SET DEPLOY_DIR=deploy

:: Configurar safe.directory
git config --global --add safe.directory %CD%\%DEPLOY_DIR%

:: Build del proyecto
echo Building project...
npm run build

:: Crear carpeta deploy si no existe
if not exist %DEPLOY_DIR% mkdir %DEPLOY_DIR%

:: Copiar dist a deploy
echo Copying dist/ to deploy/
xcopy dist\* %DEPLOY_DIR% /s /e /y /q

:: Ir a deploy
cd %DEPLOY_DIR%

:: Inicializar git si no existe
if not exist .git (
    git init
    git remote add origin %REPO_URL%
)

:: Cambiar a gh-pages
git checkout -B gh-pages

:: Agregar y commit
git add .
git commit -m "Deploy to GitHub Pages" 

:: Push forzado
git push -f origin gh-pages

cd ..
echo Deployment finished!
pause
