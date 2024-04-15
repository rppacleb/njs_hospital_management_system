echo "©️   COPY GENERATED ICON TO STLES/ICONS"
cp -a ./.docs/icons/fonts/ ./styles/icons

echo "©️   COPY CSS FOR ICONS TO icons.css"
cp ./.docs/icons/style.css ./styles/icons/icons.css

echo "✅  GENERATION SUCCESS"