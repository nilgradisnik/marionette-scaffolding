rm -rf output
nodejs r.js -o build.js
nodejs r.js -o cssIn=../style.css out=output/style.css

mkdir output/images
cp ../index.html output/index.html
cp ../images/* output/images/
REQUIRE_VERSION='2.1.5'
SEDCMD='sed -i'
if [[ $OSTYPE == *"darwin"* ]]; then
  SEDCMD=$SEDCMD' .tmp'
fi
SEDCMD=$SEDCMD' s/lib\/require\/require.js/http:\/\/requirejs.org\/docs\/release\/'$REQUIRE_VERSION'\/minified\/require.js/g output/index.html'
$SEDCMD
rm -f output/*.tmp
