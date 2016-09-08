
set -e

[[ -d .git ]] || (git init && git touch README.md && git commit -m 'Initial commit')
git remote add jsskel https://github.com/anandthakker/jsskel.git
git fetch jsskel
git merge jsskel/master --squash
npm init -y
git commit -am "Init with jsskel"
git remote remove jsskel

