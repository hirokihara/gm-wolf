#!/usr/bin/env bash
# このシェルを実行するにはgnu-sedが必要です。
# please "brew install gnu-sed"

app_name="gm-wolf"
target=""
before=""
after=""

replace() {
  find $target | xargs gsed -i "s/${before}/${after}/g"
}

# index.htmlの置換----------------------
target=dist\/index.html
before="href=styles"
after="href=${app_name}\/styles"
replace

before="ng-include=\"'components"
after="ng-include=\"'${app_name}\/components"
replace

before="src=scripts"
after="src=${app_name}\/scripts"
replace

# vendor.*.jsの置換----------------------
target=dist\/scripts\/vendor.*.js
before="return\".\/components"
after="return\".\/${app_name}\/components"
replace

# main.*.jsの置換----------------------
target=dist\/scripts\/main.*.js
before="href=\"#\/"
after="href=\"${app_name}\/#\/"
replace











