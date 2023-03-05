#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

access_token=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
# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:messiahhh/messiahhh.github.io.git master
# git push -f https://${access_token}@github.com/messiahhh/messiahhh.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:messiahhh/blog.git master:gh-pages
git push -f https://${access_token}@github.com/hduzcc/blog.git master:gh-pages


cd -
