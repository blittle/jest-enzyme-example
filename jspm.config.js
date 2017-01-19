SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jest-training/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.19",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "core-js": "npm:core-js@2.4.1"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.21.1",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.20.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.21.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.20.0",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.21.0",
          "lodash": "npm:lodash@4.17.4"
        }
      },
      "npm:babel-runtime@6.20.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
        }
      },
      "npm:babel-types@6.21.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.20.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.17.4",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jest-training": {
      "main": "jest-training.js",
      "meta": {
        "*.js": {
					"loader": "plugin-babel",
					"babelOptions": {
            "plugins": ["babel-plugin-transform-react-jsx"]
          }
				},
				"*.css": {
					"loader": "jspm-loader-css"
				}
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
    "react": "npm:react@15.4.2",
    "react-dom": "npm:react-dom@15.4.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:react-dom@15.4.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.8"
      }
    },
    "npm:react@15.4.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.8"
      }
    },
    "npm:fbjs@0.8.8": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "core-js": "npm:core-js@1.2.7",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.2",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "cssnano": "npm:cssnano@3.10.0",
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.1"
      }
    },
    "npm:cssnano@3.10.0": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.6.1",
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.10",
        "decamelize": "npm:decamelize@1.2.0",
        "postcss-colormin": "npm:postcss-colormin@2.2.1",
        "postcss-calc": "npm:postcss-calc@5.3.1",
        "defined": "npm:defined@1.0.0",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
        "postcss-convert-values": "npm:postcss-convert-values@2.6.0",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.2",
        "object-assign": "npm:object-assign@4.1.1",
        "postcss-svgo": "npm:postcss-svgo@2.1.6",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
        "postcss-zindex": "npm:postcss-zindex@2.2.0",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.1.1",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
        "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.2",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:css-modules-loader-core@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.1.2",
        "postcss-modules-values": "npm:postcss-modules-values@1.2.2",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.1.1",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.2"
      }
    },
    "npm:autoprefixer@6.6.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "browserslist": "npm:browserslist@1.5.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "normalize-range": "npm:normalize-range@0.1.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000613"
      }
    },
    "npm:postcss-colormin@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.2"
      }
    },
    "npm:postcss-calc@5.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "reduce-css-calc": "npm:reduce-css-calc@1.3.0",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-convert-values@2.6.0": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-duplicates@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-reduce-transforms@1.0.4": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-svgo@2.1.6": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "svgo": "npm:svgo@0.7.1",
        "is-svg": "npm:is-svg@2.1.0"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "uniqs": "npm:uniqs@2.0.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss-zindex@2.2.0": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.10",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-modules-values@1.2.2": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-modules-local-by-default@1.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-modules-scope@1.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0"
      }
    },
    "npm:postcss-merge-rules@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "browserslist": "npm:browserslist@1.5.2",
        "caniuse-api": "npm:caniuse-api@1.5.2",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.2",
        "vendors": "npm:vendors@1.0.1"
      }
    },
    "npm:postcss@5.1.2": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:postcss@5.2.10": {
      "map": {
        "supports-color": "npm:supports-color@3.2.3",
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:postcss-minify-params@1.2.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss-minify-selectors@2.1.1": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.10",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.2"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-merge-idents@2.1.7": {
      "map": {
        "has": "npm:has@1.0.1",
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-unused@2.2.3": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-normalize-url@3.0.8": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-absolute-url": "npm:is-absolute-url@2.1.0",
        "normalize-url": "npm:normalize-url@1.9.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "uniqid": "npm:uniqid@4.1.1"
      }
    },
    "npm:postcss-normalize-charset@1.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:postcss-minify-gradients@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-ordered-values@2.2.3": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-idents@2.4.0": {
      "map": {
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "postcss": "npm:postcss@5.2.10",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-initial@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.10"
      }
    },
    "npm:browserslist@1.5.2": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000613"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:colormin@1.1.2": {
      "map": {
        "has": "npm:has@1.0.1",
        "color": "npm:color@0.11.4",
        "css-color-names": "npm:css-color-names@0.0.4"
      }
    },
    "npm:supports-color@3.2.3": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:caniuse-api@1.5.2": {
      "map": {
        "browserslist": "npm:browserslist@1.5.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000613",
        "lodash.memoize": "npm:lodash.memoize@4.1.2",
        "lodash.uniq": "npm:lodash.uniq@4.5.0",
        "shelljs": "npm:shelljs@0.7.6"
      }
    },
    "npm:normalize-url@1.9.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "prepend-http": "npm:prepend-http@1.0.4",
        "sort-keys": "npm:sort-keys@1.1.2",
        "query-string": "npm:query-string@4.3.1"
      }
    },
    "npm:reduce-css-calc@1.3.0": {
      "map": {
        "reduce-function-call": "npm:reduce-function-call@1.0.2",
        "balanced-match": "npm:balanced-match@0.4.2",
        "math-expression-evaluator": "npm:math-expression-evaluator@1.2.14"
      }
    },
    "npm:svgo@0.7.1": {
      "map": {
        "sax": "npm:sax@1.2.1",
        "coa": "npm:coa@1.0.1",
        "js-yaml": "npm:js-yaml@3.6.1",
        "colors": "npm:colors@1.1.2",
        "whet.extend": "npm:whet.extend@0.9.9",
        "mkdirp": "npm:mkdirp@0.5.1",
        "csso": "npm:csso@2.2.1"
      }
    },
    "npm:reduce-function-call@1.0.2": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:css-selector-tokenizer@0.6.0": {
      "map": {
        "fastparse": "npm:fastparse@1.1.1",
        "cssesc": "npm:cssesc@0.1.0",
        "regexpu-core": "npm:regexpu-core@1.0.0"
      }
    },
    "npm:postcss-selector-parser@2.2.2": {
      "map": {
        "indexes-of": "npm:indexes-of@1.0.1",
        "flatten": "npm:flatten@1.0.2",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:is-svg@2.1.0": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.1"
      }
    },
    "npm:uniqid@4.1.1": {
      "map": {
        "macaddress": "npm:macaddress@0.2.8"
      }
    },
    "npm:query-string@4.3.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:color@0.11.4": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@1.9.0",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:math-expression-evaluator@1.2.14": {
      "map": {
        "lodash.indexof": "npm:lodash.indexof@4.0.5"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@2.7.3"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:shelljs@0.7.6": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "rechoir": "npm:rechoir@0.6.2",
        "interpret": "npm:interpret@1.0.1"
      }
    },
    "npm:regexpu-core@1.0.0": {
      "map": {
        "regjsparser": "npm:regjsparser@0.1.5",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regenerate": "npm:regenerate@1.3.2"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:color-convert@1.9.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.0": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inflight": "npm:inflight@1.0.6",
        "once": "npm:once@1.4.0",
        "inherits": "npm:inherits@2.0.3",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.2.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:csso@2.2.1": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.2"
      }
    },
    "npm:clap@1.1.2": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    }
  }
});
