set -e

rm -rf docs

npm run build

echo "blog.lixiangyu.xyz" > ./docs/CNAME

git add ./docs

git commit -m "build: 生成静态文件" -m "生成静态文件"
