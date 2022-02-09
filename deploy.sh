#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
cp index.html 404.html
# if you are deploying to a custom domain
echo 'hungtrihr.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:chuonglejp/hungtrihr.git master:gh-pages
cd -