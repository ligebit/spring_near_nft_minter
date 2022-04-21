// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _bundleEsmMinJs = require("web3.storage/dist/bundle.esm.min.js");
const { connect , Contract , WalletAccount , keyStores , utils  } = require('near-api-js');
const MONSTER_CONSTRUCTOR = require("./monster_constructor");
const monster_constructoror = new MONSTER_CONSTRUCTOR();
function getNearConfig(networkId) {
    return {
        networkId: networkId,
        nodeUrl: `https://rpc.${networkId}.near.org`,
        contractName: `dev-1650561550422-61788933866863`,
        walletUrl: `https://wallet.${networkId}.near.org`,
        helperUrl: `https://helper.${networkId}.near.org`
    };
}
window.nearConfig = getNearConfig('testnet');
async function initContract() {
    window.near = await connect(Object.assign({
        deps: {
            keyStore: new keyStores.BrowserLocalStorageKeyStore()
        }
    }, window.nearConfig));
    window.walletAccount = new WalletAccount(window.near);
    window.accountId = window.walletAccount.getAccountId();
    window.contract = new Contract(window.walletAccount.account(), window.nearConfig.contractName, {
        viewMethods: [
            'nft_supply_for_owner',
            'nft_tokens_for_owner',
            'nft_metadata',
            'nft_tokens_for_owner_set',
            'nft_token'
        ],
        changeMethods: [
            'nft_mint',
            'new_default_meta'
        ]
    });
}
async function doWork() {
    if (!window.walletAccount.isSignedIn()) signedOutFlow();
    else signedInFlow();
}
function signedOutFlow() {
    Array.from(document.querySelectorAll('.hide-signed-out')).forEach((el)=>el.style.visibility = 'hidden'
    );
    document.getElementById('sign-in').addEventListener('click', ()=>{
        window.walletAccount.requestSignIn(window.nearConfig.contractName);
    });
}
async function signedInFlow() {
    Array.from(document.querySelectorAll('.hide-signed-out')).forEach((el)=>el.style.visibility = 'visible'
    );
    document.getElementById('sign-in').innerText = window.accountId;
    send_answer_button.innerHTML = 'Create';
    send_answer_button.disabled = false;
    document.getElementById('sign-in').addEventListener('click', (e)=>{
        e.preventDefault();
        window.walletAccount.signOut();
        window.location.replace(window.location.origin + window.location.pathname);
    });
}
const send_answer_button = document.getElementById('send_answer_button');
send_answer_button.onclick = async ()=>{
    send_answer_button.innerHTML = '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" style="margin-right: 5px"></span>Sending image to IPFS...';
    send_answer_button.disabled = true;
    monster_constructoror.canvas.toBlob(async (blob)=>{
        const files = [
            new File([
                blob
            ], `${window.accountId}.png`, {
                type: "image/png"
            })
        ];
        const client = new _bundleEsmMinJs.Web3Storage({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFGM0Y0NUVDNTNFRWUxOEQ3OGQzRDk5REJlNGVjMGUwYTg3NmQ4NkMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA1NTY2ODExOTEsIm5hbWUiOiJzcHJpbmdfbmVhcl9uZnRfbWludGVyIn0.hHCyxm3rMvmqfH65sY9H37apdfnGyrETpXJMypFiqKc'
        });
        const cid = await client.put(files);
        const url = `https://${cid}.ipfs.dweb.link/${window.accountId}.png`;
        await window.contract.nft_mint({
            args: {
                token_id: window.accountId,
                receiver_id: window.accountId,
                token_metadata: {
                    media: url
                }
            },
            gas: "300000000000000",
            amount: utils.format.parseNearAmount("1")
        });
    }, 'image/png');
};
window.onload = async ()=>{
    await monster_constructoror.load();
    await initContract();
    doWork();
    const token = await window.contract.nft_token({
        token_id: window.accountId
    });
    if (token) {
        send_answer_button.innerHTML = 'Check in wallet';
        send_answer_button.onclick = ()=>{
            location.href = 'https://wallet.testnet.near.org/?tab=collectibles';
        };
        document.getElementById('header').innerHTML = `Load...`;
        monster_constructoror.setToken(token);
    } else monster_constructoror.draw();
};

},{"near-api-js":"ohc3m","./monster_constructor":"8vJOg","web3.storage/dist/bundle.esm.min.js":"jp7eb"}],"ohc3m":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @hidden @module */ exports.keyStores = __importStar(require("./key_stores/browser-index"));
__exportStar(require("./common-index"), exports);
__exportStar(require("./browser-connect"), exports);
require("error-polyfill");

},{"./key_stores/browser-index":"aBfSM","./common-index":"gtZXS","./browser-connect":"7yTE6","error-polyfill":"2YFhR"}],"aBfSM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MergeKeyStore = exports.BrowserLocalStorageKeyStore = exports.InMemoryKeyStore = exports.KeyStore = void 0;
/** @hidden @module */ const keystore_1 = require("./keystore");
Object.defineProperty(exports, "KeyStore", {
    enumerable: true,
    get: function() {
        return keystore_1.KeyStore;
    }
});
const in_memory_key_store_1 = require("./in_memory_key_store");
Object.defineProperty(exports, "InMemoryKeyStore", {
    enumerable: true,
    get: function() {
        return in_memory_key_store_1.InMemoryKeyStore;
    }
});
const browser_local_storage_key_store_1 = require("./browser_local_storage_key_store");
Object.defineProperty(exports, "BrowserLocalStorageKeyStore", {
    enumerable: true,
    get: function() {
        return browser_local_storage_key_store_1.BrowserLocalStorageKeyStore;
    }
});
const merge_key_store_1 = require("./merge_key_store");
Object.defineProperty(exports, "MergeKeyStore", {
    enumerable: true,
    get: function() {
        return merge_key_store_1.MergeKeyStore;
    }
});

},{"./keystore":"5Moei","./in_memory_key_store":"fTfs7","./browser_local_storage_key_store":"l5Tuv","./merge_key_store":"kgqhu"}],"5Moei":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyStore = void 0;
/**
 * KeyStores are passed to {@link Near} via {@link NearConfig}
 * and are used by the {@link InMemorySigner} to sign transactions.
 *
 * @example {@link connect}
 */ class KeyStore {
}
exports.KeyStore = KeyStore;

},{}],"fTfs7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryKeyStore = void 0;
const keystore_1 = require("./keystore");
const key_pair_1 = require("../utils/key_pair");
/**
 * Simple in-memory keystore for mainly for testing purposes.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores, utils } from 'near-api-js';
 *
 * const privateKey = '.......';
 * const keyPair = utils.KeyPair.fromString(privateKey);
 *
 * const keyStore = new keyStores.InMemoryKeyStore();
 * keyStore.setKey('testnet', 'example-account.testnet', keyPair);
 *
 * const config = {
 *   keyStore, // instance of InMemoryKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://rpc.testnet.near.org',
 *   walletUrl: 'https://wallet.testnet.near.org',
 *   helperUrl: 'https://helper.testnet.near.org',
 *   explorerUrl: 'https://explorer.testnet.near.org'
 * };
 *
 * // inside an async function
 * const near = await connect(config)
 * ```
 */ class InMemoryKeyStore extends keystore_1.KeyStore {
    constructor(){
        super();
        this.keys = {};
    }
    /**
     * Stores a {@KeyPair} in in-memory storage item
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */ async setKey(networkId, accountId, keyPair) {
        this.keys[`${accountId}:${networkId}`] = keyPair.toString();
    }
    /**
     * Gets a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */ async getKey(networkId, accountId) {
        const value = this.keys[`${accountId}:${networkId}`];
        if (!value) return null;
        return key_pair_1.KeyPair.fromString(value);
    }
    /**
     * Removes a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */ async removeKey(networkId, accountId) {
        delete this.keys[`${accountId}:${networkId}`];
    }
    /**
     * Removes all {@link KeyPairs} from in-memory storage
     */ async clear() {
        this.keys = {};
    }
    /**
     * Get the network(s) from in-memory storage
     * @returns {Promise<string[]>}
     */ async getNetworks() {
        const result = new Set();
        Object.keys(this.keys).forEach((key)=>{
            const parts = key.split(':');
            result.add(parts[1]);
        });
        return Array.from(result.values());
    }
    /**
     * Gets the account(s) from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */ async getAccounts(networkId) {
        const result = new Array();
        Object.keys(this.keys).forEach((key)=>{
            const parts = key.split(':');
            if (parts[parts.length - 1] === networkId) result.push(parts.slice(0, parts.length - 1).join(':'));
        });
        return result;
    }
    /** @hidden */ toString() {
        return 'InMemoryKeyStore';
    }
}
exports.InMemoryKeyStore = InMemoryKeyStore;

},{"./keystore":"5Moei","../utils/key_pair":"kBQFP"}],"kBQFP":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.KeyType = void 0;
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const serialize_1 = require("./serialize");
const enums_1 = require("./enums");
/** All supported key types */ var KeyType;
(function(KeyType1) {
    KeyType1[KeyType1["ED25519"] = 0] = "ED25519";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
function key_type_to_str(keyType) {
    switch(keyType){
        case KeyType.ED25519:
            return 'ed25519';
        default:
            throw new Error(`Unknown key type ${keyType}`);
    }
}
function str_to_key_type(keyType) {
    switch(keyType.toLowerCase()){
        case 'ed25519':
            return KeyType.ED25519;
        default:
            throw new Error(`Unknown key type ${keyType}`);
    }
}
/**
 * PublicKey representation that has type and bytes of the key.
 */ class PublicKey extends enums_1.Assignable {
    static from(value) {
        if (typeof value === 'string') return PublicKey.fromString(value);
        return value;
    }
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        if (parts.length === 1) return new PublicKey({
            keyType: KeyType.ED25519,
            data: serialize_1.base_decode(parts[0])
        });
        else if (parts.length === 2) return new PublicKey({
            keyType: str_to_key_type(parts[0]),
            data: serialize_1.base_decode(parts[1])
        });
        else throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
    }
    toString() {
        return `${key_type_to_str(this.keyType)}:${serialize_1.base_encode(this.data)}`;
    }
    verify(message, signature) {
        switch(this.keyType){
            case KeyType.ED25519:
                return tweetnacl_1.default.sign.detached.verify(message, signature, this.data);
            default:
                throw new Error(`Unknown key type ${this.keyType}`);
        }
    }
}
exports.PublicKey = PublicKey;
class KeyPair {
    /**
     * @param curve Name of elliptical curve, case-insensitive
     * @returns Random KeyPair based on the curve
     */ static fromRandom(curve) {
        switch(curve.toUpperCase()){
            case 'ED25519':
                return KeyPairEd25519.fromRandom();
            default:
                throw new Error(`Unknown curve ${curve}`);
        }
    }
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        if (parts.length === 1) return new KeyPairEd25519(parts[0]);
        else if (parts.length === 2) switch(parts[0].toUpperCase()){
            case 'ED25519':
                return new KeyPairEd25519(parts[1]);
            default:
                throw new Error(`Unknown curve: ${parts[0]}`);
        }
        else throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
    }
}
exports.KeyPair = KeyPair;
/**
 * This class provides key pair functionality for Ed25519 curve:
 * generating key pairs, encoding key pairs, signing and verifying.
 */ class KeyPairEd25519 extends KeyPair {
    /**
     * Construct an instance of key pair given a secret key.
     * It's generally assumed that these are encoded in base58.
     * @param {string} secretKey
     */ constructor(secretKey){
        super();
        const keyPair = tweetnacl_1.default.sign.keyPair.fromSecretKey(serialize_1.base_decode(secretKey));
        this.publicKey = new PublicKey({
            keyType: KeyType.ED25519,
            data: keyPair.publicKey
        });
        this.secretKey = secretKey;
    }
    /**
     * Generate a new random keypair.
     * @example
     * const keyRandom = KeyPair.fromRandom();
     * keyRandom.publicKey
     * // returns [PUBLIC_KEY]
     *
     * keyRandom.secretKey
     * // returns [SECRET_KEY]
     */ static fromRandom() {
        const newKeyPair = tweetnacl_1.default.sign.keyPair();
        return new KeyPairEd25519(serialize_1.base_encode(newKeyPair.secretKey));
    }
    sign(message) {
        const signature = tweetnacl_1.default.sign.detached(message, serialize_1.base_decode(this.secretKey));
        return {
            signature,
            publicKey: this.publicKey
        };
    }
    verify(message, signature) {
        return this.publicKey.verify(message, signature);
    }
    toString() {
        return `ed25519:${this.secretKey}`;
    }
    getPublicKey() {
        return this.publicKey;
    }
}
exports.KeyPairEd25519 = KeyPairEd25519;

},{"tweetnacl":"3J9rh","./serialize":"dUoM9","./enums":"kjmPo"}],"3J9rh":[function(require,module,exports) {
(function(nacl) {
    // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
    // Public domain.
    //
    // Implementation derived from TweetNaCl version 20140427.
    // See for details: http://tweetnacl.cr.yp.to/
    var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init) for(i = 0; i < init.length; i++)r[i] = init[i];
        return r;
    };
    //  Pluggable, initialized in high-level API below.
    var randombytes = function() {
        throw new Error('no PRNG');
    };
    var _0 = new Uint8Array(16);
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf(), gf1 = gf([
        1
    ]), _121665 = gf([
        56129,
        1
    ]), D = gf([
        30883,
        4953,
        19914,
        30187,
        55467,
        16705,
        2637,
        112,
        59544,
        30585,
        16505,
        36039,
        65139,
        11119,
        27886,
        20995
    ]), D2 = gf([
        61785,
        9906,
        39828,
        60374,
        45398,
        33411,
        5274,
        224,
        53552,
        61171,
        33010,
        6542,
        64743,
        22239,
        55772,
        9222
    ]), X = gf([
        54554,
        36645,
        11616,
        51542,
        42930,
        38181,
        51040,
        26924,
        56412,
        64982,
        57905,
        49316,
        21502,
        52590,
        14035,
        8553
    ]), Y = gf([
        26200,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214
    ]), I = gf([
        41136,
        18958,
        6951,
        50414,
        58488,
        44335,
        6150,
        12099,
        55207,
        15867,
        153,
        11085,
        57099,
        20417,
        9344,
        11139
    ]);
    function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
    }
    function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for(i = 0; i < n; i++)d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
    }
    function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
    }
    function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
    }
    function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
    }
    function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
    }
    function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
    }
    function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
    }
    var sigma = new Uint8Array([
        101,
        120,
        112,
        97,
        110,
        100,
        32,
        51,
        50,
        45,
        98,
        121,
        116,
        101,
        32,
        107
    ]);
    // "expand 32-byte k"
    function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 255) | 0;
                z[i] = u & 255;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
    }
    function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 255) | 0;
                z[i] = u & 255;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = x[i];
        }
        return 0;
    }
    function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
    }
    function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
    }
    /*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/ var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
    };
    poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 2048;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while(bytes >= 16){
            t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
            h0 += t0 & 8191;
            t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 8191;
            t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 8191;
            t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 8191;
            t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 8191;
            h5 += t4 >>> 1 & 8191;
            t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 8191;
            t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 8191;
            t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 8191;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 8191;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 8191;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 8191;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 8191;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 8191;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 8191;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 8191;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 8191;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 8191;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 8191;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 8191;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 8191;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 8191;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 8191;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 8191;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 8191;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 8191;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 8191;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 8191;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 8191;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 8191;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
    };
    poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for(; i < 16; i++)this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for(i = 2; i < 10; i++){
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for(i = 1; i < 10; i++){
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 8191;
        }
        g[9] -= 8192;
        mask = (c ^ 1) - 1;
        for(i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(i = 0; i < 10; i++)this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for(i = 1; i < 8; i++){
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
    };
    poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes) want = bytes;
            for(i = 0; i < want; i++)this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for(i = 0; i < bytes; i++)this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
        }
    };
    function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
    }
    function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
    }
    function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for(i = 0; i < 16; i++)c[i] = 0;
        return 0;
    }
    function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for(i = 0; i < 32; i++)m[i] = 0;
        return 0;
    }
    function set25519(r, a) {
        var i;
        for(i = 0; i < 16; i++)r[i] = a[i] | 0;
    }
    function car25519(o) {
        var i, v, c = 1;
        for(i = 0; i < 16; i++){
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
    }
    function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for(var i = 0; i < 16; i++){
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
        }
    }
    function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for(i = 0; i < 16; i++)t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for(j = 0; j < 2; j++){
            m[0] = t[0] - 65517;
            for(i = 1; i < 15; i++){
                m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
                m[i - 1] &= 65535;
            }
            m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 65535;
            sel25519(t, m, 1 - b);
        }
        for(i = 0; i < 16; i++){
            o[2 * i] = t[i] & 255;
            o[2 * i + 1] = t[i] >> 8;
        }
    }
    function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
    }
    function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
    }
    function unpack25519(o, n) {
        var i;
        for(i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
    }
    function A(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] + b[i];
    }
    function Z(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] - b[i];
    }
    function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        // t15 left as is
        // first car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        // second car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
    }
    function S(o, a) {
        M(o, a, a);
    }
    function inv25519(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 253; a >= 0; a--){
            S(c, c);
            if (a !== 2 && a !== 4) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function pow2523(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 250; a >= 0; a--){
            S(c, c);
            if (a !== 1) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for(i = 0; i < 31; i++)z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for(i = 0; i < 16; i++){
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for(i = 254; i >= 0; --i){
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
        }
        for(i = 0; i < 16; i++){
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
    }
    function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
    }
    function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
    }
    function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
    }
    var crypto_box_afternm = crypto_secretbox;
    var crypto_box_open_afternm = crypto_secretbox_open;
    function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
    }
    function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
    }
    var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
    ];
    function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while(n >= 128){
            for(i = 0; i < 16; i++){
                j = 8 * i + pos;
                wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for(i = 0; i < 80; i++){
                bh0 = ah0;
                bh1 = ah1;
                bh2 = ah2;
                bh3 = ah3;
                bh4 = ah4;
                bh5 = ah5;
                bh6 = ah6;
                bh7 = ah7;
                bl0 = al0;
                bl1 = al1;
                bl2 = al2;
                bl3 = al3;
                bl4 = al4;
                bl5 = al5;
                bl6 = al6;
                bl7 = al7;
                // add
                h = ah7;
                l = al7;
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                // Sigma1
                h = (ah4 >>> 14 | al4 << 18) ^ (ah4 >>> 18 | al4 << 14) ^ (al4 >>> 9 | ah4 << 23);
                l = (al4 >>> 14 | ah4 << 18) ^ (al4 >>> 18 | ah4 << 14) ^ (ah4 >>> 9 | al4 << 23);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                // Ch
                h = ah4 & ah5 ^ ~ah4 & ah6;
                l = al4 & al5 ^ ~al4 & al6;
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                // K
                h = K[i * 2];
                l = K[i * 2 + 1];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                // w
                h = wh[i % 16];
                l = wl[i % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                th = c & 65535 | d << 16;
                tl = a & 65535 | b << 16;
                // add
                h = th;
                l = tl;
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                // Sigma0
                h = (ah0 >>> 28 | al0 << 4) ^ (al0 >>> 2 | ah0 << 30) ^ (al0 >>> 7 | ah0 << 25);
                l = (al0 >>> 28 | ah0 << 4) ^ (ah0 >>> 2 | al0 << 30) ^ (ah0 >>> 7 | al0 << 25);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                // Maj
                h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh7 = c & 65535 | d << 16;
                bl7 = a & 65535 | b << 16;
                // add
                h = bh3;
                l = bl3;
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = th;
                l = tl;
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh3 = c & 65535 | d << 16;
                bl3 = a & 65535 | b << 16;
                ah1 = bh0;
                ah2 = bh1;
                ah3 = bh2;
                ah4 = bh3;
                ah5 = bh4;
                ah6 = bh5;
                ah7 = bh6;
                ah0 = bh7;
                al1 = bl0;
                al2 = bl1;
                al3 = bl2;
                al4 = bl3;
                al5 = bl4;
                al6 = bl5;
                al7 = bl6;
                al0 = bl7;
                if (i % 16 === 15) for(j = 0; j < 16; j++){
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 65535;
                    b = l >>> 16;
                    c = h & 65535;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 65535;
                    b += l >>> 16;
                    c += h & 65535;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = (th >>> 1 | tl << 31) ^ (th >>> 8 | tl << 24) ^ th >>> 7;
                    l = (tl >>> 1 | th << 31) ^ (tl >>> 8 | th << 24) ^ (tl >>> 7 | th << 25);
                    a += l & 65535;
                    b += l >>> 16;
                    c += h & 65535;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = (th >>> 19 | tl << 13) ^ (tl >>> 29 | th << 3) ^ th >>> 6;
                    l = (tl >>> 19 | th << 13) ^ (th >>> 29 | tl << 3) ^ (tl >>> 6 | th << 26);
                    a += l & 65535;
                    b += l >>> 16;
                    c += h & 65535;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = c & 65535 | d << 16;
                    wl[j] = a & 65535 | b << 16;
                }
            }
            // add
            h = ah0;
            l = al0;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 65535 | d << 16;
            hl[0] = al0 = a & 65535 | b << 16;
            h = ah1;
            l = al1;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 65535 | d << 16;
            hl[1] = al1 = a & 65535 | b << 16;
            h = ah2;
            l = al2;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 65535 | d << 16;
            hl[2] = al2 = a & 65535 | b << 16;
            h = ah3;
            l = al3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 65535 | d << 16;
            hl[3] = al3 = a & 65535 | b << 16;
            h = ah4;
            l = al4;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 65535 | d << 16;
            hl[4] = al4 = a & 65535 | b << 16;
            h = ah5;
            l = al5;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 65535 | d << 16;
            hl[5] = al5 = a & 65535 | b << 16;
            h = ah6;
            l = al6;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 65535 | d << 16;
            hl[6] = al6 = a & 65535 | b << 16;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 65535 | d << 16;
            hl[7] = al7 = a & 65535 | b << 16;
            pos += 128;
            n -= 128;
        }
        return n;
    }
    function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for(i = 0; i < n; i++)x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for(i = 0; i < 8; i++)ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
    }
    function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
    }
    function cswap(p, q, b) {
        var i;
        for(i = 0; i < 4; i++)sel25519(p[i], q[i], b);
    }
    function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for(i = 255; i >= 0; --i){
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
        }
    }
    function scalarbase(p, s) {
        var q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
    }
    function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for(i = 0; i < 32; i++)sk[i + 32] = pk[i];
        return 0;
    }
    var L = new Float64Array([
        237,
        211,
        245,
        92,
        26,
        99,
        18,
        88,
        214,
        156,
        247,
        162,
        222,
        249,
        222,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16
    ]);
    function modL(r, x) {
        var carry, i, j, k;
        for(i = 63; i >= 32; --i){
            carry = 0;
            for(j = i - 32, k = i - 12; j < k; ++j){
                x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                carry = Math.floor((x[j] + 128) / 256);
                x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
        }
        carry = 0;
        for(j = 0; j < 32; j++){
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
        }
        for(j = 0; j < 32; j++)x[j] -= carry * L[j];
        for(i = 0; i < 32; i++){
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
        }
    }
    function reduce(r) {
        var x = new Float64Array(64), i;
        for(i = 0; i < 64; i++)x[i] = r[i];
        for(i = 0; i < 64; i++)r[i] = 0;
        modL(r, x);
    }
    // Note: difference from C - smlen returned, not passed as argument.
    function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for(i = 0; i < n; i++)sm[64 + i] = m[i];
        for(i = 0; i < 32; i++)sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for(i = 32; i < 64; i++)sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for(i = 0; i < 64; i++)x[i] = 0;
        for(i = 0; i < 32; i++)x[i] = r[i];
        for(i = 0; i < 32; i++)for(j = 0; j < 32; j++)x[i + j] += h[i] * d[j];
        modL(sm.subarray(32), x);
        return smlen;
    }
    function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
    }
    function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ], q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for(i = 0; i < n; i++)m[i] = sm[i];
        for(i = 0; i < 32; i++)m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
            for(i = 0; i < n; i++)m[i] = 0;
            return -1;
        }
        for(i = 0; i < n; i++)m[i] = sm[i + 64];
        return n;
    }
    var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
    nacl.lowlevel = {
        crypto_core_hsalsa20: crypto_core_hsalsa20,
        crypto_stream_xor: crypto_stream_xor,
        crypto_stream: crypto_stream,
        crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
        crypto_stream_salsa20: crypto_stream_salsa20,
        crypto_onetimeauth: crypto_onetimeauth,
        crypto_onetimeauth_verify: crypto_onetimeauth_verify,
        crypto_verify_16: crypto_verify_16,
        crypto_verify_32: crypto_verify_32,
        crypto_secretbox: crypto_secretbox,
        crypto_secretbox_open: crypto_secretbox_open,
        crypto_scalarmult: crypto_scalarmult,
        crypto_scalarmult_base: crypto_scalarmult_base,
        crypto_box_beforenm: crypto_box_beforenm,
        crypto_box_afternm: crypto_box_afternm,
        crypto_box: crypto_box,
        crypto_box_open: crypto_box_open,
        crypto_box_keypair: crypto_box_keypair,
        crypto_hash: crypto_hash,
        crypto_sign: crypto_sign,
        crypto_sign_keypair: crypto_sign_keypair,
        crypto_sign_open: crypto_sign_open,
        crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES: crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
        crypto_hash_BYTES: crypto_hash_BYTES,
        gf: gf,
        D: D,
        L: L,
        pack25519: pack25519,
        unpack25519: unpack25519,
        M: M,
        A: A,
        S: S,
        Z: Z,
        pow2523: pow2523,
        add: add,
        set25519: set25519,
        modL: modL,
        scalarmult: scalarmult,
        scalarbase: scalarbase
    };
    /* High-level API */ function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
    }
    function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
    }
    function checkArrayTypes() {
        for(var i = 0; i < arguments.length; i++){
            if (!(arguments[i] instanceof Uint8Array)) throw new TypeError('unexpected type, use Uint8Array');
        }
    }
    function cleanup(arr) {
        for(var i = 0; i < arr.length; i++)arr[i] = 0;
    }
    nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
    };
    nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for(var i = 0; i < msg.length; i++)m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
    };
    nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for(var i = 0; i < box.length; i++)c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
    };
    nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
    nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
    nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
    nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
        if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
    };
    nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
    };
    nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
    nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
    nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
    };
    nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
    };
    nacl.box.after = nacl.secretbox;
    nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
    };
    nacl.box.open.after = nacl.secretbox.open;
    nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
    nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
    nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
    nacl.box.nonceLength = crypto_box_NONCEBYTES;
    nacl.box.overheadLength = nacl.secretbox.overheadLength;
    nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
    };
    nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for(var i = 0; i < m.length; i++)m[i] = tmp[i];
        return m;
    };
    nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for(var i = 0; i < sig.length; i++)sig[i] = signedMsg[i];
        return sig;
    };
    nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for(i = 0; i < crypto_sign_BYTES; i++)sm[i] = sig[i];
        for(i = 0; i < msg.length; i++)sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
    };
    nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for(var i = 0; i < pk.length; i++)pk[i] = secretKey[32 + i];
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for(var i = 0; i < 32; i++)sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
    nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
    nacl.sign.seedLength = crypto_sign_SEEDBYTES;
    nacl.sign.signatureLength = crypto_sign_BYTES;
    nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
    };
    nacl.hash.hashLength = crypto_hash_BYTES;
    nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        // Zero length arguments are considered not equal.
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
    };
    nacl.setPRNG = function(fn) {
        randombytes = fn;
    };
    (function() {
        // Initialize PRNG if environment provides CSPRNG.
        // If not, methods calling randombytes will throw.
        var crypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
            // Browsers.
            var QUOTA = 65536;
            nacl.setPRNG(function(x, n) {
                var i, v = new Uint8Array(n);
                for(i = 0; i < n; i += QUOTA)crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        } else {
            // Node.js.
            crypto = require('crypto');
            if (crypto && crypto.randomBytes) nacl.setPRNG(function(x, n) {
                var i, v = crypto.randomBytes(n);
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        }
    })();
})(module.exports ? module.exports : self.nacl = self.nacl || {});

},{"crypto":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"dUoM9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var borsh_1 = require("borsh");
Object.defineProperty(exports, "base_encode", {
    enumerable: true,
    get: function() {
        return borsh_1.baseEncode;
    }
});
Object.defineProperty(exports, "base_decode", {
    enumerable: true,
    get: function() {
        return borsh_1.baseDecode;
    }
});
Object.defineProperty(exports, "serialize", {
    enumerable: true,
    get: function() {
        return borsh_1.serialize;
    }
});
Object.defineProperty(exports, "deserialize", {
    enumerable: true,
    get: function() {
        return borsh_1.deserialize;
    }
});
Object.defineProperty(exports, "BorshError", {
    enumerable: true,
    get: function() {
        return borsh_1.BorshError;
    }
});
Object.defineProperty(exports, "BinaryWriter", {
    enumerable: true,
    get: function() {
        return borsh_1.BinaryWriter;
    }
});
Object.defineProperty(exports, "BinaryReader", {
    enumerable: true,
    get: function() {
        return borsh_1.BinaryReader;
    }
});

},{"borsh":"4JCmN"}],"4JCmN":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var Buffer = require("buffer").Buffer;
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const bs58_1 = __importDefault(require("bs58"));
// TODO: Make sure this polyfill not included when not required
const encoding = __importStar(require("text-encoding-utf-8"));
const TextDecoder = typeof global.TextDecoder !== 'function' ? encoding.TextDecoder : global.TextDecoder;
const textDecoder = new TextDecoder('utf-8', {
    fatal: true
});
function baseEncode(value) {
    if (typeof value === 'string') value = Buffer.from(value, 'utf8');
    return bs58_1.default.encode(Buffer.from(value));
}
exports.baseEncode = baseEncode;
function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
}
exports.baseDecode = baseDecode;
const INITIAL_LENGTH = 1024;
class BorshError extends Error {
    constructor(message){
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        // NOTE: Modifying message directly as jest doesn't use .toString()
        this.message = this.originalMessage + ': ' + this.fieldPath.join('.');
    }
}
exports.BorshError = BorshError;
/// Binary encoder.
class BinaryWriter {
    constructor(){
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
    }
    maybeResize() {
        if (this.buf.length < 16 + this.length) this.buf = Buffer.concat([
            this.buf,
            Buffer.alloc(INITIAL_LENGTH)
        ]);
    }
    writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
    }
    writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
    }
    writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
    }
    writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 8)));
    }
    writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 16)));
    }
    writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 32)));
    }
    writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 64)));
    }
    writeBuffer(buffer) {
        // Buffer.from is needed as this.buf.subarray can return plain Uint8Array in browser
        this.buf = Buffer.concat([
            Buffer.from(this.buf.subarray(0, this.length)),
            buffer,
            Buffer.alloc(INITIAL_LENGTH)
        ]);
        this.length += buffer.length;
    }
    writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, 'utf8');
        this.writeU32(b.length);
        this.writeBuffer(b);
    }
    writeFixedArray(array) {
        this.writeBuffer(Buffer.from(array));
    }
    writeArray(array, fn) {
        this.maybeResize();
        this.writeU32(array.length);
        for (const elem of array){
            this.maybeResize();
            fn(elem);
        }
    }
    toArray() {
        return this.buf.subarray(0, this.length);
    }
}
exports.BinaryWriter = BinaryWriter;
function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function(...args) {
        try {
            return originalMethod.apply(this, args);
        } catch (e) {
            if (e instanceof RangeError) {
                const code = e.code;
                if ([
                    'ERR_BUFFER_OUT_OF_BOUNDS',
                    'ERR_OUT_OF_RANGE'
                ].indexOf(code) >= 0) throw new BorshError('Reached the end of buffer when deserializing');
            }
            throw e;
        }
    };
}
class BinaryReader {
    constructor(buf){
        this.buf = buf;
        this.offset = 0;
    }
    readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, 'le');
    }
    readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, 'le');
    }
    readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, 'le');
    }
    readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, 'le');
    }
    readBuffer(len) {
        if (this.offset + len > this.buf.length) throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
    }
    readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
            // NOTE: Using TextDecoder to fail on invalid UTF-8
            return textDecoder.decode(buf);
        } catch (e) {
            throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
    }
    readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
    }
    readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for(let i = 0; i < len; ++i)result.push(fn());
        return result;
    }
}
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU8", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU16", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU32", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU64", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU128", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU256", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU512", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readString", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readFixedArray", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readArray", null);
exports.BinaryReader = BinaryReader;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
        // TODO: Handle missing values properly (make sure they never result in just skipped write)
        if (typeof fieldType === 'string') writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        else if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') {
                if (value.length !== fieldType[0]) throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                writer.writeFixedArray(value);
            } else if (fieldType.length === 2 && typeof fieldType[1] === 'number') {
                if (value.length !== fieldType[1]) throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                for(let i = 0; i < fieldType[1]; i++)serializeField(schema, null, value[i], fieldType[0], writer);
            } else writer.writeArray(value, (item)=>{
                serializeField(schema, fieldName, item, fieldType[0], writer);
            });
        } else if (fieldType.kind !== undefined) switch(fieldType.kind){
            case 'option':
                if (value === null || value === undefined) writer.writeU8(0);
                else {
                    writer.writeU8(1);
                    serializeField(schema, fieldName, value, fieldType.type, writer);
                }
                break;
            default:
                throw new BorshError(`FieldType ${fieldType} unrecognized`);
        }
        else serializeStruct(schema, value, writer);
    } catch (error) {
        if (error instanceof BorshError) error.addToFieldPath(fieldName);
        throw error;
    }
}
function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === 'function') {
        obj.borshSerialize(writer);
        return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    if (structSchema.kind === 'struct') structSchema.fields.map(([fieldName, fieldType])=>{
        serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
    });
    else if (structSchema.kind === 'enum') {
        const name = obj[structSchema.field];
        for(let idx = 0; idx < structSchema.values.length; ++idx){
            const [fieldName, fieldType] = structSchema.values[idx];
            if (fieldName === name) {
                writer.writeU8(idx);
                serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                break;
            }
        }
    } else throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
}
/// Serialize given object using schema of the form:
/// { class_name -> [ [field_name, field_type], .. ], .. }
function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
}
exports.serialize = serialize;
function deserializeField(schema, fieldName, fieldType, reader) {
    try {
        if (typeof fieldType === 'string') return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') return reader.readFixedArray(fieldType[0]);
            else if (typeof fieldType[1] === 'number') {
                const arr = [];
                for(let i = 0; i < fieldType[1]; i++)arr.push(deserializeField(schema, null, fieldType[0], reader));
                return arr;
            } else return reader.readArray(()=>deserializeField(schema, fieldName, fieldType[0], reader)
            );
        }
        if (fieldType.kind === 'option') {
            const option = reader.readU8();
            if (option) return deserializeField(schema, fieldName, fieldType.type, reader);
            return undefined;
        }
        return deserializeStruct(schema, fieldType, reader);
    } catch (error) {
        if (error instanceof BorshError) error.addToFieldPath(fieldName);
        throw error;
    }
}
function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === 'function') return classType.borshDeserialize(reader);
    const structSchema = schema.get(classType);
    if (!structSchema) throw new BorshError(`Class ${classType.name} is missing in schema`);
    if (structSchema.kind === 'struct') {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields)result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        return new classType(result);
    }
    if (structSchema.kind === 'enum') {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) throw new BorshError(`Enum index: ${idx} is out of range`);
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({
            [fieldName]: fieldValue
        });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
}
/// Deserializes object from bytes using schema.
function deserialize(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer.length) throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
    return result;
}
exports.deserialize = deserialize;
/// Deserializes object from bytes using schema, without checking the length read
function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    return deserializeStruct(schema, classType, reader);
}
exports.deserializeUnchecked = deserializeUnchecked;

},{"buffer":"fCgem","bn.js":"VopIn","bs58":"4ji3p","text-encoding-utf-8":"feCA6"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require('base64-js');
const ieee754 = require('ieee754');
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"VopIn":[function(require,module,exports) {
(function(module, exports) {
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) return number;
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if (typeof module === 'object') module.exports = BN;
    else exports.BN = BN;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') Buffer = window.Buffer;
        else Buffer = require('buffer').Buffer;
    } catch (e) {}
    BN.isBN = function isBN(num) {
        if (num instanceof BN) return true;
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') return this._initNumber(number, base, endian);
        if (typeof number === 'object') return this._initArray(number, base, endian);
        if (base === 'hex') base = 16;
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') {
            start++;
            this.negative = 1;
        }
        if (start < number.length) {
            if (base === 16) this._parseHex(number, start, endian);
            else {
                this._parseBase(number, base, start);
                if (endian === 'le') this._initArray(this.toArray(), base, endian);
            }
        }
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 67108864) {
            this.words = [
                number & 67108863
            ];
            this.length = 1;
        } else if (number < 4503599627370496) {
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863
            ];
            this.length = 2;
        } else {
            assert(number < 9007199254740992); // 2 ^ 53 (unsafe)
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        var off = 0;
        if (endian === 'be') for(i = number.length - 1, j = 0; i >= 0; i -= 3){
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        else if (endian === 'le') for(i = 0, j = 0; i < number.length; i += 3){
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        return this._strip();
    };
    function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        // '0' - '9'
        if (c >= 48 && c <= 57) return c - 48;
        else if (c >= 65 && c <= 70) return c - 55;
        else if (c >= 97 && c <= 102) return c - 87;
        else assert(false, 'Invalid character in ' + string);
    }
    function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) r |= parseHex4Bits(string, index - 1) << 4;
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start, endian) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        // 24-bits chunks
        var off = 0;
        var j = 0;
        var w;
        if (endian === 'be') for(i = number.length - 1; i >= start; i -= 2){
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
            } else off += 8;
        }
        else {
            var parseLength = number.length - start;
            for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 67108863;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else off += 8;
            }
        }
        this._strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) b = c - 49 + 10;
            else if (c >= 17) b = c - 17 + 10;
            else b = c;
            assert(c >= 0 && b < mul, 'Invalid character');
            r += b;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base)limbLen++;
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++)pow *= base;
            this.imuln(pow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
        this._strip();
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)dest.words[i] = this.words[i];
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
    }
    BN.prototype._move = function _move(dest) {
        move(dest, this);
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size)this.words[this.length++] = 0;
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype._strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0)this.length--;
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) this.negative = 0;
        return this;
    };
    // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
    if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') try {
        BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e1) {
        BN.prototype.inspect = inspect;
    }
    else BN.prototype.inspect = inspect;
    function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 16777215).toString(16);
                carry = w >>> 24 - off & 16777215;
                if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out;
                else out = word + out;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) out = carry.toString(16) + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modrn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) out = zeros[groupSize - r.length] + r + out;
                else out = r + out;
            }
            if (this.isZero()) out = '0' + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) ret += this.words[1] * 67108864;
        else if (this.length === 3 && this.words[2] === 1) // NOTE: at this stage it is known that the top bit is set
        ret += 4503599627370496 + this.words[1] * 67108864;
        else if (this.length > 2) assert(false, 'Number can only safely store up to 53 bits');
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
    };
    if (Buffer) BN.prototype.toBuffer = function toBuffer(endian, length) {
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    var allocate = function allocate(ArrayType, size) {
        if (ArrayType.allocUnsafe) return ArrayType.allocUnsafe(size);
        return new ArrayType(size);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === 'le' ? 'LE' : 'BE';
        this['_toArrayLike' + postfix](res, byteLength);
        return res;
    };
    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position++] = word & 255;
            if (position < res.length) res[position++] = word >> 8 & 255;
            if (position < res.length) res[position++] = word >> 16 & 255;
            if (shift === 6) {
                if (position < res.length) res[position++] = word >> 24 & 255;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position < res.length) {
            res[position++] = carry;
            while(position < res.length)res[position++] = 0;
        }
    };
    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position--] = word & 255;
            if (position >= 0) res[position--] = word >> 8 & 255;
            if (position >= 0) res[position--] = word >> 16 & 255;
            if (shift === 6) {
                if (position >= 0) res[position--] = word >> 24 & 255;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position >= 0) {
            res[position--] = carry;
            while(position >= 0)res[position--] = 0;
        }
    };
    if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
    };
    else BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 4096) {
            r += 13;
            t >>>= 13;
        }
        if (t >= 64) {
            r += 7;
            t >>>= 7;
        }
        if (t >= 8) {
            r += 4;
            t >>>= 4;
        }
        if (t >= 2) {
            r += 2;
            t >>>= 2;
        }
        return r + t;
    };
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 1) === 0) r++;
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = num.words[off] >>> wbit & 1;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) this.negative ^= 1;
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length)this.words[this.length++] = 0;
        for(var i = 0; i < num.length; i++)this.words[i] = this.words[i] | num.words[i];
        return this._strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) b = num;
        else b = this;
        for(var i = 0; i < b.length; i++)this.words[i] = this.words[i] & num.words[i];
        this.length = b.length;
        return this._strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++)this.words[i] = a.words[i] ^ b.words[i];
        if (this !== a) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = a.length;
        return this._strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) bytesNeeded--;
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++)this.words[i] = ~this.words[i] & 67108863;
        // Handle the residue
        if (bitsLeft > 0) this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        // And remove leading zeroes
        return this._strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) this.words[off] = this.words[off] | 1 << wbit;
        else this.words[off] = this.words[off] & ~(1 << wbit);
        return this._strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = Math.max(this.length, i);
        if (a !== this) this.negative = 1;
        return this._strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 67108864 | 0;
                rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) out.words[k] = carry | 0;
        else out.length--;
        return out._strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) comb10MulTo = smallMulTo;
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 67108863;
                ncarry = ncarry + (r / 67108864 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 67108863;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) out.words[k] = carry;
        else out.length--;
        return out._strip();
    }
    function jumboMulTo(self, num, out) {
        // Temporary disable, see https://github.com/indutny/bn.js/issues/211
        // var fftm = new FFTM();
        // return fftm.mulp(self, num, out);
        return bigMulTo(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out);
        else if (len < 63) res = smallMulTo(this, num, out);
        else if (len < 1024) res = bigMulTo(this, num, out);
        else res = jumboMulTo(this, num, out);
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++)t[i] = this.revBin(i, l, N);
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1)i++;
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) carry = 0;
            else carry = w / 67108864 | 0;
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i)rws[i] = 0;
        assert(carry === 0);
        assert((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++)ph[i] = 0;
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(typeof num === 'number');
        assert(num < 67108864);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
            if (w[i] === 0) continue;
            res = res.mul(q);
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--)this.words[i + s] = this.words[i];
            for(i = 0; i < s; i++)this.words[i] = 0;
            this.length += s;
        }
        return this._strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) h = (hint - hint % 26) / 26;
        else h = 0;
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++)maskedWords.words[i] = this.words[i];
            maskedWords.length = s;
        }
        if (s === 0) ;
        else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++)this.words[i] = this.words[i + s];
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this._strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) return this;
        if (r !== 0) s++;
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this._strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) <= num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 67108864; i++){
            this.words[i] -= 67108864;
            if (i === this.length - 1) this.words[i + 1] = 1;
            else this.words[i + 1]++;
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else // Carry
        for(var i = 0; i < this.length && this.words[i] < 0; i++){
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
        }
        return this._strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
        }
        if (carry === 0) return this._strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this._strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++)q.words[i] = 0;
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) q.words[m] = 1;
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) a.negative ^= 1;
            }
            if (q) q.words[j] = qj;
        }
        if (q) q._strip();
        a._strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) a.iushrn(shift);
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) return {
            div: new BN(0),
            mod: new BN(0)
        };
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') div = res.div.neg();
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.iadd(num);
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') div = res.div.neg();
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.isub(num);
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) return {
            div: new BN(0),
            mod: this
        };
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') return {
                div: this.divn(num.words[0]),
                mod: null
            };
            if (mode === 'mod') return {
                div: null,
                mod: new BN(this.modrn(num.words[0]))
            };
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modrn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var p = 67108864 % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--)acc = (p * acc + (this.words[i] | 0)) % num;
        return isNegNum ? -acc : acc;
    };
    // WARNING: DEPRECATED
    BN.prototype.modn = function modn(num) {
        return this.modrn(num);
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 67108863);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) x = x.umod(p);
        else x = x.clone();
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) a = a.umod(p);
        else a = a.clone();
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) x1.iadd(delta);
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) x2.iadd(delta);
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) res = x1;
        else res = x2;
        if (res.cmpn(0) < 0) res.iadd(p);
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven())a.iushrn(1);
            while(b.isEven())b.iushrn(1);
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) break;
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) res = 1;
        else {
            if (negative) num = -num;
            assert(num <= 67108863, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) res = -1;
            else if (a > b) res = 1;
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) r.isub(this.p);
        else if (r.strip !== undefined) // r is a BN v4 instance
        r.strip();
        else // r is a BN v5 instance
        r._strip();
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++)output.words[i] = input.words[i];
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) input.length -= 10;
        else input.length -= 9;
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 977;
            num.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) num.length--;
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) num.words[num.length++] = carry;
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') prime = new K256();
        else if (name === 'p224') prime = new P224();
        else if (name === 'p192') prime = new P192();
        else if (name === 'p25519') prime = new P25519();
        else throw new Error('Unknown prime ' + name);
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) return a.clone();
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0)z.redIAdd(nOne);
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++)tmp = tmp.redSqr();
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else return this.imod(inv);
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++)wnd[i] = this.mul(wnd[i - 1], a);
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) start = 26;
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) res = this.sqr(res);
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(module, this);

},{"buffer":"jhUEF"}],"4ji3p":[function(require,module,exports) {
var basex = require('base-x');
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
module.exports = basex(ALPHABET);

},{"base-x":"inVbl"}],"inVbl":[function(require,module,exports) {
'use strict';
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = require('safe-buffer').Buffer;
function base(ALPHABET) {
    if (ALPHABET.length >= 255) throw new TypeError('Alphabet too long');
    var BASE_MAP = new Uint8Array(256);
    for(var j1 = 0; j1 < BASE_MAP.length; j1++)BASE_MAP[j1] = 255;
    for(var i1 = 0; i1 < ALPHABET.length; i1++){
        var x = ALPHABET.charAt(i1);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + ' is ambiguous');
        BASE_MAP[xc] = i1;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) source = _Buffer.from(source);
        if (!_Buffer.isBuffer(source)) throw new TypeError('Expected Buffer');
        if (source.length === 0) return '';
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error('Non-zero carry');
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') throw new TypeError('Expected String');
        if (source.length === 0) return _Buffer.alloc(0);
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error('Non-zero carry');
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0, 0, zeroes);
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;

},{"safe-buffer":"eW7r9"}],"eW7r9":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require('buffer');
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return buffer.SlowBuffer(size);
};

},{"buffer":"fCgem"}],"feCA6":[function(require,module,exports) {
'use strict';
// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.
//
// Utilities
//
/**
 * @param {number} a The number to test.
 * @param {number} min The minimum value in the range, inclusive.
 * @param {number} max The maximum value in the range, inclusive.
 * @return {boolean} True if a >= min and a <= max.
 */ function inRange(a, min, max) {
    return min <= a && a <= max;
}
/**
 * @param {*} o
 * @return {Object}
 */ function ToDictionary(o) {
    if (o === undefined) return {};
    if (o === Object(o)) return o;
    throw TypeError('Could not convert argument to dictionary');
}
/**
 * @param {string} string Input string of UTF-16 code units.
 * @return {!Array.<number>} Code points.
 */ function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode
    // 1. Let S be the DOMString value.
    var s = String(string);
    // 2. Let n be the length of S.
    var n = s.length;
    // 3. Initialize i to 0.
    var i = 0;
    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];
    // 5. While i < n:
    while(i < n){
        // 1. Let c be the code unit in S at index i.
        var c = s.charCodeAt(i);
        // 2. Depending on the value of c:
        // c < 0xD800 or c > 0xDFFF
        if (c < 55296 || c > 57343) // Append to U the Unicode character with code point c.
        u.push(c);
        else if (56320 <= c && c <= 57343) // Append to U a U+FFFD REPLACEMENT CHARACTER.
        u.push(65533);
        else if (55296 <= c && c <= 56319) {
            // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
            // CHARACTER.
            if (i === n - 1) u.push(65533);
            else {
                // 1. Let d be the code unit in S at index i+1.
                var d = string.charCodeAt(i + 1);
                // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
                if (56320 <= d && d <= 57343) {
                    // 1. Let a be c & 0x3FF.
                    var a = c & 1023;
                    // 2. Let b be d & 0x3FF.
                    var b = d & 1023;
                    // 3. Append to U the Unicode character with code point
                    // 2^16+2^10*a+b.
                    u.push(65536 + (a << 10) + b);
                    // 4. Set i to i+1.
                    i += 1;
                } else u.push(65533);
            }
        }
        // 3. Set i to i+1.
        i += 1;
    }
    // 6. Return U.
    return u;
}
/**
 * @param {!Array.<number>} code_points Array of code points.
 * @return {string} string String of UTF-16 code units.
 */ function codePointsToString(code_points) {
    var s = '';
    for(var i = 0; i < code_points.length; ++i){
        var cp = code_points[i];
        if (cp <= 65535) s += String.fromCharCode(cp);
        else {
            cp -= 65536;
            s += String.fromCharCode((cp >> 10) + 55296, (cp & 1023) + 56320);
        }
    }
    return s;
}
//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//
//
// 3. Terminology
//
/**
 * End-of-stream is a special token that signifies no more tokens
 * are in the stream.
 * @const
 */ var end_of_stream = -1;
/**
 * A stream represents an ordered sequence of tokens.
 *
 * @constructor
 * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide the
 * stream.
 */ function Stream(tokens) {
    /** @type {!Array.<number>} */ this.tokens = [].slice.call(tokens);
}
Stream.prototype = {
    /**
   * @return {boolean} True if end-of-stream has been hit.
   */ endOfStream: function() {
        return !this.tokens.length;
    },
    /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */ read: function() {
        if (!this.tokens.length) return end_of_stream;
        return this.tokens.shift();
    },
    /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */ prepend: function(token) {
        if (Array.isArray(token)) {
            var tokens = token;
            while(tokens.length)this.tokens.unshift(tokens.pop());
        } else this.tokens.unshift(token);
    },
    /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */ push: function(token) {
        if (Array.isArray(token)) {
            var tokens = token;
            while(tokens.length)this.tokens.push(tokens.shift());
        } else this.tokens.push(token);
    }
};
//
// 4. Encodings
//
// 4.1 Encoders and decoders
/** @const */ var finished = -1;
/**
 * @param {boolean} fatal If true, decoding errors raise an exception.
 * @param {number=} opt_code_point Override the standard fallback code point.
 * @return {number} The code point to insert on a decoding error.
 */ function decoderError(fatal, opt_code_point) {
    if (fatal) throw TypeError('Decoder error');
    return opt_code_point || 65533;
}
//
// 7. API
//
/** @const */ var DEFAULT_ENCODING = 'utf-8';
// 7.1 Interface TextDecoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextDecoder(encoding, options) {
    if (!(this instanceof TextDecoder)) return new TextDecoder(encoding, options);
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) throw new Error('Encoding not supported. Only utf-8 is supported');
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {boolean} */ this._BOMseen = false;
    /** @private @type {?Decoder} */ this._decoder = null;
    /** @private @type {boolean} */ this._fatal = Boolean(options['fatal']);
    /** @private @type {boolean} */ this._ignoreBOM = Boolean(options['ignoreBOM']);
    Object.defineProperty(this, 'encoding', {
        value: 'utf-8'
    });
    Object.defineProperty(this, 'fatal', {
        value: this._fatal
    });
    Object.defineProperty(this, 'ignoreBOM', {
        value: this._ignoreBOM
    });
}
TextDecoder.prototype = {
    /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */ decode: function decode(input, options) {
        var bytes;
        if (typeof input === 'object' && input instanceof ArrayBuffer) bytes = new Uint8Array(input);
        else if (typeof input === 'object' && 'buffer' in input && input.buffer instanceof ArrayBuffer) bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        else bytes = new Uint8Array(0);
        options = ToDictionary(options);
        if (!this._streaming) {
            this._decoder = new UTF8Decoder({
                fatal: this._fatal
            });
            this._BOMseen = false;
        }
        this._streaming = Boolean(options['stream']);
        var input_stream = new Stream(bytes);
        var code_points = [];
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._decoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (result === null) continue;
            if (Array.isArray(result)) code_points.push.apply(code_points, result);
            else code_points.push(result);
        }
        if (!this._streaming) {
            do {
                result = this._decoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (result === null) continue;
                if (Array.isArray(result)) code_points.push.apply(code_points, result);
                else code_points.push(result);
            }while (!input_stream.endOfStream())
            this._decoder = null;
        }
        if (code_points.length) // If encoding is one of utf-8, utf-16be, and utf-16le, and
        // ignore BOM flag and BOM seen flag are unset, run these
        // subsubsteps:
        {
            if ([
                'utf-8'
            ].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
                // If token is U+FEFF, set BOM seen flag.
                if (code_points[0] === 65279) {
                    this._BOMseen = true;
                    code_points.shift();
                } else // Otherwise, if token is not end-of-stream, set BOM seen
                // flag and append token to output.
                this._BOMseen = true;
            }
        }
        return codePointsToString(code_points);
    }
};
// 7.2 Interface TextEncoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextEncoder(encoding, options) {
    if (!(this instanceof TextEncoder)) return new TextEncoder(encoding, options);
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) throw new Error('Encoding not supported. Only utf-8 is supported');
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {?Encoder} */ this._encoder = null;
    /** @private @type {{fatal: boolean}} */ this._options = {
        fatal: Boolean(options['fatal'])
    };
    Object.defineProperty(this, 'encoding', {
        value: 'utf-8'
    });
}
TextEncoder.prototype = {
    /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */ encode: function encode(opt_string, options) {
        opt_string = opt_string ? String(opt_string) : '';
        options = ToDictionary(options);
        // NOTE: This option is nonstandard. None of the encodings
        // permitted for encoding (i.e. UTF-8, UTF-16) are stateful,
        // so streaming is not necessary.
        if (!this._streaming) this._encoder = new UTF8Encoder(this._options);
        this._streaming = Boolean(options['stream']);
        var bytes = [];
        var input_stream = new Stream(stringToCodePoints(opt_string));
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._encoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (Array.isArray(result)) bytes.push.apply(bytes, result);
            else bytes.push(result);
        }
        if (!this._streaming) {
            while(true){
                result = this._encoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (Array.isArray(result)) bytes.push.apply(bytes, result);
                else bytes.push(result);
            }
            this._encoder = null;
        }
        return new Uint8Array(bytes);
    }
};
//
// 8. The encoding
//
// 8.1 utf-8
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Decoder(options) {
    var fatal = options.fatal;
    // utf-8's decoder's has an associated utf-8 code point, utf-8
    // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
    // lower boundary (initially 0x80), and a utf-8 upper boundary
    // (initially 0xBF).
    var /** @type {number} */ utf8_code_point = 0, /** @type {number} */ utf8_bytes_seen = 0, /** @type {number} */ utf8_bytes_needed = 0, /** @type {number} */ utf8_lower_boundary = 128, /** @type {number} */ utf8_upper_boundary = 191;
    /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point.
   */ this.handler = function(stream, bite) {
        // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
        // set utf-8 bytes needed to 0 and return error.
        if (bite === end_of_stream && utf8_bytes_needed !== 0) {
            utf8_bytes_needed = 0;
            return decoderError(fatal);
        }
        // 2. If byte is end-of-stream, return finished.
        if (bite === end_of_stream) return finished;
        // 3. If utf-8 bytes needed is 0, based on byte:
        if (utf8_bytes_needed === 0) {
            // 0x00 to 0x7F
            if (inRange(bite, 0, 127)) // Return a code point whose value is byte.
            return bite;
            // 0xC2 to 0xDF
            if (inRange(bite, 194, 223)) {
                // Set utf-8 bytes needed to 1 and utf-8 code point to byte
                // − 0xC0.
                utf8_bytes_needed = 1;
                utf8_code_point = bite - 192;
            } else if (inRange(bite, 224, 239)) {
                // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
                if (bite === 224) utf8_lower_boundary = 160;
                // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
                if (bite === 237) utf8_upper_boundary = 159;
                // 3. Set utf-8 bytes needed to 2 and utf-8 code point to
                // byte − 0xE0.
                utf8_bytes_needed = 2;
                utf8_code_point = bite - 224;
            } else if (inRange(bite, 240, 244)) {
                // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
                if (bite === 240) utf8_lower_boundary = 144;
                // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
                if (bite === 244) utf8_upper_boundary = 143;
                // 3. Set utf-8 bytes needed to 3 and utf-8 code point to
                // byte − 0xF0.
                utf8_bytes_needed = 3;
                utf8_code_point = bite - 240;
            } else // Return error.
            return decoderError(fatal);
            // Then (byte is in the range 0xC2 to 0xF4) set utf-8 code
            // point to utf-8 code point << (6 × utf-8 bytes needed) and
            // return continue.
            utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
            return null;
        }
        // 4. If byte is not in the range utf-8 lower boundary to utf-8
        // upper boundary, run these substeps:
        if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
            // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
            // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
            // utf-8 upper boundary to 0xBF.
            utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
            utf8_lower_boundary = 128;
            utf8_upper_boundary = 191;
            // 2. Prepend byte to stream.
            stream.prepend(bite);
            // 3. Return error.
            return decoderError(fatal);
        }
        // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
        // to 0xBF.
        utf8_lower_boundary = 128;
        utf8_upper_boundary = 191;
        // 6. Increase utf-8 bytes seen by one and set utf-8 code point
        // to utf-8 code point + (byte − 0x80) << (6 × (utf-8 bytes
        // needed − utf-8 bytes seen)).
        utf8_bytes_seen += 1;
        utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
        // 7. If utf-8 bytes seen is not equal to utf-8 bytes needed,
        // continue.
        if (utf8_bytes_seen !== utf8_bytes_needed) return null;
        // 8. Let code point be utf-8 code point.
        var code_point = utf8_code_point;
        // 9. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
        // seen to 0.
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        // 10. Return a code point whose value is code point.
        return code_point;
    };
}
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Encoder(options) {
    var fatal = options.fatal;
    /**
   * @param {Stream} stream Input stream.
   * @param {number} code_point Next code point read from the stream.
   * @return {(number|!Array.<number>)} Byte(s) to emit.
   */ this.handler = function(stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === end_of_stream) return finished;
        // 2. If code point is in the range U+0000 to U+007F, return a
        // byte whose value is code point.
        if (inRange(code_point, 0, 127)) return code_point;
        // 3. Set count and offset based on the range code point is in:
        var count, offset;
        // U+0080 to U+07FF:    1 and 0xC0
        if (inRange(code_point, 128, 2047)) {
            count = 1;
            offset = 192;
        } else if (inRange(code_point, 2048, 65535)) {
            count = 2;
            offset = 224;
        } else if (inRange(code_point, 65536, 1114111)) {
            count = 3;
            offset = 240;
        }
        // 4.Let bytes be a byte sequence whose first byte is (code
        // point >> (6 × count)) + offset.
        var bytes = [
            (code_point >> 6 * count) + offset
        ];
        // 5. Run these substeps while count is greater than 0:
        while(count > 0){
            // 1. Set temp to code point >> (6 × (count − 1)).
            var temp = code_point >> 6 * (count - 1);
            // 2. Append to bytes 0x80 | (temp & 0x3F).
            bytes.push(128 | temp & 63);
            // 3. Decrease count by one.
            count -= 1;
        }
        // 6. Return bytes bytes, in order.
        return bytes;
    };
}
exports.TextEncoder = TextEncoder;
exports.TextDecoder = TextDecoder;

},{}],"kjmPo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Assignable = exports.Enum = void 0;
/** @hidden @module */ class Enum {
    constructor(properties){
        if (Object.keys(properties).length !== 1) throw new Error('Enum can only take single value');
        Object.keys(properties).map((key)=>{
            this[key] = properties[key];
            this.enum = key;
        });
    }
}
exports.Enum = Enum;
class Assignable {
    constructor(properties){
        Object.keys(properties).map((key)=>{
            this[key] = properties[key];
        });
    }
}
exports.Assignable = Assignable;

},{}],"l5Tuv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BrowserLocalStorageKeyStore = void 0;
const keystore_1 = require("./keystore");
const key_pair_1 = require("../utils/key_pair");
const LOCAL_STORAGE_KEY_PREFIX = 'near-api-js:keystore:';
/**
 * This class is used to store keys in the browsers local storage.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores } from 'near-api-js';
 *
 * const keyStore = new keyStores.BrowserLocalStorageKeyStore();
 * const config = {
 *   keyStore, // instance of BrowserLocalStorageKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://rpc.testnet.near.org',
 *   walletUrl: 'https://wallet.testnet.near.org',
 *   helperUrl: 'https://helper.testnet.near.org',
 *   explorerUrl: 'https://explorer.testnet.near.org'
 * };
 *
 * // inside an async function
 * const near = await connect(config)
 * ```
 */ class BrowserLocalStorageKeyStore extends keystore_1.KeyStore {
    /**
     * @param localStorage defaults to window.localStorage
     * @param prefix defaults to `near-api-js:keystore:`
     */ constructor(localStorage = window.localStorage, prefix = LOCAL_STORAGE_KEY_PREFIX){
        super();
        this.localStorage = localStorage;
        this.prefix = prefix;
    }
    /**
     * Stores a {@link KeyPair} in local storage.
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */ async setKey(networkId, accountId, keyPair) {
        this.localStorage.setItem(this.storageKeyForSecretKey(networkId, accountId), keyPair.toString());
    }
    /**
     * Gets a {@link KeyPair} from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */ async getKey(networkId, accountId) {
        const value = this.localStorage.getItem(this.storageKeyForSecretKey(networkId, accountId));
        if (!value) return null;
        return key_pair_1.KeyPair.fromString(value);
    }
    /**
     * Removes a {@link KeyPair} from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */ async removeKey(networkId, accountId) {
        this.localStorage.removeItem(this.storageKeyForSecretKey(networkId, accountId));
    }
    /**
     * Removes all items that start with `prefix` from local storage
     */ async clear() {
        for (const key of this.storageKeys())if (key.startsWith(this.prefix)) this.localStorage.removeItem(key);
    }
    /**
     * Get the network(s) from local storage
     * @returns {Promise<string[]>}
     */ async getNetworks() {
        const result = new Set();
        for (const key of this.storageKeys())if (key.startsWith(this.prefix)) {
            const parts = key.substring(this.prefix.length).split(':');
            result.add(parts[1]);
        }
        return Array.from(result.values());
    }
    /**
     * Gets the account(s) from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */ async getAccounts(networkId) {
        const result = new Array();
        for (const key of this.storageKeys())if (key.startsWith(this.prefix)) {
            const parts = key.substring(this.prefix.length).split(':');
            if (parts[1] === networkId) result.push(parts[0]);
        }
        return result;
    }
    /**
     * @hidden
     * Helper function to retrieve a local storage key
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the storage keythat's sought
     * @returns {string} An example might be: `near-api-js:keystore:near-friend:default`
     */ storageKeyForSecretKey(networkId, accountId) {
        return `${this.prefix}${accountId}:${networkId}`;
    }
    /** @hidden */ *storageKeys() {
        for(let i = 0; i < this.localStorage.length; i++)yield this.localStorage.key(i);
    }
}
exports.BrowserLocalStorageKeyStore = BrowserLocalStorageKeyStore;

},{"./keystore":"5Moei","../utils/key_pair":"kBQFP"}],"kgqhu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MergeKeyStore = void 0;
const keystore_1 = require("./keystore");
class MergeKeyStore extends keystore_1.KeyStore {
    /**
     * @param keyStores read calls are attempted from start to end of array
     * @param options.writeKeyStoreIndex the keystore index that will receive all write calls
     */ constructor(keyStores, options = {
        writeKeyStoreIndex: 0
    }){
        super();
        this.options = options;
        this.keyStores = keyStores;
    }
    /**
     * Store a {@link KeyPain} to the first index of a key store array
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */ async setKey(networkId, accountId, keyPair) {
        await this.keyStores[this.options.writeKeyStoreIndex].setKey(networkId, accountId, keyPair);
    }
    /**
     * Gets a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */ async getKey(networkId, accountId) {
        for (const keyStore of this.keyStores){
            const keyPair = await keyStore.getKey(networkId, accountId);
            if (keyPair) return keyPair;
        }
        return null;
    }
    /**
     * Removes a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */ async removeKey(networkId, accountId) {
        for (const keyStore of this.keyStores)await keyStore.removeKey(networkId, accountId);
    }
    /**
     * Removes all items from each key store
     */ async clear() {
        for (const keyStore of this.keyStores)await keyStore.clear();
    }
    /**
     * Get the network(s) from the array of key stores
     * @returns {Promise<string[]>}
     */ async getNetworks() {
        const result = new Set();
        for (const keyStore of this.keyStores)for (const network of (await keyStore.getNetworks()))result.add(network);
        return Array.from(result);
    }
    /**
     * Gets the account(s) from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */ async getAccounts(networkId) {
        const result = new Set();
        for (const keyStore of this.keyStores)for (const account of (await keyStore.getAccounts(networkId)))result.add(account);
        return Array.from(result);
    }
    /** @hidden */ toString() {
        return `MergeKeyStore(${this.keyStores.join(', ')})`;
    }
}
exports.MergeKeyStore = MergeKeyStore;

},{"./keystore":"5Moei"}],"gtZXS":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletConnection = exports.WalletAccount = exports.ConnectedWalletAccount = exports.Near = exports.KeyPair = exports.Signer = exports.InMemorySigner = exports.Contract = exports.Connection = exports.Account = exports.multisig = exports.validators = exports.transactions = exports.utils = exports.providers = exports.accountCreator = void 0;
/** @hidden @module */ const providers = __importStar(require("./providers"));
exports.providers = providers;
const utils = __importStar(require("./utils"));
exports.utils = utils;
const transactions = __importStar(require("./transaction"));
exports.transactions = transactions;
const validators = __importStar(require("./validators"));
exports.validators = validators;
const account_1 = require("./account");
Object.defineProperty(exports, "Account", {
    enumerable: true,
    get: function() {
        return account_1.Account;
    }
});
const multisig = __importStar(require("./account_multisig"));
exports.multisig = multisig;
const accountCreator = __importStar(require("./account_creator"));
exports.accountCreator = accountCreator;
const connection_1 = require("./connection");
Object.defineProperty(exports, "Connection", {
    enumerable: true,
    get: function() {
        return connection_1.Connection;
    }
});
const signer_1 = require("./signer");
Object.defineProperty(exports, "Signer", {
    enumerable: true,
    get: function() {
        return signer_1.Signer;
    }
});
Object.defineProperty(exports, "InMemorySigner", {
    enumerable: true,
    get: function() {
        return signer_1.InMemorySigner;
    }
});
const contract_1 = require("./contract");
Object.defineProperty(exports, "Contract", {
    enumerable: true,
    get: function() {
        return contract_1.Contract;
    }
});
const key_pair_1 = require("./utils/key_pair");
Object.defineProperty(exports, "KeyPair", {
    enumerable: true,
    get: function() {
        return key_pair_1.KeyPair;
    }
});
const near_1 = require("./near");
Object.defineProperty(exports, "Near", {
    enumerable: true,
    get: function() {
        return near_1.Near;
    }
});
// TODO: Deprecate and remove WalletAccount
const wallet_account_1 = require("./wallet-account");
Object.defineProperty(exports, "ConnectedWalletAccount", {
    enumerable: true,
    get: function() {
        return wallet_account_1.ConnectedWalletAccount;
    }
});
Object.defineProperty(exports, "WalletAccount", {
    enumerable: true,
    get: function() {
        return wallet_account_1.WalletAccount;
    }
});
Object.defineProperty(exports, "WalletConnection", {
    enumerable: true,
    get: function() {
        return wallet_account_1.WalletConnection;
    }
});

},{"./providers":"gtL2a","./utils":"jOCMH","./transaction":"jJQ5a","./validators":"6CFD9","./account":"hxSQV","./account_multisig":"7q1du","./account_creator":"aQbxV","./connection":"3ThJM","./signer":"a6bzI","./contract":"guo0T","./utils/key_pair":"kBQFP","./near":"9Ying","./wallet-account":"dHM3Z"}],"gtL2a":[function(require,module,exports) {
"use strict";
/** @hidden @module */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorContext = exports.TypedError = exports.getTransactionLastResult = exports.FinalExecutionStatusBasic = exports.JsonRpcProvider = exports.Provider = void 0;
const provider_1 = require("./provider");
Object.defineProperty(exports, "Provider", {
    enumerable: true,
    get: function() {
        return provider_1.Provider;
    }
});
Object.defineProperty(exports, "getTransactionLastResult", {
    enumerable: true,
    get: function() {
        return provider_1.getTransactionLastResult;
    }
});
Object.defineProperty(exports, "FinalExecutionStatusBasic", {
    enumerable: true,
    get: function() {
        return provider_1.FinalExecutionStatusBasic;
    }
});
const json_rpc_provider_1 = require("./json-rpc-provider");
Object.defineProperty(exports, "JsonRpcProvider", {
    enumerable: true,
    get: function() {
        return json_rpc_provider_1.JsonRpcProvider;
    }
});
Object.defineProperty(exports, "TypedError", {
    enumerable: true,
    get: function() {
        return json_rpc_provider_1.TypedError;
    }
});
Object.defineProperty(exports, "ErrorContext", {
    enumerable: true,
    get: function() {
        return json_rpc_provider_1.ErrorContext;
    }
});

},{"./provider":"cUEh0","./json-rpc-provider":"kzXVU"}],"cUEh0":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
/**
 * NEAR RPC API request types and responses
 * @module
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionLastResult = exports.Provider = exports.IdType = exports.FinalExecutionStatusBasic = exports.ExecutionStatusBasic = void 0;
var ExecutionStatusBasic;
(function(ExecutionStatusBasic1) {
    ExecutionStatusBasic1["Unknown"] = "Unknown";
    ExecutionStatusBasic1["Pending"] = "Pending";
    ExecutionStatusBasic1["Failure"] = "Failure";
})(ExecutionStatusBasic = exports.ExecutionStatusBasic || (exports.ExecutionStatusBasic = {}));
var FinalExecutionStatusBasic;
(function(FinalExecutionStatusBasic1) {
    FinalExecutionStatusBasic1["NotStarted"] = "NotStarted";
    FinalExecutionStatusBasic1["Started"] = "Started";
    FinalExecutionStatusBasic1["Failure"] = "Failure";
})(FinalExecutionStatusBasic = exports.FinalExecutionStatusBasic || (exports.FinalExecutionStatusBasic = {}));
var IdType;
(function(IdType1) {
    IdType1["Transaction"] = "transaction";
    IdType1["Receipt"] = "receipt";
})(IdType = exports.IdType || (exports.IdType = {}));
/** @hidden */ class Provider {
}
exports.Provider = Provider;
/** @hidden */ function getTransactionLastResult(txResult) {
    if (typeof txResult.status === 'object' && typeof txResult.status.SuccessValue === 'string') {
        const value = Buffer.from(txResult.status.SuccessValue, 'base64').toString();
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
    return null;
}
exports.getTransactionLastResult = getTransactionLastResult;

},{"buffer":"fCgem"}],"kzXVU":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonRpcProvider = exports.ErrorContext = exports.TypedError = void 0;
/**
 * This module contains the {@link JsonRpcProvider} client class
 * which can be used to interact with the NEAR RPC API.
 * @see {@link providers/provider} for a list of request and response types
 */ const depd_1 = __importDefault(require("depd"));
const provider_1 = require("./provider");
const web_1 = require("../utils/web");
const errors_1 = require("../utils/errors");
Object.defineProperty(exports, "TypedError", {
    enumerable: true,
    get: function() {
        return errors_1.TypedError;
    }
});
Object.defineProperty(exports, "ErrorContext", {
    enumerable: true,
    get: function() {
        return errors_1.ErrorContext;
    }
});
const borsh_1 = require("borsh");
const exponential_backoff_1 = __importDefault(require("../utils/exponential-backoff"));
const rpc_errors_1 = require("../utils/rpc_errors");
// Default number of retries before giving up on a request.
const REQUEST_RETRY_NUMBER = 12;
// Default wait until next retry in millis.
const REQUEST_RETRY_WAIT = 500;
// Exponential back off for waiting to retry.
const REQUEST_RETRY_WAIT_BACKOFF = 1.5;
/// Keep ids unique across all connections.
let _nextId = 123;
/**
 * Client class to interact with the NEAR RPC API.
 * @see {@link https://github.com/near/nearcore/tree/master/chain/jsonrpc}
 */ class JsonRpcProvider extends provider_1.Provider {
    /**
     * @param connectionInfoOrUrl ConnectionInfo or RPC API endpoint URL (deprecated)
     */ constructor(connectionInfoOrUrl){
        super();
        if (connectionInfoOrUrl != null && typeof connectionInfoOrUrl == 'object') this.connection = connectionInfoOrUrl;
        else {
            const deprecate = depd_1.default('JsonRpcProvider(url?: string)');
            deprecate('use `JsonRpcProvider(connectionInfo: ConnectionInfo)` instead');
            this.connection = {
                url: connectionInfoOrUrl
            };
        }
    }
    /**
     * Gets the RPC's status
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#general-validator-status}
     */ async status() {
        return this.sendJsonRpc('status', []);
    }
    /**
     * Sends a signed transaction to the RPC and waits until transaction is fully complete
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#send-transaction-await}
     *
     * @param signedTransaction The signed transaction being sent
     */ async sendTransaction(signedTransaction) {
        const bytes = signedTransaction.encode();
        return this.sendJsonRpc('broadcast_tx_commit', [
            Buffer.from(bytes).toString('base64')
        ]);
    }
    /**
     * Sends a signed transaction to the RPC and immediately returns transaction hash
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#send-transaction-async)
     * @param signedTransaction The signed transaction being sent
     * @returns {Promise<FinalExecutionOutcome>}
     */ async sendTransactionAsync(signedTransaction) {
        const bytes = signedTransaction.encode();
        return this.sendJsonRpc('broadcast_tx_async', [
            Buffer.from(bytes).toString('base64')
        ]);
    }
    /**
     * Gets a transaction's status from the RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#transaction-status}
     *
     * @param txHash A transaction hash as either a Uint8Array or a base58 encoded string
     * @param accountId The NEAR account that signed the transaction
     */ async txStatus(txHash, accountId) {
        if (typeof txHash === 'string') return this.txStatusString(txHash, accountId);
        else return this.txStatusUint8Array(txHash, accountId);
    }
    async txStatusUint8Array(txHash, accountId) {
        return this.sendJsonRpc('tx', [
            borsh_1.baseEncode(txHash),
            accountId
        ]);
    }
    async txStatusString(txHash, accountId) {
        return this.sendJsonRpc('tx', [
            txHash,
            accountId
        ]);
    }
    /**
     * Gets a transaction's status from the RPC with receipts
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#transaction-status-with-receipts)
     * @param txHash The hash of the transaction
     * @param accountId The NEAR account that signed the transaction
     * @returns {Promise<FinalExecutionOutcome>}
     */ async txStatusReceipts(txHash, accountId) {
        return this.sendJsonRpc('EXPERIMENTAL_tx_status', [
            borsh_1.baseEncode(txHash),
            accountId
        ]);
    }
    /**
     * Query the RPC as [shown in the docs](https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts)
     * Query the RPC by passing an {@link RpcQueryRequest}
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts}
     *
     * @typeParam T the shape of the returned query response
     */ async query(...args) {
        let result;
        if (args.length === 1) result = await this.sendJsonRpc('query', args[0]);
        else {
            const [path, data] = args;
            result = await this.sendJsonRpc('query', [
                path,
                data
            ]);
        }
        if (result && result.error) throw new errors_1.TypedError(`Querying ${args} failed: ${result.error}.\n${JSON.stringify(result, null, 2)}`, rpc_errors_1.getErrorTypeFromErrorMessage(result.error));
        return result;
    }
    /**
     * Query for block info from the RPC
     * pass block_id OR finality as blockQuery, not both
     * @see {@link https://docs.near.org/docs/interaction/rpc#block}
     *
     * @param blockQuery {@link BlockReference} (passing a {@link BlockId} is deprecated)
     */ async block(blockQuery) {
        const { finality  } = blockQuery;
        let { blockId  } = blockQuery;
        if (typeof blockQuery !== 'object') {
            const deprecate = depd_1.default('JsonRpcProvider.block(blockId)');
            deprecate('use `block({ blockId })` or `block({ finality })` instead');
            blockId = blockQuery;
        }
        return this.sendJsonRpc('block', {
            block_id: blockId,
            finality
        });
    }
    /**
     * Query changes in block from the RPC
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#block-details)
     */ async blockChanges(blockQuery) {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes_in_block', {
            block_id: blockId,
            finality
        });
    }
    /**
     * Queries for details about a specific chunk appending details of receipts and transactions to the same chunk data provided by a block
     * @see {@link https://docs.near.org/docs/interaction/rpc#chunk}
     *
     * @param chunkId Hash of a chunk ID or shard ID
     */ async chunk(chunkId) {
        return this.sendJsonRpc('chunk', [
            chunkId
        ]);
    }
    /**
     * Query validators of the epoch defined by the given block id.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#detailed-validator-status}
     *
     * @param blockId Block hash or height, or null for latest.
     */ async validators(blockId) {
        return this.sendJsonRpc('validators', [
            blockId
        ]);
    }
    /**
     * @deprecated
     * Gets the genesis config from RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#genesis-config}
     */ async experimental_genesisConfig() {
        const deprecate = depd_1.default('JsonRpcProvider.experimental_protocolConfig()');
        deprecate('use `experimental_protocolConfig({ sync_checkpoint: \'genesis\' })` to fetch the up-to-date or genesis protocol config explicitly');
        return await this.sendJsonRpc('EXPERIMENTAL_protocol_config', {
            sync_checkpoint: 'genesis'
        });
    }
    /**
     * Gets the protocol config at a block from RPC
     * @see {@link }
     *
     * @param blockReference specifies the block to get the protocol config for
     */ async experimental_protocolConfig(blockReference) {
        return await this.sendJsonRpc('EXPERIMENTAL_protocol_config', blockReference);
    }
    /**
     * @deprecated Use {@link lightClientProof} instead
     */ async experimental_lightClientProof(request) {
        const deprecate = depd_1.default('JsonRpcProvider.experimental_lightClientProof(request)');
        deprecate('use `lightClientProof` instead');
        return await this.lightClientProof(request);
    }
    /**
     * Gets a light client execution proof for verifying execution outcomes
     * @see {@link https://github.com/nearprotocol/NEPs/blob/master/specs/ChainSpec/LightClient.md#light-client-proof}
     */ async lightClientProof(request) {
        return await this.sendJsonRpc('EXPERIMENTAL_light_client_proof', request);
    }
    /**
     * Gets access key changes for a given array of accountIds
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-all)
     * @returns {Promise<ChangeResult>}
     */ async accessKeyChanges(accountIdArray, blockQuery) {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'all_access_key_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets single access key changes for a given array of access keys
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-single)
     * @returns {Promise<ChangeResult>}
     */ async singleAccessKeyChanges(accessKeyArray, blockQuery) {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'single_access_key_changes',
            keys: accessKeyArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets account changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-account-changes)
     * @returns {Promise<ChangeResult>}
     */ async accountChanges(accountIdArray, blockQuery) {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'account_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets contract state changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: If you pass a keyPrefix it must be base64 encoded
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-state-changes)
     * @returns {Promise<ChangeResult>}
     */ async contractStateChanges(accountIdArray, blockQuery, keyPrefix = '') {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'data_changes',
            account_ids: accountIdArray,
            key_prefix_base64: keyPrefix,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets contract code changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: Change is returned in a base64 encoded WASM file
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-code-changes)
     * @returns {Promise<ChangeResult>}
     */ async contractCodeChanges(accountIdArray, blockQuery) {
        const { finality  } = blockQuery;
        const { blockId  } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'contract_code_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Returns gas price for a specific block_height or block_hash.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#gas-price}
     *
     * @param blockId Block hash or height, or null for latest.
     */ async gasPrice(blockId) {
        return await this.sendJsonRpc('gas_price', [
            blockId
        ]);
    }
    /**
     * Directly call the RPC specifying the method and params
     *
     * @param method RPC method
     * @param params Parameters to the method
     */ async sendJsonRpc(method, params) {
        const response1 = await exponential_backoff_1.default(REQUEST_RETRY_WAIT, REQUEST_RETRY_NUMBER, REQUEST_RETRY_WAIT_BACKOFF, async ()=>{
            try {
                const request = {
                    method,
                    params,
                    id: _nextId++,
                    jsonrpc: '2.0'
                };
                const response = await web_1.fetchJson(this.connection, JSON.stringify(request));
                if (response.error) {
                    if (typeof response.error.data === 'object') {
                        if (typeof response.error.data.error_message === 'string' && typeof response.error.data.error_type === 'string') // if error data has error_message and error_type properties, we consider that node returned an error in the old format
                        throw new errors_1.TypedError(response.error.data.error_message, response.error.data.error_type);
                        throw rpc_errors_1.parseRpcError(response.error.data);
                    } else {
                        const errorMessage = `[${response.error.code}] ${response.error.message}: ${response.error.data}`;
                        // NOTE: All this hackery is happening because structured errors not implemented
                        // TODO: Fix when https://github.com/nearprotocol/nearcore/issues/1839 gets resolved
                        if (response.error.data === 'Timeout' || errorMessage.includes('Timeout error') || errorMessage.includes('query has timed out')) throw new errors_1.TypedError(errorMessage, 'TimeoutError');
                        throw new errors_1.TypedError(errorMessage, rpc_errors_1.getErrorTypeFromErrorMessage(response.error.data));
                    }
                }
                // Success when response.error is not exist
                return response;
            } catch (error) {
                if (error.type === 'TimeoutError') {
                    console.warn(`Retrying request to ${method} as it has timed out`, params);
                    return null;
                }
                throw error;
            }
        });
        const { result  } = response1;
        // From jsonrpc spec:
        // result
        //   This member is REQUIRED on success.
        //   This member MUST NOT exist if there was an error invoking the method.
        if (typeof result === 'undefined') throw new errors_1.TypedError(`Exceeded ${REQUEST_RETRY_NUMBER} attempts for request to ${method}.`, 'RetriesExceeded');
        return result;
    }
}
exports.JsonRpcProvider = JsonRpcProvider;

},{"buffer":"fCgem","depd":"2jGeI","./provider":"cUEh0","../utils/web":"iSqiB","../utils/errors":"btMYy","borsh":"4JCmN","../utils/exponential-backoff":"51I5X","../utils/rpc_errors":"1TB1L"}],"2jGeI":[function(require,module,exports) {
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = depd;
/**
 * Create deprecate for namespace in caller.
 */ function depd(namespace) {
    if (!namespace) throw new TypeError('argument namespace is required');
    function deprecate(message) {
    // no-op in browser
    }
    deprecate._file = undefined;
    deprecate._ignored = true;
    deprecate._namespace = namespace;
    deprecate._traced = false;
    deprecate._warned = Object.create(null);
    deprecate.function = wrapfunction;
    deprecate.property = wrapproperty;
    return deprecate;
}
/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */ function wrapfunction(fn, message) {
    if (typeof fn !== 'function') throw new TypeError('argument fn must be a function');
    return fn;
}
/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */ function wrapproperty(obj, prop, message) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') throw new TypeError('argument obj must be object');
    var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (!descriptor) throw new TypeError('must call property on owner object');
    if (!descriptor.configurable) throw new TypeError('property must be configurable');
}

},{}],"iSqiB":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchJson = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const exponential_backoff_1 = __importDefault(require("./exponential-backoff"));
const providers_1 = require("../providers");
const errors_1 = require("./errors");
const START_WAIT_TIME_MS = 1000;
const BACKOFF_MULTIPLIER = 1.5;
const RETRY_NUMBER = 10;
async function fetchJson(connectionInfoOrUrl, json) {
    let connectionInfo = {
        url: null
    };
    if (typeof connectionInfoOrUrl === 'string') connectionInfo.url = connectionInfoOrUrl;
    else connectionInfo = connectionInfoOrUrl;
    const response1 = await exponential_backoff_1.default(START_WAIT_TIME_MS, RETRY_NUMBER, BACKOFF_MULTIPLIER, async ()=>{
        try {
            const response = await fetch(connectionInfo.url, {
                method: json ? 'POST' : 'GET',
                body: json ? json : undefined,
                headers: {
                    ...connectionInfo.headers,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                if (response.status === 503) {
                    errors_1.logWarning(`Retrying HTTP request for ${connectionInfo.url} as it's not available now`);
                    return null;
                }
                throw http_errors_1.default(response.status, await response.text());
            }
            return response;
        } catch (error) {
            if (error.toString().includes('FetchError') || error.toString().includes('Failed to fetch')) {
                errors_1.logWarning(`Retrying HTTP request for ${connectionInfo.url} because of error: ${error}`);
                return null;
            }
            throw error;
        }
    });
    if (!response1) throw new providers_1.TypedError(`Exceeded ${RETRY_NUMBER} attempts for ${connectionInfo.url}.`, 'RetriesExceeded');
    return await response1.json();
}
exports.fetchJson = fetchJson;

},{"http-errors":"a3NQ3","./exponential-backoff":"51I5X","../providers":"gtL2a","./errors":"btMYy"}],"a3NQ3":[function(require,module,exports) {
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module dependencies.
 * @private
 */ var deprecate = require('depd')('http-errors');
var setPrototypeOf = require('setprototypeof');
var statuses = require('statuses');
var inherits = require('inherits');
var toIdentifier = require('toidentifier');
/**
 * Module exports.
 * @public
 */ module.exports = createError;
module.exports.HttpError = createHttpErrorConstructor();
module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);
// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);
/**
 * Get the code class of a status code.
 * @private
 */ function codeClass(status) {
    return Number(String(status).charAt(0) + '00');
}
/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */ function createError() {
    // so much arity going on ~_~
    var err;
    var msg;
    var status = 500;
    var props = {};
    for(var i = 0; i < arguments.length; i++){
        var arg = arguments[i];
        if (arg instanceof Error) {
            err = arg;
            status = err.status || err.statusCode || status;
            continue;
        }
        switch(typeof arg){
            case 'string':
                msg = arg;
                break;
            case 'number':
                status = arg;
                if (i !== 0) deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)');
                break;
            case 'object':
                props = arg;
                break;
        }
    }
    if (typeof status === 'number' && (status < 400 || status >= 600)) deprecate('non-error status code; use only 4xx or 5xx status codes');
    if (typeof status !== 'number' || !statuses[status] && (status < 400 || status >= 600)) status = 500;
    // constructor
    var HttpError = createError[status] || createError[codeClass(status)];
    if (!err) {
        // create error
        err = HttpError ? new HttpError(msg) : new Error(msg || statuses[status]);
        Error.captureStackTrace(err, createError);
    }
    if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
        // add properties to generic error
        err.expose = status < 500;
        err.status = err.statusCode = status;
    }
    for(var key in props)if (key !== 'status' && key !== 'statusCode') err[key] = props[key];
    return err;
}
/**
 * Create HTTP error abstract base class.
 * @private
 */ function createHttpErrorConstructor() {
    function HttpError() {
        throw new TypeError('cannot construct abstract class');
    }
    inherits(HttpError, Error);
    return HttpError;
}
/**
 * Create a constructor for a client error.
 * @private
 */ function createClientErrorConstructor(HttpError, name, code) {
    var className = toClassName(name);
    function ClientError(message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);
        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ClientError);
        // adjust the [[Prototype]]
        setPrototypeOf(err, ClientError.prototype);
        // redefine the error message
        Object.defineProperty(err, 'message', {
            enumerable: true,
            configurable: true,
            value: msg,
            writable: true
        });
        // redefine the error name
        Object.defineProperty(err, 'name', {
            enumerable: false,
            configurable: true,
            value: className,
            writable: true
        });
        return err;
    }
    inherits(ClientError, HttpError);
    nameFunc(ClientError, className);
    ClientError.prototype.status = code;
    ClientError.prototype.statusCode = code;
    ClientError.prototype.expose = true;
    return ClientError;
}
/**
 * Create function to test is a value is a HttpError.
 * @private
 */ function createIsHttpErrorFunction(HttpError) {
    return function isHttpError(val) {
        if (!val || typeof val !== 'object') return false;
        if (val instanceof HttpError) return true;
        return val instanceof Error && typeof val.expose === 'boolean' && typeof val.statusCode === 'number' && val.status === val.statusCode;
    };
}
/**
 * Create a constructor for a server error.
 * @private
 */ function createServerErrorConstructor(HttpError, name, code) {
    var className = toClassName(name);
    function ServerError(message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);
        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ServerError);
        // adjust the [[Prototype]]
        setPrototypeOf(err, ServerError.prototype);
        // redefine the error message
        Object.defineProperty(err, 'message', {
            enumerable: true,
            configurable: true,
            value: msg,
            writable: true
        });
        // redefine the error name
        Object.defineProperty(err, 'name', {
            enumerable: false,
            configurable: true,
            value: className,
            writable: true
        });
        return err;
    }
    inherits(ServerError, HttpError);
    nameFunc(ServerError, className);
    ServerError.prototype.status = code;
    ServerError.prototype.statusCode = code;
    ServerError.prototype.expose = false;
    return ServerError;
}
/**
 * Set the name of a function, if possible.
 * @private
 */ function nameFunc(func, name) {
    var desc = Object.getOwnPropertyDescriptor(func, 'name');
    if (desc && desc.configurable) {
        desc.value = name;
        Object.defineProperty(func, 'name', desc);
    }
}
/**
 * Populate the exports object with constructors for every error class.
 * @private
 */ function populateConstructorExports(exports, codes, HttpError) {
    codes.forEach(function forEachCode(code) {
        var CodeError;
        var name = toIdentifier(statuses[code]);
        switch(codeClass(code)){
            case 400:
                CodeError = createClientErrorConstructor(HttpError, name, code);
                break;
            case 500:
                CodeError = createServerErrorConstructor(HttpError, name, code);
                break;
        }
        if (CodeError) {
            // export the constructor
            exports[code] = CodeError;
            exports[name] = CodeError;
        }
    });
    // backwards-compatibility
    exports["I'mateapot"] = deprecate.function(exports.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead');
}
/**
 * Get a class name from a name identifier.
 * @private
 */ function toClassName(name) {
    return name.substr(-5) !== 'Error' ? name + 'Error' : name;
}

},{"depd":"hArTA","setprototypeof":"7xKC9","statuses":"l1u37","inherits":"bRL3M","toidentifier":"gn15y"}],"hArTA":[function(require,module,exports) {
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = depd;
/**
 * Create deprecate for namespace in caller.
 */ function depd(namespace) {
    if (!namespace) throw new TypeError('argument namespace is required');
    function deprecate(message) {
    // no-op in browser
    }
    deprecate._file = undefined;
    deprecate._ignored = true;
    deprecate._namespace = namespace;
    deprecate._traced = false;
    deprecate._warned = Object.create(null);
    deprecate.function = wrapfunction;
    deprecate.property = wrapproperty;
    return deprecate;
}
/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */ function wrapfunction(fn, message) {
    if (typeof fn !== 'function') throw new TypeError('argument fn must be a function');
    return fn;
}
/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */ function wrapproperty(obj, prop, message) {
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function') throw new TypeError('argument obj must be object');
    var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (!descriptor) throw new TypeError('must call property on owner object');
    if (!descriptor.configurable) throw new TypeError('property must be configurable');
}

},{}],"7xKC9":[function(require,module,exports) {
'use strict';
/* eslint no-proto: 0 */ module.exports = Object.setPrototypeOf || (({
    __proto__: []
}) instanceof Array ? setProtoOf : mixinProperties);
function setProtoOf(obj, proto) {
    obj.__proto__ = proto;
    return obj;
}
function mixinProperties(obj, proto) {
    for(var prop in proto)if (!Object.prototype.hasOwnProperty.call(obj, prop)) obj[prop] = proto[prop];
    return obj;
}

},{}],"l1u37":[function(require,module,exports) {
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module dependencies.
 * @private
 */ var codes = require('./codes.json');
/**
 * Module exports.
 * @public
 */ module.exports = status;
// status code to message map
status.STATUS_CODES = codes;
// array of status codes
status.codes = populateStatusesMap(status, codes);
// status codes for redirects
status.redirect = {
    300: true,
    301: true,
    302: true,
    303: true,
    305: true,
    307: true,
    308: true
};
// status codes for empty bodies
status.empty = {
    204: true,
    205: true,
    304: true
};
// status codes for when you should retry the request
status.retry = {
    502: true,
    503: true,
    504: true
};
/**
 * Populate the statuses map for given codes.
 * @private
 */ function populateStatusesMap(statuses, codes1) {
    var arr = [];
    Object.keys(codes1).forEach(function forEachCode(code) {
        var message = codes1[code];
        var status1 = Number(code);
        // Populate properties
        statuses[status1] = message;
        statuses[message] = status1;
        statuses[message.toLowerCase()] = status1;
        // Add to array
        arr.push(status1);
    });
    return arr;
}
/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */ function status(code) {
    if (typeof code === 'number') {
        if (!status[code]) throw new Error('invalid status code: ' + code);
        return code;
    }
    if (typeof code !== 'string') throw new TypeError('code must be a number or string');
    // '403'
    var n = parseInt(code, 10);
    if (!isNaN(n)) {
        if (!status[n]) throw new Error('invalid status code: ' + n);
        return n;
    }
    n = status[code.toLowerCase()];
    if (!n) throw new Error('invalid status message: "' + code + '"');
    return n;
}

},{"./codes.json":"8IptR"}],"8IptR":[function(require,module,exports) {
module.exports = JSON.parse("{\"100\":\"Continue\",\"101\":\"Switching Protocols\",\"102\":\"Processing\",\"103\":\"Early Hints\",\"200\":\"OK\",\"201\":\"Created\",\"202\":\"Accepted\",\"203\":\"Non-Authoritative Information\",\"204\":\"No Content\",\"205\":\"Reset Content\",\"206\":\"Partial Content\",\"207\":\"Multi-Status\",\"208\":\"Already Reported\",\"226\":\"IM Used\",\"300\":\"Multiple Choices\",\"301\":\"Moved Permanently\",\"302\":\"Found\",\"303\":\"See Other\",\"304\":\"Not Modified\",\"305\":\"Use Proxy\",\"306\":\"(Unused)\",\"307\":\"Temporary Redirect\",\"308\":\"Permanent Redirect\",\"400\":\"Bad Request\",\"401\":\"Unauthorized\",\"402\":\"Payment Required\",\"403\":\"Forbidden\",\"404\":\"Not Found\",\"405\":\"Method Not Allowed\",\"406\":\"Not Acceptable\",\"407\":\"Proxy Authentication Required\",\"408\":\"Request Timeout\",\"409\":\"Conflict\",\"410\":\"Gone\",\"411\":\"Length Required\",\"412\":\"Precondition Failed\",\"413\":\"Payload Too Large\",\"414\":\"URI Too Long\",\"415\":\"Unsupported Media Type\",\"416\":\"Range Not Satisfiable\",\"417\":\"Expectation Failed\",\"418\":\"I'm a teapot\",\"421\":\"Misdirected Request\",\"422\":\"Unprocessable Entity\",\"423\":\"Locked\",\"424\":\"Failed Dependency\",\"425\":\"Unordered Collection\",\"426\":\"Upgrade Required\",\"428\":\"Precondition Required\",\"429\":\"Too Many Requests\",\"431\":\"Request Header Fields Too Large\",\"451\":\"Unavailable For Legal Reasons\",\"500\":\"Internal Server Error\",\"501\":\"Not Implemented\",\"502\":\"Bad Gateway\",\"503\":\"Service Unavailable\",\"504\":\"Gateway Timeout\",\"505\":\"HTTP Version Not Supported\",\"506\":\"Variant Also Negotiates\",\"507\":\"Insufficient Storage\",\"508\":\"Loop Detected\",\"509\":\"Bandwidth Limit Exceeded\",\"510\":\"Not Extended\",\"511\":\"Network Authentication Required\"}");

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"gn15y":[function(require,module,exports) {
/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ module.exports = toIdentifier;
/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */ function toIdentifier(str) {
    return str.split(' ').map(function(token) {
        return token.slice(0, 1).toUpperCase() + token.slice(1);
    }).join('').replace(/[^ _0-9a-z]/gi, '');
}

},{}],"51I5X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
async function exponentialBackoff(startWaitTime, retryNumber, waitBackoff, getResult) {
    // TODO: jitter?
    let waitTime = startWaitTime;
    for(let i = 0; i < retryNumber; i++){
        const result = await getResult();
        if (result) return result;
        await sleep(waitTime);
        waitTime *= waitBackoff;
    }
    return null;
}
exports.default = exponentialBackoff;
// Sleep given number of millis.
function sleep(millis) {
    return new Promise((resolve)=>setTimeout(resolve, millis)
    );
}

},{}],"btMYy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logWarning = exports.ErrorContext = exports.TypedError = exports.ArgumentTypeError = exports.PositionalArgsError = void 0;
class PositionalArgsError extends Error {
    constructor(){
        super('Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }');
    }
}
exports.PositionalArgsError = PositionalArgsError;
class ArgumentTypeError extends Error {
    constructor(argName, argType, argValue){
        super(`Expected ${argType} for '${argName}' argument, but got '${JSON.stringify(argValue)}'`);
    }
}
exports.ArgumentTypeError = ArgumentTypeError;
class TypedError extends Error {
    constructor(message, type, context){
        super(message);
        this.type = type || 'UntypedError';
        this.context = context;
    }
}
exports.TypedError = TypedError;
class ErrorContext {
    constructor(transactionHash){
        this.transactionHash = transactionHash;
    }
}
exports.ErrorContext = ErrorContext;
function logWarning(...args) {
    console.warn(...args);
}
exports.logWarning = logWarning;

},{}],"1TB1L":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getErrorTypeFromErrorMessage = exports.formatError = exports.parseResultError = exports.parseRpcError = exports.ServerError = void 0;
const mustache_1 = __importDefault(require("mustache"));
const rpc_error_schema_json_1 = __importDefault(require("../generated/rpc_error_schema.json"));
const error_messages_json_1 = __importDefault(require("../res/error_messages.json"));
const common_index_1 = require("../common-index");
const errors_1 = require("../utils/errors");
const mustacheHelpers = {
    formatNear: ()=>(n, render)=>common_index_1.utils.format.formatNearAmount(render(n))
};
class ServerError extends errors_1.TypedError {
}
exports.ServerError = ServerError;
class ServerTransactionError extends ServerError {
}
function parseRpcError(errorObj) {
    const result = {};
    const errorClassName = walkSubtype(errorObj, rpc_error_schema_json_1.default.schema, result, '');
    // NOTE: This assumes that all errors extend TypedError
    const error = new ServerError(formatError(errorClassName, result), errorClassName);
    Object.assign(error, result);
    return error;
}
exports.parseRpcError = parseRpcError;
function parseResultError(result) {
    const server_error = parseRpcError(result.status.Failure);
    const server_tx_error = new ServerTransactionError();
    Object.assign(server_tx_error, server_error);
    server_tx_error.type = server_error.type;
    server_tx_error.message = server_error.message;
    server_tx_error.transaction_outcome = result.transaction_outcome;
    return server_tx_error;
}
exports.parseResultError = parseResultError;
function formatError(errorClassName, errorData) {
    if (typeof error_messages_json_1.default[errorClassName] === 'string') return mustache_1.default.render(error_messages_json_1.default[errorClassName], {
        ...errorData,
        ...mustacheHelpers
    });
    return JSON.stringify(errorData);
}
exports.formatError = formatError;
/**
 * Walks through defined schema returning error(s) recursively
 * @param errorObj The error to be parsed
 * @param schema A defined schema in JSON mapping to the RPC errors
 * @param result An object used in recursion or called directly
 * @param typeName The human-readable error type name as defined in the JSON mapping
 */ function walkSubtype(errorObj, schema, result, typeName) {
    let error;
    let type;
    let errorTypeName;
    for(const errorName in schema){
        if (isString(errorObj[errorName])) // Return early if error type is in a schema
        return errorObj[errorName];
        if (isObject(errorObj[errorName])) {
            error = errorObj[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        } else if (isObject(errorObj.kind) && isObject(errorObj.kind[errorName])) {
            error = errorObj.kind[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        } else continue;
    }
    if (error && type) {
        for (const prop of Object.keys(type.props))result[prop] = error[prop];
        return walkSubtype(error, schema, result, errorTypeName);
    } else {
        // TODO: is this the right thing to do?
        result.kind = errorObj;
        return typeName;
    }
}
function getErrorTypeFromErrorMessage(errorMessage) {
    // This function should be removed when JSON RPC starts returning typed errors.
    switch(true){
        case /^account .*? does not exist while viewing$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^Account .*? doesn't exist$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^access key .*? does not exist while viewing$/.test(errorMessage):
            return 'AccessKeyDoesNotExist';
        case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(errorMessage):
            return 'CodeDoesNotExist';
        case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(errorMessage):
            return 'InvalidNonce';
        default:
            return 'UntypedError';
    }
}
exports.getErrorTypeFromErrorMessage = getErrorTypeFromErrorMessage;
/**
 * Helper function determining if the argument is an object
 * @param n Value to check
 */ function isObject(n) {
    return Object.prototype.toString.call(n) === '[object Object]';
}
/**
 * Helper function determining if the argument is a string
 * @param n Value to check
 */ function isString(n) {
    return Object.prototype.toString.call(n) === '[object String]';
}

},{"mustache":"izE6r","../generated/rpc_error_schema.json":"k81HS","../res/error_messages.json":"1Z5Hy","../common-index":"gtZXS","../utils/errors":"btMYy"}],"izE6r":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */ var objectToString = Object.prototype.toString;
    var isArray = Array.isArray || function isArrayPolyfill(object) {
        return objectToString.call(object) === '[object Array]';
    };
    function isFunction(object) {
        return typeof object === 'function';
    }
    /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */ function typeStr(obj) {
        return isArray(obj) ? 'array' : typeof obj;
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
    }
    /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */ function hasProperty(obj, propName) {
        return obj != null && typeof obj === 'object' && propName in obj;
    }
    /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */ function primitiveHasOwnProperty(primitive, propName) {
        return primitive != null && typeof primitive !== 'object' && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
    }
    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
        return regExpTest.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string);
    }
    var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
            return entityMap[s];
        });
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */ function parseTemplate(template, tags) {
        if (!template) return [];
        var lineHasNonSpace = false;
        var sections = []; // Stack to hold section tokens
        var tokens = []; // Buffer to hold the tokens
        var spaces = []; // Indices of whitespace tokens on the current line
        var hasTag = false; // Is there a {{tag}} on the current line?
        var nonSpace = false; // Is there a non-space char on the current line?
        var indentation = ''; // Tracks indentation for tags that use it
        var tagIndex = 0; // Stores a count of number of tags encountered on a line
        // Strips all whitespace tokens array for the current line
        // if there was a {{#tag}} on it and otherwise only space.
        function stripSpace() {
            if (hasTag && !nonSpace) while(spaces.length)delete tokens[spaces.pop()];
            else spaces = [];
            hasTag = false;
            nonSpace = false;
        }
        var openingTagRe, closingTagRe, closingCurlyRe;
        function compileTags(tagsToCompile) {
            if (typeof tagsToCompile === 'string') tagsToCompile = tagsToCompile.split(spaceRe, 2);
            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error('Invalid tags: ' + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
            closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
            closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
        }
        compileTags(tags || mustache.tags);
        var scanner = new Scanner(template);
        var start, type, value, chr, token, openSection;
        while(!scanner.eos()){
            start = scanner.pos;
            // Match any text between tags.
            value = scanner.scanUntil(openingTagRe);
            if (value) for(var i = 0, valueLength = value.length; i < valueLength; ++i){
                chr = value.charAt(i);
                if (isWhitespace(chr)) {
                    spaces.push(tokens.length);
                    indentation += chr;
                } else {
                    nonSpace = true;
                    lineHasNonSpace = true;
                    indentation += ' ';
                }
                tokens.push([
                    'text',
                    chr,
                    start,
                    start + 1
                ]);
                start += 1;
                // Check for whitespace on the current line.
                if (chr === '\n') {
                    stripSpace();
                    indentation = '';
                    tagIndex = 0;
                    lineHasNonSpace = false;
                }
            }
            // Match the opening tag.
            if (!scanner.scan(openingTagRe)) break;
            hasTag = true;
            // Get the tag type.
            type = scanner.scan(tagRe) || 'name';
            scanner.scan(whiteRe);
            // Get the tag value.
            if (type === '=') {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe);
            } else if (type === '{') {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = '&';
            } else value = scanner.scanUntil(closingTagRe);
            // Match the closing tag.
            if (!scanner.scan(closingTagRe)) throw new Error('Unclosed tag at ' + scanner.pos);
            if (type == '>') token = [
                type,
                value,
                start,
                scanner.pos,
                indentation,
                tagIndex,
                lineHasNonSpace
            ];
            else token = [
                type,
                value,
                start,
                scanner.pos
            ];
            tagIndex++;
            tokens.push(token);
            if (type === '#' || type === '^') sections.push(token);
            else if (type === '/') {
                // Check section nesting.
                openSection = sections.pop();
                if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            } else if (type === 'name' || type === '{' || type === '&') nonSpace = true;
            else if (type === '=') // Set the tags for the next time around.
            compileTags(value);
        }
        stripSpace();
        // Make sure there are no open sections when we're done.
        openSection = sections.pop();
        if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens));
    }
    /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */ function squashTokens(tokens) {
        var squashedTokens = [];
        var token, lastToken;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            token = tokens[i];
            if (token) {
                if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3];
                } else {
                    squashedTokens.push(token);
                    lastToken = token;
                }
            }
        }
        return squashedTokens;
    }
    /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */ function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];
        var token, section;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            token = tokens[i];
            switch(token[0]){
                case '#':
                case '^':
                    collector.push(token);
                    sections.push(token);
                    collector = token[4] = [];
                    break;
                case '/':
                    section = sections.pop();
                    section[5] = token[2];
                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                    break;
                default:
                    collector.push(token);
            }
        }
        return nestedTokens;
    }
    /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */ function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0;
    }
    /**
   * Returns `true` if the tail is empty (end of string).
   */ Scanner.prototype.eos = function eos() {
        return this.tail === '';
    };
    /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */ Scanner.prototype.scan = function scan(re) {
        var match = this.tail.match(re);
        if (!match || match.index !== 0) return '';
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
    };
    /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */ Scanner.prototype.scanUntil = function scanUntil(re) {
        var index = this.tail.search(re), match;
        switch(index){
            case -1:
                match = this.tail;
                this.tail = '';
                break;
            case 0:
                match = '';
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }
        this.pos += match.length;
        return match;
    };
    /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */ function Context(view, parentContext) {
        this.view = view;
        this.cache = {
            '.': this.view
        };
        this.parent = parentContext;
    }
    /**
   * Creates a new context using the given view with this context
   * as the parent.
   */ Context.prototype.push = function push(view) {
        return new Context(view, this);
    };
    /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */ Context.prototype.lookup = function lookup(name) {
        var cache = this.cache;
        var value;
        if (cache.hasOwnProperty(name)) value = cache[name];
        else {
            var context = this, intermediateValue, names, index, lookupHit = false;
            while(context){
                if (name.indexOf('.') > 0) {
                    intermediateValue = context.view;
                    names = name.split('.');
                    index = 0;
                    /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/ while(intermediateValue != null && index < names.length){
                        if (index === names.length - 1) lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
                        intermediateValue = intermediateValue[names[index++]];
                    }
                } else {
                    intermediateValue = context.view[name];
                    /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/ lookupHit = hasProperty(context.view, name);
                }
                if (lookupHit) {
                    value = intermediateValue;
                    break;
                }
                context = context.parent;
            }
            cache[name] = value;
        }
        if (isFunction(value)) value = value.call(this.view);
        return value;
    };
    /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */ function Writer() {
        this.templateCache = {
            _cache: {},
            set: function set(key, value) {
                this._cache[key] = value;
            },
            get: function get(key) {
                return this._cache[key];
            },
            clear: function clear() {
                this._cache = {};
            }
        };
    }
    /**
   * Clears all cached templates in this writer.
   */ Writer.prototype.clearCache = function clearCache() {
        if (typeof this.templateCache !== 'undefined') this.templateCache.clear();
    };
    /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */ Writer.prototype.parse = function parse(template, tags) {
        var cache = this.templateCache;
        var cacheKey = template + ':' + (tags || mustache.tags).join(':');
        var isCacheEnabled = typeof cache !== 'undefined';
        var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;
        if (tokens == undefined) {
            tokens = parseTemplate(template, tags);
            isCacheEnabled && cache.set(cacheKey, tokens);
        }
        return tokens;
    };
    /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `config` argument is given here, then it should be an
   * object with a `tags` attribute or an `escape` attribute or both.
   * If an array is passed, then it will be interpreted the same way as
   * a `tags` attribute on a `config` object.
   *
   * The `tags` attribute of a `config` object must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   *
   * The `escape` attribute of a `config` object must be a function which
   * accepts a string as input and outputs a safely escaped string.
   * If an `escape` function is not provided, then an HTML-safe string
   * escaping function is used as the default.
   */ Writer.prototype.render = function render(template, view, partials, config) {
        var tags = this.getConfigTags(config);
        var tokens = this.parse(template, tags);
        var context = view instanceof Context ? view : new Context(view, undefined);
        return this.renderTokens(tokens, context, partials, template, config);
    };
    /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */ Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
        var buffer = '';
        var token, symbol, value;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
            else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
            else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
            else if (symbol === '&') value = this.unescapedValue(token, context);
            else if (symbol === 'name') value = this.escapedValue(token, context, config);
            else if (symbol === 'text') value = this.rawValue(token);
            if (value !== undefined) buffer += value;
        }
        return buffer;
    };
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
        var self = this;
        var buffer = '';
        var value = context.lookup(token[1]);
        // This function is used to render an arbitrary template
        // in the current context by higher-order sections.
        function subRender(template) {
            return self.render(template, context, partials, config);
        }
        if (!value) return;
        if (isArray(value)) for(var j = 0, valueLength = value.length; j < valueLength; ++j)buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
        else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
        else if (isFunction(value)) {
            if (typeof originalTemplate !== 'string') throw new Error('Cannot use higher-order sections without the original template');
            // Extract the portion of the original template that the section contains.
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null) buffer += value;
        } else buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
        return buffer;
    };
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
        var value = context.lookup(token[1]);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate, config);
    };
    Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
        var filteredIndentation = indentation.replace(/[^ \t]/g, '');
        var partialByNl = partial.split('\n');
        for(var i = 0; i < partialByNl.length; i++)if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) partialByNl[i] = filteredIndentation + partialByNl[i];
        return partialByNl.join('\n');
    };
    Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
        if (!partials) return;
        var tags = this.getConfigTags(config);
        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) {
            var lineHasNonSpace = token[6];
            var tagIndex = token[5];
            var indentation = token[4];
            var indentedValue = value;
            if (tagIndex == 0 && indentation) indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
            var tokens = this.parse(indentedValue, tags);
            return this.renderTokens(tokens, context, partials, indentedValue, config);
        }
    };
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null) return value;
    };
    Writer.prototype.escapedValue = function escapedValue(token, context, config) {
        var escape = this.getConfigEscape(config) || mustache.escape;
        var value = context.lookup(token[1]);
        if (value != null) return typeof value === 'number' && escape === mustache.escape ? String(value) : escape(value);
    };
    Writer.prototype.rawValue = function rawValue(token) {
        return token[1];
    };
    Writer.prototype.getConfigTags = function getConfigTags(config) {
        if (isArray(config)) return config;
        else if (config && typeof config === 'object') return config.tags;
        else return undefined;
    };
    Writer.prototype.getConfigEscape = function getConfigEscape(config) {
        if (config && typeof config === 'object' && !isArray(config)) return config.escape;
        else return undefined;
    };
    var mustache = {
        name: 'mustache.js',
        version: '4.2.0',
        tags: [
            '{{',
            '}}'
        ],
        clearCache: undefined,
        escape: undefined,
        parse: undefined,
        render: undefined,
        Scanner: undefined,
        Context: undefined,
        Writer: undefined,
        /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */ set templateCache (cache){
            defaultWriter.templateCache = cache;
        },
        /**
     * Gets the default or overridden caching object from the default writer.
     */ get templateCache () {
            return defaultWriter.templateCache;
        }
    };
    // All high-level mustache.* functions use this writer.
    var defaultWriter = new Writer();
    /**
   * Clears all cached templates in the default writer.
   */ mustache.clearCache = function clearCache() {
        return defaultWriter.clearCache();
    };
    /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */ mustache.parse = function parse(template, tags) {
        return defaultWriter.parse(template, tags);
    };
    /**
   * Renders the `template` with the given `view`, `partials`, and `config`
   * using the default writer.
   */ mustache.render = function render(template, view, partials, config) {
        if (typeof template !== 'string') throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first ' + 'argument for mustache#render(template, view, partials)');
        return defaultWriter.render(template, view, partials, config);
    };
    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;
    // Export these mainly for testing, but also for advanced usage.
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
    return mustache;
});

},{}],"k81HS":[function(require,module,exports) {
module.exports = JSON.parse("{\"schema\":{\"BadUTF16\":{\"name\":\"BadUTF16\",\"subtypes\":[],\"props\":{}},\"BadUTF8\":{\"name\":\"BadUTF8\",\"subtypes\":[],\"props\":{}},\"BalanceExceeded\":{\"name\":\"BalanceExceeded\",\"subtypes\":[],\"props\":{}},\"BreakpointTrap\":{\"name\":\"BreakpointTrap\",\"subtypes\":[],\"props\":{}},\"CacheError\":{\"name\":\"CacheError\",\"subtypes\":[\"ReadError\",\"WriteError\",\"DeserializationError\",\"SerializationError\"],\"props\":{}},\"CallIndirectOOB\":{\"name\":\"CallIndirectOOB\",\"subtypes\":[],\"props\":{}},\"CannotAppendActionToJointPromise\":{\"name\":\"CannotAppendActionToJointPromise\",\"subtypes\":[],\"props\":{}},\"CannotReturnJointPromise\":{\"name\":\"CannotReturnJointPromise\",\"subtypes\":[],\"props\":{}},\"CodeDoesNotExist\":{\"name\":\"CodeDoesNotExist\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"CompilationError\":{\"name\":\"CompilationError\",\"subtypes\":[\"CodeDoesNotExist\",\"PrepareError\",\"WasmerCompileError\"],\"props\":{}},\"ContractSizeExceeded\":{\"name\":\"ContractSizeExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"size\":\"\"}},\"Deprecated\":{\"name\":\"Deprecated\",\"subtypes\":[],\"props\":{\"method_name\":\"\"}},\"Deserialization\":{\"name\":\"Deserialization\",\"subtypes\":[],\"props\":{}},\"DeserializationError\":{\"name\":\"DeserializationError\",\"subtypes\":[],\"props\":{}},\"EmptyMethodName\":{\"name\":\"EmptyMethodName\",\"subtypes\":[],\"props\":{}},\"FunctionCallError\":{\"name\":\"FunctionCallError\",\"subtypes\":[\"CompilationError\",\"LinkError\",\"MethodResolveError\",\"WasmTrap\",\"WasmUnknownError\",\"HostError\",\"EvmError\"],\"props\":{}},\"GasExceeded\":{\"name\":\"GasExceeded\",\"subtypes\":[],\"props\":{}},\"GasInstrumentation\":{\"name\":\"GasInstrumentation\",\"subtypes\":[],\"props\":{}},\"GasLimitExceeded\":{\"name\":\"GasLimitExceeded\",\"subtypes\":[],\"props\":{}},\"GenericTrap\":{\"name\":\"GenericTrap\",\"subtypes\":[],\"props\":{}},\"GuestPanic\":{\"name\":\"GuestPanic\",\"subtypes\":[],\"props\":{\"panic_msg\":\"\"}},\"HostError\":{\"name\":\"HostError\",\"subtypes\":[\"BadUTF16\",\"BadUTF8\",\"GasExceeded\",\"GasLimitExceeded\",\"BalanceExceeded\",\"EmptyMethodName\",\"GuestPanic\",\"IntegerOverflow\",\"InvalidPromiseIndex\",\"CannotAppendActionToJointPromise\",\"CannotReturnJointPromise\",\"InvalidPromiseResultIndex\",\"InvalidRegisterId\",\"IteratorWasInvalidated\",\"MemoryAccessViolation\",\"InvalidReceiptIndex\",\"InvalidIteratorIndex\",\"InvalidAccountId\",\"InvalidMethodName\",\"InvalidPublicKey\",\"ProhibitedInView\",\"NumberOfLogsExceeded\",\"KeyLengthExceeded\",\"ValueLengthExceeded\",\"TotalLogLengthExceeded\",\"NumberPromisesExceeded\",\"NumberInputDataDependenciesExceeded\",\"ReturnedValueLengthExceeded\",\"ContractSizeExceeded\",\"Deprecated\"],\"props\":{}},\"IllegalArithmetic\":{\"name\":\"IllegalArithmetic\",\"subtypes\":[],\"props\":{}},\"IncorrectCallIndirectSignature\":{\"name\":\"IncorrectCallIndirectSignature\",\"subtypes\":[],\"props\":{}},\"Instantiate\":{\"name\":\"Instantiate\",\"subtypes\":[],\"props\":{}},\"IntegerOverflow\":{\"name\":\"IntegerOverflow\",\"subtypes\":[],\"props\":{}},\"InternalMemoryDeclared\":{\"name\":\"InternalMemoryDeclared\",\"subtypes\":[],\"props\":{}},\"InvalidAccountId\":{\"name\":\"InvalidAccountId\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"InvalidIteratorIndex\":{\"name\":\"InvalidIteratorIndex\",\"subtypes\":[],\"props\":{\"iterator_index\":\"\"}},\"InvalidMethodName\":{\"name\":\"InvalidMethodName\",\"subtypes\":[],\"props\":{}},\"InvalidPromiseIndex\":{\"name\":\"InvalidPromiseIndex\",\"subtypes\":[],\"props\":{\"promise_idx\":\"\"}},\"InvalidPromiseResultIndex\":{\"name\":\"InvalidPromiseResultIndex\",\"subtypes\":[],\"props\":{\"result_idx\":\"\"}},\"InvalidPublicKey\":{\"name\":\"InvalidPublicKey\",\"subtypes\":[],\"props\":{}},\"InvalidReceiptIndex\":{\"name\":\"InvalidReceiptIndex\",\"subtypes\":[],\"props\":{\"receipt_index\":\"\"}},\"InvalidRegisterId\":{\"name\":\"InvalidRegisterId\",\"subtypes\":[],\"props\":{\"register_id\":\"\"}},\"IteratorWasInvalidated\":{\"name\":\"IteratorWasInvalidated\",\"subtypes\":[],\"props\":{\"iterator_index\":\"\"}},\"KeyLengthExceeded\":{\"name\":\"KeyLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"LinkError\":{\"name\":\"LinkError\",\"subtypes\":[],\"props\":{\"msg\":\"\"}},\"Memory\":{\"name\":\"Memory\",\"subtypes\":[],\"props\":{}},\"MemoryAccessViolation\":{\"name\":\"MemoryAccessViolation\",\"subtypes\":[],\"props\":{}},\"MemoryOutOfBounds\":{\"name\":\"MemoryOutOfBounds\",\"subtypes\":[],\"props\":{}},\"MethodEmptyName\":{\"name\":\"MethodEmptyName\",\"subtypes\":[],\"props\":{}},\"MethodInvalidSignature\":{\"name\":\"MethodInvalidSignature\",\"subtypes\":[],\"props\":{}},\"MethodNotFound\":{\"name\":\"MethodNotFound\",\"subtypes\":[],\"props\":{}},\"MethodResolveError\":{\"name\":\"MethodResolveError\",\"subtypes\":[\"MethodEmptyName\",\"MethodUTF8Error\",\"MethodNotFound\",\"MethodInvalidSignature\"],\"props\":{}},\"MethodUTF8Error\":{\"name\":\"MethodUTF8Error\",\"subtypes\":[],\"props\":{}},\"MisalignedAtomicAccess\":{\"name\":\"MisalignedAtomicAccess\",\"subtypes\":[],\"props\":{}},\"NumberInputDataDependenciesExceeded\":{\"name\":\"NumberInputDataDependenciesExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"number_of_input_data_dependencies\":\"\"}},\"NumberOfLogsExceeded\":{\"name\":\"NumberOfLogsExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\"}},\"NumberPromisesExceeded\":{\"name\":\"NumberPromisesExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"number_of_promises\":\"\"}},\"PrepareError\":{\"name\":\"PrepareError\",\"subtypes\":[\"Serialization\",\"Deserialization\",\"InternalMemoryDeclared\",\"GasInstrumentation\",\"StackHeightInstrumentation\",\"Instantiate\",\"Memory\"],\"props\":{}},\"ProhibitedInView\":{\"name\":\"ProhibitedInView\",\"subtypes\":[],\"props\":{\"method_name\":\"\"}},\"ReadError\":{\"name\":\"ReadError\",\"subtypes\":[],\"props\":{}},\"ReturnedValueLengthExceeded\":{\"name\":\"ReturnedValueLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"Serialization\":{\"name\":\"Serialization\",\"subtypes\":[],\"props\":{}},\"SerializationError\":{\"name\":\"SerializationError\",\"subtypes\":[],\"props\":{\"hash\":\"\"}},\"StackHeightInstrumentation\":{\"name\":\"StackHeightInstrumentation\",\"subtypes\":[],\"props\":{}},\"StackOverflow\":{\"name\":\"StackOverflow\",\"subtypes\":[],\"props\":{}},\"TotalLogLengthExceeded\":{\"name\":\"TotalLogLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"Unreachable\":{\"name\":\"Unreachable\",\"subtypes\":[],\"props\":{}},\"ValueLengthExceeded\":{\"name\":\"ValueLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"WasmTrap\":{\"name\":\"WasmTrap\",\"subtypes\":[\"Unreachable\",\"IncorrectCallIndirectSignature\",\"MemoryOutOfBounds\",\"CallIndirectOOB\",\"IllegalArithmetic\",\"MisalignedAtomicAccess\",\"BreakpointTrap\",\"StackOverflow\",\"GenericTrap\"],\"props\":{}},\"WasmUnknownError\":{\"name\":\"WasmUnknownError\",\"subtypes\":[],\"props\":{}},\"WasmerCompileError\":{\"name\":\"WasmerCompileError\",\"subtypes\":[],\"props\":{\"msg\":\"\"}},\"WriteError\":{\"name\":\"WriteError\",\"subtypes\":[],\"props\":{}},\"AccessKeyNotFound\":{\"name\":\"AccessKeyNotFound\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"public_key\":\"\"}},\"AccountAlreadyExists\":{\"name\":\"AccountAlreadyExists\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"AccountDoesNotExist\":{\"name\":\"AccountDoesNotExist\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"ActionError\":{\"name\":\"ActionError\",\"subtypes\":[\"AccountAlreadyExists\",\"AccountDoesNotExist\",\"CreateAccountOnlyByRegistrar\",\"CreateAccountNotAllowed\",\"ActorNoPermission\",\"DeleteKeyDoesNotExist\",\"AddKeyAlreadyExists\",\"DeleteAccountStaking\",\"LackBalanceForState\",\"TriesToUnstake\",\"TriesToStake\",\"InsufficientStake\",\"FunctionCallError\",\"NewReceiptValidationError\",\"OnlyImplicitAccountCreationAllowed\"],\"props\":{\"index\":\"\"}},\"ActionsValidationError\":{\"name\":\"ActionsValidationError\",\"subtypes\":[\"DeleteActionMustBeFinal\",\"TotalPrepaidGasExceeded\",\"TotalNumberOfActionsExceeded\",\"AddKeyMethodNamesNumberOfBytesExceeded\",\"AddKeyMethodNameLengthExceeded\",\"IntegerOverflow\",\"InvalidAccountId\",\"ContractSizeExceeded\",\"FunctionCallMethodNameLengthExceeded\",\"FunctionCallArgumentsLengthExceeded\",\"UnsuitableStakingKey\",\"FunctionCallZeroAttachedGas\"],\"props\":{}},\"ActorNoPermission\":{\"name\":\"ActorNoPermission\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"actor_id\":\"\"}},\"AddKeyAlreadyExists\":{\"name\":\"AddKeyAlreadyExists\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"public_key\":\"\"}},\"AddKeyMethodNameLengthExceeded\":{\"name\":\"AddKeyMethodNameLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"AddKeyMethodNamesNumberOfBytesExceeded\":{\"name\":\"AddKeyMethodNamesNumberOfBytesExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"total_number_of_bytes\":\"\"}},\"BalanceMismatchError\":{\"name\":\"BalanceMismatchError\",\"subtypes\":[],\"props\":{\"final_accounts_balance\":\"\",\"final_postponed_receipts_balance\":\"\",\"incoming_receipts_balance\":\"\",\"incoming_validator_rewards\":\"\",\"initial_accounts_balance\":\"\",\"initial_postponed_receipts_balance\":\"\",\"new_delayed_receipts_balance\":\"\",\"other_burnt_amount\":\"\",\"outgoing_receipts_balance\":\"\",\"processed_delayed_receipts_balance\":\"\",\"slashed_burnt_amount\":\"\",\"tx_burnt_amount\":\"\"}},\"CostOverflow\":{\"name\":\"CostOverflow\",\"subtypes\":[],\"props\":{}},\"CreateAccountNotAllowed\":{\"name\":\"CreateAccountNotAllowed\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"predecessor_id\":\"\"}},\"CreateAccountOnlyByRegistrar\":{\"name\":\"CreateAccountOnlyByRegistrar\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"predecessor_id\":\"\",\"registrar_account_id\":\"\"}},\"DeleteAccountStaking\":{\"name\":\"DeleteAccountStaking\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"DeleteActionMustBeFinal\":{\"name\":\"DeleteActionMustBeFinal\",\"subtypes\":[],\"props\":{}},\"DeleteKeyDoesNotExist\":{\"name\":\"DeleteKeyDoesNotExist\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"public_key\":\"\"}},\"DepositWithFunctionCall\":{\"name\":\"DepositWithFunctionCall\",\"subtypes\":[],\"props\":{}},\"Expired\":{\"name\":\"Expired\",\"subtypes\":[],\"props\":{}},\"FunctionCallArgumentsLengthExceeded\":{\"name\":\"FunctionCallArgumentsLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"FunctionCallMethodNameLengthExceeded\":{\"name\":\"FunctionCallMethodNameLengthExceeded\",\"subtypes\":[],\"props\":{\"length\":\"\",\"limit\":\"\"}},\"FunctionCallZeroAttachedGas\":{\"name\":\"FunctionCallZeroAttachedGas\",\"subtypes\":[],\"props\":{}},\"InsufficientStake\":{\"name\":\"InsufficientStake\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"minimum_stake\":\"\",\"stake\":\"\"}},\"InvalidAccessKeyError\":{\"name\":\"InvalidAccessKeyError\",\"subtypes\":[\"AccessKeyNotFound\",\"ReceiverMismatch\",\"MethodNameMismatch\",\"RequiresFullAccess\",\"NotEnoughAllowance\",\"DepositWithFunctionCall\"],\"props\":{}},\"InvalidChain\":{\"name\":\"InvalidChain\",\"subtypes\":[],\"props\":{}},\"InvalidDataReceiverId\":{\"name\":\"InvalidDataReceiverId\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"InvalidNonce\":{\"name\":\"InvalidNonce\",\"subtypes\":[],\"props\":{\"ak_nonce\":\"\",\"tx_nonce\":\"\"}},\"InvalidPredecessorId\":{\"name\":\"InvalidPredecessorId\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"InvalidReceiverId\":{\"name\":\"InvalidReceiverId\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"InvalidSignature\":{\"name\":\"InvalidSignature\",\"subtypes\":[],\"props\":{}},\"InvalidSignerId\":{\"name\":\"InvalidSignerId\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"InvalidTxError\":{\"name\":\"InvalidTxError\",\"subtypes\":[\"InvalidAccessKeyError\",\"InvalidSignerId\",\"SignerDoesNotExist\",\"InvalidNonce\",\"InvalidReceiverId\",\"InvalidSignature\",\"NotEnoughBalance\",\"LackBalanceForState\",\"CostOverflow\",\"InvalidChain\",\"Expired\",\"ActionsValidation\"],\"props\":{}},\"LackBalanceForState\":{\"name\":\"LackBalanceForState\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"amount\":\"\"}},\"MethodNameMismatch\":{\"name\":\"MethodNameMismatch\",\"subtypes\":[],\"props\":{\"method_name\":\"\"}},\"NotEnoughAllowance\":{\"name\":\"NotEnoughAllowance\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"allowance\":\"\",\"cost\":\"\",\"public_key\":\"\"}},\"NotEnoughBalance\":{\"name\":\"NotEnoughBalance\",\"subtypes\":[],\"props\":{\"balance\":\"\",\"cost\":\"\",\"signer_id\":\"\"}},\"OnlyImplicitAccountCreationAllowed\":{\"name\":\"OnlyImplicitAccountCreationAllowed\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"ReceiptValidationError\":{\"name\":\"ReceiptValidationError\",\"subtypes\":[\"InvalidPredecessorId\",\"InvalidReceiverId\",\"InvalidSignerId\",\"InvalidDataReceiverId\",\"ReturnedValueLengthExceeded\",\"NumberInputDataDependenciesExceeded\",\"ActionsValidation\"],\"props\":{}},\"ReceiverMismatch\":{\"name\":\"ReceiverMismatch\",\"subtypes\":[],\"props\":{\"ak_receiver\":\"\",\"tx_receiver\":\"\"}},\"RequiresFullAccess\":{\"name\":\"RequiresFullAccess\",\"subtypes\":[],\"props\":{}},\"SignerDoesNotExist\":{\"name\":\"SignerDoesNotExist\",\"subtypes\":[],\"props\":{\"signer_id\":\"\"}},\"TotalNumberOfActionsExceeded\":{\"name\":\"TotalNumberOfActionsExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"total_number_of_actions\":\"\"}},\"TotalPrepaidGasExceeded\":{\"name\":\"TotalPrepaidGasExceeded\",\"subtypes\":[],\"props\":{\"limit\":\"\",\"total_prepaid_gas\":\"\"}},\"TriesToStake\":{\"name\":\"TriesToStake\",\"subtypes\":[],\"props\":{\"account_id\":\"\",\"balance\":\"\",\"locked\":\"\",\"stake\":\"\"}},\"TriesToUnstake\":{\"name\":\"TriesToUnstake\",\"subtypes\":[],\"props\":{\"account_id\":\"\"}},\"TxExecutionError\":{\"name\":\"TxExecutionError\",\"subtypes\":[\"ActionError\",\"InvalidTxError\"],\"props\":{}},\"UnsuitableStakingKey\":{\"name\":\"UnsuitableStakingKey\",\"subtypes\":[],\"props\":{\"public_key\":\"\"}},\"Closed\":{\"name\":\"Closed\",\"subtypes\":[],\"props\":{}},\"InternalError\":{\"name\":\"InternalError\",\"subtypes\":[],\"props\":{}},\"ServerError\":{\"name\":\"ServerError\",\"subtypes\":[\"TxExecutionError\",\"Timeout\",\"Closed\",\"InternalError\"],\"props\":{}},\"Timeout\":{\"name\":\"Timeout\",\"subtypes\":[],\"props\":{}}}}");

},{}],"1Z5Hy":[function(require,module,exports) {
module.exports = JSON.parse("{\"GasLimitExceeded\":\"Exceeded the maximum amount of gas allowed to burn per contract\",\"MethodEmptyName\":\"Method name is empty\",\"WasmerCompileError\":\"Wasmer compilation error: {{msg}}\",\"GuestPanic\":\"Smart contract panicked: {{panic_msg}}\",\"Memory\":\"Error creating Wasm memory\",\"GasExceeded\":\"Exceeded the prepaid gas\",\"MethodUTF8Error\":\"Method name is not valid UTF8 string\",\"BadUTF16\":\"String encoding is bad UTF-16 sequence\",\"WasmTrap\":\"WebAssembly trap: {{msg}}\",\"GasInstrumentation\":\"Gas instrumentation failed or contract has denied instructions.\",\"InvalidPromiseIndex\":\"{{promise_idx}} does not correspond to existing promises\",\"InvalidPromiseResultIndex\":\"Accessed invalid promise result index: {{result_idx}}\",\"Deserialization\":\"Error happened while deserializing the module\",\"MethodNotFound\":\"Contract method is not found\",\"InvalidRegisterId\":\"Accessed invalid register id: {{register_id}}\",\"InvalidReceiptIndex\":\"VM Logic returned an invalid receipt index: {{receipt_index}}\",\"EmptyMethodName\":\"Method name is empty in contract call\",\"CannotReturnJointPromise\":\"Returning joint promise is currently prohibited\",\"StackHeightInstrumentation\":\"Stack instrumentation failed\",\"CodeDoesNotExist\":\"Cannot find contract code for account {{account_id}}\",\"MethodInvalidSignature\":\"Invalid method signature\",\"IntegerOverflow\":\"Integer overflow happened during contract execution\",\"MemoryAccessViolation\":\"MemoryAccessViolation\",\"InvalidIteratorIndex\":\"Iterator index {{iterator_index}} does not exist\",\"IteratorWasInvalidated\":\"Iterator {{iterator_index}} was invalidated after its creation by performing a mutable operation on trie\",\"InvalidAccountId\":\"VM Logic returned an invalid account id\",\"Serialization\":\"Error happened while serializing the module\",\"CannotAppendActionToJointPromise\":\"Actions can only be appended to non-joint promise.\",\"InternalMemoryDeclared\":\"Internal memory declaration has been found in the module\",\"Instantiate\":\"Error happened during instantiation\",\"ProhibitedInView\":\"{{method_name}} is not allowed in view calls\",\"InvalidMethodName\":\"VM Logic returned an invalid method name\",\"BadUTF8\":\"String encoding is bad UTF-8 sequence\",\"BalanceExceeded\":\"Exceeded the account balance\",\"LinkError\":\"Wasm contract link error: {{msg}}\",\"InvalidPublicKey\":\"VM Logic provided an invalid public key\",\"ActorNoPermission\":\"Actor {{actor_id}} doesn't have permission to account {{account_id}} to complete the action\",\"LackBalanceForState\":\"The account {{account_id}} wouldn't have enough balance to cover storage, required to have {{amount}} yoctoNEAR more\",\"ReceiverMismatch\":\"Wrong AccessKey used for transaction: transaction is sent to receiver_id={{tx_receiver}}, but is signed with function call access key that restricted to only use with receiver_id={{ak_receiver}}. Either change receiver_id in your transaction or switch to use a FullAccessKey.\",\"CostOverflow\":\"Transaction gas or balance cost is too high\",\"InvalidSignature\":\"Transaction is not signed with the given public key\",\"AccessKeyNotFound\":\"Signer \\\"{{account_id}}\\\" doesn't have access key with the given public_key {{public_key}}\",\"NotEnoughBalance\":\"Sender {{signer_id}} does not have enough balance {{#formatNear}}{{balance}}{{/formatNear}} for operation costing {{#formatNear}}{{cost}}{{/formatNear}}\",\"NotEnoughAllowance\":\"Access Key {account_id}:{public_key} does not have enough balance {{#formatNear}}{{allowance}}{{/formatNear}} for transaction costing {{#formatNear}}{{cost}}{{/formatNear}}\",\"Expired\":\"Transaction has expired\",\"DeleteAccountStaking\":\"Account {{account_id}} is staking and can not be deleted\",\"SignerDoesNotExist\":\"Signer {{signer_id}} does not exist\",\"TriesToStake\":\"Account {{account_id}} tried to stake {{#formatNear}}{{stake}}{{/formatNear}}, but has staked {{#formatNear}}{{locked}}{{/formatNear}} and only has {{#formatNear}}{{balance}}{{/formatNear}}\",\"AddKeyAlreadyExists\":\"The public key {{public_key}} is already used for an existing access key\",\"InvalidSigner\":\"Invalid signer account ID {{signer_id}} according to requirements\",\"CreateAccountNotAllowed\":\"The new account_id {{account_id}} can't be created by {{predecessor_id}}\",\"RequiresFullAccess\":\"The transaction contains more then one action, but it was signed with an access key which allows transaction to apply only one specific action. To apply more then one actions TX must be signed with a full access key\",\"TriesToUnstake\":\"Account {{account_id}} is not yet staked, but tried to unstake\",\"InvalidNonce\":\"Transaction nonce {{tx_nonce}} must be larger than nonce of the used access key {{ak_nonce}}\",\"AccountAlreadyExists\":\"Can't create a new account {{account_id}}, because it already exists\",\"InvalidChain\":\"Transaction parent block hash doesn't belong to the current chain\",\"AccountDoesNotExist\":\"Can't complete the action because account {{account_id}} doesn't exist\",\"MethodNameMismatch\":\"Transaction method name {{method_name}} isn't allowed by the access key\",\"DeleteAccountHasRent\":\"Account {{account_id}} can't be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover the rent\",\"DeleteAccountHasEnoughBalance\":\"Account {{account_id}} can't be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover it's storage\",\"InvalidReceiver\":\"Invalid receiver account ID {{receiver_id}} according to requirements\",\"DeleteKeyDoesNotExist\":\"Account {{account_id}} tries to remove an access key that doesn't exist\",\"Timeout\":\"Timeout exceeded\",\"Closed\":\"Connection closed\"}");

},{}],"jOCMH":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logWarning = exports.rpc_errors = exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.format = exports.enums = exports.web = exports.serialize = exports.key_pair = void 0;
const key_pair = __importStar(require("./key_pair"));
exports.key_pair = key_pair;
const serialize = __importStar(require("./serialize"));
exports.serialize = serialize;
const web = __importStar(require("./web"));
exports.web = web;
const enums = __importStar(require("./enums"));
exports.enums = enums;
const format = __importStar(require("./format"));
exports.format = format;
const rpc_errors = __importStar(require("./rpc_errors"));
exports.rpc_errors = rpc_errors;
const key_pair_1 = require("./key_pair");
Object.defineProperty(exports, "PublicKey", {
    enumerable: true,
    get: function() {
        return key_pair_1.PublicKey;
    }
});
Object.defineProperty(exports, "KeyPair", {
    enumerable: true,
    get: function() {
        return key_pair_1.KeyPair;
    }
});
Object.defineProperty(exports, "KeyPairEd25519", {
    enumerable: true,
    get: function() {
        return key_pair_1.KeyPairEd25519;
    }
});
const errors_1 = require("./errors");
Object.defineProperty(exports, "logWarning", {
    enumerable: true,
    get: function() {
        return errors_1.logWarning;
    }
});

},{"./key_pair":"kBQFP","./serialize":"dUoM9","./web":"iSqiB","./enums":"kjmPo","./format":"16c5X","./rpc_errors":"1TB1L","./errors":"btMYy"}],"16c5X":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseNearAmount = exports.formatNearAmount = exports.NEAR_NOMINATION = exports.NEAR_NOMINATION_EXP = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */ exports.NEAR_NOMINATION_EXP = 24;
/**
 * Number of indivisible units in one NEAR. Derived from {@link NEAR_NOMINATION_EXP}.
 */ exports.NEAR_NOMINATION = new bn_js_1.default('10', 10).pow(new bn_js_1.default(exports.NEAR_NOMINATION_EXP, 10));
// Pre-calculate offests used for rounding to different number of digits
const ROUNDING_OFFSETS = [];
const BN10 = new bn_js_1.default(10);
for(let i = 0, offset = new bn_js_1.default(5); i < exports.NEAR_NOMINATION_EXP; i++, offset = offset.mul(BN10))ROUNDING_OFFSETS[i] = offset;
/**
 * Convert account balance value from internal indivisible units to NEAR. 1 NEAR is defined by {@link NEAR_NOMINATION}.
 * Effectively this divides given amount by {@link NEAR_NOMINATION}.
 *
 * @param balance decimal string representing balance in smallest non-divisible NEAR units (as specified by {@link NEAR_NOMINATION})
 * @param fracDigits number of fractional digits to preserve in formatted string. Balance is rounded to match given number of digits.
 * @returns Value in Ⓝ
 */ function formatNearAmount(balance, fracDigits = exports.NEAR_NOMINATION_EXP) {
    const balanceBN = new bn_js_1.default(balance, 10);
    if (fracDigits !== exports.NEAR_NOMINATION_EXP) {
        // Adjust balance for rounding at given number of digits
        const roundingExp = exports.NEAR_NOMINATION_EXP - fracDigits - 1;
        if (roundingExp > 0) balanceBN.iadd(ROUNDING_OFFSETS[roundingExp]);
    }
    balance = balanceBN.toString();
    const wholeStr = balance.substring(0, balance.length - exports.NEAR_NOMINATION_EXP) || '0';
    const fractionStr = balance.substring(balance.length - exports.NEAR_NOMINATION_EXP).padStart(exports.NEAR_NOMINATION_EXP, '0').substring(0, fracDigits);
    return trimTrailingZeroes(`${formatWithCommas(wholeStr)}.${fractionStr}`);
}
exports.formatNearAmount = formatNearAmount;
/**
 * Convert human readable NEAR amount to internal indivisible units.
 * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
 *
 * @param amt decimal string (potentially fractional) denominated in NEAR.
 * @returns The parsed yoctoⓃ amount or null if no amount was passed in
 */ function parseNearAmount(amt) {
    if (!amt) return null;
    amt = cleanupAmount(amt);
    const split = amt.split('.');
    const wholePart = split[0];
    const fracPart = split[1] || '';
    if (split.length > 2 || fracPart.length > exports.NEAR_NOMINATION_EXP) throw new Error(`Cannot parse '${amt}' as NEAR amount`);
    return trimLeadingZeroes(wholePart + fracPart.padEnd(exports.NEAR_NOMINATION_EXP, '0'));
}
exports.parseNearAmount = parseNearAmount;
/**
 * Removes commas from the input
 * @param amount A value or amount that may contain commas
 * @returns string The cleaned value
 */ function cleanupAmount(amount) {
    return amount.replace(/,/g, '').trim();
}
/**
 * Removes .000… from an input
 * @param value A value that may contain trailing zeroes in the decimals place
 * @returns string The value without the trailing zeros
 */ function trimTrailingZeroes(value) {
    return value.replace(/\.?0*$/, '');
}
/**
 * Removes leading zeroes from an input
 * @param value A value that may contain leading zeroes
 * @returns string The value without the leading zeroes
 */ function trimLeadingZeroes(value) {
    value = value.replace(/^0+/, '');
    if (value === '') return '0';
    return value;
}
/**
 * Returns a human-readable value with commas
 * @param value A value that may not contain commas
 * @returns string A value with commas
 */ function formatWithCommas(value) {
    const pattern = /(-?\d+)(\d{3})/;
    while(pattern.test(value))value = value.replace(pattern, '$1,$2');
    return value;
}

},{"bn.js":"VopIn"}],"jJQ5a":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signTransaction = exports.createTransaction = exports.SCHEMA = exports.Action = exports.SignedTransaction = exports.Transaction = exports.Signature = exports.deleteAccount = exports.deleteKey = exports.addKey = exports.stake = exports.transfer = exports.functionCall = exports.stringifyJsonOrBytes = exports.deployContract = exports.createAccount = exports.DeleteAccount = exports.DeleteKey = exports.AddKey = exports.Stake = exports.Transfer = exports.FunctionCall = exports.DeployContract = exports.CreateAccount = exports.IAction = exports.functionCallAccessKey = exports.fullAccessKey = exports.AccessKey = exports.AccessKeyPermission = exports.FullAccessPermission = exports.FunctionCallPermission = void 0;
const js_sha256_1 = __importDefault(require("js-sha256"));
const enums_1 = require("./utils/enums");
const borsh_1 = require("borsh");
const key_pair_1 = require("./utils/key_pair");
class FunctionCallPermission extends enums_1.Assignable {
}
exports.FunctionCallPermission = FunctionCallPermission;
class FullAccessPermission extends enums_1.Assignable {
}
exports.FullAccessPermission = FullAccessPermission;
class AccessKeyPermission extends enums_1.Enum {
}
exports.AccessKeyPermission = AccessKeyPermission;
class AccessKey extends enums_1.Assignable {
}
exports.AccessKey = AccessKey;
function fullAccessKey() {
    return new AccessKey({
        nonce: 0,
        permission: new AccessKeyPermission({
            fullAccess: new FullAccessPermission({})
        })
    });
}
exports.fullAccessKey = fullAccessKey;
function functionCallAccessKey(receiverId, methodNames, allowance) {
    return new AccessKey({
        nonce: 0,
        permission: new AccessKeyPermission({
            functionCall: new FunctionCallPermission({
                receiverId,
                allowance,
                methodNames
            })
        })
    });
}
exports.functionCallAccessKey = functionCallAccessKey;
class IAction extends enums_1.Assignable {
}
exports.IAction = IAction;
class CreateAccount extends IAction {
}
exports.CreateAccount = CreateAccount;
class DeployContract extends IAction {
}
exports.DeployContract = DeployContract;
class FunctionCall extends IAction {
}
exports.FunctionCall = FunctionCall;
class Transfer extends IAction {
}
exports.Transfer = Transfer;
class Stake extends IAction {
}
exports.Stake = Stake;
class AddKey extends IAction {
}
exports.AddKey = AddKey;
class DeleteKey extends IAction {
}
exports.DeleteKey = DeleteKey;
class DeleteAccount extends IAction {
}
exports.DeleteAccount = DeleteAccount;
function createAccount() {
    return new Action({
        createAccount: new CreateAccount({})
    });
}
exports.createAccount = createAccount;
function deployContract(code) {
    return new Action({
        deployContract: new DeployContract({
            code
        })
    });
}
exports.deployContract = deployContract;
function stringifyJsonOrBytes(args) {
    const isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;
    const serializedArgs = isUint8Array ? args : Buffer.from(JSON.stringify(args));
    return serializedArgs;
}
exports.stringifyJsonOrBytes = stringifyJsonOrBytes;
/**
 * Constructs {@link Action} instance representing contract method call.
 *
 * @param methodName the name of the method to call
 * @param args arguments to pass to method. Can be either plain JS object which gets serialized as JSON automatically
 *  or `Uint8Array` instance which represents bytes passed as is.
 * @param gas max amount of gas that method call can use
 * @param deposit amount of NEAR (in yoctoNEAR) to send together with the call
 * @param stringify Convert input arguments into bytes array.
 */ function functionCall(methodName, args, gas, deposit, stringify = stringifyJsonOrBytes) {
    return new Action({
        functionCall: new FunctionCall({
            methodName,
            args: stringify(args),
            gas,
            deposit
        })
    });
}
exports.functionCall = functionCall;
function transfer(deposit) {
    return new Action({
        transfer: new Transfer({
            deposit
        })
    });
}
exports.transfer = transfer;
function stake(stake1, publicKey) {
    return new Action({
        stake: new Stake({
            stake: stake1,
            publicKey
        })
    });
}
exports.stake = stake;
function addKey(publicKey, accessKey) {
    return new Action({
        addKey: new AddKey({
            publicKey,
            accessKey
        })
    });
}
exports.addKey = addKey;
function deleteKey(publicKey) {
    return new Action({
        deleteKey: new DeleteKey({
            publicKey
        })
    });
}
exports.deleteKey = deleteKey;
function deleteAccount(beneficiaryId) {
    return new Action({
        deleteAccount: new DeleteAccount({
            beneficiaryId
        })
    });
}
exports.deleteAccount = deleteAccount;
class Signature extends enums_1.Assignable {
}
exports.Signature = Signature;
class Transaction extends enums_1.Assignable {
    encode() {
        return borsh_1.serialize(exports.SCHEMA, this);
    }
    static decode(bytes) {
        return borsh_1.deserialize(exports.SCHEMA, Transaction, bytes);
    }
}
exports.Transaction = Transaction;
class SignedTransaction extends enums_1.Assignable {
    encode() {
        return borsh_1.serialize(exports.SCHEMA, this);
    }
    static decode(bytes) {
        return borsh_1.deserialize(exports.SCHEMA, SignedTransaction, bytes);
    }
}
exports.SignedTransaction = SignedTransaction;
/**
 * Contains a list of the valid transaction Actions available with this API
 * @see {@link https://nomicon.io/RuntimeSpec/Actions.html | Actions Spec}
 */ class Action extends enums_1.Enum {
}
exports.Action = Action;
exports.SCHEMA = new Map([
    [
        Signature,
        {
            kind: 'struct',
            fields: [
                [
                    'keyType',
                    'u8'
                ],
                [
                    'data',
                    [
                        64
                    ]
                ]
            ]
        }
    ],
    [
        SignedTransaction,
        {
            kind: 'struct',
            fields: [
                [
                    'transaction',
                    Transaction
                ],
                [
                    'signature',
                    Signature
                ]
            ]
        }
    ],
    [
        Transaction,
        {
            kind: 'struct',
            fields: [
                [
                    'signerId',
                    'string'
                ],
                [
                    'publicKey',
                    key_pair_1.PublicKey
                ],
                [
                    'nonce',
                    'u64'
                ],
                [
                    'receiverId',
                    'string'
                ],
                [
                    'blockHash',
                    [
                        32
                    ]
                ],
                [
                    'actions',
                    [
                        Action
                    ]
                ]
            ]
        }
    ],
    [
        key_pair_1.PublicKey,
        {
            kind: 'struct',
            fields: [
                [
                    'keyType',
                    'u8'
                ],
                [
                    'data',
                    [
                        32
                    ]
                ]
            ]
        }
    ],
    [
        AccessKey,
        {
            kind: 'struct',
            fields: [
                [
                    'nonce',
                    'u64'
                ],
                [
                    'permission',
                    AccessKeyPermission
                ], 
            ]
        }
    ],
    [
        AccessKeyPermission,
        {
            kind: 'enum',
            field: 'enum',
            values: [
                [
                    'functionCall',
                    FunctionCallPermission
                ],
                [
                    'fullAccess',
                    FullAccessPermission
                ], 
            ]
        }
    ],
    [
        FunctionCallPermission,
        {
            kind: 'struct',
            fields: [
                [
                    'allowance',
                    {
                        kind: 'option',
                        type: 'u128'
                    }
                ],
                [
                    'receiverId',
                    'string'
                ],
                [
                    'methodNames',
                    [
                        'string'
                    ]
                ], 
            ]
        }
    ],
    [
        FullAccessPermission,
        {
            kind: 'struct',
            fields: []
        }
    ],
    [
        Action,
        {
            kind: 'enum',
            field: 'enum',
            values: [
                [
                    'createAccount',
                    CreateAccount
                ],
                [
                    'deployContract',
                    DeployContract
                ],
                [
                    'functionCall',
                    FunctionCall
                ],
                [
                    'transfer',
                    Transfer
                ],
                [
                    'stake',
                    Stake
                ],
                [
                    'addKey',
                    AddKey
                ],
                [
                    'deleteKey',
                    DeleteKey
                ],
                [
                    'deleteAccount',
                    DeleteAccount
                ], 
            ]
        }
    ],
    [
        CreateAccount,
        {
            kind: 'struct',
            fields: []
        }
    ],
    [
        DeployContract,
        {
            kind: 'struct',
            fields: [
                [
                    'code',
                    [
                        'u8'
                    ]
                ]
            ]
        }
    ],
    [
        FunctionCall,
        {
            kind: 'struct',
            fields: [
                [
                    'methodName',
                    'string'
                ],
                [
                    'args',
                    [
                        'u8'
                    ]
                ],
                [
                    'gas',
                    'u64'
                ],
                [
                    'deposit',
                    'u128'
                ]
            ]
        }
    ],
    [
        Transfer,
        {
            kind: 'struct',
            fields: [
                [
                    'deposit',
                    'u128'
                ]
            ]
        }
    ],
    [
        Stake,
        {
            kind: 'struct',
            fields: [
                [
                    'stake',
                    'u128'
                ],
                [
                    'publicKey',
                    key_pair_1.PublicKey
                ]
            ]
        }
    ],
    [
        AddKey,
        {
            kind: 'struct',
            fields: [
                [
                    'publicKey',
                    key_pair_1.PublicKey
                ],
                [
                    'accessKey',
                    AccessKey
                ]
            ]
        }
    ],
    [
        DeleteKey,
        {
            kind: 'struct',
            fields: [
                [
                    'publicKey',
                    key_pair_1.PublicKey
                ]
            ]
        }
    ],
    [
        DeleteAccount,
        {
            kind: 'struct',
            fields: [
                [
                    'beneficiaryId',
                    'string'
                ]
            ]
        }
    ], 
]);
function createTransaction(signerId, publicKey, receiverId, nonce, actions, blockHash) {
    return new Transaction({
        signerId,
        publicKey,
        nonce,
        receiverId,
        actions,
        blockHash
    });
}
exports.createTransaction = createTransaction;
/**
 * Signs a given transaction from an account with given keys, applied to the given network
 * @param transaction The Transaction object to sign
 * @param signer The {Signer} object that assists with signing keys
 * @param accountId The human-readable NEAR account name
 * @param networkId The targeted network. (ex. default, betanet, etc…)
 */ async function signTransactionObject(transaction, signer, accountId, networkId) {
    const message = borsh_1.serialize(exports.SCHEMA, transaction);
    const hash = new Uint8Array(js_sha256_1.default.sha256.array(message));
    const signature = await signer.signMessage(message, accountId, networkId);
    const signedTx = new SignedTransaction({
        transaction,
        signature: new Signature({
            keyType: transaction.publicKey.keyType,
            data: signature.signature
        })
    });
    return [
        hash,
        signedTx
    ];
}
async function signTransaction(...args) {
    if (args[0].constructor === Transaction) {
        const [transaction, signer, accountId, networkId] = args;
        return signTransactionObject(transaction, signer, accountId, networkId);
    } else {
        const [receiverId, nonce, actions, blockHash, signer, accountId, networkId] = args;
        const publicKey = await signer.getPublicKey(accountId, networkId);
        const transaction = createTransaction(accountId, publicKey, receiverId, nonce, actions, blockHash);
        return signTransactionObject(transaction, signer, accountId, networkId);
    }
}
exports.signTransaction = signTransaction;

},{"buffer":"fCgem","js-sha256":"ahVaM","./utils/enums":"kjmPo","borsh":"4JCmN","./utils/key_pair":"kBQFP"}],"ahVaM":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    var ERROR = 'input is invalid type';
    var WINDOW = typeof window === 'object';
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) WINDOW = false;
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) root = global;
    else if (WEB_WORKER) root = self;
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && true && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var EXTRA = [
        -2147483648,
        8388608,
        32768,
        128
    ];
    var SHIFT = [
        24,
        16,
        8,
        0
    ];
    var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    var OUTPUT_TYPES = [
        'hex',
        'array',
        'digest',
        'arrayBuffer'
    ];
    var blocks1 = [];
    if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) ArrayBuffer.isView = function(obj) {
        return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
    var createOutputMethod = function(outputType, is224) {
        return function(message) {
            return new Sha256(is224, true).update(message)[outputType]();
        };
    };
    var createMethod = function(is224) {
        var method = createOutputMethod('hex', is224);
        if (NODE_JS) method = nodeWrap(method, is224);
        method.create = function() {
            return new Sha256(is224);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, is224);
        }
        return method;
    };
    var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? 'sha224' : 'sha256';
        var nodeMethod = function(message) {
            if (typeof message === 'string') return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
            else {
                if (message === null || message === undefined) throw new Error(ERROR);
                else if (message.constructor === ArrayBuffer) message = new Uint8Array(message);
            }
            if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
            else return method(message);
        };
        return nodeMethod;
    };
    var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message) {
            return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
    };
    var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod('hex', is224);
        method.create = function(key) {
            return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
    };
    function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
            blocks1[0] = blocks1[16] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = 0;
            this.blocks = blocks1;
        } else this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        if (is224) {
            this.h0 = 3238371032;
            this.h1 = 914150663;
            this.h2 = 812702999;
            this.h3 = 4144912697;
            this.h4 = 4290775857;
            this.h5 = 1750603025;
            this.h6 = 1694076839;
            this.h7 = 3204075428;
        } else {
            this.h0 = 1779033703;
            this.h1 = 3144134277;
            this.h2 = 1013904242;
            this.h3 = 2773480762;
            this.h4 = 1359893119;
            this.h5 = 2600822924;
            this.h6 = 528734635;
            this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
    }
    Sha256.prototype.update = function(message) {
        if (this.finalized) return;
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) throw new Error(ERROR);
                else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) message = new Uint8Array(message);
                else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) throw new Error(ERROR);
                }
            } else throw new Error(ERROR);
            notString = true;
        }
        var code, index = 0, i, length = message.length, blocks = this.blocks;
        while(index < length){
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = this.block;
                blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            if (notString) for(i = this.start; index < length && i < 64; ++index)blocks[i >> 2] |= message[index] << SHIFT[(i++) & 3];
            else for(i = this.start; index < length && i < 64; ++index){
                code = message.charCodeAt(index);
                if (code < 128) blocks[i >> 2] |= code << SHIFT[(i++) & 3];
                else if (code < 2048) {
                    blocks[i >> 2] |= (192 | code >> 6) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                } else if (code < 55296 || code >= 57344) {
                    blocks[i >> 2] |= (224 | code >> 12) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                } else {
                    code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                    blocks[i >> 2] |= (240 | code >> 18) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.block = blocks[16];
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else this.start = i;
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    Sha256.prototype.finalize = function() {
        if (this.finalized) return;
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex;
        blocks[16] = this.block;
        blocks[i >> 2] |= EXTRA[i & 3];
        this.block = blocks[16];
        if (i >= 56) {
            if (!this.hashed) this.hash();
            blocks[0] = this.block;
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks[15] = this.bytes << 3;
        this.hash();
    };
    Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for(j = 16; j < 64; ++j){
            // rightrotate
            t1 = blocks[j - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks[j - 2];
            s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
        }
        bc = b & c;
        for(j = 0; j < 64; j += 4){
            if (this.first) {
                if (this.is224) {
                    ab = 300032;
                    t1 = blocks[0] - 1413257819;
                    h = t1 - 150054599 << 0;
                    d = t1 + 24177077 << 0;
                } else {
                    ab = 704751109;
                    t1 = blocks[0] - 210244248;
                    h = t1 - 1521486534 << 0;
                    d = t1 + 143694565 << 0;
                }
                this.first = false;
            } else {
                s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                ab = a & b;
                maj = ab ^ a & c ^ bc;
                ch = e & f ^ ~e & g;
                t1 = h + s1 + ch + K[j] + blocks[j];
                t2 = s0 + maj;
                h = d + t1 << 0;
                d = t1 + t2 << 0;
            }
            s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
            s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
            da = d & a;
            maj = da ^ d & b ^ ab;
            ch = h & e ^ ~h & f;
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
            s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
            cd = c & d;
            maj = cd ^ c & a ^ da;
            ch = g & h ^ ~g & e;
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
            s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
            bc = b & c;
            maj = bc ^ b & d ^ cd;
            ch = f & g ^ ~f & h;
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
    };
    Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
        return hex;
    };
    Sha256.prototype.toString = Sha256.prototype.hex;
    Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
            h0 >> 24 & 255,
            h0 >> 16 & 255,
            h0 >> 8 & 255,
            h0 & 255,
            h1 >> 24 & 255,
            h1 >> 16 & 255,
            h1 >> 8 & 255,
            h1 & 255,
            h2 >> 24 & 255,
            h2 >> 16 & 255,
            h2 >> 8 & 255,
            h2 & 255,
            h3 >> 24 & 255,
            h3 >> 16 & 255,
            h3 >> 8 & 255,
            h3 & 255,
            h4 >> 24 & 255,
            h4 >> 16 & 255,
            h4 >> 8 & 255,
            h4 & 255,
            h5 >> 24 & 255,
            h5 >> 16 & 255,
            h5 >> 8 & 255,
            h5 & 255,
            h6 >> 24 & 255,
            h6 >> 16 & 255,
            h6 >> 8 & 255,
            h6 & 255
        ];
        if (!this.is224) arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
        return arr;
    };
    Sha256.prototype.array = Sha256.prototype.digest;
    Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) dataView.setUint32(28, this.h7);
        return buffer;
    };
    function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === 'string') {
            var bytes = [], length = key.length, index = 0, code;
            for(i = 0; i < length; ++i){
                code = key.charCodeAt(i);
                if (code < 128) bytes[index++] = code;
                else if (code < 2048) {
                    bytes[index++] = 192 | code >> 6;
                    bytes[index++] = 128 | code & 63;
                } else if (code < 55296 || code >= 57344) {
                    bytes[index++] = 224 | code >> 12;
                    bytes[index++] = 128 | code >> 6 & 63;
                    bytes[index++] = 128 | code & 63;
                } else {
                    code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
                    bytes[index++] = 240 | code >> 18;
                    bytes[index++] = 128 | code >> 12 & 63;
                    bytes[index++] = 128 | code >> 6 & 63;
                    bytes[index++] = 128 | code & 63;
                }
            }
            key = bytes;
        } else {
            if (type === 'object') {
                if (key === null) throw new Error(ERROR);
                else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) key = new Uint8Array(key);
                else if (!Array.isArray(key)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) throw new Error(ERROR);
                }
            } else throw new Error(ERROR);
        }
        if (key.length > 64) key = new Sha256(is224, true).update(key).array();
        var oKeyPad = [], iKeyPad = [];
        for(i = 0; i < 64; ++i){
            var b = key[i] || 0;
            oKeyPad[i] = 92 ^ b;
            iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    HmacSha256.prototype = new Sha256();
    HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha256.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha256.prototype.finalize.call(this);
        }
    };
    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(true);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(true);
    if (COMMON_JS) module.exports = exports;
    else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) define(function() {
            return exports;
        });
    }
})();

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"6CFD9":[function(require,module,exports) {
'use strict';
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diffEpochValidators = exports.findSeatPrice = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const depd_1 = __importDefault(require("depd"));
/** Finds seat price given validators stakes and number of seats.
 *  Calculation follow the spec: https://nomicon.io/Economics/README.html#validator-selection
 * @params validators: current or next epoch validators.
 * @params maxNumberOfSeats: maximum number of seats in the network.
 * @params minimumStakeRatio: minimum stake ratio
 * @params protocolVersion: version of the protocol from genesis config
 */ function findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio, protocolVersion) {
    if (protocolVersion && protocolVersion < 49) return findSeatPriceForProtocolBefore49(validators, maxNumberOfSeats);
    if (!minimumStakeRatio) {
        const deprecate = depd_1.default('findSeatPrice(validators, maxNumberOfSeats)');
        deprecate('`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead');
        minimumStakeRatio = [
            1,
            6250
        ]; // harcoded minimumStakeRation from 12/7/21
    }
    return findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio);
}
exports.findSeatPrice = findSeatPrice;
function findSeatPriceForProtocolBefore49(validators, numSeats) {
    const stakes = validators.map((v)=>new bn_js_1.default(v.stake, 10)
    ).sort((a, b)=>a.cmp(b)
    );
    const num = new bn_js_1.default(numSeats);
    const stakesSum = stakes.reduce((a, b)=>a.add(b)
    );
    if (stakesSum.lt(num)) throw new Error('Stakes are below seats');
    // assert stakesSum >= numSeats
    let left = new bn_js_1.default(1), right = stakesSum.add(new bn_js_1.default(1));
    while(!left.eq(right.sub(new bn_js_1.default(1)))){
        const mid = left.add(right).div(new bn_js_1.default(2));
        let found = false;
        let currentSum = new bn_js_1.default(0);
        for(let i = 0; i < stakes.length; ++i){
            currentSum = currentSum.add(stakes[i].div(mid));
            if (currentSum.gte(num)) {
                left = mid;
                found = true;
                break;
            }
        }
        if (!found) right = mid;
    }
    return left;
}
// nearcore reference: https://github.com/near/nearcore/blob/5a8ae263ec07930cd34d0dcf5bcee250c67c02aa/chain/epoch_manager/src/validator_selection.rs#L308;L315
function findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio) {
    if (minimumStakeRatio.length != 2) throw Error('minimumStakeRatio should have 2 elements');
    const stakes = validators.map((v)=>new bn_js_1.default(v.stake, 10)
    ).sort((a, b)=>a.cmp(b)
    );
    const stakesSum = stakes.reduce((a, b)=>a.add(b)
    );
    if (validators.length < maxNumberOfSeats) return stakesSum.mul(new bn_js_1.default(minimumStakeRatio[0])).div(new bn_js_1.default(minimumStakeRatio[1]));
    else return stakes[0].add(new bn_js_1.default(1));
}
/** Diff validators between current and next epoch.
 * Returns additions, subtractions and changes to validator set.
 * @params currentValidators: list of current validators.
 * @params nextValidators: list of next validators.
 */ function diffEpochValidators(currentValidators, nextValidators) {
    const validatorsMap = new Map();
    currentValidators.forEach((v)=>validatorsMap.set(v.account_id, v)
    );
    const nextValidatorsSet = new Set(nextValidators.map((v)=>v.account_id
    ));
    return {
        newValidators: nextValidators.filter((v)=>!validatorsMap.has(v.account_id)
        ),
        removedValidators: currentValidators.filter((v)=>!nextValidatorsSet.has(v.account_id)
        ),
        changedValidators: nextValidators.filter((v)=>validatorsMap.has(v.account_id) && validatorsMap.get(v.account_id).stake != v.stake
        ).map((v)=>({
                current: validatorsMap.get(v.account_id),
                next: v
            })
        )
    };
}
exports.diffEpochValidators = diffEpochValidators;

},{"bn.js":"VopIn","depd":"2jGeI"}],"hxSQV":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Account = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const depd_1 = __importDefault(require("depd"));
const transaction_1 = require("./transaction");
const providers_1 = require("./providers");
const borsh_1 = require("borsh");
const key_pair_1 = require("./utils/key_pair");
const errors_1 = require("./utils/errors");
const rpc_errors_1 = require("./utils/rpc_errors");
const constants_1 = require("./constants");
const exponential_backoff_1 = __importDefault(require("./utils/exponential-backoff"));
// Default number of retries with different nonce before giving up on a transaction.
const TX_NONCE_RETRY_NUMBER = 12;
// Default wait until next retry in millis.
const TX_NONCE_RETRY_WAIT = 500;
// Exponential back off for waiting to retry.
const TX_NONCE_RETRY_WAIT_BACKOFF = 1.5;
function parseJsonFromRawResponse(response) {
    return JSON.parse(Buffer.from(response).toString());
}
function bytesJsonStringify(input) {
    return Buffer.from(JSON.stringify(input));
}
/**
 * This class provides common account related RPC calls including signing transactions with a {@link KeyPair}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 * @hint Use {@link WalletConnection} in the browser to redirect to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for Account/key management using the {@link BrowserLocalStorageKeyStore}.
 * @see {@link https://nomicon.io/DataStructures/Account.html | Account Spec}
 */ class Account {
    constructor(connection, accountId){
        /** @hidden */ this.accessKeyByPublicKeyCache = {};
        this.connection = connection;
        this.accountId = accountId;
    }
    /** @hidden */ get ready() {
        const deprecate = depd_1.default('Account.ready()');
        deprecate('not needed anymore, always ready');
        return Promise.resolve();
    }
    async fetchState() {
        const deprecate = depd_1.default('Account.fetchState()');
        deprecate('use `Account.state()` instead');
    }
    /**
     * Returns basic NEAR account information via the `view_account` RPC query method
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-account}
     */ async state() {
        return this.connection.provider.query({
            request_type: 'view_account',
            account_id: this.accountId,
            finality: 'optimistic'
        });
    }
    /** @hidden */ printLogsAndFailures(contractId, results) {
        for (const result of results){
            console.log(`Receipt${result.receiptIds.length > 1 ? 's' : ''}: ${result.receiptIds.join(', ')}`);
            this.printLogs(contractId, result.logs, '\t');
            if (result.failure) console.warn(`\tFailure [${contractId}]: ${result.failure}`);
        }
    }
    /** @hidden */ printLogs(contractId, logs, prefix = '') {
        for (const log of logs)console.log(`${prefix}Log [${contractId}]: ${log}`);
    }
    /**
     * Create a signed transaction which can be broadcast to the network
     * @param receiverId NEAR account receiving the transaction
     * @param actions list of actions to perform as part of the transaction
     * @see {@link JsonRpcProvider.sendTransaction}
     */ async signTransaction(receiverId, actions) {
        const accessKeyInfo = await this.findAccessKey(receiverId, actions);
        if (!accessKeyInfo) throw new providers_1.TypedError(`Can not sign transactions for account ${this.accountId} on network ${this.connection.networkId}, no matching key pair found in ${this.connection.signer}.`, 'KeyNotFound');
        const { accessKey  } = accessKeyInfo;
        const block = await this.connection.provider.block({
            finality: 'final'
        });
        const blockHash = block.header.hash;
        const nonce = ++accessKey.nonce;
        return await transaction_1.signTransaction(receiverId, nonce, actions, borsh_1.baseDecode(blockHash), this.connection.signer, this.accountId, this.connection.networkId);
    }
    signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') return this.signAndSendTransactionV1(args[0], args[1]);
        else return this.signAndSendTransactionV2(args[0]);
    }
    signAndSendTransactionV1(receiverId, actions) {
        const deprecate = depd_1.default('Account.signAndSendTransaction(receiverId, actions');
        deprecate('use `Account.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
        return this.signAndSendTransactionV2({
            receiverId,
            actions
        });
    }
    async signAndSendTransactionV2({ receiverId , actions , returnError  }) {
        let txHash, signedTx;
        // TODO: TX_NONCE (different constants for different uses of exponentialBackoff?)
        const result = await exponential_backoff_1.default(TX_NONCE_RETRY_WAIT, TX_NONCE_RETRY_NUMBER, TX_NONCE_RETRY_WAIT_BACKOFF, async ()=>{
            [txHash, signedTx] = await this.signTransaction(receiverId, actions);
            const publicKey = signedTx.transaction.publicKey;
            try {
                return await this.connection.provider.sendTransaction(signedTx);
            } catch (error) {
                if (error.type === 'InvalidNonce') {
                    errors_1.logWarning(`Retrying transaction ${receiverId}:${borsh_1.baseEncode(txHash)} with new nonce.`);
                    delete this.accessKeyByPublicKeyCache[publicKey.toString()];
                    return null;
                }
                if (error.type === 'Expired') {
                    errors_1.logWarning(`Retrying transaction ${receiverId}:${borsh_1.baseEncode(txHash)} due to expired block hash`);
                    return null;
                }
                error.context = new providers_1.ErrorContext(borsh_1.baseEncode(txHash));
                throw error;
            }
        });
        if (!result) // TODO: This should have different code actually, as means "transaction not submitted for sure"
        throw new providers_1.TypedError('nonce retries exceeded for transaction. This usually means there are too many parallel requests with the same access key.', 'RetriesExceeded');
        const flatLogs = [
            result.transaction_outcome,
            ...result.receipts_outcome
        ].reduce((acc, it)=>{
            if (it.outcome.logs.length || typeof it.outcome.status === 'object' && typeof it.outcome.status.Failure === 'object') return acc.concat({
                'receiptIds': it.outcome.receipt_ids,
                'logs': it.outcome.logs,
                'failure': typeof it.outcome.status.Failure != 'undefined' ? rpc_errors_1.parseRpcError(it.outcome.status.Failure) : null
            });
            else return acc;
        }, []);
        this.printLogsAndFailures(signedTx.transaction.receiverId, flatLogs);
        if (!returnError && typeof result.status === 'object' && typeof result.status.Failure === 'object') {
            // if error data has error_message and error_type properties, we consider that node returned an error in the old format
            if (result.status.Failure.error_message && result.status.Failure.error_type) throw new providers_1.TypedError(`Transaction ${result.transaction_outcome.id} failed. ${result.status.Failure.error_message}`, result.status.Failure.error_type);
            else throw rpc_errors_1.parseResultError(result);
        }
        // TODO: if Tx is Unknown or Started.
        return result;
    }
    /**
     * Finds the {@link AccessKeyView} associated with the accounts {@link PublicKey} stored in the {@link KeyStore}.
     *
     * @todo Find matching access key based on transaction (i.e. receiverId and actions)
     *
     * @param receiverId currently unused (see todo)
     * @param actions currently unused (see todo)
     * @returns `{ publicKey PublicKey; accessKey: AccessKeyView }`
     */ async findAccessKey(receiverId, actions) {
        // TODO: Find matching access key based on transaction (i.e. receiverId and actions)
        const publicKey = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
        if (!publicKey) return null;
        const cachedAccessKey = this.accessKeyByPublicKeyCache[publicKey.toString()];
        if (cachedAccessKey !== undefined) return {
            publicKey,
            accessKey: cachedAccessKey
        };
        try {
            const accessKey = await this.connection.provider.query({
                request_type: 'view_access_key',
                account_id: this.accountId,
                public_key: publicKey.toString(),
                finality: 'optimistic'
            });
            // this function can be called multiple times and retrieve the same access key
            // this checks to see if the access key was already retrieved and cached while
            // the above network call was in flight. To keep nonce values in line, we return
            // the cached access key.
            if (this.accessKeyByPublicKeyCache[publicKey.toString()]) return {
                publicKey,
                accessKey: this.accessKeyByPublicKeyCache[publicKey.toString()]
            };
            this.accessKeyByPublicKeyCache[publicKey.toString()] = accessKey;
            return {
                publicKey,
                accessKey
            };
        } catch (e) {
            if (e.type == 'AccessKeyDoesNotExist') return null;
            throw e;
        }
    }
    /**
     * Create a new account and deploy a contract to it
     *
     * @param contractId NEAR account where the contract is deployed
     * @param publicKey The public key to add to the created contract account
     * @param data The compiled contract code
     * @param amount of NEAR to transfer to the created contract account. Transfer enough to pay for storage https://docs.near.org/docs/concepts/storage-staking
     */ async createAndDeployContract(contractId, publicKey, data, amount) {
        const accessKey = transaction_1.fullAccessKey();
        await this.signAndSendTransaction({
            receiverId: contractId,
            actions: [
                transaction_1.createAccount(),
                transaction_1.transfer(amount),
                transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey),
                transaction_1.deployContract(data)
            ]
        });
        const contractAccount = new Account(this.connection, contractId);
        return contractAccount;
    }
    /**
     * @param receiverId NEAR account receiving Ⓝ
     * @param amount Amount to send in yoctoⓃ
     */ async sendMoney(receiverId, amount) {
        return this.signAndSendTransaction({
            receiverId,
            actions: [
                transaction_1.transfer(amount)
            ]
        });
    }
    /**
     * @param newAccountId NEAR account name to be created
     * @param publicKey A public key created from the masterAccount
     */ async createAccount(newAccountId, publicKey, amount) {
        const accessKey = transaction_1.fullAccessKey();
        return this.signAndSendTransaction({
            receiverId: newAccountId,
            actions: [
                transaction_1.createAccount(),
                transaction_1.transfer(amount),
                transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)
            ]
        });
    }
    /**
     * @param beneficiaryId The NEAR account that will receive the remaining Ⓝ balance from the account being deleted
     */ async deleteAccount(beneficiaryId) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [
                transaction_1.deleteAccount(beneficiaryId)
            ]
        });
    }
    /**
     * @param data The compiled contract code
     */ async deployContract(data) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [
                transaction_1.deployContract(data)
            ]
        });
    }
    async functionCall(...args) {
        if (typeof args[0] === 'string') return this.functionCallV1(args[0], args[1], args[2], args[3], args[4]);
        else return this.functionCallV2(args[0]);
    }
    functionCallV1(contractId, methodName, args, gas, amount) {
        const deprecate = depd_1.default('Account.functionCall(contractId, methodName, args, gas, amount)');
        deprecate('use `Account.functionCall(FunctionCallOptions)` instead');
        args = args || {};
        this.validateArgs(args);
        return this.signAndSendTransaction({
            receiverId: contractId,
            actions: [
                transaction_1.functionCall(methodName, args, gas || constants_1.DEFAULT_FUNCTION_CALL_GAS, amount)
            ]
        });
    }
    functionCallV2({ contractId , methodName , args ={} , gas =constants_1.DEFAULT_FUNCTION_CALL_GAS , attachedDeposit , walletMeta , walletCallbackUrl , stringify  }) {
        this.validateArgs(args);
        const stringifyArg = stringify === undefined ? transaction_1.stringifyJsonOrBytes : stringify;
        return this.signAndSendTransaction({
            receiverId: contractId,
            actions: [
                transaction_1.functionCall(methodName, args, gas, attachedDeposit, stringifyArg)
            ],
            walletMeta,
            walletCallbackUrl
        });
    }
    /**
     * @see {@link https://docs.near.org/docs/concepts/account#access-keys}
     * @todo expand this API to support more options.
     * @param publicKey A public key to be associated with the contract
     * @param contractId NEAR account where the contract is deployed
     * @param methodNames The method names on the contract that should be allowed to be called. Pass null for no method names and '' or [] for any method names.
     * @param amount Payment in yoctoⓃ that is sent to the contract during this function call
     */ async addKey(publicKey, contractId, methodNames, amount) {
        if (!methodNames) methodNames = [];
        if (!Array.isArray(methodNames)) methodNames = [
            methodNames
        ];
        let accessKey;
        if (!contractId) accessKey = transaction_1.fullAccessKey();
        else accessKey = transaction_1.functionCallAccessKey(contractId, methodNames, amount);
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [
                transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)
            ]
        });
    }
    /**
     * @param publicKey The public key to be deleted
     * @returns {Promise<FinalExecutionOutcome>}
     */ async deleteKey(publicKey) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [
                transaction_1.deleteKey(key_pair_1.PublicKey.from(publicKey))
            ]
        });
    }
    /**
     * @see {@link https://docs.near.org/docs/validator/staking-overview}
     *
     * @param publicKey The public key for the account that's staking
     * @param amount The account to stake in yoctoⓃ
     */ async stake(publicKey, amount) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [
                transaction_1.stake(amount, key_pair_1.PublicKey.from(publicKey))
            ]
        });
    }
    /** @hidden */ validateArgs(args) {
        const isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;
        if (isUint8Array) return;
        if (Array.isArray(args) || typeof args !== 'object') throw new errors_1.PositionalArgsError();
    }
    /**
     * Invoke a contract view function using the RPC API.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#call-a-contract-function}
     *
     * @param contractId NEAR account where the contract is deployed
     * @param methodName The view-only method (no state mutations) name on the contract as it is written in the contract code
     * @param args Any arguments to the view contract method, wrapped in JSON
     * @param options.parse Parse the result of the call. Receives a Buffer (bytes array) and converts it to any object. By default result will be treated as json.
     * @param options.stringify Convert input arguments into a bytes array. By default the input is treated as a JSON.
     * @returns {Promise<any>}
     */ async viewFunction(contractId, methodName, args = {}, { parse =parseJsonFromRawResponse , stringify =bytesJsonStringify  } = {}) {
        this.validateArgs(args);
        const serializedArgs = stringify(args).toString('base64');
        const result = await this.connection.provider.query({
            request_type: 'call_function',
            account_id: contractId,
            method_name: methodName,
            args_base64: serializedArgs,
            finality: 'optimistic'
        });
        if (result.logs) this.printLogs(contractId, result.logs);
        return result.result && result.result.length > 0 && parse(Buffer.from(result.result));
    }
    /**
     * Returns the state (key value pairs) of this account's contract based on the key prefix.
     * Pass an empty string for prefix if you would like to return the entire state.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-contract-state}
     *
     * @param prefix allows to filter which keys should be returned. Empty prefix means all keys. String prefix is utf-8 encoded.
     * @param blockQuery specifies which block to query state at. By default returns last "optimistic" block (i.e. not necessarily finalized).
     */ async viewState(prefix, blockQuery = {
        finality: 'optimistic'
    }) {
        const { values  } = await this.connection.provider.query({
            request_type: 'view_state',
            ...blockQuery,
            account_id: this.accountId,
            prefix_base64: Buffer.from(prefix).toString('base64')
        });
        return values.map(({ key , value  })=>({
                key: Buffer.from(key, 'base64'),
                value: Buffer.from(value, 'base64')
            })
        );
    }
    /**
     * Get all access keys for the account
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-access-key-list}
     */ async getAccessKeys() {
        const response = await this.connection.provider.query({
            request_type: 'view_access_key_list',
            account_id: this.accountId,
            finality: 'optimistic'
        });
        // A breaking API change introduced extra information into the
        // response, so it now returns an object with a `keys` field instead
        // of an array: https://github.com/nearprotocol/nearcore/pull/1789
        if (Array.isArray(response)) return response;
        return response.keys;
    }
    /**
     * Returns a list of authorized apps
     * @todo update the response value to return all the different keys, not just app keys.
     */ async getAccountDetails() {
        // TODO: update the response value to return all the different keys, not just app keys.
        // Also if we need this function, or getAccessKeys is good enough.
        const accessKeys = await this.getAccessKeys();
        const authorizedApps = accessKeys.filter((item)=>item.access_key.permission !== 'FullAccess'
        ).map((item)=>{
            const perm = item.access_key.permission;
            return {
                contractId: perm.FunctionCall.receiver_id,
                amount: perm.FunctionCall.allowance,
                publicKey: item.public_key
            };
        });
        return {
            authorizedApps
        };
    }
    /**
     * Returns calculated account balance
     */ async getAccountBalance() {
        const protocolConfig = await this.connection.provider.experimental_protocolConfig({
            finality: 'final'
        });
        const state = await this.state();
        const costPerByte = new bn_js_1.default(protocolConfig.runtime_config.storage_amount_per_byte);
        const stateStaked = new bn_js_1.default(state.storage_usage).mul(costPerByte);
        const staked = new bn_js_1.default(state.locked);
        const totalBalance = new bn_js_1.default(state.amount).add(staked);
        const availableBalance = totalBalance.sub(bn_js_1.default.max(staked, stateStaked));
        return {
            total: totalBalance.toString(),
            stateStaked: stateStaked.toString(),
            staked: staked.toString(),
            available: availableBalance.toString()
        };
    }
}
exports.Account = Account;

},{"buffer":"fCgem","bn.js":"VopIn","depd":"2jGeI","./transaction":"jJQ5a","./providers":"gtL2a","borsh":"4JCmN","./utils/key_pair":"kBQFP","./utils/errors":"btMYy","./utils/rpc_errors":"1TB1L","./constants":"lUNnG","./utils/exponential-backoff":"51I5X"}],"lUNnG":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_FUNCTION_CALL_GAS = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
// Default amount of gas to be sent with the function calls. Used to pay for the fees
// incurred while running the contract execution. The unused amount will be refunded back to
// the originator.
// Due to protocol changes that charge upfront for the maximum possible gas price inflation due to
// full blocks, the price of max_prepaid_gas is decreased to `300 * 10**12`.
// For discussion see https://github.com/nearprotocol/NEPs/issues/67
exports.DEFAULT_FUNCTION_CALL_GAS = new bn_js_1.default('30000000000000');

},{"bn.js":"VopIn"}],"7q1du":[function(require,module,exports) {
'use strict';
var Buffer = require("buffer").Buffer;
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Account2FA = exports.AccountMultisig = exports.MULTISIG_CONFIRM_METHODS = exports.MULTISIG_CHANGE_METHODS = exports.MULTISIG_DEPOSIT = exports.MULTISIG_GAS = exports.MULTISIG_ALLOWANCE = exports.MULTISIG_STORAGE_KEY = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const depd_1 = __importDefault(require("depd"));
const account_1 = require("./account");
const format_1 = require("./utils/format");
const key_pair_1 = require("./utils/key_pair");
const transaction_1 = require("./transaction");
const web_1 = require("./utils/web");
exports.MULTISIG_STORAGE_KEY = '__multisigRequest';
exports.MULTISIG_ALLOWANCE = new bn_js_1.default(format_1.parseNearAmount('1'));
// TODO: Different gas value for different requests (can reduce gas usage dramatically)
exports.MULTISIG_GAS = new bn_js_1.default('100000000000000');
exports.MULTISIG_DEPOSIT = new bn_js_1.default('0');
exports.MULTISIG_CHANGE_METHODS = [
    'add_request',
    'add_request_and_confirm',
    'delete_request',
    'confirm'
];
exports.MULTISIG_CONFIRM_METHODS = [
    'confirm'
];
// in memory request cache for node w/o localStorage
const storageFallback = {
    [exports.MULTISIG_STORAGE_KEY]: null
};
class AccountMultisig extends account_1.Account {
    constructor(connection, accountId, options){
        super(connection, accountId);
        this.storage = options.storage;
        this.onAddRequestResult = options.onAddRequestResult;
    }
    async signAndSendTransactionWithAccount(receiverId, actions) {
        return super.signAndSendTransaction({
            receiverId,
            actions
        });
    }
    signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') return this._signAndSendTransaction({
            receiverId: args[0],
            actions: args[1]
        });
        return this._signAndSendTransaction(args[0]);
    }
    async _signAndSendTransaction({ receiverId , actions  }) {
        const { accountId  } = this;
        const args = Buffer.from(JSON.stringify({
            request: {
                receiver_id: receiverId,
                actions: convertActions(actions, accountId, receiverId)
            }
        }));
        let result;
        try {
            result = await super.signAndSendTransaction({
                receiverId: accountId,
                actions: [
                    transaction_1.functionCall('add_request_and_confirm', args, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)
                ]
            });
        } catch (e) {
            if (e.toString().includes('Account has too many active requests. Confirm or delete some')) {
                await this.deleteUnconfirmedRequests();
                return await this.signAndSendTransaction(receiverId, actions);
            }
            throw e;
        }
        // TODO: Are following even needed? Seems like it throws on error already
        if (!result.status) throw new Error('Request failed');
        const status = {
            ...result.status
        };
        if (!status.SuccessValue || typeof status.SuccessValue !== 'string') throw new Error('Request failed');
        this.setRequest({
            accountId,
            actions,
            requestId: parseInt(Buffer.from(status.SuccessValue, 'base64').toString('ascii'), 10)
        });
        if (this.onAddRequestResult) await this.onAddRequestResult(result);
        // NOTE there is no await on purpose to avoid blocking for 2fa
        this.deleteUnconfirmedRequests();
        return result;
    }
    async deleteUnconfirmedRequests() {
        // TODO: Delete in batch, don't delete unexpired
        // TODO: Delete in batch, don't delete unexpired (can reduce gas usage dramatically)
        const request_ids = await this.getRequestIds();
        const { requestId  } = this.getRequest();
        for (const requestIdToDelete of request_ids){
            if (requestIdToDelete == requestId) continue;
            try {
                await super.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [
                        transaction_1.functionCall('delete_request', {
                            request_id: requestIdToDelete
                        }, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)
                    ]
                });
            } catch (e) {
                console.warn('Attempt to delete an earlier request before 15 minutes failed. Will try again.');
            }
        }
    }
    // helpers
    async getRequestIds() {
        // TODO: Read requests from state to allow filtering by expiration time
        // TODO: https://github.com/near/core-contracts/blob/305d1db4f4f2cf5ce4c1ef3479f7544957381f11/multisig/src/lib.rs#L84
        return this.viewFunction(this.accountId, 'list_request_ids');
    }
    getRequest() {
        if (this.storage) return JSON.parse(this.storage.getItem(exports.MULTISIG_STORAGE_KEY) || '{}');
        return storageFallback[exports.MULTISIG_STORAGE_KEY];
    }
    setRequest(data) {
        if (this.storage) return this.storage.setItem(exports.MULTISIG_STORAGE_KEY, JSON.stringify(data));
        storageFallback[exports.MULTISIG_STORAGE_KEY] = data;
    }
}
exports.AccountMultisig = AccountMultisig;
class Account2FA extends AccountMultisig {
    constructor(connection, accountId, options){
        super(connection, accountId, options);
        this.helperUrl = 'https://helper.testnet.near.org';
        this.helperUrl = options.helperUrl || this.helperUrl;
        this.storage = options.storage;
        this.sendCode = options.sendCode || this.sendCodeDefault;
        this.getCode = options.getCode || this.getCodeDefault;
        this.verifyCode = options.verifyCode || this.verifyCodeDefault;
        this.onConfirmResult = options.onConfirmResult;
    }
    async signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') {
            const deprecate = depd_1.default('Account.signAndSendTransaction(receiverId, actions');
            deprecate('use `Account2FA.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
            return this.__signAndSendTransaction({
                receiverId: args[0],
                actions: args[1]
            });
        } else return this.__signAndSendTransaction(args[0]);
    }
    async __signAndSendTransaction({ receiverId , actions  }) {
        await super.signAndSendTransaction({
            receiverId,
            actions
        });
        // TODO: Should following override onRequestResult in superclass instead of doing custom signAndSendTransaction?
        await this.sendCode();
        const result = await this.promptAndVerify();
        if (this.onConfirmResult) await this.onConfirmResult(result);
        return result;
    }
    // default helpers for CH deployments of multisig
    async deployMultisig(contractBytes) {
        const { accountId  } = this;
        const seedOrLedgerKey = (await this.getRecoveryMethods()).data.filter(({ kind , publicKey  })=>(kind === 'phrase' || kind === 'ledger') && publicKey !== null
        ).map((rm)=>rm.publicKey
        );
        const fak2lak = (await this.getAccessKeys()).filter(({ public_key , access_key: { permission  }  })=>permission === 'FullAccess' && !seedOrLedgerKey.includes(public_key)
        ).map((ak)=>ak.public_key
        ).map(toPK);
        const confirmOnlyKey = toPK((await this.postSignedJson('/2fa/getAccessKey', {
            accountId
        })).publicKey);
        const newArgs = Buffer.from(JSON.stringify({
            'num_confirmations': 2
        }));
        const actions = [
            ...fak2lak.map((pk)=>transaction_1.deleteKey(pk)
            ),
            ...fak2lak.map((pk)=>transaction_1.addKey(pk, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CHANGE_METHODS, null))
            ),
            transaction_1.addKey(confirmOnlyKey, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CONFIRM_METHODS, null)),
            transaction_1.deployContract(contractBytes), 
        ];
        if ((await this.state()).code_hash === '11111111111111111111111111111111') actions.push(transaction_1.functionCall('new', newArgs, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT));
        console.log('deploying multisig contract for', accountId);
        return await super.signAndSendTransactionWithAccount(accountId, actions);
    }
    async disable(contractBytes) {
        const { accountId  } = this;
        const accessKeys = await this.getAccessKeys();
        const lak2fak = accessKeys.filter(({ access_key  })=>access_key.permission !== 'FullAccess'
        ).filter(({ access_key  })=>{
            const perm = access_key.permission.FunctionCall;
            return perm.receiver_id === accountId && perm.method_names.length === 4 && perm.method_names.includes('add_request_and_confirm');
        });
        const confirmOnlyKey = key_pair_1.PublicKey.from((await this.postSignedJson('/2fa/getAccessKey', {
            accountId
        })).publicKey);
        const actions = [
            transaction_1.deleteKey(confirmOnlyKey),
            ...lak2fak.map(({ public_key  })=>transaction_1.deleteKey(key_pair_1.PublicKey.from(public_key))
            ),
            ...lak2fak.map(({ public_key  })=>transaction_1.addKey(key_pair_1.PublicKey.from(public_key), null)
            ),
            transaction_1.deployContract(contractBytes), 
        ];
        console.log('disabling 2fa for', accountId);
        return await this.signAndSendTransaction({
            receiverId: accountId,
            actions
        });
    }
    async sendCodeDefault() {
        const { accountId  } = this;
        const { requestId  } = this.getRequest();
        const method = await this.get2faMethod();
        await this.postSignedJson('/2fa/send', {
            accountId,
            method,
            requestId
        });
        return requestId;
    }
    async getCodeDefault(method) {
        throw new Error('There is no getCode callback provided. Please provide your own in AccountMultisig constructor options. It has a parameter method where method.kind is "email" or "phone".');
    }
    async promptAndVerify() {
        const method = await this.get2faMethod();
        const securityCode = await this.getCode(method);
        try {
            const result = await this.verifyCode(securityCode);
            // TODO: Parse error from result for real (like in normal account.signAndSendTransaction)
            return result;
        } catch (e) {
            console.warn('Error validating security code:', e);
            if (e.toString().includes('invalid 2fa code provided') || e.toString().includes('2fa code not valid')) return await this.promptAndVerify();
            throw e;
        }
    }
    async verifyCodeDefault(securityCode) {
        const { accountId  } = this;
        const request = this.getRequest();
        if (!request) throw new Error('no request pending');
        const { requestId  } = request;
        return await this.postSignedJson('/2fa/verify', {
            accountId,
            securityCode,
            requestId
        });
    }
    async getRecoveryMethods() {
        const { accountId  } = this;
        return {
            accountId,
            data: await this.postSignedJson('/account/recoveryMethods', {
                accountId
            })
        };
    }
    async get2faMethod() {
        let { data  } = await this.getRecoveryMethods();
        if (data && data.length) data = data.find((m)=>m.kind.indexOf('2fa-') === 0
        );
        if (!data) return null;
        const { kind , detail  } = data;
        return {
            kind,
            detail
        };
    }
    async signatureFor() {
        const { accountId  } = this;
        const block = await this.connection.provider.block({
            finality: 'final'
        });
        const blockNumber = block.header.height.toString();
        const signed = await this.connection.signer.signMessage(Buffer.from(blockNumber), accountId, this.connection.networkId);
        const blockNumberSignature = Buffer.from(signed.signature).toString('base64');
        return {
            blockNumber,
            blockNumberSignature
        };
    }
    async postSignedJson(path, body) {
        return await web_1.fetchJson(this.helperUrl + path, JSON.stringify({
            ...body,
            ...await this.signatureFor()
        }));
    }
}
exports.Account2FA = Account2FA;
// helpers
const toPK = (pk)=>key_pair_1.PublicKey.from(pk)
;
const convertPKForContract = (pk)=>pk.toString().replace('ed25519:', '')
;
const convertActions = (actions, accountId, receiverId)=>actions.map((a)=>{
        const type = a.enum;
        const { gas , publicKey , methodName , args , deposit , accessKey , code  } = a[type];
        const action = {
            type: type[0].toUpperCase() + type.substr(1),
            gas: gas && gas.toString() || undefined,
            public_key: publicKey && convertPKForContract(publicKey) || undefined,
            method_name: methodName,
            args: args && Buffer.from(args).toString('base64') || undefined,
            code: code && Buffer.from(code).toString('base64') || undefined,
            amount: deposit && deposit.toString() || undefined,
            deposit: deposit && deposit.toString() || '0',
            permission: undefined
        };
        if (accessKey) {
            if (receiverId === accountId && accessKey.permission.enum !== 'fullAccess') action.permission = {
                receiver_id: accountId,
                allowance: exports.MULTISIG_ALLOWANCE.toString(),
                method_names: exports.MULTISIG_CHANGE_METHODS
            };
            if (accessKey.permission.enum === 'functionCall') {
                const { receiverId: receiver_id , methodNames: method_names , allowance  } = accessKey.permission.functionCall;
                action.permission = {
                    receiver_id,
                    allowance: allowance && allowance.toString() || undefined,
                    method_names
                };
            }
        }
        return action;
    })
;

},{"buffer":"fCgem","bn.js":"VopIn","depd":"2jGeI","./account":"hxSQV","./utils/format":"16c5X","./utils/key_pair":"kBQFP","./transaction":"jJQ5a","./utils/web":"iSqiB"}],"aQbxV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlAccountCreator = exports.LocalAccountCreator = exports.AccountCreator = void 0;
const web_1 = require("./utils/web");
/**
 * Account creator provides an interface for implementations to actually create accounts
 */ class AccountCreator {
}
exports.AccountCreator = AccountCreator;
class LocalAccountCreator extends AccountCreator {
    constructor(masterAccount, initialBalance){
        super();
        this.masterAccount = masterAccount;
        this.initialBalance = initialBalance;
    }
    /**
     * Creates an account using a masterAccount, meaning the new account is created from an existing account
     * @param newAccountId The name of the NEAR account to be created
     * @param publicKey The public key from the masterAccount used to create this account
     * @returns {Promise<void>}
     */ async createAccount(newAccountId, publicKey) {
        await this.masterAccount.createAccount(newAccountId, publicKey, this.initialBalance);
    }
}
exports.LocalAccountCreator = LocalAccountCreator;
class UrlAccountCreator extends AccountCreator {
    constructor(connection, helperUrl){
        super();
        this.connection = connection;
        this.helperUrl = helperUrl;
    }
    /**
     * Creates an account using a helperUrl
     * This is [hosted here](https://helper.nearprotocol.com) or set up locally with the [near-contract-helper](https://github.com/nearprotocol/near-contract-helper) repository
     * @param newAccountId The name of the NEAR account to be created
     * @param publicKey The public key from the masterAccount used to create this account
     * @returns {Promise<void>}
     */ async createAccount(newAccountId, publicKey) {
        await web_1.fetchJson(`${this.helperUrl}/account`, JSON.stringify({
            newAccountId,
            newAccountPublicKey: publicKey.toString()
        }));
    }
}
exports.UrlAccountCreator = UrlAccountCreator;

},{"./utils/web":"iSqiB"}],"3ThJM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Connection = void 0;
const providers_1 = require("./providers");
const signer_1 = require("./signer");
/**
 * @param config Contains connection info details
 * @returns {Provider}
 */ function getProvider(config) {
    switch(config.type){
        case undefined:
            return config;
        case 'JsonRpcProvider':
            return new providers_1.JsonRpcProvider({
                ...config.args
            });
        default:
            throw new Error(`Unknown provider type ${config.type}`);
    }
}
/**
 * @param config Contains connection info details
 * @returns {Signer}
 */ function getSigner(config) {
    switch(config.type){
        case undefined:
            return config;
        case 'InMemorySigner':
            return new signer_1.InMemorySigner(config.keyStore);
        default:
            throw new Error(`Unknown signer type ${config.type}`);
    }
}
/**
 * Connects an account to a given network via a given provider
 */ class Connection {
    constructor(networkId, provider, signer){
        this.networkId = networkId;
        this.provider = provider;
        this.signer = signer;
    }
    /**
     * @param config Contains connection info details
     */ static fromConfig(config) {
        const provider = getProvider(config.provider);
        const signer = getSigner(config.signer);
        return new Connection(config.networkId, provider, signer);
    }
}
exports.Connection = Connection;

},{"./providers":"gtL2a","./signer":"a6bzI"}],"a6bzI":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemorySigner = exports.Signer = void 0;
const js_sha256_1 = __importDefault(require("js-sha256"));
const key_pair_1 = require("./utils/key_pair");
const in_memory_key_store_1 = require("./key_stores/in_memory_key_store");
/**
 * General signing interface, can be used for in memory signing, RPC singing, external wallet, HSM, etc.
 */ class Signer {
}
exports.Signer = Signer;
/**
 * Signs using in memory key store.
 */ class InMemorySigner extends Signer {
    constructor(keyStore){
        super();
        this.keyStore = keyStore;
    }
    /**
     * Creates a single account Signer instance with account, network and keyPair provided.
     *
     * Intended to be useful for temporary keys (e.g. claiming a Linkdrop).
     *
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account to assign the key pair to
     * @param keyPair The keyPair to use for signing
     */ static async fromKeyPair(networkId, accountId, keyPair) {
        const keyStore = new in_memory_key_store_1.InMemoryKeyStore();
        await keyStore.setKey(networkId, accountId, keyPair);
        return new InMemorySigner(keyStore);
    }
    /**
     * Creates a public key for the account given
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>}
     */ async createKey(accountId, networkId) {
        const keyPair = key_pair_1.KeyPair.fromRandom('ed25519');
        await this.keyStore.setKey(networkId, accountId, keyPair);
        return keyPair.getPublicKey();
    }
    /**
     * Gets the existing public key for a given account
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>} Returns the public key or null if not found
     */ async getPublicKey(accountId, networkId) {
        const keyPair = await this.keyStore.getKey(networkId, accountId);
        if (keyPair === null) return null;
        return keyPair.getPublicKey();
    }
    /**
     * @param message A message to be signed, typically a serialized transaction
     * @param accountId the NEAR account signing the message
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<Signature>}
     */ async signMessage(message, accountId, networkId) {
        const hash = new Uint8Array(js_sha256_1.default.sha256.array(message));
        if (!accountId) throw new Error('InMemorySigner requires provided account id');
        const keyPair = await this.keyStore.getKey(networkId, accountId);
        if (keyPair === null) throw new Error(`Key for ${accountId} not found in ${networkId}`);
        return keyPair.sign(hash);
    }
    toString() {
        return `InMemorySigner(${this.keyStore})`;
    }
}
exports.InMemorySigner = InMemorySigner;

},{"js-sha256":"ahVaM","./utils/key_pair":"kBQFP","./key_stores/in_memory_key_store":"fTfs7"}],"guo0T":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Contract = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const depd_1 = __importDefault(require("depd"));
const providers_1 = require("./providers");
const errors_1 = require("./utils/errors");
// Makes `function.name` return given name
function nameFunction(name, body) {
    return ({
        [name] (...args) {
            return body(...args);
        }
    })[name];
}
const isUint8Array = (x)=>x && x.byteLength !== undefined && x.byteLength === x.length
;
const isObject = (x)=>Object.prototype.toString.call(x) === '[object Object]'
;
/**
 * Defines a smart contract on NEAR including the change (mutable) and view (non-mutable) methods
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#contract}
 * @example
 * ```js
 * import { Contract } from 'near-api-js';
 *
 * async function contractExample() {
 *   const methodOptions = {
 *     viewMethods: ['getMessageByAccountId'],
 *     changeMethods: ['addMessage']
 *   };
 *   const contract = new Contract(
 *     wallet.account(),
 *     'contract-id.testnet',
 *     methodOptions
 *   );
 *
 *   // use a contract view method
 *   const messages = await contract.getMessages({
 *     accountId: 'example-account.testnet'
 *   });
 *
 *   // use a contract change method
 *   await contract.addMessage({
 *      meta: 'some info',
 *      callbackUrl: 'https://example.com/callback',
 *      args: { text: 'my message' },
 *      amount: 1
 *   })
 * }
 * ```
 */ class Contract {
    /**
     * @param account NEAR account to sign change method transactions
     * @param contractId NEAR account id where the contract is deployed
     * @param options NEAR smart contract methods that your application will use. These will be available as `contract.methodName`
     */ constructor(account, contractId, options1){
        this.account = account;
        this.contractId = contractId;
        const { viewMethods =[] , changeMethods =[]  } = options1;
        viewMethods.forEach((methodName)=>{
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (args = {}, options = {}, ...ignored)=>{
                    if (ignored.length || !(isObject(args) || isUint8Array(args)) || !isObject(options)) throw new errors_1.PositionalArgsError();
                    return this.account.viewFunction(this.contractId, methodName, args, options);
                })
            });
        });
        changeMethods.forEach((methodName)=>{
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (...args)=>{
                    if (args.length && (args.length > 3 || !(isObject(args[0]) || isUint8Array(args[0])))) throw new errors_1.PositionalArgsError();
                    if (args.length > 1 || !(args[0] && args[0].args)) {
                        const deprecate = depd_1.default('contract.methodName(args, gas, amount)');
                        deprecate('use `contract.methodName({ args, gas?, amount?, callbackUrl?, meta? })` instead');
                        return this._changeMethod({
                            methodName,
                            args: args[0],
                            gas: args[1],
                            amount: args[2]
                        });
                    }
                    return this._changeMethod({
                        methodName,
                        ...args[0]
                    });
                })
            });
        });
    }
    async _changeMethod({ args , methodName , gas , amount , meta , callbackUrl  }) {
        validateBNLike({
            gas,
            amount
        });
        const rawResult = await this.account.functionCall({
            contractId: this.contractId,
            methodName,
            args,
            gas,
            attachedDeposit: amount,
            walletMeta: meta,
            walletCallbackUrl: callbackUrl
        });
        return providers_1.getTransactionLastResult(rawResult);
    }
}
exports.Contract = Contract;
/**
 * Validation on arguments being a big number from bn.js
 * Throws if an argument is not in BN format or otherwise invalid
 * @param argMap
 */ function validateBNLike(argMap) {
    const bnLike = 'number, decimal string or BN';
    for (const argName of Object.keys(argMap)){
        const argValue = argMap[argName];
        if (argValue && !bn_js_1.default.isBN(argValue) && isNaN(argValue)) throw new errors_1.ArgumentTypeError(argName, bnLike, argValue);
    }
}

},{"bn.js":"VopIn","depd":"2jGeI","./providers":"gtL2a","./utils/errors":"btMYy"}],"9Ying":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Near = void 0;
/**
 * This module contains the main class developers will use to interact with NEAR.
 * The {@link Near} class is used to interact with {@link Account | Accounts} through the {@link JsonRpcProvider.JsonRpcProvider | JsonRpcProvider}.
 * It is configured via the {@link NearConfig}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 *
 * @module near
 */ const bn_js_1 = __importDefault(require("bn.js"));
const account_1 = require("./account");
const connection_1 = require("./connection");
const contract_1 = require("./contract");
const account_creator_1 = require("./account_creator");
/**
 * This is the main class developers should use to interact with NEAR.
 * @example
 * ```js
 * const near = new Near(config);
 * ```
 */ class Near {
    constructor(config){
        this.config = config;
        this.connection = connection_1.Connection.fromConfig({
            networkId: config.networkId,
            provider: {
                type: 'JsonRpcProvider',
                args: {
                    url: config.nodeUrl,
                    headers: config.headers
                }
            },
            signer: config.signer || {
                type: 'InMemorySigner',
                keyStore: config.keyStore || config.deps.keyStore
            }
        });
        if (config.masterAccount) {
            // TODO: figure out better way of specifiying initial balance.
            // Hardcoded number below must be enough to pay the gas cost to dev-deploy with near-shell for multiple times
            const initialBalance = config.initialBalance ? new bn_js_1.default(config.initialBalance) : new bn_js_1.default('500000000000000000000000000');
            this.accountCreator = new account_creator_1.LocalAccountCreator(new account_1.Account(this.connection, config.masterAccount), initialBalance);
        } else if (config.helperUrl) this.accountCreator = new account_creator_1.UrlAccountCreator(this.connection, config.helperUrl);
        else this.accountCreator = null;
    }
    /**
     * @param accountId near accountId used to interact with the network.
     */ async account(accountId) {
        const account = new account_1.Account(this.connection, accountId);
        return account;
    }
    /**
     * Create an account using the {@link AccountCreator}. Either:
     * * using a masterAccount with {@link LocalAccountCreator}
     * * using the helperUrl with {@link UrlAccountCreator}
     * @see {@link NearConfig.masterAccount} and {@link NearConfig.helperUrl}-
     *
     * @param accountId
     * @param publicKey
     */ async createAccount(accountId, publicKey) {
        if (!this.accountCreator) throw new Error('Must specify account creator, either via masterAccount or helperUrl configuration settings.');
        await this.accountCreator.createAccount(accountId, publicKey);
        return new account_1.Account(this.connection, accountId);
    }
    /**
     * @deprecated Use {@link Contract} instead.
     * @param contractId
     * @param options
     */ async loadContract(contractId, options) {
        const account = new account_1.Account(this.connection, options.sender);
        return new contract_1.Contract(account, contractId, options);
    }
    /**
     * @deprecated Use {@link Account.sendMoney} instead.
     * @param amount
     * @param originator
     * @param receiver
     */ async sendTokens(amount, originator, receiver) {
        console.warn('near.sendTokens is deprecated. Use `yourAccount.sendMoney` instead.');
        const account = new account_1.Account(this.connection, originator);
        const result = await account.sendMoney(receiver, amount);
        return result.transaction_outcome.id;
    }
}
exports.Near = Near;

},{"bn.js":"VopIn","./account":"hxSQV","./connection":"3ThJM","./contract":"guo0T","./account_creator":"aQbxV"}],"dHM3Z":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectedWalletAccount = exports.WalletAccount = exports.WalletConnection = void 0;
/**
 * The classes in this module are used in conjunction with the {@link BrowserLocalStorageKeyStore}. This module exposes two classes:
 * * {@link WalletConnection} which redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 * * {@link ConnectedWalletAccount} is an {@link Account} implementation that uses {@link WalletConnection} to get keys
 *
 * @module walletAccount
 */ const depd_1 = __importDefault(require("depd"));
const account_1 = require("./account");
const transaction_1 = require("./transaction");
const utils_1 = require("./utils");
const borsh_1 = require("borsh");
const borsh_2 = require("borsh");
const LOGIN_WALLET_URL_SUFFIX = '/login/';
const MULTISIG_HAS_METHOD = 'add_request_and_confirm';
const LOCAL_STORAGE_KEY_SUFFIX = '_wallet_auth_key';
const PENDING_ACCESS_KEY_PREFIX = 'pending_key'; // browser storage key for a pending access key (i.e. key has been generated but we are not sure it was added yet)
/**
 * This class is used in conjunction with the {@link BrowserLocalStorageKeyStore}.
 * It redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#wallet}
 * @example
 * ```js
 * // create new WalletConnection instance
 * const wallet = new WalletConnection(near, 'my-app');
 *
 * // If not signed in redirect to the NEAR wallet to sign in
 * // keys will be stored in the BrowserLocalStorageKeyStore
 * if(!wallet.isSingnedIn()) return wallet.requestSignIn()
 * ```
 */ class WalletConnection {
    constructor(near, appKeyPrefix){
        this._near = near;
        const authDataKey = appKeyPrefix + LOCAL_STORAGE_KEY_SUFFIX;
        const authData = JSON.parse(window.localStorage.getItem(authDataKey));
        this._networkId = near.config.networkId;
        this._walletBaseUrl = near.config.walletUrl;
        appKeyPrefix = appKeyPrefix || near.config.contractName || 'default';
        this._keyStore = near.connection.signer.keyStore;
        this._authData = authData || {
            allKeys: []
        };
        this._authDataKey = authDataKey;
        if (!this.isSignedIn()) this._completeSignInWithAccessKey();
    }
    /**
     * Returns true, if this WalletAccount is authorized with the wallet.
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * wallet.isSignedIn();
     * ```
     */ isSignedIn() {
        return !!this._authData.accountId;
    }
    /**
     * Returns authorized Account ID.
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * wallet.getAccountId();
     * ```
     */ getAccountId() {
        return this._authData.accountId || '';
    }
    /**
     * Redirects current page to the wallet authentication page.
     * @param options An optional options object
     * @param options.contractId The NEAR account where the contract is deployed
     * @param options.successUrl URL to redirect upon success. Default: current url
     * @param options.failureUrl URL to redirect upon failure. Default: current url
     *
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * // redirects to the NEAR Wallet
     * wallet.requestSignIn({ contractId: 'account-with-deploy-contract.near' });
     * ```
     */ async requestSignIn(contractIdOrOptions = {}, title, successUrl, failureUrl) {
        let options;
        if (typeof contractIdOrOptions === 'string') {
            const deprecate = depd_1.default('requestSignIn(contractId, title)');
            deprecate('`title` ignored; use `requestSignIn({ contractId, methodNames, successUrl, failureUrl })` instead');
            options = {
                contractId: contractIdOrOptions,
                successUrl,
                failureUrl
            };
        } else options = contractIdOrOptions;
        const currentUrl = new URL(window.location.href);
        const newUrl = new URL(this._walletBaseUrl + LOGIN_WALLET_URL_SUFFIX);
        newUrl.searchParams.set('success_url', options.successUrl || currentUrl.href);
        newUrl.searchParams.set('failure_url', options.failureUrl || currentUrl.href);
        if (options.contractId) {
            /* Throws exception if contract account does not exist */ const contractAccount = await this._near.account(options.contractId);
            await contractAccount.state();
            newUrl.searchParams.set('contract_id', options.contractId);
            const accessKey = utils_1.KeyPair.fromRandom('ed25519');
            newUrl.searchParams.set('public_key', accessKey.getPublicKey().toString());
            await this._keyStore.setKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + accessKey.getPublicKey(), accessKey);
        }
        if (options.methodNames) options.methodNames.forEach((methodName)=>{
            newUrl.searchParams.append('methodNames', methodName);
        });
        window.location.assign(newUrl.toString());
    }
    async requestSignTransactions(...args) {
        if (Array.isArray(args[0])) {
            const deprecate = depd_1.default('WalletConnection.requestSignTransactions(transactions, callbackUrl, meta)');
            deprecate('use `WalletConnection.requestSignTransactions(RequestSignTransactionsOptions)` instead');
            return this._requestSignTransactions({
                transactions: args[0],
                callbackUrl: args[1],
                meta: args[2]
            });
        }
        return this._requestSignTransactions(args[0]);
    }
    async _requestSignTransactions({ transactions , meta , callbackUrl  }) {
        const currentUrl = new URL(window.location.href);
        const newUrl = new URL('sign', this._walletBaseUrl);
        newUrl.searchParams.set('transactions', transactions.map((transaction)=>borsh_2.serialize(transaction_1.SCHEMA, transaction)
        ).map((serialized)=>Buffer.from(serialized).toString('base64')
        ).join(','));
        newUrl.searchParams.set('callbackUrl', callbackUrl || currentUrl.href);
        if (meta) newUrl.searchParams.set('meta', meta);
        window.location.assign(newUrl.toString());
    }
    /**
     * @hidden
     * Complete sign in for a given account id and public key. To be invoked by the app when getting a callback from the wallet.
     */ async _completeSignInWithAccessKey() {
        const currentUrl = new URL(window.location.href);
        const publicKey = currentUrl.searchParams.get('public_key') || '';
        const allKeys = (currentUrl.searchParams.get('all_keys') || '').split(',');
        const accountId = currentUrl.searchParams.get('account_id') || '';
        // TODO: Handle errors during login
        if (accountId) {
            this._authData = {
                accountId,
                allKeys
            };
            window.localStorage.setItem(this._authDataKey, JSON.stringify(this._authData));
            if (publicKey) await this._moveKeyFromTempToPermanent(accountId, publicKey);
        }
        currentUrl.searchParams.delete('public_key');
        currentUrl.searchParams.delete('all_keys');
        currentUrl.searchParams.delete('account_id');
        currentUrl.searchParams.delete('meta');
        currentUrl.searchParams.delete('transactionHashes');
        window.history.replaceState({}, document.title, currentUrl.toString());
    }
    /**
     * @hidden
     * @param accountId The NEAR account owning the given public key
     * @param publicKey The public key being set to the key store
     */ async _moveKeyFromTempToPermanent(accountId, publicKey) {
        const keyPair = await this._keyStore.getKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);
        await this._keyStore.setKey(this._networkId, accountId, keyPair);
        await this._keyStore.removeKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);
    }
    /**
     * Sign out from the current account
     * @example
     * walletAccount.signOut();
     */ signOut() {
        this._authData = {};
        window.localStorage.removeItem(this._authDataKey);
    }
    /**
     * Returns the current connected wallet account
     */ account() {
        if (!this._connectedAccount) this._connectedAccount = new ConnectedWalletAccount(this, this._near.connection, this._authData.accountId);
        return this._connectedAccount;
    }
}
exports.WalletConnection = WalletConnection;
exports.WalletAccount = WalletConnection;
/**
 * {@link Account} implementation which redirects to wallet using {@link WalletConnection} when no local key is available.
 */ class ConnectedWalletAccount extends account_1.Account {
    constructor(walletConnection, connection, accountId){
        super(connection, accountId);
        this.walletConnection = walletConnection;
    }
    // Overriding Account methods
    /**
     * Sign a transaction by redirecting to the NEAR Wallet
     * @see {@link WalletConnection.requestSignTransactions}
     */ signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') return this._signAndSendTransaction({
            receiverId: args[0],
            actions: args[1]
        });
        return this._signAndSendTransaction(args[0]);
    }
    async _signAndSendTransaction({ receiverId , actions , walletMeta , walletCallbackUrl =window.location.href  }) {
        const localKey = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
        let accessKey = await this.accessKeyForTransaction(receiverId, actions, localKey);
        if (!accessKey) throw new Error(`Cannot find matching key for transaction sent to ${receiverId}`);
        if (localKey && localKey.toString() === accessKey.public_key) try {
            return await super.signAndSendTransaction({
                receiverId,
                actions
            });
        } catch (e) {
            if (e.type === 'NotEnoughAllowance') accessKey = await this.accessKeyForTransaction(receiverId, actions);
            else throw e;
        }
        const block = await this.connection.provider.block({
            finality: 'final'
        });
        const blockHash = borsh_1.baseDecode(block.header.hash);
        const publicKey = utils_1.PublicKey.from(accessKey.public_key);
        // TODO: Cache & listen for nonce updates for given access key
        const nonce = accessKey.access_key.nonce + 1;
        const transaction = transaction_1.createTransaction(this.accountId, publicKey, receiverId, nonce, actions, blockHash);
        await this.walletConnection.requestSignTransactions({
            transactions: [
                transaction
            ],
            meta: walletMeta,
            callbackUrl: walletCallbackUrl
        });
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject(new Error('Failed to redirect to sign transaction'));
            }, 1000);
        });
    // TODO: Aggregate multiple transaction request with "debounce".
    // TODO: Introduce TrasactionQueue which also can be used to watch for status?
    }
    /**
     * Check if given access key allows the function call or method attempted in transaction
     * @param accessKey Array of {access_key: AccessKey, public_key: PublicKey} items
     * @param receiverId The NEAR account attempting to have access
     * @param actions The action(s) needed to be checked for access
     */ async accessKeyMatchesTransaction(accessKey, receiverId, actions) {
        const { access_key: { permission  }  } = accessKey;
        if (permission === 'FullAccess') return true;
        if (permission.FunctionCall) {
            const { receiver_id: allowedReceiverId , method_names: allowedMethods  } = permission.FunctionCall;
            /********************************
            Accept multisig access keys and let wallets attempt to signAndSendTransaction
            If an access key has itself as receiverId and method permission add_request_and_confirm, then it is being used in a wallet with multisig contract: https://github.com/near/core-contracts/blob/671c05f09abecabe7a7e58efe942550a35fc3292/multisig/src/lib.rs#L149-L153
            ********************************/ if (allowedReceiverId === this.accountId && allowedMethods.includes(MULTISIG_HAS_METHOD)) return true;
            if (allowedReceiverId === receiverId) {
                if (actions.length !== 1) return false;
                const [{ functionCall  }] = actions;
                return functionCall && (!functionCall.deposit || functionCall.deposit.toString() === '0') && (allowedMethods.length === 0 || allowedMethods.includes(functionCall.methodName));
            // TODO: Handle cases when allowance doesn't have enough to pay for gas
            }
        }
        // TODO: Support other permissions than FunctionCall
        return false;
    }
    /**
     * Helper function returning the access key (if it exists) to the receiver that grants the designated permission
     * @param receiverId The NEAR account seeking the access key for a transaction
     * @param actions The action(s) sought to gain access to
     * @param localKey A local public key provided to check for access
     * @returns Promise<any>
     */ async accessKeyForTransaction(receiverId, actions, localKey) {
        const accessKeys = await this.getAccessKeys();
        if (localKey) {
            const accessKey = accessKeys.find((key)=>key.public_key.toString() === localKey.toString()
            );
            if (accessKey && await this.accessKeyMatchesTransaction(accessKey, receiverId, actions)) return accessKey;
        }
        const walletKeys = this.walletConnection._authData.allKeys;
        for (const accessKey of accessKeys){
            if (walletKeys.indexOf(accessKey.public_key) !== -1 && await this.accessKeyMatchesTransaction(accessKey, receiverId, actions)) return accessKey;
        }
        return null;
    }
}
exports.ConnectedWalletAccount = ConnectedWalletAccount;

},{"buffer":"fCgem","depd":"2jGeI","./account":"hxSQV","./transaction":"jJQ5a","./utils":"jOCMH","borsh":"4JCmN"}],"7yTE6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = void 0;
/**
 * Connect to NEAR using the provided configuration.
 *
 * {@link ConnectConfig.networkId} and {@link ConnectConfig.nodeUrl} are required.
 *
 * To sign transactions you can also pass: {@link ConnectConfig.keyStore}
 *
 * Both are passed they are prioritize in that order.
 *
 * @see {@link ConnectConfig}
 * @example
 * ```js
 * async function initNear() {
 *   const near = await connect({
 *      networkId: 'testnet',
 *      nodeUrl: 'https://rpc.testnet.near.org'
 *   })
 * }
 * ```
 *
 * @module browserConnect
 */ const near_1 = require("./near");
/**
 * Initialize connection to Near network.
 */ async function connect(config) {
    return new near_1.Near(config);
}
exports.connect = connect;

},{"./near":"9Ying"}],"2YFhR":[function(require,module,exports) {
module.exports = require("./lib");

},{"./lib":"hDD9L"}],"hDD9L":[function(require,module,exports) {
require("capability/es5");
var capability = require("capability");
var polyfill;
if (capability("Error.captureStackTrace")) polyfill = require("./v8");
else if (capability("Error.prototype.stack")) polyfill = require("./non-v8/index");
else polyfill = require("./unsupported");
module.exports = polyfill();

},{"capability/es5":"5bger","capability":"45xjX","./v8":"a0VmX","./non-v8/index":"dx0bf","./unsupported":"75e5c"}],"5bger":[function(require,module,exports) {
require(".").check("es5");

},{".":"45xjX"}],"45xjX":[function(require,module,exports) {
require("./lib/definitions");
module.exports = require("./lib");

},{"./lib/definitions":"k0u9C","./lib":"4EqFb"}],"k0u9C":[function(require,module,exports) {
var capability = require("."), define = capability.define, test = capability.test;
define("strict mode", function() {
    return this === undefined;
});
define("arguments.callee.caller", function() {
    try {
        return function() {
            return arguments.callee.caller;
        }() === arguments.callee;
    } catch (strictModeIsEnforced) {
        return false;
    }
});
define("es5", function() {
    return test("Array.prototype.forEach") && test("Array.prototype.map") && test("Function.prototype.bind") && test("Object.create") && test("Object.defineProperties") && test("Object.defineProperty") && test("Object.prototype.hasOwnProperty");
});
define("Array.prototype.forEach", function() {
    return Array.prototype.forEach;
});
define("Array.prototype.map", function() {
    return Array.prototype.map;
});
define("Function.prototype.bind", function() {
    return Function.prototype.bind;
});
define("Object.create", function() {
    return Object.create;
});
define("Object.defineProperties", function() {
    return Object.defineProperties;
});
define("Object.defineProperty", function() {
    return Object.defineProperty;
});
define("Object.prototype.hasOwnProperty", function() {
    return Object.prototype.hasOwnProperty;
});
define("Error.captureStackTrace", function() {
    return Error.captureStackTrace;
});
define("Error.prototype.stack", function() {
    try {
        throw new Error();
    } catch (e) {
        return e.stack || e.stacktrace;
    }
});

},{".":"4EqFb"}],"4EqFb":[function(require,module,exports) {
var CapabilityDetector = require("./CapabilityDetector");
var detector = new CapabilityDetector();
var capability = function(name) {
    return detector.test(name);
};
capability.define = function(name, test) {
    detector.define(name, test);
};
capability.check = function(name) {
    detector.check(name);
};
capability.test = capability;
module.exports = capability;

},{"./CapabilityDetector":"csHRg"}],"csHRg":[function(require,module,exports) {
var CapabilityDetector = function() {
    this.tests = {};
    this.cache = {};
};
CapabilityDetector.prototype = {
    constructor: CapabilityDetector,
    define: function(name, test) {
        if (typeof name != "string" || !(test instanceof Function)) throw new Error("Invalid capability definition.");
        if (this.tests[name]) throw new Error('Duplicated capability definition by "' + name + '".');
        this.tests[name] = test;
    },
    check: function(name) {
        if (!this.test(name)) throw new Error('The current environment does not support "' + name + '", therefore we cannot continue.');
    },
    test: function(name) {
        if (this.cache[name] !== undefined) return this.cache[name];
        if (!this.tests[name]) throw new Error('Unknown capability with name "' + name + '".');
        var test = this.tests[name];
        this.cache[name] = !!test();
        return this.cache[name];
    }
};
module.exports = CapabilityDetector;

},{}],"a0VmX":[function(require,module,exports) {
var prepareStackTrace = require("./prepareStackTrace");
module.exports = function() {
    Error.getStackTrace = function(throwable) {
        return throwable.stack;
    };
    return {
        prepareStackTrace: prepareStackTrace
    };
};

},{"./prepareStackTrace":"85RZD"}],"85RZD":[function(require,module,exports) {
var prepareStackTrace = function(throwable, frames, warnings) {
    var string = "";
    string += throwable.name || "Error";
    string += ": " + (throwable.message || "");
    if (warnings instanceof Array) for(var warningIndex in warnings){
        var warning = warnings[warningIndex];
        string += "\n   # " + warning;
    }
    for(var frameIndex in frames){
        var frame = frames[frameIndex];
        string += "\n   at " + frame.toString();
    }
    return string;
};
module.exports = prepareStackTrace;

},{}],"dx0bf":[function(require,module,exports) {
var FrameStringSource = require("./FrameStringSource"), FrameStringParser = require("./FrameStringParser"), cache = require("u3").cache, prepareStackTrace = require("../prepareStackTrace");
module.exports = function() {
    Error.captureStackTrace = function captureStackTrace(throwable, terminator) {
        var warnings;
        var frameShifts = [
            captureStackTrace
        ];
        if (terminator) // additional frames can come here if arguments.callee.caller is supported
        // otherwise it is hard to identify the terminator
        frameShifts.push(terminator);
        var captured = FrameStringSource.getInstance().captureFrameStrings(frameShifts);
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function() {
                    var frames = FrameStringParser.getInstance().getFrames(captured.frameStrings, captured.functionValues);
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };
    Error.getStackTrace = function(throwable) {
        if (throwable.cachedStack) return throwable.stack;
        var frameStrings = FrameStringSource.getInstance().getFrameStrings(throwable), frames = [], warnings;
        if (frameStrings) frames = FrameStringParser.getInstance().getFrames(frameStrings, []);
        else warnings = [
            "The stack is not readable by unthrown errors in this environment."
        ];
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
        if (frameStrings) try {
            Object.defineProperties(throwable, {
                stack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: stack
                },
                cachedStack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: true
                }
            });
        } catch (nonConfigurableError) {}
        return stack;
    };
    return {
        prepareStackTrace: prepareStackTrace
    };
};

},{"./FrameStringSource":"8enMo","./FrameStringParser":"kqj4M","u3":"dIyaj","../prepareStackTrace":"85RZD"}],"8enMo":[function(require,module,exports) {
var Class = require("o3").Class, abstractMethod = require("o3").abstractMethod, eachCombination = require("u3").eachCombination, cache = require("u3").cache, capability = require("capability");
var AbstractFrameStringSource = Class(Object, {
    prototype: {
        captureFrameStrings: function(frameShifts) {
            var error = this.createError();
            frameShifts.unshift(this.captureFrameStrings);
            frameShifts.unshift(this.createError);
            var capturedFrameStrings = this.getFrameStrings(error);
            var frameStrings = capturedFrameStrings.slice(frameShifts.length), functionValues = [];
            if (capability("arguments.callee.caller")) {
                var capturedFunctionValues = [
                    this.createError,
                    this.captureFrameStrings
                ];
                try {
                    var aCaller = arguments.callee;
                    while(aCaller = aCaller.caller)capturedFunctionValues.push(aCaller);
                } catch (useStrictError) {}
                functionValues = capturedFunctionValues.slice(frameShifts.length);
            }
            return {
                frameStrings: frameStrings,
                functionValues: functionValues
            };
        },
        getFrameStrings: function(error) {
            var message = error.message || "";
            var name = error.name || "";
            var stackString = this.getStackString(error);
            if (stackString === undefined) return;
            var stackStringChunks = stackString.split("\n");
            var fromPosition = 0;
            var toPosition = stackStringChunks.length;
            if (this.hasHeader) fromPosition += name.split("\n").length + message.split("\n").length - 1;
            if (this.hasFooter) toPosition -= 1;
            return stackStringChunks.slice(fromPosition, toPosition);
        },
        createError: abstractMethod,
        getStackString: abstractMethod,
        hasHeader: undefined,
        hasFooter: undefined
    }
});
var FrameStringSourceCalibrator = Class(Object, {
    prototype: {
        calibrateClass: function(FrameStringSource) {
            return this.calibrateMethods(FrameStringSource) && this.calibrateEnvelope(FrameStringSource);
        },
        calibrateMethods: function(FrameStringSource) {
            try {
                eachCombination([
                    [
                        function(message) {
                            return new Error(message);
                        },
                        function(message) {
                            try {
                                throw new Error(message);
                            } catch (error) {
                                return error;
                            }
                        }
                    ],
                    [
                        function(error) {
                            return error.stack;
                        },
                        function(error) {
                            return error.stacktrace;
                        }
                    ]
                ], function(createError, getStackString) {
                    if (getStackString(createError())) throw {
                        getStackString: getStackString,
                        createError: createError
                    };
                });
            } catch (workingImplementation) {
                Class.merge.call(FrameStringSource, {
                    prototype: workingImplementation
                });
                return true;
            }
            return false;
        },
        calibrateEnvelope: function(FrameStringSource) {
            var getStackString = FrameStringSource.prototype.getStackString;
            var createError = FrameStringSource.prototype.createError;
            var calibratorStackString = getStackString(createError("marker"));
            var calibratorFrameStrings = calibratorStackString.split("\n");
            Class.merge.call(FrameStringSource, {
                prototype: {
                    hasHeader: /marker/.test(calibratorFrameStrings[0]),
                    hasFooter: calibratorFrameStrings[calibratorFrameStrings.length - 1] === ""
                }
            });
            return true;
        }
    }
});
module.exports = {
    getClass: cache(function() {
        var FrameStringSource;
        if (FrameStringSource) return FrameStringSource;
        FrameStringSource = Class(AbstractFrameStringSource, {});
        var calibrator = new FrameStringSourceCalibrator();
        if (!calibrator.calibrateClass(FrameStringSource)) throw new Error("Cannot read Error.prototype.stack in this environment.");
        return FrameStringSource;
    }),
    getInstance: cache(function() {
        var FrameStringSource = this.getClass();
        var instance = new FrameStringSource();
        return instance;
    })
};

},{"o3":"gP4B7","u3":"dIyaj","capability":"45xjX"}],"gP4B7":[function(require,module,exports) {
require("capability/es5");
module.exports = require("./lib");

},{"capability/es5":"5bger","./lib":"eoeZx"}],"eoeZx":[function(require,module,exports) {
module.exports = {
    Class: require("./Class"),
    abstractMethod: require("./abstractMethod")
};

},{"./Class":"k4Z0U","./abstractMethod":"d1LMy"}],"k4Z0U":[function(require,module,exports) {
var Class = function() {
    var options = Object.create({
        Source: Object,
        config: {},
        buildArgs: []
    });
    function checkOption(option) {
        var key = "config";
        if (option instanceof Function) key = "Source";
        else if (option instanceof Array) key = "buildArgs";
        else if (option instanceof Object) key = "config";
        else throw new Error("Invalid configuration option.");
        if (options.hasOwnProperty(key)) throw new Error("Duplicated configuration option: " + key + ".");
        options[key] = option;
    }
    for(var index = 0, length = arguments.length; index < length; ++index)checkOption(arguments[index]);
    var Source = options.Source, config = options.config, buildArgs = options.buildArgs;
    return (Source.extend || Class.extend).call(Source, config, buildArgs);
};
Class.factory = function() {
    var Source = this;
    return function() {
        var instance = this;
        if (instance.build instanceof Function) instance.build.apply(instance, arguments);
        if (instance.init instanceof Function) instance.init.apply(instance, arguments);
    };
};
Class.extend = function(config, buildArgs) {
    var Source = this;
    if (!config) config = {};
    var Subject;
    if (config.prototype instanceof Object && config.prototype.constructor !== Object) Subject = config.prototype.constructor;
    else if (config.factory instanceof Function) Subject = config.factory.call(Source);
    Subject = (Source.clone || Class.clone).call(Source, Subject, buildArgs);
    (Subject.merge || Class.merge).call(Subject, config);
    return Subject;
};
Class.prototype.extend = function(config, buildArgs) {
    var subject = this;
    var instance = (subject.clone || Class.prototype.clone).apply(subject, buildArgs);
    (instance.merge || Class.prototype.merge).call(instance, config);
    return instance;
};
Class.clone = function(Subject, buildArgs) {
    var Source = this;
    if (!(Subject instanceof Function)) Subject = (Source.factory || Class.factory).call(Source);
    Subject.prototype = (Source.prototype.clone || Class.prototype.clone).apply(Source.prototype, buildArgs || []);
    Subject.prototype.constructor = Subject;
    for(var staticProperty in Source)if (staticProperty !== "prototype") Subject[staticProperty] = Source[staticProperty];
    return Subject;
};
Class.prototype.clone = function() {
    var subject = this;
    var instance = Object.create(subject);
    if (instance.build instanceof Function) instance.build.apply(instance, arguments);
    return instance;
};
Class.merge = function(config) {
    var Subject = this;
    for(var staticProperty in config)if (staticProperty !== "prototype") Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object) (Subject.prototype.merge || Class.prototype.merge).call(Subject.prototype, config.prototype);
    return Subject;
};
Class.prototype.merge = function(config) {
    var subject = this;
    for(var property in config)if (property !== "constructor") subject[property] = config[property];
    return subject;
};
Class.absorb = function(config) {
    var Subject = this;
    for(var staticProperty in config)if (staticProperty !== "prototype" && (Subject[staticProperty] === undefined || Subject[staticProperty] === Function.prototype[staticProperty])) Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object) (Subject.prototype.absorb || Class.prototype.absorb).call(Subject.prototype, config.prototype);
    return Subject;
};
Class.prototype.absorb = function(config) {
    var subject = this;
    for(var property in config)if (property !== "constructor" && (subject[property] === undefined || subject[property] === Object.prototype[property])) subject[property] = config[property];
    return subject;
};
Class.getAncestor = function() {
    var Source = this;
    if (Source !== Source.prototype.constructor) return Source.prototype.constructor;
};
Class.newInstance = function() {
    var Subject = this;
    var instance = Object.create(this.prototype);
    Subject.apply(instance, arguments);
    return instance;
};
module.exports = Class;

},{}],"d1LMy":[function(require,module,exports) {
module.exports = function() {
    throw new Error("Not implemented.");
};

},{}],"dIyaj":[function(require,module,exports) {
module.exports = require("./lib");

},{"./lib":"9JH8M"}],"9JH8M":[function(require,module,exports) {
module.exports = {
    cache: require("./cache"),
    eachCombination: require("./eachCombination")
};

},{"./cache":"3mu2N","./eachCombination":"i1liH"}],"3mu2N":[function(require,module,exports) {
var cache = function(fn) {
    var called = false, store;
    if (!(fn instanceof Function)) {
        called = true;
        store = fn;
        fn = null;
    }
    return function() {
        if (!called) {
            called = true;
            store = fn.apply(this, arguments);
            fn = null;
        }
        return store;
    };
};
module.exports = cache;

},{}],"i1liH":[function(require,module,exports) {
module.exports = function eachCombination(alternativesByDimension, callback, combination) {
    if (!combination) combination = [];
    if (combination.length < alternativesByDimension.length) {
        var alternatives = alternativesByDimension[combination.length];
        for(var index in alternatives){
            combination[combination.length] = alternatives[index];
            eachCombination(alternativesByDimension, callback, combination);
            --combination.length;
        }
    } else callback.apply(null, combination);
};

},{}],"kqj4M":[function(require,module,exports) {
var Class = require("o3").Class, Frame = require("./Frame"), cache = require("u3").cache;
var FrameStringParser = Class(Object, {
    prototype: {
        stackParser: null,
        frameParser: null,
        locationParsers: null,
        constructor: function(options) {
            Class.prototype.merge.call(this, options);
        },
        getFrames: function(frameStrings, functionValues) {
            var frames = [];
            for(var index = 0, length = frameStrings.length; index < length; ++index)frames[index] = this.getFrame(frameStrings[index], functionValues[index]);
            return frames;
        },
        getFrame: function(frameString, functionValue) {
            var config = {
                frameString: frameString,
                functionValue: functionValue
            };
            return new Frame(config);
        }
    }
});
module.exports = {
    getClass: cache(function() {
        return FrameStringParser;
    }),
    getInstance: cache(function() {
        var FrameStringParser1 = this.getClass();
        var instance = new FrameStringParser1();
        return instance;
    })
};

},{"o3":"gP4B7","./Frame":"gHN0E","u3":"dIyaj"}],"gHN0E":[function(require,module,exports) {
var Class = require("o3").Class, abstractMethod = require("o3").abstractMethod;
var Frame = Class(Object, {
    prototype: {
        init: Class.prototype.merge,
        frameString: undefined,
        toString: function() {
            return this.frameString;
        },
        functionValue: undefined,
        getThis: abstractMethod,
        getTypeName: abstractMethod,
        getFunction: function() {
            return this.functionValue;
        },
        getFunctionName: abstractMethod,
        getMethodName: abstractMethod,
        getFileName: abstractMethod,
        getLineNumber: abstractMethod,
        getColumnNumber: abstractMethod,
        getEvalOrigin: abstractMethod,
        isTopLevel: abstractMethod,
        isEval: abstractMethod,
        isNative: abstractMethod,
        isConstructor: abstractMethod
    }
});
module.exports = Frame;

},{"o3":"gP4B7"}],"75e5c":[function(require,module,exports) {
var cache = require("u3").cache, prepareStackTrace = require("./prepareStackTrace");
module.exports = function() {
    Error.captureStackTrace = function(throwable, terminator) {
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function() {
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };
    Error.getStackTrace = function(throwable) {
        if (throwable.cachedStack) return throwable.stack;
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
        try {
            Object.defineProperties(throwable, {
                stack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: stack
                },
                cachedStack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: true
                }
            });
        } catch (nonConfigurableError) {}
        return stack;
    };
    return {
        prepareStackTrace: prepareStackTrace
    };
};

},{"u3":"dIyaj","./prepareStackTrace":"85RZD"}],"8vJOg":[function(require,module,exports) {
const component_config = require('./component_config.js');
const sel_l_0 = document.getElementById('sel_l_0');
const sel_l_1 = document.getElementById('sel_l_1');
const sel_l_2 = document.getElementById('sel_l_2');
const sel_l_3 = document.getElementById('sel_l_3');
const sel_r_0 = document.getElementById('sel_r_0');
const sel_r_1 = document.getElementById('sel_r_1');
const sel_r_2 = document.getElementById('sel_r_2');
const sel_r_3 = document.getElementById('sel_r_3');
module.exports = class MONSTER_CONSTRUCTOR {
    constructor(){
        this.canvas = document.getElementById('monster');
        this.ctx = this.canvas.getContext('2d');
        this.sprites = {};
        this.robot = {};
        sel_l_0.onclick = ()=>{
            this.prev('eye');
            this.draw();
        };
        sel_l_1.onclick = ()=>{
            this.prev('arm');
            this.draw();
        };
        sel_l_2.onclick = ()=>{
            this.prev('body');
            this.draw();
        };
        sel_l_3.onclick = ()=>{
            this.prev('leg');
            this.draw();
        };
        sel_r_0.onclick = ()=>{
            this.next('eye');
            this.draw();
        };
        sel_r_1.onclick = ()=>{
            this.next('arm');
            this.draw();
        };
        sel_r_2.onclick = ()=>{
            this.next('body');
            this.draw();
        };
        sel_r_3.onclick = ()=>{
            this.next('leg');
            this.draw();
        };
    }
    async setToken(token) {
        sel_l_0.style.visibility = 'hidden';
        sel_l_1.style.visibility = 'hidden';
        sel_l_2.style.visibility = 'hidden';
        sel_l_3.style.visibility = 'hidden';
        sel_r_0.style.visibility = 'hidden';
        sel_r_1.style.visibility = 'hidden';
        sel_r_2.style.visibility = 'hidden';
        sel_r_3.style.visibility = 'hidden';
        const url = token.metadata.media;
        const image = await MONSTER_CONSTRUCTOR.addImageProcess(url);
        this.ctx.drawImage(image, 0, 0);
        document.getElementById('header').innerHTML = `Your NFT monster`;
    }
    next(name) {
        const length = Object.keys(this.sprites[name]).length;
        this.robot[name] += 1;
        if (this.robot[name] >= length) this.robot[name] = 0;
    }
    prev(name) {
        const length = Object.keys(this.sprites[name]).length;
        this.robot[name] -= 1;
        if (this.robot[name] < 0) this.robot[name] = length - 1;
    }
    async load() {
        console.log(component_config);
        for(const key in component_config){
            this.sprites[key] = {};
            this.robot[key] = 0;
            for(const spriteName in component_config[key].sprites)this.sprites[key][spriteName] = await MONSTER_CONSTRUCTOR.addImageProcess(component_config[key].sprites[spriteName]);
        }
    // const eyeImage = await ROBOT_CONSTRUCTOR.addImageProcess(require('./eye.png'));
    // this.robot = await ROBOT_CONSTRUCTOR.addImageProcess(require('./robot.png'));
    // this.rightEye = new EYE(this.ctx, 155, 80, eyeImage);
    // this.leftEye = new EYE(this.ctx, 210, 80, eyeImage);
    // this.isLoaded = true;
    // this.componentImage
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(const componentName in this.robot){
            const nameSprite = Object.keys(this.sprites[componentName])[this.robot[componentName]];
            const image = this.sprites[componentName][nameSprite];
            const isDouble = component_config[componentName].isDouble;
            if (isDouble) {
                //this.ctx.drawImage(image, component_config[componentName].coords.x - image.width/2, component_config[componentName].coords.y);
                this.ctx.save();
                this.ctx.translate(component_config[componentName].coords.x + image.width / 2, component_config[componentName].coords.y);
                this.ctx.scale(-1, 1);
                this.ctx.drawImage(image, 0, 0);
                this.ctx.restore();
                this.ctx.drawImage(image, this.canvas.width - component_config[componentName].coords.x - image.width / 2, component_config[componentName].coords.y);
            } else this.ctx.drawImage(image, component_config[componentName].coords.x - image.width / 2, component_config[componentName].coords.y);
        }
    }
    static addImageProcess(src, width, height) {
        return new Promise((resolve, reject)=>{
            let img = new Image(width, height);
            img.onload = ()=>resolve(img)
            ;
            img.onerror = (err)=>reject(err)
            ;
            img.src = src;
        });
    }
};

},{"./component_config.js":"2gAdD"}],"2gAdD":[function(require,module,exports) {
module.exports = {
    body: {
        coords: {
            x: 200,
            y: 90
        },
        sprites: {
            body_blueA: require('./assets/body_blueA.png'),
            body_blueB: require('./assets/body_blueB.png'),
            body_blueC: require('./assets/body_blueC.png'),
            body_blueD: require('./assets/body_blueD.png')
        }
    },
    leg: {
        coords: {
            x: 140,
            y: 250
        },
        isDouble: true,
        sprites: {
            leg_blueA: require('./assets/leg_blueA.png'),
            leg_blueB: require('./assets/leg_blueB.png'),
            leg_blueC: require('./assets/leg_blueC.png'),
            leg_blueD: require('./assets/leg_blueD.png')
        }
    },
    arm: {
        coords: {
            x: 100,
            y: 130
        },
        isDouble: true,
        sprites: {
            arm_blueA: require('./assets/arm_blueA.png'),
            arm_blueB: require('./assets/arm_blueB.png'),
            arm_blueC: require('./assets/arm_blueC.png'),
            arm_blueD: require('./assets/arm_blueD.png')
        }
    },
    eye: {
        coords: {
            x: 150,
            y: 130
        },
        isDouble: true,
        sprites: {
            eye_closed_feminine: require('./assets/eye_closed_feminine.png'),
            eye_angry_blue: require('./assets/eye_angry_blue.png'),
            eye_closed_happy: require('./assets/eye_closed_happy.png'),
            eye_human_red: require('./assets/eye_human_red.png')
        }
    }
};

},{"./assets/body_blueA.png":"1aK4o","./assets/body_blueB.png":"8B7cj","./assets/body_blueC.png":"jS7AY","./assets/body_blueD.png":"dOv0q","./assets/leg_blueA.png":"j2cwO","./assets/leg_blueB.png":"ieIsL","./assets/leg_blueC.png":"4pW1T","./assets/leg_blueD.png":"als2c","./assets/arm_blueA.png":"7qQiv","./assets/arm_blueB.png":"j8jLt","./assets/arm_blueC.png":"17cYw","./assets/arm_blueD.png":"ifw98","./assets/eye_closed_feminine.png":"aWfVj","./assets/eye_angry_blue.png":"dNBVf","./assets/eye_closed_happy.png":"7rb5s","./assets/eye_human_red.png":"f4OrL"}],"1aK4o":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "body_blueA.19a56f37.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8B7cj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "body_blueB.2d1a1be1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jS7AY":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "body_blueC.165135a4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dOv0q":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "body_blueD.ecba801d.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j2cwO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "leg_blueA.07ec7fb2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ieIsL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "leg_blueB.75bef7ad.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4pW1T":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "leg_blueC.20d42263.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"als2c":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "leg_blueD.c77d524a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7qQiv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "arm_blueA.f4d1e234.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j8jLt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "arm_blueB.76fff01a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"17cYw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "arm_blueC.b6660c9e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ifw98":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "arm_blueD.2bb3aa31.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aWfVj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "eye_closed_feminine.d2265adf.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dNBVf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "eye_angry_blue.184d9a44.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7rb5s":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "eye_closed_happy.550b19e4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"f4OrL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "eye_human_red.c3ae220a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jp7eb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Blob", ()=>Blob$1
);
parcelHelpers.export(exports, "File", ()=>File
);
parcelHelpers.export(exports, "Web3Storage", ()=>Web3Storage
);
parcelHelpers.export(exports, "createRateLimiter", ()=>createRateLimiter
);
parcelHelpers.export(exports, "filesFromPath", ()=>filesFromPath
);
parcelHelpers.export(exports, "getFilesFromPath", ()=>getFilesFromPath
);
var global = arguments[3];
function getIterator(e11) {
    if ("function" == typeof e11.next) return e11;
    if ("function" == typeof e11[Symbol.iterator]) return e11[Symbol.iterator]();
    if ("function" == typeof e11[Symbol.asyncIterator]) return e11[Symbol.asyncIterator]();
    throw new TypeError('"values" does not to conform to any of the iterator or iterable protocols');
}
function defer() {
    let e12, t;
    return {
        promise: new Promise((r, n)=>{
            t = r, e12 = n;
        }),
        reject: e12,
        resolve: t
    };
}
function _transform(e13, t1, r1) {
    const n = getIterator(r1), o = [], i1 = [];
    let s = !1, a = !1, c = 0, u = null;
    function f() {
        for(; i1.length > 0 && o.length > 0;){
            const { resolve: e14  } = i1.shift();
            e14({
                done: !1,
                value: o.shift()
            });
        }
        for(; i1.length > 0 && 0 === c && s;){
            const { resolve: e15 , reject: t  } = i1.shift();
            u ? (t(u), u = null) : e15({
                done: !0,
                value: void 0
            });
        }
    }
    async function l() {
        if (s) f();
        else if (!(a || c + o.length >= e13)) {
            a = !0, c++;
            try {
                const { done: e16 , value: r2  } = await n.next();
                e16 ? (s = !0, c--, f()) : async function(e17) {
                    try {
                        const r = await t1(e17);
                        o.push(r);
                    } catch (e18) {
                        s = !0, u = e18;
                    }
                    c--, f(), l();
                }(r2);
            } catch (e19) {
                s = !0, c--, u = e19, f();
            }
            a = !1, l();
        }
    }
    const h = {
        next: async function() {
            if (0 === o.length) {
                const e20 = defer();
                return i1.push(e20), l(), e20.promise;
            }
            const e21 = o.shift();
            return l(), {
                done: !1,
                value: e21
            };
        },
        [Symbol.asyncIterator]: ()=>h
    };
    return h;
}
function transform(e22, t2, r5) {
    return void 0 === t2 ? (t, r)=>r ? transform(e22, t, r) : transform(e22, t)
     : void 0 === r5 ? (r)=>transform(e22, t2, r)
     : _transform(e22, t2, r5);
}
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function getDefaultExportFromCjs(e23) {
    return e23 && e23.__esModule && Object.prototype.hasOwnProperty.call(e23, "default") ? e23.default : e23;
}
function getAugmentedNamespace(e24) {
    if (e24.__esModule) return e24;
    var t = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(e24).forEach(function(r) {
        var n = Object.getOwnPropertyDescriptor(e24, r);
        Object.defineProperty(t, r, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e24[r];
            }
        });
    }), t;
}
var pRetry$2 = {
    exports: {}
}, retry$2 = {};
function RetryOperation(e25, t) {
    "boolean" == typeof t && (t = {
        forever: t
    }), this._originalTimeouts = JSON.parse(JSON.stringify(e25)), this._timeouts = e25, this._options = t || {}, this._maxRetryTime = t && t.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0));
}
var retry_operation = RetryOperation;
RetryOperation.prototype.reset = function() {
    this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0);
}, RetryOperation.prototype.stop = function() {
    this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null;
}, RetryOperation.prototype.retry = function(e26) {
    if (this._timeout && clearTimeout(this._timeout), !e26) return !1;
    var t = (new Date).getTime();
    if (e26 && t - this._operationStart >= this._maxRetryTime) return this._errors.push(e26), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
    this._errors.push(e26);
    var r = this._timeouts.shift();
    if (void 0 === r) {
        if (!this._cachedTimeouts) return !1;
        this._errors.splice(0, this._errors.length - 1), r = this._cachedTimeouts.slice(-1);
    }
    var n = this;
    return this._timer = setTimeout(function() {
        n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout(function() {
            n._operationTimeoutCb(n._attempts);
        }, n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts);
    }, r), this._options.unref && this._timer.unref(), !0;
}, RetryOperation.prototype.attempt = function(e27, t) {
    this._fn = e27, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb));
    var r = this;
    this._operationTimeoutCb && (this._timeout = setTimeout(function() {
        r._operationTimeoutCb();
    }, r._operationTimeout)), this._operationStart = (new Date).getTime(), this._fn(this._attempts);
}, RetryOperation.prototype.try = function(e28) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(e28);
}, RetryOperation.prototype.start = function(e29) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(e29);
}, RetryOperation.prototype.start = RetryOperation.prototype.try, RetryOperation.prototype.errors = function() {
    return this._errors;
}, RetryOperation.prototype.attempts = function() {
    return this._attempts;
}, RetryOperation.prototype.mainError = function() {
    if (0 === this._errors.length) return null;
    for(var e30 = {}, t = null, r = 0, n = 0; n < this._errors.length; n++){
        var o = this._errors[n], i2 = o.message, s = (e30[i2] || 0) + 1;
        e30[i2] = s, s >= r && (t = o, r = s);
    }
    return t;
}, function(e31) {
    var t3 = retry_operation;
    e31.operation = function(r) {
        var n = e31.timeouts(r);
        return new t3(n, {
            forever: r && (r.forever || r.retries === 1 / 0),
            unref: r && r.unref,
            maxRetryTime: r && r.maxRetryTime
        });
    }, e31.timeouts = function(e32) {
        if (e32 instanceof Array) return [].concat(e32);
        var t4 = {
            retries: 10,
            factor: 2,
            minTimeout: 1000,
            maxTimeout: 1 / 0,
            randomize: !1
        };
        for(var r in e32)t4[r] = e32[r];
        if (t4.minTimeout > t4.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
        for(var n = [], o = 0; o < t4.retries; o++)n.push(this.createTimeout(o, t4));
        return e32 && e32.forever && !n.length && n.push(this.createTimeout(o, t4)), n.sort(function(e33, t) {
            return e33 - t;
        }), n;
    }, e31.createTimeout = function(e34, t) {
        var r = t.randomize ? Math.random() + 1 : 1, n = Math.round(r * Math.max(t.minTimeout, 1) * Math.pow(t.factor, e34));
        return n = Math.min(n, t.maxTimeout);
    }, e31.wrap = function(t, r, n1) {
        if (r instanceof Array && (n1 = r, r = null), !n1) for(var o1 in n1 = [], t)"function" == typeof t[o1] && n1.push(o1);
        for(var i3 = 0; i3 < n1.length; i3++){
            var s1 = n1[i3], a = t[s1];
            t[s1] = (function(n) {
                var o = e31.operation(r), i4 = Array.prototype.slice.call(arguments, 1), s = i4.pop();
                i4.push(function(e35) {
                    o.retry(e35) || (e35 && (arguments[0] = o.mainError()), s.apply(this, arguments));
                }), o.attempt(function() {
                    n.apply(t, i4);
                });
            }).bind(t, a), t[s1].options = r;
        }
    };
}(retry$2);
var retry$1 = retry$2;
const retry = retry$1, networkErrorMsgs = [
    "Failed to fetch",
    "NetworkError when attempting to fetch resource.",
    "The Internet connection appears to be offline.",
    "Network request failed"
];
class AbortError extends Error {
    constructor(e36){
        super(), e36 instanceof Error ? (this.originalError = e36, { message: e36  } = e36) : (this.originalError = new Error(e36), this.originalError.stack = this.stack), this.name = "AbortError", this.message = e36;
    }
}
const decorateErrorWithCounts = (e37, t, r)=>{
    const n = r.retries - (t - 1);
    return e37.attemptNumber = t, e37.retriesLeft = n, e37;
}, isNetworkError = (e38)=>networkErrorMsgs.includes(e38)
, pRetry = (e39, t)=>new Promise((r, n)=>{
        t = {
            onFailedAttempt: ()=>{},
            retries: 10,
            ...t
        };
        const o = retry.operation(t);
        o.attempt(async (i5)=>{
            try {
                r(await e39(i5));
            } catch (e40) {
                if (!(e40 instanceof Error)) return void n(new TypeError(`Non-error was thrown: "${e40}". You should only throw errors.`));
                if (e40 instanceof AbortError) o.stop(), n(e40.originalError);
                else if (e40 instanceof TypeError && !isNetworkError(e40.message)) o.stop(), n(e40);
                else {
                    decorateErrorWithCounts(e40, i5, t);
                    try {
                        await t.onFailedAttempt(e40);
                    } catch (e41) {
                        return void n(e41);
                    }
                    o.retry(e40) || n(o.mainError());
                }
            }
        });
    })
;
pRetry$2.exports = pRetry, pRetry$2.exports.default = pRetry, pRetry$2.exports.AbortError = AbortError;
var pRetry$1 = pRetry$2.exports;
const last = async (e42)=>{
    let t;
    for await (const r of e42)t = r;
    return t;
};
var itLast = last, itPipe = {
    exports: {}
};
const rawPipe = (...e43)=>{
    let t;
    for(; e43.length;)t = e43.shift()(t);
    return t;
}, isIterable$1 = (e44)=>e44 && ("function" == typeof e44[Symbol.asyncIterator] || "function" == typeof e44[Symbol.iterator] || "function" == typeof e44.next)
, isDuplex = (e45)=>e45 && "function" == typeof e45.sink && isIterable$1(e45.source)
, duplexPipelineFn = (e46)=>(t)=>(e46.sink(t), e46.source)
, pipe = (...e47)=>{
    if (isDuplex(e47[0])) {
        const t = e47[0];
        e47[0] = ()=>t.source
        ;
    } else if (isIterable$1(e47[0])) {
        const t = e47[0];
        e47[0] = ()=>t
        ;
    }
    if (e47.length > 1 && isDuplex(e47[e47.length - 1]) && (e47[e47.length - 1] = e47[e47.length - 1].sink), e47.length > 2) for(let t = 1; t < e47.length - 1; t++)isDuplex(e47[t]) && (e47[t] = duplexPipelineFn(e47[t]));
    return rawPipe(...e47);
};
itPipe.exports = pipe, itPipe.exports.pipe = pipe, itPipe.exports.rawPipe = rawPipe, itPipe.exports.isIterable = isIterable$1, itPipe.exports.isDuplex = isDuplex;
var pipe$1 = itPipe.exports, encode_1$1 = encode$8, MSB$3 = 128, REST$3 = 127, MSBALL$1 = ~REST$3, INT$1 = Math.pow(2, 31);
function encode$8(e48, t, r) {
    if (Number.MAX_SAFE_INTEGER && e48 > Number.MAX_SAFE_INTEGER) throw encode$8.bytes = 0, new RangeError("Could not encode varint");
    t = t || [];
    for(var n = r = r || 0; e48 >= INT$1;)t[r++] = 255 & e48 | MSB$3, e48 /= 128;
    for(; e48 & MSBALL$1;)t[r++] = 255 & e48 | MSB$3, e48 >>>= 7;
    return t[r] = 0 | e48, encode$8.bytes = r - n + 1, t;
}
var decode$a = read$1, MSB$2 = 128, REST$2 = 127;
function read$1(e49, t) {
    var r, n = 0, o = 0, i6 = t = t || 0, s = e49.length;
    do {
        if (i6 >= s || o > 49) throw read$1.bytes = 0, new RangeError("Could not decode varint");
        r = e49[i6++], n += o < 28 ? (r & REST$2) << o : (r & REST$2) * Math.pow(2, o), o += 7;
    }while (r >= MSB$2)
    return read$1.bytes = i6 - t, n;
}
var N1$1 = Math.pow(2, 7), N2$1 = Math.pow(2, 14), N3$1 = Math.pow(2, 21), N4$1 = Math.pow(2, 28), N5$1 = Math.pow(2, 35), N6$1 = Math.pow(2, 42), N7$1 = Math.pow(2, 49), N8$1 = Math.pow(2, 56), N9$1 = Math.pow(2, 63), length$1 = function(e50) {
    return e50 < N1$1 ? 1 : e50 < N2$1 ? 2 : e50 < N3$1 ? 3 : e50 < N4$1 ? 4 : e50 < N5$1 ? 5 : e50 < N6$1 ? 6 : e50 < N7$1 ? 7 : e50 < N8$1 ? 8 : e50 < N9$1 ? 9 : 10;
}, varint$1 = {
    encode: encode_1$1,
    decode: decode$a,
    encodingLength: length$1
}, encode_1 = encode$7, MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode$7(e51, t, r) {
    t = t || [];
    for(var n = r = r || 0; e51 >= INT;)t[r++] = 255 & e51 | MSB, e51 /= 128;
    for(; e51 & MSBALL;)t[r++] = 255 & e51 | MSB, e51 >>>= 7;
    return t[r] = 0 | e51, encode$7.bytes = r - n + 1, t;
}
var decode$9 = read, MSB$1 = 128, REST$1 = 127;
function read(e52, t) {
    var r, n = 0, o = 0, i7 = t = t || 0, s = e52.length;
    do {
        if (i7 >= s) throw read.bytes = 0, new RangeError("Could not decode varint");
        r = e52[i7++], n += o < 28 ? (r & REST$1) << o : (r & REST$1) * Math.pow(2, o), o += 7;
    }while (r >= MSB$1)
    return read.bytes = i7 - t, n;
}
var N1 = Math.pow(2, 7), N2 = Math.pow(2, 14), N3 = Math.pow(2, 21), N4 = Math.pow(2, 28), N5 = Math.pow(2, 35), N6 = Math.pow(2, 42), N7 = Math.pow(2, 49), N8 = Math.pow(2, 56), N9 = Math.pow(2, 63), length = function(e53) {
    return e53 < N1 ? 1 : e53 < N2 ? 2 : e53 < N3 ? 3 : e53 < N4 ? 4 : e53 < N5 ? 5 : e53 < N6 ? 6 : e53 < N7 ? 7 : e53 < N8 ? 8 : e53 < N9 ? 9 : 10;
}, varint = {
    encode: encode_1,
    decode: decode$9,
    encodingLength: length
}, _brrp_varint = varint;
const decode$8 = (e54)=>[
        _brrp_varint.decode(e54),
        _brrp_varint.decode.bytes
    ]
, encodeTo = (e55, t, r = 0)=>(_brrp_varint.encode(e55, t, r), t)
, encodingLength = (e56)=>_brrp_varint.encodingLength(e56)
, empty = new Uint8Array(0), fromHex = (e57)=>{
    const t = e57.match(/../g);
    return t ? new Uint8Array(t.map((e58)=>parseInt(e58, 16)
    )) : empty;
}, equals$2 = (e59, t)=>{
    if (e59 === t) return !0;
    if (e59.byteLength !== t.byteLength) return !1;
    for(let r = 0; r < e59.byteLength; r++)if (e59[r] !== t[r]) return !1;
    return !0;
}, coerce = (e60)=>{
    if (e60 instanceof Uint8Array && "Uint8Array" === e60.constructor.name) return e60;
    if (e60 instanceof ArrayBuffer) return new Uint8Array(e60);
    if (ArrayBuffer.isView(e60)) return new Uint8Array(e60.buffer, e60.byteOffset, e60.byteLength);
    throw new Error("Unknown type, must be binary type");
}, fromString$3 = (e61)=>(new TextEncoder).encode(e61)
, toString$1 = (e62)=>(new TextDecoder).decode(e62)
, create$4 = (e63, t)=>{
    const r = t.byteLength, n = encodingLength(e63), o = n + encodingLength(r), i8 = new Uint8Array(o + r);
    return encodeTo(e63, i8, 0), encodeTo(r, i8, n), i8.set(t, o), new Digest(e63, r, t, i8);
}, decode$7 = (e64)=>{
    const t = coerce(e64), [r, n] = decode$8(t), [o, i9] = decode$8(t.subarray(n)), s = t.subarray(n + i9);
    if (s.byteLength !== o) throw new Error("Incorrect length");
    return new Digest(r, o, s, t);
}, equals$1 = (e65, t)=>e65 === t || e65.code === t.code && e65.size === t.size && equals$2(e65.bytes, t.bytes)
;
class Digest {
    constructor(e66, t, r, n){
        this.code = e66, this.size = t, this.digest = r, this.bytes = n;
    }
}
function base(e67, t5) {
    if (e67.length >= 255) throw new TypeError("Alphabet too long");
    for(var r6 = new Uint8Array(256), n2 = 0; n2 < r6.length; n2++)r6[n2] = 255;
    for(var o2 = 0; o2 < e67.length; o2++){
        var i10 = e67.charAt(o2), s = i10.charCodeAt(0);
        if (255 !== r6[s]) throw new TypeError(i10 + " is ambiguous");
        r6[s] = o2;
    }
    var a = e67.length, c = e67.charAt(0), u1 = Math.log(a) / Math.log(256), f1 = Math.log(256) / Math.log(a);
    function l1(e68) {
        if ("string" != typeof e68) throw new TypeError("Expected String");
        if (0 === e68.length) return new Uint8Array;
        var t = 0;
        if (" " !== e68[t]) {
            for(var n = 0, o = 0; e68[t] === c;)n++, t++;
            for(var i11 = (e68.length - t) * u1 + 1 >>> 0, s = new Uint8Array(i11); e68[t];){
                var f = r6[e68.charCodeAt(t)];
                if (255 === f) return;
                for(var l = 0, h = i11 - 1; (0 !== f || l < o) && -1 !== h; h--, l++)f += a * s[h] >>> 0, s[h] = f % 256 >>> 0, f = f / 256 >>> 0;
                if (0 !== f) throw new Error("Non-zero carry");
                o = l, t++;
            }
            if (" " !== e68[t]) {
                for(var d = i11 - o; d !== i11 && 0 === s[d];)d++;
                for(var p = new Uint8Array(n + (i11 - d)), y = n; d !== i11;)p[y++] = s[d++];
                return p;
            }
        }
    }
    return {
        encode: function(t) {
            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for(var r = 0, n = 0, o = 0, i12 = t.length; o !== i12 && 0 === t[o];)o++, r++;
            for(var s = (i12 - o) * f1 + 1 >>> 0, u = new Uint8Array(s); o !== i12;){
                for(var l = t[o], h = 0, d = s - 1; (0 !== l || h < n) && -1 !== d; d--, h++)l += 256 * u[d] >>> 0, u[d] = l % a >>> 0, l = l / a >>> 0;
                if (0 !== l) throw new Error("Non-zero carry");
                n = h, o++;
            }
            for(var p = s - n; p !== s && 0 === u[p];)p++;
            for(var y = c.repeat(r); p < s; ++p)y += e67.charAt(u[p]);
            return y;
        },
        decodeUnsafe: l1,
        decode: function(e69) {
            var r = l1(e69);
            if (r) return r;
            throw new Error(`Non-${t5} character`);
        }
    };
}
var src$2 = base, _brrp__multiformats_scope_baseX = src$2;
class Encoder {
    constructor(e70, t, r){
        this.name = e70, this.prefix = t, this.baseEncode = r;
    }
    encode(e71) {
        if (e71 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e71)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class Decoder {
    constructor(e72, t, r){
        this.name = e72, this.prefix = t, this.baseDecode = r;
    }
    decode(e73) {
        if ("string" == typeof e73) {
            if (e73[0] === this.prefix) return this.baseDecode(e73.slice(1));
            throw Error(`Unable to decode multibase string ${JSON.stringify(e73)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        throw Error("Can only multibase decode strings");
    }
    or(e74) {
        return or(this, e74);
    }
}
class ComposedDecoder {
    constructor(e75){
        this.decoders = e75;
    }
    or(e76) {
        return or(this, e76);
    }
    decode(e77) {
        const t = e77[0], r = this.decoders[t];
        if (r) return r.decode(e77);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e77)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const or = (e78, t)=>new ComposedDecoder({
        ...e78.decoders || {
            [e78.prefix]: e78
        },
        ...t.decoders || {
            [t.prefix]: t
        }
    })
;
class Codec {
    constructor(e79, t, r, n){
        this.name = e79, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new Encoder(e79, t, r), this.decoder = new Decoder(e79, t, n);
    }
    encode(e80) {
        return this.encoder.encode(e80);
    }
    decode(e81) {
        return this.decoder.decode(e81);
    }
}
const from$1 = ({ name: e82 , prefix: t , encode: r , decode: n  })=>new Codec(e82, t, r, n)
, baseX = ({ prefix: e83 , name: t , alphabet: r  })=>{
    const { encode: n , decode: o  } = _brrp__multiformats_scope_baseX(r, t);
    return from$1({
        prefix: e83,
        name: t,
        encode: n,
        decode: (e84)=>coerce(o(e84))
    });
}, decode$6 = (e86, t, r, n)=>{
    const o = {};
    for(let e85 = 0; e85 < t.length; ++e85)o[t[e85]] = e85;
    let i13 = e86.length;
    for(; "=" === e86[i13 - 1];)--i13;
    const s = new Uint8Array(i13 * r / 8 | 0);
    let a = 0, c = 0, u = 0;
    for(let t6 = 0; t6 < i13; ++t6){
        const i14 = o[e86[t6]];
        if (void 0 === i14) throw new SyntaxError(`Non-${n} character`);
        c = c << r | i14, a += r, a >= 8 && (a -= 8, s[u++] = 255 & c >> a);
    }
    if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
    return s;
}, encode$6 = (e87, t, r)=>{
    const n = "=" === t[t.length - 1], o = (1 << r) - 1;
    let i15 = "", s = 0, a = 0;
    for(let n3 = 0; n3 < e87.length; ++n3)for(a = a << 8 | e87[n3], s += 8; s > r;)s -= r, i15 += t[o & a >> s];
    if (s && (i15 += t[o & a << r - s]), n) for(; i15.length * r & 7;)i15 += "=";
    return i15;
}, rfc4648 = ({ name: e88 , prefix: t7 , bitsPerChar: r , alphabet: n  })=>from$1({
        prefix: t7,
        name: e88,
        encode: (e89)=>encode$6(e89, n, r)
        ,
        decode: (t)=>decode$6(t, n, r, e88)
    })
, base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var base58 = Object.freeze({
    __proto__: null,
    base58btc: base58btc,
    base58flickr: base58flickr
});
const base32 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var base32$1 = Object.freeze({
    __proto__: null,
    base32: base32,
    base32upper: base32upper,
    base32pad: base32pad,
    base32padupper: base32padupper,
    base32hex: base32hex,
    base32hexupper: base32hexupper,
    base32hexpad: base32hexpad,
    base32hexpadupper: base32hexpadupper,
    base32z: base32z
});
class CID {
    constructor(e90, t, r, n){
        this.code = t, this.version = e90, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
            byteOffset: hidden,
            byteLength: hidden,
            code: readonly$1,
            version: readonly$1,
            multihash: readonly$1,
            bytes: readonly$1,
            _baseCache: hidden,
            asCID: hidden
        });
    }
    toV0() {
        if (0 === this.version) return this;
        {
            const { code: e91 , multihash: t  } = this;
            if (e91 !== DAG_PB_CODE) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
            if (t.code !== SHA_256_CODE) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return CID.createV0(t);
        }
    }
    toV1() {
        switch(this.version){
            case 0:
                {
                    const { code: e92 , digest: t  } = this.multihash, r = create$4(e92, t);
                    return CID.createV1(this.code, r);
                }
            case 1:
                return this;
            default:
                throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
    equals(e93) {
        return e93 && this.code === e93.code && this.version === e93.version && equals$1(this.multihash, e93.multihash);
    }
    toString(e94) {
        const { bytes: t , version: r , _baseCache: n  } = this;
        return 0 === r ? toStringV0(t, n, e94 || base58btc.encoder) : toStringV1(t, n, e94 || base32.encoder);
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        };
    }
    get [Symbol.toStringTag]() {
        return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
    }
    static isCID(e95) {
        return deprecate(/^0\.0/, IS_CID_DEPRECATION), !(!e95 || !e95[cidSymbol] && e95.asCID !== e95);
    }
    get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()");
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated');
    }
    static asCID(e96) {
        if (e96 instanceof CID) return e96;
        if (null != e96 && e96.asCID === e96) {
            const { version: t , code: r , multihash: n , bytes: o  } = e96;
            return new CID(t, r, n, o || encodeCID(t, r, n.bytes));
        }
        if (null != e96 && !0 === e96[cidSymbol]) {
            const { version: t , multihash: r , code: n  } = e96, o = decode$7(r);
            return CID.create(t, n, o);
        }
        return null;
    }
    static create(e97, t, r) {
        if ("number" != typeof t) throw new Error("String codecs are no longer supported");
        switch(e97){
            case 0:
                if (t !== DAG_PB_CODE) throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
                return new CID(e97, t, r, r.bytes);
            case 1:
                {
                    const n = encodeCID(e97, t, r.bytes);
                    return new CID(e97, t, r, n);
                }
            default:
                throw new Error("Invalid version");
        }
    }
    static createV0(e98) {
        return CID.create(0, DAG_PB_CODE, e98);
    }
    static createV1(e99, t) {
        return CID.create(1, e99, t);
    }
    static decode(e100) {
        const [t, r] = CID.decodeFirst(e100);
        if (r.length) throw new Error("Incorrect length");
        return t;
    }
    static decodeFirst(e101) {
        const t = CID.inspectBytes(e101), r = t.size - t.multihashSize, n = coerce(e101.subarray(r, r + t.multihashSize));
        if (n.byteLength !== t.multihashSize) throw new Error("Incorrect length");
        const o = n.subarray(t.multihashSize - t.digestSize), i16 = new Digest(t.multihashCode, t.digestSize, o, n);
        return [
            0 === t.version ? CID.createV0(i16) : CID.createV1(t.codec, i16),
            e101.subarray(t.size)
        ];
    }
    static inspectBytes(e102) {
        let t = 0;
        const r7 = ()=>{
            const [r, n] = decode$8(e102.subarray(t));
            return t += n, r;
        };
        let n4 = r7(), o = DAG_PB_CODE;
        if (18 === n4 ? (n4 = 0, t = 0) : 1 === n4 && (o = r7()), 0 !== n4 && 1 !== n4) throw new RangeError(`Invalid CID version ${n4}`);
        const i17 = t, s = r7(), a = r7(), c = t + a;
        return {
            version: n4,
            codec: o,
            multihashCode: s,
            digestSize: a,
            multihashSize: c - i17,
            size: c
        };
    }
    static parse(e103, t) {
        const [r, n] = parseCIDtoBytes(e103, t), o = CID.decode(n);
        return o._baseCache.set(r, e103), o;
    }
}
const parseCIDtoBytes = (e104, t)=>{
    switch(e104[0]){
        case "Q":
            {
                const r = t || base58btc;
                return [
                    base58btc.prefix,
                    r.decode(`${base58btc.prefix}${e104}`)
                ];
            }
        case base58btc.prefix:
            {
                const r = t || base58btc;
                return [
                    base58btc.prefix,
                    r.decode(e104)
                ];
            }
        case base32.prefix:
            {
                const r = t || base32;
                return [
                    base32.prefix,
                    r.decode(e104)
                ];
            }
        default:
            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            return [
                e104[0],
                t.decode(e104)
            ];
    }
}, toStringV0 = (e105, t, r)=>{
    const { prefix: n  } = r;
    if (n !== base58btc.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
    const o = t.get(n);
    if (null == o) {
        const o = r.encode(e105).slice(1);
        return t.set(n, o), o;
    }
    return o;
}, toStringV1 = (e106, t, r)=>{
    const { prefix: n  } = r, o = t.get(n);
    if (null == o) {
        const o = r.encode(e106);
        return t.set(n, o), o;
    }
    return o;
}, DAG_PB_CODE = 112, SHA_256_CODE = 18, encodeCID = (e107, t, r)=>{
    const n = encodingLength(e107), o = n + encodingLength(t), i18 = new Uint8Array(o + r.byteLength);
    return encodeTo(e107, i18, 0), encodeTo(t, i18, n), i18.set(r, o), i18;
}, cidSymbol = Symbol.for("@ipld/js-cid/CID"), readonly$1 = {
    writable: !1,
    configurable: !1,
    enumerable: !0
}, hidden = {
    writable: !1,
    enumerable: !1,
    configurable: !1
}, version = "0.0.0-dev", deprecate = (e108, t)=>{
    if (!e108.test(version)) throw new Error(t);
    console.warn(t);
}, IS_CID_DEPRECATION = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n", typeofs = [
    "string",
    "number",
    "bigint",
    "symbol"
], objectTypeNames = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "HTMLElement",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
];
function is(e109) {
    if (null === e109) return "null";
    if (void 0 === e109) return "undefined";
    if (!0 === e109 || !1 === e109) return "boolean";
    const t = typeof e109;
    if (typeofs.includes(t)) return t;
    if ("function" === t) return "Function";
    if (Array.isArray(e109)) return "Array";
    if (isBuffer$1(e109)) return "Buffer";
    const r = getObjectType(e109);
    return r || "Object";
}
function isBuffer$1(e110) {
    return e110 && e110.constructor && e110.constructor.isBuffer && e110.constructor.isBuffer.call(null, e110);
}
function getObjectType(e111) {
    const t = Object.prototype.toString.call(e111).slice(8, -1);
    if (objectTypeNames.includes(t)) return t;
}
class Type {
    constructor(e112, t, r){
        this.major = e112, this.majorEncoded = e112 << 5, this.name = t, this.terminal = r;
    }
    toString() {
        return `Type[${this.major}].${this.name}`;
    }
    compare(e113) {
        return this.major < e113.major ? -1 : this.major > e113.major ? 1 : 0;
    }
}
Type.uint = new Type(0, "uint", !0), Type.negint = new Type(1, "negint", !0), Type.bytes = new Type(2, "bytes", !0), Type.string = new Type(3, "string", !0), Type.array = new Type(4, "array", !1), Type.map = new Type(5, "map", !1), Type.tag = new Type(6, "tag", !1), Type.float = new Type(7, "float", !0), Type.false = new Type(7, "false", !0), Type.true = new Type(7, "true", !0), Type.null = new Type(7, "null", !0), Type.undefined = new Type(7, "undefined", !0), Type.break = new Type(7, "break", !0);
class Token {
    constructor(e114, t, r){
        this.type = e114, this.value = t, this.encodedLength = r, this.encodedBytes = void 0, this.byteValue = void 0;
    }
    toString() {
        return `Token[${this.type}].${this.value}`;
    }
}
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && "function" == typeof globalThis.Buffer.isBuffer, textDecoder$1 = new TextDecoder, textEncoder$2 = new TextEncoder;
function isBuffer(e115) {
    return useBuffer && globalThis.Buffer.isBuffer(e115);
}
function asU8A(e116) {
    return e116 instanceof Uint8Array ? isBuffer(e116) ? new Uint8Array(e116.buffer, e116.byteOffset, e116.byteLength) : e116 : Uint8Array.from(e116);
}
const toString = useBuffer ? (e117, t, r)=>r - t > 64 ? globalThis.Buffer.from(e117.subarray(t, r)).toString("utf8") : utf8Slice(e117, t, r)
 : (e118, t, r)=>r - t > 64 ? textDecoder$1.decode(e118.subarray(t, r)) : utf8Slice(e118, t, r)
, fromString$2 = useBuffer ? (e119)=>e119.length > 64 ? globalThis.Buffer.from(e119) : utf8ToBytes(e119)
 : (e120)=>e120.length > 64 ? textEncoder$2.encode(e120) : utf8ToBytes(e120)
, fromArray = (e121)=>Uint8Array.from(e121)
, slice = useBuffer ? (e122, t, r)=>isBuffer(e122) ? new Uint8Array(e122.subarray(t, r)) : e122.slice(t, r)
 : (e123, t, r)=>e123.slice(t, r)
, concat$2 = useBuffer ? (e124, t)=>(e124 = e124.map((e125)=>e125 instanceof Uint8Array ? e125 : globalThis.Buffer.from(e125)
    ), asU8A(globalThis.Buffer.concat(e124, t)))
 : (e126, t)=>{
    const r = new Uint8Array(t);
    let n = 0;
    for (let t8 of e126)n + t8.length > r.length && (t8 = t8.subarray(0, r.length - n)), r.set(t8, n), n += t8.length;
    return r;
}, alloc = useBuffer ? (e127)=>globalThis.Buffer.allocUnsafe(e127)
 : (e128)=>new Uint8Array(e128)
;
function compare(e129, t) {
    if (isBuffer(e129) && isBuffer(t)) return e129.compare(t);
    for(let r = 0; r < e129.length; r++)if (e129[r] !== t[r]) return e129[r] < t[r] ? -1 : 1;
    return 0;
}
function utf8ToBytes(e130, t = 1 / 0) {
    let r;
    const n = e130.length;
    let o = null;
    const i19 = [];
    for(let s = 0; s < n; ++s){
        if (r = e130.charCodeAt(s), r > 55295 && r < 57344) {
            if (!o) {
                if (r > 56319) {
                    (t -= 3) > -1 && i19.push(239, 191, 189);
                    continue;
                }
                if (s + 1 === n) {
                    (t -= 3) > -1 && i19.push(239, 191, 189);
                    continue;
                }
                o = r;
                continue;
            }
            if (r < 56320) {
                (t -= 3) > -1 && i19.push(239, 191, 189), o = r;
                continue;
            }
            r = 65536 + (o - 55296 << 10 | r - 56320);
        } else o && (t -= 3) > -1 && i19.push(239, 191, 189);
        if (o = null, r < 128) {
            if ((t -= 1) < 0) break;
            i19.push(r);
        } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i19.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i19.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i19.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
    }
    return i19;
}
function utf8Slice(e131, t, r) {
    const n = [];
    for(; t < r;){
        const o = e131[t];
        let i20 = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (t + s <= r) {
            let r, n, a, c;
            switch(s){
                case 1:
                    o < 128 && (i20 = o);
                    break;
                case 2:
                    r = e131[t + 1], 128 == (192 & r) && (c = (31 & o) << 6 | 63 & r, c > 127 && (i20 = c));
                    break;
                case 3:
                    r = e131[t + 1], n = e131[t + 2], 128 == (192 & r) && 128 == (192 & n) && (c = (15 & o) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i20 = c));
                    break;
                case 4:
                    r = e131[t + 1], n = e131[t + 2], a = e131[t + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (c = (15 & o) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, c > 65535 && c < 1114112 && (i20 = c));
            }
        }
        null === i20 ? (i20 = 65533, s = 1) : i20 > 65535 && (i20 -= 65536, n.push(i20 >>> 10 & 1023 | 55296), i20 = 56320 | 1023 & i20), n.push(i20), t += s;
    }
    return decodeCodePointsArray(n);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(e132) {
    const t = e132.length;
    if (t <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, e132);
    let r = "", n = 0;
    for(; n < t;)r += String.fromCharCode.apply(String, e132.slice(n, n += MAX_ARGUMENTS_LENGTH));
    return r;
}
const defaultChunkSize = 256;
class Bl {
    constructor(e133 = defaultChunkSize){
        this.chunkSize = e133, this.cursor = 0, this.maxCursor = -1, this.chunks = [], this._initReuseChunk = null;
    }
    reset() {
        this.chunks = [], this.cursor = 0, this.maxCursor = -1, null !== this._initReuseChunk && (this.chunks.push(this._initReuseChunk), this.maxCursor = this._initReuseChunk.length - 1);
    }
    push(e134) {
        let t = this.chunks[this.chunks.length - 1];
        if (this.cursor + e134.length <= this.maxCursor + 1) {
            const r = t.length - (this.maxCursor - this.cursor) - 1;
            t.set(e134, r);
        } else {
            if (t) {
                const e135 = t.length - (this.maxCursor - this.cursor) - 1;
                e135 < t.length && (this.chunks[this.chunks.length - 1] = t.subarray(0, e135), this.maxCursor = this.cursor - 1);
            }
            e134.length < 64 && e134.length < this.chunkSize ? (t = alloc(this.chunkSize), this.chunks.push(t), this.maxCursor += t.length, null === this._initReuseChunk && (this._initReuseChunk = t), t.set(e134, 0)) : (this.chunks.push(e134), this.maxCursor += e134.length);
        }
        this.cursor += e134.length;
    }
    toBytes(e136 = !1) {
        let t;
        if (1 === this.chunks.length) {
            const r = this.chunks[0];
            e136 && this.cursor > r.length / 2 ? (t = this.cursor === r.length ? r : r.subarray(0, this.cursor), this._initReuseChunk = null, this.chunks = []) : t = slice(r, 0, this.cursor);
        } else t = concat$2(this.chunks, this.cursor);
        return e136 && this.reset(), t;
    }
}
const decodeErrPrefix = "CBOR decode error:", encodeErrPrefix = "CBOR encode error:";
function assertEnoughData(e137, t, r) {
    if (e137.length - t < r) throw new Error(`${decodeErrPrefix} not enough data for type`);
}
const uintBoundaries = [
    24,
    256,
    65536,
    4294967296,
    BigInt("18446744073709551616")
];
function readUint8(e138, t, r) {
    assertEnoughData(e138, t, 1);
    const n = e138[t];
    if (!0 === r.strict && n < uintBoundaries[0]) throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return n;
}
function readUint16(e139, t, r) {
    assertEnoughData(e139, t, 2);
    const n = e139[t] << 8 | e139[t + 1];
    if (!0 === r.strict && n < uintBoundaries[1]) throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return n;
}
function readUint32(e140, t, r) {
    assertEnoughData(e140, t, 4);
    const n = 16777216 * e140[t] + (e140[t + 1] << 16) + (e140[t + 2] << 8) + e140[t + 3];
    if (!0 === r.strict && n < uintBoundaries[2]) throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return n;
}
function readUint64(e141, t, r) {
    assertEnoughData(e141, t, 8);
    const n = 16777216 * e141[t] + (e141[t + 1] << 16) + (e141[t + 2] << 8) + e141[t + 3], o = 16777216 * e141[t + 4] + (e141[t + 5] << 16) + (e141[t + 6] << 8) + e141[t + 7], i21 = (BigInt(n) << BigInt(32)) + BigInt(o);
    if (!0 === r.strict && i21 < uintBoundaries[3]) throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    if (i21 <= Number.MAX_SAFE_INTEGER) return Number(i21);
    if (!0 === r.allowBigInt) return i21;
    throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
}
function decodeUint8(e142, t, r, n) {
    return new Token(Type.uint, readUint8(e142, t + 1, n), 2);
}
function decodeUint16(e143, t, r, n) {
    return new Token(Type.uint, readUint16(e143, t + 1, n), 3);
}
function decodeUint32(e144, t, r, n) {
    return new Token(Type.uint, readUint32(e144, t + 1, n), 5);
}
function decodeUint64(e145, t, r, n) {
    return new Token(Type.uint, readUint64(e145, t + 1, n), 9);
}
function encodeUint(e146, t) {
    return encodeUintValue(e146, 0, t.value);
}
function encodeUintValue(e147, t, r) {
    if (r < uintBoundaries[0]) {
        const n = Number(r);
        e147.push([
            t | n
        ]);
    } else if (r < uintBoundaries[1]) {
        const n = Number(r);
        e147.push([
            24 | t,
            n
        ]);
    } else if (r < uintBoundaries[2]) {
        const n = Number(r);
        e147.push([
            25 | t,
            n >>> 8,
            255 & n
        ]);
    } else if (r < uintBoundaries[3]) {
        const n = Number(r);
        e147.push([
            26 | t,
            n >>> 24 & 255,
            n >>> 16 & 255,
            n >>> 8 & 255,
            255 & n
        ]);
    } else {
        const n = BigInt(r);
        if (!(n < uintBoundaries[4])) throw new Error(`${decodeErrPrefix} encountered BigInt larger than allowable range`);
        {
            const r = [
                27 | t,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            let o = Number(n & BigInt(4294967295)), i22 = Number(n >> BigInt(32) & BigInt(4294967295));
            r[8] = 255 & o, o >>= 8, r[7] = 255 & o, o >>= 8, r[6] = 255 & o, o >>= 8, r[5] = 255 & o, r[4] = 255 & i22, i22 >>= 8, r[3] = 255 & i22, i22 >>= 8, r[2] = 255 & i22, i22 >>= 8, r[1] = 255 & i22, e147.push(r);
        }
    }
}
function decodeNegint8(e148, t, r, n) {
    return new Token(Type.negint, -1 - readUint8(e148, t + 1, n), 2);
}
function decodeNegint16(e149, t, r, n) {
    return new Token(Type.negint, -1 - readUint16(e149, t + 1, n), 3);
}
function decodeNegint32(e150, t, r, n) {
    return new Token(Type.negint, -1 - readUint32(e150, t + 1, n), 5);
}
encodeUint.encodedSize = function(e151) {
    return encodeUintValue.encodedSize(e151.value);
}, encodeUintValue.encodedSize = function(e152) {
    return e152 < uintBoundaries[0] ? 1 : e152 < uintBoundaries[1] ? 2 : e152 < uintBoundaries[2] ? 3 : e152 < uintBoundaries[3] ? 5 : 9;
}, encodeUint.compareTokens = function(e153, t) {
    return e153.value < t.value ? -1 : e153.value > t.value ? 1 : 0;
};
const neg1b = BigInt(-1), pos1b = BigInt(1);
function decodeNegint64(e154, t, r, n) {
    const o = readUint64(e154, t + 1, n);
    if ("bigint" != typeof o) {
        const e155 = -1 - o;
        if (e155 >= Number.MIN_SAFE_INTEGER) return new Token(Type.negint, e155, 9);
    }
    if (!0 !== n.allowBigInt) throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
    return new Token(Type.negint, neg1b - BigInt(o), 9);
}
function encodeNegint(e156, t) {
    const r = t.value, n = "bigint" == typeof r ? r * neg1b - pos1b : -1 * r - 1;
    encodeUintValue(e156, t.type.majorEncoded, n);
}
function toToken$3(e157, t, r, n) {
    assertEnoughData(e157, t, r + n);
    const o = slice(e157, t + r, t + r + n);
    return new Token(Type.bytes, o, r + n);
}
function decodeBytesCompact(e158, t, r, n) {
    return toToken$3(e158, t, 1, r);
}
function decodeBytes8(e159, t, r, n) {
    return toToken$3(e159, t, 2, readUint8(e159, t + 1, n));
}
function decodeBytes16(e160, t, r, n) {
    return toToken$3(e160, t, 3, readUint16(e160, t + 1, n));
}
function decodeBytes32(e161, t, r, n) {
    return toToken$3(e161, t, 5, readUint32(e161, t + 1, n));
}
function decodeBytes64(e162, t, r, n) {
    const o = readUint64(e162, t + 1, n);
    if ("bigint" == typeof o) throw new Error(`${decodeErrPrefix} 64-bit integer bytes lengths not supported`);
    return toToken$3(e162, t, 9, o);
}
function tokenBytes(e163) {
    return void 0 === e163.encodedBytes && (e163.encodedBytes = e163.type === Type.string ? fromString$2(e163.value) : e163.value), e163.encodedBytes;
}
function encodeBytes(e164, t) {
    const r = tokenBytes(t);
    encodeUintValue(e164, t.type.majorEncoded, r.length), e164.push(r);
}
function compareBytes(e165, t) {
    return e165.length < t.length ? -1 : e165.length > t.length ? 1 : compare(e165, t);
}
function toToken$2(e166, t, r, n, o) {
    const i23 = r + n;
    assertEnoughData(e166, t, i23);
    const s = new Token(Type.string, toString(e166, t + r, t + i23), i23);
    return !0 === o.retainStringBytes && (s.byteValue = slice(e166, t + r, t + i23)), s;
}
function decodeStringCompact(e167, t, r, n) {
    return toToken$2(e167, t, 1, r, n);
}
function decodeString8(e168, t, r, n) {
    return toToken$2(e168, t, 2, readUint8(e168, t + 1, n), n);
}
function decodeString16(e169, t, r, n) {
    return toToken$2(e169, t, 3, readUint16(e169, t + 1, n), n);
}
function decodeString32(e170, t, r, n) {
    return toToken$2(e170, t, 5, readUint32(e170, t + 1, n), n);
}
function decodeString64(e171, t, r, n) {
    const o = readUint64(e171, t + 1, n);
    if ("bigint" == typeof o) throw new Error(`${decodeErrPrefix} 64-bit integer string lengths not supported`);
    return toToken$2(e171, t, 9, o, n);
}
encodeNegint.encodedSize = function(e172) {
    const t = e172.value, r = "bigint" == typeof t ? t * neg1b - pos1b : -1 * t - 1;
    return r < uintBoundaries[0] ? 1 : r < uintBoundaries[1] ? 2 : r < uintBoundaries[2] ? 3 : r < uintBoundaries[3] ? 5 : 9;
}, encodeNegint.compareTokens = function(e173, t) {
    return e173.value < t.value ? 1 : e173.value > t.value ? -1 : 0;
}, encodeBytes.encodedSize = function(e174) {
    const t = tokenBytes(e174);
    return encodeUintValue.encodedSize(t.length) + t.length;
}, encodeBytes.compareTokens = function(e175, t) {
    return compareBytes(tokenBytes(e175), tokenBytes(t));
};
const encodeString = encodeBytes;
function toToken$1(e, t, r, n) {
    return new Token(Type.array, n, r);
}
function decodeArrayCompact(e176, t, r, n) {
    return toToken$1(e176, t, 1, r);
}
function decodeArray8(e177, t, r, n) {
    return toToken$1(e177, t, 2, readUint8(e177, t + 1, n));
}
function decodeArray16(e178, t, r, n) {
    return toToken$1(e178, t, 3, readUint16(e178, t + 1, n));
}
function decodeArray32(e179, t, r, n) {
    return toToken$1(e179, t, 5, readUint32(e179, t + 1, n));
}
function decodeArray64(e180, t, r, n) {
    const o = readUint64(e180, t + 1, n);
    if ("bigint" == typeof o) throw new Error(`${decodeErrPrefix} 64-bit integer array lengths not supported`);
    return toToken$1(e180, t, 9, o);
}
function decodeArrayIndefinite(e181, t, r, n) {
    if (!1 === n.allowIndefinite) throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    return toToken$1(e181, t, 1, 1 / 0);
}
function encodeArray(e182, t) {
    encodeUintValue(e182, Type.array.majorEncoded, t.value);
}
function toToken(e, t, r, n) {
    return new Token(Type.map, n, r);
}
function decodeMapCompact(e183, t, r, n) {
    return toToken(e183, t, 1, r);
}
function decodeMap8(e184, t, r, n) {
    return toToken(e184, t, 2, readUint8(e184, t + 1, n));
}
function decodeMap16(e185, t, r, n) {
    return toToken(e185, t, 3, readUint16(e185, t + 1, n));
}
function decodeMap32(e186, t, r, n) {
    return toToken(e186, t, 5, readUint32(e186, t + 1, n));
}
function decodeMap64(e187, t, r, n) {
    const o = readUint64(e187, t + 1, n);
    if ("bigint" == typeof o) throw new Error(`${decodeErrPrefix} 64-bit integer map lengths not supported`);
    return toToken(e187, t, 9, o);
}
function decodeMapIndefinite(e188, t, r, n) {
    if (!1 === n.allowIndefinite) throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    return toToken(e188, t, 1, 1 / 0);
}
function encodeMap(e189, t) {
    encodeUintValue(e189, Type.map.majorEncoded, t.value);
}
function decodeTagCompact(e, t, r, n) {
    return new Token(Type.tag, r, 1);
}
function decodeTag8(e190, t, r, n) {
    return new Token(Type.tag, readUint8(e190, t + 1, n), 2);
}
function decodeTag16(e191, t, r, n) {
    return new Token(Type.tag, readUint16(e191, t + 1, n), 3);
}
function decodeTag32(e192, t, r, n) {
    return new Token(Type.tag, readUint32(e192, t + 1, n), 5);
}
function decodeTag64(e193, t, r, n) {
    return new Token(Type.tag, readUint64(e193, t + 1, n), 9);
}
function encodeTag(e194, t) {
    encodeUintValue(e194, Type.tag.majorEncoded, t.value);
}
encodeArray.compareTokens = encodeUint.compareTokens, encodeMap.compareTokens = encodeUint.compareTokens, encodeTag.compareTokens = encodeUint.compareTokens;
const MINOR_FALSE = 20, MINOR_TRUE = 21, MINOR_NULL = 22, MINOR_UNDEFINED = 23;
function decodeUndefined(e, t, r, n) {
    if (!1 === n.allowUndefined) throw new Error(`${decodeErrPrefix} undefined values are not supported`);
    return !0 === n.coerceUndefinedToNull ? new Token(Type.null, null, 1) : new Token(Type.undefined, void 0, 1);
}
function decodeBreak(e, t, r, n) {
    if (!1 === n.allowIndefinite) throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
    return new Token(Type.break, void 0, 1);
}
function createToken(e195, t, r) {
    if (r) {
        if (!1 === r.allowNaN && Number.isNaN(e195)) throw new Error(`${decodeErrPrefix} NaN values are not supported`);
        if (!1 === r.allowInfinity && (e195 === 1 / 0 || e195 === -1 / 0)) throw new Error(`${decodeErrPrefix} Infinity values are not supported`);
    }
    return new Token(Type.float, e195, t);
}
function decodeFloat16(e196, t, r, n) {
    return createToken(readFloat16(e196, t + 1), 3, n);
}
function decodeFloat32(e197, t, r, n) {
    return createToken(readFloat32(e197, t + 1), 5, n);
}
function decodeFloat64(e198, t, r, n) {
    return createToken(readFloat64(e198, t + 1), 9, n);
}
function encodeFloat(e199, t, r) {
    const n = t.value;
    if (!1 === n) e199.push([
        Type.float.majorEncoded | MINOR_FALSE
    ]);
    else if (!0 === n) e199.push([
        Type.float.majorEncoded | MINOR_TRUE
    ]);
    else if (null === n) e199.push([
        Type.float.majorEncoded | MINOR_NULL
    ]);
    else if (void 0 === n) e199.push([
        Type.float.majorEncoded | MINOR_UNDEFINED
    ]);
    else {
        let t, o = !1;
        r && !0 === r.float64 || (encodeFloat16(n), t = readFloat16(ui8a, 1), n === t || Number.isNaN(n) ? (ui8a[0] = 249, e199.push(ui8a.slice(0, 3)), o = !0) : (encodeFloat32(n), t = readFloat32(ui8a, 1), n === t && (ui8a[0] = 250, e199.push(ui8a.slice(0, 5)), o = !0))), o || (encodeFloat64(n), t = readFloat64(ui8a, 1), ui8a[0] = 251, e199.push(ui8a.slice(0, 9)));
    }
}
encodeFloat.encodedSize = function(e200, t) {
    const r = e200.value;
    if (!1 === r || !0 === r || null == r) return 1;
    let n;
    if (!t || !0 !== t.float64) {
        if (encodeFloat16(r), n = readFloat16(ui8a, 1), r === n || Number.isNaN(r)) return 3;
        if (encodeFloat32(r), n = readFloat32(ui8a, 1), r === n) return 5;
    }
    return 9;
};
const buffer$1 = new ArrayBuffer(9), dataView = new DataView(buffer$1, 1), ui8a = new Uint8Array(buffer$1, 0);
function encodeFloat16(e201) {
    if (e201 === 1 / 0) dataView.setUint16(0, 31744, !1);
    else if (e201 === -1 / 0) dataView.setUint16(0, 64512, !1);
    else if (Number.isNaN(e201)) dataView.setUint16(0, 32256, !1);
    else {
        dataView.setFloat32(0, e201);
        const t = dataView.getUint32(0), r = (2139095040 & t) >> 23, n = 8388607 & t;
        if (255 === r) dataView.setUint16(0, 31744, !1);
        else if (0 === r) dataView.setUint16(0, (2147483648 & e201) >> 16 | n >> 13, !1);
        else {
            const e202 = r - 127;
            e202 < -24 ? dataView.setUint16(0, 0) : e202 < -14 ? dataView.setUint16(0, (2147483648 & t) >> 16 | 1 << 24 + e202, !1) : dataView.setUint16(0, (2147483648 & t) >> 16 | e202 + 15 << 10 | n >> 13, !1);
        }
    }
}
function readFloat16(e203, t) {
    if (e203.length - t < 2) throw new Error(`${decodeErrPrefix} not enough data for float16`);
    const r = (e203[t] << 8) + e203[t + 1];
    if (31744 === r) return 1 / 0;
    if (64512 === r) return -1 / 0;
    if (32256 === r) return NaN;
    const n = r >> 10 & 31, o = 1023 & r;
    let i24;
    return i24 = 0 === n ? o * 2 ** -24 : 31 !== n ? (o + 1024) * 2 ** (n - 25) : 0 === o ? 1 / 0 : NaN, 32768 & r ? -i24 : i24;
}
function encodeFloat32(e204) {
    dataView.setFloat32(0, e204, !1);
}
function readFloat32(e205, t) {
    if (e205.length - t < 4) throw new Error(`${decodeErrPrefix} not enough data for float32`);
    const r = (e205.byteOffset || 0) + t;
    return new DataView(e205.buffer, r, 4).getFloat32(0, !1);
}
function encodeFloat64(e206) {
    dataView.setFloat64(0, e206, !1);
}
function readFloat64(e207, t) {
    if (e207.length - t < 8) throw new Error(`${decodeErrPrefix} not enough data for float64`);
    const r = (e207.byteOffset || 0) + t;
    return new DataView(e207.buffer, r, 8).getFloat64(0, !1);
}
function invalidMinor(e208, t, r) {
    throw new Error(`${decodeErrPrefix} encountered invalid minor (${r}) for major ${e208[t] >>> 5}`);
}
function errorer(e209) {
    return ()=>{
        throw new Error(`${decodeErrPrefix} ${e209}`);
    };
}
encodeFloat.compareTokens = encodeUint.compareTokens;
const jump = [];
for(let e = 0; e <= 23; e++)jump[e] = invalidMinor;
jump[24] = decodeUint8, jump[25] = decodeUint16, jump[26] = decodeUint32, jump[27] = decodeUint64, jump[28] = invalidMinor, jump[29] = invalidMinor, jump[30] = invalidMinor, jump[31] = invalidMinor;
for(let e1 = 32; e1 <= 55; e1++)jump[e1] = invalidMinor;
jump[56] = decodeNegint8, jump[57] = decodeNegint16, jump[58] = decodeNegint32, jump[59] = decodeNegint64, jump[60] = invalidMinor, jump[61] = invalidMinor, jump[62] = invalidMinor, jump[63] = invalidMinor;
for(let e2 = 64; e2 <= 87; e2++)jump[e2] = decodeBytesCompact;
jump[88] = decodeBytes8, jump[89] = decodeBytes16, jump[90] = decodeBytes32, jump[91] = decodeBytes64, jump[92] = invalidMinor, jump[93] = invalidMinor, jump[94] = invalidMinor, jump[95] = errorer("indefinite length bytes/strings are not supported");
for(let e3 = 96; e3 <= 119; e3++)jump[e3] = decodeStringCompact;
jump[120] = decodeString8, jump[121] = decodeString16, jump[122] = decodeString32, jump[123] = decodeString64, jump[124] = invalidMinor, jump[125] = invalidMinor, jump[126] = invalidMinor, jump[127] = errorer("indefinite length bytes/strings are not supported");
for(let e4 = 128; e4 <= 151; e4++)jump[e4] = decodeArrayCompact;
jump[152] = decodeArray8, jump[153] = decodeArray16, jump[154] = decodeArray32, jump[155] = decodeArray64, jump[156] = invalidMinor, jump[157] = invalidMinor, jump[158] = invalidMinor, jump[159] = decodeArrayIndefinite;
for(let e5 = 160; e5 <= 183; e5++)jump[e5] = decodeMapCompact;
jump[184] = decodeMap8, jump[185] = decodeMap16, jump[186] = decodeMap32, jump[187] = decodeMap64, jump[188] = invalidMinor, jump[189] = invalidMinor, jump[190] = invalidMinor, jump[191] = decodeMapIndefinite;
for(let e6 = 192; e6 <= 215; e6++)jump[e6] = decodeTagCompact;
jump[216] = decodeTag8, jump[217] = decodeTag16, jump[218] = decodeTag32, jump[219] = decodeTag64, jump[220] = invalidMinor, jump[221] = invalidMinor, jump[222] = invalidMinor, jump[223] = invalidMinor;
for(let e7 = 224; e7 <= 243; e7++)jump[e7] = errorer("simple values are not supported");
jump[244] = invalidMinor, jump[245] = invalidMinor, jump[246] = invalidMinor, jump[247] = decodeUndefined, jump[248] = errorer("simple values are not supported"), jump[249] = decodeFloat16, jump[250] = decodeFloat32, jump[251] = decodeFloat64, jump[252] = invalidMinor, jump[253] = invalidMinor, jump[254] = invalidMinor, jump[255] = decodeBreak;
const quick = [];
for(let e8 = 0; e8 < 24; e8++)quick[e8] = new Token(Type.uint, e8, 1);
for(let e9 = -1; e9 >= -24; e9--)quick[31 - e9] = new Token(Type.negint, e9, 1);
function quickEncodeToken(e210) {
    switch(e210.type){
        case Type.false:
            return fromArray([
                244
            ]);
        case Type.true:
            return fromArray([
                245
            ]);
        case Type.null:
            return fromArray([
                246
            ]);
        case Type.bytes:
            return e210.value.length ? void 0 : fromArray([
                64
            ]);
        case Type.string:
            return "" === e210.value ? fromArray([
                96
            ]) : void 0;
        case Type.array:
            return 0 === e210.value ? fromArray([
                128
            ]) : void 0;
        case Type.map:
            return 0 === e210.value ? fromArray([
                160
            ]) : void 0;
        case Type.uint:
            return e210.value < 24 ? fromArray([
                Number(e210.value)
            ]) : void 0;
        case Type.negint:
            if (e210.value >= -24) return fromArray([
                31 - Number(e210.value)
            ]);
    }
}
quick[64] = new Token(Type.bytes, new Uint8Array(0), 1), quick[96] = new Token(Type.string, "", 1), quick[128] = new Token(Type.array, 0, 1), quick[160] = new Token(Type.map, 0, 1), quick[244] = new Token(Type.false, !1, 1), quick[245] = new Token(Type.true, !0, 1), quick[246] = new Token(Type.null, null, 1);
const defaultEncodeOptions = {
    float64: !1,
    mapSorter: mapSorter,
    quickEncodeToken: quickEncodeToken
}, cborEncoders = [];
cborEncoders[Type.uint.major] = encodeUint, cborEncoders[Type.negint.major] = encodeNegint, cborEncoders[Type.bytes.major] = encodeBytes, cborEncoders[Type.string.major] = encodeString, cborEncoders[Type.array.major] = encodeArray, cborEncoders[Type.map.major] = encodeMap, cborEncoders[Type.tag.major] = encodeTag, cborEncoders[Type.float.major] = encodeFloat;
const buf = new Bl;
class Ref {
    constructor(e211, t){
        this.obj = e211, this.parent = t;
    }
    includes(e212) {
        let t = this;
        do {
            if (t.obj === e212) return !0;
        }while (t = t.parent)
        return !1;
    }
    static createCheck(e213, t) {
        if (e213 && e213.includes(t)) throw new Error(`${encodeErrPrefix} object contains circular references`);
        return new Ref(t, e213);
    }
}
const simpleTokens = {
    null: new Token(Type.null, null),
    undefined: new Token(Type.undefined, void 0),
    true: new Token(Type.true, !0),
    false: new Token(Type.false, !1),
    emptyArray: new Token(Type.array, 0),
    emptyMap: new Token(Type.map, 0)
}, typeEncoders = {
    number: (e214, t, r, n)=>Number.isInteger(e214) && Number.isSafeInteger(e214) ? new Token(e214 >= 0 ? Type.uint : Type.negint, e214) : new Token(Type.float, e214)
    ,
    bigint: (e215, t, r, n)=>e215 >= BigInt(0) ? new Token(Type.uint, e215) : new Token(Type.negint, e215)
    ,
    Uint8Array: (e216, t, r, n)=>new Token(Type.bytes, e216)
    ,
    string: (e217, t, r, n)=>new Token(Type.string, e217)
    ,
    boolean: (e218, t, r, n)=>e218 ? simpleTokens.true : simpleTokens.false
    ,
    null: (e, t, r, n)=>simpleTokens.null
    ,
    undefined: (e, t, r, n)=>simpleTokens.undefined
    ,
    ArrayBuffer: (e219, t, r, n)=>new Token(Type.bytes, new Uint8Array(e219))
    ,
    DataView: (e220, t, r, n)=>new Token(Type.bytes, new Uint8Array(e220.buffer, e220.byteOffset, e220.byteLength))
    ,
    Array (e221, t, r, n) {
        if (!e221.length) return !0 === r.addBreakTokens ? [
            simpleTokens.emptyArray,
            new Token(Type.break)
        ] : simpleTokens.emptyArray;
        n = Ref.createCheck(n, e221);
        const o = [];
        let i25 = 0;
        for (const t9 of e221)o[i25++] = objectToTokens(t9, r, n);
        return r.addBreakTokens ? [
            new Token(Type.array, e221.length),
            o,
            new Token(Type.break)
        ] : [
            new Token(Type.array, e221.length),
            o
        ];
    },
    Object (e222, t, r, n) {
        const o = "Object" !== t, i26 = o ? e222.keys() : Object.keys(e222), s = o ? e222.size : i26.length;
        if (!s) return !0 === r.addBreakTokens ? [
            simpleTokens.emptyMap,
            new Token(Type.break)
        ] : simpleTokens.emptyMap;
        n = Ref.createCheck(n, e222);
        const a = [];
        let c = 0;
        for (const t10 of i26)a[c++] = [
            objectToTokens(t10, r, n),
            objectToTokens(o ? e222.get(t10) : e222[t10], r, n)
        ];
        return sortMapEntries(a, r), r.addBreakTokens ? [
            new Token(Type.map, s),
            a,
            new Token(Type.break)
        ] : [
            new Token(Type.map, s),
            a
        ];
    }
};
typeEncoders.Map = typeEncoders.Object, typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const e10 of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" "))typeEncoders[`${e10}Array`] = typeEncoders.DataView;
function objectToTokens(e223, t = {}, r) {
    const n = is(e223), o = t && t.typeEncoders && t.typeEncoders[n] || typeEncoders[n];
    if ("function" == typeof o) {
        const i27 = o(e223, n, t, r);
        if (null != i27) return i27;
    }
    const i28 = typeEncoders[n];
    if (!i28) throw new Error(`${encodeErrPrefix} unsupported type: ${n}`);
    return i28(e223, n, t, r);
}
function sortMapEntries(e224, t) {
    t.mapSorter && e224.sort(t.mapSorter);
}
function mapSorter(e225, t) {
    const r = Array.isArray(e225[0]) ? e225[0][0] : e225[0], n = Array.isArray(t[0]) ? t[0][0] : t[0];
    if (r.type !== n.type) return r.type.compare(n.type);
    const o = r.type.major, i29 = cborEncoders[o].compareTokens(r, n);
    return 0 === i29 && console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone"), i29;
}
function tokensToEncoded(e226, t, r, n) {
    if (Array.isArray(t)) for (const o of t)tokensToEncoded(e226, o, r, n);
    else r[t.type.major](e226, t, n);
}
function encodeCustom(e227, t, r) {
    const n = objectToTokens(e227, r);
    if (!Array.isArray(n) && r.quickEncodeToken) {
        const e228 = r.quickEncodeToken(n);
        if (e228) return e228;
        const o = t[n.type.major];
        if (o.encodedSize) {
            const e229 = o.encodedSize(n, r), t = new Bl(e229);
            if (o(t, n, r), 1 !== t.chunks.length) throw new Error(`Unexpected error: pre-calculated length for ${n} was wrong`);
            return asU8A(t.chunks[0]);
        }
    }
    return tokensToEncoded(buf, n, t, r), buf.toBytes(!0);
}
function encode$5(e230, t) {
    return t = Object.assign({}, defaultEncodeOptions, t), encodeCustom(e230, cborEncoders, t);
}
const defaultDecodeOptions = {
    strict: !1,
    allowIndefinite: !0,
    allowUndefined: !0,
    allowBigInt: !0
};
class Tokeniser {
    constructor(e231, t = {}){
        this.pos = 0, this.data = e231, this.options = t;
    }
    done() {
        return this.pos >= this.data.length;
    }
    next() {
        const e232 = this.data[this.pos];
        let t = quick[e232];
        if (void 0 === t) {
            const r = jump[e232];
            if (!r) throw new Error(`${decodeErrPrefix} no decoder for major type ${e232 >>> 5} (byte 0x${e232.toString(16).padStart(2, "0")})`);
            const n = 31 & e232;
            t = r(this.data, this.pos, n, this.options);
        }
        return this.pos += t.encodedLength, t;
    }
}
const DONE = Symbol.for("DONE"), BREAK = Symbol.for("BREAK");
function tokenToArray(e233, t, r) {
    const n = [];
    for(let o = 0; o < e233.value; o++){
        const i30 = tokensToObject(t, r);
        if (i30 === BREAK) {
            if (e233.value === 1 / 0) break;
            throw new Error(`${decodeErrPrefix} got unexpected break to lengthed array`);
        }
        if (i30 === DONE) throw new Error(`${decodeErrPrefix} found array but not enough entries (got ${o}, expected ${e233.value})`);
        n[o] = i30;
    }
    return n;
}
function tokenToMap(e234, t, r) {
    const n = !0 === r.useMaps, o = n ? void 0 : {}, i31 = n ? new Map : void 0;
    for(let s = 0; s < e234.value; s++){
        const a = tokensToObject(t, r);
        if (a === BREAK) {
            if (e234.value === 1 / 0) break;
            throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`);
        }
        if (a === DONE) throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${s} [no key], expected ${e234.value})`);
        if (!0 !== n && "string" != typeof a) throw new Error(`${decodeErrPrefix} non-string keys not supported (got ${typeof a})`);
        const c = tokensToObject(t, r);
        if (c === DONE) throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${s} [no value], expected ${e234.value})`);
        n ? i31.set(a, c) : o[a] = c;
    }
    return n ? i31 : o;
}
function tokensToObject(e235, t) {
    if (e235.done()) return DONE;
    const r = e235.next();
    if (r.type === Type.break) return BREAK;
    if (r.type.terminal) return r.value;
    if (r.type === Type.array) return tokenToArray(r, e235, t);
    if (r.type === Type.map) return tokenToMap(r, e235, t);
    if (r.type === Type.tag) {
        if (t.tags && "function" == typeof t.tags[r.value]) {
            const n = tokensToObject(e235, t);
            return t.tags[r.value](n);
        }
        throw new Error(`${decodeErrPrefix} tag not supported (${r.value})`);
    }
    throw new Error("unsupported");
}
function decode$5(e236, t) {
    if (!(e236 instanceof Uint8Array)) throw new Error(`${decodeErrPrefix} data to decode must be a Uint8Array`);
    const r = (t = Object.assign({}, defaultDecodeOptions, t)).tokenizer || new Tokeniser(e236, t), n = tokensToObject(r, t);
    if (n === DONE) throw new Error(`${decodeErrPrefix} did not find any content to decode`);
    if (n === BREAK) throw new Error(`${decodeErrPrefix} got unexpected break`);
    if (!r.done()) throw new Error(`${decodeErrPrefix} too many terminals, data makes no sense`);
    return n;
}
const CID_CBOR_TAG$2 = 42;
function cidEncoder$1(e237) {
    if (e237.asCID !== e237) return null;
    const t = CID.asCID(e237);
    if (!t) return null;
    const r = new Uint8Array(t.bytes.byteLength + 1);
    return r.set(t.bytes, 1), [
        new Token(Type.tag, CID_CBOR_TAG$2),
        new Token(Type.bytes, r)
    ];
}
function undefinedEncoder$1() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
}
function numberEncoder$1(e238) {
    if (Number.isNaN(e238)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    if (e238 === 1 / 0 || e238 === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    return null;
}
const encodeOptions$1 = {
    float64: !0,
    typeEncoders: {
        Object: cidEncoder$1,
        undefined: undefinedEncoder$1,
        number: numberEncoder$1
    }
};
function cidDecoder$2(e239) {
    if (0 !== e239[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    return CID.decode(e239.subarray(1));
}
const decodeOptions$2 = {
    allowIndefinite: !1,
    coerceUndefinedToNull: !0,
    allowNaN: !1,
    allowInfinity: !1,
    allowBigInt: !0,
    strict: !0,
    useMaps: !1,
    tags: []
};
decodeOptions$2.tags[CID_CBOR_TAG$2] = cidDecoder$2;
const encode$4 = (e240)=>encode$5(e240, encodeOptions$1)
, decode$4 = (e241)=>decode$5(e241, decodeOptions$2)
, CIDV0_BYTES = {
    SHA2_256: 18,
    LENGTH: 32,
    DAG_PB: 112
};
async function readVarint(e242) {
    const t = await e242.upTo(8), r = varint$1.decode(t);
    return e242.seek(varint$1.decode.bytes), r;
}
async function readHeader(e243) {
    const t = await readVarint(e243);
    if (0 === t) throw new Error("Invalid CAR header (zero length)");
    const r = await e243.exactly(t);
    e243.seek(t);
    const n = decode$4(r);
    if (null == n || Array.isArray(n) || "object" != typeof n) throw new Error("Invalid CAR header format");
    if (1 !== n.version) {
        if ("string" == typeof n.version) throw new Error(`Invalid CAR version: "${n.version}"`);
        throw new Error(`Invalid CAR version: ${n.version}`);
    }
    if (!Array.isArray(n.roots)) throw new Error("Invalid CAR header format");
    if (Object.keys(n).filter((e244)=>"roots" !== e244 && "version" !== e244
    ).length) throw new Error("Invalid CAR header format");
    return n;
}
async function readMultihash(e245) {
    const t = await e245.upTo(8);
    varint$1.decode(t);
    const r = varint$1.decode.bytes, n = varint$1.decode(t.subarray(varint$1.decode.bytes)), o = r + varint$1.decode.bytes + n, i32 = await e245.exactly(o);
    return e245.seek(o), i32;
}
async function readCid(e246) {
    const t = await e246.exactly(2);
    if (t[0] === CIDV0_BYTES.SHA2_256 && t[1] === CIDV0_BYTES.LENGTH) {
        const t = await e246.exactly(34);
        e246.seek(34);
        const r = decode$7(t);
        return CID.create(0, CIDV0_BYTES.DAG_PB, r);
    }
    const r = await readVarint(e246);
    if (1 !== r) throw new Error(`Unexpected CID version (${r})`);
    const n = await readVarint(e246), o = await readMultihash(e246), i33 = decode$7(o);
    return CID.create(r, n, i33);
}
async function readBlockHead(e247) {
    const t = e247.pos;
    let r = await readVarint(e247);
    if (0 === r) throw new Error("Invalid CAR section (zero length)");
    r += e247.pos - t;
    return {
        cid: await readCid(e247),
        length: r,
        blockLength: r - (e247.pos - t)
    };
}
async function readBlock(e248) {
    const { cid: t , blockLength: r  } = await readBlockHead(e248), n = await e248.exactly(r);
    return e248.seek(r), {
        bytes: n,
        cid: t
    };
}
async function readBlockIndex(e249) {
    const t = e249.pos, { cid: r , length: n , blockLength: o  } = await readBlockHead(e249), i34 = {
        cid: r,
        length: n,
        blockLength: o,
        offset: t,
        blockOffset: e249.pos
    };
    return e249.seek(i34.blockLength), i34;
}
function createDecoder(e250) {
    const t = readHeader(e250);
    return {
        header: ()=>t
        ,
        async *blocks () {
            for(await t; (await e250.upTo(8)).length > 0;)yield await readBlock(e250);
        },
        async *blocksIndex () {
            for(await t; (await e250.upTo(8)).length > 0;)yield await readBlockIndex(e250);
        }
    };
}
function bytesReader(e251) {
    let t = 0;
    return {
        upTo: async (r)=>e251.subarray(t, t + Math.min(r, e251.length - t))
        ,
        async exactly (r) {
            if (r > e251.length - t) throw new Error("Unexpected end of data");
            return e251.subarray(t, t + r);
        },
        seek (e252) {
            t += e252;
        },
        get pos () {
            return t;
        }
    };
}
function chunkReader(e254) {
    let t11 = 0, r = 0, n = 0, o = new Uint8Array(0);
    const i35 = async (t12)=>{
        r = o.length - n;
        const i36 = [
            o.subarray(n)
        ];
        for(; r < t12;){
            const t = await e254();
            if (null == t) break;
            r < 0 ? t.length > r && i36.push(t.subarray(-r)) : i36.push(t), r += t.length;
        }
        o = new Uint8Array(i36.reduce((e255, t)=>e255 + t.length
        , 0));
        let s = 0;
        for (const e253 of i36)o.set(e253, s), s += e253.length;
        n = 0;
    };
    return {
        upTo: async (e256)=>(o.length - n < e256 && await i35(e256), o.subarray(n, n + Math.min(o.length - n, e256)))
        ,
        async exactly (e257) {
            if (o.length - n < e257 && await i35(e257), o.length - n < e257) throw new Error("Unexpected end of data");
            return o.subarray(n, n + e257);
        },
        seek (e258) {
            t11 += e258, n += e258;
        },
        get pos () {
            return t11;
        }
    };
}
function asyncIterableReader(e259) {
    const t = e259[Symbol.asyncIterator]();
    return chunkReader(async function() {
        const e260 = await t.next();
        return e260.done ? null : e260.value;
    });
}
class CarReader {
    constructor(e261, t, r){
        this._version = e261, this._roots = t, this._blocks = r, this._keys = r.map((e262)=>e262.cid.toString()
        );
    }
    get version() {
        return this._version;
    }
    async getRoots() {
        return this._roots;
    }
    async has(e263) {
        return this._keys.indexOf(e263.toString()) > -1;
    }
    async get(e264) {
        const t = this._keys.indexOf(e264.toString());
        return t > -1 ? this._blocks[t] : void 0;
    }
    async *blocks() {
        for (const e265 of this._blocks)yield e265;
    }
    async *cids() {
        for (const e266 of this._blocks)yield e266.cid;
    }
    static async fromBytes(e267) {
        if (!(e267 instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array");
        return decodeReaderComplete(bytesReader(e267));
    }
    static async fromIterable(e268) {
        if (!e268 || "function" != typeof e268[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable");
        return decodeReaderComplete(asyncIterableReader(e268));
    }
}
async function decodeReaderComplete(e270) {
    const t = createDecoder(e270), { version: r , roots: n  } = await t.header(), o = [];
    for await (const e269 of t.blocks())o.push(e269);
    return new CarReader(r, n, o);
}
class CarIteratorBase {
    constructor(e271, t, r){
        this._version = e271, this._roots = t, this._iterable = r, this._decoded = !1;
    }
    get version() {
        return this._version;
    }
    async getRoots() {
        return this._roots;
    }
}
class CarBlockIterator extends CarIteratorBase {
    [Symbol.asyncIterator]() {
        if (this._decoded) throw new Error("Cannot decode more than once");
        if (!this._iterable) throw new Error("Block iterable not found");
        return this._decoded = !0, this._iterable[Symbol.asyncIterator]();
    }
    static async fromBytes(e272) {
        const { version: t , roots: r , iterator: n  } = await fromBytes(e272);
        return new CarBlockIterator(t, r, n);
    }
    static async fromIterable(e273) {
        const { version: t , roots: r , iterator: n  } = await fromIterable(e273);
        return new CarBlockIterator(t, r, n);
    }
}
async function fromBytes(e274) {
    if (!(e274 instanceof Uint8Array)) throw new TypeError("fromBytes() requires a Uint8Array");
    return decodeIterator(bytesReader(e274));
}
async function fromIterable(e275) {
    if (!e275 || "function" != typeof e275[Symbol.asyncIterator]) throw new TypeError("fromIterable() requires an async iterable");
    return decodeIterator(asyncIterableReader(e275));
}
async function decodeIterator(e276) {
    const t = createDecoder(e276), { version: r , roots: n  } = await t.header();
    return {
        version: r,
        roots: n,
        iterator: t.blocks()
    };
}
function createHeader(e277) {
    const t = encode$4({
        version: 1,
        roots: e277
    }), r = varint$1.encode(t.length), n = new Uint8Array(r.length + t.length);
    return n.set(r, 0), n.set(t, r.length), n;
}
function createEncoder(e278) {
    return {
        async setRoots (t) {
            const r = createHeader(t);
            await e278.write(r);
        },
        async writeBlock (t) {
            const { cid: r , bytes: n  } = t;
            await e278.write(new Uint8Array(varint$1.encode(r.bytes.length + n.length))), await e278.write(r.bytes), n.length && await e278.write(n);
        },
        close: async ()=>e278.end()
    };
}
function noop$1() {}
function create$3() {
    const e279 = [];
    let t13 = null, r8 = noop$1, n = !1, o = null, i37 = noop$1;
    const s = ()=>(t13 || (t13 = new Promise((e280)=>{
            r8 = ()=>{
                t13 = null, r8 = noop$1, e280();
            };
        })), t13)
    , a = {
        write (t) {
            e279.push(t);
            const r = s();
            return i37(), r;
        },
        async end () {
            n = !0;
            const e281 = s();
            return i37(), e281;
        }
    }, c = {
        async next () {
            const t = e279.shift();
            return t ? (0 === e279.length && r8(), {
                done: !1,
                value: t
            }) : n ? (r8(), {
                done: !0,
                value: void 0
            }) : (o || (o = new Promise((e282)=>{
                i37 = ()=>(o = null, i37 = noop$1, e282(c.next()))
                ;
            })), o);
        }
    };
    return {
        writer: a,
        iterator: c
    };
}
class CarWriter {
    constructor(e283, t){
        this._encoder = t, this._mutex = t.setRoots(e283), this._ended = !1;
    }
    async put(e284) {
        if (!(e284.bytes instanceof Uint8Array && e284.cid)) throw new TypeError("Can only write {cid, bytes} objects");
        if (this._ended) throw new Error("Already closed");
        const t = CID.asCID(e284.cid);
        if (!t) throw new TypeError("Can only write {cid, bytes} objects");
        return this._mutex = this._mutex.then(()=>this._encoder.writeBlock({
                cid: t,
                bytes: e284.bytes
            })
        ), this._mutex;
    }
    async close() {
        if (this._ended) throw new Error("Already closed");
        return await this._mutex, this._ended = !0, this._encoder.close();
    }
    static create(e285) {
        e285 = toRoots(e285);
        const { encoder: t , iterator: r  } = encodeWriter();
        return {
            writer: new CarWriter(e285, t),
            out: new CarWriterOut(r)
        };
    }
    static createAppender() {
        const { encoder: e286 , iterator: t  } = encodeWriter();
        e286.setRoots = ()=>Promise.resolve()
        ;
        return {
            writer: new CarWriter([], e286),
            out: new CarWriterOut(t)
        };
    }
    static async updateRootsInBytes(e287, t) {
        const r = bytesReader(e287);
        await readHeader(r);
        const n = createHeader(t);
        if (r.pos !== n.length) throw new Error(`updateRoots() can only overwrite a header of the same length (old header is ${r.pos} bytes, new header is ${n.length} bytes)`);
        return e287.set(n, 0), e287;
    }
}
class CarWriterOut {
    constructor(e288){
        this._iterator = e288;
    }
    [Symbol.asyncIterator]() {
        if (this._iterating) throw new Error("Multiple iterator not supported");
        return this._iterating = !0, this._iterator;
    }
}
function encodeWriter() {
    const e289 = create$3(), { writer: t , iterator: r  } = e289;
    return {
        encoder: createEncoder(t),
        iterator: r
    };
}
function toRoots(e290) {
    if (void 0 === e290) return [];
    if (!Array.isArray(e290)) {
        const t = CID.asCID(e290);
        if (!t) throw new TypeError("roots must be a single CID or an array of CIDs");
        return [
            t
        ];
    }
    const t = [];
    for (const r of e290){
        const e291 = CID.asCID(r);
        if (!e291) throw new TypeError("roots must be a single CID or an array of CIDs");
        t.push(e291);
    }
    return t;
}
async function* batch$1(e292, t = 1) {
    let r = [];
    t < 1 && (t = 1);
    for await (const n of e292)for(r.push(n); r.length >= t;)yield r.slice(0, t), r = r.slice(t);
    for(; r.length;)yield r.slice(0, t), r = r.slice(t);
}
var itBatch = batch$1;
const batch = itBatch;
async function* parallelBatch(e293, t = 1) {
    for await (const r of batch(e293, t)){
        const e294 = r.map((e296)=>e296().then((e297)=>({
                    ok: !0,
                    value: e297
                })
            , (e298)=>({
                    ok: !1,
                    err: e298
                })
            )
        );
        for(let t = 0; t < e294.length; t++){
            const r = await e294[t];
            if (!r.ok) throw r.err;
            yield r.value;
        }
    }
}
var itParallelBatch = parallelBatch, isPlainObj = (e299)=>{
    if ("[object Object]" !== Object.prototype.toString.call(e299)) return !1;
    const t = Object.getPrototypeOf(e299);
    return null === t || t === Object.prototype;
};
const isOptionObject = isPlainObj, { hasOwnProperty: hasOwnProperty  } = Object.prototype, { propertyIsEnumerable: propertyIsEnumerable  } = Object, defineProperty = (e300, t, r)=>Object.defineProperty(e300, t, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
, globalThis$1 = commonjsGlobal, defaultMergeOptions = {
    concatArrays: !1,
    ignoreUndefined: !1
}, getEnumerableOwnPropertyKeys = (e301)=>{
    const t = [];
    for(const r in e301)hasOwnProperty.call(e301, r) && t.push(r);
    if (Object.getOwnPropertySymbols) {
        const r = Object.getOwnPropertySymbols(e301);
        for (const n of r)propertyIsEnumerable.call(e301, n) && t.push(n);
    }
    return t;
};
function clone(e302) {
    return Array.isArray(e302) ? cloneArray(e302) : isOptionObject(e302) ? cloneOptionObject(e302) : e302;
}
function cloneArray(e303) {
    const t = e303.slice(0, 0);
    return getEnumerableOwnPropertyKeys(e303).forEach((r)=>{
        defineProperty(t, r, clone(e303[r]));
    }), t;
}
function cloneOptionObject(e304) {
    const t = null === Object.getPrototypeOf(e304) ? Object.create(null) : {};
    return getEnumerableOwnPropertyKeys(e304).forEach((r)=>{
        defineProperty(t, r, clone(e304[r]));
    }), t;
}
const mergeKeys = (e305, t, r9, n)=>(r9.forEach((r)=>{
        void 0 === t[r] && n.ignoreUndefined || (r in e305 && e305[r] !== Object.getPrototypeOf(e305) ? defineProperty(e305, r, merge(e305[r], t[r], n)) : defineProperty(e305, r, clone(t[r])));
    }), e305)
, concatArrays = (e306, t14, r10)=>{
    let n = e306.slice(0, 0), o = 0;
    return [
        e306,
        t14
    ].forEach((t)=>{
        const i38 = [];
        for(let r = 0; r < t.length; r++)hasOwnProperty.call(t, r) && (i38.push(String(r)), defineProperty(n, o++, t === e306 ? t[r] : clone(t[r])));
        n = mergeKeys(n, t, getEnumerableOwnPropertyKeys(t).filter((e307)=>!i38.includes(e307)
        ), r10);
    }), n;
};
function merge(e308, t, r) {
    return r.concatArrays && Array.isArray(e308) && Array.isArray(t) ? concatArrays(e308, t, r) : isOptionObject(t) && isOptionObject(e308) ? mergeKeys(e308, t, getEnumerableOwnPropertyKeys(t), r) : clone(t);
}
var mergeOptions = function(...e309) {
    const t = merge(clone(defaultMergeOptions), this !== globalThis$1 && this || {}, defaultMergeOptions);
    let r = {
        _: {}
    };
    for (const n of e309)if (void 0 !== n) {
        if (!isOptionObject(n)) throw new TypeError("`" + n + "` is not an Option Object");
        r = merge(r, {
            _: n
        }, t);
    }
    return r._;
};
const from = ({ name: e310 , code: t , encode: r  })=>new Hasher(e310, t, r)
;
class Hasher {
    constructor(e311, t, r){
        this.name = e311, this.code = t, this.encode = r;
    }
    digest(e312) {
        if (e312 instanceof Uint8Array) {
            const t = this.encode(e312);
            return t instanceof Uint8Array ? create$4(this.code, t) : t.then((e313)=>create$4(this.code, e313)
            );
        }
        throw Error("Unknown type, must be binary type");
    }
}
const sha = (e314)=>async (t)=>new Uint8Array(await crypto.subtle.digest(e314, t))
, sha256 = from({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
}), sha512 = from({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
});
var sha2 = Object.freeze({
    __proto__: null,
    sha256: sha256,
    sha512: sha512
}), murmurHash3js = {
    exports: {}
}, module, exports1;
module = murmurHash3js, exports1 = murmurHash3js.exports, function(e315, t15) {
    var r11 = {
        version: "3.0.0",
        x86: {},
        x64: {},
        inputValidation: !0
    };
    function n(e316) {
        if (!Array.isArray(e316) && !ArrayBuffer.isView(e316)) return !1;
        for(var t = 0; t < e316.length; t++)if (!Number.isInteger(e316[t]) || e316[t] < 0 || e316[t] > 255) return !1;
        return !0;
    }
    function o3(e317, t) {
        return (65535 & e317) * t + (((e317 >>> 16) * t & 65535) << 16);
    }
    function i39(e318, t) {
        return e318 << t | e318 >>> 32 - t;
    }
    function s3(e319) {
        return e319 = o3(e319 ^= e319 >>> 16, 2246822507), e319 = o3(e319 ^= e319 >>> 13, 3266489909), e319 ^= e319 >>> 16;
    }
    function a1(e320, t) {
        e320 = [
            e320[0] >>> 16,
            65535 & e320[0],
            e320[1] >>> 16,
            65535 & e320[1]
        ], t = [
            t[0] >>> 16,
            65535 & t[0],
            t[1] >>> 16,
            65535 & t[1]
        ];
        var r = [
            0,
            0,
            0,
            0
        ];
        return r[3] += e320[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e320[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e320[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e320[0] + t[0], r[0] &= 65535, [
            r[0] << 16 | r[1],
            r[2] << 16 | r[3]
        ];
    }
    function c1(e321, t) {
        e321 = [
            e321[0] >>> 16,
            65535 & e321[0],
            e321[1] >>> 16,
            65535 & e321[1]
        ], t = [
            t[0] >>> 16,
            65535 & t[0],
            t[1] >>> 16,
            65535 & t[1]
        ];
        var r = [
            0,
            0,
            0,
            0
        ];
        return r[3] += e321[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e321[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e321[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e321[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e321[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e321[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e321[0] * t[3] + e321[1] * t[2] + e321[2] * t[1] + e321[3] * t[0], r[0] &= 65535, [
            r[0] << 16 | r[1],
            r[2] << 16 | r[3]
        ];
    }
    function u2(e322, t) {
        return 32 == (t %= 64) ? [
            e322[1],
            e322[0]
        ] : t < 32 ? [
            e322[0] << t | e322[1] >>> 32 - t,
            e322[1] << t | e322[0] >>> 32 - t
        ] : (t -= 32, [
            e322[1] << t | e322[0] >>> 32 - t,
            e322[0] << t | e322[1] >>> 32 - t
        ]);
    }
    function f2(e323, t) {
        return 0 == (t %= 64) ? e323 : t < 32 ? [
            e323[0] << t | e323[1] >>> 32 - t,
            e323[1] << t
        ] : [
            e323[1] << t - 32,
            0
        ];
    }
    function l2(e324, t) {
        return [
            e324[0] ^ t[0],
            e324[1] ^ t[1]
        ];
    }
    function h1(e325) {
        return e325 = l2(e325, [
            0,
            e325[0] >>> 1
        ]), e325 = l2(e325 = c1(e325, [
            4283543511,
            3981806797
        ]), [
            0,
            e325[0] >>> 1
        ]), e325 = l2(e325 = c1(e325, [
            3301882366,
            444984403
        ]), [
            0,
            e325[0] >>> 1
        ]);
    }
    r11.x86.hash32 = function(e326, a) {
        if (r11.inputValidation && !n(e326)) return t15;
        a = a || 0;
        for(var c = e326.length % 4, u = e326.length - c, f = a, l = 0, h = 3432918353, d = 461845907, p = 0; p < u; p += 4)l = o3(l = e326[p] | e326[p + 1] << 8 | e326[p + 2] << 16 | e326[p + 3] << 24, h), l = o3(l = i39(l, 15), d), f = o3(f = i39(f ^= l, 13), 5) + 3864292196;
        switch(l = 0, c){
            case 3:
                l ^= e326[p + 2] << 16;
            case 2:
                l ^= e326[p + 1] << 8;
            case 1:
                l = o3(l ^= e326[p], h), f ^= l = o3(l = i39(l, 15), d);
        }
        return (f = s3(f ^= e326.length)) >>> 0;
    }, r11.x86.hash128 = function(e327, a) {
        if (r11.inputValidation && !n(e327)) return t15;
        a = a || 0;
        for(var c = e327.length % 16, u = e327.length - c, f = a, l = a, h = a, d = a, p = 0, y = 0, g = 0, m = 0, b = 597399067, w = 2869860233, _ = 951274213, E = 2716044179, T = 0; T < u; T += 16)p = e327[T] | e327[T + 1] << 8 | e327[T + 2] << 16 | e327[T + 3] << 24, y = e327[T + 4] | e327[T + 5] << 8 | e327[T + 6] << 16 | e327[T + 7] << 24, g = e327[T + 8] | e327[T + 9] << 8 | e327[T + 10] << 16 | e327[T + 11] << 24, m = e327[T + 12] | e327[T + 13] << 8 | e327[T + 14] << 16 | e327[T + 15] << 24, p = i39(p = o3(p, b), 15), f = i39(f ^= p = o3(p, w), 19), f = o3(f += l, 5) + 1444728091, y = i39(y = o3(y, w), 16), l = i39(l ^= y = o3(y, _), 17), l = o3(l += h, 5) + 197830471, g = i39(g = o3(g, _), 17), h = i39(h ^= g = o3(g, E), 15), h = o3(h += d, 5) + 2530024501, m = i39(m = o3(m, E), 18), d = i39(d ^= m = o3(m, b), 13), d = o3(d += f, 5) + 850148119;
        switch(p = 0, y = 0, g = 0, m = 0, c){
            case 15:
                m ^= e327[T + 14] << 16;
            case 14:
                m ^= e327[T + 13] << 8;
            case 13:
                m = o3(m ^= e327[T + 12], E), d ^= m = o3(m = i39(m, 18), b);
            case 12:
                g ^= e327[T + 11] << 24;
            case 11:
                g ^= e327[T + 10] << 16;
            case 10:
                g ^= e327[T + 9] << 8;
            case 9:
                g = o3(g ^= e327[T + 8], _), h ^= g = o3(g = i39(g, 17), E);
            case 8:
                y ^= e327[T + 7] << 24;
            case 7:
                y ^= e327[T + 6] << 16;
            case 6:
                y ^= e327[T + 5] << 8;
            case 5:
                y = o3(y ^= e327[T + 4], w), l ^= y = o3(y = i39(y, 16), _);
            case 4:
                p ^= e327[T + 3] << 24;
            case 3:
                p ^= e327[T + 2] << 16;
            case 2:
                p ^= e327[T + 1] << 8;
            case 1:
                p = o3(p ^= e327[T], b), f ^= p = o3(p = i39(p, 15), w);
        }
        return f ^= e327.length, f += l ^= e327.length, f += h ^= e327.length, l += f += d ^= e327.length, h += f, d += f, f = s3(f), f += l = s3(l), f += h = s3(h), l += f += d = s3(d), h += f, d += f, ("00000000" + (f >>> 0).toString(16)).slice(-8) + ("00000000" + (l >>> 0).toString(16)).slice(-8) + ("00000000" + (h >>> 0).toString(16)).slice(-8) + ("00000000" + (d >>> 0).toString(16)).slice(-8);
    }, r11.x64.hash128 = function(e328, o) {
        if (r11.inputValidation && !n(e328)) return t15;
        o = o || 0;
        for(var i40 = e328.length % 16, s = e328.length - i40, d = [
            0,
            o
        ], p = [
            0,
            o
        ], y = [
            0,
            0
        ], g = [
            0,
            0
        ], m = [
            2277735313,
            289559509
        ], b = [
            1291169091,
            658871167
        ], w = 0; w < s; w += 16)y = [
            e328[w + 4] | e328[w + 5] << 8 | e328[w + 6] << 16 | e328[w + 7] << 24,
            e328[w] | e328[w + 1] << 8 | e328[w + 2] << 16 | e328[w + 3] << 24
        ], g = [
            e328[w + 12] | e328[w + 13] << 8 | e328[w + 14] << 16 | e328[w + 15] << 24,
            e328[w + 8] | e328[w + 9] << 8 | e328[w + 10] << 16 | e328[w + 11] << 24
        ], y = u2(y = c1(y, m), 31), d = a1(d = u2(d = l2(d, y = c1(y, b)), 27), p), d = a1(c1(d, [
            0,
            5
        ]), [
            0,
            1390208809
        ]), g = u2(g = c1(g, b), 33), p = a1(p = u2(p = l2(p, g = c1(g, m)), 31), d), p = a1(c1(p, [
            0,
            5
        ]), [
            0,
            944331445
        ]);
        switch(y = [
            0,
            0
        ], g = [
            0,
            0
        ], i40){
            case 15:
                g = l2(g, f2([
                    0,
                    e328[w + 14]
                ], 48));
            case 14:
                g = l2(g, f2([
                    0,
                    e328[w + 13]
                ], 40));
            case 13:
                g = l2(g, f2([
                    0,
                    e328[w + 12]
                ], 32));
            case 12:
                g = l2(g, f2([
                    0,
                    e328[w + 11]
                ], 24));
            case 11:
                g = l2(g, f2([
                    0,
                    e328[w + 10]
                ], 16));
            case 10:
                g = l2(g, f2([
                    0,
                    e328[w + 9]
                ], 8));
            case 9:
                g = c1(g = l2(g, [
                    0,
                    e328[w + 8]
                ]), b), p = l2(p, g = c1(g = u2(g, 33), m));
            case 8:
                y = l2(y, f2([
                    0,
                    e328[w + 7]
                ], 56));
            case 7:
                y = l2(y, f2([
                    0,
                    e328[w + 6]
                ], 48));
            case 6:
                y = l2(y, f2([
                    0,
                    e328[w + 5]
                ], 40));
            case 5:
                y = l2(y, f2([
                    0,
                    e328[w + 4]
                ], 32));
            case 4:
                y = l2(y, f2([
                    0,
                    e328[w + 3]
                ], 24));
            case 3:
                y = l2(y, f2([
                    0,
                    e328[w + 2]
                ], 16));
            case 2:
                y = l2(y, f2([
                    0,
                    e328[w + 1]
                ], 8));
            case 1:
                y = c1(y = l2(y, [
                    0,
                    e328[w]
                ]), m), d = l2(d, y = c1(y = u2(y, 31), b));
        }
        return d = a1(d = l2(d, [
            0,
            e328.length
        ]), p = l2(p, [
            0,
            e328.length
        ])), p = a1(p, d), d = a1(d = h1(d), p = h1(p)), p = a1(p, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (p[1] >>> 0).toString(16)).slice(-8);
    }, module.exports && (exports1 = module.exports = r11), exports1.murmurHash3 = r11;
}();
var murmurhash3jsRevisited = murmurHash3js.exports;
function fromNumberTo32BitBuf(e329) {
    const t = new Array(4);
    for(let r = 0; r < 4; r++)t[r] = 255 & e329, e329 >>= 8;
    return new Uint8Array(t);
}
from({
    name: "murmur3-32",
    code: 35,
    encode: (e330)=>fromNumberTo32BitBuf(murmurhash3jsRevisited.x86.hash32(e330))
});
const murmur3128 = from({
    name: "murmur3-128",
    code: 34,
    encode: (e331)=>fromHex(murmurhash3jsRevisited.x64.hash128(e331))
});
async function hamtHashFn(e332) {
    return (await murmur3128.encode(e332)).slice(0, 8).reverse();
}
const defaultOptions = {
    chunker: "fixed",
    strategy: "balanced",
    rawLeaves: !1,
    onlyHash: !1,
    reduceSingleLeafToSelf: !0,
    hasher: sha256,
    leafType: "file",
    cidVersion: 0,
    progress: ()=>()=>{}
    ,
    shardSplitThreshold: 1000,
    fileImportConcurrency: 50,
    blockWriteConcurrency: 10,
    minChunkSize: 262144,
    maxChunkSize: 262144,
    avgChunkSize: 262144,
    window: 16,
    polynomial: 17437180132763652,
    maxChildrenPerNode: 174,
    layerRepeat: 4,
    wrapWithDirectory: !1,
    recursive: !1,
    hidden: !1,
    timeout: void 0,
    hamtHashFn: hamtHashFn,
    hamtHashCode: 34,
    hamtBucketBits: 8
};
var defaultOptions$1 = (e333 = {})=>mergeOptions.bind({
        ignoreUndefined: !0
    })(defaultOptions, e333)
;
function assign(e334, t) {
    for(const r in t)Object.defineProperty(e334, r, {
        value: t[r],
        enumerable: !0,
        configurable: !0
    });
    return e334;
}
function createError(e335, t, r) {
    if (!e335 || "string" == typeof e335) throw new TypeError("Please pass an Error to err-code");
    r || (r = {}), "object" == typeof t && (r = t, t = ""), t && (r.code = t);
    try {
        return assign(e335, r);
    } catch (t16) {
        r.message = e335.message, r.stack = e335.stack;
        const n = function() {};
        n.prototype = Object.create(Object.getPrototypeOf(e335));
        return assign(new n, r);
    }
}
var errCode = createError, indexMinimal = {}, minimal$1 = {}, aspromise = asPromise;
function asPromise(e336, t17) {
    for(var r12 = new Array(arguments.length - 1), n = 0, o4 = 2, i41 = !0; o4 < arguments.length;)r12[n++] = arguments[o4++];
    return new Promise(function(o, s) {
        r12[n] = function(e337) {
            if (i41) {
                if (i41 = !1, e337) s(e337);
                else {
                    for(var t = new Array(arguments.length - 1), r = 0; r < t.length;)t[r++] = arguments[r];
                    o.apply(null, t);
                }
            }
        };
        try {
            e336.apply(t17 || null, r12);
        } catch (e338) {
            i41 && (i41 = !1, s(e338));
        }
    });
}
var base64$3 = {};
!function(e339) {
    var t18 = base64$3;
    t18.length = function(e340) {
        var t = e340.length;
        if (!t) return 0;
        for(var r = 0; --t % 4 > 1 && "=" === e340.charAt(t);)++r;
        return Math.ceil(3 * e340.length) / 4 - r;
    };
    for(var r13 = new Array(64), n5 = new Array(123), o5 = 0; o5 < 64;)n5[r13[o5] = o5 < 26 ? o5 + 65 : o5 < 52 ? o5 + 71 : o5 < 62 ? o5 - 4 : o5 - 59 | 43] = o5++;
    t18.encode = function(e341, t, n) {
        for(var o, i43 = null, s = [], a = 0, c = 0; t < n;){
            var u = e341[t++];
            switch(c){
                case 0:
                    s[a++] = r13[u >> 2], o = (3 & u) << 4, c = 1;
                    break;
                case 1:
                    s[a++] = r13[o | u >> 4], o = (15 & u) << 2, c = 2;
                    break;
                case 2:
                    s[a++] = r13[o | u >> 6], s[a++] = r13[63 & u], c = 0;
            }
            a > 8191 && ((i43 || (i43 = [])).push(String.fromCharCode.apply(String, s)), a = 0);
        }
        return c && (s[a++] = r13[o], s[a++] = 61, 1 === c && (s[a++] = 61)), i43 ? (a && i43.push(String.fromCharCode.apply(String, s.slice(0, a))), i43.join("")) : String.fromCharCode.apply(String, s.slice(0, a));
    };
    var i42 = "invalid encoding";
    t18.decode = function(e342, t, r) {
        for(var o, s = r, a = 0, c = 0; c < e342.length;){
            var u = e342.charCodeAt(c++);
            if (61 === u && a > 1) break;
            if (void 0 === (u = n5[u])) throw Error(i42);
            switch(a){
                case 0:
                    o = u, a = 1;
                    break;
                case 1:
                    t[r++] = o << 2 | (48 & u) >> 4, o = u, a = 2;
                    break;
                case 2:
                    t[r++] = (15 & o) << 4 | (60 & u) >> 2, o = u, a = 3;
                    break;
                case 3:
                    t[r++] = (3 & o) << 6 | u, a = 0;
            }
        }
        if (1 === a) throw Error(i42);
        return r - s;
    }, t18.test = function(e343) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e343);
    };
}();
var eventemitter = EventEmitter;
function EventEmitter() {
    this._listeners = {};
}
EventEmitter.prototype.on = function(e344, t, r) {
    return (this._listeners[e344] || (this._listeners[e344] = [])).push({
        fn: t,
        ctx: r || this
    }), this;
}, EventEmitter.prototype.off = function(e345, t) {
    if (void 0 === e345) this._listeners = {};
    else if (void 0 === t) this._listeners[e345] = [];
    else for(var r = this._listeners[e345], n = 0; n < r.length;)r[n].fn === t ? r.splice(n, 1) : ++n;
    return this;
}, EventEmitter.prototype.emit = function(e346) {
    var t = this._listeners[e346];
    if (t) {
        for(var r = [], n = 1; n < arguments.length;)r.push(arguments[n++]);
        for(n = 0; n < t.length;)t[n].fn.apply(t[n++].ctx, r);
    }
    return this;
};
var float = factory(factory);
function factory(e347) {
    return "undefined" != typeof Float32Array ? function() {
        var t = new Float32Array([
            -0
        ]), r = new Uint8Array(t.buffer), n6 = 128 === r[3];
        function o6(e348, n, o) {
            t[0] = e348, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3];
        }
        function i44(e349, n, o) {
            t[0] = e349, n[o] = r[3], n[o + 1] = r[2], n[o + 2] = r[1], n[o + 3] = r[0];
        }
        function s(e350, n) {
            return r[0] = e350[n], r[1] = e350[n + 1], r[2] = e350[n + 2], r[3] = e350[n + 3], t[0];
        }
        function a(e351, n) {
            return r[3] = e351[n], r[2] = e351[n + 1], r[1] = e351[n + 2], r[0] = e351[n + 3], t[0];
        }
        e347.writeFloatLE = n6 ? o6 : i44, e347.writeFloatBE = n6 ? i44 : o6, e347.readFloatLE = n6 ? s : a, e347.readFloatBE = n6 ? a : s;
    }() : function() {
        function t19(e352, t, r, n) {
            var o = t < 0 ? 1 : 0;
            if (o && (t = -t), 0 === t) e352(1 / t > 0 ? 0 : 2147483648, r, n);
            else if (isNaN(t)) e352(2143289344, r, n);
            else if (t > 340282346638528860000000000000000000000) e352((o << 31 | 2139095040) >>> 0, r, n);
            else if (t < 0.000000000000000000000000000000000000011754943508222875) e352((o << 31 | Math.round(t / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, r, n);
            else {
                var i45 = Math.floor(Math.log(t) / Math.LN2);
                e352((o << 31 | i45 + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -i45) * 8388608)) >>> 0, r, n);
            }
        }
        function r14(e353, t, r) {
            var n = e353(t, r), o = 2 * (n >> 31) + 1, i46 = n >>> 23 & 255, s = 8388607 & n;
            return 255 === i46 ? s ? NaN : o * (1 / 0) : 0 === i46 ? 0.000000000000000000000000000000000000000000001401298464324817 * o * s : o * Math.pow(2, i46 - 150) * (s + 8388608);
        }
        e347.writeFloatLE = t19.bind(null, writeUintLE), e347.writeFloatBE = t19.bind(null, writeUintBE), e347.readFloatLE = r14.bind(null, readUintLE), e347.readFloatBE = r14.bind(null, readUintBE);
    }(), "undefined" != typeof Float64Array ? function() {
        var t = new Float64Array([
            -0
        ]), r = new Uint8Array(t.buffer), n7 = 128 === r[7];
        function o7(e354, n, o) {
            t[0] = e354, n[o] = r[0], n[o + 1] = r[1], n[o + 2] = r[2], n[o + 3] = r[3], n[o + 4] = r[4], n[o + 5] = r[5], n[o + 6] = r[6], n[o + 7] = r[7];
        }
        function i47(e355, n, o) {
            t[0] = e355, n[o] = r[7], n[o + 1] = r[6], n[o + 2] = r[5], n[o + 3] = r[4], n[o + 4] = r[3], n[o + 5] = r[2], n[o + 6] = r[1], n[o + 7] = r[0];
        }
        function s(e356, n) {
            return r[0] = e356[n], r[1] = e356[n + 1], r[2] = e356[n + 2], r[3] = e356[n + 3], r[4] = e356[n + 4], r[5] = e356[n + 5], r[6] = e356[n + 6], r[7] = e356[n + 7], t[0];
        }
        function a(e357, n) {
            return r[7] = e357[n], r[6] = e357[n + 1], r[5] = e357[n + 2], r[4] = e357[n + 3], r[3] = e357[n + 4], r[2] = e357[n + 5], r[1] = e357[n + 6], r[0] = e357[n + 7], t[0];
        }
        e347.writeDoubleLE = n7 ? o7 : i47, e347.writeDoubleBE = n7 ? i47 : o7, e347.readDoubleLE = n7 ? s : a, e347.readDoubleBE = n7 ? a : s;
    }() : function() {
        function t20(e358, t, r, n, o, i48) {
            var s = n < 0 ? 1 : 0;
            if (s && (n = -n), 0 === n) e358(0, o, i48 + t), e358(1 / n > 0 ? 0 : 2147483648, o, i48 + r);
            else if (isNaN(n)) e358(0, o, i48 + t), e358(2146959360, o, i48 + r);
            else if (n > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) e358(0, o, i48 + t), e358((s << 31 | 2146435072) >>> 0, o, i48 + r);
            else {
                var a;
                if (n < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) e358((a = n / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005) >>> 0, o, i48 + t), e358((s << 31 | a / 4294967296) >>> 0, o, i48 + r);
                else {
                    var c = Math.floor(Math.log(n) / Math.LN2);
                    1024 === c && (c = 1023), e358(4503599627370496 * (a = n * Math.pow(2, -c)) >>> 0, o, i48 + t), e358((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i48 + r);
                }
            }
        }
        function r15(e359, t, r, n, o) {
            var i49 = e359(n, o + t), s = e359(n, o + r), a = 2 * (s >> 31) + 1, c = s >>> 20 & 2047, u = 4294967296 * (1048575 & s) + i49;
            return 2047 === c ? u ? NaN : a * (1 / 0) : 0 === c ? 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * a * u : a * Math.pow(2, c - 1075) * (u + 4503599627370496);
        }
        e347.writeDoubleLE = t20.bind(null, writeUintLE, 0, 4), e347.writeDoubleBE = t20.bind(null, writeUintBE, 4, 0), e347.readDoubleLE = r15.bind(null, readUintLE, 0, 4), e347.readDoubleBE = r15.bind(null, readUintBE, 4, 0);
    }(), e347;
}
function writeUintLE(e360, t, r) {
    t[r] = 255 & e360, t[r + 1] = e360 >>> 8 & 255, t[r + 2] = e360 >>> 16 & 255, t[r + 3] = e360 >>> 24;
}
function writeUintBE(e361, t, r) {
    t[r] = e361 >>> 24, t[r + 1] = e361 >>> 16 & 255, t[r + 2] = e361 >>> 8 & 255, t[r + 3] = 255 & e361;
}
function readUintLE(e362, t) {
    return (e362[t] | e362[t + 1] << 8 | e362[t + 2] << 16 | e362[t + 3] << 24) >>> 0;
}
function readUintBE(e363, t) {
    return (e363[t] << 24 | e363[t + 1] << 16 | e363[t + 2] << 8 | e363[t + 3]) >>> 0;
}
var inquire_1 = inquire;
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (e) {}
    return null;
}
var utf8$2 = {};
!function(e364) {
    var t21 = utf8$2;
    t21.length = function(e365) {
        for(var t = 0, r = 0, n = 0; n < e365.length; ++n)(r = e365.charCodeAt(n)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 == (64512 & r) && 56320 == (64512 & e365.charCodeAt(n + 1)) ? (++n, t += 4) : t += 3;
        return t;
    }, t21.read = function(e366, t, r) {
        if (r - t < 1) return "";
        for(var n, o = null, i50 = [], s = 0; t < r;)(n = e366[t++]) < 128 ? i50[s++] = n : n > 191 && n < 224 ? i50[s++] = (31 & n) << 6 | 63 & e366[t++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & e366[t++]) << 12 | (63 & e366[t++]) << 6 | 63 & e366[t++]) - 65536, i50[s++] = 55296 + (n >> 10), i50[s++] = 56320 + (1023 & n)) : i50[s++] = (15 & n) << 12 | (63 & e366[t++]) << 6 | 63 & e366[t++], s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i50)), s = 0);
        return o ? (s && o.push(String.fromCharCode.apply(String, i50.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, i50.slice(0, s));
    }, t21.write = function(e367, t, r) {
        for(var n, o, i51 = r, s = 0; s < e367.length; ++s)(n = e367.charCodeAt(s)) < 128 ? t[r++] = n : n < 2048 ? (t[r++] = n >> 6 | 192, t[r++] = 63 & n | 128) : 55296 == (64512 & n) && 56320 == (64512 & (o = e367.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & o), ++s, t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128, t[r++] = n >> 6 & 63 | 128, t[r++] = 63 & n | 128) : (t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128, t[r++] = 63 & n | 128);
        return r - i51;
    };
}();
var pool_1 = pool;
function pool(e368, t, r16) {
    var n = r16 || 8192, o = n >>> 1, i52 = null, s = n;
    return function(r) {
        if (r < 1 || r > o) return e368(r);
        s + r > n && (i52 = e368(n), s = 0);
        var a = t.call(i52, s, s += r);
        return 7 & s && (s = 1 + (7 | s)), a;
    };
}
var longbits = LongBits$2, util$5 = minimal$1;
function LongBits$2(e369, t) {
    this.lo = e369 >>> 0, this.hi = t >>> 0;
}
var zero = LongBits$2.zero = new LongBits$2(0, 0);
zero.toNumber = function() {
    return 0;
}, zero.zzEncode = zero.zzDecode = function() {
    return this;
}, zero.length = function() {
    return 1;
};
var zeroHash = LongBits$2.zeroHash = "\0\0\0\0\0\0\0\0";
LongBits$2.fromNumber = function(e370) {
    if (0 === e370) return zero;
    var t = e370 < 0;
    t && (e370 = -e370);
    var r = e370 >>> 0, n = (e370 - r) / 4294967296 >>> 0;
    return t && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), new LongBits$2(r, n);
}, LongBits$2.from = function(e371) {
    if ("number" == typeof e371) return LongBits$2.fromNumber(e371);
    if (util$5.isString(e371)) {
        if (!util$5.Long) return LongBits$2.fromNumber(parseInt(e371, 10));
        e371 = util$5.Long.fromString(e371);
    }
    return e371.low || e371.high ? new LongBits$2(e371.low >>> 0, e371.high >>> 0) : zero;
}, LongBits$2.prototype.toNumber = function(e372) {
    if (!e372 && this.hi >>> 31) {
        var t = 1 + ~this.lo >>> 0, r = ~this.hi >>> 0;
        return t || (r = r + 1 >>> 0), -(t + 4294967296 * r);
    }
    return this.lo + 4294967296 * this.hi;
}, LongBits$2.prototype.toLong = function(e373) {
    return util$5.Long ? new util$5.Long(0 | this.lo, 0 | this.hi, Boolean(e373)) : {
        low: 0 | this.lo,
        high: 0 | this.hi,
        unsigned: Boolean(e373)
    };
};
var charCodeAt = String.prototype.charCodeAt;
LongBits$2.fromHash = function(e374) {
    return e374 === zeroHash ? zero : new LongBits$2((charCodeAt.call(e374, 0) | charCodeAt.call(e374, 1) << 8 | charCodeAt.call(e374, 2) << 16 | charCodeAt.call(e374, 3) << 24) >>> 0, (charCodeAt.call(e374, 4) | charCodeAt.call(e374, 5) << 8 | charCodeAt.call(e374, 6) << 16 | charCodeAt.call(e374, 7) << 24) >>> 0);
}, LongBits$2.prototype.toHash = function() {
    return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
}, LongBits$2.prototype.zzEncode = function() {
    var e375 = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e375) >>> 0, this.lo = (this.lo << 1 ^ e375) >>> 0, this;
}, LongBits$2.prototype.zzDecode = function() {
    var e376 = -(1 & this.lo);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e376) >>> 0, this.hi = (this.hi >>> 1 ^ e376) >>> 0, this;
}, LongBits$2.prototype.length = function() {
    var e377 = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, r = this.hi >>> 24;
    return 0 === r ? 0 === t ? e377 < 16384 ? e377 < 128 ? 1 : 2 : e377 < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
}, function(e378) {
    var t22 = minimal$1;
    function r17(e379, t, r) {
        for(var n = Object.keys(t), o = 0; o < n.length; ++o)void 0 !== e379[n[o]] && r || (e379[n[o]] = t[n[o]]);
        return e379;
    }
    function n8(e380) {
        function t(e381, n) {
            if (!(this instanceof t)) return new t(e381, n);
            Object.defineProperty(this, "message", {
                get: function() {
                    return e381;
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                value: (new Error).stack || ""
            }), n && r17(this, n);
        }
        return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
            get: function() {
                return e380;
            }
        }), t.prototype.toString = function() {
            return this.name + ": " + this.message;
        }, t;
    }
    t22.asPromise = aspromise, t22.base64 = base64$3, t22.EventEmitter = eventemitter, t22.float = float, t22.inquire = inquire_1, t22.utf8 = utf8$2, t22.pool = pool_1, t22.LongBits = longbits, t22.isNode = Boolean(void 0 !== commonjsGlobal && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node), t22.global = t22.isNode && commonjsGlobal || "undefined" != typeof window && window || "undefined" != typeof self && self || commonjsGlobal, t22.emptyArray = Object.freeze ? Object.freeze([]) : [], t22.emptyObject = Object.freeze ? Object.freeze({}) : {}, t22.isInteger = Number.isInteger || function(e382) {
        return "number" == typeof e382 && isFinite(e382) && Math.floor(e382) === e382;
    }, t22.isString = function(e383) {
        return "string" == typeof e383 || e383 instanceof String;
    }, t22.isObject = function(e384) {
        return e384 && "object" == typeof e384;
    }, t22.isset = t22.isSet = function(e385, t) {
        var r = e385[t];
        return !(null == r || !e385.hasOwnProperty(t)) && ("object" != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
    }, t22.Buffer = function() {
        try {
            var e386 = t22.inquire("buffer").Buffer;
            return e386.prototype.utf8Write ? e386 : null;
        } catch (e) {
            return null;
        }
    }(), t22._Buffer_from = null, t22._Buffer_allocUnsafe = null, t22.newBuffer = function(e387) {
        return "number" == typeof e387 ? t22.Buffer ? t22._Buffer_allocUnsafe(e387) : new t22.Array(e387) : t22.Buffer ? t22._Buffer_from(e387) : "undefined" == typeof Uint8Array ? e387 : new Uint8Array(e387);
    }, t22.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, t22.Long = t22.global.dcodeIO && t22.global.dcodeIO.Long || t22.global.Long || t22.inquire("long"), t22.key2Re = /^true|false|0|1$/, t22.key32Re = /^-?(?:0|[1-9][0-9]*)$/, t22.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, t22.longToHash = function(e388) {
        return e388 ? t22.LongBits.from(e388).toHash() : t22.LongBits.zeroHash;
    }, t22.longFromHash = function(e389, r) {
        var n = t22.LongBits.fromHash(e389);
        return t22.Long ? t22.Long.fromBits(n.lo, n.hi, r) : n.toNumber(Boolean(r));
    }, t22.merge = r17, t22.lcFirst = function(e390) {
        return e390.charAt(0).toLowerCase() + e390.substring(1);
    }, t22.newError = n8, t22.ProtocolError = n8("ProtocolError"), t22.oneOfGetter = function(e391) {
        for(var t = {}, r18 = 0; r18 < e391.length; ++r18)t[e391[r18]] = 1;
        return function() {
            for(var e392 = Object.keys(this), r = e392.length - 1; r > -1; --r)if (1 === t[e392[r]] && void 0 !== this[e392[r]] && null !== this[e392[r]]) return e392[r];
        };
    }, t22.oneOfSetter = function(e393) {
        return function(t) {
            for(var r = 0; r < e393.length; ++r)e393[r] !== t && delete this[e393[r]];
        };
    }, t22.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    }, t22._configure = function() {
        var e394 = t22.Buffer;
        e394 ? (t22._Buffer_from = e394.from !== Uint8Array.from && e394.from || function(t, r) {
            return new e394(t, r);
        }, t22._Buffer_allocUnsafe = e394.allocUnsafe || function(t) {
            return new e394(t);
        }) : t22._Buffer_from = t22._Buffer_allocUnsafe = null;
    };
}();
var writer = Writer$1, util$4 = minimal$1, BufferWriter$1, LongBits$1 = util$4.LongBits, base64$2 = util$4.base64, utf8$1 = util$4.utf8;
function Op(e395, t, r) {
    this.fn = e395, this.len = t, this.next = void 0, this.val = r;
}
function noop() {}
function State(e396) {
    this.head = e396.head, this.tail = e396.tail, this.len = e396.len, this.next = e396.states;
}
function Writer$1() {
    this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null;
}
var create$2 = function() {
    return util$4.Buffer ? function() {
        return (Writer$1.create = function() {
            return new BufferWriter$1;
        })();
    } : function() {
        return new Writer$1;
    };
};
function writeByte(e397, t, r) {
    t[r] = 255 & e397;
}
function writeVarint32(e398, t, r) {
    for(; e398 > 127;)t[r++] = 127 & e398 | 128, e398 >>>= 7;
    t[r] = e398;
}
function VarintOp(e399, t) {
    this.len = e399, this.next = void 0, this.val = t;
}
function writeVarint64(e400, t, r) {
    for(; e400.hi;)t[r++] = 127 & e400.lo | 128, e400.lo = (e400.lo >>> 7 | e400.hi << 25) >>> 0, e400.hi >>>= 7;
    for(; e400.lo > 127;)t[r++] = 127 & e400.lo | 128, e400.lo = e400.lo >>> 7;
    t[r++] = e400.lo;
}
function writeFixed32(e401, t, r) {
    t[r] = 255 & e401, t[r + 1] = e401 >>> 8 & 255, t[r + 2] = e401 >>> 16 & 255, t[r + 3] = e401 >>> 24;
}
Writer$1.create = create$2(), Writer$1.alloc = function(e402) {
    return new util$4.Array(e402);
}, util$4.Array !== Array && (Writer$1.alloc = util$4.pool(Writer$1.alloc, util$4.Array.prototype.subarray)), Writer$1.prototype._push = function(e403, t, r) {
    return this.tail = this.tail.next = new Op(e403, t, r), this.len += t, this;
}, VarintOp.prototype = Object.create(Op.prototype), VarintOp.prototype.fn = writeVarint32, Writer$1.prototype.uint32 = function(e404) {
    return this.len += (this.tail = this.tail.next = new VarintOp((e404 >>>= 0) < 128 ? 1 : e404 < 16384 ? 2 : e404 < 2097152 ? 3 : e404 < 268435456 ? 4 : 5, e404)).len, this;
}, Writer$1.prototype.int32 = function(e405) {
    return e405 < 0 ? this._push(writeVarint64, 10, LongBits$1.fromNumber(e405)) : this.uint32(e405);
}, Writer$1.prototype.sint32 = function(e406) {
    return this.uint32((e406 << 1 ^ e406 >> 31) >>> 0);
}, Writer$1.prototype.uint64 = function(e407) {
    var t = LongBits$1.from(e407);
    return this._push(writeVarint64, t.length(), t);
}, Writer$1.prototype.int64 = Writer$1.prototype.uint64, Writer$1.prototype.sint64 = function(e408) {
    var t = LongBits$1.from(e408).zzEncode();
    return this._push(writeVarint64, t.length(), t);
}, Writer$1.prototype.bool = function(e409) {
    return this._push(writeByte, 1, e409 ? 1 : 0);
}, Writer$1.prototype.fixed32 = function(e410) {
    return this._push(writeFixed32, 4, e410 >>> 0);
}, Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32, Writer$1.prototype.fixed64 = function(e411) {
    var t = LongBits$1.from(e411);
    return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi);
}, Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64, Writer$1.prototype.float = function(e412) {
    return this._push(util$4.float.writeFloatLE, 4, e412);
}, Writer$1.prototype.double = function(e413) {
    return this._push(util$4.float.writeDoubleLE, 8, e413);
};
var writeBytes = util$4.Array.prototype.set ? function(e414, t, r) {
    t.set(e414, r);
} : function(e415, t, r) {
    for(var n = 0; n < e415.length; ++n)t[r + n] = e415[n];
};
Writer$1.prototype.bytes = function(e416) {
    var t = e416.length >>> 0;
    if (!t) return this._push(writeByte, 1, 0);
    if (util$4.isString(e416)) {
        var r = Writer$1.alloc(t = base64$2.length(e416));
        base64$2.decode(e416, r, 0), e416 = r;
    }
    return this.uint32(t)._push(writeBytes, t, e416);
}, Writer$1.prototype.string = function(e417) {
    var t = utf8$1.length(e417);
    return t ? this.uint32(t)._push(utf8$1.write, t, e417) : this._push(writeByte, 1, 0);
}, Writer$1.prototype.fork = function() {
    return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), this.len = 0, this;
}, Writer$1.prototype.reset = function() {
    return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), this.len = 0), this;
}, Writer$1.prototype.ldelim = function() {
    var e418 = this.head, t = this.tail, r = this.len;
    return this.reset().uint32(r), r && (this.tail.next = e418.next, this.tail = t, this.len += r), this;
}, Writer$1.prototype.finish = function() {
    for(var e419 = this.head.next, t = this.constructor.alloc(this.len), r = 0; e419;)e419.fn(e419.val, t, r), r += e419.len, e419 = e419.next;
    return t;
}, Writer$1._configure = function(e420) {
    BufferWriter$1 = e420, Writer$1.create = create$2(), BufferWriter$1._configure();
};
var writer_buffer = BufferWriter, Writer = writer;
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
var util$3 = minimal$1;
function BufferWriter() {
    Writer.call(this);
}
function writeStringBuffer(e421, t, r) {
    e421.length < 40 ? util$3.utf8.write(e421, t, r) : t.utf8Write ? t.utf8Write(e421, r) : t.write(e421, r);
}
BufferWriter._configure = function() {
    BufferWriter.alloc = util$3._Buffer_allocUnsafe, BufferWriter.writeBytesBuffer = util$3.Buffer && util$3.Buffer.prototype instanceof Uint8Array && "set" === util$3.Buffer.prototype.set.name ? function(e422, t, r) {
        t.set(e422, r);
    } : function(e423, t, r) {
        if (e423.copy) e423.copy(t, r, 0, e423.length);
        else for(var n = 0; n < e423.length;)t[r++] = e423[n++];
    };
}, BufferWriter.prototype.bytes = function(e424) {
    util$3.isString(e424) && (e424 = util$3._Buffer_from(e424, "base64"));
    var t = e424.length >>> 0;
    return this.uint32(t), t && this._push(BufferWriter.writeBytesBuffer, t, e424), this;
}, BufferWriter.prototype.string = function(e425) {
    var t = util$3.Buffer.byteLength(e425);
    return this.uint32(t), t && this._push(writeStringBuffer, t, e425), this;
}, BufferWriter._configure();
var reader = Reader$1, util$2 = minimal$1, BufferReader$1, LongBits = util$2.LongBits, utf8 = util$2.utf8;
function indexOutOfRange(e426, t) {
    return RangeError("index out of range: " + e426.pos + " + " + (t || 1) + " > " + e426.len);
}
function Reader$1(e427) {
    this.buf = e427, this.pos = 0, this.len = e427.length;
}
var create_array = "undefined" != typeof Uint8Array ? function(e428) {
    if (e428 instanceof Uint8Array || Array.isArray(e428)) return new Reader$1(e428);
    throw Error("illegal buffer");
} : function(e429) {
    if (Array.isArray(e429)) return new Reader$1(e429);
    throw Error("illegal buffer");
}, create$1 = function() {
    return util$2.Buffer ? function(e430) {
        return (Reader$1.create = function(e431) {
            return util$2.Buffer.isBuffer(e431) ? new BufferReader$1(e431) : create_array(e431);
        })(e430);
    } : create_array;
}, value;
function readLongVarint() {
    var e432 = new LongBits(0, 0), t = 0;
    if (!(this.len - this.pos > 4)) {
        for(; t < 3; ++t){
            if (this.pos >= this.len) throw indexOutOfRange(this);
            if (e432.lo = (e432.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e432;
        }
        return e432.lo = (e432.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e432;
    }
    for(; t < 4; ++t)if (e432.lo = (e432.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e432;
    if (e432.lo = (e432.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e432.hi = (e432.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e432;
    if (t = 0, this.len - this.pos > 4) {
        for(; t < 5; ++t)if (e432.hi = (e432.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e432;
    } else for(; t < 5; ++t){
        if (this.pos >= this.len) throw indexOutOfRange(this);
        if (e432.hi = (e432.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e432;
    }
    throw Error("invalid varint encoding");
}
function readFixed32_end(e433, t) {
    return (e433[t - 4] | e433[t - 3] << 8 | e433[t - 2] << 16 | e433[t - 1] << 24) >>> 0;
}
function readFixed64() {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
Reader$1.create = create$1(), Reader$1.prototype._slice = util$2.Array.prototype.subarray || util$2.Array.prototype.slice, Reader$1.prototype.uint32 = (value = 4294967295, function() {
    if (value = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return value;
    if (value = (value | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return value;
    if (value = (value | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return value;
    if (value = (value | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return value;
    if (value = (value | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return value;
    if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);
    return value;
}), Reader$1.prototype.int32 = function() {
    return 0 | this.uint32();
}, Reader$1.prototype.sint32 = function() {
    var e434 = this.uint32();
    return e434 >>> 1 ^ -(1 & e434) | 0;
}, Reader$1.prototype.bool = function() {
    return 0 !== this.uint32();
}, Reader$1.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
}, Reader$1.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    return 0 | readFixed32_end(this.buf, this.pos += 4);
}, Reader$1.prototype.float = function() {
    if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    var e435 = util$2.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, e435;
}, Reader$1.prototype.double = function() {
    if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
    var e436 = util$2.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, e436;
}, Reader$1.prototype.bytes = function() {
    var e437 = this.uint32(), t = this.pos, r = this.pos + e437;
    if (r > this.len) throw indexOutOfRange(this, e437);
    return this.pos += e437, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r);
}, Reader$1.prototype.string = function() {
    var e438 = this.bytes();
    return utf8.read(e438, 0, e438.length);
}, Reader$1.prototype.skip = function(e439) {
    if ("number" == typeof e439) {
        if (this.pos + e439 > this.len) throw indexOutOfRange(this, e439);
        this.pos += e439;
    } else do {
        if (this.pos >= this.len) throw indexOutOfRange(this);
    }while (128 & this.buf[this.pos++])
    return this;
}, Reader$1.prototype.skipType = function(e440) {
    switch(e440){
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            for(; 4 != (e440 = 7 & this.uint32());)this.skipType(e440);
            break;
        case 5:
            this.skip(4);
            break;
        default:
            throw Error("invalid wire type " + e440 + " at offset " + this.pos);
    }
    return this;
}, Reader$1._configure = function(e441) {
    BufferReader$1 = e441, Reader$1.create = create$1(), BufferReader$1._configure();
    var t = util$2.Long ? "toLong" : "toNumber";
    util$2.merge(Reader$1.prototype, {
        int64: function() {
            return readLongVarint.call(this)[t](!1);
        },
        uint64: function() {
            return readLongVarint.call(this)[t](!0);
        },
        sint64: function() {
            return readLongVarint.call(this).zzDecode()[t](!1);
        },
        fixed64: function() {
            return readFixed64.call(this)[t](!0);
        },
        sfixed64: function() {
            return readFixed64.call(this)[t](!1);
        }
    });
};
var reader_buffer = BufferReader, Reader = reader;
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
var util$1 = minimal$1;
function BufferReader(e442) {
    Reader.call(this, e442);
}
BufferReader._configure = function() {
    util$1.Buffer && (BufferReader.prototype._slice = util$1.Buffer.prototype.slice);
}, BufferReader.prototype.string = function() {
    var e443 = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e443, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e443, this.len));
}, BufferReader._configure();
var rpc = {}, service = Service, util = minimal$1;
function Service(e444, t, r) {
    if ("function" != typeof e444) throw TypeError("rpcImpl must be a function");
    util.EventEmitter.call(this), this.rpcImpl = e444, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(r);
}
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service, Service.prototype.rpcCall = function e445(t, r19, n, o, i53) {
    if (!o) throw TypeError("request must be specified");
    var s = this;
    if (!i53) return util.asPromise(e445, s, t, r19, n, o);
    if (s.rpcImpl) try {
        return s.rpcImpl(t, r19[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(e446, r) {
            if (e446) return s.emit("error", e446, t), i53(e446);
            if (null !== r) {
                if (!(r instanceof n)) try {
                    r = n[s.responseDelimited ? "decodeDelimited" : "decode"](r);
                } catch (e447) {
                    return s.emit("error", e447, t), i53(e447);
                }
                return s.emit("data", r, t), i53(null, r);
            }
            s.end(!0);
        });
    } catch (e448) {
        return s.emit("error", e448, t), void setTimeout(function() {
            i53(e448);
        }, 0);
    }
    else setTimeout(function() {
        i53(Error("already ended"));
    }, 0);
}, Service.prototype.end = function(e449) {
    return this.rpcImpl && (e449 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
}, function(e450) {
    e450.Service = service;
}(rpc);
var roots = {};
!function(e) {
    var t = indexMinimal;
    function r() {
        t.util._configure(), t.Writer._configure(t.BufferWriter), t.Reader._configure(t.BufferReader);
    }
    t.build = "minimal", t.Writer = writer, t.BufferWriter = writer_buffer, t.Reader = reader, t.BufferReader = reader_buffer, t.util = minimal$1, t.rpc = rpc, t.roots = roots, t.configure = r, r();
}();
var minimal = indexMinimal;
const $Reader = minimal.Reader, $Writer = minimal.Writer, $util = minimal.util, $root = minimal.roots["ipfs-unixfs"] || (minimal.roots["ipfs-unixfs"] = {}), Data = $root.Data = (()=>{
    function e451(e452) {
        if (this.blocksizes = [], e452) for(var t = Object.keys(e452), r = 0; r < t.length; ++r)null != e452[t[r]] && (this[t[r]] = e452[t[r]]);
    }
    return e451.prototype.Type = 0, e451.prototype.Data = $util.newBuffer([]), e451.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, !0) : 0, e451.prototype.blocksizes = $util.emptyArray, e451.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, !0) : 0, e451.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, !0) : 0, e451.prototype.mode = 0, e451.prototype.mtime = null, e451.encode = function(e453, t) {
        if (t || (t = $Writer.create()), t.uint32(8).int32(e453.Type), null != e453.Data && Object.hasOwnProperty.call(e453, "Data") && t.uint32(18).bytes(e453.Data), null != e453.filesize && Object.hasOwnProperty.call(e453, "filesize") && t.uint32(24).uint64(e453.filesize), null != e453.blocksizes && e453.blocksizes.length) for(var r = 0; r < e453.blocksizes.length; ++r)t.uint32(32).uint64(e453.blocksizes[r]);
        return null != e453.hashType && Object.hasOwnProperty.call(e453, "hashType") && t.uint32(40).uint64(e453.hashType), null != e453.fanout && Object.hasOwnProperty.call(e453, "fanout") && t.uint32(48).uint64(e453.fanout), null != e453.mode && Object.hasOwnProperty.call(e453, "mode") && t.uint32(56).uint32(e453.mode), null != e453.mtime && Object.hasOwnProperty.call(e453, "mtime") && $root.UnixTime.encode(e453.mtime, t.uint32(66).fork()).ldelim(), t;
    }, e451.decode = function(e454, t) {
        e454 instanceof $Reader || (e454 = $Reader.create(e454));
        for(var r = void 0 === t ? e454.len : e454.pos + t, n = new $root.Data; e454.pos < r;){
            var o = e454.uint32();
            switch(o >>> 3){
                case 1:
                    n.Type = e454.int32();
                    break;
                case 2:
                    n.Data = e454.bytes();
                    break;
                case 3:
                    n.filesize = e454.uint64();
                    break;
                case 4:
                    if (n.blocksizes && n.blocksizes.length || (n.blocksizes = []), 2 == (7 & o)) for(var i54 = e454.uint32() + e454.pos; e454.pos < i54;)n.blocksizes.push(e454.uint64());
                    else n.blocksizes.push(e454.uint64());
                    break;
                case 5:
                    n.hashType = e454.uint64();
                    break;
                case 6:
                    n.fanout = e454.uint64();
                    break;
                case 7:
                    n.mode = e454.uint32();
                    break;
                case 8:
                    n.mtime = $root.UnixTime.decode(e454, e454.uint32());
                    break;
                default:
                    e454.skipType(7 & o);
            }
        }
        if (!n.hasOwnProperty("Type")) throw $util.ProtocolError("missing required 'Type'", {
            instance: n
        });
        return n;
    }, e451.fromObject = function(e455) {
        if (e455 instanceof $root.Data) return e455;
        var t = new $root.Data;
        switch(e455.Type){
            case "Raw":
            case 0:
                t.Type = 0;
                break;
            case "Directory":
            case 1:
                t.Type = 1;
                break;
            case "File":
            case 2:
                t.Type = 2;
                break;
            case "Metadata":
            case 3:
                t.Type = 3;
                break;
            case "Symlink":
            case 4:
                t.Type = 4;
                break;
            case "HAMTShard":
            case 5:
                t.Type = 5;
        }
        if (null != e455.Data && ("string" == typeof e455.Data ? $util.base64.decode(e455.Data, t.Data = $util.newBuffer($util.base64.length(e455.Data)), 0) : e455.Data.length && (t.Data = e455.Data)), null != e455.filesize && ($util.Long ? (t.filesize = $util.Long.fromValue(e455.filesize)).unsigned = !0 : "string" == typeof e455.filesize ? t.filesize = parseInt(e455.filesize, 10) : "number" == typeof e455.filesize ? t.filesize = e455.filesize : "object" == typeof e455.filesize && (t.filesize = new $util.LongBits(e455.filesize.low >>> 0, e455.filesize.high >>> 0).toNumber(!0))), e455.blocksizes) {
            if (!Array.isArray(e455.blocksizes)) throw TypeError(".Data.blocksizes: array expected");
            t.blocksizes = [];
            for(var r = 0; r < e455.blocksizes.length; ++r)$util.Long ? (t.blocksizes[r] = $util.Long.fromValue(e455.blocksizes[r])).unsigned = !0 : "string" == typeof e455.blocksizes[r] ? t.blocksizes[r] = parseInt(e455.blocksizes[r], 10) : "number" == typeof e455.blocksizes[r] ? t.blocksizes[r] = e455.blocksizes[r] : "object" == typeof e455.blocksizes[r] && (t.blocksizes[r] = new $util.LongBits(e455.blocksizes[r].low >>> 0, e455.blocksizes[r].high >>> 0).toNumber(!0));
        }
        if (null != e455.hashType && ($util.Long ? (t.hashType = $util.Long.fromValue(e455.hashType)).unsigned = !0 : "string" == typeof e455.hashType ? t.hashType = parseInt(e455.hashType, 10) : "number" == typeof e455.hashType ? t.hashType = e455.hashType : "object" == typeof e455.hashType && (t.hashType = new $util.LongBits(e455.hashType.low >>> 0, e455.hashType.high >>> 0).toNumber(!0))), null != e455.fanout && ($util.Long ? (t.fanout = $util.Long.fromValue(e455.fanout)).unsigned = !0 : "string" == typeof e455.fanout ? t.fanout = parseInt(e455.fanout, 10) : "number" == typeof e455.fanout ? t.fanout = e455.fanout : "object" == typeof e455.fanout && (t.fanout = new $util.LongBits(e455.fanout.low >>> 0, e455.fanout.high >>> 0).toNumber(!0))), null != e455.mode && (t.mode = e455.mode >>> 0), null != e455.mtime) {
            if ("object" != typeof e455.mtime) throw TypeError(".Data.mtime: object expected");
            t.mtime = $root.UnixTime.fromObject(e455.mtime);
        }
        return t;
    }, e451.toObject = function(e456, t) {
        t || (t = {});
        var r = {};
        if ((t.arrays || t.defaults) && (r.blocksizes = []), t.defaults) {
            if (r.Type = t.enums === String ? "Raw" : 0, t.bytes === String ? r.Data = "" : (r.Data = [], t.bytes !== Array && (r.Data = $util.newBuffer(r.Data))), $util.Long) {
                var n = new $util.Long(0, 0, !0);
                r.filesize = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
            } else r.filesize = t.longs === String ? "0" : 0;
            if ($util.Long) {
                n = new $util.Long(0, 0, !0);
                r.hashType = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
            } else r.hashType = t.longs === String ? "0" : 0;
            if ($util.Long) {
                n = new $util.Long(0, 0, !0);
                r.fanout = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
            } else r.fanout = t.longs === String ? "0" : 0;
            r.mode = 0, r.mtime = null;
        }
        if (null != e456.Type && e456.hasOwnProperty("Type") && (r.Type = t.enums === String ? $root.Data.DataType[e456.Type] : e456.Type), null != e456.Data && e456.hasOwnProperty("Data") && (r.Data = t.bytes === String ? $util.base64.encode(e456.Data, 0, e456.Data.length) : t.bytes === Array ? Array.prototype.slice.call(e456.Data) : e456.Data), null != e456.filesize && e456.hasOwnProperty("filesize") && ("number" == typeof e456.filesize ? r.filesize = t.longs === String ? String(e456.filesize) : e456.filesize : r.filesize = t.longs === String ? $util.Long.prototype.toString.call(e456.filesize) : t.longs === Number ? new $util.LongBits(e456.filesize.low >>> 0, e456.filesize.high >>> 0).toNumber(!0) : e456.filesize), e456.blocksizes && e456.blocksizes.length) {
            r.blocksizes = [];
            for(var o = 0; o < e456.blocksizes.length; ++o)"number" == typeof e456.blocksizes[o] ? r.blocksizes[o] = t.longs === String ? String(e456.blocksizes[o]) : e456.blocksizes[o] : r.blocksizes[o] = t.longs === String ? $util.Long.prototype.toString.call(e456.blocksizes[o]) : t.longs === Number ? new $util.LongBits(e456.blocksizes[o].low >>> 0, e456.blocksizes[o].high >>> 0).toNumber(!0) : e456.blocksizes[o];
        }
        return null != e456.hashType && e456.hasOwnProperty("hashType") && ("number" == typeof e456.hashType ? r.hashType = t.longs === String ? String(e456.hashType) : e456.hashType : r.hashType = t.longs === String ? $util.Long.prototype.toString.call(e456.hashType) : t.longs === Number ? new $util.LongBits(e456.hashType.low >>> 0, e456.hashType.high >>> 0).toNumber(!0) : e456.hashType), null != e456.fanout && e456.hasOwnProperty("fanout") && ("number" == typeof e456.fanout ? r.fanout = t.longs === String ? String(e456.fanout) : e456.fanout : r.fanout = t.longs === String ? $util.Long.prototype.toString.call(e456.fanout) : t.longs === Number ? new $util.LongBits(e456.fanout.low >>> 0, e456.fanout.high >>> 0).toNumber(!0) : e456.fanout), null != e456.mode && e456.hasOwnProperty("mode") && (r.mode = e456.mode), null != e456.mtime && e456.hasOwnProperty("mtime") && (r.mtime = $root.UnixTime.toObject(e456.mtime, t)), r;
    }, e451.prototype.toJSON = function() {
        return this.constructor.toObject(this, minimal.util.toJSONOptions);
    }, e451.DataType = function() {
        const e457 = {}, t = Object.create(e457);
        return t[e457[0] = "Raw"] = 0, t[e457[1] = "Directory"] = 1, t[e457[2] = "File"] = 2, t[e457[3] = "Metadata"] = 3, t[e457[4] = "Symlink"] = 4, t[e457[5] = "HAMTShard"] = 5, t;
    }(), e451;
})();
$root.UnixTime = (()=>{
    function e458(e459) {
        if (e459) for(var t = Object.keys(e459), r = 0; r < t.length; ++r)null != e459[t[r]] && (this[t[r]] = e459[t[r]]);
    }
    return e458.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, !1) : 0, e458.prototype.FractionalNanoseconds = 0, e458.encode = function(e460, t) {
        return t || (t = $Writer.create()), t.uint32(8).int64(e460.Seconds), null != e460.FractionalNanoseconds && Object.hasOwnProperty.call(e460, "FractionalNanoseconds") && t.uint32(21).fixed32(e460.FractionalNanoseconds), t;
    }, e458.decode = function(e461, t) {
        e461 instanceof $Reader || (e461 = $Reader.create(e461));
        for(var r = void 0 === t ? e461.len : e461.pos + t, n = new $root.UnixTime; e461.pos < r;){
            var o = e461.uint32();
            switch(o >>> 3){
                case 1:
                    n.Seconds = e461.int64();
                    break;
                case 2:
                    n.FractionalNanoseconds = e461.fixed32();
                    break;
                default:
                    e461.skipType(7 & o);
            }
        }
        if (!n.hasOwnProperty("Seconds")) throw $util.ProtocolError("missing required 'Seconds'", {
            instance: n
        });
        return n;
    }, e458.fromObject = function(e462) {
        if (e462 instanceof $root.UnixTime) return e462;
        var t = new $root.UnixTime;
        return null != e462.Seconds && ($util.Long ? (t.Seconds = $util.Long.fromValue(e462.Seconds)).unsigned = !1 : "string" == typeof e462.Seconds ? t.Seconds = parseInt(e462.Seconds, 10) : "number" == typeof e462.Seconds ? t.Seconds = e462.Seconds : "object" == typeof e462.Seconds && (t.Seconds = new $util.LongBits(e462.Seconds.low >>> 0, e462.Seconds.high >>> 0).toNumber())), null != e462.FractionalNanoseconds && (t.FractionalNanoseconds = e462.FractionalNanoseconds >>> 0), t;
    }, e458.toObject = function(e463, t) {
        t || (t = {});
        var r = {};
        if (t.defaults) {
            if ($util.Long) {
                var n = new $util.Long(0, 0, !1);
                r.Seconds = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
            } else r.Seconds = t.longs === String ? "0" : 0;
            r.FractionalNanoseconds = 0;
        }
        return null != e463.Seconds && e463.hasOwnProperty("Seconds") && ("number" == typeof e463.Seconds ? r.Seconds = t.longs === String ? String(e463.Seconds) : e463.Seconds : r.Seconds = t.longs === String ? $util.Long.prototype.toString.call(e463.Seconds) : t.longs === Number ? new $util.LongBits(e463.Seconds.low >>> 0, e463.Seconds.high >>> 0).toNumber() : e463.Seconds), null != e463.FractionalNanoseconds && e463.hasOwnProperty("FractionalNanoseconds") && (r.FractionalNanoseconds = e463.FractionalNanoseconds), r;
    }, e458.prototype.toJSON = function() {
        return this.constructor.toObject(this, minimal.util.toJSONOptions);
    }, e458;
})(), $root.Metadata = (()=>{
    function e464(e465) {
        if (e465) for(var t = Object.keys(e465), r = 0; r < t.length; ++r)null != e465[t[r]] && (this[t[r]] = e465[t[r]]);
    }
    return e464.prototype.MimeType = "", e464.encode = function(e466, t) {
        return t || (t = $Writer.create()), null != e466.MimeType && Object.hasOwnProperty.call(e466, "MimeType") && t.uint32(10).string(e466.MimeType), t;
    }, e464.decode = function(e467, t) {
        e467 instanceof $Reader || (e467 = $Reader.create(e467));
        for(var r = void 0 === t ? e467.len : e467.pos + t, n = new $root.Metadata; e467.pos < r;){
            var o = e467.uint32();
            if (o >>> 3 == 1) n.MimeType = e467.string();
            else e467.skipType(7 & o);
        }
        return n;
    }, e464.fromObject = function(e468) {
        if (e468 instanceof $root.Metadata) return e468;
        var t = new $root.Metadata;
        return null != e468.MimeType && (t.MimeType = String(e468.MimeType)), t;
    }, e464.toObject = function(e469, t) {
        t || (t = {});
        var r = {};
        return t.defaults && (r.MimeType = ""), null != e469.MimeType && e469.hasOwnProperty("MimeType") && (r.MimeType = e469.MimeType), r;
    }, e464.prototype.toJSON = function() {
        return this.constructor.toObject(this, minimal.util.toJSONOptions);
    }, e464;
})();
const PBData = Data, types = [
    "raw",
    "directory",
    "file",
    "metadata",
    "symlink",
    "hamt-sharded-directory"
], dirTypes = [
    "directory",
    "hamt-sharded-directory"
], DEFAULT_FILE_MODE = parseInt("0644", 8), DEFAULT_DIRECTORY_MODE = parseInt("0755", 8);
function parseMode(e470) {
    if (null != e470) return "number" == typeof e470 ? 4095 & e470 : "0" === (e470 = e470.toString()).substring(0, 1) ? 4095 & parseInt(e470, 8) : 4095 & parseInt(e470, 10);
}
function parseMtime(e471) {
    if (null == e471) return;
    let t;
    if (null != e471.secs && (t = {
        secs: e471.secs,
        nsecs: e471.nsecs
    }), null != e471.Seconds && (t = {
        secs: e471.Seconds,
        nsecs: e471.FractionalNanoseconds
    }), Array.isArray(e471) && (t = {
        secs: e471[0],
        nsecs: e471[1]
    }), e471 instanceof Date) {
        const r = e471.getTime(), n = Math.floor(r / 1000);
        t = {
            secs: n,
            nsecs: 1000 * (r - 1000 * n)
        };
    }
    if (Object.prototype.hasOwnProperty.call(t, "secs")) {
        if (null != t && null != t.nsecs && (t.nsecs < 0 || t.nsecs > 999999999)) throw errCode(new Error("mtime-nsecs must be within the range [0,999999999]"), "ERR_INVALID_MTIME_NSECS");
        return t;
    }
}
class UnixFS {
    static unmarshal(e472) {
        const t = PBData.decode(e472), r = PBData.toObject(t, {
            defaults: !1,
            arrays: !0,
            longs: Number,
            objects: !1
        }), n = new UnixFS({
            type: types[r.Type],
            data: r.Data,
            blockSizes: r.blocksizes,
            mode: r.mode,
            mtime: r.mtime ? {
                secs: r.mtime.Seconds,
                nsecs: r.mtime.FractionalNanoseconds
            } : void 0
        });
        return n._originalMode = r.mode || 0, n;
    }
    constructor(e473 = {
        type: "file"
    }){
        const { type: t , data: r , blockSizes: n , hashType: o , fanout: i55 , mtime: s , mode: a  } = e473;
        if (t && !types.includes(t)) throw errCode(new Error("Type: " + t + " is not valid"), "ERR_INVALID_TYPE");
        this.type = t || "file", this.data = r, this.hashType = o, this.fanout = i55, this.blockSizes = n || [], this._originalMode = 0, this.mode = parseMode(a), s && (this.mtime = parseMtime(s), this.mtime && !this.mtime.nsecs && (this.mtime.nsecs = 0));
    }
    set mode(e474) {
        this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
        const t = parseMode(e474);
        void 0 !== t && (this._mode = t);
    }
    get mode() {
        return this._mode;
    }
    isDirectory() {
        return Boolean(this.type && dirTypes.includes(this.type));
    }
    addBlockSize(e475) {
        this.blockSizes.push(e475);
    }
    removeBlockSize(e476) {
        this.blockSizes.splice(e476, 1);
    }
    fileSize() {
        if (this.isDirectory()) return 0;
        let e477 = 0;
        return this.blockSizes.forEach((t)=>{
            e477 += t;
        }), this.data && (e477 += this.data.length), e477;
    }
    marshal() {
        let e478;
        switch(this.type){
            case "raw":
                e478 = PBData.DataType.Raw;
                break;
            case "directory":
                e478 = PBData.DataType.Directory;
                break;
            case "file":
                e478 = PBData.DataType.File;
                break;
            case "metadata":
                e478 = PBData.DataType.Metadata;
                break;
            case "symlink":
                e478 = PBData.DataType.Symlink;
                break;
            case "hamt-sharded-directory":
                e478 = PBData.DataType.HAMTShard;
                break;
            default:
                throw errCode(new Error("Type: " + e478 + " is not valid"), "ERR_INVALID_TYPE");
        }
        let t, r, n = this.data;
        if (this.data && this.data.length || (n = void 0), null != this.mode && (t = 4294963200 & this._originalMode | (parseMode(this.mode) || 0), t !== DEFAULT_FILE_MODE || this.isDirectory() || (t = void 0), t === DEFAULT_DIRECTORY_MODE && this.isDirectory() && (t = void 0)), null != this.mtime) {
            const e479 = parseMtime(this.mtime);
            e479 && (r = {
                Seconds: e479.secs,
                FractionalNanoseconds: e479.nsecs
            }, 0 === r.FractionalNanoseconds && delete r.FractionalNanoseconds);
        }
        const o = {
            Type: e478,
            Data: n,
            filesize: this.isDirectory() ? void 0 : this.fileSize(),
            blocksizes: this.blockSizes,
            hashType: this.hashType,
            fanout: this.fanout,
            mode: t,
            mtime: r
        };
        return PBData.encode(o).finish();
    }
}
const textDecoder = new TextDecoder;
function decodeVarint(e480, t) {
    let r = 0;
    for(let n = 0;; n += 7){
        if (n >= 64) throw new Error("protobuf: varint overflow");
        if (t >= e480.length) throw new Error("protobuf: unexpected end of data");
        const o = e480[t++];
        if (r += n < 28 ? (127 & o) << n : (127 & o) * 2 ** n, o < 128) break;
    }
    return [
        r,
        t
    ];
}
function decodeBytes(e481, t) {
    let r;
    [r, t] = decodeVarint(e481, t);
    const n = t + r;
    if (r < 0 || n < 0) throw new Error("protobuf: invalid length");
    if (n > e481.length) throw new Error("protobuf: unexpected end of data");
    return [
        e481.subarray(t, n),
        n
    ];
}
function decodeKey(e482, t) {
    let r;
    return [r, t] = decodeVarint(e482, t), [
        7 & r,
        r >> 3,
        t
    ];
}
function decodeLink(e483) {
    const t = {}, r = e483.length;
    let n = 0;
    for(; n < r;){
        let r, o;
        if ([r, o, n] = decodeKey(e483, n), 1 === o) {
            if (t.Hash) throw new Error("protobuf: (PBLink) duplicate Hash section");
            if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Hash`);
            if (void 0 !== t.Name) throw new Error("protobuf: (PBLink) invalid order, found Name before Hash");
            if (void 0 !== t.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Hash");
            [t.Hash, n] = decodeBytes(e483, n);
        } else if (2 === o) {
            if (void 0 !== t.Name) throw new Error("protobuf: (PBLink) duplicate Name section");
            if (2 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Name`);
            if (void 0 !== t.Tsize) throw new Error("protobuf: (PBLink) invalid order, found Tsize before Name");
            let o;
            [o, n] = decodeBytes(e483, n), t.Name = textDecoder.decode(o);
        } else {
            if (3 !== o) throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${o}`);
            if (void 0 !== t.Tsize) throw new Error("protobuf: (PBLink) duplicate Tsize section");
            if (0 !== r) throw new Error(`protobuf: (PBLink) wrong wireType (${r}) for Tsize`);
            [t.Tsize, n] = decodeVarint(e483, n);
        }
    }
    if (n > r) throw new Error("protobuf: (PBLink) unexpected end of data");
    return t;
}
function decodeNode(e484) {
    const t = e484.length;
    let r, n, o = 0, i56 = !1;
    for(; o < t;){
        let t, s;
        if ([t, s, o] = decodeKey(e484, o), 2 !== t) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${t}`);
        if (1 === s) {
            if (n) throw new Error("protobuf: (PBNode) duplicate Data section");
            [n, o] = decodeBytes(e484, o), r && (i56 = !0);
        } else {
            if (2 !== s) throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${s}`);
            {
                if (i56) throw new Error("protobuf: (PBNode) duplicate Links section");
                let t;
                r || (r = []), [t, o] = decodeBytes(e484, o), r.push(decodeLink(t));
            }
        }
    }
    if (o > t) throw new Error("protobuf: (PBNode) unexpected end of data");
    const s = {};
    return n && (s.Data = n), s.Links = r || [], s;
}
const textEncoder$1 = new TextEncoder, maxInt32 = 2 ** 32, maxUInt32 = 2 ** 31;
function encodeLink(e485, t) {
    let r = t.length;
    if ("number" == typeof e485.Tsize) {
        if (e485.Tsize < 0) throw new Error("Tsize cannot be negative");
        if (!Number.isSafeInteger(e485.Tsize)) throw new Error("Tsize too large for encoding");
        r = encodeVarint(t, r, e485.Tsize) - 1, t[r] = 24;
    }
    if ("string" == typeof e485.Name) {
        const n = textEncoder$1.encode(e485.Name);
        r -= n.length, t.set(n, r), r = encodeVarint(t, r, n.length) - 1, t[r] = 18;
    }
    return e485.Hash && (r -= e485.Hash.length, t.set(e485.Hash, r), r = encodeVarint(t, r, e485.Hash.length) - 1, t[r] = 10), t.length - r;
}
function encodeNode(e486) {
    const t = sizeNode(e486), r = new Uint8Array(t);
    let n = t;
    if (e486.Data && (n -= e486.Data.length, r.set(e486.Data, n), n = encodeVarint(r, n, e486.Data.length) - 1, r[n] = 10), e486.Links) for(let t23 = e486.Links.length - 1; t23 >= 0; t23--){
        const o = encodeLink(e486.Links[t23], r.subarray(0, n));
        n -= o, n = encodeVarint(r, n, o) - 1, r[n] = 18;
    }
    return r;
}
function sizeLink(e487) {
    let t = 0;
    if (e487.Hash) {
        const r = e487.Hash.length;
        t += 1 + r + sov(r);
    }
    if ("string" == typeof e487.Name) {
        const r = textEncoder$1.encode(e487.Name).length;
        t += 1 + r + sov(r);
    }
    return "number" == typeof e487.Tsize && (t += 1 + sov(e487.Tsize)), t;
}
function sizeNode(e488) {
    let t = 0;
    if (e488.Data) {
        const r = e488.Data.length;
        t += 1 + r + sov(r);
    }
    if (e488.Links) for (const r of e488.Links){
        const e489 = sizeLink(r);
        t += 1 + e489 + sov(e489);
    }
    return t;
}
function encodeVarint(e490, t, r) {
    const n = t -= sov(r);
    for(; r >= maxUInt32;)e490[t++] = 127 & r | 128, r /= 128;
    for(; r >= 128;)e490[t++] = 127 & r | 128, r >>>= 7;
    return e490[t] = r, n;
}
function sov(e491) {
    return e491 % 2 == 0 && e491++, Math.floor((len64(e491) + 6) / 7);
}
function len64(e492) {
    let t = 0;
    return e492 >= maxInt32 && (e492 = Math.floor(e492 / maxInt32), t = 32), e492 >= 65536 && (e492 >>>= 16, t += 16), e492 >= 256 && (e492 >>>= 8, t += 8), t + len8tab[e492];
}
const len8tab = [
    0,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
], pbNodeProperties = [
    "Data",
    "Links"
], pbLinkProperties = [
    "Hash",
    "Name",
    "Tsize"
], textEncoder = new TextEncoder;
function linkComparator(e494, t) {
    if (e494 === t) return 0;
    const r = e494.Name ? textEncoder.encode(e494.Name) : [], n = t.Name ? textEncoder.encode(t.Name) : [];
    let o = r.length, i57 = n.length;
    for(let e493 = 0, t24 = Math.min(o, i57); e493 < t24; ++e493)if (r[e493] !== n[e493]) {
        o = r[e493], i57 = n[e493];
        break;
    }
    return o < i57 ? -1 : i57 < o ? 1 : 0;
}
function hasOnlyProperties(e495, t) {
    return !Object.keys(e495).some((e496)=>!t.includes(e496)
    );
}
function asLink(e497) {
    if ("object" == typeof e497.asCID) {
        const t = CID.asCID(e497);
        if (!t) throw new TypeError("Invalid DAG-PB form");
        return {
            Hash: t
        };
    }
    if ("object" != typeof e497 || Array.isArray(e497)) throw new TypeError("Invalid DAG-PB form");
    const t = {};
    if (e497.Hash) {
        let r = CID.asCID(e497.Hash);
        try {
            r || ("string" == typeof e497.Hash ? r = CID.parse(e497.Hash) : e497.Hash instanceof Uint8Array && (r = CID.decode(e497.Hash)));
        } catch (e498) {
            throw new TypeError(`Invalid DAG-PB form: ${e498.message}`);
        }
        r && (t.Hash = r);
    }
    if (!t.Hash) throw new TypeError("Invalid DAG-PB form");
    return "string" == typeof e497.Name && (t.Name = e497.Name), "number" == typeof e497.Tsize && (t.Tsize = e497.Tsize), t;
}
function prepare(e499) {
    if ((e499 instanceof Uint8Array || "string" == typeof e499) && (e499 = {
        Data: e499
    }), "object" != typeof e499 || Array.isArray(e499)) throw new TypeError("Invalid DAG-PB form");
    const t = {};
    if (void 0 !== e499.Data) {
        if ("string" == typeof e499.Data) t.Data = textEncoder.encode(e499.Data);
        else {
            if (!(e499.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form");
            t.Data = e499.Data;
        }
    }
    if (void 0 !== e499.Links) {
        if (!Array.isArray(e499.Links)) throw new TypeError("Invalid DAG-PB form");
        t.Links = e499.Links.map(asLink), t.Links.sort(linkComparator);
    } else t.Links = [];
    return t;
}
function validate(e500) {
    if (!e500 || "object" != typeof e500 || Array.isArray(e500)) throw new TypeError("Invalid DAG-PB form");
    if (!hasOnlyProperties(e500, pbNodeProperties)) throw new TypeError("Invalid DAG-PB form (extraneous properties)");
    if (void 0 !== e500.Data && !(e500.Data instanceof Uint8Array)) throw new TypeError("Invalid DAG-PB form (Data must be a Uint8Array)");
    if (!Array.isArray(e500.Links)) throw new TypeError("Invalid DAG-PB form (Links must be an array)");
    for(let t = 0; t < e500.Links.length; t++){
        const r = e500.Links[t];
        if (!r || "object" != typeof r || Array.isArray(r)) throw new TypeError("Invalid DAG-PB form (bad link object)");
        if (!hasOnlyProperties(r, pbLinkProperties)) throw new TypeError("Invalid DAG-PB form (extraneous properties on link object)");
        if (!r.Hash) throw new TypeError("Invalid DAG-PB form (link must have a Hash)");
        if (r.Hash.asCID !== r.Hash) throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");
        if (void 0 !== r.Name && "string" != typeof r.Name) throw new TypeError("Invalid DAG-PB form (link Name must be a string)");
        if (void 0 !== r.Tsize && ("number" != typeof r.Tsize || r.Tsize % 1 != 0)) throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
        if (t > 0 && -1 === linkComparator(r, e500.Links[t - 1])) throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)");
    }
}
function createNode(e501, t = []) {
    return prepare({
        Data: e501,
        Links: t
    });
}
function createLink(e502, t, r) {
    return asLink({
        Hash: r,
        Name: e502,
        Tsize: t
    });
}
const name$3 = "dag-pb", code$5 = 112;
function encode$3(e503) {
    validate(e503);
    const t25 = {};
    return e503.Links && (t25.Links = e503.Links.map((e504)=>{
        const t = {};
        return e504.Hash && (t.Hash = e504.Hash.bytes), void 0 !== e504.Name && (t.Name = e504.Name), void 0 !== e504.Tsize && (t.Tsize = e504.Tsize), t;
    })), e503.Data && (t25.Data = e503.Data), encodeNode(t25);
}
function decode$3(e505) {
    const t26 = decodeNode(e505), r = {};
    return t26.Data && (r.Data = t26.Data), t26.Links && (r.Links = t26.Links.map((e506)=>{
        const t = {};
        try {
            t.Hash = CID.decode(e506.Hash);
        } catch (e) {}
        if (!t.Hash) throw new Error("Invalid Hash field found in link, expected CID");
        return void 0 !== e506.Name && (t.Name = e506.Name), void 0 !== e506.Tsize && (t.Tsize = e506.Tsize), t;
    })), r;
}
var pb = Object.freeze({
    __proto__: null,
    name: name$3,
    code: code$5,
    encode: encode$3,
    decode: decode$3,
    prepare: prepare,
    validate: validate,
    createNode: createNode,
    createLink: createLink
});
const persist = async (e507, t, r)=>{
    r.codec || (r.codec = pb), r.hasher || (r.hasher = sha256), void 0 === r.cidVersion && (r.cidVersion = 1), r.codec === pb && r.hasher !== sha256 && (r.cidVersion = 1);
    const n = await r.hasher.digest(e507), o = CID.create(r.cidVersion, r.codec.code, n);
    return r.onlyHash || await t.put(o, e507, {
        signal: r.signal
    }), o;
}, dirBuilder = async (e508, t, r)=>{
    const n = new UnixFS({
        type: "directory",
        mtime: e508.mtime,
        mode: e508.mode
    }), o = encode$3(prepare({
        Data: n.marshal()
    }));
    return {
        cid: await persist(o, t, r),
        path: e508.path,
        unixfs: n,
        size: o.length
    };
}, name$2 = "raw", code$4 = 85, encode$2 = (e509)=>coerce(e509)
, decode$2 = (e510)=>coerce(e510)
;
var raw = Object.freeze({
    __proto__: null,
    name: name$2,
    code: code$4,
    encode: encode$2,
    decode: decode$2
});
const all = async (e511)=>{
    const t = [];
    for await (const r of e511)t.push(r);
    return t;
};
var itAll = all;
async function flat(e512, t) {
    return t(await itAll(e512));
}
function balanced(e513, t, r) {
    return reduceToParents(e513, t, r);
}
async function reduceToParents(e514, t, r) {
    const n = [];
    for await (const o of itBatch(e514, r.maxChildrenPerNode))n.push(await t(o));
    return n.length > 1 ? reduceToParents(n, t, r) : n[0];
}
async function trickleStream(e515, t, r) {
    const n = new Root(r.layerRepeat);
    let o = 0, i58 = 1, s = n;
    for await (const a of itBatch(e515, r.maxChildrenPerNode))s.isFull() && (s !== n && n.addChild(await s.reduce(t)), o && o % r.layerRepeat == 0 && i58++, s = new SubTree(i58, r.layerRepeat, o), o++), s.append(a);
    return s && s !== n && n.addChild(await s.reduce(t)), n.reduce(t);
}
class SubTree {
    constructor(e516, t, r = 0){
        this.maxDepth = e516, this.layerRepeat = t, this.currentDepth = 1, this.iteration = r, this.root = this.node = this.parent = {
            children: [],
            depth: this.currentDepth,
            maxDepth: e516,
            maxChildren: (this.maxDepth - this.currentDepth) * this.layerRepeat
        };
    }
    isFull() {
        if (!this.root.data) return !1;
        if (this.currentDepth < this.maxDepth && this.node.maxChildren) return this._addNextNodeToParent(this.node), !1;
        const e517 = this._findParent(this.node, this.currentDepth);
        return !e517 || (this._addNextNodeToParent(e517), !1);
    }
    _addNextNodeToParent(e518) {
        this.parent = e518;
        const t = {
            children: [],
            depth: e518.depth + 1,
            parent: e518,
            maxDepth: this.maxDepth,
            maxChildren: Math.floor(e518.children.length / this.layerRepeat) * this.layerRepeat
        };
        e518.children.push(t), this.currentDepth = t.depth, this.node = t;
    }
    append(e519) {
        this.node.data = e519;
    }
    reduce(e520) {
        return this._reduce(this.root, e520);
    }
    async _reduce(e521, t) {
        let r = [];
        return e521.children.length && (r = await Promise.all(e521.children.filter((e522)=>e522.data
        ).map((e523)=>this._reduce(e523, t)
        ))), t((e521.data || []).concat(r));
    }
    _findParent(e524, t) {
        const r = e524.parent;
        if (r && 0 !== r.depth) return r.children.length !== r.maxChildren && r.maxChildren ? r : this._findParent(r, t);
    }
}
class Root extends SubTree {
    constructor(e525){
        super(0, e525), this.root.depth = 0, this.currentDepth = 1;
    }
    addChild(e526) {
        this.root.children.push(e526);
    }
    reduce(e527) {
        return e527((this.root.data || []).concat(this.root.children));
    }
}
async function* bufferImporter(e528, t, r) {
    for await (let n of e528.content)yield async ()=>{
        let o;
        r.progress(n.length, e528.path);
        const i59 = {
            codec: pb,
            cidVersion: r.cidVersion,
            hasher: r.hasher,
            onlyHash: r.onlyHash
        };
        return r.rawLeaves ? (i59.codec = raw, i59.cidVersion = 1) : (o = new UnixFS({
            type: r.leafType,
            data: n,
            mtime: e528.mtime,
            mode: e528.mode
        }), n = encode$3({
            Data: o.marshal(),
            Links: []
        })), {
            cid: await persist(n, t, i59),
            unixfs: o,
            size: n.length
        };
    };
}
const dagBuilders = {
    flat: flat,
    balanced: balanced,
    trickle: trickleStream
};
async function* buildFileBatch(e529, t, r) {
    let n, o, i60 = -1;
    o = "function" == typeof r.bufferImporter ? r.bufferImporter : bufferImporter;
    for await (const s of itParallelBatch(o(e529, t, r), r.blockWriteConcurrency))i60++, 0 !== i60 ? (1 === i60 && n && (yield n, n = null), yield s) : n = s;
    n && (n.single = !0, yield n);
}
const reduce = (e530, t27, r)=>async function(n) {
        if (1 === n.length && n[0].single && r.reduceSingleLeafToSelf) {
            const o = n[0];
            if (o.cid.code === code$4 && (void 0 !== e530.mtime || void 0 !== e530.mode)) {
                let n = await t27.get(o.cid);
                o.unixfs = new UnixFS({
                    type: "file",
                    mtime: e530.mtime,
                    mode: e530.mode,
                    data: n
                }), n = encode$3(prepare({
                    Data: o.unixfs.marshal()
                })), o.cid = await persist(n, t27, {
                    ...r,
                    codec: pb,
                    hasher: r.hasher,
                    cidVersion: r.cidVersion
                }), o.size = n.length;
            }
            return {
                cid: o.cid,
                path: e530.path,
                unixfs: o.unixfs,
                size: o.size
            };
        }
        const o = new UnixFS({
            type: "file",
            mtime: e530.mtime,
            mode: e530.mode
        }), i61 = n.filter((e531)=>!(e531.cid.code !== code$4 || !e531.size) || !(!e531.unixfs || e531.unixfs.data || !e531.unixfs.fileSize()) || Boolean(e531.unixfs && e531.unixfs.data && e531.unixfs.data.length)
        ).map((e532)=>e532.cid.code === code$4 ? (o.addBlockSize(e532.size), {
                Name: "",
                Tsize: e532.size,
                Hash: e532.cid
            }) : (e532.unixfs && e532.unixfs.data ? o.addBlockSize(e532.unixfs.data.length) : o.addBlockSize(e532.unixfs && e532.unixfs.fileSize() || 0), {
                Name: "",
                Tsize: e532.size,
                Hash: e532.cid
            })
        ), s = {
            Data: o.marshal(),
            Links: i61
        }, a = encode$3(prepare(s));
        return {
            cid: await persist(a, t27, r),
            path: e530.path,
            unixfs: o,
            size: a.length + s.Links.reduce((e533, t)=>e533 + t.Tsize
            , 0)
        };
    }
;
function fileBuilder(e534, t, r) {
    const n = dagBuilders[r.strategy];
    if (!n) throw errCode(new Error(`Unknown importer build strategy name: ${r.strategy}`), "ERR_BAD_STRATEGY");
    return n(buildFileBatch(e534, t, r), reduce(e534, t, r), r);
}
var buffer = {}, base64Js = {};
base64Js.byteLength = byteLength, base64Js.toByteArray = toByteArray, base64Js.fromByteArray = fromByteArray;
for(var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code$3.length; i < len; ++i)lookup[i] = code$3[i], revLookup[code$3.charCodeAt(i)] = i;
function getLens(e535) {
    var t = e535.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e535.indexOf("=");
    return -1 === r && (r = t), [
        r,
        r === t ? 0 : 4 - r % 4
    ];
}
function byteLength(e536) {
    var t = getLens(e536), r = t[0], n = t[1];
    return 3 * (r + n) / 4 - n;
}
function _byteLength(e, t, r) {
    return 3 * (t + r) / 4 - r;
}
function toByteArray(e537) {
    var t, r, n = getLens(e537), o = n[0], i62 = n[1], s = new Arr(_byteLength(e537, o, i62)), a = 0, c = i62 > 0 ? o - 4 : o;
    for(r = 0; r < c; r += 4)t = revLookup[e537.charCodeAt(r)] << 18 | revLookup[e537.charCodeAt(r + 1)] << 12 | revLookup[e537.charCodeAt(r + 2)] << 6 | revLookup[e537.charCodeAt(r + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
    return 2 === i62 && (t = revLookup[e537.charCodeAt(r)] << 2 | revLookup[e537.charCodeAt(r + 1)] >> 4, s[a++] = 255 & t), 1 === i62 && (t = revLookup[e537.charCodeAt(r)] << 10 | revLookup[e537.charCodeAt(r + 1)] << 4 | revLookup[e537.charCodeAt(r + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t), s;
}
function tripletToBase64(e538) {
    return lookup[e538 >> 18 & 63] + lookup[e538 >> 12 & 63] + lookup[e538 >> 6 & 63] + lookup[63 & e538];
}
function encodeChunk(e539, t, r) {
    for(var n, o = [], i63 = t; i63 < r; i63 += 3)n = (e539[i63] << 16 & 16711680) + (e539[i63 + 1] << 8 & 65280) + (255 & e539[i63 + 2]), o.push(tripletToBase64(n));
    return o.join("");
}
function fromByteArray(e540) {
    for(var t, r = e540.length, n = r % 3, o = [], i64 = 16383, s = 0, a = r - n; s < a; s += i64)o.push(encodeChunk(e540, s, s + i64 > a ? a : s + i64));
    return 1 === n ? (t = e540[r - 1], o.push(lookup[t >> 2] + lookup[t << 4 & 63] + "==")) : 2 === n && (t = (e540[r - 2] << 8) + e540[r - 1], o.push(lookup[t >> 10] + lookup[t >> 4 & 63] + lookup[t << 2 & 63] + "=")), o.join("");
}
revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
var ieee754 = {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ read: function(e541, t, r, n, o) {
        var i65, s, a = 8 * o - n - 1, c = (1 << a) - 1, u = c >> 1, f = -7, l = r ? o - 1 : 0, h = r ? -1 : 1, d = e541[t + l];
        for(l += h, i65 = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; i65 = 256 * i65 + e541[t + l], l += h, f -= 8);
        for(s = i65 & (1 << -f) - 1, i65 >>= -f, f += n; f > 0; s = 256 * s + e541[t + l], l += h, f -= 8);
        if (0 === i65) i65 = 1 - u;
        else {
            if (i65 === c) return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, n), i65 -= u;
        }
        return (d ? -1 : 1) * s * Math.pow(2, i65 - n);
    },
    write: function(e542, t, r, n, o, i66) {
        var s, a, c, u = 8 * i66 - o - 1, f = (1 << u) - 1, l = f >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : i66 - 1, p = n ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t += s + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2 && (s++, c /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * c - 1) * Math.pow(2, o), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e542[r + d] = 255 & a, d += p, a /= 256, o -= 8);
        for(s = s << o | a, u += o; u > 0; e542[r + d] = 255 & s, d += p, s /= 256, u -= 8);
        e542[r + d - p] |= 128 * y;
    }
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ !function(e543) {
    const t28 = base64Js, r20 = ieee754, n9 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    e543.Buffer = s4, e543.SlowBuffer = function(e544) {
        +e544 != e544 && (e544 = 0);
        return s4.alloc(+e544);
    }, e543.INSPECT_MAX_BYTES = 50;
    const o8 = 2147483647;
    function i67(e545) {
        if (e545 > o8) throw new RangeError('The value "' + e545 + '" is invalid for option "size"');
        const t = new Uint8Array(e545);
        return Object.setPrototypeOf(t, s4.prototype), t;
    }
    function s4(e546, t, r) {
        if ("number" == typeof e546) {
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return u3(e546);
        }
        return a2(e546, t, r);
    }
    function a2(e547, t29, r21) {
        if ("string" == typeof e547) return function(e548, t) {
            "string" == typeof t && "" !== t || (t = "utf8");
            if (!s4.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            const r = 0 | d(e548, t);
            let n = i67(r);
            const o = n.write(e548, t);
            o !== r && (n = n.slice(0, o));
            return n;
        }(e547, t29);
        if (ArrayBuffer.isView(e547)) return function(e549) {
            if (q(e549, Uint8Array)) {
                const t = new Uint8Array(e549);
                return l(t.buffer, t.byteOffset, t.byteLength);
            }
            return f3(e549);
        }(e547);
        if (null == e547) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e547);
        if (q(e547, ArrayBuffer) || e547 && q(e547.buffer, ArrayBuffer)) return l(e547, t29, r21);
        if ("undefined" != typeof SharedArrayBuffer && (q(e547, SharedArrayBuffer) || e547 && q(e547.buffer, SharedArrayBuffer))) return l(e547, t29, r21);
        if ("number" == typeof e547) throw new TypeError('The "value" argument must not be of type number. Received type number');
        const n10 = e547.valueOf && e547.valueOf();
        if (null != n10 && n10 !== e547) return s4.from(n10, t29, r21);
        const o9 = function(e550) {
            if (s4.isBuffer(e550)) {
                const t = 0 | h(e550.length), r = i67(t);
                return 0 === r.length || e550.copy(r, 0, 0, t), r;
            }
            if (void 0 !== e550.length) return "number" != typeof e550.length || K(e550.length) ? i67(0) : f3(e550);
            if ("Buffer" === e550.type && Array.isArray(e550.data)) return f3(e550.data);
        }(e547);
        if (o9) return o9;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e547[Symbol.toPrimitive]) return s4.from(e547[Symbol.toPrimitive]("string"), t29, r21);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e547);
    }
    function c2(e551) {
        if ("number" != typeof e551) throw new TypeError('"size" argument must be of type number');
        if (e551 < 0) throw new RangeError('The value "' + e551 + '" is invalid for option "size"');
    }
    function u3(e552) {
        return c2(e552), i67(e552 < 0 ? 0 : 0 | h(e552));
    }
    function f3(e553) {
        const t = e553.length < 0 ? 0 : 0 | h(e553.length), r = i67(t);
        for(let n = 0; n < t; n += 1)r[n] = 255 & e553[n];
        return r;
    }
    function l(e554, t, r) {
        if (t < 0 || e554.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e554.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return n = void 0 === t && void 0 === r ? new Uint8Array(e554) : void 0 === r ? new Uint8Array(e554, t) : new Uint8Array(e554, t, r), Object.setPrototypeOf(n, s4.prototype), n;
    }
    function h(e555) {
        if (e555 >= o8) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o8.toString(16) + " bytes");
        return 0 | e555;
    }
    function d(e556, t) {
        if (s4.isBuffer(e556)) return e556.length;
        if (ArrayBuffer.isView(e556) || q(e556, ArrayBuffer)) return e556.byteLength;
        if ("string" != typeof e556) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e556);
        const r = e556.length, n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let o = !1;
        for(;;)switch(t){
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return V(e556).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return W(e556).length;
            default:
                if (o) return n ? -1 : V(e556).length;
                t = ("" + t).toLowerCase(), o = !0;
        }
    }
    function p(e557, t, r) {
        let n = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for(e557 || (e557 = "utf8");;)switch(e557){
            case "hex":
                return S(this, t, r);
            case "utf8":
            case "utf-8":
                return v(this, t, r);
            case "ascii":
                return k(this, t, r);
            case "latin1":
            case "binary":
                return $(this, t, r);
            case "base64":
                return B(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return I(this, t, r);
            default:
                if (n) throw new TypeError("Unknown encoding: " + e557);
                e557 = (e557 + "").toLowerCase(), n = !0;
        }
    }
    function y(e558, t, r) {
        const n = e558[t];
        e558[t] = e558[r], e558[r] = n;
    }
    function g(e559, t, r, n, o) {
        if (0 === e559.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = o ? 0 : e559.length - 1), r < 0 && (r = e559.length + r), r >= e559.length) {
            if (o) return -1;
            r = e559.length - 1;
        } else if (r < 0) {
            if (!o) return -1;
            r = 0;
        }
        if ("string" == typeof t && (t = s4.from(t, n)), s4.isBuffer(t)) return 0 === t.length ? -1 : m(e559, t, r, n, o);
        if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e559, t, r) : Uint8Array.prototype.lastIndexOf.call(e559, t, r) : m(e559, [
            t
        ], r, n, o);
        throw new TypeError("val must be string, number or Buffer");
    }
    function m(e560, t30, r, n, o) {
        let i68, s = 1, a = e560.length, c = t30.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e560.length < 2 || t30.length < 2) return -1;
            s = 2, a /= 2, c /= 2, r /= 2;
        }
        function u(e561, t) {
            return 1 === s ? e561[t] : e561.readUInt16BE(t * s);
        }
        if (o) {
            let n = -1;
            for(i68 = r; i68 < a; i68++)if (u(e560, i68) === u(t30, -1 === n ? 0 : i68 - n)) {
                if (-1 === n && (n = i68), i68 - n + 1 === c) return n * s;
            } else -1 !== n && (i68 -= i68 - n), n = -1;
        } else for(r + c > a && (r = a - c), i68 = r; i68 >= 0; i68--){
            let r = !0;
            for(let n = 0; n < c; n++)if (u(e560, i68 + n) !== u(t30, n)) {
                r = !1;
                break;
            }
            if (r) return i68;
        }
        return -1;
    }
    function b(e562, t, r, n) {
        r = Number(r) || 0;
        const o = e562.length - r;
        n ? (n = Number(n)) > o && (n = o) : n = o;
        const i69 = t.length;
        let s;
        for(n > i69 / 2 && (n = i69 / 2), s = 0; s < n; ++s){
            const n = parseInt(t.substr(2 * s, 2), 16);
            if (K(n)) return s;
            e562[r + s] = n;
        }
        return s;
    }
    function w(e563, t, r, n) {
        return G(V(t, e563.length - r), e563, r, n);
    }
    function _(e564, t31, r22, n) {
        return G(function(e565) {
            const t = [];
            for(let r = 0; r < e565.length; ++r)t.push(255 & e565.charCodeAt(r));
            return t;
        }(t31), e564, r22, n);
    }
    function E(e566, t, r, n) {
        return G(W(t), e566, r, n);
    }
    function T(e567, t32, r23, n11) {
        return G(function(e568, t) {
            let r, n, o;
            const i70 = [];
            for(let s = 0; s < e568.length && !((t -= 2) < 0); ++s)r = e568.charCodeAt(s), n = r >> 8, o = r % 256, i70.push(o), i70.push(n);
            return i70;
        }(t32, e567.length - r23), e567, r23, n11);
    }
    function B(e569, r, n) {
        return 0 === r && n === e569.length ? t28.fromByteArray(e569) : t28.fromByteArray(e569.slice(r, n));
    }
    function v(e570, t33, r24) {
        r24 = Math.min(e570.length, r24);
        const n12 = [];
        let o = t33;
        for(; o < r24;){
            const t = e570[o];
            let i71 = null, s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (o + s <= r24) {
                let r, n, a, c;
                switch(s){
                    case 1:
                        t < 128 && (i71 = t);
                        break;
                    case 2:
                        r = e570[o + 1], 128 == (192 & r) && (c = (31 & t) << 6 | 63 & r, c > 127 && (i71 = c));
                        break;
                    case 3:
                        r = e570[o + 1], n = e570[o + 2], 128 == (192 & r) && 128 == (192 & n) && (c = (15 & t) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i71 = c));
                        break;
                    case 4:
                        r = e570[o + 1], n = e570[o + 2], a = e570[o + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (c = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, c > 65535 && c < 1114112 && (i71 = c));
                }
            }
            null === i71 ? (i71 = 65533, s = 1) : i71 > 65535 && (i71 -= 65536, n12.push(i71 >>> 10 & 1023 | 55296), i71 = 56320 | 1023 & i71), n12.push(i71), o += s;
        }
        return function(e571) {
            const t = e571.length;
            if (t <= A) return String.fromCharCode.apply(String, e571);
            let r = "", n = 0;
            for(; n < t;)r += String.fromCharCode.apply(String, e571.slice(n, n += A));
            return r;
        }(n12);
    }
    e543.kMaxLength = o8, s4.TYPED_ARRAY_SUPPORT = function() {
        try {
            const e572 = new Uint8Array(1), t = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e572, t), 42 === e572.foo();
        } catch (e) {
            return !1;
        }
    }(), s4.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s4.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (s4.isBuffer(this)) return this.buffer;
        }
    }), Object.defineProperty(s4.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (s4.isBuffer(this)) return this.byteOffset;
        }
    }), s4.poolSize = 8192, s4.from = function(e573, t, r) {
        return a2(e573, t, r);
    }, Object.setPrototypeOf(s4.prototype, Uint8Array.prototype), Object.setPrototypeOf(s4, Uint8Array), s4.alloc = function(e574, t34, r25) {
        return function(e575, t, r) {
            return c2(e575), e575 <= 0 ? i67(e575) : void 0 !== t ? "string" == typeof r ? i67(e575).fill(t, r) : i67(e575).fill(t) : i67(e575);
        }(e574, t34, r25);
    }, s4.allocUnsafe = function(e576) {
        return u3(e576);
    }, s4.allocUnsafeSlow = function(e577) {
        return u3(e577);
    }, s4.isBuffer = function(e578) {
        return null != e578 && !0 === e578._isBuffer && e578 !== s4.prototype;
    }, s4.compare = function(e579, t) {
        if (q(e579, Uint8Array) && (e579 = s4.from(e579, e579.offset, e579.byteLength)), q(t, Uint8Array) && (t = s4.from(t, t.offset, t.byteLength)), !s4.isBuffer(e579) || !s4.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e579 === t) return 0;
        let r = e579.length, n = t.length;
        for(let o = 0, i72 = Math.min(r, n); o < i72; ++o)if (e579[o] !== t[o]) {
            r = e579[o], n = t[o];
            break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
    }, s4.isEncoding = function(e580) {
        switch(String(e580).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, s4.concat = function(e581, t) {
        if (!Array.isArray(e581)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e581.length) return s4.alloc(0);
        let r;
        if (void 0 === t) for(t = 0, r = 0; r < e581.length; ++r)t += e581[r].length;
        const n = s4.allocUnsafe(t);
        let o = 0;
        for(r = 0; r < e581.length; ++r){
            let t = e581[r];
            if (q(t, Uint8Array)) o + t.length > n.length ? (s4.isBuffer(t) || (t = s4.from(t)), t.copy(n, o)) : Uint8Array.prototype.set.call(n, t, o);
            else {
                if (!s4.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(n, o);
            }
            o += t.length;
        }
        return n;
    }, s4.byteLength = d, s4.prototype._isBuffer = !0, s4.prototype.swap16 = function() {
        const e582 = this.length;
        if (e582 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(let t = 0; t < e582; t += 2)y(this, t, t + 1);
        return this;
    }, s4.prototype.swap32 = function() {
        const e583 = this.length;
        if (e583 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for(let t = 0; t < e583; t += 4)y(this, t, t + 3), y(this, t + 1, t + 2);
        return this;
    }, s4.prototype.swap64 = function() {
        const e584 = this.length;
        if (e584 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(let t = 0; t < e584; t += 8)y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
        return this;
    }, s4.prototype.toString = function() {
        const e585 = this.length;
        return 0 === e585 ? "" : 0 === arguments.length ? v(this, 0, e585) : p.apply(this, arguments);
    }, s4.prototype.toLocaleString = s4.prototype.toString, s4.prototype.equals = function(e586) {
        if (!s4.isBuffer(e586)) throw new TypeError("Argument must be a Buffer");
        return this === e586 || 0 === s4.compare(this, e586);
    }, s4.prototype.inspect = function() {
        let t = "";
        const r = e543.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    }, n9 && (s4.prototype[n9] = s4.prototype.inspect), s4.prototype.compare = function(e588, t, r, n, o) {
        if (q(e588, Uint8Array) && (e588 = s4.from(e588, e588.offset, e588.byteLength)), !s4.isBuffer(e588)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e588);
        if (void 0 === t && (t = 0), void 0 === r && (r = e588 ? e588.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e588.length || n < 0 || o > this.length) throw new RangeError("out of range index");
        if (n >= o && t >= r) return 0;
        if (n >= o) return -1;
        if (t >= r) return 1;
        if (this === e588) return 0;
        let i73 = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0);
        const c = Math.min(i73, a), u = this.slice(n, o), f = e588.slice(t, r);
        for(let e587 = 0; e587 < c; ++e587)if (u[e587] !== f[e587]) {
            i73 = u[e587], a = f[e587];
            break;
        }
        return i73 < a ? -1 : a < i73 ? 1 : 0;
    }, s4.prototype.includes = function(e589, t, r) {
        return -1 !== this.indexOf(e589, t, r);
    }, s4.prototype.indexOf = function(e590, t, r) {
        return g(this, e590, t, r, !0);
    }, s4.prototype.lastIndexOf = function(e591, t, r) {
        return g(this, e591, t, r, !1);
    }, s4.prototype.write = function(e592, t, r, n) {
        if (void 0 === t) n = "utf8", r = this.length, t = 0;
        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
        else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        const o = this.length - t;
        if ((void 0 === r || r > o) && (r = o), e592.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let i74 = !1;
        for(;;)switch(n){
            case "hex":
                return b(this, e592, t, r);
            case "utf8":
            case "utf-8":
                return w(this, e592, t, r);
            case "ascii":
            case "latin1":
            case "binary":
                return _(this, e592, t, r);
            case "base64":
                return E(this, e592, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return T(this, e592, t, r);
            default:
                if (i74) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), i74 = !0;
        }
    }, s4.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    const A = 4096;
    function k(e593, t, r) {
        let n = "";
        r = Math.min(e593.length, r);
        for(let o = t; o < r; ++o)n += String.fromCharCode(127 & e593[o]);
        return n;
    }
    function $(e594, t, r) {
        let n = "";
        r = Math.min(e594.length, r);
        for(let o = t; o < r; ++o)n += String.fromCharCode(e594[o]);
        return n;
    }
    function S(e595, t, r) {
        const n = e595.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let o = "";
        for(let n13 = t; n13 < r; ++n13)o += Y[e595[n13]];
        return o;
    }
    function I(e597, t, r) {
        const n = e597.slice(t, r);
        let o = "";
        for(let e596 = 0; e596 < n.length - 1; e596 += 2)o += String.fromCharCode(n[e596] + 256 * n[e596 + 1]);
        return o;
    }
    function C(e598, t, r) {
        if (e598 % 1 != 0 || e598 < 0) throw new RangeError("offset is not uint");
        if (e598 + t > r) throw new RangeError("Trying to access beyond buffer length");
    }
    function R(e599, t, r, n, o, i75) {
        if (!s4.isBuffer(e599)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i75) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e599.length) throw new RangeError("Index out of range");
    }
    function x(e600, t, r, n, o) {
        F(t, n, o, e600, r, 7);
        let i76 = Number(t & BigInt(4294967295));
        e600[r++] = i76, i76 >>= 8, e600[r++] = i76, i76 >>= 8, e600[r++] = i76, i76 >>= 8, e600[r++] = i76;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e600[r++] = s, s >>= 8, e600[r++] = s, s >>= 8, e600[r++] = s, s >>= 8, e600[r++] = s, r;
    }
    function O(e601, t, r, n, o) {
        F(t, n, o, e601, r, 7);
        let i77 = Number(t & BigInt(4294967295));
        e601[r + 7] = i77, i77 >>= 8, e601[r + 6] = i77, i77 >>= 8, e601[r + 5] = i77, i77 >>= 8, e601[r + 4] = i77;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e601[r + 3] = s, s >>= 8, e601[r + 2] = s, s >>= 8, e601[r + 1] = s, s >>= 8, e601[r] = s, r + 8;
    }
    function D(e602, t, r, n, o, i) {
        if (r + n > e602.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
    }
    function L(e603, t, n, o, i78) {
        return t = +t, n >>>= 0, i78 || D(e603, 0, n, 4), r20.write(e603, t, n, o, 23, 4), n + 4;
    }
    function N(e604, t, n, o, i79) {
        return t = +t, n >>>= 0, i79 || D(e604, 0, n, 8), r20.write(e604, t, n, o, 52, 8), n + 8;
    }
    s4.prototype.slice = function(e605, t) {
        const r = this.length;
        (e605 = ~~e605) < 0 ? (e605 += r) < 0 && (e605 = 0) : e605 > r && (e605 = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e605 && (t = e605);
        const n = this.subarray(e605, t);
        return Object.setPrototypeOf(n, s4.prototype), n;
    }, s4.prototype.readUintLE = s4.prototype.readUIntLE = function(e606, t, r) {
        e606 >>>= 0, t >>>= 0, r || C(e606, t, this.length);
        let n = this[e606], o = 1, i80 = 0;
        for(; ++i80 < t && (o *= 256);)n += this[e606 + i80] * o;
        return n;
    }, s4.prototype.readUintBE = s4.prototype.readUIntBE = function(e607, t, r) {
        e607 >>>= 0, t >>>= 0, r || C(e607, t, this.length);
        let n = this[e607 + --t], o = 1;
        for(; t > 0 && (o *= 256);)n += this[e607 + --t] * o;
        return n;
    }, s4.prototype.readUint8 = s4.prototype.readUInt8 = function(e608, t) {
        return e608 >>>= 0, t || C(e608, 1, this.length), this[e608];
    }, s4.prototype.readUint16LE = s4.prototype.readUInt16LE = function(e609, t) {
        return e609 >>>= 0, t || C(e609, 2, this.length), this[e609] | this[e609 + 1] << 8;
    }, s4.prototype.readUint16BE = s4.prototype.readUInt16BE = function(e610, t) {
        return e610 >>>= 0, t || C(e610, 2, this.length), this[e610] << 8 | this[e610 + 1];
    }, s4.prototype.readUint32LE = s4.prototype.readUInt32LE = function(e611, t) {
        return e611 >>>= 0, t || C(e611, 4, this.length), (this[e611] | this[e611 + 1] << 8 | this[e611 + 2] << 16) + 16777216 * this[e611 + 3];
    }, s4.prototype.readUint32BE = s4.prototype.readUInt32BE = function(e612, t) {
        return e612 >>>= 0, t || C(e612, 4, this.length), 16777216 * this[e612] + (this[e612 + 1] << 16 | this[e612 + 2] << 8 | this[e612 + 3]);
    }, s4.prototype.readBigUInt64LE = X(function(e613) {
        M(e613 >>>= 0, "offset");
        const t = this[e613], r = this[e613 + 7];
        void 0 !== t && void 0 !== r || z(e613, this.length - 8);
        const n = t + 256 * this[++e613] + 65536 * this[++e613] + this[++e613] * 2 ** 24, o = this[++e613] + 256 * this[++e613] + 65536 * this[++e613] + r * 2 ** 24;
        return BigInt(n) + (BigInt(o) << BigInt(32));
    }), s4.prototype.readBigUInt64BE = X(function(e614) {
        M(e614 >>>= 0, "offset");
        const t = this[e614], r = this[e614 + 7];
        void 0 !== t && void 0 !== r || z(e614, this.length - 8);
        const n = t * 2 ** 24 + 65536 * this[++e614] + 256 * this[++e614] + this[++e614], o = this[++e614] * 2 ** 24 + 65536 * this[++e614] + 256 * this[++e614] + r;
        return (BigInt(n) << BigInt(32)) + BigInt(o);
    }), s4.prototype.readIntLE = function(e615, t, r) {
        e615 >>>= 0, t >>>= 0, r || C(e615, t, this.length);
        let n = this[e615], o = 1, i81 = 0;
        for(; ++i81 < t && (o *= 256);)n += this[e615 + i81] * o;
        return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
    }, s4.prototype.readIntBE = function(e616, t, r) {
        e616 >>>= 0, t >>>= 0, r || C(e616, t, this.length);
        let n = t, o = 1, i82 = this[e616 + --n];
        for(; n > 0 && (o *= 256);)i82 += this[e616 + --n] * o;
        return o *= 128, i82 >= o && (i82 -= Math.pow(2, 8 * t)), i82;
    }, s4.prototype.readInt8 = function(e617, t) {
        return e617 >>>= 0, t || C(e617, 1, this.length), 128 & this[e617] ? -1 * (255 - this[e617] + 1) : this[e617];
    }, s4.prototype.readInt16LE = function(e618, t) {
        e618 >>>= 0, t || C(e618, 2, this.length);
        const r = this[e618] | this[e618 + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, s4.prototype.readInt16BE = function(e619, t) {
        e619 >>>= 0, t || C(e619, 2, this.length);
        const r = this[e619 + 1] | this[e619] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, s4.prototype.readInt32LE = function(e620, t) {
        return e620 >>>= 0, t || C(e620, 4, this.length), this[e620] | this[e620 + 1] << 8 | this[e620 + 2] << 16 | this[e620 + 3] << 24;
    }, s4.prototype.readInt32BE = function(e621, t) {
        return e621 >>>= 0, t || C(e621, 4, this.length), this[e621] << 24 | this[e621 + 1] << 16 | this[e621 + 2] << 8 | this[e621 + 3];
    }, s4.prototype.readBigInt64LE = X(function(e622) {
        M(e622 >>>= 0, "offset");
        const t = this[e622], r = this[e622 + 7];
        void 0 !== t && void 0 !== r || z(e622, this.length - 8);
        const n = this[e622 + 4] + 256 * this[e622 + 5] + 65536 * this[e622 + 6] + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e622] + 65536 * this[++e622] + this[++e622] * 2 ** 24);
    }), s4.prototype.readBigInt64BE = X(function(e623) {
        M(e623 >>>= 0, "offset");
        const t = this[e623], r = this[e623 + 7];
        void 0 !== t && void 0 !== r || z(e623, this.length - 8);
        const n = (t << 24) + 65536 * this[++e623] + 256 * this[++e623] + this[++e623];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e623] * 2 ** 24 + 65536 * this[++e623] + 256 * this[++e623] + r);
    }), s4.prototype.readFloatLE = function(e624, t) {
        return e624 >>>= 0, t || C(e624, 4, this.length), r20.read(this, e624, !0, 23, 4);
    }, s4.prototype.readFloatBE = function(e625, t) {
        return e625 >>>= 0, t || C(e625, 4, this.length), r20.read(this, e625, !1, 23, 4);
    }, s4.prototype.readDoubleLE = function(e626, t) {
        return e626 >>>= 0, t || C(e626, 8, this.length), r20.read(this, e626, !0, 52, 8);
    }, s4.prototype.readDoubleBE = function(e627, t) {
        return e627 >>>= 0, t || C(e627, 8, this.length), r20.read(this, e627, !1, 52, 8);
    }, s4.prototype.writeUintLE = s4.prototype.writeUIntLE = function(e628, t, r, n) {
        if (e628 = +e628, t >>>= 0, r >>>= 0, !n) R(this, e628, t, r, Math.pow(2, 8 * r) - 1, 0);
        let o = 1, i83 = 0;
        for(this[t] = 255 & e628; ++i83 < r && (o *= 256);)this[t + i83] = e628 / o & 255;
        return t + r;
    }, s4.prototype.writeUintBE = s4.prototype.writeUIntBE = function(e629, t, r, n) {
        if (e629 = +e629, t >>>= 0, r >>>= 0, !n) R(this, e629, t, r, Math.pow(2, 8 * r) - 1, 0);
        let o = r - 1, i84 = 1;
        for(this[t + o] = 255 & e629; --o >= 0 && (i84 *= 256);)this[t + o] = e629 / i84 & 255;
        return t + r;
    }, s4.prototype.writeUint8 = s4.prototype.writeUInt8 = function(e630, t, r) {
        return e630 = +e630, t >>>= 0, r || R(this, e630, t, 1, 255, 0), this[t] = 255 & e630, t + 1;
    }, s4.prototype.writeUint16LE = s4.prototype.writeUInt16LE = function(e631, t, r) {
        return e631 = +e631, t >>>= 0, r || R(this, e631, t, 2, 65535, 0), this[t] = 255 & e631, this[t + 1] = e631 >>> 8, t + 2;
    }, s4.prototype.writeUint16BE = s4.prototype.writeUInt16BE = function(e632, t, r) {
        return e632 = +e632, t >>>= 0, r || R(this, e632, t, 2, 65535, 0), this[t] = e632 >>> 8, this[t + 1] = 255 & e632, t + 2;
    }, s4.prototype.writeUint32LE = s4.prototype.writeUInt32LE = function(e633, t, r) {
        return e633 = +e633, t >>>= 0, r || R(this, e633, t, 4, 4294967295, 0), this[t + 3] = e633 >>> 24, this[t + 2] = e633 >>> 16, this[t + 1] = e633 >>> 8, this[t] = 255 & e633, t + 4;
    }, s4.prototype.writeUint32BE = s4.prototype.writeUInt32BE = function(e634, t, r) {
        return e634 = +e634, t >>>= 0, r || R(this, e634, t, 4, 4294967295, 0), this[t] = e634 >>> 24, this[t + 1] = e634 >>> 16, this[t + 2] = e634 >>> 8, this[t + 3] = 255 & e634, t + 4;
    }, s4.prototype.writeBigUInt64LE = X(function(e635, t = 0) {
        return x(this, e635, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s4.prototype.writeBigUInt64BE = X(function(e636, t = 0) {
        return O(this, e636, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), s4.prototype.writeIntLE = function(e637, t, r, n) {
        if (e637 = +e637, t >>>= 0, !n) {
            const n = Math.pow(2, 8 * r - 1);
            R(this, e637, t, r, n - 1, -n);
        }
        let o = 0, i85 = 1, s = 0;
        for(this[t] = 255 & e637; ++o < r && (i85 *= 256);)e637 < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e637 / i85 >> 0) - s & 255;
        return t + r;
    }, s4.prototype.writeIntBE = function(e638, t, r, n) {
        if (e638 = +e638, t >>>= 0, !n) {
            const n = Math.pow(2, 8 * r - 1);
            R(this, e638, t, r, n - 1, -n);
        }
        let o = r - 1, i86 = 1, s = 0;
        for(this[t + o] = 255 & e638; --o >= 0 && (i86 *= 256);)e638 < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e638 / i86 >> 0) - s & 255;
        return t + r;
    }, s4.prototype.writeInt8 = function(e639, t, r) {
        return e639 = +e639, t >>>= 0, r || R(this, e639, t, 1, 127, -128), e639 < 0 && (e639 = 255 + e639 + 1), this[t] = 255 & e639, t + 1;
    }, s4.prototype.writeInt16LE = function(e640, t, r) {
        return e640 = +e640, t >>>= 0, r || R(this, e640, t, 2, 32767, -32768), this[t] = 255 & e640, this[t + 1] = e640 >>> 8, t + 2;
    }, s4.prototype.writeInt16BE = function(e641, t, r) {
        return e641 = +e641, t >>>= 0, r || R(this, e641, t, 2, 32767, -32768), this[t] = e641 >>> 8, this[t + 1] = 255 & e641, t + 2;
    }, s4.prototype.writeInt32LE = function(e642, t, r) {
        return e642 = +e642, t >>>= 0, r || R(this, e642, t, 4, 2147483647, -2147483648), this[t] = 255 & e642, this[t + 1] = e642 >>> 8, this[t + 2] = e642 >>> 16, this[t + 3] = e642 >>> 24, t + 4;
    }, s4.prototype.writeInt32BE = function(e643, t, r) {
        return e643 = +e643, t >>>= 0, r || R(this, e643, t, 4, 2147483647, -2147483648), e643 < 0 && (e643 = 4294967295 + e643 + 1), this[t] = e643 >>> 24, this[t + 1] = e643 >>> 16, this[t + 2] = e643 >>> 8, this[t + 3] = 255 & e643, t + 4;
    }, s4.prototype.writeBigInt64LE = X(function(e644, t = 0) {
        return x(this, e644, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), s4.prototype.writeBigInt64BE = X(function(e645, t = 0) {
        return O(this, e645, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), s4.prototype.writeFloatLE = function(e646, t, r) {
        return L(this, e646, t, !0, r);
    }, s4.prototype.writeFloatBE = function(e647, t, r) {
        return L(this, e647, t, !1, r);
    }, s4.prototype.writeDoubleLE = function(e648, t, r) {
        return N(this, e648, t, !0, r);
    }, s4.prototype.writeDoubleBE = function(e649, t, r) {
        return N(this, e649, t, !1, r);
    }, s4.prototype.copy = function(e650, t, r, n) {
        if (!s4.isBuffer(e650)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e650.length && (t = e650.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === e650.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e650.length - t < n - r && (n = e650.length - t + r);
        const o = n - r;
        return this === e650 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e650, this.subarray(r, n), t), o;
    }, s4.prototype.fill = function(e651, t, r, n) {
        if ("string" == typeof e651) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !s4.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            if (1 === e651.length) {
                const t = e651.charCodeAt(0);
                ("utf8" === n && t < 128 || "latin1" === n) && (e651 = t);
            }
        } else "number" == typeof e651 ? e651 &= 255 : "boolean" == typeof e651 && (e651 = Number(e651));
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        let o;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e651 || (e651 = 0), "number" == typeof e651) for(o = t; o < r; ++o)this[o] = e651;
        else {
            const i87 = s4.isBuffer(e651) ? e651 : s4.from(e651, n), a = i87.length;
            if (0 === a) throw new TypeError('The value "' + e651 + '" is invalid for argument "value"');
            for(o = 0; o < r - t; ++o)this[o + t] = i87[o % a];
        }
        return this;
    };
    const U = {};
    function P(e652, t, r) {
        U[e652] = class extends r {
            constructor(){
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${e652}]`, this.stack, delete this.name;
            }
            get code() {
                return e652;
            }
            set code(e653) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e653,
                    writable: !0
                });
            }
            toString() {
                return `${this.name} [${e652}]: ${this.message}`;
            }
        };
    }
    function j(e654) {
        let t = "", r = e654.length;
        const n = "-" === e654[0] ? 1 : 0;
        for(; r >= n + 4; r -= 3)t = `_${e654.slice(r - 3, r)}${t}`;
        return `${e654.slice(0, r)}${t}`;
    }
    function F(e655, t35, r26, n, o, i88) {
        if (e655 > r26 || e655 < t35) {
            const n = "bigint" == typeof t35 ? "n" : "";
            let o;
            throw o = i88 > 3 ? 0 === t35 || t35 === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (i88 + 1)}${n}` : `>= -(2${n} ** ${8 * (i88 + 1) - 1}${n}) and < 2 ** ${8 * (i88 + 1) - 1}${n}` : `>= ${t35}${n} and <= ${r26}${n}`, new U.ERR_OUT_OF_RANGE("value", o, e655);
        }
        !function(e656, t, r) {
            M(t, "offset"), void 0 !== e656[t] && void 0 !== e656[t + r] || z(t, e656.length - (r + 1));
        }(n, o, i88);
    }
    function M(e657, t) {
        if ("number" != typeof e657) throw new U.ERR_INVALID_ARG_TYPE(t, "number", e657);
    }
    function z(e658, t, r) {
        if (Math.floor(e658) !== e658) throw M(e658, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", e658);
        if (t < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS;
        throw new U.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e658);
    }
    P("ERR_BUFFER_OUT_OF_BOUNDS", function(e659) {
        return e659 ? `${e659} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), P("ERR_INVALID_ARG_TYPE", function(e660, t) {
        return `The "${e660}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError), P("ERR_OUT_OF_RANGE", function(e661, t, r) {
        let n = `The value of "${e661}" is out of range.`, o = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = j(String(r)) : "bigint" == typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = j(o)), o += "n"), n += ` It must be ${t}. Received ${o}`, n;
    }, RangeError);
    const H = /[^+/0-9A-Za-z-_]/g;
    function V(e662, t) {
        let r;
        t = t || 1 / 0;
        const n = e662.length;
        let o = null;
        const i89 = [];
        for(let s = 0; s < n; ++s){
            if (r = e662.charCodeAt(s), r > 55295 && r < 57344) {
                if (!o) {
                    if (r > 56319) {
                        (t -= 3) > -1 && i89.push(239, 191, 189);
                        continue;
                    }
                    if (s + 1 === n) {
                        (t -= 3) > -1 && i89.push(239, 191, 189);
                        continue;
                    }
                    o = r;
                    continue;
                }
                if (r < 56320) {
                    (t -= 3) > -1 && i89.push(239, 191, 189), o = r;
                    continue;
                }
                r = 65536 + (o - 55296 << 10 | r - 56320);
            } else o && (t -= 3) > -1 && i89.push(239, 191, 189);
            if (o = null, r < 128) {
                if ((t -= 1) < 0) break;
                i89.push(r);
            } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                i89.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                i89.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                i89.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
        }
        return i89;
    }
    function W(e663) {
        return t28.toByteArray(function(e664) {
            if ((e664 = (e664 = e664.split("=")[0]).trim().replace(H, "")).length < 2) return "";
            for(; e664.length % 4 != 0;)e664 += "=";
            return e664;
        }(e663));
    }
    function G(e665, t, r, n) {
        let o;
        for(o = 0; o < n && !(o + r >= t.length || o >= e665.length); ++o)t[o + r] = e665[o];
        return o;
    }
    function q(e666, t) {
        return e666 instanceof t || null != e666 && null != e666.constructor && null != e666.constructor.name && e666.constructor.name === t.name;
    }
    function K(e667) {
        return e667 != e667;
    }
    const Y = function() {
        const e668 = "0123456789abcdef", t = new Array(256);
        for(let r = 0; r < 16; ++r){
            const n = 16 * r;
            for(let o = 0; o < 16; ++o)t[n + o] = e668[r] + e668[o];
        }
        return t;
    }();
    function X(e669) {
        return "undefined" == typeof BigInt ? Z : e669;
    }
    function Z() {
        throw new Error("BigInt not supported");
    }
}(buffer);
const { Buffer: Buffer  } = buffer, symbol = Symbol.for("BufferList");
function BufferList(e670) {
    if (!(this instanceof BufferList)) return new BufferList(e670);
    BufferList._init.call(this, e670);
}
BufferList._init = function(e671) {
    Object.defineProperty(this, symbol, {
        value: !0
    }), this._bufs = [], this.length = 0, e671 && this.append(e671);
}, BufferList.prototype._new = function(e672) {
    return new BufferList(e672);
}, BufferList.prototype._offset = function(e673) {
    if (0 === e673) return [
        0,
        0
    ];
    let t = 0;
    for(let r = 0; r < this._bufs.length; r++){
        const n = t + this._bufs[r].length;
        if (e673 < n || r === this._bufs.length - 1) return [
            r,
            e673 - t
        ];
        t = n;
    }
}, BufferList.prototype._reverseOffset = function(e675) {
    const t = e675[0];
    let r = e675[1];
    for(let e674 = 0; e674 < t; e674++)r += this._bufs[e674].length;
    return r;
}, BufferList.prototype.get = function(e676) {
    if (e676 > this.length || e676 < 0) return;
    const t = this._offset(e676);
    return this._bufs[t[0]][t[1]];
}, BufferList.prototype.slice = function(e677, t) {
    return "number" == typeof e677 && e677 < 0 && (e677 += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e677, t);
}, BufferList.prototype.copy = function(e678, t, r, n) {
    if (("number" != typeof r || r < 0) && (r = 0), ("number" != typeof n || n > this.length) && (n = this.length), r >= this.length) return e678 || Buffer.alloc(0);
    if (n <= 0) return e678 || Buffer.alloc(0);
    const o = !!e678, i90 = this._offset(r), s = n - r;
    let a = s, c = o && t || 0, u = i90[1];
    if (0 === r && n === this.length) {
        if (!o) return 1 === this._bufs.length ? this._bufs[0] : Buffer.concat(this._bufs, this.length);
        for(let t = 0; t < this._bufs.length; t++)this._bufs[t].copy(e678, c), c += this._bufs[t].length;
        return e678;
    }
    if (a <= this._bufs[i90[0]].length - u) return o ? this._bufs[i90[0]].copy(e678, t, u, u + a) : this._bufs[i90[0]].slice(u, u + a);
    o || (e678 = Buffer.allocUnsafe(s));
    for(let t36 = i90[0]; t36 < this._bufs.length; t36++){
        const r = this._bufs[t36].length - u;
        if (!(a > r)) {
            this._bufs[t36].copy(e678, c, u, u + a), c += r;
            break;
        }
        this._bufs[t36].copy(e678, c, u), c += r, a -= r, u && (u = 0);
    }
    return e678.length > c ? e678.slice(0, c) : e678;
}, BufferList.prototype.shallowSlice = function(e679, t) {
    if (e679 = e679 || 0, t = "number" != typeof t ? this.length : t, e679 < 0 && (e679 += this.length), t < 0 && (t += this.length), e679 === t) return this._new();
    const r = this._offset(e679), n = this._offset(t), o = this._bufs.slice(r[0], n[0] + 1);
    return 0 === n[1] ? o.pop() : o[o.length - 1] = o[o.length - 1].slice(0, n[1]), 0 !== r[1] && (o[0] = o[0].slice(r[1])), this._new(o);
}, BufferList.prototype.toString = function(e680, t, r) {
    return this.slice(t, r).toString(e680);
}, BufferList.prototype.consume = function(e681) {
    if (e681 = Math.trunc(e681), Number.isNaN(e681) || e681 <= 0) return this;
    for(; this._bufs.length;){
        if (!(e681 >= this._bufs[0].length)) {
            this._bufs[0] = this._bufs[0].slice(e681), this.length -= e681;
            break;
        }
        e681 -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    }
    return this;
}, BufferList.prototype.duplicate = function() {
    const e682 = this._new();
    for(let t = 0; t < this._bufs.length; t++)e682.append(this._bufs[t]);
    return e682;
}, BufferList.prototype.append = function(e683) {
    if (null == e683) return this;
    if (e683.buffer) this._appendBuffer(Buffer.from(e683.buffer, e683.byteOffset, e683.byteLength));
    else if (Array.isArray(e683)) for(let t = 0; t < e683.length; t++)this.append(e683[t]);
    else if (this._isBufferList(e683)) for(let t37 = 0; t37 < e683._bufs.length; t37++)this.append(e683._bufs[t37]);
    else "number" == typeof e683 && (e683 = e683.toString()), this._appendBuffer(Buffer.from(e683));
    return this;
}, BufferList.prototype._appendBuffer = function(e684) {
    this._bufs.push(e684), this.length += e684.length;
}, BufferList.prototype.indexOf = function(e685, t, r) {
    if (void 0 === r && "string" == typeof t && (r = t, t = void 0), "function" == typeof e685 || Array.isArray(e685)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if ("number" == typeof e685 ? e685 = Buffer.from([
        e685
    ]) : "string" == typeof e685 ? e685 = Buffer.from(e685, r) : this._isBufferList(e685) ? e685 = e685.slice() : Array.isArray(e685.buffer) ? e685 = Buffer.from(e685.buffer, e685.byteOffset, e685.byteLength) : Buffer.isBuffer(e685) || (e685 = Buffer.from(e685)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e685.length) return t > this.length ? this.length : t;
    const n = this._offset(t);
    let o = n[0], i91 = n[1];
    for(; o < this._bufs.length; o++){
        const t = this._bufs[o];
        for(; i91 < t.length;)if (t.length - i91 >= e685.length) {
            const r = t.indexOf(e685, i91);
            if (-1 !== r) return this._reverseOffset([
                o,
                r
            ]);
            i91 = t.length - e685.length + 1;
        } else {
            const t = this._reverseOffset([
                o,
                i91
            ]);
            if (this._match(t, e685)) return t;
            i91++;
        }
        i91 = 0;
    }
    return -1;
}, BufferList.prototype._match = function(e686, t) {
    if (this.length - e686 < t.length) return !1;
    for(let r = 0; r < t.length; r++)if (this.get(e686 + r) !== t[r]) return !1;
    return !0;
}, function() {
    const e687 = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
    };
    for(const t38 in e687)!function(t) {
        BufferList.prototype[t] = null === e687[t] ? function(e688, r) {
            return this.slice(e688, e688 + r)[t](0, r);
        } : function(r = 0) {
            return this.slice(r, r + e687[t])[t](0);
        };
    }(t38);
}(), BufferList.prototype._isBufferList = function(e689) {
    return e689 instanceof BufferList || BufferList.isBufferList(e689);
}, BufferList.isBufferList = function(e690) {
    return null != e690 && e690[symbol];
};
var BufferList_1 = BufferList;
class Rabin$1 {
    constructor(e691, t = 12, r = 8192, n = 32768, o = 64, i92){
        this.bits = t, this.min = r, this.max = n, this.asModule = e691, this.rabin = new e691.Rabin(t, r, n, o, i92), this.polynomial = i92;
    }
    fingerprint(e692) {
        const { __retain: t , __release: r , __allocArray: n , __getInt32Array: o , Int32Array_ID: i93 , Uint8Array_ID: s  } = this.asModule, a = t(n(i93, new Int32Array(Math.ceil(e692.length / this.min)))), c = t(n(s, e692)), u = o(this.rabin.fingerprint(c, a));
        r(c), r(a);
        const f = u.indexOf(0);
        return f >= 0 ? u.subarray(0, f) : u;
    }
}
var rabin$1 = Rabin$1, loader = {};
const ID_OFFSET = -8, SIZE_OFFSET = -4, ARRAYBUFFER_ID = 0, STRING_ID = 1, ARRAYBUFFERVIEW = 1, ARRAY = 2, VAL_ALIGN_OFFSET = 5, VAL_SIGNED = 1024, VAL_FLOAT = 2048, VAL_MANAGED = 8192, ARRAYBUFFERVIEW_BUFFER_OFFSET = 0, ARRAYBUFFERVIEW_DATASTART_OFFSET = 4, ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8, ARRAYBUFFERVIEW_SIZE = 12, ARRAY_LENGTH_OFFSET = 12, ARRAY_SIZE = 16, BIGINT = "undefined" != typeof BigUint64Array, THIS = Symbol(), CHUNKSIZE = 1024;
function getStringImpl(e693, t) {
    const r = new Uint32Array(e693), n = new Uint16Array(e693);
    var o = r[t + SIZE_OFFSET >>> 2] >>> 1, i94 = t >>> 1;
    if (o <= CHUNKSIZE) return String.fromCharCode.apply(String, n.subarray(i94, i94 + o));
    const s = [];
    do {
        const e694 = n[i94 + CHUNKSIZE - 1], t = e694 >= 55296 && e694 < 56320 ? CHUNKSIZE - 1 : CHUNKSIZE;
        s.push(String.fromCharCode.apply(String, n.subarray(i94, i94 += t))), o -= t;
    }while (o > CHUNKSIZE)
    return s.join("") + String.fromCharCode.apply(String, n.subarray(i94, i94 + o));
}
function preInstantiate(e695) {
    const t39 = {};
    function r(e696, t) {
        return e696 ? getStringImpl(e696.buffer, t) : "<yet unknown>";
    }
    const n = e695.env = e695.env || {};
    return n.abort = n.abort || function(e697, o, i95, s) {
        const a = t39.memory || n.memory;
        throw Error("abort: " + r(a, e697) + " at " + r(a, o) + ":" + i95 + ":" + s);
    }, n.trace = n.trace || function(e698, o) {
        const i96 = t39.memory || n.memory;
        console.log("trace: " + r(i96, e698) + (o ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + o).join(", "));
    }, e695.Math = e695.Math || Math, e695.Date = e695.Date || Date, t39;
}
function postInstantiate(e699, t40) {
    const r27 = t40.exports, n14 = r27.memory, o10 = r27.table, i97 = r27.__alloc, s5 = r27.__retain, a3 = r27.__rtti_base || -1;
    function c(e700) {
        const t = new Uint32Array(n14.buffer);
        if ((e700 >>>= 0) >= t[a3 >>> 2]) throw Error("invalid id: " + e700);
        return t[(a3 + 4 >>> 2) + 2 * e700];
    }
    function u4(e701) {
        const t = new Uint32Array(n14.buffer);
        if ((e701 >>>= 0) >= t[a3 >>> 2]) throw Error("invalid id: " + e701);
        return t[(a3 + 4 >>> 2) + 2 * e701 + 1];
    }
    function f(e702) {
        return 31 - Math.clz32(e702 >>> VAL_ALIGN_OFFSET & 31);
    }
    function l(e703, t, r) {
        const o = n14.buffer;
        if (r) switch(e703){
            case 2:
                return new Float32Array(o);
            case 3:
                return new Float64Array(o);
        }
        else switch(e703){
            case 0:
                return new (t ? Int8Array : Uint8Array)(o);
            case 1:
                return new (t ? Int16Array : Uint16Array)(o);
            case 2:
                return new (t ? Int32Array : Uint32Array)(o);
            case 3:
                return new (t ? BigInt64Array : BigUint64Array)(o);
        }
        throw Error("unsupported align: " + e703);
    }
    function h2(e704) {
        const t = new Uint32Array(n14.buffer), r = t[e704 + ID_OFFSET >>> 2], o = c(r);
        if (!(o & ARRAYBUFFERVIEW)) throw Error("not an array: " + r);
        const i98 = f(o);
        var s = t[e704 + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
        const a = o & ARRAY ? t[e704 + ARRAY_LENGTH_OFFSET >>> 2] : t[s + SIZE_OFFSET >>> 2] >>> i98;
        return l(i98, o & VAL_SIGNED, o & VAL_FLOAT).subarray(s >>>= i98, s + a);
    }
    function d1(e705, t, r) {
        return new e705(p1(e705, t, r));
    }
    function p1(e706, t, r) {
        const o = n14.buffer, i99 = new Uint32Array(o), s = i99[r + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
        return new e706(o, s, i99[s + SIZE_OFFSET >>> 2] >>> t);
    }
    return e699.__allocString = function(e707) {
        const t = e707.length, r = i97(t << 1, STRING_ID), o = new Uint16Array(n14.buffer);
        for(var s = 0, a = r >>> 1; s < t; ++s)o[a + s] = e707.charCodeAt(s);
        return r;
    }, e699.__getString = function(e708) {
        const t = n14.buffer;
        if (new Uint32Array(t)[e708 + ID_OFFSET >>> 2] !== STRING_ID) throw Error("not a string: " + e708);
        return getStringImpl(t, e708);
    }, e699.__allocArray = function(e710, t) {
        const r = c(e710);
        if (!(r & (ARRAYBUFFERVIEW | ARRAY))) throw Error("not an array: " + e710 + " @ " + r);
        const o = f(r), a = t.length, u = i97(a << o, ARRAYBUFFER_ID), h = i97(r & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, e710), d = new Uint32Array(n14.buffer);
        d[h + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = s5(u), d[h + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = u, d[h + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = a << o, r & ARRAY && (d[h + ARRAY_LENGTH_OFFSET >>> 2] = a);
        const p = l(o, r & VAL_SIGNED, r & VAL_FLOAT);
        if (r & VAL_MANAGED) for(let e709 = 0; e709 < a; ++e709)p[(u >>> o) + e709] = s5(t[e709]);
        else p.set(t, u >>> o);
        return h;
    }, e699.__getArrayView = h2, e699.__getArray = function(e712) {
        const t = h2(e712), r = t.length, n = new Array(r);
        for(let e711 = 0; e711 < r; e711++)n[e711] = t[e711];
        return n;
    }, e699.__getArrayBuffer = function(e713) {
        const t = n14.buffer, r = new Uint32Array(t)[e713 + SIZE_OFFSET >>> 2];
        return t.slice(e713, e713 + r);
    }, e699.__getInt8Array = d1.bind(null, Int8Array, 0), e699.__getInt8ArrayView = p1.bind(null, Int8Array, 0), e699.__getUint8Array = d1.bind(null, Uint8Array, 0), e699.__getUint8ArrayView = p1.bind(null, Uint8Array, 0), e699.__getUint8ClampedArray = d1.bind(null, Uint8ClampedArray, 0), e699.__getUint8ClampedArrayView = p1.bind(null, Uint8ClampedArray, 0), e699.__getInt16Array = d1.bind(null, Int16Array, 1), e699.__getInt16ArrayView = p1.bind(null, Int16Array, 1), e699.__getUint16Array = d1.bind(null, Uint16Array, 1), e699.__getUint16ArrayView = p1.bind(null, Uint16Array, 1), e699.__getInt32Array = d1.bind(null, Int32Array, 2), e699.__getInt32ArrayView = p1.bind(null, Int32Array, 2), e699.__getUint32Array = d1.bind(null, Uint32Array, 2), e699.__getUint32ArrayView = p1.bind(null, Uint32Array, 2), BIGINT && (e699.__getInt64Array = d1.bind(null, BigInt64Array, 3), e699.__getInt64ArrayView = p1.bind(null, BigInt64Array, 3), e699.__getUint64Array = d1.bind(null, BigUint64Array, 3), e699.__getUint64ArrayView = p1.bind(null, BigUint64Array, 3)), e699.__getFloat32Array = d1.bind(null, Float32Array, 2), e699.__getFloat32ArrayView = p1.bind(null, Float32Array, 2), e699.__getFloat64Array = d1.bind(null, Float64Array, 3), e699.__getFloat64ArrayView = p1.bind(null, Float64Array, 3), e699.__instanceof = function(e714, t) {
        const r = new Uint32Array(n14.buffer);
        var o = r[e714 + ID_OFFSET >>> 2];
        if (o <= r[a3 >>> 2]) do {
            if (o == t) return !0;
        }while (o = u4(o))
        return !1;
    }, e699.memory = e699.memory || n14, e699.table = e699.table || o10, demangle(r27, e699);
}
function isResponse(e715) {
    return "undefined" != typeof Response && e715 instanceof Response;
}
async function instantiate$1(e716, t) {
    return isResponse(e716 = await e716) ? instantiateStreaming(e716, t) : postInstantiate(preInstantiate(t || (t = {})), await WebAssembly.instantiate(e716 instanceof WebAssembly.Module ? e716 : await WebAssembly.compile(e716), t));
}
function instantiateSync(e717, t) {
    return postInstantiate(preInstantiate(t || (t = {})), new WebAssembly.Instance(e717 instanceof WebAssembly.Module ? e717 : new WebAssembly.Module(e717), t));
}
async function instantiateStreaming(e718, t) {
    return WebAssembly.instantiateStreaming ? postInstantiate(preInstantiate(t || (t = {})), (await WebAssembly.instantiateStreaming(e718, t)).instance) : instantiate$1(isResponse(e718 = await e718) ? e718.arrayBuffer() : e718, t);
}
function demangle(e719, t42) {
    var r = t42 ? Object.create(t42) : {}, n = e719.__argumentsLength ? function(t) {
        e719.__argumentsLength.value = t;
    } : e719.__setArgumentsLength || e719.__setargc || function() {};
    for(let t41 in e719){
        if (!Object.prototype.hasOwnProperty.call(e719, t41)) continue;
        const o = e719[t41];
        let i100 = t41.split("."), s = r;
        for(; i100.length > 1;){
            let e720 = i100.shift();
            Object.prototype.hasOwnProperty.call(s, e720) || (s[e720] = {}), s = s[e720];
        }
        let a = i100[0], c = a.indexOf("#");
        if (c >= 0) {
            let r = a.substring(0, c), i101 = s[r];
            if (void 0 === i101 || !i101.prototype) {
                let e721 = function(...t) {
                    return e721.wrap(e721.prototype.constructor(0, ...t));
                };
                e721.prototype = {
                    valueOf: function() {
                        return this[THIS];
                    }
                }, e721.wrap = function(t) {
                    return Object.create(e721.prototype, {
                        [THIS]: {
                            value: t,
                            writable: !1
                        }
                    });
                }, i101 && Object.getOwnPropertyNames(i101).forEach((t)=>Object.defineProperty(e721, t, Object.getOwnPropertyDescriptor(i101, t))
                ), s[r] = e721;
            }
            if (a = a.substring(c + 1), s = s[r].prototype, /^(get|set):/.test(a)) {
                if (!Object.prototype.hasOwnProperty.call(s, a = a.substring(4))) {
                    let r = e719[t41.replace("set:", "get:")], n = e719[t41.replace("get:", "set:")];
                    Object.defineProperty(s, a, {
                        get: function() {
                            return r(this[THIS]);
                        },
                        set: function(e722) {
                            n(this[THIS], e722);
                        },
                        enumerable: !0
                    });
                }
            } else "constructor" === a ? (s[a] = (...e723)=>(n(e723.length), o(...e723))
            ).original = o : (s[a] = function(...e724) {
                return n(e724.length), o(this[THIS], ...e724);
            }).original = o;
        } else /^(get|set):/.test(a) ? Object.prototype.hasOwnProperty.call(s, a = a.substring(4)) || Object.defineProperty(s, a, {
            get: e719[t41.replace("set:", "get:")],
            set: e719[t41.replace("get:", "set:")],
            enumerable: !0
        }) : "function" == typeof o && o !== n ? (s[a] = (...e725)=>(n(e725.length), o(...e725))
        ).original = o : s[a] = o;
    }
    return r;
}
loader.instantiate = instantiate$1, loader.instantiateSync = instantiateSync, loader.instantiateStreaming = instantiateStreaming, loader.demangle = demangle;
const { instantiate: instantiate  } = loader;
function loadWebAssembly(e726 = {}) {
    if (!loadWebAssembly.supported) return null;
    var t = new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        78,
        14,
        96,
        2,
        127,
        126,
        0,
        96,
        1,
        127,
        1,
        126,
        96,
        2,
        127,
        127,
        0,
        96,
        1,
        127,
        1,
        127,
        96,
        1,
        127,
        0,
        96,
        2,
        127,
        127,
        1,
        127,
        96,
        3,
        127,
        127,
        127,
        1,
        127,
        96,
        0,
        0,
        96,
        3,
        127,
        127,
        127,
        0,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        0,
        96,
        5,
        127,
        127,
        127,
        127,
        127,
        1,
        127,
        96,
        1,
        126,
        1,
        127,
        96,
        2,
        126,
        126,
        1,
        126,
        2,
        13,
        1,
        3,
        101,
        110,
        118,
        5,
        97,
        98,
        111,
        114,
        116,
        0,
        10,
        3,
        54,
        53,
        2,
        2,
        8,
        9,
        3,
        5,
        2,
        8,
        6,
        5,
        3,
        4,
        2,
        6,
        9,
        12,
        13,
        2,
        5,
        11,
        3,
        2,
        3,
        2,
        3,
        2,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        6,
        7,
        7,
        4,
        4,
        5,
        3,
        1,
        0,
        1,
        6,
        47,
        9,
        127,
        1,
        65,
        0,
        11,
        127,
        1,
        65,
        0,
        11,
        127,
        0,
        65,
        3,
        11,
        127,
        0,
        65,
        4,
        11,
        127,
        1,
        65,
        0,
        11,
        127,
        1,
        65,
        0,
        11,
        127,
        1,
        65,
        0,
        11,
        127,
        0,
        65,
        240,
        2,
        11,
        127,
        0,
        65,
        6,
        11,
        7,
        240,
        5,
        41,
        6,
        109,
        101,
        109,
        111,
        114,
        121,
        2,
        0,
        7,
        95,
        95,
        97,
        108,
        108,
        111,
        99,
        0,
        10,
        8,
        95,
        95,
        114,
        101,
        116,
        97,
        105,
        110,
        0,
        11,
        9,
        95,
        95,
        114,
        101,
        108,
        101,
        97,
        115,
        101,
        0,
        12,
        9,
        95,
        95,
        99,
        111,
        108,
        108,
        101,
        99,
        116,
        0,
        51,
        11,
        95,
        95,
        114,
        116,
        116,
        105,
        95,
        98,
        97,
        115,
        101,
        3,
        7,
        13,
        73,
        110,
        116,
        51,
        50,
        65,
        114,
        114,
        97,
        121,
        95,
        73,
        68,
        3,
        2,
        13,
        85,
        105,
        110,
        116,
        56,
        65,
        114,
        114,
        97,
        121,
        95,
        73,
        68,
        3,
        3,
        6,
        100,
        101,
        103,
        114,
        101,
        101,
        0,
        16,
        3,
        109,
        111,
        100,
        0,
        17,
        5,
        82,
        97,
        98,
        105,
        110,
        3,
        8,
        16,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        119,
        105,
        110,
        100,
        111,
        119,
        0,
        21,
        16,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        119,
        105,
        110,
        100,
        111,
        119,
        0,
        22,
        21,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        119,
        105,
        110,
        100,
        111,
        119,
        95,
        115,
        105,
        122,
        101,
        0,
        23,
        21,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        119,
        105,
        110,
        100,
        111,
        119,
        95,
        115,
        105,
        122,
        101,
        0,
        24,
        14,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        119,
        112,
        111,
        115,
        0,
        25,
        14,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        119,
        112,
        111,
        115,
        0,
        26,
        15,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        99,
        111,
        117,
        110,
        116,
        0,
        27,
        15,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        99,
        111,
        117,
        110,
        116,
        0,
        28,
        13,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        112,
        111,
        115,
        0,
        29,
        13,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        112,
        111,
        115,
        0,
        30,
        15,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        115,
        116,
        97,
        114,
        116,
        0,
        31,
        15,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        115,
        116,
        97,
        114,
        116,
        0,
        32,
        16,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        100,
        105,
        103,
        101,
        115,
        116,
        0,
        33,
        16,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        100,
        105,
        103,
        101,
        115,
        116,
        0,
        34,
        21,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        115,
        116,
        97,
        114,
        116,
        0,
        35,
        21,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        115,
        116,
        97,
        114,
        116,
        0,
        36,
        22,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        108,
        101,
        110,
        103,
        116,
        104,
        0,
        37,
        22,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        108,
        101,
        110,
        103,
        116,
        104,
        0,
        38,
        31,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        99,
        117,
        116,
        95,
        102,
        105,
        110,
        103,
        101,
        114,
        112,
        114,
        105,
        110,
        116,
        0,
        39,
        31,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        99,
        104,
        117,
        110,
        107,
        95,
        99,
        117,
        116,
        95,
        102,
        105,
        110,
        103,
        101,
        114,
        112,
        114,
        105,
        110,
        116,
        0,
        40,
        20,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        112,
        111,
        108,
        121,
        110,
        111,
        109,
        105,
        97,
        108,
        0,
        41,
        20,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        112,
        111,
        108,
        121,
        110,
        111,
        109,
        105,
        97,
        108,
        0,
        42,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        109,
        105,
        110,
        115,
        105,
        122,
        101,
        0,
        43,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        109,
        105,
        110,
        115,
        105,
        122,
        101,
        0,
        44,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        109,
        97,
        120,
        115,
        105,
        122,
        101,
        0,
        45,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        109,
        97,
        120,
        115,
        105,
        122,
        101,
        0,
        46,
        14,
        82,
        97,
        98,
        105,
        110,
        35,
        103,
        101,
        116,
        58,
        109,
        97,
        115,
        107,
        0,
        47,
        14,
        82,
        97,
        98,
        105,
        110,
        35,
        115,
        101,
        116,
        58,
        109,
        97,
        115,
        107,
        0,
        48,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        99,
        111,
        110,
        115,
        116,
        114,
        117,
        99,
        116,
        111,
        114,
        0,
        20,
        17,
        82,
        97,
        98,
        105,
        110,
        35,
        102,
        105,
        110,
        103,
        101,
        114,
        112,
        114,
        105,
        110,
        116,
        0,
        49,
        8,
        1,
        50,
        10,
        165,
        31,
        53,
        199,
        1,
        1,
        4,
        127,
        32,
        1,
        40,
        2,
        0,
        65,
        124,
        113,
        34,
        2,
        65,
        128,
        2,
        73,
        4,
        127,
        32,
        2,
        65,
        4,
        118,
        33,
        4,
        65,
        0,
        5,
        32,
        2,
        65,
        31,
        32,
        2,
        103,
        107,
        34,
        3,
        65,
        4,
        107,
        118,
        65,
        16,
        115,
        33,
        4,
        32,
        3,
        65,
        7,
        107,
        11,
        33,
        3,
        32,
        1,
        40,
        2,
        20,
        33,
        2,
        32,
        1,
        40,
        2,
        16,
        34,
        5,
        4,
        64,
        32,
        5,
        32,
        2,
        54,
        2,
        20,
        11,
        32,
        2,
        4,
        64,
        32,
        2,
        32,
        5,
        54,
        2,
        16,
        11,
        32,
        1,
        32,
        0,
        32,
        4,
        32,
        3,
        65,
        4,
        116,
        106,
        65,
        2,
        116,
        106,
        40,
        2,
        96,
        70,
        4,
        64,
        32,
        0,
        32,
        4,
        32,
        3,
        65,
        4,
        116,
        106,
        65,
        2,
        116,
        106,
        32,
        2,
        54,
        2,
        96,
        32,
        2,
        69,
        4,
        64,
        32,
        0,
        32,
        3,
        65,
        2,
        116,
        106,
        32,
        0,
        32,
        3,
        65,
        2,
        116,
        106,
        40,
        2,
        4,
        65,
        1,
        32,
        4,
        116,
        65,
        127,
        115,
        113,
        34,
        1,
        54,
        2,
        4,
        32,
        1,
        69,
        4,
        64,
        32,
        0,
        32,
        0,
        40,
        2,
        0,
        65,
        1,
        32,
        3,
        116,
        65,
        127,
        115,
        113,
        54,
        2,
        0,
        11,
        11,
        11,
        11,
        226,
        2,
        1,
        6,
        127,
        32,
        1,
        40,
        2,
        0,
        33,
        3,
        32,
        1,
        65,
        16,
        106,
        32,
        1,
        40,
        2,
        0,
        65,
        124,
        113,
        106,
        34,
        4,
        40,
        2,
        0,
        34,
        5,
        65,
        1,
        113,
        4,
        64,
        32,
        3,
        65,
        124,
        113,
        65,
        16,
        106,
        32,
        5,
        65,
        124,
        113,
        106,
        34,
        2,
        65,
        240,
        255,
        255,
        255,
        3,
        73,
        4,
        64,
        32,
        0,
        32,
        4,
        16,
        1,
        32,
        1,
        32,
        2,
        32,
        3,
        65,
        3,
        113,
        114,
        34,
        3,
        54,
        2,
        0,
        32,
        1,
        65,
        16,
        106,
        32,
        1,
        40,
        2,
        0,
        65,
        124,
        113,
        106,
        34,
        4,
        40,
        2,
        0,
        33,
        5,
        11,
        11,
        32,
        3,
        65,
        2,
        113,
        4,
        64,
        32,
        1,
        65,
        4,
        107,
        40,
        2,
        0,
        34,
        2,
        40,
        2,
        0,
        34,
        6,
        65,
        124,
        113,
        65,
        16,
        106,
        32,
        3,
        65,
        124,
        113,
        106,
        34,
        7,
        65,
        240,
        255,
        255,
        255,
        3,
        73,
        4,
        64,
        32,
        0,
        32,
        2,
        16,
        1,
        32,
        2,
        32,
        7,
        32,
        6,
        65,
        3,
        113,
        114,
        34,
        3,
        54,
        2,
        0,
        32,
        2,
        33,
        1,
        11,
        11,
        32,
        4,
        32,
        5,
        65,
        2,
        114,
        54,
        2,
        0,
        32,
        4,
        65,
        4,
        107,
        32,
        1,
        54,
        2,
        0,
        32,
        0,
        32,
        3,
        65,
        124,
        113,
        34,
        2,
        65,
        128,
        2,
        73,
        4,
        127,
        32,
        2,
        65,
        4,
        118,
        33,
        4,
        65,
        0,
        5,
        32,
        2,
        65,
        31,
        32,
        2,
        103,
        107,
        34,
        2,
        65,
        4,
        107,
        118,
        65,
        16,
        115,
        33,
        4,
        32,
        2,
        65,
        7,
        107,
        11,
        34,
        3,
        65,
        4,
        116,
        32,
        4,
        106,
        65,
        2,
        116,
        106,
        40,
        2,
        96,
        33,
        2,
        32,
        1,
        65,
        0,
        54,
        2,
        16,
        32,
        1,
        32,
        2,
        54,
        2,
        20,
        32,
        2,
        4,
        64,
        32,
        2,
        32,
        1,
        54,
        2,
        16,
        11,
        32,
        0,
        32,
        4,
        32,
        3,
        65,
        4,
        116,
        106,
        65,
        2,
        116,
        106,
        32,
        1,
        54,
        2,
        96,
        32,
        0,
        32,
        0,
        40,
        2,
        0,
        65,
        1,
        32,
        3,
        116,
        114,
        54,
        2,
        0,
        32,
        0,
        32,
        3,
        65,
        2,
        116,
        106,
        32,
        0,
        32,
        3,
        65,
        2,
        116,
        106,
        40,
        2,
        4,
        65,
        1,
        32,
        4,
        116,
        114,
        54,
        2,
        4,
        11,
        119,
        1,
        1,
        127,
        32,
        2,
        2,
        127,
        32,
        0,
        40,
        2,
        160,
        12,
        34,
        2,
        4,
        64,
        32,
        2,
        32,
        1,
        65,
        16,
        107,
        70,
        4,
        64,
        32,
        2,
        40,
        2,
        0,
        33,
        3,
        32,
        1,
        65,
        16,
        107,
        33,
        1,
        11,
        11,
        32,
        1,
        11,
        107,
        34,
        2,
        65,
        48,
        73,
        4,
        64,
        15,
        11,
        32,
        1,
        32,
        3,
        65,
        2,
        113,
        32,
        2,
        65,
        32,
        107,
        65,
        1,
        114,
        114,
        54,
        2,
        0,
        32,
        1,
        65,
        0,
        54,
        2,
        16,
        32,
        1,
        65,
        0,
        54,
        2,
        20,
        32,
        1,
        32,
        2,
        106,
        65,
        16,
        107,
        34,
        2,
        65,
        2,
        54,
        2,
        0,
        32,
        0,
        32,
        2,
        54,
        2,
        160,
        12,
        32,
        0,
        32,
        1,
        16,
        2,
        11,
        155,
        1,
        1,
        3,
        127,
        35,
        0,
        34,
        0,
        69,
        4,
        64,
        65,
        1,
        63,
        0,
        34,
        0,
        74,
        4,
        127,
        65,
        1,
        32,
        0,
        107,
        64,
        0,
        65,
        0,
        72,
        5,
        65,
        0,
        11,
        4,
        64,
        0,
        11,
        65,
        176,
        3,
        34,
        0,
        65,
        0,
        54,
        2,
        0,
        65,
        208,
        15,
        65,
        0,
        54,
        2,
        0,
        3,
        64,
        32,
        1,
        65,
        23,
        73,
        4,
        64,
        32,
        1,
        65,
        2,
        116,
        65,
        176,
        3,
        106,
        65,
        0,
        54,
        2,
        4,
        65,
        0,
        33,
        2,
        3,
        64,
        32,
        2,
        65,
        16,
        73,
        4,
        64,
        32,
        1,
        65,
        4,
        116,
        32,
        2,
        106,
        65,
        2,
        116,
        65,
        176,
        3,
        106,
        65,
        0,
        54,
        2,
        96,
        32,
        2,
        65,
        1,
        106,
        33,
        2,
        12,
        1,
        11,
        11,
        32,
        1,
        65,
        1,
        106,
        33,
        1,
        12,
        1,
        11,
        11,
        65,
        176,
        3,
        65,
        224,
        15,
        63,
        0,
        65,
        16,
        116,
        16,
        3,
        65,
        176,
        3,
        36,
        0,
        11,
        32,
        0,
        11,
        45,
        0,
        32,
        0,
        65,
        240,
        255,
        255,
        255,
        3,
        79,
        4,
        64,
        65,
        32,
        65,
        224,
        0,
        65,
        201,
        3,
        65,
        29,
        16,
        0,
        0,
        11,
        32,
        0,
        65,
        15,
        106,
        65,
        112,
        113,
        34,
        0,
        65,
        16,
        32,
        0,
        65,
        16,
        75,
        27,
        11,
        169,
        1,
        1,
        1,
        127,
        32,
        0,
        32,
        1,
        65,
        128,
        2,
        73,
        4,
        127,
        32,
        1,
        65,
        4,
        118,
        33,
        1,
        65,
        0,
        5,
        32,
        1,
        65,
        248,
        255,
        255,
        255,
        1,
        73,
        4,
        64,
        32,
        1,
        65,
        1,
        65,
        27,
        32,
        1,
        103,
        107,
        116,
        106,
        65,
        1,
        107,
        33,
        1,
        11,
        32,
        1,
        65,
        31,
        32,
        1,
        103,
        107,
        34,
        2,
        65,
        4,
        107,
        118,
        65,
        16,
        115,
        33,
        1,
        32,
        2,
        65,
        7,
        107,
        11,
        34,
        2,
        65,
        2,
        116,
        106,
        40,
        2,
        4,
        65,
        127,
        32,
        1,
        116,
        113,
        34,
        1,
        4,
        127,
        32,
        0,
        32,
        1,
        104,
        32,
        2,
        65,
        4,
        116,
        106,
        65,
        2,
        116,
        106,
        40,
        2,
        96,
        5,
        32,
        0,
        40,
        2,
        0,
        65,
        127,
        32,
        2,
        65,
        1,
        106,
        116,
        113,
        34,
        1,
        4,
        127,
        32,
        0,
        32,
        0,
        32,
        1,
        104,
        34,
        0,
        65,
        2,
        116,
        106,
        40,
        2,
        4,
        104,
        32,
        0,
        65,
        4,
        116,
        106,
        65,
        2,
        116,
        106,
        40,
        2,
        96,
        5,
        65,
        0,
        11,
        11,
        11,
        111,
        1,
        1,
        127,
        63,
        0,
        34,
        2,
        32,
        1,
        65,
        248,
        255,
        255,
        255,
        1,
        73,
        4,
        127,
        32,
        1,
        65,
        1,
        65,
        27,
        32,
        1,
        103,
        107,
        116,
        65,
        1,
        107,
        106,
        5,
        32,
        1,
        11,
        65,
        16,
        32,
        0,
        40,
        2,
        160,
        12,
        32,
        2,
        65,
        16,
        116,
        65,
        16,
        107,
        71,
        116,
        106,
        65,
        255,
        255,
        3,
        106,
        65,
        128,
        128,
        124,
        113,
        65,
        16,
        118,
        34,
        1,
        32,
        2,
        32,
        1,
        74,
        27,
        64,
        0,
        65,
        0,
        72,
        4,
        64,
        32,
        1,
        64,
        0,
        65,
        0,
        72,
        4,
        64,
        0,
        11,
        11,
        32,
        0,
        32,
        2,
        65,
        16,
        116,
        63,
        0,
        65,
        16,
        116,
        16,
        3,
        11,
        113,
        1,
        2,
        127,
        32,
        1,
        40,
        2,
        0,
        34,
        3,
        65,
        124,
        113,
        32,
        2,
        107,
        34,
        4,
        65,
        32,
        79,
        4,
        64,
        32,
        1,
        32,
        2,
        32,
        3,
        65,
        2,
        113,
        114,
        54,
        2,
        0,
        32,
        2,
        32,
        1,
        65,
        16,
        106,
        106,
        34,
        1,
        32,
        4,
        65,
        16,
        107,
        65,
        1,
        114,
        54,
        2,
        0,
        32,
        0,
        32,
        1,
        16,
        2,
        5,
        32,
        1,
        32,
        3,
        65,
        126,
        113,
        54,
        2,
        0,
        32,
        1,
        65,
        16,
        106,
        32,
        1,
        40,
        2,
        0,
        65,
        124,
        113,
        106,
        32,
        1,
        65,
        16,
        106,
        32,
        1,
        40,
        2,
        0,
        65,
        124,
        113,
        106,
        40,
        2,
        0,
        65,
        125,
        113,
        54,
        2,
        0,
        11,
        11,
        91,
        1,
        2,
        127,
        32,
        0,
        32,
        1,
        16,
        5,
        34,
        4,
        16,
        6,
        34,
        3,
        69,
        4,
        64,
        65,
        1,
        36,
        1,
        65,
        0,
        36,
        1,
        32,
        0,
        32,
        4,
        16,
        6,
        34,
        3,
        69,
        4,
        64,
        32,
        0,
        32,
        4,
        16,
        7,
        32,
        0,
        32,
        4,
        16,
        6,
        33,
        3,
        11,
        11,
        32,
        3,
        65,
        0,
        54,
        2,
        4,
        32,
        3,
        32,
        2,
        54,
        2,
        8,
        32,
        3,
        32,
        1,
        54,
        2,
        12,
        32,
        0,
        32,
        3,
        16,
        1,
        32,
        0,
        32,
        3,
        32,
        4,
        16,
        8,
        32,
        3,
        11,
        13,
        0,
        16,
        4,
        32,
        0,
        32,
        1,
        16,
        9,
        65,
        16,
        106,
        11,
        33,
        1,
        1,
        127,
        32,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        34,
        1,
        32,
        1,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        0,
        11,
        18,
        0,
        32,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        16,
        52,
        11,
        11,
        140,
        3,
        1,
        1,
        127,
        2,
        64,
        32,
        1,
        69,
        13,
        0,
        32,
        0,
        65,
        0,
        58,
        0,
        0,
        32,
        0,
        32,
        1,
        106,
        65,
        1,
        107,
        65,
        0,
        58,
        0,
        0,
        32,
        1,
        65,
        2,
        77,
        13,
        0,
        32,
        0,
        65,
        1,
        106,
        65,
        0,
        58,
        0,
        0,
        32,
        0,
        65,
        2,
        106,
        65,
        0,
        58,
        0,
        0,
        32,
        0,
        32,
        1,
        106,
        34,
        2,
        65,
        2,
        107,
        65,
        0,
        58,
        0,
        0,
        32,
        2,
        65,
        3,
        107,
        65,
        0,
        58,
        0,
        0,
        32,
        1,
        65,
        6,
        77,
        13,
        0,
        32,
        0,
        65,
        3,
        106,
        65,
        0,
        58,
        0,
        0,
        32,
        0,
        32,
        1,
        106,
        65,
        4,
        107,
        65,
        0,
        58,
        0,
        0,
        32,
        1,
        65,
        8,
        77,
        13,
        0,
        32,
        1,
        65,
        0,
        32,
        0,
        107,
        65,
        3,
        113,
        34,
        1,
        107,
        33,
        2,
        32,
        0,
        32,
        1,
        106,
        34,
        0,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        32,
        2,
        65,
        124,
        113,
        34,
        1,
        106,
        65,
        4,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        1,
        65,
        8,
        77,
        13,
        0,
        32,
        0,
        65,
        4,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        8,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        32,
        1,
        106,
        34,
        2,
        65,
        12,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        2,
        65,
        8,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        1,
        65,
        24,
        77,
        13,
        0,
        32,
        0,
        65,
        12,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        16,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        20,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        24,
        106,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        32,
        1,
        106,
        34,
        2,
        65,
        28,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        2,
        65,
        24,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        2,
        65,
        20,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        2,
        65,
        16,
        107,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        32,
        0,
        65,
        4,
        113,
        65,
        24,
        106,
        34,
        2,
        106,
        33,
        0,
        32,
        1,
        32,
        2,
        107,
        33,
        1,
        3,
        64,
        32,
        1,
        65,
        32,
        79,
        4,
        64,
        32,
        0,
        66,
        0,
        55,
        3,
        0,
        32,
        0,
        65,
        8,
        106,
        66,
        0,
        55,
        3,
        0,
        32,
        0,
        65,
        16,
        106,
        66,
        0,
        55,
        3,
        0,
        32,
        0,
        65,
        24,
        106,
        66,
        0,
        55,
        3,
        0,
        32,
        1,
        65,
        32,
        107,
        33,
        1,
        32,
        0,
        65,
        32,
        106,
        33,
        0,
        12,
        1,
        11,
        11,
        11,
        11,
        178,
        1,
        1,
        3,
        127,
        32,
        1,
        65,
        240,
        255,
        255,
        255,
        3,
        32,
        2,
        118,
        75,
        4,
        64,
        65,
        144,
        1,
        65,
        192,
        1,
        65,
        23,
        65,
        56,
        16,
        0,
        0,
        11,
        32,
        1,
        32,
        2,
        116,
        34,
        3,
        65,
        0,
        16,
        10,
        34,
        2,
        32,
        3,
        16,
        13,
        32,
        0,
        69,
        4,
        64,
        65,
        12,
        65,
        2,
        16,
        10,
        34,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        34,
        1,
        32,
        1,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        11,
        32,
        0,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        0,
        54,
        2,
        4,
        32,
        0,
        65,
        0,
        54,
        2,
        8,
        32,
        2,
        34,
        1,
        32,
        0,
        40,
        2,
        0,
        34,
        4,
        71,
        4,
        64,
        32,
        1,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        1,
        65,
        16,
        107,
        34,
        5,
        32,
        5,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        4,
        16,
        12,
        11,
        32,
        0,
        32,
        1,
        54,
        2,
        0,
        32,
        0,
        32,
        2,
        54,
        2,
        4,
        32,
        0,
        32,
        3,
        54,
        2,
        8,
        32,
        0,
        11,
        46,
        1,
        2,
        127,
        65,
        12,
        65,
        5,
        16,
        10,
        34,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        34,
        1,
        32,
        1,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        0,
        65,
        128,
        2,
        65,
        3,
        16,
        14,
        11,
        9,
        0,
        65,
        63,
        32,
        0,
        121,
        167,
        107,
        11,
        49,
        1,
        2,
        127,
        65,
        63,
        32,
        1,
        121,
        167,
        107,
        33,
        2,
        3,
        64,
        65,
        63,
        32,
        0,
        121,
        167,
        107,
        32,
        2,
        107,
        34,
        3,
        65,
        0,
        78,
        4,
        64,
        32,
        0,
        32,
        1,
        32,
        3,
        172,
        134,
        133,
        33,
        0,
        12,
        1,
        11,
        11,
        32,
        0,
        11,
        40,
        0,
        32,
        1,
        32,
        0,
        40,
        2,
        8,
        79,
        4,
        64,
        65,
        128,
        2,
        65,
        192,
        2,
        65,
        163,
        1,
        65,
        44,
        16,
        0,
        0,
        11,
        32,
        1,
        32,
        0,
        40,
        2,
        4,
        106,
        65,
        0,
        58,
        0,
        0,
        11,
        38,
        0,
        32,
        1,
        32,
        0,
        40,
        2,
        8,
        79,
        4,
        64,
        65,
        128,
        2,
        65,
        192,
        2,
        65,
        152,
        1,
        65,
        44,
        16,
        0,
        0,
        11,
        32,
        1,
        32,
        0,
        40,
        2,
        4,
        106,
        45,
        0,
        0,
        11,
        254,
        5,
        2,
        1,
        127,
        4,
        126,
        32,
        0,
        69,
        4,
        64,
        65,
        232,
        0,
        65,
        6,
        16,
        10,
        34,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        34,
        5,
        32,
        5,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        11,
        32,
        0,
        65,
        0,
        54,
        2,
        0,
        32,
        0,
        65,
        0,
        54,
        2,
        4,
        32,
        0,
        65,
        0,
        54,
        2,
        8,
        32,
        0,
        66,
        0,
        55,
        3,
        16,
        32,
        0,
        66,
        0,
        55,
        3,
        24,
        32,
        0,
        66,
        0,
        55,
        3,
        32,
        32,
        0,
        66,
        0,
        55,
        3,
        40,
        32,
        0,
        66,
        0,
        55,
        3,
        48,
        32,
        0,
        66,
        0,
        55,
        3,
        56,
        32,
        0,
        66,
        0,
        55,
        3,
        64,
        32,
        0,
        66,
        0,
        55,
        3,
        72,
        32,
        0,
        66,
        0,
        55,
        3,
        80,
        32,
        0,
        66,
        0,
        55,
        3,
        88,
        32,
        0,
        66,
        0,
        55,
        3,
        96,
        32,
        0,
        32,
        2,
        173,
        55,
        3,
        80,
        32,
        0,
        32,
        3,
        173,
        55,
        3,
        88,
        65,
        12,
        65,
        4,
        16,
        10,
        34,
        2,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        2,
        65,
        16,
        107,
        34,
        3,
        32,
        3,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        2,
        32,
        4,
        65,
        0,
        16,
        14,
        33,
        2,
        32,
        0,
        40,
        2,
        0,
        16,
        12,
        32,
        0,
        32,
        2,
        54,
        2,
        0,
        32,
        0,
        32,
        4,
        54,
        2,
        4,
        32,
        0,
        66,
        1,
        32,
        1,
        173,
        134,
        66,
        1,
        125,
        55,
        3,
        96,
        32,
        0,
        66,
        243,
        130,
        183,
        218,
        216,
        230,
        232,
        30,
        55,
        3,
        72,
        35,
        4,
        69,
        4,
        64,
        65,
        0,
        33,
        2,
        3,
        64,
        32,
        2,
        65,
        128,
        2,
        72,
        4,
        64,
        32,
        2,
        65,
        255,
        1,
        113,
        173,
        33,
        6,
        32,
        0,
        41,
        3,
        72,
        34,
        7,
        33,
        8,
        65,
        63,
        32,
        7,
        121,
        167,
        107,
        33,
        1,
        3,
        64,
        65,
        63,
        32,
        6,
        121,
        167,
        107,
        32,
        1,
        107,
        34,
        3,
        65,
        0,
        78,
        4,
        64,
        32,
        6,
        32,
        8,
        32,
        3,
        172,
        134,
        133,
        33,
        6,
        12,
        1,
        11,
        11,
        65,
        0,
        33,
        4,
        3,
        64,
        32,
        4,
        32,
        0,
        40,
        2,
        4,
        65,
        1,
        107,
        72,
        4,
        64,
        32,
        6,
        66,
        8,
        134,
        33,
        6,
        32,
        0,
        41,
        3,
        72,
        34,
        7,
        33,
        8,
        65,
        63,
        32,
        7,
        121,
        167,
        107,
        33,
        1,
        3,
        64,
        65,
        63,
        32,
        6,
        121,
        167,
        107,
        32,
        1,
        107,
        34,
        3,
        65,
        0,
        78,
        4,
        64,
        32,
        6,
        32,
        8,
        32,
        3,
        172,
        134,
        133,
        33,
        6,
        12,
        1,
        11,
        11,
        32,
        4,
        65,
        1,
        106,
        33,
        4,
        12,
        1,
        11,
        11,
        35,
        6,
        40,
        2,
        4,
        32,
        2,
        65,
        3,
        116,
        106,
        32,
        6,
        55,
        3,
        0,
        32,
        2,
        65,
        1,
        106,
        33,
        2,
        12,
        1,
        11,
        11,
        65,
        63,
        32,
        0,
        41,
        3,
        72,
        121,
        167,
        107,
        172,
        33,
        7,
        65,
        0,
        33,
        2,
        3,
        64,
        32,
        2,
        65,
        128,
        2,
        72,
        4,
        64,
        35,
        5,
        33,
        1,
        32,
        2,
        172,
        32,
        7,
        134,
        34,
        8,
        33,
        6,
        65,
        63,
        32,
        0,
        41,
        3,
        72,
        34,
        9,
        121,
        167,
        107,
        33,
        3,
        3,
        64,
        65,
        63,
        32,
        6,
        121,
        167,
        107,
        32,
        3,
        107,
        34,
        4,
        65,
        0,
        78,
        4,
        64,
        32,
        6,
        32,
        9,
        32,
        4,
        172,
        134,
        133,
        33,
        6,
        12,
        1,
        11,
        11,
        32,
        1,
        40,
        2,
        4,
        32,
        2,
        65,
        3,
        116,
        106,
        32,
        6,
        32,
        8,
        132,
        55,
        3,
        0,
        32,
        2,
        65,
        1,
        106,
        33,
        2,
        12,
        1,
        11,
        11,
        65,
        1,
        36,
        4,
        11,
        32,
        0,
        66,
        0,
        55,
        3,
        24,
        32,
        0,
        66,
        0,
        55,
        3,
        32,
        65,
        0,
        33,
        2,
        3,
        64,
        32,
        2,
        32,
        0,
        40,
        2,
        4,
        72,
        4,
        64,
        32,
        0,
        40,
        2,
        0,
        32,
        2,
        16,
        18,
        32,
        2,
        65,
        1,
        106,
        33,
        2,
        12,
        1,
        11,
        11,
        32,
        0,
        66,
        0,
        55,
        3,
        40,
        32,
        0,
        65,
        0,
        54,
        2,
        8,
        32,
        0,
        66,
        0,
        55,
        3,
        16,
        32,
        0,
        66,
        0,
        55,
        3,
        40,
        32,
        0,
        40,
        2,
        0,
        32,
        0,
        40,
        2,
        8,
        16,
        19,
        33,
        1,
        32,
        0,
        40,
        2,
        8,
        32,
        0,
        40,
        2,
        0,
        40,
        2,
        4,
        106,
        65,
        1,
        58,
        0,
        0,
        32,
        0,
        32,
        0,
        41,
        3,
        40,
        35,
        6,
        40,
        2,
        4,
        32,
        1,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        133,
        55,
        3,
        40,
        32,
        0,
        32,
        0,
        40,
        2,
        8,
        65,
        1,
        106,
        32,
        0,
        40,
        2,
        4,
        111,
        54,
        2,
        8,
        32,
        0,
        35,
        5,
        40,
        2,
        4,
        32,
        0,
        41,
        3,
        40,
        34,
        6,
        66,
        45,
        136,
        167,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        32,
        6,
        66,
        8,
        134,
        66,
        1,
        132,
        133,
        55,
        3,
        40,
        32,
        0,
        11,
        38,
        1,
        1,
        127,
        32,
        0,
        40,
        2,
        0,
        34,
        0,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        34,
        1,
        32,
        1,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        0,
        11,
        55,
        1,
        2,
        127,
        32,
        1,
        32,
        0,
        40,
        2,
        0,
        34,
        2,
        71,
        4,
        64,
        32,
        1,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        1,
        65,
        16,
        107,
        34,
        3,
        32,
        3,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        2,
        16,
        12,
        11,
        32,
        0,
        32,
        1,
        54,
        2,
        0,
        11,
        7,
        0,
        32,
        0,
        40,
        2,
        4,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        54,
        2,
        4,
        11,
        7,
        0,
        32,
        0,
        40,
        2,
        8,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        54,
        2,
        8,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        16,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        16,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        24,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        24,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        32,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        32,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        40,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        40,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        48,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        48,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        56,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        56,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        64,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        64,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        72,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        72,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        80,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        80,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        88,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        88,
        11,
        7,
        0,
        32,
        0,
        41,
        3,
        96,
        11,
        9,
        0,
        32,
        0,
        32,
        1,
        55,
        3,
        96,
        11,
        172,
        4,
        2,
        5,
        127,
        1,
        126,
        32,
        2,
        65,
        172,
        3,
        75,
        4,
        64,
        32,
        2,
        65,
        16,
        107,
        34,
        4,
        32,
        4,
        40,
        2,
        4,
        65,
        1,
        106,
        54,
        2,
        4,
        11,
        32,
        2,
        33,
        4,
        65,
        0,
        33,
        2,
        32,
        1,
        40,
        2,
        8,
        33,
        5,
        32,
        1,
        40,
        2,
        4,
        33,
        6,
        3,
        64,
        2,
        127,
        65,
        0,
        33,
        3,
        3,
        64,
        32,
        3,
        32,
        5,
        72,
        4,
        64,
        32,
        3,
        32,
        6,
        106,
        45,
        0,
        0,
        33,
        1,
        32,
        0,
        40,
        2,
        0,
        32,
        0,
        40,
        2,
        8,
        16,
        19,
        33,
        7,
        32,
        0,
        40,
        2,
        8,
        32,
        0,
        40,
        2,
        0,
        40,
        2,
        4,
        106,
        32,
        1,
        58,
        0,
        0,
        32,
        0,
        32,
        0,
        41,
        3,
        40,
        35,
        6,
        40,
        2,
        4,
        32,
        7,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        133,
        55,
        3,
        40,
        32,
        0,
        32,
        0,
        40,
        2,
        8,
        65,
        1,
        106,
        32,
        0,
        40,
        2,
        4,
        111,
        54,
        2,
        8,
        32,
        0,
        35,
        5,
        40,
        2,
        4,
        32,
        0,
        41,
        3,
        40,
        34,
        8,
        66,
        45,
        136,
        167,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        32,
        1,
        173,
        32,
        8,
        66,
        8,
        134,
        132,
        133,
        55,
        3,
        40,
        32,
        0,
        32,
        0,
        41,
        3,
        16,
        66,
        1,
        124,
        55,
        3,
        16,
        32,
        0,
        32,
        0,
        41,
        3,
        24,
        66,
        1,
        124,
        55,
        3,
        24,
        32,
        0,
        41,
        3,
        16,
        32,
        0,
        41,
        3,
        80,
        90,
        4,
        127,
        32,
        0,
        41,
        3,
        40,
        32,
        0,
        41,
        3,
        96,
        131,
        80,
        5,
        65,
        0,
        11,
        4,
        127,
        65,
        1,
        5,
        32,
        0,
        41,
        3,
        16,
        32,
        0,
        41,
        3,
        88,
        90,
        11,
        4,
        64,
        32,
        0,
        32,
        0,
        41,
        3,
        32,
        55,
        3,
        48,
        32,
        0,
        32,
        0,
        41,
        3,
        16,
        55,
        3,
        56,
        32,
        0,
        32,
        0,
        41,
        3,
        40,
        55,
        3,
        64,
        65,
        0,
        33,
        1,
        3,
        64,
        32,
        1,
        32,
        0,
        40,
        2,
        4,
        72,
        4,
        64,
        32,
        0,
        40,
        2,
        0,
        32,
        1,
        16,
        18,
        32,
        1,
        65,
        1,
        106,
        33,
        1,
        12,
        1,
        11,
        11,
        32,
        0,
        66,
        0,
        55,
        3,
        40,
        32,
        0,
        65,
        0,
        54,
        2,
        8,
        32,
        0,
        66,
        0,
        55,
        3,
        16,
        32,
        0,
        66,
        0,
        55,
        3,
        40,
        32,
        0,
        40,
        2,
        0,
        32,
        0,
        40,
        2,
        8,
        16,
        19,
        33,
        1,
        32,
        0,
        40,
        2,
        8,
        32,
        0,
        40,
        2,
        0,
        40,
        2,
        4,
        106,
        65,
        1,
        58,
        0,
        0,
        32,
        0,
        32,
        0,
        41,
        3,
        40,
        35,
        6,
        40,
        2,
        4,
        32,
        1,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        133,
        55,
        3,
        40,
        32,
        0,
        32,
        0,
        40,
        2,
        8,
        65,
        1,
        106,
        32,
        0,
        40,
        2,
        4,
        111,
        54,
        2,
        8,
        32,
        0,
        35,
        5,
        40,
        2,
        4,
        32,
        0,
        41,
        3,
        40,
        34,
        8,
        66,
        45,
        136,
        167,
        65,
        3,
        116,
        106,
        41,
        3,
        0,
        32,
        8,
        66,
        8,
        134,
        66,
        1,
        132,
        133,
        55,
        3,
        40,
        32,
        3,
        65,
        1,
        106,
        12,
        3,
        11,
        32,
        3,
        65,
        1,
        106,
        33,
        3,
        12,
        1,
        11,
        11,
        65,
        127,
        11,
        34,
        1,
        65,
        0,
        78,
        4,
        64,
        32,
        5,
        32,
        1,
        107,
        33,
        5,
        32,
        1,
        32,
        6,
        106,
        33,
        6,
        32,
        2,
        34,
        1,
        65,
        1,
        106,
        33,
        2,
        32,
        4,
        40,
        2,
        4,
        32,
        1,
        65,
        2,
        116,
        106,
        32,
        0,
        41,
        3,
        56,
        62,
        2,
        0,
        12,
        1,
        11,
        11,
        32,
        4,
        11,
        10,
        0,
        16,
        15,
        36,
        5,
        16,
        15,
        36,
        6,
        11,
        3,
        0,
        1,
        11,
        73,
        1,
        2,
        127,
        32,
        0,
        40,
        2,
        4,
        34,
        1,
        65,
        255,
        255,
        255,
        255,
        0,
        113,
        34,
        2,
        65,
        1,
        70,
        4,
        64,
        32,
        0,
        65,
        16,
        106,
        16,
        53,
        32,
        0,
        32,
        0,
        40,
        2,
        0,
        65,
        1,
        114,
        54,
        2,
        0,
        35,
        0,
        32,
        0,
        16,
        2,
        5,
        32,
        0,
        32,
        2,
        65,
        1,
        107,
        32,
        1,
        65,
        128,
        128,
        128,
        128,
        127,
        113,
        114,
        54,
        2,
        4,
        11,
        11,
        58,
        0,
        2,
        64,
        2,
        64,
        2,
        64,
        32,
        0,
        65,
        8,
        107,
        40,
        2,
        0,
        14,
        7,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        2,
        11,
        15,
        11,
        32,
        0,
        40,
        2,
        0,
        34,
        0,
        4,
        64,
        32,
        0,
        65,
        172,
        3,
        79,
        4,
        64,
        32,
        0,
        65,
        16,
        107,
        16,
        52,
        11,
        11,
        15,
        11,
        0,
        11,
        11,
        137,
        3,
        7,
        0,
        65,
        16,
        11,
        55,
        40,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        40,
        0,
        0,
        0,
        97,
        0,
        108,
        0,
        108,
        0,
        111,
        0,
        99,
        0,
        97,
        0,
        116,
        0,
        105,
        0,
        111,
        0,
        110,
        0,
        32,
        0,
        116,
        0,
        111,
        0,
        111,
        0,
        32,
        0,
        108,
        0,
        97,
        0,
        114,
        0,
        103,
        0,
        101,
        0,
        65,
        208,
        0,
        11,
        45,
        30,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        30,
        0,
        0,
        0,
        126,
        0,
        108,
        0,
        105,
        0,
        98,
        0,
        47,
        0,
        114,
        0,
        116,
        0,
        47,
        0,
        116,
        0,
        108,
        0,
        115,
        0,
        102,
        0,
        46,
        0,
        116,
        0,
        115,
        0,
        65,
        128,
        1,
        11,
        43,
        28,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        28,
        0,
        0,
        0,
        73,
        0,
        110,
        0,
        118,
        0,
        97,
        0,
        108,
        0,
        105,
        0,
        100,
        0,
        32,
        0,
        108,
        0,
        101,
        0,
        110,
        0,
        103,
        0,
        116,
        0,
        104,
        0,
        65,
        176,
        1,
        11,
        53,
        38,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        38,
        0,
        0,
        0,
        126,
        0,
        108,
        0,
        105,
        0,
        98,
        0,
        47,
        0,
        97,
        0,
        114,
        0,
        114,
        0,
        97,
        0,
        121,
        0,
        98,
        0,
        117,
        0,
        102,
        0,
        102,
        0,
        101,
        0,
        114,
        0,
        46,
        0,
        116,
        0,
        115,
        0,
        65,
        240,
        1,
        11,
        51,
        36,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        36,
        0,
        0,
        0,
        73,
        0,
        110,
        0,
        100,
        0,
        101,
        0,
        120,
        0,
        32,
        0,
        111,
        0,
        117,
        0,
        116,
        0,
        32,
        0,
        111,
        0,
        102,
        0,
        32,
        0,
        114,
        0,
        97,
        0,
        110,
        0,
        103,
        0,
        101,
        0,
        65,
        176,
        2,
        11,
        51,
        36,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        36,
        0,
        0,
        0,
        126,
        0,
        108,
        0,
        105,
        0,
        98,
        0,
        47,
        0,
        116,
        0,
        121,
        0,
        112,
        0,
        101,
        0,
        100,
        0,
        97,
        0,
        114,
        0,
        114,
        0,
        97,
        0,
        121,
        0,
        46,
        0,
        116,
        0,
        115,
        0,
        65,
        240,
        2,
        11,
        53,
        7,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        145,
        4,
        0,
        0,
        2,
        0,
        0,
        0,
        49,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        17,
        1,
        0,
        0,
        2,
        0,
        0,
        0,
        16,
        0,
        34,
        16,
        115,
        111,
        117,
        114,
        99,
        101,
        77,
        97,
        112,
        112,
        105,
        110,
        103,
        85,
        82,
        76,
        16,
        46,
        47,
        114,
        97,
        98,
        105,
        110,
        46,
        119,
        97,
        115,
        109,
        46,
        109,
        97,
        112
    ]);
    return instantiate(new Response(new Blob([
        t
    ], {
        type: "application/wasm"
    })), e726);
}
loadWebAssembly.supported = "undefined" != typeof WebAssembly;
var rabinWasm = loadWebAssembly;
const Rabin = rabin$1, getRabin = rabinWasm, create = async (e727, t, r, n, o)=>{
    const i102 = await getRabin();
    return new Rabin(i102, e727, t, r, n, o);
};
var src$1 = {
    Rabin: Rabin,
    create: create
};
async function* rabinChunker(e728, t) {
    let r, n, o;
    if (t.minChunkSize && t.maxChunkSize && t.avgChunkSize) o = t.avgChunkSize, r = t.minChunkSize, n = t.maxChunkSize;
    else {
        if (!t.avgChunkSize) throw errCode(new Error("please specify an average chunk size"), "ERR_INVALID_AVG_CHUNK_SIZE");
        o = t.avgChunkSize, r = o / 3, n = o + o / 2;
    }
    if (r < 16) throw errCode(new Error("rabin min must be greater than 16"), "ERR_INVALID_MIN_CHUNK_SIZE");
    n < r && (n = r), o < r && (o = r);
    const i103 = Math.floor(Math.log2(o));
    for await (const o11 of rabin(e728, {
        min: r,
        max: n,
        bits: i103,
        window: t.window,
        polynomial: t.polynomial
    }))yield o11;
}
async function* rabin(e729, t) {
    const r = await src$1.create(t.bits, t.min, t.max, t.window), n = new BufferList_1;
    for await (const t43 of e729){
        n.append(t43);
        const e730 = r.fingerprint(t43);
        for(let t = 0; t < e730.length; t++){
            const r = e730[t], o = n.slice(0, r);
            n.consume(r), yield o;
        }
    }
    n.length && (yield n.slice(0));
}
async function* fixedSizeChunker(e731, t) {
    let r = new BufferList_1, n = 0, o = !1;
    const i104 = t.maxChunkSize;
    for await (const t44 of e731)for(r.append(t44), n += t44.length; n >= i104;)if (yield r.slice(0, i104), o = !0, i104 === r.length) r = new BufferList_1, n = 0;
    else {
        const e732 = new BufferList_1;
        e732.append(r.shallowSlice(i104)), r = e732, n -= i104;
    }
    o && !n || (yield r.slice(0, n));
}
const identity$2 = from$1({
    prefix: "\0",
    name: "identity",
    encode: (e733)=>toString$1(e733)
    ,
    decode: (e734)=>fromString$3(e734)
});
var identityBase = Object.freeze({
    __proto__: null,
    identity: identity$2
});
const base2 = rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var base2$1 = Object.freeze({
    __proto__: null,
    base2: base2
});
const base8 = rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var base8$1 = Object.freeze({
    __proto__: null,
    base8: base8
});
const base10 = baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var base10$1 = Object.freeze({
    __proto__: null,
    base10: base10
});
const base16 = rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), base16upper = rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var base16$1 = Object.freeze({
    __proto__: null,
    base16: base16,
    base16upper: base16upper
});
const base36 = baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), base36upper = baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var base36$1 = Object.freeze({
    __proto__: null,
    base36: base36,
    base36upper: base36upper
});
const base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var base64$1 = Object.freeze({
    __proto__: null,
    base64: base64,
    base64pad: base64pad,
    base64url: base64url,
    base64urlpad: base64urlpad
});
const code$2 = 0, name$1 = "identity", encode$1 = coerce, digest = (e735)=>create$4(code$2, encode$1(e735))
, identity = {
    code: code$2,
    name: name$1,
    encode: encode$1,
    digest: digest
};
var identity$1 = Object.freeze({
    __proto__: null,
    identity: identity
});
new TextEncoder, new TextDecoder;
const bases = {
    ...identityBase,
    ...base2$1,
    ...base8$1,
    ...base10$1,
    ...base16$1,
    ...base32$1,
    ...base36$1,
    ...base58,
    ...base64$1
};
function createCodec(e736, t, r, n) {
    return {
        name: e736,
        prefix: t,
        encoder: {
            name: e736,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    };
}
const string = createCodec("utf8", "u", (e737)=>"u" + new TextDecoder("utf8").decode(e737)
, (e738)=>(new TextEncoder).encode(e738.substring(1))
), ascii = createCodec("ascii", "a", (e739)=>{
    let t = "a";
    for(let r = 0; r < e739.length; r++)t += String.fromCharCode(e739[r]);
    return t;
}, (e740)=>{
    e740 = e740.substring(1);
    const t = new Uint8Array(e740.length);
    for(let r = 0; r < e740.length; r++)t[r] = e740.charCodeAt(r);
    return t;
}), BASES = {
    utf8: string,
    "utf-8": string,
    hex: bases.base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...bases
};
function fromString(e741, t = "utf8") {
    const r = BASES[t];
    if (!r) throw new Error(`Unsupported encoding "${t}"`);
    return r.decoder.decode(`${r.prefix}${e741}`);
}
var fromString$1 = Object.freeze({
    __proto__: null,
    fromString: fromString
});
async function* validateChunks(e742) {
    for await (const t of e742){
        if (void 0 === t.length) throw errCode(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
        if ("string" == typeof t || t instanceof String) yield fromString(t.toString());
        else if (Array.isArray(t)) yield Uint8Array.from(t);
        else {
            if (!(t instanceof Uint8Array)) throw errCode(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
            yield t;
        }
    }
}
function isIterable(e743) {
    return Symbol.iterator in e743;
}
function isAsyncIterable(e744) {
    return Symbol.asyncIterator in e744;
}
function contentAsAsyncIterable(e745) {
    try {
        if (e745 instanceof Uint8Array) return async function*() {
            yield e745;
        }();
        if (isIterable(e745)) return async function*() {
            yield* e745;
        }();
        if (isAsyncIterable(e745)) return e745;
    } catch  {
        throw errCode(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
    }
    throw errCode(new Error("Content was invalid"), "ERR_INVALID_CONTENT");
}
async function* dagBuilder(e746, t, r) {
    for await (const n of e746)if (n.path && ("./" === n.path.substring(0, 2) && (r.wrapWithDirectory = !0), n.path = n.path.split("/").filter((e747)=>e747 && "." !== e747
    ).join("/")), n.content) {
        let e748, o;
        e748 = "function" == typeof r.chunker ? r.chunker : "rabin" === r.chunker ? rabinChunker : fixedSizeChunker, o = "function" == typeof r.chunkValidator ? r.chunkValidator : validateChunks;
        const i105 = {
            path: n.path,
            mtime: n.mtime,
            mode: n.mode,
            content: e748(o(contentAsAsyncIterable(n.content), r), r)
        };
        yield ()=>fileBuilder(i105, t, r)
        ;
    } else {
        if (!n.path) throw new Error("Import candidate must have content or path or both");
        {
            const e749 = {
                path: n.path,
                mtime: n.mtime,
                mode: n.mode
            };
            yield ()=>dirBuilder(e749, t, r)
            ;
        }
    }
}
class Dir {
    constructor(e750, t){
        this.options = t || {}, this.root = e750.root, this.dir = e750.dir, this.path = e750.path, this.dirty = e750.dirty, this.flat = e750.flat, this.parent = e750.parent, this.parentKey = e750.parentKey, this.unixfs = e750.unixfs, this.mode = e750.mode, this.mtime = e750.mtime, this.cid = void 0, this.size = void 0;
    }
    async put(e, t) {}
    get(e) {
        return Promise.resolve(this);
    }
    async *eachChildSeries() {}
    async *flush(e) {}
}
class DirFlat extends Dir {
    constructor(e751, t){
        super(e751, t), this._children = {};
    }
    async put(e752, t) {
        this.cid = void 0, this.size = void 0, this._children[e752] = t;
    }
    get(e753) {
        return Promise.resolve(this._children[e753]);
    }
    childCount() {
        return Object.keys(this._children).length;
    }
    directChildrenCount() {
        return this.childCount();
    }
    onlyChild() {
        return this._children[Object.keys(this._children)[0]];
    }
    async *eachChildSeries() {
        const e754 = Object.keys(this._children);
        for(let t = 0; t < e754.length; t++){
            const r = e754[t];
            yield {
                key: r,
                child: this._children[r]
            };
        }
    }
    async *flush(e755) {
        const t46 = Object.keys(this._children), r = [];
        for(let n = 0; n < t46.length; n++){
            let o = this._children[t46[n]];
            if (o instanceof Dir) for await (const t45 of o.flush(e755))o = t45, yield o;
            null != o.size && o.cid && r.push({
                Name: t46[n],
                Tsize: o.size,
                Hash: o.cid
            });
        }
        const n15 = new UnixFS({
            type: "directory",
            mtime: this.mtime,
            mode: this.mode
        }), o = {
            Data: n15.marshal(),
            Links: r
        }, i106 = encode$3(prepare(o)), s = await persist(i106, e755, this.options), a = i106.length + o.Links.reduce((e756, t)=>e756 + (null == t.Tsize ? 0 : t.Tsize)
        , 0);
        this.cid = s, this.size = a, yield {
            cid: s,
            unixfs: n15,
            path: this.path,
            size: a
        };
    }
}
const BITS_PER_BYTE = 7;
var sparseArray = class {
    constructor(){
        this._bitArrays = [], this._data = [], this._length = 0, this._changedLength = !1, this._changedData = !1;
    }
    set(e757, t) {
        let r = this._internalPositionFor(e757, !1);
        if (void 0 === t) -1 !== r && (this._unsetInternalPos(r), this._unsetBit(e757), this._changedLength = !0, this._changedData = !0);
        else {
            let n = !1;
            -1 === r ? (r = this._data.length, this._setBit(e757), this._changedData = !0) : n = !0, this._setInternalPos(r, e757, t, n), this._changedLength = !0;
        }
    }
    unset(e758) {
        this.set(e758, void 0);
    }
    get(e759) {
        this._sortData();
        const t = this._internalPositionFor(e759, !0);
        if (-1 !== t) return this._data[t][1];
    }
    push(e760) {
        return this.set(this.length, e760), this.length;
    }
    get length() {
        if (this._sortData(), this._changedLength) {
            const e761 = this._data[this._data.length - 1];
            this._length = e761 ? e761[0] + 1 : 0, this._changedLength = !1;
        }
        return this._length;
    }
    forEach(e762) {
        let t = 0;
        for(; t < this.length;)e762(this.get(t), t, this), t++;
    }
    map(e763) {
        let t = 0, r = new Array(this.length);
        for(; t < this.length;)r[t] = e763(this.get(t), t, this), t++;
        return r;
    }
    reduce(e764, t) {
        let r = 0, n = t;
        for(; r < this.length;)n = e764(n, this.get(r), r), r++;
        return n;
    }
    find(e765) {
        let t, r, n = 0;
        for(; n < this.length && !t;)r = this.get(n), t = e765(r), n++;
        return t ? r : void 0;
    }
    _internalPositionFor(e766, t) {
        const r = this._bytePosFor(e766, t);
        if (r >= this._bitArrays.length) return -1;
        const n = this._bitArrays[r], o = e766 - r * BITS_PER_BYTE;
        if (!((n & 1 << o) > 0)) return -1;
        return this._bitArrays.slice(0, r).reduce(popCountReduce, 0) + popCount(n & ~(4294967295 << o + 1)) - 1;
    }
    _bytePosFor(e767, t) {
        const r = Math.floor(e767 / BITS_PER_BYTE), n = r + 1;
        for(; !t && this._bitArrays.length < n;)this._bitArrays.push(0);
        return r;
    }
    _setBit(e768) {
        const t = this._bytePosFor(e768, !1);
        this._bitArrays[t] |= 1 << e768 - t * BITS_PER_BYTE;
    }
    _unsetBit(e769) {
        const t = this._bytePosFor(e769, !1);
        this._bitArrays[t] &= ~(1 << e769 - t * BITS_PER_BYTE);
    }
    _setInternalPos(e770, t, r, n) {
        const o = this._data, i107 = [
            t,
            r
        ];
        if (n) this._sortData(), o[e770] = i107;
        else {
            if (o.length) {
                if (o[o.length - 1][0] >= t) o.push(i107);
                else if (o[0][0] <= t) o.unshift(i107);
                else {
                    const e771 = Math.round(o.length / 2);
                    this._data = o.slice(0, e771).concat(i107).concat(o.slice(e771));
                }
            } else this._data.push(i107);
            this._changedData = !0, this._changedLength = !0;
        }
    }
    _unsetInternalPos(e772) {
        this._data.splice(e772, 1);
    }
    _sortData() {
        this._changedData && this._data.sort(sortInternal), this._changedData = !1;
    }
    bitField() {
        const e773 = [];
        let t, r = 8, n = 0, o = 0;
        const i108 = this._bitArrays.slice();
        for(; i108.length || n;){
            0 === n && (t = i108.shift(), n = 7);
            const s = Math.min(n, r);
            o |= (t & ~(255 << s)) << 8 - r, t >>>= s, n -= s, r -= s, r && (n || i108.length) || (e773.push(o), o = 0, r = 8);
        }
        for(var s = e773.length - 1; s > 0; s--){
            if (0 !== e773[s]) break;
            e773.pop();
        }
        return e773;
    }
    compactArray() {
        return this._sortData(), this._data.map(valueOnly);
    }
};
function popCountReduce(e774, t) {
    return e774 + popCount(t);
}
function popCount(e775) {
    let t = e775;
    return t -= t >> 1 & 1431655765, t = (858993459 & t) + (t >> 2 & 858993459), 16843009 * (t + (t >> 4) & 252645135) >> 24;
}
function sortInternal(e776, t) {
    return e776[0] - t[0];
}
function valueOnly(e777) {
    return e777[1];
}
var require$$1$1 = getAugmentedNamespace(fromString$1);
const SparseArray = sparseArray, { fromString: uint8ArrayFromString  } = require$$1$1;
class Bucket$1 {
    constructor(e778, t, r = 0){
        this._options = e778, this._popCount = 0, this._parent = t, this._posAtParent = r, this._children = new SparseArray, this.key = null;
    }
    async put(e779, t) {
        const r = await this._findNewBucketAndPos(e779);
        await r.bucket._putAt(r, e779, t);
    }
    async get(e780) {
        const t = await this._findChild(e780);
        if (t) return t.value;
    }
    async del(e781) {
        const t = await this._findPlace(e781), r = t.bucket._at(t.pos);
        r && r.key === e781 && t.bucket._delAt(t.pos);
    }
    leafCount() {
        return this._children.compactArray().reduce((e782, t)=>t instanceof Bucket$1 ? e782 + t.leafCount() : e782 + 1
        , 0);
    }
    childrenCount() {
        return this._children.length;
    }
    onlyChild() {
        return this._children.get(0);
    }
    *eachLeafSeries() {
        const e783 = this._children.compactArray();
        for (const t of e783)t instanceof Bucket$1 ? yield* t.eachLeafSeries() : yield t;
        return [];
    }
    serialize(e784, t) {
        return t(this._children.reduce((r, n, o)=>(n && (n instanceof Bucket$1 ? r.push(n.serialize(e784, t)) : r.push(e784(n, o))), r)
        , []));
    }
    asyncTransform(e785, t) {
        return asyncTransformBucket(this, e785, t);
    }
    toJSON() {
        return this.serialize(mapNode, reduceNodes);
    }
    prettyPrint() {
        return JSON.stringify(this.toJSON(), null, "  ");
    }
    tableSize() {
        return Math.pow(2, this._options.bits);
    }
    async _findChild(e786) {
        const t = await this._findPlace(e786), r = t.bucket._at(t.pos);
        if (!(r instanceof Bucket$1)) return r && r.key === e786 ? r : void 0;
    }
    async _findPlace(e787) {
        const t = this._options.hash("string" == typeof e787 ? uint8ArrayFromString(e787) : e787), r = await t.take(this._options.bits), n = this._children.get(r);
        return n instanceof Bucket$1 ? n._findPlace(t) : {
            bucket: this,
            pos: r,
            hash: t,
            existingChild: n
        };
    }
    async _findNewBucketAndPos(e788) {
        const t = await this._findPlace(e788);
        if (t.existingChild && t.existingChild.key !== e788) {
            const e789 = new Bucket$1(this._options, t.bucket, t.pos);
            t.bucket._putObjectAt(t.pos, e789);
            const r = await e789._findPlace(t.existingChild.hash);
            return r.bucket._putAt(r, t.existingChild.key, t.existingChild.value), e789._findNewBucketAndPos(t.hash);
        }
        return t;
    }
    _putAt(e790, t, r) {
        this._putObjectAt(e790.pos, {
            key: t,
            value: r,
            hash: e790.hash
        });
    }
    _putObjectAt(e791, t) {
        this._children.get(e791) || this._popCount++, this._children.set(e791, t);
    }
    _delAt(e792) {
        if (-1 === e792) throw new Error("Invalid position");
        this._children.get(e792) && this._popCount--, this._children.unset(e792), this._level();
    }
    _level() {
        if (this._parent && this._popCount <= 1) {
            if (1 === this._popCount) {
                const e793 = this._children.find(exists);
                if (e793 && !(e793 instanceof Bucket$1)) {
                    const t = e793.hash;
                    t.untake(this._options.bits);
                    const r = {
                        pos: this._posAtParent,
                        hash: t,
                        bucket: this._parent
                    };
                    this._parent._putAt(r, e793.key, e793.value);
                }
            } else this._parent._delAt(this._posAtParent);
        }
    }
    _at(e794) {
        return this._children.get(e794);
    }
}
function exists(e795) {
    return Boolean(e795);
}
function mapNode(e796, t) {
    return e796.key;
}
function reduceNodes(e797) {
    return e797;
}
async function asyncTransformBucket(e798, t, r) {
    const n = [];
    for (const o of e798._children.compactArray())if (o instanceof Bucket$1) await asyncTransformBucket(o, t, r);
    else {
        const r = await t(o);
        n.push({
            bitField: e798._children.bitField(),
            children: r
        });
    }
    return r(n);
}
var bucket = Bucket$1, consumableHash = {
    exports: {}
};
const START_MASKS = [
    255,
    254,
    252,
    248,
    240,
    224,
    192,
    128
], STOP_MASKS = [
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255
];
var consumableBuffer = class {
    constructor(e799){
        this._value = e799, this._currentBytePos = e799.length - 1, this._currentBitPos = 7;
    }
    availableBits() {
        return this._currentBitPos + 1 + 8 * this._currentBytePos;
    }
    totalBits() {
        return 8 * this._value.length;
    }
    take(e800) {
        let t = e800, r = 0;
        for(; t && this._haveBits();){
            const e801 = this._value[this._currentBytePos], n = this._currentBitPos + 1, o = Math.min(n, t);
            r = (r << o) + byteBitsToInt(e801, n - o, o), t -= o, this._currentBitPos -= o, this._currentBitPos < 0 && (this._currentBitPos = 7, this._currentBytePos--);
        }
        return r;
    }
    untake(e802) {
        for(this._currentBitPos += e802; this._currentBitPos > 7;)this._currentBitPos -= 8, this._currentBytePos += 1;
    }
    _haveBits() {
        return this._currentBytePos >= 0;
    }
};
function byteBitsToInt(e803, t, r) {
    return (e803 & maskFor(t, r)) >>> t;
}
function maskFor(e804, t) {
    return START_MASKS[e804] & STOP_MASKS[Math.min(t + e804 - 1, 7)];
}
function concat(e805, t48) {
    t48 || (t48 = e805.reduce((e806, t)=>e806 + t.length
    , 0));
    const r = new Uint8Array(t48);
    let n = 0;
    for (const t47 of e805)r.set(t47, n), n += t47.length;
    return r;
}
var concat$1 = Object.freeze({
    __proto__: null,
    concat: concat
}), require$$1 = getAugmentedNamespace(concat$1);
const ConsumableBuffer = consumableBuffer, { concat: uint8ArrayConcat  } = require$$1;
function wrapHash$1(e807) {
    return function(t) {
        return t instanceof InfiniteHash ? t : new InfiniteHash(t, e807);
    };
}
class InfiniteHash {
    constructor(e808, t){
        if (!(e808 instanceof Uint8Array)) throw new Error("can only hash Uint8Arrays");
        this._value = e808, this._hashFn = t, this._depth = -1, this._availableBits = 0, this._currentBufferIndex = 0, this._buffers = [];
    }
    async take(e809) {
        let t = e809;
        for(; this._availableBits < t;)await this._produceMoreBits();
        let r = 0;
        for(; t > 0;){
            const e810 = this._buffers[this._currentBufferIndex], n = Math.min(e810.availableBits(), t);
            r = (r << n) + e810.take(n), t -= n, this._availableBits -= n, 0 === e810.availableBits() && this._currentBufferIndex++;
        }
        return r;
    }
    untake(e811) {
        let t = e811;
        for(; t > 0;){
            const e812 = this._buffers[this._currentBufferIndex], r = Math.min(e812.totalBits() - e812.availableBits(), t);
            e812.untake(r), t -= r, this._availableBits += r, this._currentBufferIndex > 0 && e812.totalBits() === e812.availableBits() && (this._depth--, this._currentBufferIndex--);
        }
    }
    async _produceMoreBits() {
        this._depth++;
        const e813 = this._depth ? uint8ArrayConcat([
            this._value,
            Uint8Array.from([
                this._depth
            ])
        ]) : this._value, t = await this._hashFn(e813), r = new ConsumableBuffer(t);
        this._buffers.push(r), this._availableBits += r.availableBits();
    }
}
consumableHash.exports = wrapHash$1, consumableHash.exports.InfiniteHash = InfiniteHash;
const Bucket = bucket, wrapHash = consumableHash.exports;
function createHAMT(e814) {
    if (!e814 || !e814.hashFn) throw new Error("please define an options.hashFn");
    const t = {
        bits: e814.bits || 8,
        hash: wrapHash(e814.hashFn)
    };
    return new Bucket(t);
}
var src = {
    createHAMT: createHAMT,
    Bucket: Bucket
};
class DirSharded extends Dir {
    constructor(e815, t){
        super(e815, t), this._bucket = src.createHAMT({
            hashFn: t.hamtHashFn,
            bits: t.hamtBucketBits
        });
    }
    async put(e816, t) {
        await this._bucket.put(e816, t);
    }
    get(e817) {
        return this._bucket.get(e817);
    }
    childCount() {
        return this._bucket.leafCount();
    }
    directChildrenCount() {
        return this._bucket.childrenCount();
    }
    onlyChild() {
        return this._bucket.onlyChild();
    }
    async *eachChildSeries() {
        for await (const { key: e818 , value: t  } of this._bucket.eachLeafSeries())yield {
            key: e818,
            child: t
        };
    }
    async *flush(e819) {
        for await (const t of flush(this._bucket, e819, this, this.options))yield {
            ...t,
            path: this.path
        };
    }
}
async function* flush(e821, t, r, n) {
    const o = e821._children, i109 = [];
    let s = 0;
    for(let e820 = 0; e820 < o.length; e820++){
        const r = o.get(e820);
        if (!r) continue;
        const a = e820.toString(16).toUpperCase().padStart(2, "0");
        if (r instanceof src.Bucket) {
            let e822;
            for await (const o of (await flush(r, t, null, n)))e822 = o;
            if (!e822) throw new Error("Could not flush sharded directory, no subshard found");
            i109.push({
                Name: a,
                Tsize: e822.size,
                Hash: e822.cid
            }), s += e822.size;
        } else if ("function" == typeof r.value.flush) {
            const e823 = r.value;
            let n;
            for await (const r28 of e823.flush(t))n = r28, yield n;
            const o = a + r.key;
            i109.push({
                Name: o,
                Tsize: n.size,
                Hash: n.cid
            }), s += n.size;
        } else {
            const e824 = r.value;
            if (!e824.cid) continue;
            const t = a + r.key, n = e824.size;
            i109.push({
                Name: t,
                Tsize: n,
                Hash: e824.cid
            }), s += n;
        }
    }
    const a = Uint8Array.from(o.bitField().reverse()), c = new UnixFS({
        type: "hamt-sharded-directory",
        data: a,
        fanout: e821.tableSize(),
        hashType: n.hamtHashCode,
        mtime: r && r.mtime,
        mode: r && r.mode
    }), u = encode$3(prepare({
        Data: c.marshal(),
        Links: i109
    })), f = await persist(u, t, n), l = u.length + s;
    yield {
        cid: f,
        unixfs: c,
        size: l
    };
}
async function flatToShard(e825, t, r, n) {
    let o = t;
    t instanceof DirFlat && t.directChildrenCount() >= r && (o = await convertToShard(t, n));
    const i110 = o.parent;
    if (i110) {
        if (o !== t) {
            if (e825 && (e825.parent = o), !o.parentKey) throw new Error("No parent key found");
            await i110.put(o.parentKey, o);
        }
        return flatToShard(o, i110, r, n);
    }
    return o;
}
async function convertToShard(e826, t) {
    const r = new DirSharded({
        root: e826.root,
        dir: !0,
        parent: e826.parent,
        parentKey: e826.parentKey,
        path: e826.path,
        dirty: e826.dirty,
        flat: !1,
        mtime: e826.mtime,
        mode: e826.mode
    }, t);
    for await (const { key: t49 , child: n  } of e826.eachChildSeries())await r.put(t49, n);
    return r;
}
const toPathComponents$1 = (e827 = "")=>(e827.trim().match(/([^\\^/]|\\\/)+/g) || []).filter(Boolean)
;
async function addToTree(e828, t, r) {
    const n = toPathComponents$1(e828.path || ""), o = n.length - 1;
    let i111 = t, s = "";
    for(let a = 0; a < n.length; a++){
        const c = n[a];
        s += `${s ? "/" : ""}${c}`;
        const u = a === o;
        if (i111.dirty = !0, i111.cid = void 0, i111.size = void 0, u) await i111.put(c, e828), t = await flatToShard(null, i111, r.shardSplitThreshold, r);
        else {
            let e829 = await i111.get(c);
            e829 && e829 instanceof Dir || (e829 = new DirFlat({
                root: !1,
                dir: !0,
                parent: i111,
                parentKey: c,
                path: s,
                dirty: !0,
                flat: !0,
                mtime: e829 && e829.unixfs && e829.unixfs.mtime,
                mode: e829 && e829.unixfs && e829.unixfs.mode
            }, r)), await i111.put(c, e829), i111 = e829;
        }
    }
    return t;
}
async function* flushAndYield(e830, t) {
    e830 instanceof Dir ? yield* e830.flush(t) : e830 && e830.unixfs && e830.unixfs.isDirectory() && (yield e830);
}
async function* treeBuilder(e832, t, r) {
    let n = new DirFlat({
        root: !0,
        dir: !0,
        path: "",
        dirty: !0,
        flat: !0
    }, r);
    for await (const t50 of e832)t50 && (n = await addToTree(t50, n, r), t50.unixfs && t50.unixfs.isDirectory() || (yield t50));
    if (r.wrapWithDirectory) yield* flushAndYield(n, t);
    else for await (const e831 of n.eachChildSeries())e831 && (yield* flushAndYield(e831.child, t));
}
async function* importer(e834, t, r = {}) {
    const n = defaultOptions$1(r);
    let o, i112, s;
    o = "function" == typeof r.dagBuilder ? r.dagBuilder : dagBuilder, i112 = "function" == typeof r.treeBuilder ? r.treeBuilder : treeBuilder, s = Symbol.asyncIterator in e834 || Symbol.iterator in e834 ? e834 : [
        e834
    ];
    for await (const e833 of i112(itParallelBatch(o(s, t, n), n.fileImportConcurrency), t, n))yield {
        cid: e833.cid,
        path: e833.path,
        unixfs: e833.unixfs,
        size: e833.size
    };
}
async function* browserReadableStreamToIt$1(e835, t = {}) {
    const r = e835.getReader();
    try {
        for(;;){
            const e836 = await r.read();
            if (e836.done) return;
            yield e836.value;
        }
    } finally{
        !0 !== t.preventCancel && r.cancel(), r.releaseLock();
    }
}
var browserReadablestreamToIt = browserReadableStreamToIt$1;
const browserReadableStreamToIt = browserReadablestreamToIt;
function blobToIt(e837) {
    return "function" == typeof e837.stream ? browserReadableStreamToIt(e837.stream()) : browserReadableStreamToIt(new Response(e837).body);
}
var blobToIt_1 = blobToIt;
function peekableIterator(e838) {
    const [t, r] = e838[Symbol.asyncIterator] ? [
        e838[Symbol.asyncIterator](),
        Symbol.asyncIterator
    ] : [
        e838[Symbol.iterator](),
        Symbol.iterator
    ], n = [];
    return {
        peek: ()=>t.next()
        ,
        push: (e839)=>{
            n.push(e839);
        },
        next: ()=>n.length ? {
                done: !1,
                value: n.shift()
            } : t.next()
        ,
        [r] () {
            return this;
        }
    };
}
var itPeekable = peekableIterator;
const map = async function*(e840, t) {
    for await (const r of e840)yield t(r);
};
var itMap = map;
function isBytes$1(e841) {
    return ArrayBuffer.isView(e841) || e841 instanceof ArrayBuffer;
}
function isBlob$1(e842) {
    return e842.constructor && ("Blob" === e842.constructor.name || "File" === e842.constructor.name) && "function" == typeof e842.stream;
}
function isFileObject(e843) {
    return "object" == typeof e843 && (e843.path || e843.content);
}
const isReadableStream = (e844)=>e844 && "function" == typeof e844.getReader
;
async function* toAsyncIterable(e845) {
    yield e845;
}
async function normaliseContent(e846) {
    if (isBytes$1(e846)) return toAsyncIterable(toBytes(e846));
    if ("string" == typeof e846 || e846 instanceof String) return toAsyncIterable(toBytes(e846.toString()));
    if (isBlob$1(e846)) return blobToIt_1(e846);
    if (isReadableStream(e846) && (e846 = browserReadablestreamToIt(e846)), Symbol.iterator in e846 || Symbol.asyncIterator in e846) {
        const t = itPeekable(e846), { value: r , done: n  } = await t.peek();
        if (n) return toAsyncIterable(new Uint8Array(0));
        if (t.push(r), Number.isInteger(r)) return toAsyncIterable(Uint8Array.from(await itAll(t)));
        if (isBytes$1(r) || "string" == typeof r || r instanceof String) return itMap(t, toBytes);
    }
    throw errCode(new Error(`Unexpected input: ${e846}`), "ERR_UNEXPECTED_INPUT");
}
function toBytes(e847) {
    return e847 instanceof Uint8Array ? e847 : ArrayBuffer.isView(e847) ? new Uint8Array(e847.buffer, e847.byteOffset, e847.byteLength) : e847 instanceof ArrayBuffer ? new Uint8Array(e847) : Array.isArray(e847) ? Uint8Array.from(e847) : fromString(e847.toString());
}
async function* normaliseCandidateSingle(e848, t) {
    if (null == e848) throw errCode(new Error(`Unexpected input: ${e848}`), "ERR_UNEXPECTED_INPUT");
    if ("string" == typeof e848 || e848 instanceof String) yield toFileObject$1(e848.toString(), t);
    else if (isBytes$1(e848) || isBlob$1(e848)) yield toFileObject$1(e848, t);
    else {
        if (isReadableStream(e848) && (e848 = browserReadablestreamToIt(e848)), Symbol.iterator in e848 || Symbol.asyncIterator in e848) {
            const r = itPeekable(e848), { value: n , done: o  } = await r.peek();
            if (o) return void (yield {
                content: []
            });
            if (r.push(n), Number.isInteger(n) || isBytes$1(n) || "string" == typeof n || n instanceof String) return void (yield toFileObject$1(r, t));
            throw errCode(new Error("Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead"), "ERR_UNEXPECTED_INPUT");
        }
        if (!isFileObject(e848)) throw errCode(new Error('Unexpected input: cannot convert "' + typeof e848 + '" into ImportCandidate'), "ERR_UNEXPECTED_INPUT");
        yield toFileObject$1(e848, t);
    }
}
async function toFileObject$1(e849, t) {
    const { path: r , mode: n , mtime: o , content: i113  } = e849, s = {
        path: r || "",
        mode: parseMode(n),
        mtime: parseMtime(o)
    };
    return i113 ? s.content = await t(i113) : r || (s.content = await t(e849)), s;
}
function normaliseInput$1(e850) {
    return normaliseCandidateSingle(e850, normaliseContent);
}
async function* normaliseCandidateMultiple(e851, t) {
    if ("string" == typeof e851 || e851 instanceof String || isBytes$1(e851) || isBlob$1(e851) || e851._readableState) throw errCode(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
    if (isReadableStream(e851) && (e851 = browserReadablestreamToIt(e851)), Symbol.iterator in e851 || Symbol.asyncIterator in e851) {
        const r = itPeekable(e851), { value: n , done: o  } = await r.peek();
        if (o) return void (yield* []);
        if (r.push(n), Number.isInteger(n)) throw errCode(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
        if (n._readableState) return void (yield* itMap(r, (e852)=>toFileObject({
                content: e852
            }, t)
        ));
        if (isBytes$1(n)) return void (yield toFileObject({
            content: r
        }, t));
        if (isFileObject(n) || n[Symbol.iterator] || n[Symbol.asyncIterator] || isReadableStream(n) || isBlob$1(n)) return void (yield* itMap(r, (e853)=>toFileObject(e853, t)
        ));
    }
    if (isFileObject(e851)) throw errCode(new Error("Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead"), "ERR_UNEXPECTED_INPUT");
    throw errCode(new Error("Unexpected input: " + typeof e851), "ERR_UNEXPECTED_INPUT");
}
async function toFileObject(e854, t) {
    const { path: r , mode: n , mtime: o , content: i114  } = e854, s = {
        path: r || "",
        mode: parseMode(n),
        mtime: parseMtime(o)
    };
    return i114 ? s.content = await t(i114) : r || (s.content = await t(e854)), s;
}
function normaliseInput(e855) {
    return normaliseCandidateMultiple(e855, normaliseContent);
}
function isBytes(e856) {
    return ArrayBuffer.isView(e856) || e856 instanceof ArrayBuffer;
}
function isBlob(e857) {
    return Boolean(e857.constructor) && ("Blob" === e857.constructor.name || "File" === e857.constructor.name) && "function" == typeof e857.stream;
}
function isSingle(e858) {
    return "string" == typeof e858 || e858 instanceof String || isBytes(e858) || isBlob(e858) || "_readableState" in e858;
}
function getNormaliser(e859) {
    return isSingle(e859) ? normaliseInput$1(e859) : normaliseInput(e859);
}
function notFoundError(e860) {
    return e860 = e860 || new Error("Not Found"), errCode(e860, "ERR_NOT_FOUND");
}
function abortedError(e861) {
    return e861 = e861 || new Error("Aborted"), errCode(e861, "ERR_ABORTED");
}
var ErrorsImport = Object.freeze({
    __proto__: null,
    notFoundError: notFoundError,
    abortedError: abortedError
});
const drain = async (e862)=>{
    for await (const t of e862);
};
var itDrain = drain;
const filter = async function*(e863, t) {
    for await (const r of e863)await t(r) && (yield r);
};
var itFilter = filter;
const take = async function*(e864, t) {
    let r = 0;
    if (!(t < 1)) {
        for await (const n of e864)if (yield n, r++, r === t) return;
    }
};
var itTake = take;
const sortAll = (e865, t)=>(async function*() {
        const r = await itAll(e865);
        yield* r.sort(t);
    })()
;
class BaseBlockstore {
    open() {
        return Promise.reject(new Error(".open is not implemented"));
    }
    close() {
        return Promise.reject(new Error(".close is not implemented"));
    }
    put(e, t, r) {
        return Promise.reject(new Error(".put is not implemented"));
    }
    get(e, t) {
        return Promise.reject(new Error(".get is not implemented"));
    }
    has(e, t) {
        return Promise.reject(new Error(".has is not implemented"));
    }
    delete(e, t) {
        return Promise.reject(new Error(".delete is not implemented"));
    }
    async *putMany(e866, t = {}) {
        for await (const { key: r , value: n  } of e866)await this.put(r, n, t), yield {
            key: r,
            value: n
        };
    }
    async *getMany(e867, t = {}) {
        for await (const r of e867)yield this.get(r, t);
    }
    async *deleteMany(e868, t = {}) {
        for await (const r of e868)await this.delete(r, t), yield r;
    }
    batch() {
        let e869 = [], t51 = [];
        return {
            put (t, r) {
                e869.push({
                    key: t,
                    value: r
                });
            },
            delete (e870) {
                t51.push(e870);
            },
            commit: async (r)=>{
                await itDrain(this.putMany(e869, r)), e869 = [], await itDrain(this.deleteMany(t51, r)), t51 = [];
            }
        };
    }
    async *_all(e, t) {
        throw new Error("._all is not implemented");
    }
    async *_allKeys(e, t) {
        throw new Error("._allKeys is not implemented");
    }
    query(e871, t52) {
        let r = this._all(e871, t52);
        if (null != e871.prefix && (r = itFilter(r, (t)=>t.key.toString().startsWith(e871.prefix || "")
        )), Array.isArray(e871.filters) && (r = e871.filters.reduce((e872, t)=>itFilter(e872, t)
        , r)), Array.isArray(e871.orders) && (r = e871.orders.reduce((e873, t)=>sortAll(e873, t)
        , r)), null != e871.offset) {
            let t = 0;
            r = itFilter(r, ()=>(t++) >= (e871.offset || 0)
            );
        }
        return null != e871.limit && (r = itTake(r, e871.limit)), r;
    }
    queryKeys(e874, t53) {
        let r = this._allKeys(e874, t53);
        if (null != e874.prefix && (r = itFilter(r, (t)=>t.toString().startsWith(e874.prefix || "")
        )), Array.isArray(e874.filters) && (r = e874.filters.reduce((e875, t)=>itFilter(e875, t)
        , r)), Array.isArray(e874.orders) && (r = e874.orders.reduce((e876, t)=>sortAll(e876, t)
        , r)), null != e874.offset) {
            let t = 0;
            r = itFilter(r, ()=>(t++) >= e874.offset
            );
        }
        return null != e874.limit && (r = itTake(r, e874.limit)), r;
    }
}
class MemoryBlockStore extends BaseBlockstore {
    constructor(){
        super(), this.store = new Map;
    }
    async *blocks() {
        for (const [e877, t] of this.store.entries())yield {
            cid: CID.parse(e877),
            bytes: t
        };
    }
    put(e878, t) {
        return this.store.set(e878.toString(), t), Promise.resolve();
    }
    get(e879) {
        const t = this.store.get(e879.toString());
        if (!t) throw new Error(`block with cid ${e879.toString()} no found`);
        return Promise.resolve(t);
    }
    has(e880) {
        return Promise.resolve(this.store.has(e880.toString()));
    }
    close() {
        return this.store.clear(), Promise.resolve();
    }
}
const unixfsImporterOptionsDefault = {
    cidVersion: 1,
    chunker: "fixed",
    maxChunkSize: 262144,
    hasher: sha256,
    rawLeaves: !0,
    wrapWithDirectory: !0,
    maxChildrenPerNode: 174
};
async function pack({ input: e881 , blockstore: t , hasher: r , maxChunkSize: n , maxChildrenPerNode: o , wrapWithDirectory: i115 , rawLeaves: s  }) {
    if (!e881 || Array.isArray(e881) && !e881.length) throw new Error("missing input file(s)");
    const a = t || new MemoryBlockStore, c = await itLast(pipe$1(getNormaliser(e881), (e882)=>importer(e882, a, {
            ...unixfsImporterOptionsDefault,
            hasher: r || unixfsImporterOptionsDefault.hasher,
            maxChunkSize: n || unixfsImporterOptionsDefault.maxChunkSize,
            maxChildrenPerNode: o || unixfsImporterOptionsDefault.maxChildrenPerNode,
            wrapWithDirectory: !1 !== i115 && unixfsImporterOptionsDefault.wrapWithDirectory,
            rawLeaves: null == s ? unixfsImporterOptionsDefault.rawLeaves : s
        })
    ));
    if (!c || !c.cid) throw new Error("given input could not be parsed correctly");
    const u = c.cid, { writer: f , out: l  } = await CarWriter.create([
        u
    ]), h = l[Symbol.asyncIterator]();
    let d;
    return {
        root: u,
        out: {
            [Symbol.asyncIterator] () {
                if (null != d) throw new Error("Multiple iterator not supported");
                return d = (async ()=>{
                    for await (const e883 of a.blocks())await f.put(e883);
                    await f.close(), t || await a.close();
                })(), {
                    async next () {
                        const e884 = await h.next();
                        return e884.done && await d, e884;
                    }
                };
            }
        }
    };
}
const MAX_HEADER_LENGTH = 2000, THROW_ON_MAX_HEADER_LENGTH_EXCEEDED = !1;
function hasRel(e885) {
    return e885 && e885.rel;
}
function intoRels(e886, t) {
    return t.rel.split(/\s+/).forEach(function(r) {
        e886[r] = Object.assign({}, t, {
            rel: r
        });
    }), e886;
}
function createObjects(e887, t) {
    const r = t.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
    return r && (e887[r[1]] = r[2]), e887;
}
function parseLink(e889) {
    try {
        const t = e889.match(/<?([^>]*)>(.*)/), r = t[1], n = t[2].split(";"), o = {}, i116 = new URL(r, "https://example.com");
        for (const [e888, t54] of i116.searchParams)o[e888] = t54;
        n.shift();
        let s = n.reduce(createObjects, {});
        return s = Object.assign({}, o, s), s.url = r, s;
    } catch  {
        return null;
    }
}
function checkHeader(e890, t) {
    if (!e890) return !1;
    const r = (t = t || {}).maxHeaderLength || MAX_HEADER_LENGTH, n = t.throwOnMaxHeaderLengthExceeded || THROW_ON_MAX_HEADER_LENGTH_EXCEEDED;
    if (e890.length > r) {
        if (n) throw new Error("Input string too long, it should be under " + r + " characters.");
        return !1;
    }
    return !0;
}
function parseLinkHeader(e891, t) {
    return checkHeader(e891, t) ? e891.split(/,\s*</).map(parseLink).filter(hasRel).reduce(intoRels, {}) : null;
}
const CID_CBOR_TAG$1 = 42;
function cidDecoder$1(e892) {
    if (0 !== e892[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    return CID.decode(e892.subarray(1));
}
const decodeOptions$1 = {
    allowIndefinite: !1,
    allowUndefined: !1,
    allowNaN: !1,
    allowInfinity: !1,
    allowBigInt: !0,
    strict: !0,
    useMaps: !1,
    tags: []
};
decodeOptions$1.tags[CID_CBOR_TAG$1] = cidDecoder$1;
const code$1 = 113, decode$1 = (e893)=>decode$5(e893, decodeOptions$1)
, hashFn = async function(e894) {
    return (await murmur3128.encode(e894)).slice(0, 8).reverse();
}, addLinksToHamtBucket = (e895, t, r)=>Promise.all(e895.map((e896)=>{
        if (null == e896.Name) throw new Error("Unexpected Link without a Name");
        if (2 === e896.Name.length) {
            const n = parseInt(e896.Name, 16);
            return t._putObjectAt(n, new src.Bucket({
                hash: r._options.hash,
                bits: r._options.bits
            }, t, n));
        }
        return r.put(e896.Name.substring(2), !0);
    }))
, toPrefix = (e897)=>e897.toString(16).toUpperCase().padStart(2, "0").substring(0, 2)
, toBucketPath = (e898)=>{
    let t = e898.bucket;
    const r = [];
    for(; t._parent;)r.push(t), t = t._parent;
    return r.push(t), r.reverse();
}, findShardCid = async (e900, t, r29, n16, o)=>{
    if (!n16) {
        const e899 = src.createHAMT({
            hashFn: hashFn
        });
        n16 = {
            rootBucket: e899,
            hamtDepth: 1,
            lastBucket: e899
        };
    }
    await addLinksToHamtBucket(e900.Links, n16.lastBucket, n16.rootBucket);
    const i117 = await n16.rootBucket._findNewBucketAndPos(t);
    let s = toPrefix(i117.pos);
    const a = toBucketPath(i117);
    a.length > n16.hamtDepth && (n16.lastBucket = a[n16.hamtDepth], s = toPrefix(n16.lastBucket._posAtParent));
    const c = e900.Links.find((e901)=>{
        if (null == e901.Name) return !1;
        const r = e901.Name.substring(0, 2), n = e901.Name.substring(2);
        return r === s && (!n || n === t);
    });
    if (!c) return null;
    if (null != c.Name && c.Name.substring(2) === t) return c.Hash;
    n16.hamtDepth++;
    return e900 = decode$3(await r29.get(c.Hash, o)), findShardCid(e900, t, r29, n16, o);
};
function extractDataFromBlock(e902, t, r, n) {
    const o = t + e902.length;
    return r >= o || n < t ? new Uint8Array(0) : (n >= t && n < o && (e902 = e902.slice(0, n - t)), r >= t && r < o && (e902 = e902.slice(r - t)), e902);
}
const validateOffsetAndLength = (e903, t, r)=>{
    if (t || (t = 0), t < 0) throw errCode(new Error("Offset must be greater than or equal to 0"), "ERR_INVALID_PARAMS");
    if (t > e903) throw errCode(new Error("Offset must be less than the file size"), "ERR_INVALID_PARAMS");
    if (r || 0 === r || (r = e903 - t), r < 0) throw errCode(new Error("Length must be greater than or equal to 0"), "ERR_INVALID_PARAMS");
    return t + r > e903 && (r = e903 - t), {
        offset: t,
        length: r
    };
};
async function* emitBytes(e907, t, r, n, o = 0, i118) {
    if (t instanceof Uint8Array) {
        const e904 = extractDataFromBlock(t, o, r, n);
        return e904.length && (yield e904), o += e904.length, o;
    }
    if (null == t.Data) throw errCode(new Error("no data in PBNode"), "ERR_NOT_UNIXFS");
    let s;
    try {
        s = UnixFS.unmarshal(t.Data);
    } catch (e905) {
        throw errCode(e905, "ERR_NOT_UNIXFS");
    }
    if (s.data && s.data.length) {
        const e906 = extractDataFromBlock(s.data, o, r, n);
        e906.length && (yield e906), o += s.data.length;
    }
    let a = o;
    for(let c = 0; c < t.Links.length; c++){
        const u = t.Links[c], f = o + s.blockSizes[c];
        if (r >= a && r < f || n > a && n <= f || r < a && n > f) {
            const t = await e907.get(u.Hash, {
                signal: i118.signal
            });
            let s;
            switch(u.Hash.code){
                case code$5:
                    s = await decode$3(t);
                    break;
                case code$4:
                    s = t;
                    break;
                case code$1:
                    s = await decode$1(t);
                    break;
                default:
                    throw Error(`Unsupported codec: ${u.Hash.code}`);
            }
            for await (const t55 of emitBytes(e907, s, r, n, o, i118))o += t55.length, yield t55;
        }
        o = f, a = f + 1;
    }
}
const fileContent = (e908, t, r, n17, o12, i119, s)=>function(e909 = {}) {
        const n = r.fileSize();
        if (void 0 === n) throw new Error("File was a directory");
        const { offset: o , length: i120  } = validateOffsetAndLength(n, e909.offset, e909.length);
        return emitBytes(s, t, o, o + i120, 0, e909);
    }
, directoryContent = (e910, t, r30, n, o, i121, s)=>async function*(e911 = {}) {
        const r = e911.offset || 0, a = e911.length || t.Links.length, c = t.Links.slice(r, a);
        for (const t56 of c){
            const r = await o(t56.Hash, t56.Name || "", `${n}/${t56.Name || ""}`, [], i121 + 1, s, e911);
            r.entry && (yield r.entry);
        }
    }
, hamtShardedDirectoryContent = (e912, t, r, n, o, i122, s)=>function(e913 = {}) {
        return listDirectory(t, n, o, i122, s, e913);
    }
;
async function* listDirectory(e914, t, r, n, o, i123) {
    const s = e914.Links;
    for (const a of s){
        const s = null != a.Name ? a.Name.substring(2) : null;
        if (s) {
            const e915 = await r(a.Hash, s, `${t}/${s}`, [], n + 1, o, i123);
            yield e915.entry;
        } else {
            e914 = decode$3(await o.get(a.Hash));
            for await (const s of listDirectory(e914, t, r, n, o, i123))yield s;
        }
    }
}
const findLinkCid = (e916, t)=>{
    const r = e916.Links.find((e917)=>e917.Name === t
    );
    return r && r.Hash;
}, contentExporters = {
    raw: fileContent,
    file: fileContent,
    directory: directoryContent,
    "hamt-sharded-directory": hamtShardedDirectoryContent,
    metadata: (e, t, r, n, o, i, s)=>()=>[]
    ,
    symlink: (e, t, r, n, o, i, s)=>()=>[]
}, unixFsResolver = async (e918, t, r, n, o, i124, s, a)=>{
    const c = decode$3(await s.get(e918, a));
    let u, f;
    if (t || (t = e918.toString()), null == c.Data) throw errCode(new Error("no data in PBNode"), "ERR_NOT_UNIXFS");
    try {
        u = UnixFS.unmarshal(c.Data);
    } catch (e919) {
        throw errCode(e919, "ERR_NOT_UNIXFS");
    }
    if (r || (r = t), n.length) {
        let e920;
        if (e920 = u && "hamt-sharded-directory" === u.type ? await findShardCid(c, n[0], s) : findLinkCid(c, n[0]), !e920) throw errCode(new Error("file does not exist"), "ERR_NOT_FOUND");
        const t = n.shift();
        f = {
            cid: e920,
            toResolve: n,
            name: t || "",
            path: `${r}/${t}`
        };
    }
    return {
        entry: {
            type: u.isDirectory() ? "directory" : "file",
            name: t,
            path: r,
            cid: e918,
            content: contentExporters[u.type](e918, c, u, r, o, i124, s),
            unixfs: u,
            depth: i124,
            node: c,
            size: u.fileSize()
        },
        next: f
    };
}, rawContent$1 = (e921)=>async function*(t = {}) {
        const { offset: r , length: n  } = validateOffsetAndLength(e921.length, t.offset, t.length);
        yield extractDataFromBlock(e921, 0, r, r + n);
    }
, resolve$3 = async (e922, t, r, n, o, i125, s, a)=>{
    if (n.length) throw errCode(new Error(`No link named ${r} found in raw node ${e922}`), "ERR_NOT_FOUND");
    const c = await s.get(e922, a);
    return {
        entry: {
            type: "raw",
            name: t,
            path: r,
            cid: e922,
            content: rawContent$1(c),
            depth: i125,
            size: c.length,
            node: c
        }
    };
}, resolve$2 = async (e923, t, r, n, o, i126, s, a)=>{
    const c = await s.get(e923), u = decode$1(c);
    let f = u, l = r;
    for(; n.length;){
        const o = n[0];
        if (!(o in f)) throw errCode(new Error(`No property named ${o} found in cbor node ${e923}`), "ERR_NO_PROP");
        {
            n.shift(), l = `${l}/${o}`;
            const s = CID.asCID(f[o]);
            if (s) return {
                entry: {
                    type: "object",
                    name: t,
                    path: r,
                    cid: e923,
                    node: c,
                    depth: i126,
                    size: c.length,
                    content: async function*() {
                        yield u;
                    }
                },
                next: {
                    cid: s,
                    name: o,
                    path: l,
                    toResolve: n
                }
            };
            f = f[o];
        }
    }
    return {
        entry: {
            type: "object",
            name: t,
            path: r,
            cid: e923,
            node: c,
            depth: i126,
            size: c.length,
            content: async function*() {
                yield u;
            }
        }
    };
}, rawContent = (e924)=>async function*(t = {}) {
        const { offset: r , length: n  } = validateOffsetAndLength(e924.length, t.offset, t.length);
        yield extractDataFromBlock(e924, 0, r, r + n);
    }
, resolve$1 = async (e925, t, r, n, o, i127, s, a)=>{
    if (n.length) throw errCode(new Error(`No link named ${r} found in raw node ${e925}`), "ERR_NOT_FOUND");
    const c = await decode$7(e925.multihash.bytes);
    return {
        entry: {
            type: "identity",
            name: t,
            path: r,
            cid: e925,
            content: rawContent(c.digest),
            depth: i127,
            size: c.digest.length,
            node: c.digest
        }
    };
}, resolvers = {
    [code$5]: unixFsResolver,
    [code$4]: resolve$3,
    [code$1]: resolve$2,
    [identity.code]: resolve$1
};
function resolve(e926, t, r, n, o, i128, s) {
    const a = resolvers[e926.code];
    if (!a) throw errCode(new Error(`No resolver for code ${e926.code}`), "ERR_NO_RESOLVER");
    return a(e926, t, r, n, resolve, o, i128, s);
}
const toPathComponents = (e927 = "")=>(e927.trim().match(/([^\\^/]|\\\/)+/g) || []).filter(Boolean)
, cidAndRest = (e928)=>{
    if (e928 instanceof Uint8Array) return {
        cid: CID.decode(e928),
        toResolve: []
    };
    const t = CID.asCID(e928);
    if (t) return {
        cid: t,
        toResolve: []
    };
    if ("string" == typeof e928) {
        0 === e928.indexOf("/ipfs/") && (e928 = e928.substring(6));
        const t = toPathComponents(e928);
        return {
            cid: CID.parse(t[0]),
            toResolve: t.slice(1)
        };
    }
    throw errCode(new Error(`Unknown path type ${e928}`), "ERR_BAD_PATH");
};
async function* walkPath(e929, t, r = {}) {
    let { cid: n , toResolve: o  } = cidAndRest(e929), i129 = n.toString(), s = i129;
    const a = o.length;
    for(;;){
        const c = await resolve(n, i129, s, o, a, t, r);
        if (!c.entry && !c.next) throw errCode(new Error(`Could not resolve ${e929}`), "ERR_NOT_FOUND");
        if (c.entry && (yield c.entry), !c.next) return;
        o = c.next.toResolve, n = c.next.cid, i129 = c.next.name, s = c.next.path;
    }
}
async function exporter(e930, t, r = {}) {
    const n = await itLast(walkPath(e930, t, r));
    if (!n) throw errCode(new Error(`Could not resolve ${e930}`), "ERR_NOT_FOUND");
    return n;
}
async function* recursive(e932, t57, r31 = {}) {
    const n18 = await exporter(e932, t57, r31);
    if (n18 && (yield n18, "directory" === n18.type)) for await (const e931 of async function* e933(t, r) {
        for await (const n of t.content(r))yield n, n instanceof Uint8Array || "directory" === n.type && (yield* e933(n, r));
    }(n18, r31))yield e931;
}
function equals(e934, t) {
    if (e934 === t) return !0;
    if (e934.byteLength !== t.byteLength) return !1;
    for(let r = 0; r < e934.byteLength; r++)if (e934[r] !== t[r]) return !1;
    return !0;
}
class VerifyingGetOnlyBlockStore extends BaseBlockstore {
    constructor(e935){
        super(), this.store = e935;
    }
    async get(e936) {
        const t = await this.store.get(e936);
        if (!t) throw new Error(`Incomplete CAR. Block missing for CID ${e936}`);
        if (!isValid({
            cid: e936,
            bytes: t
        })) throw new Error(`Invalid CAR. Hash of block data does not match CID ${e936}`);
        return t;
    }
    static fromBlockstore(e937) {
        return new VerifyingGetOnlyBlockStore(e937);
    }
    static fromCarReader(e938) {
        return new VerifyingGetOnlyBlockStore({
            get: async (t)=>{
                const r = await e938.get(t);
                return null == r ? void 0 : r.bytes;
            }
        });
    }
}
async function isValid({ cid: e939 , bytes: t  }) {
    return equals((await sha256.digest(t)).digest, e939.multihash.digest);
}
async function* unpackStream(e942, { roots: t , blockstore: r  } = {}) {
    const n = await CarBlockIterator.fromIterable(asAsyncIterable(e942)), o = r || new MemoryBlockStore;
    for await (const e940 of n)await o.put(e940.cid, e940.bytes);
    const i130 = VerifyingGetOnlyBlockStore.fromBlockstore(o);
    t && 0 !== t.length || (t = await n.getRoots());
    for (const e941 of t)yield* recursive(e941, i130);
}
function asAsyncIterable(e943) {
    return Symbol.asyncIterator in e943 ? e943 : browserReadablestreamToIt(e943);
}
const readonly = ({ enumerable: e944 = !0 , configurable: t = !1  } = {})=>({
        enumerable: e944,
        configurable: t,
        writable: !1
    })
, links = function*(e945, t) {
    if (null != e945 && !(e945 instanceof Uint8Array)) for (const [r, n] of Object.entries(e945)){
        const e946 = [
            ...t,
            r
        ];
        if (null != n && "object" == typeof n) {
            if (Array.isArray(n)) for (const [t, r] of n.entries()){
                const n = [
                    ...e946,
                    t
                ], o = CID.asCID(r);
                o ? yield [
                    n.join("/"),
                    o
                ] : "object" == typeof r && (yield* links(r, n));
            }
            else {
                const t = CID.asCID(n);
                t ? yield [
                    e946.join("/"),
                    t
                ] : yield* links(n, e946);
            }
        }
    }
}, tree = function*(e947, t) {
    if (null != e947) for (const [r, n] of Object.entries(e947)){
        const e948 = [
            ...t,
            r
        ];
        if (yield e948.join("/"), !(null == n || n instanceof Uint8Array || "object" != typeof n || CID.asCID(n))) {
            if (Array.isArray(n)) for (const [t, r] of n.entries()){
                const n = [
                    ...e948,
                    t
                ];
                yield n.join("/"), "object" != typeof r || CID.asCID(r) || (yield* tree(r, n));
            }
            else yield* tree(n, e948);
        }
    }
}, get = (e950, t)=>{
    let r = e950;
    for (const [e949, n] of t.entries()){
        if (r = r[n], null == r) throw new Error(`Object has no property at ${t.slice(0, e949 + 1).map((e951)=>`[${JSON.stringify(e951)}]`
        ).join("")}`);
        const o = CID.asCID(r);
        if (o) return {
            value: o,
            remaining: t.slice(e949 + 1).join("/")
        };
    }
    return {
        value: r
    };
};
class Block {
    constructor({ cid: e952 , bytes: t , value: r  }){
        if (!e952 || !t || void 0 === r) throw new Error("Missing required argument");
        this.cid = e952, this.bytes = t, this.value = r, this.asBlock = this, Object.defineProperties(this, {
            cid: readonly(),
            bytes: readonly(),
            value: readonly(),
            asBlock: readonly()
        });
    }
    links() {
        return links(this.value, []);
    }
    tree() {
        return tree(this.value, []);
    }
    get(e953 = "/") {
        return get(this.value, e953.split("/").filter(Boolean));
    }
}
const CID_CBOR_TAG = 42;
function cidEncoder(e954) {
    if (e954.asCID !== e954) return null;
    const t = CID.asCID(e954);
    if (!t) return null;
    const r = new Uint8Array(t.bytes.byteLength + 1);
    return r.set(t.bytes, 1), [
        new Token(Type.tag, CID_CBOR_TAG),
        new Token(Type.bytes, r)
    ];
}
function undefinedEncoder() {
    throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
}
function numberEncoder(e955) {
    if (Number.isNaN(e955)) throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
    if (e955 === 1 / 0 || e955 === -1 / 0) throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
    return null;
}
const encodeOptions = {
    float64: !0,
    typeEncoders: {
        Object: cidEncoder,
        undefined: undefinedEncoder,
        number: numberEncoder
    }
};
function cidDecoder(e956) {
    if (0 !== e956[0]) throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
    return CID.decode(e956.subarray(1));
}
const decodeOptions = {
    allowIndefinite: !1,
    allowUndefined: !1,
    allowNaN: !1,
    allowInfinity: !1,
    allowBigInt: !0,
    strict: !0,
    useMaps: !1,
    tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = "dag-cbor", code = 113, encode = (e957)=>encode$5(e957, encodeOptions)
, decode = (e958)=>decode$5(e958, decodeOptions)
;
var cbor = Object.freeze({
    __proto__: null,
    name: name,
    code: code,
    encode: encode,
    decode: decode
});
class TreewalkCarSplitter {
    constructor(e959, t, r = {}){
        if ("number" != typeof t || t <= 0) throw new Error("invalid target chunk size");
        this._reader = e959, this._targetSize = t, this._decoders = [
            pb,
            raw,
            cbor,
            ...r.decoders || []
        ];
    }
    async *cars() {
        const e960 = await this._reader.getRoots();
        if (1 !== e960.length) throw new Error(`unexpected number of roots: ${e960.length}`);
        let t;
        for await (const r of this._cars(e960[0]))t = r.channel, r.out && (yield r.out);
        if (!t) throw new Error("missing CAR writer channel");
        t.writer.close(), yield t.out;
    }
    async _get(e961) {
        const t58 = await this._reader.get(e961);
        if (!t58) throw new Error(`missing block for ${e961}`);
        const { bytes: r  } = t58, n = this._decoders.find((t)=>t.code === e961.code
        );
        if (!n) throw new Error(`missing decoder for ${e961.code}`);
        return new Block({
            cid: e961,
            bytes: r,
            value: n.decode(r)
        });
    }
    async *_cars(e963, t = [], r) {
        const n = await this._get(e963);
        if ((r = r || Object.assign(CarWriter.create(e963), {
            size: 0
        })).size > 0 && r.size + n.bytes.byteLength >= this._targetSize) {
            r.writer.close();
            const { out: e964  } = r;
            r = newCar(t), yield {
                channel: r,
                out: e964
            };
        }
        t = t.concat(n), r.size += n.bytes.byteLength, r.writer.put(n);
        for (const [, e962] of n.links())for await (const n19 of this._cars(e962, t, r))r = n19.channel, yield n19;
        if (!r) throw new Error("missing CAR writer channel");
        yield {
            channel: r
        };
    }
    static async fromIterable(e965, t, r) {
        const n = await CarReader.fromIterable(e965);
        return new TreewalkCarSplitter(n, t, r);
    }
    static async fromBlob(e966, t, r) {
        const n = await e966.arrayBuffer(), o = await CarReader.fromBytes(new Uint8Array(n));
        return new TreewalkCarSplitter(o, t, r);
    }
}
function newCar(e967) {
    const t59 = Object.assign(CarWriter.create(e967[0].cid), {
        size: e967.reduce((e968, t)=>e968 + t.bytes.byteLength
        , 0)
    });
    for (const r of e967)t59.writer.put(r);
    return t59;
}
async function getFilesFromPath() {
    throw new Error("Unsupported in this environment");
}
async function* filesFromPath() {
    throw new Error("Unsupported in this environment");
}
var throttledQueue$1 = {
    exports: {}
};
!function(e969, t60) {
    function r32(e970, t, r33) {
        void 0 === r33 && (r33 = !1), r33 && (t /= e970, e970 = 1);
        var n, o = [], i131 = 0, s = 0, a = function() {
            var r = i131 + t, c = Date.now();
            if (c < r) return void 0 !== n && clearTimeout(n), void (n = setTimeout(a, r - c));
            i131 = c, s = 0;
            for(var u = 0, f = o.splice(0, e970); u < f.length; u++){
                var l = f[u];
                s++, l();
            }
            n = o.length ? setTimeout(a, t) : void 0;
        };
        return function(r) {
            return new Promise(function(c, u) {
                var f = function() {
                    return Promise.resolve().then(r).then(c).catch(u);
                }, l = Date.now();
                void 0 === n && l - i131 > t && (i131 = l, s = 0), (s++) < e970 ? f() : (o.push(f), void 0 === n && (n = setTimeout(a, i131 + t - l)));
            });
        };
    }
    Object.defineProperty(t60, "__esModule", {
        value: !0
    }), e969.exports = r32, t60.default = r32;
}(throttledQueue$1, throttledQueue$1.exports);
var throttledQueue = getDefaultExportFromCjs(throttledQueue$1.exports);
const fetch = globalThis.fetch, Blob$1 = globalThis.Blob, File = globalThis.File, Blockstore = MemoryBlockStore, MAX_PUT_RETRIES = 5, MAX_CONCURRENT_UPLOADS = 3, DEFAULT_CHUNK_SIZE = 10485760, MAX_BLOCK_SIZE = 1048576, MAX_CHUNK_SIZE = 104857600, RATE_LIMIT_REQUESTS = 30, RATE_LIMIT_PERIOD = 10000;
function createRateLimiter() {
    const e971 = throttledQueue(RATE_LIMIT_REQUESTS, RATE_LIMIT_PERIOD);
    return ()=>e971(()=>{})
    ;
}
const globalRateLimiter = createRateLimiter();
class Web3Storage {
    constructor({ token: e972 , endpoint: t = new URL("https://api.web3.storage") , rateLimiter: r  }){
        this.token = e972, this.endpoint = t, this.rateLimiter = r || createRateLimiter();
    }
    static headers(e973) {
        if (!e973) throw new Error("missing token");
        return {
            Authorization: `Bearer ${e973}`,
            "X-Client": "web3.storage/js"
        };
    }
    static async put({ endpoint: e974 , token: t , rateLimiter: r = globalRateLimiter  }, n, { onRootCidReady: o , onStoredChunk: i132 , maxRetries: s = MAX_PUT_RETRIES , maxChunkSize: a = DEFAULT_CHUNK_SIZE , wrapWithDirectory: c = !0 , name: u  } = {}) {
        if (a >= MAX_CHUNK_SIZE || a < MAX_BLOCK_SIZE) throw new Error("maximum chunk size must be less than 100MiB and greater than or equal to 1MB");
        const f = new Blockstore;
        try {
            const { out: l , root: h  } = await pack({
                input: Array.from(n).map(toImportCandidate),
                blockstore: f,
                wrapWithDirectory: c,
                maxChunkSize: MAX_BLOCK_SIZE,
                maxChildrenPerNode: 1024
            });
            o && o(h.toString());
            const d = await CarReader.fromIterable(l);
            return await Web3Storage.putCar({
                endpoint: e974,
                token: t,
                rateLimiter: r
            }, d, {
                onStoredChunk: i132,
                maxRetries: s,
                maxChunkSize: a,
                name: u
            });
        } finally{
            await f.close();
        }
    }
    static async putCar({ endpoint: e976 , token: t61 , rateLimiter: r34 = globalRateLimiter  }, n20, { name: o13 , onStoredChunk: i133 , maxRetries: s = MAX_PUT_RETRIES , maxChunkSize: a = DEFAULT_CHUNK_SIZE , decoders: c  } = {}) {
        if (a >= MAX_CHUNK_SIZE || a < MAX_BLOCK_SIZE) throw new Error("maximum chunk size must be less than 100MiB and greater than or equal to 1MB");
        const u = a, f = new URL("car", e976);
        let l = Web3Storage.headers(t61);
        o13 && (l = {
            ...l,
            "X-Name": encodeURIComponent(o13)
        });
        const h = await n20.getRoots();
        if (null == h[0]) throw new Error("missing root CID");
        if (h.length > 1) throw new Error("too many roots");
        const d = h[0].toString(), p = new TreewalkCarSplitter(n20, u, {
            decoders: c
        }), y = transform(MAX_CONCURRENT_UPLOADS, async (e977)=>{
            const t62 = [];
            for await (const r of e977)t62.push(r);
            const n = new Blob$1(t62, {
                type: "application/vnd.ipld.car"
            }), o = await pRetry$1(async ()=>{
                await r34();
                const e978 = await fetch(f.toString(), {
                    method: "POST",
                    headers: l,
                    body: n
                });
                if (429 === e978.status) throw new Error("rate limited");
                const t = await e978.json();
                if (!e978.ok) throw new Error(t.message);
                if (t.cid !== d) throw new Error(`root CID mismatch, expected: ${d}, received: ${t.cid}`);
                return t.cid;
            }, {
                retries: s
            });
            return i133 && i133(n.size), o;
        });
        for await (const e975 of y(p.cars()));
        return d;
    }
    static async get({ endpoint: e979 , token: t , rateLimiter: r = globalRateLimiter  }, n) {
        const o = new URL(`car/${n}`, e979);
        await r();
        const i134 = await fetch(o.toString(), {
            method: "GET",
            headers: Web3Storage.headers(t)
        });
        if (429 === i134.status) throw new Error("rate limited");
        return toWeb3Response(i134);
    }
    static async delete({ endpoint: e980 , token: t , rateLimiter: r = globalRateLimiter  }, n) {
        throw console.log("Not deleting", n, e980, t, r), Error(".delete not implemented yet");
    }
    static async status({ endpoint: e981 , token: t , rateLimiter: r = globalRateLimiter  }, n) {
        const o = new URL(`status/${n}`, e981);
        await r();
        const i135 = await fetch(o.toString(), {
            method: "GET",
            headers: Web3Storage.headers(t)
        });
        if (429 === i135.status) throw new Error("rate limited");
        if (404 !== i135.status) {
            if (!i135.ok) throw new Error(i135.statusText);
            return i135.json();
        }
    }
    static async *list(e982, { before: t63 = (new Date).toISOString() , maxResults: r35 = 1 / 0  } = {}) {
        let n21 = 0;
        const o14 = r35 > 100 ? 100 : r35;
        for await (const i136 of paginator(async function({ endpoint: e983 , token: t , rateLimiter: r = globalRateLimiter  }, { before: n , size: o  }) {
            const i137 = new URLSearchParams({
                before: n,
                size: o.toString()
            }), s = new URL(`user/uploads?${i137}`, e983);
            return await r(), fetch(s.toString(), {
                method: "GET",
                headers: {
                    ...Web3Storage.headers(t),
                    "Access-Control-Request-Headers": "Link"
                }
            });
        }, e982, {
            before: t63,
            size: o14
        })){
            if (!i136.ok) {
                if (429 === i136.status) throw new Error("rate limited");
                const e984 = await i136.json();
                throw new Error(`${i136.status} ${i136.statusText} ${e984 ? "- " + e984.message : ""}`);
            }
            const e985 = await i136.json();
            for (const t of e985){
                if (++n21 > r35) return;
                yield t;
            }
        }
    }
    put(e986, t) {
        return Web3Storage.put(this, e986, t);
    }
    putCar(e987, t) {
        return Web3Storage.putCar(this, e987, t);
    }
    get(e988) {
        return Web3Storage.get(this, e988);
    }
    delete(e989) {
        return Web3Storage.delete(this, e989);
    }
    status(e990) {
        return Web3Storage.status(this, e990);
    }
    list(e991) {
        return Web3Storage.list(this, e991);
    }
}
async function toWeb3File({ content: e992 , path: t , cid: r  }) {
    const n = [];
    for await (const t64 of e992())n.push(t64);
    const o = new File(n, toFilenameWithPath(t));
    return Object.assign(o, {
        cid: r.toString()
    });
}
function toFilenameWithPath(e993) {
    const t = e993.indexOf("/");
    return -1 === t ? e993 : e993.substring(t + 1);
}
function toWeb3Response(e994) {
    const t65 = Object.assign(e994, {
        unixFsIterator: async function*() {
            if (!e994.ok) throw new Error(`Response was not ok: ${e994.status} ${e994.statusText} - Check for { "ok": false } on the Response object before calling .unixFsIterator`);
            if (!e994.body) throw new Error("No body on response");
            const t = new Blockstore;
            try {
                for await (const r of unpackStream(e994.body, {
                    blockstore: t
                }))yield r;
            } finally{
                await t.close();
            }
        },
        files: async ()=>{
            if (!e994.ok) throw new Error(`Response was not ok: ${e994.status} ${e994.statusText} - Check for { "ok": false } on the Response object before calling .files`);
            const r = [];
            for await (const e995 of t65.unixFsIterator()){
                if ("directory" === e995.type) continue;
                const t = await toWeb3File(e995);
                r.push(t);
            }
            return r;
        }
    });
    return t65;
}
function toImportCandidate(e996) {
    let t;
    return {
        path: e996.name,
        get content () {
            return t = t || e996.stream(), t;
        }
    };
}
async function* paginator(e997, t, r) {
    let n = await e997(t, r);
    yield n;
    let o = parseLinkHeader(n.headers.get("Link") || "");
    for(; o && o.next;)n = await e997(t, o.next), yield n, o = parseLinkHeader(n.headers.get("Link") || "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequireebd8")

//# sourceMappingURL=index.975ef6c8.js.map
