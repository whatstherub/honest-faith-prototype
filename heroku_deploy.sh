git checkout heroku-deploy
git reset --hard master
gulp build --env=production
git add -f web/assets/*
git commit -m "Assets"
git push heroku heroku-deploy:master --force
