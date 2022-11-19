/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.24.0(afaa4944045c8ccfac90521f349bce7684b89fba)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/
(function() {
    var z = ["require", "exports", "vs/editor/common/core/position", "vs/base/common/platform", "vs/base/common/strings", "vs/editor/common/core/range", "vs/base/common/errors", "vs/base/common/event", "vs/base/common/diff/diff", "vs/base/common/stopwatch", "vs/base/common/uint", "vs/base/common/uri", "vs/base/common/lifecycle", "vs/base/common/types", "vs/base/common/linkedList", "vs/base/common/hash", "vs/base/common/iterator", "vs/base/common/process", "vs/base/common/path", "vs/base/common/keyCodes", "vs/editor/common/model/mirrorTextModel", "vs/editor/common/core/characterClassifier", "vs/base/common/diff/diffChange", "vs/base/common/cancellation", "vs/editor/common/core/selection", "vs/editor/common/core/token", "vs/editor/common/diff/diffComputer", "vs/editor/common/model/wordHelper", "vs/editor/common/modes/linkComputer", "vs/editor/common/modes/supports/inplaceReplaceSupport", "vs/editor/common/standalone/standaloneEnums", "vs/editor/common/standalone/standaloneBase", "vs/editor/common/viewModel/prefixSumComputer", "vs/base/common/worker/simpleWorker", "vs/editor/common/services/editorSimpleWorker"],
        G = function(I) { for (var t = [], E = 0, M = I.length; E < M; E++) t[E] = z[I[E]]; return t };
    "use strict";
    var ce = this,
        fe = typeof global == "object" ? global : {},
        X;
    (function(I) {
        I.global = ce;
        var t = function() {
            function E() { this._detected = !1, this._isWindows = !1, this._isNode = !1, this._isElectronRenderer = !1, this._isWebWorker = !1 }
            return Object.defineProperty(E.prototype, "isWindows", { get: function() { return this._detect(), this._isWindows }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "isNode", { get: function() { return this._detect(), this._isNode }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "isElectronRenderer", { get: function() { return this._detect(), this._isElectronRenderer }, enumerable: !1, configurable: !0 }), Object.defineProperty(E.prototype, "isWebWorker", { get: function() { return this._detect(), this._isWebWorker }, enumerable: !1, configurable: !0 }), E.prototype._detect = function() { this._detected || (this._detected = !0, this._isWindows = E._isWindows(), this._isNode = typeof module != "undefined" && !!module.exports, this._isElectronRenderer = typeof process != "undefined" && typeof process.versions != "undefined" && typeof process.versions.electron != "undefined" && process.type === "renderer", this._isWebWorker = typeof I.global.importScripts == "function") }, E._isWindows = function() { return typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0 ? !0 : typeof process != "undefined" ? process.platform === "win32" : !1 }, E
        }();
        I.Environment = t
    })(X || (X = {}));
    var X;
    (function(I) {
        var t = function() {
            function p(o, h, u) { this.type = o, this.detail = h, this.timestamp = u }
            return p
        }();
        I.LoaderEvent = t;
        var E = function() {
            function p(o) { this._events = [new t(1, "", o)] }
            return p.prototype.record = function(o, h) { this._events.push(new t(o, h, I.Utilities.getHighPerformanceTimestamp())) }, p.prototype.getEvents = function() { return this._events }, p
        }();
        I.LoaderEventRecorder = E;
        var M = function() {
            function p() {}
            return p.prototype.record = function(o, h) {}, p.prototype.getEvents = function() { return [] }, p.INSTANCE = new p, p
        }();
        I.NullLoaderEventRecorder = M
    })(X || (X = {}));
    var X;
    (function(I) {
        var t = function() {
            function E() {}
            return E.fileUriToFilePath = function(M, p) { if (p = decodeURI(p).replace(/%23/g, "#"), M) { if (/^file:\/\/\//.test(p)) return p.substr(8); if (/^file:\/\//.test(p)) return p.substr(5) } else if (/^file:\/\//.test(p)) return p.substr(7); return p }, E.startsWith = function(M, p) { return M.length >= p.length && M.substr(0, p.length) === p }, E.endsWith = function(M, p) { return M.length >= p.length && M.substr(M.length - p.length) === p }, E.containsQueryString = function(M) { return /^[^\#]*\?/gi.test(M) }, E.isAbsolutePath = function(M) { return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(M) }, E.forEachProperty = function(M, p) { if (M) { var o = void 0; for (o in M) M.hasOwnProperty(o) && p(o, M[o]) } }, E.isEmpty = function(M) { var p = !0; return E.forEachProperty(M, function() { p = !1 }), p }, E.recursiveClone = function(M) { if (!M || typeof M != "object" || M instanceof RegExp || !Array.isArray(M) && Object.getPrototypeOf(M) !== Object.prototype) return M; var p = Array.isArray(M) ? [] : {}; return E.forEachProperty(M, function(o, h) { h && typeof h == "object" ? p[o] = E.recursiveClone(h) : p[o] = h }), p }, E.generateAnonymousModule = function() { return "===anonymous" + E.NEXT_ANONYMOUS_ID++ + "===" }, E.isAnonymousModule = function(M) { return E.startsWith(M, "===anonymous") }, E.getHighPerformanceTimestamp = function() { return this.PERFORMANCE_NOW_PROBED || (this.PERFORMANCE_NOW_PROBED = !0, this.HAS_PERFORMANCE_NOW = I.global.performance && typeof I.global.performance.now == "function"), this.HAS_PERFORMANCE_NOW ? I.global.performance.now() : Date.now() }, E.NEXT_ANONYMOUS_ID = 1, E.PERFORMANCE_NOW_PROBED = !1, E.HAS_PERFORMANCE_NOW = !1, E
        }();
        I.Utilities = t
    })(X || (X = {}));
    var X;
    (function(I) {
        function t(p) { if (p instanceof Error) return p; var o = new Error(p.message || String(p) || "Unknown Error"); return p.stack && (o.stack = p.stack), o }
        I.ensureError = t;
        var E = function() {
            function p() {}
            return p.validateConfigurationOptions = function(o) {
                function h(s) { if (s.phase === "loading") { console.error('Loading "' + s.moduleId + '" failed'), console.error(s), console.error("Here are the modules that depend on it:"), console.error(s.neededBy); return } if (s.phase === "factory") { console.error('The factory method of "' + s.moduleId + '" has thrown an exception'), console.error(s); return } }
                if (o = o || {}, typeof o.baseUrl != "string" && (o.baseUrl = ""), typeof o.isBuild != "boolean" && (o.isBuild = !1), typeof o.paths != "object" && (o.paths = {}), typeof o.config != "object" && (o.config = {}), typeof o.catchError == "undefined" && (o.catchError = !1), typeof o.recordStats == "undefined" && (o.recordStats = !1), typeof o.urlArgs != "string" && (o.urlArgs = ""), typeof o.onError != "function" && (o.onError = h), Array.isArray(o.ignoreDuplicateModules) || (o.ignoreDuplicateModules = []), o.baseUrl.length > 0 && (I.Utilities.endsWith(o.baseUrl, "/") || (o.baseUrl += "/")), typeof o.cspNonce != "string" && (o.cspNonce = ""), typeof o.preferScriptTags == "undefined" && (o.preferScriptTags = !1), Array.isArray(o.nodeModules) || (o.nodeModules = []), o.nodeCachedData && typeof o.nodeCachedData == "object" && (typeof o.nodeCachedData.seed != "string" && (o.nodeCachedData.seed = "seed"), (typeof o.nodeCachedData.writeDelay != "number" || o.nodeCachedData.writeDelay < 0) && (o.nodeCachedData.writeDelay = 1e3 * 7), !o.nodeCachedData.path || typeof o.nodeCachedData.path != "string")) {
                    var u = t(new Error("INVALID cached data configuration, 'path' MUST be set"));
                    u.phase = "configuration", o.onError(u), o.nodeCachedData = void 0
                }
                return o
            }, p.mergeConfigurationOptions = function(o, h) { o === void 0 && (o = null), h === void 0 && (h = null); var u = I.Utilities.recursiveClone(h || {}); return I.Utilities.forEachProperty(o, function(s, f) { s === "ignoreDuplicateModules" && typeof u.ignoreDuplicateModules != "undefined" ? u.ignoreDuplicateModules = u.ignoreDuplicateModules.concat(f) : s === "paths" && typeof u.paths != "undefined" ? I.Utilities.forEachProperty(f, function(S, a) { return u.paths[S] = a }) : s === "config" && typeof u.config != "undefined" ? I.Utilities.forEachProperty(f, function(S, a) { return u.config[S] = a }) : u[s] = I.Utilities.recursiveClone(f) }), p.validateConfigurationOptions(u) }, p
        }();
        I.ConfigurationOptionsUtil = E;
        var M = function() {
            function p(o, h) {
                if (this._env = o, this.options = E.mergeConfigurationOptions(h), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), this.options.baseUrl === "") {
                    if (this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename && this._env.isNode) {
                        var u = this.options.nodeRequire.main.filename,
                            s = Math.max(u.lastIndexOf("/"), u.lastIndexOf("\\"));
                        this.options.baseUrl = u.substring(0, s + 1)
                    }
                    if (this.options.nodeMain && this._env.isNode) {
                        var u = this.options.nodeMain,
                            s = Math.max(u.lastIndexOf("/"), u.lastIndexOf("\\"));
                        this.options.baseUrl = u.substring(0, s + 1)
                    }
                }
            }
            return p.prototype._createIgnoreDuplicateModulesMap = function() { this.ignoreDuplicateModulesMap = {}; for (var o = 0; o < this.options.ignoreDuplicateModules.length; o++) this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[o]] = !0 }, p.prototype._createNodeModulesMap = function() {
                this.nodeModulesMap = Object.create(null);
                for (var o = 0, h = this.options.nodeModules; o < h.length; o++) {
                    var u = h[o];
                    this.nodeModulesMap[u] = !0
                }
            }, p.prototype._createSortedPathsRules = function() {
                var o = this;
                this.sortedPathsRules = [], I.Utilities.forEachProperty(this.options.paths, function(h, u) { Array.isArray(u) ? o.sortedPathsRules.push({ from: h, to: u }) : o.sortedPathsRules.push({ from: h, to: [u] }) }), this.sortedPathsRules.sort(function(h, u) { return u.from.length - h.from.length })
            }, p.prototype.cloneAndMerge = function(o) { return new p(this._env, E.mergeConfigurationOptions(o, this.options)) }, p.prototype.getOptionsLiteral = function() { return this.options }, p.prototype._applyPaths = function(o) {
                for (var h, u = 0, s = this.sortedPathsRules.length; u < s; u++)
                    if (h = this.sortedPathsRules[u], I.Utilities.startsWith(o, h.from)) { for (var f = [], S = 0, a = h.to.length; S < a; S++) f.push(h.to[S] + o.substr(h.from.length)); return f }
                return [o]
            }, p.prototype._addUrlArgsToUrl = function(o) { return I.Utilities.containsQueryString(o) ? o + "&" + this.options.urlArgs : o + "?" + this.options.urlArgs }, p.prototype._addUrlArgsIfNecessaryToUrl = function(o) { return this.options.urlArgs ? this._addUrlArgsToUrl(o) : o }, p.prototype._addUrlArgsIfNecessaryToUrls = function(o) {
                if (this.options.urlArgs)
                    for (var h = 0, u = o.length; h < u; h++) o[h] = this._addUrlArgsToUrl(o[h]);
                return o
            }, p.prototype.moduleIdToPaths = function(o) {
                var h = this.nodeModulesMap[o] === !0 || this.options.amdModulesPattern instanceof RegExp && !this.options.amdModulesPattern.test(o);
                if (h) return this.isBuild() ? ["empty:"] : ["node|" + o];
                var u = o,
                    s;
                if (!I.Utilities.endsWith(u, ".js") && !I.Utilities.isAbsolutePath(u)) { s = this._applyPaths(u); for (var f = 0, S = s.length; f < S; f++) this.isBuild() && s[f] === "empty:" || (I.Utilities.isAbsolutePath(s[f]) || (s[f] = this.options.baseUrl + s[f]), !I.Utilities.endsWith(s[f], ".js") && !I.Utilities.containsQueryString(s[f]) && (s[f] = s[f] + ".js")) } else !I.Utilities.endsWith(u, ".js") && !I.Utilities.containsQueryString(u) && (u = u + ".js"), s = [u];
                return this._addUrlArgsIfNecessaryToUrls(s)
            }, p.prototype.requireToUrl = function(o) { var h = o; return I.Utilities.isAbsolutePath(h) || (h = this._applyPaths(h)[0], I.Utilities.isAbsolutePath(h) || (h = this.options.baseUrl + h)), this._addUrlArgsIfNecessaryToUrl(h) }, p.prototype.isBuild = function() { return this.options.isBuild }, p.prototype.isDuplicateMessageIgnoredFor = function(o) { return this.ignoreDuplicateModulesMap.hasOwnProperty(o) }, p.prototype.getConfigForModule = function(o) { if (this.options.config) return this.options.config[o] }, p.prototype.shouldCatchError = function() { return this.options.catchError }, p.prototype.shouldRecordStats = function() { return this.options.recordStats }, p.prototype.onError = function(o) { this.options.onError(o) }, p
        }();
        I.Configuration = M
    })(X || (X = {}));
    var X;
    (function(I) {
        var t = function() {
                function u(s) { this._env = s, this._scriptLoader = null, this._callbackMap = {} }
                return u.prototype.load = function(s, f, S, a) {
                    var _ = this;
                    if (!this._scriptLoader)
                        if (this._env.isWebWorker) this._scriptLoader = new M;
                        else if (this._env.isElectronRenderer) {
                        var m = s.getConfig().getOptionsLiteral().preferScriptTags;
                        m ? this._scriptLoader = new E : this._scriptLoader = new p(this._env)
                    } else this._env.isNode ? this._scriptLoader = new p(this._env) : this._scriptLoader = new E;
                    var g = { callback: S, errorback: a };
                    if (this._callbackMap.hasOwnProperty(f)) { this._callbackMap[f].push(g); return }
                    this._callbackMap[f] = [g], this._scriptLoader.load(s, f, function() { return _.triggerCallback(f) }, function(i) { return _.triggerErrorback(f, i) })
                }, u.prototype.triggerCallback = function(s) {
                    var f = this._callbackMap[s];
                    delete this._callbackMap[s];
                    for (var S = 0; S < f.length; S++) f[S].callback()
                }, u.prototype.triggerErrorback = function(s, f) {
                    var S = this._callbackMap[s];
                    delete this._callbackMap[s];
                    for (var a = 0; a < S.length; a++) S[a].errorback(f)
                }, u
            }(),
            E = function() {
                function u() {}
                return u.prototype.attachListeners = function(s, f, S) {
                    var a = function() { s.removeEventListener("load", _), s.removeEventListener("error", m) },
                        _ = function(g) { a(), f() },
                        m = function(g) { a(), S(g) };
                    s.addEventListener("load", _), s.addEventListener("error", m)
                }, u.prototype.load = function(s, f, S, a) {
                    if (/^node\|/.test(f)) {
                        var _ = s.getConfig().getOptionsLiteral(),
                            m = o(s.getRecorder(), _.nodeRequire || I.global.nodeRequire),
                            g = f.split("|"),
                            i = null;
                        try { i = m(g[1]) } catch (n) { a(n); return }
                        s.enqueueDefineAnonymousModule([], function() { return i }), S()
                    } else {
                        var r = document.createElement("script");
                        r.setAttribute("async", "async"), r.setAttribute("type", "text/javascript"), this.attachListeners(r, S, a);
                        var d = s.getConfig().getOptionsLiteral().trustedTypesPolicy;
                        d && (f = d.createScriptURL(f)), r.setAttribute("src", f);
                        var v = s.getConfig().getOptionsLiteral().cspNonce;
                        v && r.setAttribute("nonce", v), document.getElementsByTagName("head")[0].appendChild(r)
                    }
                }, u
            }(),
            M = function() {
                function u() {}
                return u.prototype.load = function(s, f, S, a) {
                    var _ = s.getConfig().getOptionsLiteral().trustedTypesPolicy,
                        m = /^((http:)|(https:)|(file:))/.test(f) && f.substring(0, self.origin.length) !== self.origin;
                    if (!m) {
                        fetch(f).then(function(g) { if (g.status !== 200) throw new Error(g.statusText); return g.text() }).then(function(g) {
                            g = g + `
//# sourceURL=` + f;
                            var i = _ ? self.eval(_.createScript("", g)) : new Function(g);
                            i.call(self), S()
                        }).then(void 0, a);
                        return
                    }
                    try { _ && (f = _.createScriptURL(f)), importScripts(f), S() } catch (g) { a(g) }
                }, u
            }(),
            p = function() {
                function u(s) { this._env = s, this._didInitialize = !1, this._didPatchNodeRequire = !1 }
                return u.prototype._init = function(s) { this._didInitialize || (this._didInitialize = !0, this._fs = s("fs"), this._vm = s("vm"), this._path = s("path"), this._crypto = s("crypto")) }, u.prototype._initNodeRequire = function(s, f) {
                    var S = f.getConfig().getOptionsLiteral().nodeCachedData;
                    if (!!S && !this._didPatchNodeRequire) {
                        this._didPatchNodeRequire = !0;
                        var a = this,
                            _ = s("module");

                        function m(g) {
                            var i = g.constructor,
                                r = function(v) { try { return g.require(v) } finally {} };
                            return r.resolve = function(v, n) { return i._resolveFilename(v, g, !1, n) }, r.resolve.paths = function(v) { return i._resolveLookupPaths(v, g) }, r.main = process.mainModule, r.extensions = i._extensions, r.cache = i._cache, r
                        }
                        _.prototype._compile = function(g, i) {
                            var r = _.wrap(g.replace(/^#!.*/, "")),
                                d = f.getRecorder(),
                                v = a._getCachedDataPath(S, i),
                                n = { filename: i },
                                l;
                            try {
                                var c = a._fs.readFileSync(v);
                                l = c.slice(0, 16), n.cachedData = c.slice(16), d.record(60, v)
                            } catch (R) { d.record(61, v) }
                            var b = new a._vm.Script(r, n),
                                L = b.runInThisContext(n),
                                C = a._path.dirname(i),
                                w = m(this),
                                N = [this.exports, w, this, i, C, process, fe, Buffer],
                                y = L.apply(this.exports, N);
                            return a._handleCachedData(b, r, v, !n.cachedData, f), a._verifyCachedData(b, r, v, l, f), y
                        }
                    }
                }, u.prototype.load = function(s, f, S, a) {
                    var _ = this,
                        m = s.getConfig().getOptionsLiteral(),
                        g = o(s.getRecorder(), m.nodeRequire || I.global.nodeRequire),
                        i = m.nodeInstrumenter || function(L) { return L };
                    this._init(g), this._initNodeRequire(g, s);
                    var r = s.getRecorder();
                    if (/^node\|/.test(f)) {
                        var d = f.split("|"),
                            v = null;
                        try { v = g(d[1]) } catch (L) { a(L); return }
                        s.enqueueDefineAnonymousModule([], function() { return v }), S()
                    } else {
                        f = I.Utilities.fileUriToFilePath(this._env.isWindows, f);
                        var n = this._path.normalize(f),
                            l = this._getElectronRendererScriptPathOrUri(n),
                            c = Boolean(m.nodeCachedData),
                            b = c ? this._getCachedDataPath(m.nodeCachedData, f) : void 0;
                        this._readSourceAndCachedData(n, b, r, function(L, C, w, N) {
                            if (L) { a(L); return }
                            var y;
                            C.charCodeAt(0) === u._BOM ? y = u._PREFIX + C.substring(1) + u._SUFFIX : y = u._PREFIX + C + u._SUFFIX, y = i(y, n);
                            var R = { filename: l, cachedData: w },
                                D = _._createAndEvalScript(s, y, R, S, a);
                            _._handleCachedData(D, y, b, c && !w, s), _._verifyCachedData(D, y, b, N, s)
                        })
                    }
                }, u.prototype._createAndEvalScript = function(s, f, S, a, _) {
                    var m = s.getRecorder();
                    m.record(31, S.filename);
                    var g = new this._vm.Script(f, S),
                        i = g.runInThisContext(S),
                        r = s.getGlobalAMDDefineFunc(),
                        d = !1,
                        v = function() { return d = !0, r.apply(null, arguments) };
                    return v.amd = r.amd, i.call(I.global, s.getGlobalAMDRequireFunc(), v, S.filename, this._path.dirname(S.filename)), m.record(32, S.filename), d ? a() : _(new Error("Didn't receive define call in " + S.filename + "!")), g
                }, u.prototype._getElectronRendererScriptPathOrUri = function(s) { if (!this._env.isElectronRenderer) return s; var f = s.match(/^([a-z])\:(.*)/i); return f ? "file:///" + (f[1].toUpperCase() + ":" + f[2]).replace(/\\/g, "/") : "file://" + s }, u.prototype._getCachedDataPath = function(s, f) {
                    var S = this._crypto.createHash("md5").update(f, "utf8").update(s.seed, "utf8").update(process.arch, "").digest("hex"),
                        a = this._path.basename(f).replace(/\.js$/, "");
                    return this._path.join(s.path, a + "-" + S + ".code")
                }, u.prototype._handleCachedData = function(s, f, S, a, _) {
                    var m = this;
                    s.cachedDataRejected ? this._fs.unlink(S, function(g) { _.getRecorder().record(62, S), m._createAndWriteCachedData(s, f, S, _), g && _.getConfig().onError(g) }) : a && this._createAndWriteCachedData(s, f, S, _)
                }, u.prototype._createAndWriteCachedData = function(s, f, S, a) {
                    var _ = this,
                        m = Math.ceil(a.getConfig().getOptionsLiteral().nodeCachedData.writeDelay * (1 + Math.random())),
                        g = -1,
                        i = 0,
                        r = void 0,
                        d = function() {
                            setTimeout(function() {
                                r || (r = _._crypto.createHash("md5").update(f, "utf8").digest());
                                var v = s.createCachedData();
                                if (!(v.length === 0 || v.length === g || i >= 5)) {
                                    if (v.length < g) { d(); return }
                                    g = v.length, _._fs.writeFile(S, Buffer.concat([r, v]), function(n) { n && a.getConfig().onError(n), a.getRecorder().record(63, S), d() })
                                }
                            }, m * Math.pow(4, i++))
                        };
                    d()
                }, u.prototype._readSourceAndCachedData = function(s, f, S, a) {
                    if (!f) this._fs.readFile(s, { encoding: "utf8" }, a);
                    else {
                        var _ = void 0,
                            m = void 0,
                            g = void 0,
                            i = 2,
                            r = function(d) { d ? a(d) : --i == 0 && a(void 0, _, m, g) };
                        this._fs.readFile(s, { encoding: "utf8" }, function(d, v) { _ = v, r(d) }), this._fs.readFile(f, function(d, v) {!d && v && v.length > 0 ? (g = v.slice(0, 16), m = v.slice(16), S.record(60, f)) : S.record(61, f), r() })
                    }
                }, u.prototype._verifyCachedData = function(s, f, S, a, _) {
                    var m = this;
                    !a || s.cachedDataRejected || setTimeout(function() {
                        var g = m._crypto.createHash("md5").update(f, "utf8").digest();
                        a.equals(g) || (_.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '" + S + "' now, but a RESTART IS REQUIRED")), m._fs.unlink(S, function(i) { i && _.getConfig().onError(i) }))
                    }, Math.ceil(5e3 * (1 + Math.random())))
                }, u._BOM = 65279, u._PREFIX = "(function (require, define, __filename, __dirname) { ", u._SUFFIX = `
});`, u
            }();

        function o(u, s) { if (s.__$__isRecorded) return s; var f = function(a) { u.record(33, a); try { return s(a) } finally { u.record(34, a) } }; return f.__$__isRecorded = !0, f }
        I.ensureRecordedNodeRequire = o;

        function h(u) { return new t(u) }
        I.createScriptLoader = h
    })(X || (X = {}));
    var X;
    (function(I) {
        var t = function() {
            function u(s) {
                var f = s.lastIndexOf("/");
                f !== -1 ? this.fromModulePath = s.substr(0, f + 1) : this.fromModulePath = ""
            }
            return u._normalizeModuleId = function(s) {
                var f = s,
                    S;
                for (S = /\/\.\//; S.test(f);) f = f.replace(S, "/");
                for (f = f.replace(/^\.\//g, ""), S = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; S.test(f);) f = f.replace(S, "/");
                return f = f.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, ""), f
            }, u.prototype.resolveModule = function(s) { var f = s; return I.Utilities.isAbsolutePath(f) || (I.Utilities.startsWith(f, "./") || I.Utilities.startsWith(f, "../")) && (f = u._normalizeModuleId(this.fromModulePath + f)), f }, u.ROOT = new u(""), u
        }();
        I.ModuleIdResolver = t;
        var E = function() {
            function u(s, f, S, a, _, m) { this.id = s, this.strId = f, this.dependencies = S, this._callback = a, this._errorback = _, this.moduleIdResolver = m, this.exports = {}, this.error = null, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1 }
            return u._safeInvokeFunction = function(s, f) { try { return { returnedValue: s.apply(I.global, f), producedError: null } } catch (S) { return { returnedValue: null, producedError: S } } }, u._invokeFactory = function(s, f, S, a) { return s.isBuild() && !I.Utilities.isAnonymousModule(f) ? { returnedValue: null, producedError: null } : s.shouldCatchError() ? this._safeInvokeFunction(S, a) : { returnedValue: S.apply(I.global, a), producedError: null } }, u.prototype.complete = function(s, f, S) {
                this._isComplete = !0;
                var a = null;
                if (this._callback)
                    if (typeof this._callback == "function") {
                        s.record(21, this.strId);
                        var _ = u._invokeFactory(f, this.strId, this._callback, S);
                        a = _.producedError, s.record(22, this.strId), !a && typeof _.returnedValue != "undefined" && (!this.exportsPassedIn || I.Utilities.isEmpty(this.exports)) && (this.exports = _.returnedValue)
                    } else this.exports = this._callback;
                if (a) {
                    var m = I.ensureError(a);
                    m.phase = "factory", m.moduleId = this.strId, this.error = m, f.onError(m)
                }
                this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null
            }, u.prototype.onDependencyError = function(s) { return this._isComplete = !0, this.error = s, this._errorback ? (this._errorback(s), !0) : !1 }, u.prototype.isComplete = function() { return this._isComplete }, u
        }();
        I.Module = E;
        var M = function() {
                function u() { this._nextId = 0, this._strModuleIdToIntModuleId = new Map, this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require") }
                return u.prototype.getMaxModuleId = function() { return this._nextId }, u.prototype.getModuleId = function(s) { var f = this._strModuleIdToIntModuleId.get(s); return typeof f == "undefined" && (f = this._nextId++, this._strModuleIdToIntModuleId.set(s, f), this._intModuleIdToStrModuleId[f] = s), f }, u.prototype.getStrModuleId = function(s) { return this._intModuleIdToStrModuleId[s] }, u
            }(),
            p = function() {
                function u(s) { this.id = s }
                return u.EXPORTS = new u(0), u.MODULE = new u(1), u.REQUIRE = new u(2), u
            }();
        I.RegularDependency = p;
        var o = function() {
            function u(s, f, S) { this.id = s, this.pluginId = f, this.pluginParam = S }
            return u
        }();
        I.PluginDependency = o;
        var h = function() {
            function u(s, f, S, a, _) { _ === void 0 && (_ = 0), this._env = s, this._scriptLoader = f, this._loaderAvailableTimestamp = _, this._defineFunc = S, this._requireFunc = a, this._moduleIdProvider = new M, this._config = new I.Configuration(this._env), this._hasDependencyCycle = !1, this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map, this._currentAnnonymousDefineCall = null, this._recorder = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = [] }
            return u.prototype.reset = function() { return new u(this._env, this._scriptLoader, this._defineFunc, this._requireFunc, this._loaderAvailableTimestamp) }, u.prototype.getGlobalAMDDefineFunc = function() { return this._defineFunc }, u.prototype.getGlobalAMDRequireFunc = function() { return this._requireFunc }, u._findRelevantLocationInStack = function(s, f) {
                for (var S = function(l) { return l.replace(/\\/g, "/") }, a = S(s), _ = f.split(/\n/), m = 0; m < _.length; m++) {
                    var g = _[m].match(/(.*):(\d+):(\d+)\)?$/);
                    if (g) {
                        var i = g[1],
                            r = g[2],
                            d = g[3],
                            v = Math.max(i.lastIndexOf(" ") + 1, i.lastIndexOf("(") + 1);
                        if (i = i.substr(v), i = S(i), i === a) { var n = { line: parseInt(r, 10), col: parseInt(d, 10) }; return n.line === 1 && (n.col -= "(function (require, define, __filename, __dirname) { ".length), n }
                    }
                }
                throw new Error("Could not correlate define call site for needle " + s)
            }, u.prototype.getBuildInfo = function() {
                if (!this._config.isBuild()) return null;
                for (var s = [], f = 0, S = 0, a = this._modules2.length; S < a; S++) {
                    var _ = this._modules2[S];
                    if (!!_) {
                        var m = this._buildInfoPath[_.id] || null,
                            g = this._buildInfoDefineStack[_.id] || null,
                            i = this._buildInfoDependencies[_.id];
                        s[f++] = { id: _.strId, path: m, defineLocation: m && g ? u._findRelevantLocationInStack(m, g) : null, dependencies: i, shim: null, exports: _.exports }
                    }
                }
                return s
            }, u.prototype.getRecorder = function() { return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new I.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = I.NullLoaderEventRecorder.INSTANCE), this._recorder }, u.prototype.getLoaderEvents = function() { return this.getRecorder().getEvents() }, u.prototype.enqueueDefineAnonymousModule = function(s, f) {
                if (this._currentAnnonymousDefineCall !== null) throw new Error("Can only have one anonymous define call per script file");
                var S = null;
                this._config.isBuild() && (S = new Error("StackLocation").stack || null), this._currentAnnonymousDefineCall = { stack: S, dependencies: s, callback: f }
            }, u.prototype.defineModule = function(s, f, S, a, _, m) {
                var g = this;
                m === void 0 && (m = new t(s));
                var i = this._moduleIdProvider.getModuleId(s);
                if (this._modules2[i]) { this._config.isDuplicateMessageIgnoredFor(s) || console.warn("Duplicate definition of module '" + s + "'"); return }
                var r = new E(i, s, this._normalizeDependencies(f, m), S, a, m);
                this._modules2[i] = r, this._config.isBuild() && (this._buildInfoDefineStack[i] = _, this._buildInfoDependencies[i] = (r.dependencies || []).map(function(d) { return g._moduleIdProvider.getStrModuleId(d.id) })), this._resolve(r)
            }, u.prototype._normalizeDependency = function(s, f) {
                if (s === "exports") return p.EXPORTS;
                if (s === "module") return p.MODULE;
                if (s === "require") return p.REQUIRE;
                var S = s.indexOf("!");
                if (S >= 0) {
                    var a = f.resolveModule(s.substr(0, S)),
                        _ = f.resolveModule(s.substr(S + 1)),
                        m = this._moduleIdProvider.getModuleId(a + "!" + _),
                        g = this._moduleIdProvider.getModuleId(a);
                    return new o(m, g, _)
                }
                return new p(this._moduleIdProvider.getModuleId(f.resolveModule(s)))
            }, u.prototype._normalizeDependencies = function(s, f) { for (var S = [], a = 0, _ = 0, m = s.length; _ < m; _++) S[a++] = this._normalizeDependency(s[_], f); return S }, u.prototype._relativeRequire = function(s, f, S, a) {
                if (typeof f == "string") return this.synchronousRequire(f, s);
                this.defineModule(I.Utilities.generateAnonymousModule(), f, S, a, null, s)
            }, u.prototype.synchronousRequire = function(s, f) {
                f === void 0 && (f = new t(s));
                var S = this._normalizeDependency(s, f),
                    a = this._modules2[S.id];
                if (!a) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + s + "'. This is the first mention of this module!");
                if (!a.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + s + "'. This module has not been resolved completely yet.");
                if (a.error) throw a.error;
                return a.exports
            }, u.prototype.configure = function(s, f) {
                var S = this._config.shouldRecordStats();
                f ? this._config = new I.Configuration(this._env, s) : this._config = this._config.cloneAndMerge(s), this._config.shouldRecordStats() && !S && (this._recorder = null)
            }, u.prototype.getConfig = function() { return this._config }, u.prototype._onLoad = function(s) {
                if (this._currentAnnonymousDefineCall !== null) {
                    var f = this._currentAnnonymousDefineCall;
                    this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(s), f.dependencies, f.callback, null, f.stack)
                }
            }, u.prototype._createLoadError = function(s, f) {
                var S = this,
                    a = this._moduleIdProvider.getStrModuleId(s),
                    _ = (this._inverseDependencies2[s] || []).map(function(g) { return S._moduleIdProvider.getStrModuleId(g) }),
                    m = I.ensureError(f);
                return m.phase = "loading", m.moduleId = a, m.neededBy = _, m
            }, u.prototype._onLoadError = function(s, f) {
                var S = this._createLoadError(s, f);
                this._modules2[s] || (this._modules2[s] = new E(s, this._moduleIdProvider.getStrModuleId(s), [], function() {}, function() {}, null));
                for (var a = [], _ = 0, m = this._moduleIdProvider.getMaxModuleId(); _ < m; _++) a[_] = !1;
                var g = !1,
                    i = [];
                for (i.push(s), a[s] = !0; i.length > 0;) {
                    var r = i.shift(),
                        d = this._modules2[r];
                    d && (g = d.onDependencyError(S) || g);
                    var v = this._inverseDependencies2[r];
                    if (v)
                        for (var _ = 0, m = v.length; _ < m; _++) {
                            var n = v[_];
                            a[n] || (i.push(n), a[n] = !0)
                        }
                }
                g || this._config.onError(S)
            }, u.prototype._hasDependencyPath = function(s, f) {
                var S = this._modules2[s];
                if (!S) return !1;
                for (var a = [], _ = 0, m = this._moduleIdProvider.getMaxModuleId(); _ < m; _++) a[_] = !1;
                var g = [];
                for (g.push(S), a[s] = !0; g.length > 0;) {
                    var i = g.shift(),
                        r = i.dependencies;
                    if (r)
                        for (var _ = 0, m = r.length; _ < m; _++) {
                            var d = r[_];
                            if (d.id === f) return !0;
                            var v = this._modules2[d.id];
                            v && !a[d.id] && (a[d.id] = !0, g.push(v))
                        }
                }
                return !1
            }, u.prototype._findCyclePath = function(s, f, S) {
                if (s === f || S === 50) return [s];
                var a = this._modules2[s];
                if (!a) return null;
                var _ = a.dependencies;
                if (_)
                    for (var m = 0, g = _.length; m < g; m++) { var i = this._findCyclePath(_[m].id, f, S + 1); if (i !== null) return i.push(s), i }
                return null
            }, u.prototype._createRequire = function(s) {
                var f = this,
                    S = function(a, _, m) { return f._relativeRequire(s, a, _, m) };
                return S.toUrl = function(a) { return f._config.requireToUrl(s.resolveModule(a)) }, S.getStats = function() { return f.getLoaderEvents() }, S.hasDependencyCycle = function() { return f._hasDependencyCycle }, S.config = function(a, _) { _ === void 0 && (_ = !1), f.configure(a, _) }, S.__$__nodeRequire = I.global.nodeRequire, S
            }, u.prototype._loadModule = function(s) {
                var f = this;
                if (!(this._modules2[s] || this._knownModules2[s])) {
                    this._knownModules2[s] = !0;
                    var S = this._moduleIdProvider.getStrModuleId(s),
                        a = this._config.moduleIdToPaths(S),
                        _ = /^@[^\/]+\/[^\/]+$/;
                    this._env.isNode && (S.indexOf("/") === -1 || _.test(S)) && a.push("node|" + S);
                    var m = -1,
                        g = function(i) {
                            if (m++, m >= a.length) f._onLoadError(s, i);
                            else {
                                var r = a[m],
                                    d = f.getRecorder();
                                if (f._config.isBuild() && r === "empty:") { f._buildInfoPath[s] = r, f.defineModule(f._moduleIdProvider.getStrModuleId(s), [], null, null, null), f._onLoad(s); return }
                                d.record(10, r), f._scriptLoader.load(f, r, function() { f._config.isBuild() && (f._buildInfoPath[s] = r), d.record(11, r), f._onLoad(s) }, function(v) { d.record(12, r), g(v) })
                            }
                        };
                    g(null)
                }
            }, u.prototype._loadPluginDependency = function(s, f) {
                var S = this;
                if (!(this._modules2[f.id] || this._knownModules2[f.id])) {
                    this._knownModules2[f.id] = !0;
                    var a = function(_) { S.defineModule(S._moduleIdProvider.getStrModuleId(f.id), [], _, null, null) };
                    a.error = function(_) { S._config.onError(S._createLoadError(f.id, _)) }, s.load(f.pluginParam, this._createRequire(t.ROOT), a, this._config.getOptionsLiteral())
                }
            }, u.prototype._resolve = function(s) {
                var f = this,
                    S = s.dependencies;
                if (S)
                    for (var a = 0, _ = S.length; a < _; a++) {
                        var m = S[a];
                        if (m === p.EXPORTS) { s.exportsPassedIn = !0, s.unresolvedDependenciesCount--; continue }
                        if (m === p.MODULE) { s.unresolvedDependenciesCount--; continue }
                        if (m === p.REQUIRE) { s.unresolvedDependenciesCount--; continue }
                        var g = this._modules2[m.id];
                        if (g && g.isComplete()) {
                            if (g.error) { s.onDependencyError(g.error); return }
                            s.unresolvedDependenciesCount--;
                            continue
                        }
                        if (this._hasDependencyPath(m.id, s.id)) {
                            this._hasDependencyCycle = !0, console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(m.id) + "' and '" + this._moduleIdProvider.getStrModuleId(s.id) + "'. The cyclic path follows:");
                            var i = this._findCyclePath(m.id, s.id, 0) || [];
                            i.reverse(), i.push(m.id), console.warn(i.map(function(v) { return f._moduleIdProvider.getStrModuleId(v) }).join(` => 
`)), s.unresolvedDependenciesCount--;
                            continue
                        }
                        if (this._inverseDependencies2[m.id] = this._inverseDependencies2[m.id] || [], this._inverseDependencies2[m.id].push(s.id), m instanceof o) {
                            var r = this._modules2[m.pluginId];
                            if (r && r.isComplete()) { this._loadPluginDependency(r.exports, m); continue }
                            var d = this._inversePluginDependencies2.get(m.pluginId);
                            d || (d = [], this._inversePluginDependencies2.set(m.pluginId, d)), d.push(m), this._loadModule(m.pluginId);
                            continue
                        }
                        this._loadModule(m.id)
                    }
                s.unresolvedDependenciesCount === 0 && this._onModuleComplete(s)
            }, u.prototype._onModuleComplete = function(s) {
                var f = this,
                    S = this.getRecorder();
                if (!s.isComplete()) {
                    var a = s.dependencies,
                        _ = [];
                    if (a)
                        for (var m = 0, g = a.length; m < g; m++) {
                            var i = a[m];
                            if (i === p.EXPORTS) { _[m] = s.exports; continue }
                            if (i === p.MODULE) { _[m] = { id: s.strId, config: function() { return f._config.getConfigForModule(s.strId) } }; continue }
                            if (i === p.REQUIRE) { _[m] = this._createRequire(s.moduleIdResolver); continue }
                            var r = this._modules2[i.id];
                            if (r) { _[m] = r.exports; continue }
                            _[m] = null
                        }
                    s.complete(S, this._config, _);
                    var d = this._inverseDependencies2[s.id];
                    if (this._inverseDependencies2[s.id] = null, d)
                        for (var m = 0, g = d.length; m < g; m++) {
                            var v = d[m],
                                n = this._modules2[v];
                            n.unresolvedDependenciesCount--, n.unresolvedDependenciesCount === 0 && this._onModuleComplete(n)
                        }
                    var l = this._inversePluginDependencies2.get(s.id);
                    if (l) { this._inversePluginDependencies2.delete(s.id); for (var m = 0, g = l.length; m < g; m++) this._loadPluginDependency(s.exports, l[m]) }
                }
            }, u
        }();
        I.ModuleManager = h
    })(X || (X = {}));
    var V, X;
    (function(I) {
        var t = new I.Environment,
            E = null,
            M = function(u, s, f) { typeof u != "string" && (f = s, s = u, u = null), (typeof s != "object" || !Array.isArray(s)) && (f = s, s = null), s || (s = ["require", "exports", "module"]), u ? E.defineModule(u, s, f, null, null) : E.enqueueDefineAnonymousModule(s, f) };
        M.amd = { jQuery: !0 };
        var p = function(u, s) { s === void 0 && (s = !1), E.configure(u, s) },
            o = function() { if (arguments.length === 1) { if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) { p(arguments[0]); return } if (typeof arguments[0] == "string") return E.synchronousRequire(arguments[0]) } if ((arguments.length === 2 || arguments.length === 3) && Array.isArray(arguments[0])) { E.defineModule(I.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null); return } throw new Error("Unrecognized require call") };
        o.config = p, o.getConfig = function() { return E.getConfig().getOptionsLiteral() }, o.reset = function() { E = E.reset() }, o.getBuildInfo = function() { return E.getBuildInfo() }, o.getStats = function() { return E.getLoaderEvents() }, o.define = function() { return M.apply(null, arguments) };

        function h() {
            if (typeof I.global.require != "undefined" || typeof require != "undefined") {
                var u = I.global.require || require;
                if (typeof u == "function" && typeof u.resolve == "function") {
                    var s = I.ensureRecordedNodeRequire(E.getRecorder(), u);
                    I.global.nodeRequire = s, o.nodeRequire = s, o.__$__nodeRequire = s
                }
            }
            t.isNode && !t.isElectronRenderer ? (module.exports = o, require = o) : (t.isElectronRenderer || (I.global.define = M), I.global.require = o)
        }
        I.init = h, (typeof I.global.define != "function" || !I.global.define.amd) && (E = new I.ModuleManager(t, I.createScriptLoader(t), M, o, I.Utilities.getHighPerformanceTimestamp()), typeof I.global.require != "undefined" && typeof I.global.require != "function" && o.config(I.global.require), V = function() { return M.apply(null, arguments) }, V.amd = M.amd, typeof doNotInitLoader == "undefined" && h())
    })(X || (X = {})), V(z[22], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.DiffChange = void 0;
        class E {
            constructor(p, o, h, u) { this.originalStart = p, this.originalLength = o, this.modifiedStart = h, this.modifiedLength = u }
            getOriginalEnd() { return this.originalStart + this.originalLength }
            getModifiedEnd() { return this.modifiedStart + this.modifiedLength }
        }
        t.DiffChange = E
    }), V(z[6], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.illegalState = t.illegalArgument = t.canceled = t.isPromiseCanceledError = t.transformErrorForSerialization = t.onUnexpectedExternalError = t.onUnexpectedError = t.errorHandler = t.ErrorHandler = void 0;
        class E {
            constructor() { this.listeners = [], this.unexpectedErrorHandler = function(_) { setTimeout(() => { throw _.stack ? new Error(_.message + `

` + _.stack) : _ }, 0) } }
            emit(_) { this.listeners.forEach(m => { m(_) }) }
            onUnexpectedError(_) { this.unexpectedErrorHandler(_), this.emit(_) }
            onUnexpectedExternalError(_) { this.unexpectedErrorHandler(_) }
        }
        t.ErrorHandler = E, t.errorHandler = new E;

        function M(a) { u(a) || t.errorHandler.onUnexpectedError(a) }
        t.onUnexpectedError = M;

        function p(a) { u(a) || t.errorHandler.onUnexpectedExternalError(a) }
        t.onUnexpectedExternalError = p;

        function o(a) { if (a instanceof Error) { let { name: _, message: m } = a; const g = a.stacktrace || a.stack; return { $isError: !0, name: _, message: m, stack: g } } return a }
        t.transformErrorForSerialization = o;
        const h = "Canceled";

        function u(a) { return a instanceof Error && a.name === h && a.message === h }
        t.isPromiseCanceledError = u;

        function s() { const a = new Error(h); return a.name = a.message, a }
        t.canceled = s;

        function f(a) { return a ? new Error(`Illegal argument: ${a}`) : new Error("Illegal argument") }
        t.illegalArgument = f;

        function S(a) { return a ? new Error(`Illegal state: ${a}`) : new Error("Illegal state") }
        t.illegalState = S
    }), V(z[16], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Iterable = void 0;
        var E;
        (function(M) {
            function p(c) { return c && typeof c == "object" && typeof c[Symbol.iterator] == "function" }
            M.is = p;
            const o = Object.freeze([]);

            function h() { return o }
            M.empty = h;

            function* u(c) { yield c }
            M.single = u;

            function s(c) { return c || o }
            M.from = s;

            function f(c) { return !c || c[Symbol.iterator]().next().done === !0 }
            M.isEmpty = f;

            function S(c) { return c[Symbol.iterator]().next().value }
            M.first = S;

            function a(c, b) {
                for (const L of c)
                    if (b(L)) return !0;
                return !1
            }
            M.some = a;

            function _(c, b) {
                for (const L of c)
                    if (b(L)) return L
            }
            M.find = _;

            function* m(c, b) { for (const L of c) b(L) && (yield L) }
            M.filter = m;

            function* g(c, b) { for (const L of c) yield b(L) }
            M.map = g;

            function* i(...c) {
                for (const b of c)
                    for (const L of b) yield L
            }
            M.concat = i;

            function* r(c) {
                for (const b of c)
                    for (const L of b) yield L
            }
            M.concatNested = r;

            function d(c, b, L) { let C = L; for (const w of c) C = b(C, w); return C }
            M.reduce = d;

            function* v(c, b, L = c.length) { for (b < 0 && (b += c.length), L < 0 ? L += c.length : L > c.length && (L = c.length); b < L; b++) yield c[b] }
            M.slice = v;

            function n(c, b = Number.POSITIVE_INFINITY) {
                const L = [];
                if (b === 0) return [L, c];
                const C = c[Symbol.iterator]();
                for (let w = 0; w < b; w++) {
                    const N = C.next();
                    if (N.done) return [L, M.empty()];
                    L.push(N.value)
                }
                return [L, {
                    [Symbol.iterator]() { return C }
                }]
            }
            M.consume = n;

            function l(c, b, L = (C, w) => C === w) {
                const C = c[Symbol.iterator](),
                    w = b[Symbol.iterator]();
                for (;;) {
                    const N = C.next(),
                        y = w.next();
                    if (N.done !== y.done) return !1;
                    if (N.done) return !0;
                    if (!L(N.value, y.value)) return !1
                }
            }
            M.equals = l
        })(E = t.Iterable || (t.Iterable = {}))
    }), V(z[19], G([0, 1, 6]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.ResolvedKeybinding = t.ResolvedKeybindingPart = t.ChordKeybinding = t.SimpleKeybinding = t.createSimpleKeybinding = t.createKeybinding = t.KeyChord = t.KeyCodeUtils = void 0;
        class M {
            constructor() { this._keyCodeToStr = [], this._strToKeyCode = Object.create(null) }
            define(r, d) { this._keyCodeToStr[r] = d, this._strToKeyCode[d.toLowerCase()] = r }
            keyCodeToStr(r) { return this._keyCodeToStr[r] }
            strToKeyCode(r) { return this._strToKeyCode[r.toLowerCase()] || 0 }
        }
        const p = new M,
            o = new M,
            h = new M;
        (function() {
            function i(r, d, v = d, n = v) { p.define(r, d), o.define(r, v), h.define(r, n) }
            i(0, "unknown"), i(1, "Backspace"), i(2, "Tab"), i(3, "Enter"), i(4, "Shift"), i(5, "Ctrl"), i(6, "Alt"), i(7, "PauseBreak"), i(8, "CapsLock"), i(9, "Escape"), i(10, "Space"), i(11, "PageUp"), i(12, "PageDown"), i(13, "End"), i(14, "Home"), i(15, "LeftArrow", "Left"), i(16, "UpArrow", "Up"), i(17, "RightArrow", "Right"), i(18, "DownArrow", "Down"), i(19, "Insert"), i(20, "Delete"), i(21, "0"), i(22, "1"), i(23, "2"), i(24, "3"), i(25, "4"), i(26, "5"), i(27, "6"), i(28, "7"), i(29, "8"), i(30, "9"), i(31, "A"), i(32, "B"), i(33, "C"), i(34, "D"), i(35, "E"), i(36, "F"), i(37, "G"), i(38, "H"), i(39, "I"), i(40, "J"), i(41, "K"), i(42, "L"), i(43, "M"), i(44, "N"), i(45, "O"), i(46, "P"), i(47, "Q"), i(48, "R"), i(49, "S"), i(50, "T"), i(51, "U"), i(52, "V"), i(53, "W"), i(54, "X"), i(55, "Y"), i(56, "Z"), i(57, "Meta"), i(58, "ContextMenu"), i(59, "F1"), i(60, "F2"), i(61, "F3"), i(62, "F4"), i(63, "F5"), i(64, "F6"), i(65, "F7"), i(66, "F8"), i(67, "F9"), i(68, "F10"), i(69, "F11"), i(70, "F12"), i(71, "F13"), i(72, "F14"), i(73, "F15"), i(74, "F16"), i(75, "F17"), i(76, "F18"), i(77, "F19"), i(78, "NumLock"), i(79, "ScrollLock"), i(80, ";", ";", "OEM_1"), i(81, "=", "=", "OEM_PLUS"), i(82, ",", ",", "OEM_COMMA"), i(83, "-", "-", "OEM_MINUS"), i(84, ".", ".", "OEM_PERIOD"), i(85, "/", "/", "OEM_2"), i(86, "`", "`", "OEM_3"), i(110, "ABNT_C1"), i(111, "ABNT_C2"), i(87, "[", "[", "OEM_4"), i(88, "\\", "\\", "OEM_5"), i(89, "]", "]", "OEM_6"), i(90, "'", "'", "OEM_7"), i(91, "OEM_8"), i(92, "OEM_102"), i(93, "NumPad0"), i(94, "NumPad1"), i(95, "NumPad2"), i(96, "NumPad3"), i(97, "NumPad4"), i(98, "NumPad5"), i(99, "NumPad6"), i(100, "NumPad7"), i(101, "NumPad8"), i(102, "NumPad9"), i(103, "NumPad_Multiply"), i(104, "NumPad_Add"), i(105, "NumPad_Separator"), i(106, "NumPad_Subtract"), i(107, "NumPad_Decimal"), i(108, "NumPad_Divide")
        })();
        var u;
        (function(i) {
            function r(c) { return p.keyCodeToStr(c) }
            i.toString = r;

            function d(c) { return p.strToKeyCode(c) }
            i.fromString = d;

            function v(c) { return o.keyCodeToStr(c) }
            i.toUserSettingsUS = v;

            function n(c) { return h.keyCodeToStr(c) }
            i.toUserSettingsGeneral = n;

            function l(c) { return o.strToKeyCode(c) || h.strToKeyCode(c) }
            i.fromUserSettings = l
        })(u = t.KeyCodeUtils || (t.KeyCodeUtils = {}));

        function s(i, r) { const d = (r & 65535) << 16 >>> 0; return (i | d) >>> 0 }
        t.KeyChord = s;

        function f(i, r) {
            if (i === 0) return null;
            const d = (i & 65535) >>> 0,
                v = (i & 4294901760) >>> 16;
            return v !== 0 ? new _([S(d, r), S(v, r)]) : new _([S(d, r)])
        }
        t.createKeybinding = f;

        function S(i, r) {
            const d = !!(i & 2048),
                v = !!(i & 256),
                n = r === 2 ? v : d,
                l = !!(i & 1024),
                c = !!(i & 512),
                b = r === 2 ? d : v,
                L = i & 255;
            return new a(n, l, c, b, L)
        }
        t.createSimpleKeybinding = S;
        class a {
            constructor(r, d, v, n, l) { this.ctrlKey = r, this.shiftKey = d, this.altKey = v, this.metaKey = n, this.keyCode = l }
            equals(r) { return this.ctrlKey === r.ctrlKey && this.shiftKey === r.shiftKey && this.altKey === r.altKey && this.metaKey === r.metaKey && this.keyCode === r.keyCode }
            isModifierKey() { return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4 }
            toChord() { return new _([this]) }
            isDuplicateModifierCase() { return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57 }
        }
        t.SimpleKeybinding = a;
        class _ {
            constructor(r) {
                if (r.length === 0) throw (0, E.illegalArgument)("parts");
                this.parts = r
            }
        }
        t.ChordKeybinding = _;
        class m { constructor(r, d, v, n, l, c) { this.ctrlKey = r, this.shiftKey = d, this.altKey = v, this.metaKey = n, this.keyLabel = l, this.keyAriaLabel = c } }
        t.ResolvedKeybindingPart = m;
        class g {}
        t.ResolvedKeybinding = g
    }), V(z[12], G([0, 1, 16]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.ImmortalReference = t.MutableDisposable = t.Disposable = t.DisposableStore = t.toDisposable = t.combinedDisposable = t.dispose = t.isDisposable = t.MultiDisposeError = t.trackDisposable = void 0;
        const M = !1;
        let p = null;
        if (M) {
            const r = "__is_disposable_tracked__";
            p = new class {
                trackDisposable(d) {
                    const v = new Error("Potentially leaked disposable").stack;
                    setTimeout(() => { d[r] || console.log(v) }, 3e3)
                }
                markTracked(d) { if (d && d !== m.None) try { d[r] = !0 } catch (v) {} }
            }
        }

        function o(r) {!p || p.markTracked(r) }

        function h(r) { return p && p.trackDisposable(r), r }
        t.trackDisposable = h;
        class u extends Error {
            constructor(d) {
                super(`Encountered errors while disposing of store. Errors: [${d.join(", ")}]`);
                this.errors = d
            }
        }
        t.MultiDisposeError = u;

        function s(r) { return typeof r.dispose == "function" && r.dispose.length === 0 }
        t.isDisposable = s;

        function f(r) {
            if (E.Iterable.is(r)) {
                let d = [];
                for (const v of r)
                    if (v) { o(v); try { v.dispose() } catch (n) { d.push(n) } }
                if (d.length === 1) throw d[0];
                if (d.length > 1) throw new u(d);
                return Array.isArray(r) ? [] : r
            } else if (r) return o(r), r.dispose(), r
        }
        t.dispose = f;

        function S(...r) { return r.forEach(o), a(() => f(r)) }
        t.combinedDisposable = S;

        function a(r) { const d = h({ dispose: () => { o(d), r() } }); return d }
        t.toDisposable = a;
        class _ {
            constructor() { this._toDispose = new Set, this._isDisposed = !1 }
            dispose() { this._isDisposed || (o(this), this._isDisposed = !0, this.clear()) }
            clear() { try { f(this._toDispose.values()) } finally { this._toDispose.clear() } }
            add(d) { if (!d) return d; if (d === this) throw new Error("Cannot register a disposable on itself!"); return o(d), this._isDisposed ? _.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(d), d }
        }
        t.DisposableStore = _, _.DISABLE_DISPOSED_WARNING = !1;
        class m {
            constructor() { this._store = new _, h(this) }
            dispose() { o(this), this._store.dispose() }
            _register(d) { if (d === this) throw new Error("Cannot register a disposable on itself!"); return this._store.add(d) }
        }
        t.Disposable = m, m.None = Object.freeze({ dispose() {} });
        class g {
            constructor() { this._isDisposed = !1, h(this) }
            get value() { return this._isDisposed ? void 0 : this._value }
            set value(d) {
                var v;
                this._isDisposed || d === this._value || ((v = this._value) === null || v === void 0 || v.dispose(), d && o(d), this._value = d)
            }
            clear() { this.value = void 0 }
            dispose() {
                var d;
                this._isDisposed = !0, o(this), (d = this._value) === null || d === void 0 || d.dispose(), this._value = void 0
            }
        }
        t.MutableDisposable = g;
        class i {
            constructor(d) { this.object = d }
            dispose() {}
        }
        t.ImmortalReference = i
    }), V(z[14], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.LinkedList = void 0;
        class E { constructor(o) { this.element = o, this.next = E.Undefined, this.prev = E.Undefined } }
        E.Undefined = new E(void 0);
        class M {
            constructor() { this._first = E.Undefined, this._last = E.Undefined, this._size = 0 }
            get size() { return this._size }
            isEmpty() { return this._first === E.Undefined }
            clear() { this._first = E.Undefined, this._last = E.Undefined, this._size = 0 }
            unshift(o) { return this._insert(o, !1) }
            push(o) { return this._insert(o, !0) }
            _insert(o, h) {
                const u = new E(o);
                if (this._first === E.Undefined) this._first = u, this._last = u;
                else if (h) {
                    const f = this._last;
                    this._last = u, u.prev = f, f.next = u
                } else {
                    const f = this._first;
                    this._first = u, u.next = f, f.prev = u
                }
                this._size += 1;
                let s = !1;
                return () => { s || (s = !0, this._remove(u)) }
            }
            shift() { if (this._first !== E.Undefined) { const o = this._first.element; return this._remove(this._first), o } }
            pop() { if (this._last !== E.Undefined) { const o = this._last.element; return this._remove(this._last), o } }
            _remove(o) {
                if (o.prev !== E.Undefined && o.next !== E.Undefined) {
                    const h = o.prev;
                    h.next = o.next, o.next.prev = h
                } else o.prev === E.Undefined && o.next === E.Undefined ? (this._first = E.Undefined, this._last = E.Undefined) : o.next === E.Undefined ? (this._last = this._last.prev, this._last.next = E.Undefined) : o.prev === E.Undefined && (this._first = this._first.next, this._first.prev = E.Undefined);
                this._size -= 1
            } * [Symbol.iterator]() { let o = this._first; for (; o !== E.Undefined;) yield o.element, o = o.next }
        }
        t.LinkedList = M
    }), V(z[3], G([0, 1]), function(I, t) {
        "use strict";
        var E;
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isLittleEndian = t.OS = t.setImmediate = t.userAgent = t.isIOS = t.isWeb = t.isNative = t.isLinux = t.isMacintosh = t.isWindows = t.isPreferringBrowserCodeLoad = t.browserCodeLoadingCacheStrategy = t.isElectronSandboxed = t.globals = void 0;
        const M = "en";
        let p = !1,
            o = !1,
            h = !1,
            u = !1,
            s = !1,
            f = !1,
            S = !1,
            a, _ = M,
            m, g;
        t.globals = typeof self == "object" ? self : typeof global == "object" ? global : {};
        let i;
        typeof t.globals.vscode != "undefined" ? i = t.globals.vscode.process : typeof process != "undefined" && (i = process);
        const r = typeof((E = i == null ? void 0 : i.versions) === null || E === void 0 ? void 0 : E.electron) == "string" && i.type === "renderer";
        if (t.isElectronSandboxed = r && (i == null ? void 0 : i.sandboxed), t.browserCodeLoadingCacheStrategy = (() => { if (t.isElectronSandboxed) return "bypassHeatCheck"; const c = i == null ? void 0 : i.env.VSCODE_BROWSER_CODE_LOADING; if (typeof c == "string") return c === "none" || c === "code" || c === "bypassHeatCheck" || c === "bypassHeatCheckAndEagerCompile" ? c : "bypassHeatCheck" })(), t.isPreferringBrowserCodeLoad = typeof t.browserCodeLoadingCacheStrategy == "string", typeof navigator == "object" && !r) g = navigator.userAgent, p = g.indexOf("Windows") >= 0, o = g.indexOf("Macintosh") >= 0, S = (g.indexOf("Macintosh") >= 0 || g.indexOf("iPad") >= 0 || g.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, h = g.indexOf("Linux") >= 0, f = !0, a = navigator.language, _ = a;
        else if (typeof i == "object") {
            p = i.platform === "win32", o = i.platform === "darwin", h = i.platform === "linux", u = h && !!i.env.SNAP && !!i.env.SNAP_REVISION, a = M, _ = M;
            const c = i.env.VSCODE_NLS_CONFIG;
            if (c) try {
                const b = JSON.parse(c),
                    L = b.availableLanguages["*"];
                a = b.locale, _ = L || M, m = b._translationsConfigFile
            } catch (b) {}
            s = !0
        } else console.error("Unable to resolve platform.");
        let d = 0;
        o ? d = 1 : p ? d = 3 : h && (d = 2), t.isWindows = p, t.isMacintosh = o, t.isLinux = h, t.isNative = s, t.isWeb = f, t.isIOS = S, t.userAgent = g, t.setImmediate = function() {
            if (t.globals.setImmediate) return t.globals.setImmediate.bind(t.globals);
            if (typeof t.globals.postMessage == "function" && !t.globals.importScripts) {
                let L = [];
                t.globals.addEventListener("message", w => {
                    if (w.data && w.data.vscodeSetImmediateId)
                        for (let N = 0, y = L.length; N < y; N++) { const R = L[N]; if (R.id === w.data.vscodeSetImmediateId) { L.splice(N, 1), R.callback(); return } }
                });
                let C = 0;
                return w => {
                    const N = ++C;
                    L.push({ id: N, callback: w }), t.globals.postMessage({ vscodeSetImmediateId: N }, "*")
                }
            }
            if (typeof(i == null ? void 0 : i.nextTick) == "function") return i.nextTick.bind(i);
            const b = Promise.resolve();
            return L => b.then(L)
        }(), t.OS = o || S ? 2 : p ? 1 : 3;
        let v = !0,
            n = !1;

        function l() {
            if (!n) {
                n = !0;
                const c = new Uint8Array(2);
                c[0] = 1, c[1] = 2, v = new Uint16Array(c.buffer)[0] === (2 << 8) + 1
            }
            return v
        }
        t.isLittleEndian = l
    }), V(z[17], G([0, 1, 3]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.platform = t.env = t.cwd = void 0;
        let M;
        if (typeof E.globals.vscode != "undefined") {
            const p = E.globals.vscode.process;
            M = {get platform() { return p.platform }, get env() { return p.env }, cwd() { return p.cwd() }, nextTick(o) { return (0, E.setImmediate)(o) } }
        } else typeof process != "undefined" ? M = {get platform() { return process.platform }, get env() { return process.env }, cwd() { return process.env.VSCODE_CWD || process.cwd() }, nextTick(p) { return process.nextTick(p) } } : M = {get platform() { return E.isWindows ? "win32" : E.isMacintosh ? "darwin" : "linux" }, nextTick(p) { return (0, E.setImmediate)(p) }, get env() { return Object.create(null) }, cwd() { return "/" } };
        t.cwd = M.cwd, t.env = M.env, t.platform = M.platform
    }), V(z[18], G([0, 1, 17]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.sep = t.extname = t.basename = t.dirname = t.relative = t.resolve = t.normalize = t.posix = t.win32 = void 0;
        const M = 65,
            p = 97,
            o = 90,
            h = 122,
            u = 46,
            s = 47,
            f = 92,
            S = 58,
            a = 63;
        class _ extends Error {
            constructor(l, c, b) {
                let L;
                typeof c == "string" && c.indexOf("not ") === 0 ? (L = "must not be", c = c.replace(/^not /, "")) : L = "must be";
                const C = l.indexOf(".") !== -1 ? "property" : "argument";
                let w = `The "${l}" ${C} ${L} of type ${c}`;
                w += `. Received type ${typeof b}`, super(w), this.code = "ERR_INVALID_ARG_TYPE"
            }
        }

        function m(n, l) { if (typeof n != "string") throw new _(l, "string", n) }

        function g(n) { return n === s || n === f }

        function i(n) { return n === s }

        function r(n) { return n >= M && n <= o || n >= p && n <= h }

        function d(n, l, c, b) {
            let L = "",
                C = 0,
                w = -1,
                N = 0,
                y = 0;
            for (let R = 0; R <= n.length; ++R) {
                if (R < n.length) y = n.charCodeAt(R);
                else {
                    if (b(y)) break;
                    y = s
                }
                if (b(y)) {
                    if (!(w === R - 1 || N === 1))
                        if (N === 2) {
                            if (L.length < 2 || C !== 2 || L.charCodeAt(L.length - 1) !== u || L.charCodeAt(L.length - 2) !== u) {
                                if (L.length > 2) {
                                    const D = L.lastIndexOf(c);
                                    D === -1 ? (L = "", C = 0) : (L = L.slice(0, D), C = L.length - 1 - L.lastIndexOf(c)), w = R, N = 0;
                                    continue
                                } else if (L.length !== 0) { L = "", C = 0, w = R, N = 0; continue }
                            }
                            l && (L += L.length > 0 ? `${c}..` : "..", C = 2)
                        } else L.length > 0 ? L += `${c}${n.slice(w+1,R)}` : L = n.slice(w + 1, R), C = R - w - 1;
                    w = R, N = 0
                } else y === u && N !== -1 ? ++N : N = -1
            }
            return L
        }

        function v(n, l) {
            if (l === null || typeof l != "object") throw new _("pathObject", "Object", l);
            const c = l.dir || l.root,
                b = l.base || `${l.name||""}${l.ext||""}`;
            return c ? c === l.root ? `${c}${b}` : `${c}${n}${b}` : b
        }
        t.win32 = {
            resolve(...n) {
                let l = "",
                    c = "",
                    b = !1;
                for (let L = n.length - 1; L >= -1; L--) {
                    let C;
                    if (L >= 0) { if (C = n[L], m(C, "path"), C.length === 0) continue } else l.length === 0 ? C = E.cwd() : (C = E.env[`=${l}`] || E.cwd(), (C === void 0 || C.slice(0, 2).toLowerCase() !== l.toLowerCase() && C.charCodeAt(2) === f) && (C = `${l}\\`));
                    const w = C.length;
                    let N = 0,
                        y = "",
                        R = !1;
                    const D = C.charCodeAt(0);
                    if (w === 1) g(D) && (N = 1, R = !0);
                    else if (g(D))
                        if (R = !0, g(C.charCodeAt(1))) {
                            let P = 2,
                                W = P;
                            for (; P < w && !g(C.charCodeAt(P));) P++;
                            if (P < w && P !== W) {
                                const Y = C.slice(W, P);
                                for (W = P; P < w && g(C.charCodeAt(P));) P++;
                                if (P < w && P !== W) {
                                    for (W = P; P < w && !g(C.charCodeAt(P));) P++;
                                    (P === w || P !== W) && (y = `\\\\${Y}\\${C.slice(W,P)}`, N = P)
                                }
                            }
                        } else N = 1;
                    else r(D) && C.charCodeAt(1) === S && (y = C.slice(0, 2), N = 2, w > 2 && g(C.charCodeAt(2)) && (R = !0, N = 3));
                    if (y.length > 0)
                        if (l.length > 0) { if (y.toLowerCase() !== l.toLowerCase()) continue } else l = y;
                    if (b) { if (l.length > 0) break } else if (c = `${C.slice(N)}\\${c}`, b = R, R && l.length > 0) break
                }
                return c = d(c, !b, "\\", g), b ? `${l}\\${c}` : `${l}${c}` || "."
            },
            normalize(n) {
                m(n, "path");
                const l = n.length;
                if (l === 0) return ".";
                let c = 0,
                    b, L = !1;
                const C = n.charCodeAt(0);
                if (l === 1) return i(C) ? "\\" : n;
                if (g(C))
                    if (L = !0, g(n.charCodeAt(1))) {
                        let N = 2,
                            y = N;
                        for (; N < l && !g(n.charCodeAt(N));) N++;
                        if (N < l && N !== y) {
                            const R = n.slice(y, N);
                            for (y = N; N < l && g(n.charCodeAt(N));) N++;
                            if (N < l && N !== y) {
                                for (y = N; N < l && !g(n.charCodeAt(N));) N++;
                                if (N === l) return `\\\\${R}\\${n.slice(y)}\\`;
                                N !== y && (b = `\\\\${R}\\${n.slice(y,N)}`, c = N)
                            }
                        }
                    } else c = 1;
                else r(C) && n.charCodeAt(1) === S && (b = n.slice(0, 2), c = 2, l > 2 && g(n.charCodeAt(2)) && (L = !0, c = 3));
                let w = c < l ? d(n.slice(c), !L, "\\", g) : "";
                return w.length === 0 && !L && (w = "."), w.length > 0 && g(n.charCodeAt(l - 1)) && (w += "\\"), b === void 0 ? L ? `\\${w}` : w : L ? `${b}\\${w}` : `${b}${w}`
            },
            isAbsolute(n) { m(n, "path"); const l = n.length; if (l === 0) return !1; const c = n.charCodeAt(0); return g(c) || l > 2 && r(c) && n.charCodeAt(1) === S && g(n.charCodeAt(2)) },
            join(...n) {
                if (n.length === 0) return ".";
                let l, c;
                for (let C = 0; C < n.length; ++C) {
                    const w = n[C];
                    m(w, "path"), w.length > 0 && (l === void 0 ? l = c = w : l += `\\${w}`)
                }
                if (l === void 0) return ".";
                let b = !0,
                    L = 0;
                if (typeof c == "string" && g(c.charCodeAt(0))) {
                    ++L;
                    const C = c.length;
                    C > 1 && g(c.charCodeAt(1)) && (++L, C > 2 && (g(c.charCodeAt(2)) ? ++L : b = !1))
                }
                if (b) {
                    for (; L < l.length && g(l.charCodeAt(L));) L++;
                    L >= 2 && (l = `\\${l.slice(L)}`)
                }
                return t.win32.normalize(l)
            },
            relative(n, l) {
                if (m(n, "from"), m(l, "to"), n === l) return "";
                const c = t.win32.resolve(n),
                    b = t.win32.resolve(l);
                if (c === b || (n = c.toLowerCase(), l = b.toLowerCase(), n === l)) return "";
                let L = 0;
                for (; L < n.length && n.charCodeAt(L) === f;) L++;
                let C = n.length;
                for (; C - 1 > L && n.charCodeAt(C - 1) === f;) C--;
                const w = C - L;
                let N = 0;
                for (; N < l.length && l.charCodeAt(N) === f;) N++;
                let y = l.length;
                for (; y - 1 > N && l.charCodeAt(y - 1) === f;) y--;
                const R = y - N,
                    D = w < R ? w : R;
                let P = -1,
                    W = 0;
                for (; W < D; W++) {
                    const T = n.charCodeAt(L + W);
                    if (T !== l.charCodeAt(N + W)) break;
                    T === f && (P = W)
                }
                if (W !== D) { if (P === -1) return b } else {
                    if (R > D) { if (l.charCodeAt(N + W) === f) return b.slice(N + W + 1); if (W === 2) return b.slice(N + W) }
                    w > D && (n.charCodeAt(L + W) === f ? P = W : W === 2 && (P = 3)), P === -1 && (P = 0)
                }
                let Y = "";
                for (W = L + P + 1; W <= C; ++W)(W === C || n.charCodeAt(W) === f) && (Y += Y.length === 0 ? ".." : "\\..");
                return N += P, Y.length > 0 ? `${Y}${b.slice(N,y)}` : (b.charCodeAt(N) === f && ++N, b.slice(N, y))
            },
            toNamespacedPath(n) { if (typeof n != "string") return n; if (n.length === 0) return ""; const l = t.win32.resolve(n); if (l.length <= 2) return n; if (l.charCodeAt(0) === f) { if (l.charCodeAt(1) === f) { const c = l.charCodeAt(2); if (c !== a && c !== u) return `\\\\?\\UNC\\${l.slice(2)}` } } else if (r(l.charCodeAt(0)) && l.charCodeAt(1) === S && l.charCodeAt(2) === f) return `\\\\?\\${l}`; return n },
            dirname(n) {
                m(n, "path");
                const l = n.length;
                if (l === 0) return ".";
                let c = -1,
                    b = 0;
                const L = n.charCodeAt(0);
                if (l === 1) return g(L) ? n : ".";
                if (g(L)) {
                    if (c = b = 1, g(n.charCodeAt(1))) {
                        let N = 2,
                            y = N;
                        for (; N < l && !g(n.charCodeAt(N));) N++;
                        if (N < l && N !== y) {
                            for (y = N; N < l && g(n.charCodeAt(N));) N++;
                            if (N < l && N !== y) {
                                for (y = N; N < l && !g(n.charCodeAt(N));) N++;
                                if (N === l) return n;
                                N !== y && (c = b = N + 1)
                            }
                        }
                    }
                } else r(L) && n.charCodeAt(1) === S && (c = l > 2 && g(n.charCodeAt(2)) ? 3 : 2, b = c);
                let C = -1,
                    w = !0;
                for (let N = l - 1; N >= b; --N)
                    if (g(n.charCodeAt(N))) { if (!w) { C = N; break } } else w = !1;
                if (C === -1) {
                    if (c === -1) return ".";
                    C = c
                }
                return n.slice(0, C)
            },
            basename(n, l) {
                l !== void 0 && m(l, "ext"), m(n, "path");
                let c = 0,
                    b = -1,
                    L = !0,
                    C;
                if (n.length >= 2 && r(n.charCodeAt(0)) && n.charCodeAt(1) === S && (c = 2), l !== void 0 && l.length > 0 && l.length <= n.length) {
                    if (l === n) return "";
                    let w = l.length - 1,
                        N = -1;
                    for (C = n.length - 1; C >= c; --C) { const y = n.charCodeAt(C); if (g(y)) { if (!L) { c = C + 1; break } } else N === -1 && (L = !1, N = C + 1), w >= 0 && (y === l.charCodeAt(w) ? --w == -1 && (b = C) : (w = -1, b = N)) }
                    return c === b ? b = N : b === -1 && (b = n.length), n.slice(c, b)
                }
                for (C = n.length - 1; C >= c; --C)
                    if (g(n.charCodeAt(C))) { if (!L) { c = C + 1; break } } else b === -1 && (L = !1, b = C + 1);
                return b === -1 ? "" : n.slice(c, b)
            },
            extname(n) {
                m(n, "path");
                let l = 0,
                    c = -1,
                    b = 0,
                    L = -1,
                    C = !0,
                    w = 0;
                n.length >= 2 && n.charCodeAt(1) === S && r(n.charCodeAt(0)) && (l = b = 2);
                for (let N = n.length - 1; N >= l; --N) {
                    const y = n.charCodeAt(N);
                    if (g(y)) { if (!C) { b = N + 1; break } continue }
                    L === -1 && (C = !1, L = N + 1), y === u ? c === -1 ? c = N : w !== 1 && (w = 1) : c !== -1 && (w = -1)
                }
                return c === -1 || L === -1 || w === 0 || w === 1 && c === L - 1 && c === b + 1 ? "" : n.slice(c, L)
            },
            format: v.bind(null, "\\"),
            parse(n) {
                m(n, "path");
                const l = { root: "", dir: "", base: "", ext: "", name: "" };
                if (n.length === 0) return l;
                const c = n.length;
                let b = 0,
                    L = n.charCodeAt(0);
                if (c === 1) return g(L) ? (l.root = l.dir = n, l) : (l.base = l.name = n, l);
                if (g(L)) {
                    if (b = 1, g(n.charCodeAt(1))) {
                        let P = 2,
                            W = P;
                        for (; P < c && !g(n.charCodeAt(P));) P++;
                        if (P < c && P !== W) {
                            for (W = P; P < c && g(n.charCodeAt(P));) P++;
                            if (P < c && P !== W) {
                                for (W = P; P < c && !g(n.charCodeAt(P));) P++;
                                P === c ? b = P : P !== W && (b = P + 1)
                            }
                        }
                    }
                } else if (r(L) && n.charCodeAt(1) === S) {
                    if (c <= 2) return l.root = l.dir = n, l;
                    if (b = 2, g(n.charCodeAt(2))) {
                        if (c === 3) return l.root = l.dir = n, l;
                        b = 3
                    }
                }
                b > 0 && (l.root = n.slice(0, b));
                let C = -1,
                    w = b,
                    N = -1,
                    y = !0,
                    R = n.length - 1,
                    D = 0;
                for (; R >= b; --R) {
                    if (L = n.charCodeAt(R), g(L)) { if (!y) { w = R + 1; break } continue }
                    N === -1 && (y = !1, N = R + 1), L === u ? C === -1 ? C = R : D !== 1 && (D = 1) : C !== -1 && (D = -1)
                }
                return N !== -1 && (C === -1 || D === 0 || D === 1 && C === N - 1 && C === w + 1 ? l.base = l.name = n.slice(w, N) : (l.name = n.slice(w, C), l.base = n.slice(w, N), l.ext = n.slice(C, N))), w > 0 && w !== b ? l.dir = n.slice(0, w - 1) : l.dir = l.root, l
            },
            sep: "\\",
            delimiter: ";",
            win32: null,
            posix: null
        }, t.posix = {
            resolve(...n) {
                let l = "",
                    c = !1;
                for (let b = n.length - 1; b >= -1 && !c; b--) {
                    const L = b >= 0 ? n[b] : E.cwd();
                    m(L, "path"), L.length !== 0 && (l = `${L}/${l}`, c = L.charCodeAt(0) === s)
                }
                return l = d(l, !c, "/", i), c ? `/${l}` : l.length > 0 ? l : "."
            },
            normalize(n) {
                if (m(n, "path"), n.length === 0) return ".";
                const l = n.charCodeAt(0) === s,
                    c = n.charCodeAt(n.length - 1) === s;
                return n = d(n, !l, "/", i), n.length === 0 ? l ? "/" : c ? "./" : "." : (c && (n += "/"), l ? `/${n}` : n)
            },
            isAbsolute(n) { return m(n, "path"), n.length > 0 && n.charCodeAt(0) === s },
            join(...n) {
                if (n.length === 0) return ".";
                let l;
                for (let c = 0; c < n.length; ++c) {
                    const b = n[c];
                    m(b, "path"), b.length > 0 && (l === void 0 ? l = b : l += `/${b}`)
                }
                return l === void 0 ? "." : t.posix.normalize(l)
            },
            relative(n, l) {
                if (m(n, "from"), m(l, "to"), n === l || (n = t.posix.resolve(n), l = t.posix.resolve(l), n === l)) return "";
                const c = 1,
                    b = n.length,
                    L = b - c,
                    C = 1,
                    w = l.length - C,
                    N = L < w ? L : w;
                let y = -1,
                    R = 0;
                for (; R < N; R++) {
                    const P = n.charCodeAt(c + R);
                    if (P !== l.charCodeAt(C + R)) break;
                    P === s && (y = R)
                }
                if (R === N)
                    if (w > N) { if (l.charCodeAt(C + R) === s) return l.slice(C + R + 1); if (R === 0) return l.slice(C + R) } else L > N && (n.charCodeAt(c + R) === s ? y = R : R === 0 && (y = 0));
                let D = "";
                for (R = c + y + 1; R <= b; ++R)(R === b || n.charCodeAt(R) === s) && (D += D.length === 0 ? ".." : "/..");
                return `${D}${l.slice(C+y)}`
            },
            toNamespacedPath(n) { return n },
            dirname(n) {
                if (m(n, "path"), n.length === 0) return ".";
                const l = n.charCodeAt(0) === s;
                let c = -1,
                    b = !0;
                for (let L = n.length - 1; L >= 1; --L)
                    if (n.charCodeAt(L) === s) { if (!b) { c = L; break } } else b = !1;
                return c === -1 ? l ? "/" : "." : l && c === 1 ? "//" : n.slice(0, c)
            },
            basename(n, l) {
                l !== void 0 && m(l, "ext"), m(n, "path");
                let c = 0,
                    b = -1,
                    L = !0,
                    C;
                if (l !== void 0 && l.length > 0 && l.length <= n.length) {
                    if (l === n) return "";
                    let w = l.length - 1,
                        N = -1;
                    for (C = n.length - 1; C >= 0; --C) { const y = n.charCodeAt(C); if (y === s) { if (!L) { c = C + 1; break } } else N === -1 && (L = !1, N = C + 1), w >= 0 && (y === l.charCodeAt(w) ? --w == -1 && (b = C) : (w = -1, b = N)) }
                    return c === b ? b = N : b === -1 && (b = n.length), n.slice(c, b)
                }
                for (C = n.length - 1; C >= 0; --C)
                    if (n.charCodeAt(C) === s) { if (!L) { c = C + 1; break } } else b === -1 && (L = !1, b = C + 1);
                return b === -1 ? "" : n.slice(c, b)
            },
            extname(n) {
                m(n, "path");
                let l = -1,
                    c = 0,
                    b = -1,
                    L = !0,
                    C = 0;
                for (let w = n.length - 1; w >= 0; --w) {
                    const N = n.charCodeAt(w);
                    if (N === s) { if (!L) { c = w + 1; break } continue }
                    b === -1 && (L = !1, b = w + 1), N === u ? l === -1 ? l = w : C !== 1 && (C = 1) : l !== -1 && (C = -1)
                }
                return l === -1 || b === -1 || C === 0 || C === 1 && l === b - 1 && l === c + 1 ? "" : n.slice(l, b)
            },
            format: v.bind(null, "/"),
            parse(n) {
                m(n, "path");
                const l = { root: "", dir: "", base: "", ext: "", name: "" };
                if (n.length === 0) return l;
                const c = n.charCodeAt(0) === s;
                let b;
                c ? (l.root = "/", b = 1) : b = 0;
                let L = -1,
                    C = 0,
                    w = -1,
                    N = !0,
                    y = n.length - 1,
                    R = 0;
                for (; y >= b; --y) {
                    const D = n.charCodeAt(y);
                    if (D === s) { if (!N) { C = y + 1; break } continue }
                    w === -1 && (N = !1, w = y + 1), D === u ? L === -1 ? L = y : R !== 1 && (R = 1) : L !== -1 && (R = -1)
                }
                if (w !== -1) {
                    const D = C === 0 && c ? 1 : C;
                    L === -1 || R === 0 || R === 1 && L === w - 1 && L === C + 1 ? l.base = l.name = n.slice(D, w) : (l.name = n.slice(D, L), l.base = n.slice(D, w), l.ext = n.slice(L, w))
                }
                return C > 0 ? l.dir = n.slice(0, C - 1) : c && (l.dir = "/"), l
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null
        }, t.posix.win32 = t.win32.win32 = t.win32, t.posix.posix = t.win32.posix = t.posix, t.normalize = E.platform === "win32" ? t.win32.normalize : t.posix.normalize, t.resolve = E.platform === "win32" ? t.win32.resolve : t.posix.resolve, t.relative = E.platform === "win32" ? t.win32.relative : t.posix.relative, t.dirname = E.platform === "win32" ? t.win32.dirname : t.posix.dirname, t.basename = E.platform === "win32" ? t.win32.basename : t.posix.basename, t.extname = E.platform === "win32" ? t.win32.extname : t.posix.extname, t.sep = E.platform === "win32" ? t.win32.sep : t.posix.sep
    }), V(z[9], G([0, 1, 3]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.StopWatch = void 0;
        const M = E.globals.performance && typeof E.globals.performance.now == "function";
        class p {
            constructor(h) { this._highResolution = M && h, this._startTime = this._now(), this._stopTime = -1 }
            static create(h = !0) { return new p(h) }
            stop() { this._stopTime = this._now() }
            elapsed() { return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime }
            _now() { return this._highResolution ? E.globals.performance.now() : Date.now() }
        }
        t.StopWatch = p
    }), V(z[7], G([0, 1, 6, 12, 14, 9]), function(I, t, E, M, p, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Relay = t.EventBufferer = t.PauseableEmitter = t.Emitter = t.Event = void 0;
        var h;
        (function(g) {
            g.None = () => M.Disposable.None;

            function i(T) {
                return (F, O = null, e) => {
                    let H = !1,
                        B;
                    return B = T(Q => { if (!H) return B ? B.dispose() : H = !0, F.call(O, Q) }, null, e), H && B.dispose(), B
                }
            }
            g.once = i;

            function r(T, F) { return b((O, e = null, H) => T(B => O.call(e, F(B)), null, H)) }
            g.map = r;

            function d(T, F) { return b((O, e = null, H) => T(B => { F(B), O.call(e, B) }, null, H)) }
            g.forEach = d;

            function v(T, F) { return b((O, e = null, H) => T(B => F(B) && O.call(e, B), null, H)) }
            g.filter = v;

            function n(T) { return T }
            g.signal = n;

            function l(...T) { return (F, O = null, e) => (0, M.combinedDisposable)(...T.map(H => H(B => F.call(O, B), null, e))) }
            g.any = l;

            function c(T, F, O) { let e = O; return r(T, H => (e = F(e, H), e)) }
            g.reduce = c;

            function b(T) { let F; const O = new S({ onFirstListenerAdd() { F = T(O.fire, O) }, onLastListenerRemove() { F.dispose() } }); return O.event }
            g.snapshot = b;

            function L(T, F, O = 100, e = !1, H) {
                let B, Q, Z, ie = 0;
                const re = new S({
                    leakWarningThreshold: H,
                    onFirstListenerAdd() {
                        B = T(se => {
                            ie++, Q = F(Q, se), e && !Z && (re.fire(Q), Q = void 0), clearTimeout(Z), Z = setTimeout(() => {
                                const le = Q;
                                Q = void 0, Z = void 0, (!e || ie > 1) && re.fire(le), ie = 0
                            }, O)
                        })
                    },
                    onLastListenerRemove() { B.dispose() }
                });
                return re.event
            }
            g.debounce = L;

            function C(T) { const F = new Date().getTime(); return r(i(T), O => new Date().getTime() - F) }
            g.stopwatch = C;

            function w(T) {
                let F = !0,
                    O;
                return v(T, e => { const H = F || e !== O; return F = !1, O = e, H })
            }
            g.latch = w;

            function N(T, F = !1, O = []) {
                let e = O.slice(),
                    H = T(Z => { e ? e.push(Z) : Q.fire(Z) });
                const B = () => { e && e.forEach(Z => Q.fire(Z)), e = null },
                    Q = new S({ onFirstListenerAdd() { H || (H = T(Z => Q.fire(Z))) }, onFirstListenerDidAdd() { e && (F ? setTimeout(B) : B()) }, onLastListenerRemove() { H && H.dispose(), H = null } });
                return Q.event
            }
            g.buffer = N;
            class y {
                constructor(F) { this.event = F }
                map(F) { return new y(r(this.event, F)) }
                forEach(F) { return new y(d(this.event, F)) }
                filter(F) { return new y(v(this.event, F)) }
                reduce(F, O) { return new y(c(this.event, F, O)) }
                latch() { return new y(w(this.event)) }
                debounce(F, O = 100, e = !1, H) { return new y(L(this.event, F, O, e, H)) }
                on(F, O, e) { return this.event(F, O, e) }
                once(F, O, e) { return i(this.event)(F, O, e) }
            }

            function R(T) { return new y(T) }
            g.chain = R;

            function D(T, F, O = e => e) {
                const e = (...Z) => Q.fire(O(...Z)),
                    H = () => T.on(F, e),
                    B = () => T.removeListener(F, e),
                    Q = new S({ onFirstListenerAdd: H, onLastListenerRemove: B });
                return Q.event
            }
            g.fromNodeEventEmitter = D;

            function P(T, F, O = e => e) {
                const e = (...Z) => Q.fire(O(...Z)),
                    H = () => T.addEventListener(F, e),
                    B = () => T.removeEventListener(F, e),
                    Q = new S({ onFirstListenerAdd: H, onLastListenerRemove: B });
                return Q.event
            }
            g.fromDOMEventEmitter = P;

            function W(T) { const F = new S; let O = !1; return T.then(void 0, () => null).then(() => { O ? F.fire(void 0) : setTimeout(() => F.fire(void 0), 0) }), O = !0, F.event }
            g.fromPromise = W;

            function Y(T) { return new Promise(F => i(T)(F)) }
            g.toPromise = Y
        })(h = t.Event || (t.Event = {}));
        class u {
            constructor(i) { this._listenerCount = 0, this._invocationCount = 0, this._elapsedOverall = 0, this._name = `${i}_${u._idPool++}` }
            start(i) { this._stopWatch = new o.StopWatch(!0), this._listenerCount = i }
            stop() {
                if (this._stopWatch) {
                    const i = this._stopWatch.elapsed();
                    this._elapsedOverall += i, this._invocationCount += 1, console.info(`did FIRE ${this._name}: elapsed_ms: ${i.toFixed(5)}, listener: ${this._listenerCount} (elapsed_overall: ${this._elapsedOverall.toFixed(2)}, invocations: ${this._invocationCount})`), this._stopWatch = void 0
                }
            }
        }
        u._idPool = 0;
        let s = -1;
        class f {
            constructor(i, r = Math.random().toString(18).slice(2, 5)) { this.customThreshold = i, this.name = r, this._warnCountdown = 0 }
            dispose() { this._stacks && this._stacks.clear() }
            check(i) {
                let r = s;
                if (typeof this.customThreshold == "number" && (r = this.customThreshold), !(r <= 0 || i < r)) {
                    this._stacks || (this._stacks = new Map);
                    const d = new Error().stack.split(`
`).slice(3).join(`
`),
                        v = this._stacks.get(d) || 0;
                    if (this._stacks.set(d, v + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
                        this._warnCountdown = r * .5;
                        let n, l = 0;
                        for (const [c, b] of this._stacks)(!n || l < b) && (n = c, l = b);
                        console.warn(`[${this.name}] potential listener LEAK detected, having ${i} listeners already. MOST frequent listener (${l}):`), console.warn(n)
                    }
                    return () => {
                        const n = this._stacks.get(d) || 0;
                        this._stacks.set(d, n - 1)
                    }
                }
            }
        }
        class S {
            constructor(i) {
                var r;
                this._disposed = !1, this._options = i, this._leakageMon = s > 0 ? new f(this._options && this._options.leakWarningThreshold) : void 0, this._perfMon = ((r = this._options) === null || r === void 0 ? void 0 : r._profName) ? new u(this._options._profName) : void 0
            }
            get event() {
                return this._event || (this._event = (i, r, d) => {
                    var v;
                    this._listeners || (this._listeners = new p.LinkedList);
                    const n = this._listeners.isEmpty();
                    n && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this);
                    const l = this._listeners.push(r ? [i, r] : i);
                    n && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this), this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, i, r);
                    const c = (v = this._leakageMon) === null || v === void 0 ? void 0 : v.check(this._listeners.size);
                    let b;
                    return b = { dispose: () => { c && c(), b.dispose = S._noop, this._disposed || (l(), this._options && this._options.onLastListenerRemove && (this._listeners && !this._listeners.isEmpty() || this._options.onLastListenerRemove(this))) } }, d instanceof M.DisposableStore ? d.add(b) : Array.isArray(d) && d.push(b), b
                }), this._event
            }
            fire(i) {
                var r, d;
                if (this._listeners) {
                    this._deliveryQueue || (this._deliveryQueue = new p.LinkedList);
                    for (let v of this._listeners) this._deliveryQueue.push([v, i]);
                    for ((r = this._perfMon) === null || r === void 0 || r.start(this._deliveryQueue.size); this._deliveryQueue.size > 0;) {
                        const [v, n] = this._deliveryQueue.shift();
                        try { typeof v == "function" ? v.call(void 0, n) : v[0].call(v[1], n) } catch (l) {
                            (0, E.onUnexpectedError)(l)
                        }
                    }(d = this._perfMon) === null || d === void 0 || d.stop()
                }
            }
            dispose() {
                var i, r, d;
                (i = this._listeners) === null || i === void 0 || i.clear(), (r = this._deliveryQueue) === null || r === void 0 || r.clear(), (d = this._leakageMon) === null || d === void 0 || d.dispose(), this._disposed = !0
            }
        }
        t.Emitter = S, S._noop = function() {};
        class a extends S {
            constructor(i) {
                super(i);
                this._isPaused = 0, this._eventQueue = new p.LinkedList, this._mergeFn = i == null ? void 0 : i.merge
            }
            pause() { this._isPaused++ }
            resume() {
                if (this._isPaused !== 0 && --this._isPaused == 0)
                    if (this._mergeFn) {
                        const i = Array.from(this._eventQueue);
                        this._eventQueue.clear(), super.fire(this._mergeFn(i))
                    } else
                        for (; !this._isPaused && this._eventQueue.size !== 0;) super.fire(this._eventQueue.shift())
            }
            fire(i) { this._listeners && (this._isPaused !== 0 ? this._eventQueue.push(i) : super.fire(i)) }
        }
        t.PauseableEmitter = a;
        class _ {
            constructor() { this.buffers = [] }
            wrapEvent(i) {
                return (r, d, v) => i(n => {
                    const l = this.buffers[this.buffers.length - 1];
                    l ? l.push(() => r.call(d, n)) : r.call(d, n)
                }, void 0, v)
            }
            bufferEvents(i) {
                const r = [];
                this.buffers.push(r);
                const d = i();
                return this.buffers.pop(), r.forEach(v => v()), d
            }
        }
        t.EventBufferer = _;
        class m {
            constructor() { this.listening = !1, this.inputEvent = h.None, this.inputEventListener = M.Disposable.None, this.emitter = new S({ onFirstListenerDidAdd: () => { this.listening = !0, this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter) }, onLastListenerRemove: () => { this.listening = !1, this.inputEventListener.dispose() } }), this.event = this.emitter.event }
            set input(i) { this.inputEvent = i, this.listening && (this.inputEventListener.dispose(), this.inputEventListener = i(this.emitter.fire, this.emitter)) }
            dispose() { this.inputEventListener.dispose(), this.emitter.dispose() }
        }
        t.Relay = m
    }), V(z[23], G([0, 1, 7]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.CancellationTokenSource = t.CancellationToken = void 0;
        const M = Object.freeze(function(u, s) { const f = setTimeout(u.bind(s), 0); return { dispose() { clearTimeout(f) } } });
        var p;
        (function(u) {
            function s(f) { return f === u.None || f === u.Cancelled || f instanceof o ? !0 : !f || typeof f != "object" ? !1 : typeof f.isCancellationRequested == "boolean" && typeof f.onCancellationRequested == "function" }
            u.isCancellationToken = s, u.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: E.Event.None }), u.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: M })
        })(p = t.CancellationToken || (t.CancellationToken = {}));
        class o {
            constructor() { this._isCancelled = !1, this._emitter = null }
            cancel() { this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose())) }
            get isCancellationRequested() { return this._isCancelled }
            get onCancellationRequested() { return this._isCancelled ? M : (this._emitter || (this._emitter = new E.Emitter), this._emitter.event) }
            dispose() { this._emitter && (this._emitter.dispose(), this._emitter = null) }
        }
        class h {
            constructor(s) { this._token = void 0, this._parentListener = void 0, this._parentListener = s && s.onCancellationRequested(this.cancel, this) }
            get token() { return this._token || (this._token = new o), this._token }
            cancel() { this._token ? this._token instanceof o && this._token.cancel() : this._token = p.Cancelled }
            dispose(s = !1) { s && this.cancel(), this._parentListener && this._parentListener.dispose(), this._token ? this._token instanceof o && this._token.dispose() : this._token = p.None }
        }
        t.CancellationTokenSource = h
    }), V(z[4], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.breakBetweenGraphemeBreakType = t.getGraphemeBreakType = t.singleLetterHash = t.containsUppercaseCharacter = t.startsWithUTF8BOM = t.UTF8_BOM_CHARACTER = t.isEmojiImprecise = t.isFullWidthCharacter = t.containsFullWidthCharacter = t.containsUnusualLineTerminators = t.UNUSUAL_LINE_TERMINATORS = t.isBasicASCII = t.containsEmoji = t.containsRTL = t.decodeUTF8 = t.prevCharLength = t.nextCharLength = t.getNextCodePoint = t.computeCodePoint = t.isLowSurrogate = t.isHighSurrogate = t.commonSuffixLength = t.commonPrefixLength = t.startsWithIgnoreCase = t.equalsIgnoreCase = t.isUpperAsciiLetter = t.isLowerAsciiLetter = t.compareSubstringIgnoreCase = t.compareIgnoreCase = t.compareSubstring = t.compare = t.lastNonWhitespaceIndex = t.getLeadingWhitespace = t.firstNonWhitespaceIndex = t.splitLines = t.regExpFlags = t.regExpLeadsToEndlessLoop = t.createRegExp = t.stripWildcards = t.convertSimple2RegExpPattern = t.rtrim = t.ltrim = t.trim = t.escapeRegExpCharacters = t.escape = t.format = t.isFalsyOrWhitespace = void 0;

        function E(A) { return !A || typeof A != "string" ? !0 : A.trim().length === 0 }
        t.isFalsyOrWhitespace = E;
        const M = /{(\d+)}/g;

        function p(A, ...U) { return U.length === 0 ? A : A.replace(M, function(k, q) { const $ = parseInt(q, 10); return isNaN($) || $ < 0 || $ >= U.length ? k : U[$] }) }
        t.format = p;

        function o(A) {
            return A.replace(/[<>&]/g, function(U) {
                switch (U) {
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case "&":
                        return "&amp;";
                    default:
                        return U
                }
            })
        }
        t.escape = o;

        function h(A) { return A.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&") }
        t.escapeRegExpCharacters = h;

        function u(A, U = " ") { const k = s(A, U); return f(k, U) }
        t.trim = u;

        function s(A, U) { if (!A || !U) return A; const k = U.length; if (k === 0 || A.length === 0) return A; let q = 0; for (; A.indexOf(U, q) === q;) q = q + k; return A.substring(q) }
        t.ltrim = s;

        function f(A, U) {
            if (!A || !U) return A;
            const k = U.length,
                q = A.length;
            if (k === 0 || q === 0) return A;
            let $ = q,
                j = -1;
            for (; j = A.lastIndexOf(U, $ - 1), !(j === -1 || j + k !== $);) {
                if (j === 0) return "";
                $ = j
            }
            return A.substring(0, $)
        }
        t.rtrim = f;

        function S(A) { return A.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*") }
        t.convertSimple2RegExpPattern = S;

        function a(A) { return A.replace(/\*/g, "") }
        t.stripWildcards = a;

        function _(A, U, k = {}) {
            if (!A) throw new Error("Cannot create regex from empty string");
            U || (A = h(A)), k.wholeWord && (/\B/.test(A.charAt(0)) || (A = "\\b" + A), /\B/.test(A.charAt(A.length - 1)) || (A = A + "\\b"));
            let q = "";
            return k.global && (q += "g"), k.matchCase || (q += "i"), k.multiline && (q += "m"), k.unicode && (q += "u"), new RegExp(A, q)
        }
        t.createRegExp = _;

        function m(A) { return A.source === "^" || A.source === "^$" || A.source === "$" || A.source === "^\\s*$" ? !1 : !!(A.exec("") && A.lastIndex === 0) }
        t.regExpLeadsToEndlessLoop = m;

        function g(A) { return (A.global ? "g" : "") + (A.ignoreCase ? "i" : "") + (A.multiline ? "m" : "") + (A.unicode ? "u" : "") }
        t.regExpFlags = g;

        function i(A) { return A.split(/\r\n|\r|\n/) }
        t.splitLines = i;

        function r(A) { for (let U = 0, k = A.length; U < k; U++) { const q = A.charCodeAt(U); if (q !== 32 && q !== 9) return U } return -1 }
        t.firstNonWhitespaceIndex = r;

        function d(A, U = 0, k = A.length) { for (let q = U; q < k; q++) { const $ = A.charCodeAt(q); if ($ !== 32 && $ !== 9) return A.substring(U, q) } return A.substring(U, k) }
        t.getLeadingWhitespace = d;

        function v(A, U = A.length - 1) { for (let k = U; k >= 0; k--) { const q = A.charCodeAt(k); if (q !== 32 && q !== 9) return k } return -1 }
        t.lastNonWhitespaceIndex = v;

        function n(A, U) { return A < U ? -1 : A > U ? 1 : 0 }
        t.compare = n;

        function l(A, U, k = 0, q = A.length, $ = 0, j = U.length) {
            for (; k < q && $ < j; k++, $++) {
                let K = A.charCodeAt(k),
                    te = U.charCodeAt($);
                if (K < te) return -1;
                if (K > te) return 1
            }
            const J = q - k,
                x = j - $;
            return J < x ? -1 : J > x ? 1 : 0
        }
        t.compareSubstring = l;

        function c(A, U) { return b(A, U, 0, A.length, 0, U.length) }
        t.compareIgnoreCase = c;

        function b(A, U, k = 0, q = A.length, $ = 0, j = U.length) {
            for (; k < q && $ < j; k++, $++) {
                let K = A.charCodeAt(k),
                    te = U.charCodeAt($);
                if (K !== te) { const ue = K - te; if (!(ue === 32 && C(te)) && !(ue === -32 && C(K))) return L(K) && L(te) ? ue : l(A.toLowerCase(), U.toLowerCase(), k, q, $, j) }
            }
            const J = q - k,
                x = j - $;
            return J < x ? -1 : J > x ? 1 : 0
        }
        t.compareSubstringIgnoreCase = b;

        function L(A) { return A >= 97 && A <= 122 }
        t.isLowerAsciiLetter = L;

        function C(A) { return A >= 65 && A <= 90 }
        t.isUpperAsciiLetter = C;

        function w(A) { return L(A) || C(A) }

        function N(A, U) { return A.length === U.length && y(A, U) }
        t.equalsIgnoreCase = N;

        function y(A, U, k = A.length) {
            for (let q = 0; q < k; q++) {
                const $ = A.charCodeAt(q),
                    j = U.charCodeAt(q);
                if ($ !== j) { if (w($) && w(j)) { const J = Math.abs($ - j); if (J !== 0 && J !== 32) return !1 } else if (String.fromCharCode($).toLowerCase() !== String.fromCharCode(j).toLowerCase()) return !1 }
            }
            return !0
        }

        function R(A, U) { const k = U.length; return U.length > A.length ? !1 : y(A, U, k) }
        t.startsWithIgnoreCase = R;

        function D(A, U) {
            let k, q = Math.min(A.length, U.length);
            for (k = 0; k < q; k++)
                if (A.charCodeAt(k) !== U.charCodeAt(k)) return k;
            return q
        }
        t.commonPrefixLength = D;

        function P(A, U) {
            let k, q = Math.min(A.length, U.length);
            const $ = A.length - 1,
                j = U.length - 1;
            for (k = 0; k < q; k++)
                if (A.charCodeAt($ - k) !== U.charCodeAt(j - k)) return k;
            return q
        }
        t.commonSuffixLength = P;

        function W(A) { return 55296 <= A && A <= 56319 }
        t.isHighSurrogate = W;

        function Y(A) { return 56320 <= A && A <= 57343 }
        t.isLowSurrogate = Y;

        function T(A, U) { return (A - 55296 << 10) + (U - 56320) + 65536 }
        t.computeCodePoint = T;

        function F(A, U, k) { const q = A.charCodeAt(k); if (W(q) && k + 1 < U) { const $ = A.charCodeAt(k + 1); if (Y($)) return T(q, $) } return q }
        t.getNextCodePoint = F;

        function O(A, U) { const k = A.charCodeAt(U - 1); if (Y(k) && U > 1) { const q = A.charCodeAt(U - 2); if (W(q)) return T(q, k) } return k }

        function e(A, U) {
            const k = ee.getInstance(),
                q = U,
                $ = A.length,
                j = F(A, $, U);
            U += j >= 65536 ? 2 : 1;
            let J = k.getGraphemeBreakType(j);
            for (; U < $;) {
                const x = F(A, $, U),
                    K = k.getGraphemeBreakType(x);
                if (oe(J, K)) break;
                U += x >= 65536 ? 2 : 1, J = K
            }
            return U - q
        }
        t.nextCharLength = e;

        function H(A, U) {
            const k = ee.getInstance(),
                q = U,
                $ = O(A, U);
            U -= $ >= 65536 ? 2 : 1;
            let j = k.getGraphemeBreakType($);
            for (; U > 0;) {
                const J = O(A, U),
                    x = k.getGraphemeBreakType(J);
                if (oe(x, j)) break;
                U -= J >= 65536 ? 2 : 1, j = x
            }
            return q - U
        }
        t.prevCharLength = H;

        function B(A) {
            const U = A.byteLength,
                k = [];
            let q = 0;
            for (; q < U;) {
                const $ = A[q];
                let j;
                if ($ >= 240 && q + 3 < U ? j = (A[q++] & 7) << 18 >>> 0 | (A[q++] & 63) << 12 >>> 0 | (A[q++] & 63) << 6 >>> 0 | (A[q++] & 63) << 0 >>> 0 : $ >= 224 && q + 2 < U ? j = (A[q++] & 15) << 12 >>> 0 | (A[q++] & 63) << 6 >>> 0 | (A[q++] & 63) << 0 >>> 0 : $ >= 192 && q + 1 < U ? j = (A[q++] & 31) << 6 >>> 0 | (A[q++] & 63) << 0 >>> 0 : j = A[q++], j >= 0 && j <= 55295 || j >= 57344 && j <= 65535) k.push(String.fromCharCode(j));
                else if (j >= 65536 && j <= 1114111) {
                    const J = j - 65536,
                        x = 55296 + ((J & 1047552) >>> 10),
                        K = 56320 + ((J & 1023) >>> 0);
                    k.push(String.fromCharCode(x)), k.push(String.fromCharCode(K))
                } else k.push(String.fromCharCode(65533))
            }
            return k.join("")
        }
        t.decodeUTF8 = B;
        const Q = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;

        function Z(A) { return Q.test(A) }
        t.containsRTL = Z;
        const ie = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDED6])/;

        function re(A) { return ie.test(A) }
        t.containsEmoji = re;
        const se = /^[\t\n\r\x20-\x7E]*$/;

        function le(A) { return se.test(A) }
        t.isBasicASCII = le, t.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;

        function he(A) { return t.UNUSUAL_LINE_TERMINATORS.test(A) }
        t.containsUnusualLineTerminators = he;

        function de(A) {
            for (let U = 0, k = A.length; U < k; U++)
                if (ae(A.charCodeAt(U))) return !0;
            return !1
        }
        t.containsFullWidthCharacter = de;

        function ae(A) { return A = +A, A >= 11904 && A <= 55215 || A >= 63744 && A <= 64255 || A >= 65281 && A <= 65374 }
        t.isFullWidthCharacter = ae;

        function me(A) { return A >= 127462 && A <= 127487 || A === 8986 || A === 8987 || A === 9200 || A === 9203 || A >= 9728 && A <= 10175 || A === 11088 || A === 11093 || A >= 127744 && A <= 128591 || A >= 128640 && A <= 128764 || A >= 128992 && A <= 129003 || A >= 129280 && A <= 129535 || A >= 129648 && A <= 129750 }
        t.isEmojiImprecise = me, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279);

        function ge(A) { return !!(A && A.length > 0 && A.charCodeAt(0) === 65279) }
        t.startsWithUTF8BOM = ge;

        function _e(A, U = !1) { return A ? (U && (A = A.replace(/\\./g, "")), A.toLowerCase() !== A) : !1 }
        t.containsUppercaseCharacter = _e;

        function ve(A) { const U = 90 - 65 + 1; return A = A % (2 * U), A < U ? String.fromCharCode(97 + A) : String.fromCharCode(65 + A - U) }
        t.singleLetterHash = ve;

        function Ce(A) { return ee.getInstance().getGraphemeBreakType(A) }
        t.getGraphemeBreakType = Ce;

        function oe(A, U) { return A === 0 ? U !== 5 && U !== 7 : A === 2 && U === 3 ? !1 : A === 4 || A === 2 || A === 3 || U === 4 || U === 2 || U === 3 ? !0 : !(A === 8 && (U === 8 || U === 9 || U === 11 || U === 12) || (A === 11 || A === 9) && (U === 9 || U === 10) || (A === 12 || A === 10) && U === 10 || U === 5 || U === 13 || U === 7 || A === 1 || A === 13 && U === 14 || A === 6 && U === 6) }
        t.breakBetweenGraphemeBreakType = oe;
        class ee {
            constructor() { this._data = be() }
            static getInstance() { return ee._INSTANCE || (ee._INSTANCE = new ee), ee._INSTANCE }
            getGraphemeBreakType(U) {
                if (U < 32) return U === 10 ? 3 : U === 13 ? 2 : 4;
                if (U < 127) return 0;
                const k = this._data,
                    q = k.length / 3;
                let $ = 1;
                for (; $ <= q;)
                    if (U < k[3 * $]) $ = 2 * $;
                    else if (U > k[3 * $ + 1]) $ = 2 * $ + 1;
                else return k[3 * $ + 2];
                return 0
            }
        }
        ee._INSTANCE = null;

        function be() { return JSON.parse("[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]") }
    }), V(z[15], G([0, 1, 4]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.StringSHA1 = t.toHexString = t.stringHash = t.doHash = t.hash = void 0;

        function M(i) { return p(i, 0) }
        t.hash = M;

        function p(i, r) {
            switch (typeof i) {
                case "object":
                    return i === null ? o(349, r) : Array.isArray(i) ? s(i, r) : f(i, r);
                case "string":
                    return u(i, r);
                case "boolean":
                    return h(i, r);
                case "number":
                    return o(i, r);
                case "undefined":
                    return o(937, r);
                default:
                    return o(617, r)
            }
        }
        t.doHash = p;

        function o(i, r) { return (r << 5) - r + i | 0 }

        function h(i, r) { return o(i ? 433 : 863, r) }

        function u(i, r) { r = o(149417, r); for (let d = 0, v = i.length; d < v; d++) r = o(i.charCodeAt(d), r); return r }
        t.stringHash = u;

        function s(i, r) { return r = o(104579, r), i.reduce((d, v) => p(v, d), r) }

        function f(i, r) { return r = o(181387, r), Object.keys(i).sort().reduce((d, v) => (d = u(v, d), p(i[v], d)), r) }

        function S(i, r, d = 32) {
            const v = d - r,
                n = ~((1 << v) - 1);
            return (i << r | (n & i) >>> v) >>> 0
        }

        function a(i, r = 0, d = i.byteLength, v = 0) { for (let n = 0; n < d; n++) i[r + n] = v }

        function _(i, r, d = "0") { for (; i.length < r;) i = d + i; return i }

        function m(i, r = 32) { return i instanceof ArrayBuffer ? Array.from(new Uint8Array(i)).map(d => d.toString(16).padStart(2, "0")).join("") : _((i >>> 0).toString(16), r / 4) }
        t.toHexString = m;
        class g {
            constructor() { this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(64 + 3), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1 }
            update(r) {
                const d = r.length;
                if (d !== 0) {
                    const v = this._buff;
                    let n = this._buffLen,
                        l = this._leftoverHighSurrogate,
                        c, b;
                    for (l !== 0 ? (c = l, b = -1, l = 0) : (c = r.charCodeAt(0), b = 0);;) {
                        let L = c;
                        if (E.isHighSurrogate(c))
                            if (b + 1 < d) {
                                const C = r.charCodeAt(b + 1);
                                E.isLowSurrogate(C) ? (b++, L = E.computeCodePoint(c, C)) : L = 65533
                            } else { l = c; break }
                        else E.isLowSurrogate(c) && (L = 65533);
                        if (n = this._push(v, n, L), b++, b < d) c = r.charCodeAt(b);
                        else break
                    }
                    this._buffLen = n, this._leftoverHighSurrogate = l
                }
            }
            _push(r, d, v) { return v < 128 ? r[d++] = v : v < 2048 ? (r[d++] = 192 | (v & 1984) >>> 6, r[d++] = 128 | (v & 63) >>> 0) : v < 65536 ? (r[d++] = 224 | (v & 61440) >>> 12, r[d++] = 128 | (v & 4032) >>> 6, r[d++] = 128 | (v & 63) >>> 0) : (r[d++] = 240 | (v & 1835008) >>> 18, r[d++] = 128 | (v & 258048) >>> 12, r[d++] = 128 | (v & 4032) >>> 6, r[d++] = 128 | (v & 63) >>> 0), d >= 64 && (this._step(), d -= 64, this._totalLen += 64, r[0] = r[64 + 0], r[1] = r[64 + 1], r[2] = r[64 + 2]), d }
            digest() { return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), m(this._h0) + m(this._h1) + m(this._h2) + m(this._h3) + m(this._h4) }
            _wrapUp() {
                this._buff[this._buffLen++] = 128, a(this._buff, this._buffLen), this._buffLen > 56 && (this._step(), a(this._buff));
                const r = 8 * this._totalLen;
                this._buffDV.setUint32(56, Math.floor(r / 4294967296), !1), this._buffDV.setUint32(60, r % 4294967296, !1), this._step()
            }
            _step() {
                const r = g._bigBlock32,
                    d = this._buffDV;
                for (let N = 0; N < 64; N += 4) r.setUint32(N, d.getUint32(N, !1), !1);
                for (let N = 64; N < 320; N += 4) r.setUint32(N, S(r.getUint32(N - 12, !1) ^ r.getUint32(N - 32, !1) ^ r.getUint32(N - 56, !1) ^ r.getUint32(N - 64, !1), 1), !1);
                let v = this._h0,
                    n = this._h1,
                    l = this._h2,
                    c = this._h3,
                    b = this._h4,
                    L, C, w;
                for (let N = 0; N < 80; N++) N < 20 ? (L = n & l | ~n & c, C = 1518500249) : N < 40 ? (L = n ^ l ^ c, C = 1859775393) : N < 60 ? (L = n & l | n & c | l & c, C = 2400959708) : (L = n ^ l ^ c, C = 3395469782), w = S(v, 5) + L + b + C + r.getUint32(N * 4, !1) & 4294967295, b = c, c = l, l = S(n, 30), n = v, v = w;
                this._h0 = this._h0 + v & 4294967295, this._h1 = this._h1 + n & 4294967295, this._h2 = this._h2 + l & 4294967295, this._h3 = this._h3 + c & 4294967295, this._h4 = this._h4 + b & 4294967295
            }
        }
        t.StringSHA1 = g, g._bigBlock32 = new DataView(new ArrayBuffer(320))
    }), V(z[8], G([0, 1, 22, 15]), function(I, t, E, M) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.LcsDiff = t.MyArray = t.Debug = t.stringDiff = t.StringDiffSequence = void 0;
        class p {
            constructor(a) { this.source = a }
            getElements() {
                const a = this.source,
                    _ = new Int32Array(a.length);
                for (let m = 0, g = a.length; m < g; m++) _[m] = a.charCodeAt(m);
                return _
            }
        }
        t.StringDiffSequence = p;

        function o(S, a, _) { return new f(new p(S), new p(a)).ComputeDiff(_).changes }
        t.stringDiff = o;
        class h { static Assert(a, _) { if (!a) throw new Error(_) } }
        t.Debug = h;
        class u {
            static Copy(a, _, m, g, i) { for (let r = 0; r < i; r++) m[g + r] = a[_ + r] }
            static Copy2(a, _, m, g, i) { for (let r = 0; r < i; r++) m[g + r] = a[_ + r] }
        }
        t.MyArray = u;
        class s {
            constructor() { this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0 }
            MarkNextChange() {
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new E.DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824
            }
            AddOriginalElement(a, _) { this.m_originalStart = Math.min(this.m_originalStart, a), this.m_modifiedStart = Math.min(this.m_modifiedStart, _), this.m_originalCount++ }
            AddModifiedElement(a, _) { this.m_originalStart = Math.min(this.m_originalStart, a), this.m_modifiedStart = Math.min(this.m_modifiedStart, _), this.m_modifiedCount++ }
            getChanges() { return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes }
            getReverseChanges() { return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes }
        }
        class f {
            constructor(a, _, m = null) {
                this.ContinueProcessingPredicate = m;
                const [g, i, r] = f._getElements(a), [d, v, n] = f._getElements(_);
                this._hasStrings = r && n, this._originalStringElements = g, this._originalElementsOrHash = i, this._modifiedStringElements = d, this._modifiedElementsOrHash = v, this.m_forwardHistory = [], this.m_reverseHistory = []
            }
            static _isStringArray(a) { return a.length > 0 && typeof a[0] == "string" }
            static _getElements(a) {
                const _ = a.getElements();
                if (f._isStringArray(_)) { const m = new Int32Array(_.length); for (let g = 0, i = _.length; g < i; g++) m[g] = (0, M.stringHash)(_[g], 0); return [_, m, !0] }
                return _ instanceof Int32Array ? [
                    [], _, !1
                ] : [
                    [], new Int32Array(_), !1
                ]
            }
            ElementsAreEqual(a, _) { return this._originalElementsOrHash[a] !== this._modifiedElementsOrHash[_] ? !1 : this._hasStrings ? this._originalStringElements[a] === this._modifiedStringElements[_] : !0 }
            OriginalElementsAreEqual(a, _) { return this._originalElementsOrHash[a] !== this._originalElementsOrHash[_] ? !1 : this._hasStrings ? this._originalStringElements[a] === this._originalStringElements[_] : !0 }
            ModifiedElementsAreEqual(a, _) { return this._modifiedElementsOrHash[a] !== this._modifiedElementsOrHash[_] ? !1 : this._hasStrings ? this._modifiedStringElements[a] === this._modifiedStringElements[_] : !0 }
            ComputeDiff(a) { return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, a) }
            _ComputeDiff(a, _, m, g, i) { const r = [!1]; let d = this.ComputeDiffRecursive(a, _, m, g, r); return i && (d = this.PrettifyChanges(d)), { quitEarly: r[0], changes: d } }
            ComputeDiffRecursive(a, _, m, g, i) {
                for (i[0] = !1; a <= _ && m <= g && this.ElementsAreEqual(a, m);) a++, m++;
                for (; _ >= a && g >= m && this.ElementsAreEqual(_, g);) _--, g--;
                if (a > _ || m > g) { let c; return m <= g ? (h.Assert(a === _ + 1, "originalStart should only be one more than originalEnd"), c = [new E.DiffChange(a, 0, m, g - m + 1)]) : a <= _ ? (h.Assert(m === g + 1, "modifiedStart should only be one more than modifiedEnd"), c = [new E.DiffChange(a, _ - a + 1, m, 0)]) : (h.Assert(a === _ + 1, "originalStart should only be one more than originalEnd"), h.Assert(m === g + 1, "modifiedStart should only be one more than modifiedEnd"), c = []), c }
                const r = [0],
                    d = [0],
                    v = this.ComputeRecursionPoint(a, _, m, g, r, d, i),
                    n = r[0],
                    l = d[0];
                if (v !== null) return v;
                if (!i[0]) { const c = this.ComputeDiffRecursive(a, n, m, l, i); let b = []; return i[0] ? b = [new E.DiffChange(n + 1, _ - (n + 1) + 1, l + 1, g - (l + 1) + 1)] : b = this.ComputeDiffRecursive(n + 1, _, l + 1, g, i), this.ConcatenateChanges(c, b) }
                return [new E.DiffChange(a, _ - a + 1, m, g - m + 1)]
            }
            WALKTRACE(a, _, m, g, i, r, d, v, n, l, c, b, L, C, w, N, y, R) {
                let D = null,
                    P = null,
                    W = new s,
                    Y = _,
                    T = m,
                    F = L[0] - N[0] - g,
                    O = -1073741824,
                    e = this.m_forwardHistory.length - 1;
                do {
                    const H = F + a;
                    H === Y || H < T && n[H - 1] < n[H + 1] ? (c = n[H + 1], C = c - F - g, c < O && W.MarkNextChange(), O = c, W.AddModifiedElement(c + 1, C), F = H + 1 - a) : (c = n[H - 1] + 1, C = c - F - g, c < O && W.MarkNextChange(), O = c - 1, W.AddOriginalElement(c, C + 1), F = H - 1 - a), e >= 0 && (n = this.m_forwardHistory[e], a = n[0], Y = 1, T = n.length - 1)
                } while (--e >= -1);
                if (D = W.getReverseChanges(), R[0]) {
                    let H = L[0] + 1,
                        B = N[0] + 1;
                    if (D !== null && D.length > 0) {
                        const Q = D[D.length - 1];
                        H = Math.max(H, Q.getOriginalEnd()), B = Math.max(B, Q.getModifiedEnd())
                    }
                    P = [new E.DiffChange(H, b - H + 1, B, w - B + 1)]
                } else {
                    W = new s, Y = r, T = d, F = L[0] - N[0] - v, O = 1073741824, e = y ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                    do {
                        const H = F + i;
                        H === Y || H < T && l[H - 1] >= l[H + 1] ? (c = l[H + 1] - 1, C = c - F - v, c > O && W.MarkNextChange(), O = c + 1, W.AddOriginalElement(c + 1, C + 1), F = H + 1 - i) : (c = l[H - 1], C = c - F - v, c > O && W.MarkNextChange(), O = c, W.AddModifiedElement(c + 1, C + 1), F = H - 1 - i), e >= 0 && (l = this.m_reverseHistory[e], i = l[0], Y = 1, T = l.length - 1)
                    } while (--e >= -1);
                    P = W.getChanges()
                }
                return this.ConcatenateChanges(D, P)
            }
            ComputeRecursionPoint(a, _, m, g, i, r, d) {
                let v = 0,
                    n = 0,
                    l = 0,
                    c = 0,
                    b = 0,
                    L = 0;
                a--, m--, i[0] = 0, r[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
                const C = _ - a + (g - m),
                    w = C + 1,
                    N = new Int32Array(w),
                    y = new Int32Array(w),
                    R = g - m,
                    D = _ - a,
                    P = a - m,
                    W = _ - g,
                    T = (D - R) % 2 == 0;
                N[R] = a, y[D] = _, d[0] = !1;
                for (let F = 1; F <= C / 2 + 1; F++) {
                    let O = 0,
                        e = 0;
                    l = this.ClipDiagonalBound(R - F, F, R, w), c = this.ClipDiagonalBound(R + F, F, R, w);
                    for (let B = l; B <= c; B += 2) { B === l || B < c && N[B - 1] < N[B + 1] ? v = N[B + 1] : v = N[B - 1] + 1, n = v - (B - R) - P; const Q = v; for (; v < _ && n < g && this.ElementsAreEqual(v + 1, n + 1);) v++, n++; if (N[B] = v, v + n > O + e && (O = v, e = n), !T && Math.abs(B - D) <= F - 1 && v >= y[B]) return i[0] = v, r[0] = n, Q <= y[B] && 1447 > 0 && F <= 1447 + 1 ? this.WALKTRACE(R, l, c, P, D, b, L, W, N, y, v, _, i, n, g, r, T, d) : null }
                    const H = (O - a + (e - m) - F) / 2;
                    if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(O, H)) return d[0] = !0, i[0] = O, r[0] = e, H > 0 && 1447 > 0 && F <= 1447 + 1 ? this.WALKTRACE(R, l, c, P, D, b, L, W, N, y, v, _, i, n, g, r, T, d) : (a++, m++, [new E.DiffChange(a, _ - a + 1, m, g - m + 1)]);
                    b = this.ClipDiagonalBound(D - F, F, D, w), L = this.ClipDiagonalBound(D + F, F, D, w);
                    for (let B = b; B <= L; B += 2) { B === b || B < L && y[B - 1] >= y[B + 1] ? v = y[B + 1] - 1 : v = y[B - 1], n = v - (B - D) - W; const Q = v; for (; v > a && n > m && this.ElementsAreEqual(v, n);) v--, n--; if (y[B] = v, T && Math.abs(B - R) <= F && v <= N[B]) return i[0] = v, r[0] = n, Q >= N[B] && 1447 > 0 && F <= 1447 + 1 ? this.WALKTRACE(R, l, c, P, D, b, L, W, N, y, v, _, i, n, g, r, T, d) : null }
                    if (F <= 1447) {
                        let B = new Int32Array(c - l + 2);
                        B[0] = R - l + 1, u.Copy2(N, l, B, 1, c - l + 1), this.m_forwardHistory.push(B), B = new Int32Array(L - b + 2), B[0] = D - b + 1, u.Copy2(y, b, B, 1, L - b + 1), this.m_reverseHistory.push(B)
                    }
                }
                return this.WALKTRACE(R, l, c, P, D, b, L, W, N, y, v, _, i, n, g, r, T, d)
            }
            PrettifyChanges(a) {
                for (let _ = 0; _ < a.length; _++) {
                    const m = a[_],
                        g = _ < a.length - 1 ? a[_ + 1].originalStart : this._originalElementsOrHash.length,
                        i = _ < a.length - 1 ? a[_ + 1].modifiedStart : this._modifiedElementsOrHash.length,
                        r = m.originalLength > 0,
                        d = m.modifiedLength > 0;
                    for (; m.originalStart + m.originalLength < g && m.modifiedStart + m.modifiedLength < i && (!r || this.OriginalElementsAreEqual(m.originalStart, m.originalStart + m.originalLength)) && (!d || this.ModifiedElementsAreEqual(m.modifiedStart, m.modifiedStart + m.modifiedLength));) m.originalStart++, m.modifiedStart++;
                    let v = [null];
                    if (_ < a.length - 1 && this.ChangesOverlap(a[_], a[_ + 1], v)) { a[_] = v[0], a.splice(_ + 1, 1), _--; continue }
                }
                for (let _ = a.length - 1; _ >= 0; _--) {
                    const m = a[_];
                    let g = 0,
                        i = 0;
                    if (_ > 0) {
                        const c = a[_ - 1];
                        g = c.originalStart + c.originalLength, i = c.modifiedStart + c.modifiedLength
                    }
                    const r = m.originalLength > 0,
                        d = m.modifiedLength > 0;
                    let v = 0,
                        n = this._boundaryScore(m.originalStart, m.originalLength, m.modifiedStart, m.modifiedLength);
                    for (let c = 1;; c++) {
                        const b = m.originalStart - c,
                            L = m.modifiedStart - c;
                        if (b < g || L < i || r && !this.OriginalElementsAreEqual(b, b + m.originalLength) || d && !this.ModifiedElementsAreEqual(L, L + m.modifiedLength)) break;
                        const w = (b === g && L === i ? 5 : 0) + this._boundaryScore(b, m.originalLength, L, m.modifiedLength);
                        w > n && (n = w, v = c)
                    }
                    m.originalStart -= v, m.modifiedStart -= v;
                    const l = [null];
                    if (_ > 0 && this.ChangesOverlap(a[_ - 1], a[_], l)) { a[_ - 1] = l[0], a.splice(_, 1), _++; continue }
                }
                if (this._hasStrings)
                    for (let _ = 1, m = a.length; _ < m; _++) {
                        const g = a[_ - 1],
                            i = a[_],
                            r = i.originalStart - g.originalStart - g.originalLength,
                            d = g.originalStart,
                            v = i.originalStart + i.originalLength,
                            n = v - d,
                            l = g.modifiedStart,
                            c = i.modifiedStart + i.modifiedLength,
                            b = c - l;
                        if (r < 5 && n < 20 && b < 20) {
                            const L = this._findBetterContiguousSequence(d, n, l, b, r);
                            if (L) {
                                const [C, w] = L;
                                (C !== g.originalStart + g.originalLength || w !== g.modifiedStart + g.modifiedLength) && (g.originalLength = C - g.originalStart, g.modifiedLength = w - g.modifiedStart, i.originalStart = C + r, i.modifiedStart = w + r, i.originalLength = v - i.originalStart, i.modifiedLength = c - i.modifiedStart)
                            }
                        }
                    }
                return a
            }
            _findBetterContiguousSequence(a, _, m, g, i) {
                if (_ < i || g < i) return null;
                const r = a + _ - i + 1,
                    d = m + g - i + 1;
                let v = 0,
                    n = 0,
                    l = 0;
                for (let c = a; c < r; c++)
                    for (let b = m; b < d; b++) {
                        const L = this._contiguousSequenceScore(c, b, i);
                        L > 0 && L > v && (v = L, n = c, l = b)
                    }
                return v > 0 ? [n, l] : null
            }
            _contiguousSequenceScore(a, _, m) {
                let g = 0;
                for (let i = 0; i < m; i++) {
                    if (!this.ElementsAreEqual(a + i, _ + i)) return 0;
                    g += this._originalStringElements[a + i].length
                }
                return g
            }
            _OriginalIsBoundary(a) { return a <= 0 || a >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[a]) }
            _OriginalRegionIsBoundary(a, _) { if (this._OriginalIsBoundary(a) || this._OriginalIsBoundary(a - 1)) return !0; if (_ > 0) { const m = a + _; if (this._OriginalIsBoundary(m - 1) || this._OriginalIsBoundary(m)) return !0 } return !1 }
            _ModifiedIsBoundary(a) { return a <= 0 || a >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[a]) }
            _ModifiedRegionIsBoundary(a, _) { if (this._ModifiedIsBoundary(a) || this._ModifiedIsBoundary(a - 1)) return !0; if (_ > 0) { const m = a + _; if (this._ModifiedIsBoundary(m - 1) || this._ModifiedIsBoundary(m)) return !0 } return !1 }
            _boundaryScore(a, _, m, g) {
                const i = this._OriginalRegionIsBoundary(a, _) ? 1 : 0,
                    r = this._ModifiedRegionIsBoundary(m, g) ? 1 : 0;
                return i + r
            }
            ConcatenateChanges(a, _) { let m = []; if (a.length === 0 || _.length === 0) return _.length > 0 ? _ : a; if (this.ChangesOverlap(a[a.length - 1], _[0], m)) { const g = new Array(a.length + _.length - 1); return u.Copy(a, 0, g, 0, a.length - 1), g[a.length - 1] = m[0], u.Copy(_, 1, g, a.length, _.length - 1), g } else { const g = new Array(a.length + _.length); return u.Copy(a, 0, g, 0, a.length), u.Copy(_, 0, g, a.length, _.length), g } }
            ChangesOverlap(a, _, m) { if (h.Assert(a.originalStart <= _.originalStart, "Left change is not less than or equal to right change"), h.Assert(a.modifiedStart <= _.modifiedStart, "Left change is not less than or equal to right change"), a.originalStart + a.originalLength >= _.originalStart || a.modifiedStart + a.modifiedLength >= _.modifiedStart) { const g = a.originalStart; let i = a.originalLength; const r = a.modifiedStart; let d = a.modifiedLength; return a.originalStart + a.originalLength >= _.originalStart && (i = _.originalStart + _.originalLength - a.originalStart), a.modifiedStart + a.modifiedLength >= _.modifiedStart && (d = _.modifiedStart + _.modifiedLength - a.modifiedStart), m[0] = new E.DiffChange(g, i, r, d), !0 } else return m[0] = null, !1 }
            ClipDiagonalBound(a, _, m, g) {
                if (a >= 0 && a < g) return a;
                const i = m,
                    r = g - m - 1,
                    d = _ % 2 == 0;
                if (a < 0) { const v = i % 2 == 0; return d === v ? 0 : 1 } else { const v = r % 2 == 0; return d === v ? g - 1 : g - 2 }
            }
        }
        t.LcsDiff = f
    }), V(z[13], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.withNullAsUndefined = t.createProxyObject = t.getAllMethodNames = t.getAllPropertyNames = t.validateConstraint = t.validateConstraints = t.isFunction = t.assertIsDefined = t.assertType = t.isUndefinedOrNull = t.isUndefined = t.isBoolean = t.isNumber = t.isObject = t.isString = t.isArray = void 0;

        function E(v) { return Array.isArray(v) }
        t.isArray = E;

        function M(v) { return typeof v == "string" }
        t.isString = M;

        function p(v) { return typeof v == "object" && v !== null && !Array.isArray(v) && !(v instanceof RegExp) && !(v instanceof Date) }
        t.isObject = p;

        function o(v) { return typeof v == "number" && !isNaN(v) }
        t.isNumber = o;

        function h(v) { return v === !0 || v === !1 }
        t.isBoolean = h;

        function u(v) { return typeof v == "undefined" }
        t.isUndefined = u;

        function s(v) { return u(v) || v === null }
        t.isUndefinedOrNull = s;

        function f(v, n) { if (!v) throw new Error(n ? `Unexpected type, expected '${n}'` : "Unexpected type") }
        t.assertType = f;

        function S(v) { if (s(v)) throw new Error("Assertion Failed: argument is undefined or null"); return v }
        t.assertIsDefined = S;

        function a(v) { return typeof v == "function" }
        t.isFunction = a;

        function _(v, n) { const l = Math.min(v.length, n.length); for (let c = 0; c < l; c++) m(v[c], n[c]) }
        t.validateConstraints = _;

        function m(v, n) { if (M(n)) { if (typeof v !== n) throw new Error(`argument does not match constraint: typeof ${n}`) } else if (a(n)) { try { if (v instanceof n) return } catch (l) {} if (!s(v) && v.constructor === n || n.length === 1 && n.call(void 0, v) === !0) return; throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true") } }
        t.validateConstraint = m;

        function g(v) {
            let n = [],
                l = Object.getPrototypeOf(v);
            for (; Object.prototype !== l;) n = n.concat(Object.getOwnPropertyNames(l)), l = Object.getPrototypeOf(l);
            return n
        }
        t.getAllPropertyNames = g;

        function i(v) { const n = []; for (const l of g(v)) typeof v[l] == "function" && n.push(l); return n }
        t.getAllMethodNames = i;

        function r(v, n) { const l = b => function() { const L = Array.prototype.slice.call(arguments, 0); return n(b, L) }; let c = {}; for (const b of v) c[b] = l(b); return c }
        t.createProxyObject = r;

        function d(v) { return v === null ? void 0 : v }
        t.withNullAsUndefined = d
    }), V(z[10], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.toUint32 = t.toUint8 = void 0;

        function E(p) { return p < 0 ? 0 : p > 255 ? 255 : p | 0 }
        t.toUint8 = E;

        function M(p) { return p < 0 ? 0 : p > 4294967295 ? 4294967295 : p | 0 }
        t.toUint32 = M
    }), V(z[11], G([0, 1, 3, 18]), function(I, t, E, M) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.uriToFsPath = t.URI = void 0;
        const p = /^\w[\w\d+.-]*$/,
            o = /^\//,
            h = /^\/\//;

        function u(C, w) { if (!C.scheme && w) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${C.authority}", path: "${C.path}", query: "${C.query}", fragment: "${C.fragment}"}`); if (C.scheme && !p.test(C.scheme)) throw new Error("[UriError]: Scheme contains illegal characters."); if (C.path) { if (C.authority) { if (!o.test(C.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character') } else if (h.test(C.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")') } }

        function s(C, w) { return !C && !w ? "file" : C }

        function f(C, w) {
            switch (C) {
                case "https":
                case "http":
                case "file":
                    w ? w[0] !== a && (w = a + w) : w = a;
                    break
            }
            return w
        }
        const S = "",
            a = "/",
            _ = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        class m {
            constructor(w, N, y, R, D, P = !1) { typeof w == "object" ? (this.scheme = w.scheme || S, this.authority = w.authority || S, this.path = w.path || S, this.query = w.query || S, this.fragment = w.fragment || S) : (this.scheme = s(w, P), this.authority = N || S, this.path = f(this.scheme, y || S), this.query = R || S, this.fragment = D || S, u(this, P)) }
            static isUri(w) { return w instanceof m ? !0 : w ? typeof w.authority == "string" && typeof w.fragment == "string" && typeof w.path == "string" && typeof w.query == "string" && typeof w.scheme == "string" && typeof w.fsPath == "string" && typeof w.with == "function" && typeof w.toString == "function" : !1 }
            get fsPath() { return n(this, !1) }
            with(w) { if (!w) return this; let { scheme: N, authority: y, path: R, query: D, fragment: P } = w; return N === void 0 ? N = this.scheme : N === null && (N = S), y === void 0 ? y = this.authority : y === null && (y = S), R === void 0 ? R = this.path : R === null && (R = S), D === void 0 ? D = this.query : D === null && (D = S), P === void 0 ? P = this.fragment : P === null && (P = S), N === this.scheme && y === this.authority && R === this.path && D === this.query && P === this.fragment ? this : new i(N, y, R, D, P) }
            static parse(w, N = !1) { const y = _.exec(w); return y ? new i(y[2] || S, L(y[4] || S), L(y[5] || S), L(y[7] || S), L(y[9] || S), N) : new i(S, S, S, S, S) }
            static file(w) {
                let N = S;
                if (E.isWindows && (w = w.replace(/\\/g, a)), w[0] === a && w[1] === a) {
                    const y = w.indexOf(a, 2);
                    y === -1 ? (N = w.substring(2), w = a) : (N = w.substring(2, y), w = w.substring(y) || a)
                }
                return new i("file", N, w, S, S)
            }
            static from(w) { return new i(w.scheme, w.authority, w.path, w.query, w.fragment) }
            static joinPath(w, ...N) { if (!w.path) throw new Error("[UriError]: cannot call joinPath on URI without path"); let y; return E.isWindows && w.scheme === "file" ? y = m.file(M.win32.join(n(w, !0), ...N)).path : y = M.posix.join(w.path, ...N), w.with({ path: y }) }
            toString(w = !1) { return l(this, w) }
            toJSON() { return this }
            static revive(w) { if (w) { if (w instanceof m) return w; { const N = new i(w); return N._formatted = w.external, N._fsPath = w._sep === g ? w.fsPath : null, N } } else return w }
        }
        t.URI = m;
        const g = E.isWindows ? 1 : void 0;
        class i extends m {
            constructor() {
                super(...arguments);
                this._formatted = null, this._fsPath = null
            }
            get fsPath() { return this._fsPath || (this._fsPath = n(this, !1)), this._fsPath }
            toString(w = !1) { return w ? l(this, !0) : (this._formatted || (this._formatted = l(this, !1)), this._formatted) }
            toJSON() { const w = { $mid: 1 }; return this._fsPath && (w.fsPath = this._fsPath, w._sep = g), this._formatted && (w.external = this._formatted), this.path && (w.path = this.path), this.scheme && (w.scheme = this.scheme), this.authority && (w.authority = this.authority), this.query && (w.query = this.query), this.fragment && (w.fragment = this.fragment), w }
        }
        const r = {
            [58]: "%3A",
            [47]: "%2F",
            [63]: "%3F",
            [35]: "%23",
            [91]: "%5B",
            [93]: "%5D",
            [64]: "%40",
            [33]: "%21",
            [36]: "%24",
            [38]: "%26",
            [39]: "%27",
            [40]: "%28",
            [41]: "%29",
            [42]: "%2A",
            [43]: "%2B",
            [44]: "%2C",
            [59]: "%3B",
            [61]: "%3D",
            [32]: "%20"
        };

        function d(C, w) {
            let N, y = -1;
            for (let R = 0; R < C.length; R++) {
                const D = C.charCodeAt(R);
                if (D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 45 || D === 46 || D === 95 || D === 126 || w && D === 47) y !== -1 && (N += encodeURIComponent(C.substring(y, R)), y = -1), N !== void 0 && (N += C.charAt(R));
                else {
                    N === void 0 && (N = C.substr(0, R));
                    const P = r[D];
                    P !== void 0 ? (y !== -1 && (N += encodeURIComponent(C.substring(y, R)), y = -1), N += P) : y === -1 && (y = R)
                }
            }
            return y !== -1 && (N += encodeURIComponent(C.substring(y))), N !== void 0 ? N : C
        }

        function v(C) {
            let w;
            for (let N = 0; N < C.length; N++) {
                const y = C.charCodeAt(N);
                y === 35 || y === 63 ? (w === void 0 && (w = C.substr(0, N)), w += r[y]) : w !== void 0 && (w += C[N])
            }
            return w !== void 0 ? w : C
        }

        function n(C, w) { let N; return C.authority && C.path.length > 1 && C.scheme === "file" ? N = `//${C.authority}${C.path}` : C.path.charCodeAt(0) === 47 && (C.path.charCodeAt(1) >= 65 && C.path.charCodeAt(1) <= 90 || C.path.charCodeAt(1) >= 97 && C.path.charCodeAt(1) <= 122) && C.path.charCodeAt(2) === 58 ? w ? N = C.path.substr(1) : N = C.path[1].toLowerCase() + C.path.substr(2) : N = C.path, E.isWindows && (N = N.replace(/\//g, "\\")), N }
        t.uriToFsPath = n;

        function l(C, w) {
            const N = w ? v : d;
            let y = "",
                { scheme: R, authority: D, path: P, query: W, fragment: Y } = C;
            if (R && (y += R, y += ":"), (D || R === "file") && (y += a, y += a), D) {
                let T = D.indexOf("@");
                if (T !== -1) {
                    const F = D.substr(0, T);
                    D = D.substr(T + 1), T = F.indexOf(":"), T === -1 ? y += N(F, !1) : (y += N(F.substr(0, T), !1), y += ":", y += N(F.substr(T + 1), !1)), y += "@"
                }
                D = D.toLowerCase(), T = D.indexOf(":"), T === -1 ? y += N(D, !1) : (y += N(D.substr(0, T), !1), y += D.substr(T))
            }
            if (P) {
                if (P.length >= 3 && P.charCodeAt(0) === 47 && P.charCodeAt(2) === 58) {
                    const T = P.charCodeAt(1);
                    T >= 65 && T <= 90 && (P = `/${String.fromCharCode(T+32)}:${P.substr(3)}`)
                } else if (P.length >= 2 && P.charCodeAt(1) === 58) {
                    const T = P.charCodeAt(0);
                    T >= 65 && T <= 90 && (P = `${String.fromCharCode(T+32)}:${P.substr(2)}`)
                }
                y += N(P, !0)
            }
            return W && (y += "?", y += N(W, !1)), Y && (y += "#", y += w ? Y : d(Y, !1)), y
        }

        function c(C) { try { return decodeURIComponent(C) } catch (w) { return C.length > 3 ? C.substr(0, 3) + c(C.substr(3)) : C } }
        const b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

        function L(C) { return C.match(b) ? C.replace(b, w => c(w)) : C }
    }), V(z[33], G([0, 1, 6, 12, 3, 13]), function(I, t, E, M, p, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.create = t.SimpleWorkerServer = t.SimpleWorkerClient = t.logOnceWebWorkerWarning = void 0;
        const h = "$initialize";
        let u = !1;

        function s(m) {!p.isWeb || (u || (u = !0, console.warn("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq")), console.warn(m.message)) }
        t.logOnceWebWorkerWarning = s;
        class f {
            constructor(g) { this._workerId = -1, this._handler = g, this._lastSentReq = 0, this._pendingReplies = Object.create(null) }
            setWorkerId(g) { this._workerId = g }
            sendMessage(g, i) { let r = String(++this._lastSentReq); return new Promise((d, v) => { this._pendingReplies[r] = { resolve: d, reject: v }, this._send({ vsWorker: this._workerId, req: r, method: g, args: i }) }) }
            handleMessage(g) {!g || !g.vsWorker || this._workerId !== -1 && g.vsWorker !== this._workerId || this._handleMessage(g) }
            _handleMessage(g) {
                if (g.seq) {
                    let v = g;
                    if (!this._pendingReplies[v.seq]) { console.warn("Got reply to unknown seq"); return }
                    let n = this._pendingReplies[v.seq];
                    if (delete this._pendingReplies[v.seq], v.err) {
                        let l = v.err;
                        v.err.$isError && (l = new Error, l.name = v.err.name, l.message = v.err.message, l.stack = v.err.stack), n.reject(l);
                        return
                    }
                    n.resolve(v.res);
                    return
                }
                let i = g,
                    r = i.req;
                this._handler.handleMessage(i.method, i.args).then(v => { this._send({ vsWorker: this._workerId, seq: r, res: v, err: void 0 }) }, v => { v.detail instanceof Error && (v.detail = (0, E.transformErrorForSerialization)(v.detail)), this._send({ vsWorker: this._workerId, seq: r, res: void 0, err: (0, E.transformErrorForSerialization)(v) }) })
            }
            _send(g) {
                let i = [];
                if (g.req) { const r = g; for (let d = 0; d < r.args.length; d++) r.args[d] instanceof ArrayBuffer && i.push(r.args[d]) } else {
                    const r = g;
                    r.res instanceof ArrayBuffer && i.push(r.res)
                }
                this._handler.sendMessage(g, i)
            }
        }
        class S extends M.Disposable {
            constructor(g, i, r) {
                super();
                let d = null;
                this._worker = this._register(g.create("vs/base/common/worker/simpleWorker", c => { this._protocol.handleMessage(c) }, c => { d && d(c) })), this._protocol = new f({ sendMessage: (c, b) => { this._worker.postMessage(c, b) }, handleMessage: (c, b) => { if (typeof r[c] != "function") return Promise.reject(new Error("Missing method " + c + " on main thread host.")); try { return Promise.resolve(r[c].apply(r, b)) } catch (L) { return Promise.reject(L) } } }), this._protocol.setWorkerId(this._worker.getId());
                let v = null;
                typeof self.require != "undefined" && typeof self.require.getConfig == "function" ? v = self.require.getConfig() : typeof self.requirejs != "undefined" && (v = self.requirejs.s.contexts._.config);
                const n = o.getAllMethodNames(r);
                this._onModuleLoaded = this._protocol.sendMessage(h, [this._worker.getId(), JSON.parse(JSON.stringify(v)), i, n]);
                const l = (c, b) => this._request(c, b);
                this._lazyProxy = new Promise((c, b) => { d = b, this._onModuleLoaded.then(L => { c(o.createProxyObject(L, l)) }, L => { b(L), this._onError("Worker failed to load " + i, L) }) })
            }
            getProxyObject() { return this._lazyProxy }
            _request(g, i) { return new Promise((r, d) => { this._onModuleLoaded.then(() => { this._protocol.sendMessage(g, i).then(r, d) }, d) }) }
            _onError(g, i) { console.error(g), console.info(i) }
        }
        t.SimpleWorkerClient = S;
        class a {
            constructor(g, i) { this._requestHandlerFactory = i, this._requestHandler = null, this._protocol = new f({ sendMessage: (r, d) => { g(r, d) }, handleMessage: (r, d) => this._handleMessage(r, d) }) }
            onmessage(g) { this._protocol.handleMessage(g) }
            _handleMessage(g, i) { if (g === h) return this.initialize(i[0], i[1], i[2], i[3]); if (!this._requestHandler || typeof this._requestHandler[g] != "function") return Promise.reject(new Error("Missing requestHandler or method: " + g)); try { return Promise.resolve(this._requestHandler[g].apply(this._requestHandler, i)) } catch (r) { return Promise.reject(r) } }
            initialize(g, i, r, d) {
                this._protocol.setWorkerId(g);
                const v = (l, c) => this._protocol.sendMessage(l, c),
                    n = o.createProxyObject(d, v);
                return this._requestHandlerFactory ? (this._requestHandler = this._requestHandlerFactory(n), Promise.resolve(o.getAllMethodNames(this._requestHandler))) : (i && (typeof i.baseUrl != "undefined" && delete i.baseUrl, typeof i.paths != "undefined" && typeof i.paths.vs != "undefined" && delete i.paths.vs, typeof i.trustedTypesPolicy !== void 0 && delete i.trustedTypesPolicy, i.catchError = !0, self.require.config(i)), new Promise((l, c) => {
                    self.require([r], b => {
                        if (this._requestHandler = b.create(n), !this._requestHandler) { c(new Error("No RequestHandler!")); return }
                        l(o.getAllMethodNames(this._requestHandler))
                    }, c)
                }))
            }
        }
        t.SimpleWorkerServer = a;

        function _(m) { return new a(m, null) }
        t.create = _
    }), V(z[21], G([0, 1, 10]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.CharacterSet = t.CharacterClassifier = void 0;
        class M {
            constructor(h) {
                let u = (0, E.toUint8)(h);
                this._defaultValue = u, this._asciiMap = M._createAsciiMap(u), this._map = new Map
            }
            static _createAsciiMap(h) { let u = new Uint8Array(256); for (let s = 0; s < 256; s++) u[s] = h; return u }
            set(h, u) {
                let s = (0, E.toUint8)(u);
                h >= 0 && h < 256 ? this._asciiMap[h] = s : this._map.set(h, s)
            }
            get(h) { return h >= 0 && h < 256 ? this._asciiMap[h] : this._map.get(h) || this._defaultValue }
        }
        t.CharacterClassifier = M;
        class p {
            constructor() { this._actual = new M(0) }
            add(h) { this._actual.set(h, 1) }
            has(h) { return this._actual.get(h) === 1 }
        }
        t.CharacterSet = p
    }), V(z[2], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Position = void 0;
        class E {
            constructor(p, o) { this.lineNumber = p, this.column = o }
            with(p = this.lineNumber, o = this.column) { return p === this.lineNumber && o === this.column ? this : new E(p, o) }
            delta(p = 0, o = 0) { return this.with(this.lineNumber + p, this.column + o) }
            equals(p) { return E.equals(this, p) }
            static equals(p, o) { return !p && !o ? !0 : !!p && !!o && p.lineNumber === o.lineNumber && p.column === o.column }
            isBefore(p) { return E.isBefore(this, p) }
            static isBefore(p, o) { return p.lineNumber < o.lineNumber ? !0 : o.lineNumber < p.lineNumber ? !1 : p.column < o.column }
            isBeforeOrEqual(p) { return E.isBeforeOrEqual(this, p) }
            static isBeforeOrEqual(p, o) { return p.lineNumber < o.lineNumber ? !0 : o.lineNumber < p.lineNumber ? !1 : p.column <= o.column }
            static compare(p, o) {
                let h = p.lineNumber | 0,
                    u = o.lineNumber | 0;
                if (h === u) {
                    let s = p.column | 0,
                        f = o.column | 0;
                    return s - f
                }
                return h - u
            }
            clone() { return new E(this.lineNumber, this.column) }
            toString() { return "(" + this.lineNumber + "," + this.column + ")" }
            static lift(p) { return new E(p.lineNumber, p.column) }
            static isIPosition(p) { return p && typeof p.lineNumber == "number" && typeof p.column == "number" }
        }
        t.Position = E
    }), V(z[5], G([0, 1, 2]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Range = void 0;
        class M {
            constructor(o, h, u, s) { o > u || o === u && h > s ? (this.startLineNumber = u, this.startColumn = s, this.endLineNumber = o, this.endColumn = h) : (this.startLineNumber = o, this.startColumn = h, this.endLineNumber = u, this.endColumn = s) }
            isEmpty() { return M.isEmpty(this) }
            static isEmpty(o) { return o.startLineNumber === o.endLineNumber && o.startColumn === o.endColumn }
            containsPosition(o) { return M.containsPosition(this, o) }
            static containsPosition(o, h) { return !(h.lineNumber < o.startLineNumber || h.lineNumber > o.endLineNumber || h.lineNumber === o.startLineNumber && h.column < o.startColumn || h.lineNumber === o.endLineNumber && h.column > o.endColumn) }
            containsRange(o) { return M.containsRange(this, o) }
            static containsRange(o, h) { return !(h.startLineNumber < o.startLineNumber || h.endLineNumber < o.startLineNumber || h.startLineNumber > o.endLineNumber || h.endLineNumber > o.endLineNumber || h.startLineNumber === o.startLineNumber && h.startColumn < o.startColumn || h.endLineNumber === o.endLineNumber && h.endColumn > o.endColumn) }
            strictContainsRange(o) { return M.strictContainsRange(this, o) }
            static strictContainsRange(o, h) { return !(h.startLineNumber < o.startLineNumber || h.endLineNumber < o.startLineNumber || h.startLineNumber > o.endLineNumber || h.endLineNumber > o.endLineNumber || h.startLineNumber === o.startLineNumber && h.startColumn <= o.startColumn || h.endLineNumber === o.endLineNumber && h.endColumn >= o.endColumn) }
            plusRange(o) { return M.plusRange(this, o) }
            static plusRange(o, h) { let u, s, f, S; return h.startLineNumber < o.startLineNumber ? (u = h.startLineNumber, s = h.startColumn) : h.startLineNumber === o.startLineNumber ? (u = h.startLineNumber, s = Math.min(h.startColumn, o.startColumn)) : (u = o.startLineNumber, s = o.startColumn), h.endLineNumber > o.endLineNumber ? (f = h.endLineNumber, S = h.endColumn) : h.endLineNumber === o.endLineNumber ? (f = h.endLineNumber, S = Math.max(h.endColumn, o.endColumn)) : (f = o.endLineNumber, S = o.endColumn), new M(u, s, f, S) }
            intersectRanges(o) { return M.intersectRanges(this, o) }
            static intersectRanges(o, h) {
                let u = o.startLineNumber,
                    s = o.startColumn,
                    f = o.endLineNumber,
                    S = o.endColumn,
                    a = h.startLineNumber,
                    _ = h.startColumn,
                    m = h.endLineNumber,
                    g = h.endColumn;
                return u < a ? (u = a, s = _) : u === a && (s = Math.max(s, _)), f > m ? (f = m, S = g) : f === m && (S = Math.min(S, g)), u > f || u === f && s > S ? null : new M(u, s, f, S)
            }
            equalsRange(o) { return M.equalsRange(this, o) }
            static equalsRange(o, h) { return !!o && !!h && o.startLineNumber === h.startLineNumber && o.startColumn === h.startColumn && o.endLineNumber === h.endLineNumber && o.endColumn === h.endColumn }
            getEndPosition() { return M.getEndPosition(this) }
            static getEndPosition(o) { return new E.Position(o.endLineNumber, o.endColumn) }
            getStartPosition() { return M.getStartPosition(this) }
            static getStartPosition(o) { return new E.Position(o.startLineNumber, o.startColumn) }
            toString() { return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]" }
            setEndPosition(o, h) { return new M(this.startLineNumber, this.startColumn, o, h) }
            setStartPosition(o, h) { return new M(o, h, this.endLineNumber, this.endColumn) }
            collapseToStart() { return M.collapseToStart(this) }
            static collapseToStart(o) { return new M(o.startLineNumber, o.startColumn, o.startLineNumber, o.startColumn) }
            static fromPositions(o, h = o) { return new M(o.lineNumber, o.column, h.lineNumber, h.column) }
            static lift(o) { return o ? new M(o.startLineNumber, o.startColumn, o.endLineNumber, o.endColumn) : null }
            static isIRange(o) { return o && typeof o.startLineNumber == "number" && typeof o.startColumn == "number" && typeof o.endLineNumber == "number" && typeof o.endColumn == "number" }
            static areIntersectingOrTouching(o, h) { return !(o.endLineNumber < h.startLineNumber || o.endLineNumber === h.startLineNumber && o.endColumn < h.startColumn || h.endLineNumber < o.startLineNumber || h.endLineNumber === o.startLineNumber && h.endColumn < o.startColumn) }
            static areIntersecting(o, h) { return !(o.endLineNumber < h.startLineNumber || o.endLineNumber === h.startLineNumber && o.endColumn <= h.startColumn || h.endLineNumber < o.startLineNumber || h.endLineNumber === o.startLineNumber && h.endColumn <= o.startColumn) }
            static compareRangesUsingStarts(o, h) {
                if (o && h) {
                    const f = o.startLineNumber | 0,
                        S = h.startLineNumber | 0;
                    if (f === S) {
                        const a = o.startColumn | 0,
                            _ = h.startColumn | 0;
                        if (a === _) {
                            const m = o.endLineNumber | 0,
                                g = h.endLineNumber | 0;
                            if (m === g) {
                                const i = o.endColumn | 0,
                                    r = h.endColumn | 0;
                                return i - r
                            }
                            return m - g
                        }
                        return a - _
                    }
                    return f - S
                }
                return (o ? 1 : 0) - (h ? 1 : 0)
            }
            static compareRangesUsingEnds(o, h) { return o.endLineNumber === h.endLineNumber ? o.endColumn === h.endColumn ? o.startLineNumber === h.startLineNumber ? o.startColumn - h.startColumn : o.startLineNumber - h.startLineNumber : o.endColumn - h.endColumn : o.endLineNumber - h.endLineNumber }
            static spansMultipleLines(o) { return o.endLineNumber > o.startLineNumber }
        }
        t.Range = M
    }), V(z[24], G([0, 1, 2, 5]), function(I, t, E, M) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Selection = void 0;
        class p extends M.Range {
            constructor(h, u, s, f) {
                super(h, u, s, f);
                this.selectionStartLineNumber = h, this.selectionStartColumn = u, this.positionLineNumber = s, this.positionColumn = f
            }
            toString() { return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]" }
            equalsSelection(h) { return p.selectionsEqual(this, h) }
            static selectionsEqual(h, u) { return h.selectionStartLineNumber === u.selectionStartLineNumber && h.selectionStartColumn === u.selectionStartColumn && h.positionLineNumber === u.positionLineNumber && h.positionColumn === u.positionColumn }
            getDirection() { return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1 }
            setEndPosition(h, u) { return this.getDirection() === 0 ? new p(this.startLineNumber, this.startColumn, h, u) : new p(h, u, this.startLineNumber, this.startColumn) }
            getPosition() { return new E.Position(this.positionLineNumber, this.positionColumn) }
            setStartPosition(h, u) { return this.getDirection() === 0 ? new p(h, u, this.endLineNumber, this.endColumn) : new p(this.endLineNumber, this.endColumn, h, u) }
            static fromPositions(h, u = h) { return new p(h.lineNumber, h.column, u.lineNumber, u.column) }
            static liftSelection(h) { return new p(h.selectionStartLineNumber, h.selectionStartColumn, h.positionLineNumber, h.positionColumn) }
            static selectionsArrEqual(h, u) {
                if (h && !u || !h && u) return !1;
                if (!h && !u) return !0;
                if (h.length !== u.length) return !1;
                for (let s = 0, f = h.length; s < f; s++)
                    if (!this.selectionsEqual(h[s], u[s])) return !1;
                return !0
            }
            static isISelection(h) { return h && typeof h.selectionStartLineNumber == "number" && typeof h.selectionStartColumn == "number" && typeof h.positionLineNumber == "number" && typeof h.positionColumn == "number" }
            static createWithDirection(h, u, s, f, S) { return S === 0 ? new p(h, u, s, f) : new p(s, f, h, u) }
        }
        t.Selection = p
    }), V(z[25], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.TokenizationResult2 = t.TokenizationResult = t.Token = void 0;
        class E {
            constructor(h, u, s) { this.offset = h | 0, this.type = u, this.language = s }
            toString() { return "(" + this.offset + ", " + this.type + ")" }
        }
        t.Token = E;
        class M { constructor(h, u) { this.tokens = h, this.endState = u } }
        t.TokenizationResult = M;
        class p { constructor(h, u) { this.tokens = h, this.endState = u } }
        t.TokenizationResult2 = p
    }), V(z[26], G([0, 1, 8, 4]), function(I, t, E, M) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.DiffComputer = void 0;
        const p = 3;

        function o(i, r, d, v) { return new E.LcsDiff(i, r, d).ComputeDiff(v) }
        class h {
            constructor(r) {
                const d = [],
                    v = [];
                for (let n = 0, l = r.length; n < l; n++) d[n] = _(r[n], 1), v[n] = m(r[n], 1);
                this.lines = r, this._startColumns = d, this._endColumns = v
            }
            getElements() { const r = []; for (let d = 0, v = this.lines.length; d < v; d++) r[d] = this.lines[d].substring(this._startColumns[d] - 1, this._endColumns[d] - 1); return r }
            getStartLineNumber(r) { return r + 1 }
            getEndLineNumber(r) { return r + 1 }
            createCharSequence(r, d, v) {
                const n = [],
                    l = [],
                    c = [];
                let b = 0;
                for (let L = d; L <= v; L++) {
                    const C = this.lines[L],
                        w = r ? this._startColumns[L] : 1,
                        N = r ? this._endColumns[L] : C.length + 1;
                    for (let y = w; y < N; y++) n[b] = C.charCodeAt(y - 1), l[b] = L + 1, c[b] = y, b++
                }
                return new u(n, l, c)
            }
        }
        class u {
            constructor(r, d, v) { this._charCodes = r, this._lineNumbers = d, this._columns = v }
            getElements() { return this._charCodes }
            getStartLineNumber(r) { return this._lineNumbers[r] }
            getStartColumn(r) { return this._columns[r] }
            getEndLineNumber(r) { return this._lineNumbers[r] }
            getEndColumn(r) { return this._columns[r] + 1 }
        }
        class s {
            constructor(r, d, v, n, l, c, b, L) { this.originalStartLineNumber = r, this.originalStartColumn = d, this.originalEndLineNumber = v, this.originalEndColumn = n, this.modifiedStartLineNumber = l, this.modifiedStartColumn = c, this.modifiedEndLineNumber = b, this.modifiedEndColumn = L }
            static createFromDiffChange(r, d, v) { let n, l, c, b, L, C, w, N; return r.originalLength === 0 ? (n = 0, l = 0, c = 0, b = 0) : (n = d.getStartLineNumber(r.originalStart), l = d.getStartColumn(r.originalStart), c = d.getEndLineNumber(r.originalStart + r.originalLength - 1), b = d.getEndColumn(r.originalStart + r.originalLength - 1)), r.modifiedLength === 0 ? (L = 0, C = 0, w = 0, N = 0) : (L = v.getStartLineNumber(r.modifiedStart), C = v.getStartColumn(r.modifiedStart), w = v.getEndLineNumber(r.modifiedStart + r.modifiedLength - 1), N = v.getEndColumn(r.modifiedStart + r.modifiedLength - 1)), new s(n, l, c, b, L, C, w, N) }
        }

        function f(i) {
            if (i.length <= 1) return i;
            const r = [i[0]];
            let d = r[0];
            for (let v = 1, n = i.length; v < n; v++) {
                const l = i[v],
                    c = l.originalStart - (d.originalStart + d.originalLength),
                    b = l.modifiedStart - (d.modifiedStart + d.modifiedLength);
                Math.min(c, b) < p ? (d.originalLength = l.originalStart + l.originalLength - d.originalStart, d.modifiedLength = l.modifiedStart + l.modifiedLength - d.modifiedStart) : (r.push(l), d = l)
            }
            return r
        }
        class S {
            constructor(r, d, v, n, l) { this.originalStartLineNumber = r, this.originalEndLineNumber = d, this.modifiedStartLineNumber = v, this.modifiedEndLineNumber = n, this.charChanges = l }
            static createFromDiffResult(r, d, v, n, l, c, b) {
                let L, C, w, N, y;
                if (d.originalLength === 0 ? (L = v.getStartLineNumber(d.originalStart) - 1, C = 0) : (L = v.getStartLineNumber(d.originalStart), C = v.getEndLineNumber(d.originalStart + d.originalLength - 1)), d.modifiedLength === 0 ? (w = n.getStartLineNumber(d.modifiedStart) - 1, N = 0) : (w = n.getStartLineNumber(d.modifiedStart), N = n.getEndLineNumber(d.modifiedStart + d.modifiedLength - 1)), c && d.originalLength > 0 && d.originalLength < 20 && d.modifiedLength > 0 && d.modifiedLength < 20 && l()) {
                    const R = v.createCharSequence(r, d.originalStart, d.originalStart + d.originalLength - 1),
                        D = n.createCharSequence(r, d.modifiedStart, d.modifiedStart + d.modifiedLength - 1);
                    let P = o(R, D, l, !0).changes;
                    b && (P = f(P)), y = [];
                    for (let W = 0, Y = P.length; W < Y; W++) y.push(s.createFromDiffChange(P[W], R, D))
                }
                return new S(L, C, w, N, y)
            }
        }
        class a {
            constructor(r, d, v) { this.shouldComputeCharChanges = v.shouldComputeCharChanges, this.shouldPostProcessCharChanges = v.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = v.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = v.shouldMakePrettyDiff, this.originalLines = r, this.modifiedLines = d, this.original = new h(r), this.modified = new h(d), this.continueLineDiff = g(v.maxComputationTime), this.continueCharDiff = g(v.maxComputationTime === 0 ? 0 : Math.min(v.maxComputationTime, 5e3)) }
            computeDiff() {
                if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? { quitEarly: !1, changes: [] } : { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.lines.length, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }] };
                if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return { quitEarly: !1, changes: [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.lines.length, modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }] };
                const r = o(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff),
                    d = r.changes,
                    v = r.quitEarly;
                if (this.shouldIgnoreTrimWhitespace) { const b = []; for (let L = 0, C = d.length; L < C; L++) b.push(S.createFromDiffResult(this.shouldIgnoreTrimWhitespace, d[L], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)); return { quitEarly: v, changes: b } }
                const n = [];
                let l = 0,
                    c = 0;
                for (let b = -1, L = d.length; b < L; b++) {
                    const C = b + 1 < L ? d[b + 1] : null,
                        w = C ? C.originalStart : this.originalLines.length,
                        N = C ? C.modifiedStart : this.modifiedLines.length;
                    for (; l < w && c < N;) {
                        const y = this.originalLines[l],
                            R = this.modifiedLines[c];
                        if (y !== R) {
                            {
                                let D = _(y, 1),
                                    P = _(R, 1);
                                for (; D > 1 && P > 1;) {
                                    const W = y.charCodeAt(D - 2),
                                        Y = R.charCodeAt(P - 2);
                                    if (W !== Y) break;
                                    D--, P--
                                }(D > 1 || P > 1) && this._pushTrimWhitespaceCharChange(n, l + 1, 1, D, c + 1, 1, P)
                            } {
                                let D = m(y, 1),
                                    P = m(R, 1);
                                const W = y.length + 1,
                                    Y = R.length + 1;
                                for (; D < W && P < Y;) {
                                    const T = y.charCodeAt(D - 1),
                                        F = y.charCodeAt(P - 1);
                                    if (T !== F) break;
                                    D++, P++
                                }(D < W || P < Y) && this._pushTrimWhitespaceCharChange(n, l + 1, D, W, c + 1, P, Y)
                            }
                        }
                        l++, c++
                    }
                    C && (n.push(S.createFromDiffResult(this.shouldIgnoreTrimWhitespace, C, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), l += C.originalLength, c += C.modifiedLength)
                }
                return { quitEarly: v, changes: n }
            }
            _pushTrimWhitespaceCharChange(r, d, v, n, l, c, b) {
                if (!this._mergeTrimWhitespaceCharChange(r, d, v, n, l, c, b)) {
                    let L;
                    this.shouldComputeCharChanges && (L = [new s(d, v, d, n, l, c, l, b)]), r.push(new S(d, d, l, l, L))
                }
            }
            _mergeTrimWhitespaceCharChange(r, d, v, n, l, c, b) { const L = r.length; if (L === 0) return !1; const C = r[L - 1]; return C.originalEndLineNumber === 0 || C.modifiedEndLineNumber === 0 ? !1 : C.originalEndLineNumber + 1 === d && C.modifiedEndLineNumber + 1 === l ? (C.originalEndLineNumber = d, C.modifiedEndLineNumber = l, this.shouldComputeCharChanges && C.charChanges && C.charChanges.push(new s(d, v, d, n, l, c, l, b)), !0) : !1 }
        }
        t.DiffComputer = a;

        function _(i, r) { const d = M.firstNonWhitespaceIndex(i); return d === -1 ? r : d + 1 }

        function m(i, r) { const d = M.lastNonWhitespaceIndex(i); return d === -1 ? r : d + 2 }

        function g(i) { if (i === 0) return () => !0; const r = Date.now(); return () => Date.now() - r < i }
    }), V(z[27], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getWordAtText = t.ensureValidWordDefinition = t.DEFAULT_WORD_REGEXP = t.USUAL_WORD_SEPARATORS = void 0, t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";

        function E(u = "") { let s = "(-?\\d*\\.\\d\\w*)|([^"; for (const f of t.USUAL_WORD_SEPARATORS) u.indexOf(f) >= 0 || (s += "\\" + f); return s += "\\s]+)", new RegExp(s, "g") }
        t.DEFAULT_WORD_REGEXP = E();

        function M(u) {
            let s = t.DEFAULT_WORD_REGEXP;
            if (u && u instanceof RegExp)
                if (u.global) s = u;
                else {
                    let f = "g";
                    u.ignoreCase && (f += "i"), u.multiline && (f += "m"), u.unicode && (f += "u"), s = new RegExp(u.source, f)
                }
            return s.lastIndex = 0, s
        }
        t.ensureValidWordDefinition = M;
        const p = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };

        function o(u, s, f, S, a = p) {
            if (f.length > a.maxLen) { let r = u - a.maxLen / 2; return r < 0 ? r = 0 : S += r, f = f.substring(r, u + a.maxLen / 2), o(u, s, f, S, a) }
            const _ = Date.now(),
                m = u - 1 - S;
            let g = -1,
                i = null;
            for (let r = 1; !(Date.now() - _ >= a.timeBudget); r++) {
                const d = m - a.windowSize * r;
                s.lastIndex = Math.max(0, d);
                const v = h(s, f, m, g);
                if (!v && i || (i = v, d <= 0)) break;
                g = d
            }
            if (i) { let r = { word: i[0], startColumn: S + 1 + i.index, endColumn: S + 1 + i.index + i[0].length }; return s.lastIndex = 0, r }
            return null
        }
        t.getWordAtText = o;

        function h(u, s, f, S) { let a; for (; a = u.exec(s);) { const _ = a.index || 0; if (_ <= f && u.lastIndex >= f) return a; if (S > 0 && _ > S) return null } return null }
    }), V(z[28], G([0, 1, 21]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.computeLinks = t.LinkComputer = t.StateMachine = t.Uint8Matrix = void 0;
        class M {
            constructor(_, m, g) {
                const i = new Uint8Array(_ * m);
                for (let r = 0, d = _ * m; r < d; r++) i[r] = g;
                this._data = i, this.rows = _, this.cols = m
            }
            get(_, m) { return this._data[_ * this.cols + m] }
            set(_, m, g) { this._data[_ * this.cols + m] = g }
        }
        t.Uint8Matrix = M;
        class p {
            constructor(_) {
                let m = 0,
                    g = 0;
                for (let r = 0, d = _.length; r < d; r++) {
                    let [v, n, l] = _[r];
                    n > m && (m = n), v > g && (g = v), l > g && (g = l)
                }
                m++, g++;
                let i = new M(g, m, 0);
                for (let r = 0, d = _.length; r < d; r++) {
                    let [v, n, l] = _[r];
                    i.set(v, n, l)
                }
                this._states = i, this._maxCharCode = m
            }
            nextState(_, m) { return m < 0 || m >= this._maxCharCode ? 0 : this._states.get(_, m) }
        }
        t.StateMachine = p;
        let o = null;

        function h() {
            return o === null && (o = new p([
                [1, 104, 2],
                [1, 72, 2],
                [1, 102, 6],
                [1, 70, 6],
                [2, 116, 3],
                [2, 84, 3],
                [3, 116, 4],
                [3, 84, 4],
                [4, 112, 5],
                [4, 80, 5],
                [5, 115, 9],
                [5, 83, 9],
                [5, 58, 10],
                [6, 105, 7],
                [6, 73, 7],
                [7, 108, 8],
                [7, 76, 8],
                [8, 101, 9],
                [8, 69, 9],
                [9, 58, 10],
                [10, 47, 11],
                [11, 47, 12]
            ])), o
        }
        let u = null;

        function s() { if (u === null) { u = new E.CharacterClassifier(0); const a = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u3011\u300F\u300D\u300B\u3009\u201D\u2019\uFF40\uFF5E\u2026`; for (let m = 0; m < a.length; m++) u.set(a.charCodeAt(m), 1); const _ = ".,;"; for (let m = 0; m < _.length; m++) u.set(_.charCodeAt(m), 2) } return u }
        class f {
            static _createLink(_, m, g, i, r) {
                let d = r - 1;
                do {
                    const v = m.charCodeAt(d);
                    if (_.get(v) !== 2) break;
                    d--
                } while (d > i);
                if (i > 0) {
                    const v = m.charCodeAt(i - 1),
                        n = m.charCodeAt(d);
                    (v === 40 && n === 41 || v === 91 && n === 93 || v === 123 && n === 125) && d--
                }
                return { range: { startLineNumber: g, startColumn: i + 1, endLineNumber: g, endColumn: d + 2 }, url: m.substring(i, d + 1) }
            }
            static computeLinks(_, m = h()) {
                const g = s();
                let i = [];
                for (let r = 1, d = _.getLineCount(); r <= d; r++) {
                    const v = _.getLineContent(r),
                        n = v.length;
                    let l = 0,
                        c = 0,
                        b = 0,
                        L = 1,
                        C = !1,
                        w = !1,
                        N = !1,
                        y = !1;
                    for (; l < n;) {
                        let R = !1;
                        const D = v.charCodeAt(l);
                        if (L === 13) {
                            let P;
                            switch (D) {
                                case 40:
                                    C = !0, P = 0;
                                    break;
                                case 41:
                                    P = C ? 0 : 1;
                                    break;
                                case 91:
                                    N = !0, w = !0, P = 0;
                                    break;
                                case 93:
                                    N = !1, P = w ? 0 : 1;
                                    break;
                                case 123:
                                    y = !0, P = 0;
                                    break;
                                case 125:
                                    P = y ? 0 : 1;
                                    break;
                                case 39:
                                    P = b === 34 || b === 96 ? 0 : 1;
                                    break;
                                case 34:
                                    P = b === 39 || b === 96 ? 0 : 1;
                                    break;
                                case 96:
                                    P = b === 39 || b === 34 ? 0 : 1;
                                    break;
                                case 42:
                                    P = b === 42 ? 1 : 0;
                                    break;
                                case 124:
                                    P = b === 124 ? 1 : 0;
                                    break;
                                case 32:
                                    P = N ? 0 : 1;
                                    break;
                                default:
                                    P = g.get(D)
                            }
                            P === 1 && (i.push(f._createLink(g, v, r, c, l)), R = !0)
                        } else if (L === 12) {
                            let P;
                            D === 91 ? (w = !0, P = 0) : P = g.get(D), P === 1 ? R = !0 : L = 13
                        } else L = m.nextState(L, D), L === 0 && (R = !0);
                        R && (L = 1, C = !1, w = !1, y = !1, c = l + 1, b = D), l++
                    }
                    L === 13 && i.push(f._createLink(g, v, r, c, n))
                }
                return i
            }
        }
        t.LinkComputer = f;

        function S(a) { return !a || typeof a.getLineCount != "function" || typeof a.getLineContent != "function" ? [] : f.computeLinks(a) }
        t.computeLinks = S
    }), V(z[29], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.BasicInplaceReplace = void 0;
        class E {
            constructor() {
                this._defaultValueSet = [
                    ["true", "false"],
                    ["True", "False"],
                    ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
                    ["public", "protected", "private"]
                ]
            }
            navigateValueSet(p, o, h, u, s) { if (p && o) { let f = this.doNavigateValueSet(o, s); if (f) return { range: p, value: f } } if (h && u) { let f = this.doNavigateValueSet(u, s); if (f) return { range: h, value: f } } return null }
            doNavigateValueSet(p, o) { let h = this.numberReplace(p, o); return h !== null ? h : this.textReplace(p, o) }
            numberReplace(p, o) {
                let h = Math.pow(10, p.length - (p.lastIndexOf(".") + 1)),
                    u = Number(p),
                    s = parseFloat(p);
                return !isNaN(u) && !isNaN(s) && u === s ? u === 0 && !o ? null : (u = Math.floor(u * h), u += o ? h : -h, String(u / h)) : null
            }
            textReplace(p, o) { return this.valueSetsReplace(this._defaultValueSet, p, o) }
            valueSetsReplace(p, o, h) { let u = null; for (let s = 0, f = p.length; u === null && s < f; s++) u = this.valueSetReplace(p[s], o, h); return u }
            valueSetReplace(p, o, h) { let u = p.indexOf(o); return u >= 0 ? (u += h ? 1 : -1, u < 0 ? u = p.length - 1 : u %= p.length, p[u]) : null }
        }
        t.BasicInplaceReplace = E, E.INSTANCE = new E
    }), V(z[30], G([0, 1]), function(I, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.WrappingIndent = t.TrackedRangeStickiness = t.TextEditorCursorStyle = t.TextEditorCursorBlinkingStyle = t.SymbolTag = t.SymbolKind = t.SignatureHelpTriggerKind = t.SelectionDirection = t.ScrollbarVisibility = t.ScrollType = t.RenderMinimap = t.RenderLineNumbersType = t.OverviewRulerLane = t.OverlayWidgetPositionPreference = t.MouseTargetType = t.MinimapPosition = t.MarkerTag = t.MarkerSeverity = t.KeyCode = t.InlineHintKind = t.IndentAction = t.EndOfLineSequence = t.EndOfLinePreference = t.EditorOption = t.EditorAutoIndentStrategy = t.DocumentHighlightKind = t.DefaultEndOfLine = t.CursorChangeReason = t.ContentWidgetPositionPreference = t.CompletionTriggerKind = t.CompletionItemTag = t.CompletionItemKind = t.CompletionItemInsertTextRule = t.AccessibilitySupport = void 0;
        var E;
        (function(e) { e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled" })(E = t.AccessibilitySupport || (t.AccessibilitySupport = {}));
        var M;
        (function(e) { e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet" })(M = t.CompletionItemInsertTextRule || (t.CompletionItemInsertTextRule = {}));
        var p;
        (function(e) { e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet" })(p = t.CompletionItemKind || (t.CompletionItemKind = {}));
        var o;
        (function(e) { e[e.Deprecated = 1] = "Deprecated" })(o = t.CompletionItemTag || (t.CompletionItemTag = {}));
        var h;
        (function(e) { e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions" })(h = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
        var u;
        (function(e) { e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW" })(u = t.ContentWidgetPositionPreference || (t.ContentWidgetPositionPreference = {}));
        var s;
        (function(e) { e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo" })(s = t.CursorChangeReason || (t.CursorChangeReason = {}));
        var f;
        (function(e) { e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF" })(f = t.DefaultEndOfLine || (t.DefaultEndOfLine = {}));
        var S;
        (function(e) { e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write" })(S = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
        var a;
        (function(e) { e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full" })(a = t.EditorAutoIndentStrategy || (t.EditorAutoIndentStrategy = {}));
        var _;
        (function(e) { e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.ariaLabel = 4] = "ariaLabel", e[e.autoClosingBrackets = 5] = "autoClosingBrackets", e[e.autoClosingDelete = 6] = "autoClosingDelete", e[e.autoClosingOvertype = 7] = "autoClosingOvertype", e[e.autoClosingQuotes = 8] = "autoClosingQuotes", e[e.autoIndent = 9] = "autoIndent", e[e.automaticLayout = 10] = "automaticLayout", e[e.autoSurround = 11] = "autoSurround", e[e.codeLens = 12] = "codeLens", e[e.codeLensFontFamily = 13] = "codeLensFontFamily", e[e.codeLensFontSize = 14] = "codeLensFontSize", e[e.colorDecorators = 15] = "colorDecorators", e[e.columnSelection = 16] = "columnSelection", e[e.comments = 17] = "comments", e[e.contextmenu = 18] = "contextmenu", e[e.copyWithSyntaxHighlighting = 19] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 20] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 21] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 22] = "cursorStyle", e[e.cursorSurroundingLines = 23] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 24] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 25] = "cursorWidth", e[e.disableLayerHinting = 26] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 27] = "disableMonospaceOptimizations", e[e.domReadOnly = 28] = "domReadOnly", e[e.dragAndDrop = 29] = "dragAndDrop", e[e.emptySelectionClipboard = 30] = "emptySelectionClipboard", e[e.extraEditorClassName = 31] = "extraEditorClassName", e[e.fastScrollSensitivity = 32] = "fastScrollSensitivity", e[e.find = 33] = "find", e[e.fixedOverflowWidgets = 34] = "fixedOverflowWidgets", e[e.folding = 35] = "folding", e[e.foldingStrategy = 36] = "foldingStrategy", e[e.foldingHighlight = 37] = "foldingHighlight", e[e.unfoldOnClickAfterEndOfLine = 38] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 39] = "fontFamily", e[e.fontInfo = 40] = "fontInfo", e[e.fontLigatures = 41] = "fontLigatures", e[e.fontSize = 42] = "fontSize", e[e.fontWeight = 43] = "fontWeight", e[e.formatOnPaste = 44] = "formatOnPaste", e[e.formatOnType = 45] = "formatOnType", e[e.glyphMargin = 46] = "glyphMargin", e[e.gotoLocation = 47] = "gotoLocation", e[e.hideCursorInOverviewRuler = 48] = "hideCursorInOverviewRuler", e[e.highlightActiveIndentGuide = 49] = "highlightActiveIndentGuide", e[e.hover = 50] = "hover", e[e.inDiffEditor = 51] = "inDiffEditor", e[e.letterSpacing = 52] = "letterSpacing", e[e.lightbulb = 53] = "lightbulb", e[e.lineDecorationsWidth = 54] = "lineDecorationsWidth", e[e.lineHeight = 55] = "lineHeight", e[e.lineNumbers = 56] = "lineNumbers", e[e.lineNumbersMinChars = 57] = "lineNumbersMinChars", e[e.linkedEditing = 58] = "linkedEditing", e[e.links = 59] = "links", e[e.matchBrackets = 60] = "matchBrackets", e[e.minimap = 61] = "minimap", e[e.mouseStyle = 62] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 63] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 64] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 65] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 66] = "multiCursorModifier", e[e.multiCursorPaste = 67] = "multiCursorPaste", e[e.occurrencesHighlight = 68] = "occurrencesHighlight", e[e.overviewRulerBorder = 69] = "overviewRulerBorder", e[e.overviewRulerLanes = 70] = "overviewRulerLanes", e[e.padding = 71] = "padding", e[e.parameterHints = 72] = "parameterHints", e[e.peekWidgetDefaultFocus = 73] = "peekWidgetDefaultFocus", e[e.definitionLinkOpensInPeek = 74] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 75] = "quickSuggestions", e[e.quickSuggestionsDelay = 76] = "quickSuggestionsDelay", e[e.readOnly = 77] = "readOnly", e[e.renameOnType = 78] = "renameOnType", e[e.renderControlCharacters = 79] = "renderControlCharacters", e[e.renderIndentGuides = 80] = "renderIndentGuides", e[e.renderFinalNewline = 81] = "renderFinalNewline", e[e.renderLineHighlight = 82] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 83] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 84] = "renderValidationDecorations", e[e.renderWhitespace = 85] = "renderWhitespace", e[e.revealHorizontalRightPadding = 86] = "revealHorizontalRightPadding", e[e.roundedSelection = 87] = "roundedSelection", e[e.rulers = 88] = "rulers", e[e.scrollbar = 89] = "scrollbar", e[e.scrollBeyondLastColumn = 90] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 91] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 92] = "scrollPredominantAxis", e[e.selectionClipboard = 93] = "selectionClipboard", e[e.selectionHighlight = 94] = "selectionHighlight", e[e.selectOnLineNumbers = 95] = "selectOnLineNumbers", e[e.showFoldingControls = 96] = "showFoldingControls", e[e.showUnused = 97] = "showUnused", e[e.snippetSuggestions = 98] = "snippetSuggestions", e[e.smartSelect = 99] = "smartSelect", e[e.smoothScrolling = 100] = "smoothScrolling", e[e.stickyTabStops = 101] = "stickyTabStops", e[e.stopRenderingLineAfter = 102] = "stopRenderingLineAfter", e[e.suggest = 103] = "suggest", e[e.suggestFontSize = 104] = "suggestFontSize", e[e.suggestLineHeight = 105] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 106] = "suggestOnTriggerCharacters", e[e.suggestSelection = 107] = "suggestSelection", e[e.tabCompletion = 108] = "tabCompletion", e[e.tabIndex = 109] = "tabIndex", e[e.unusualLineTerminators = 110] = "unusualLineTerminators", e[e.useTabStops = 111] = "useTabStops", e[e.wordSeparators = 112] = "wordSeparators", e[e.wordWrap = 113] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 114] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 115] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 116] = "wordWrapColumn", e[e.wordWrapOverride1 = 117] = "wordWrapOverride1", e[e.wordWrapOverride2 = 118] = "wordWrapOverride2", e[e.wrappingIndent = 119] = "wrappingIndent", e[e.wrappingStrategy = 120] = "wrappingStrategy", e[e.showDeprecated = 121] = "showDeprecated", e[e.inlineHints = 122] = "inlineHints", e[e.editorClassName = 123] = "editorClassName", e[e.pixelRatio = 124] = "pixelRatio", e[e.tabFocusMode = 125] = "tabFocusMode", e[e.layoutInfo = 126] = "layoutInfo", e[e.wrappingInfo = 127] = "wrappingInfo" })(_ = t.EditorOption || (t.EditorOption = {}));
        var m;
        (function(e) { e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF" })(m = t.EndOfLinePreference || (t.EndOfLinePreference = {}));
        var g;
        (function(e) { e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF" })(g = t.EndOfLineSequence || (t.EndOfLineSequence = {}));
        var i;
        (function(e) { e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent" })(i = t.IndentAction || (t.IndentAction = {}));
        var r;
        (function(e) { e[e.Other = 0] = "Other", e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter" })(r = t.InlineHintKind || (t.InlineHintKind = {}));
        var d;
        (function(e) { e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7", e[e.NUMPAD_8 = 101] = "NUMPAD_8", e[e.NUMPAD_9 = 102] = "NUMPAD_9", e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY", e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT", e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL", e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.MAX_VALUE = 112] = "MAX_VALUE" })(d = t.KeyCode || (t.KeyCode = {}));
        var v;
        (function(e) { e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error" })(v = t.MarkerSeverity || (t.MarkerSeverity = {}));
        var n;
        (function(e) { e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated" })(n = t.MarkerTag || (t.MarkerTag = {}));
        var l;
        (function(e) { e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter" })(l = t.MinimapPosition || (t.MinimapPosition = {}));
        var c;
        (function(e) { e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR" })(c = t.MouseTargetType || (t.MouseTargetType = {}));
        var b;
        (function(e) { e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER" })(b = t.OverlayWidgetPositionPreference || (t.OverlayWidgetPositionPreference = {}));
        var L;
        (function(e) { e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full" })(L = t.OverviewRulerLane || (t.OverviewRulerLane = {}));
        var C;
        (function(e) { e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom" })(C = t.RenderLineNumbersType || (t.RenderLineNumbersType = {}));
        var w;
        (function(e) { e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks" })(w = t.RenderMinimap || (t.RenderMinimap = {}));
        var N;
        (function(e) { e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate" })(N = t.ScrollType || (t.ScrollType = {}));
        var y;
        (function(e) { e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible" })(y = t.ScrollbarVisibility || (t.ScrollbarVisibility = {}));
        var R;
        (function(e) { e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL" })(R = t.SelectionDirection || (t.SelectionDirection = {}));
        var D;
        (function(e) { e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange" })(D = t.SignatureHelpTriggerKind || (t.SignatureHelpTriggerKind = {}));
        var P;
        (function(e) { e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter" })(P = t.SymbolKind || (t.SymbolKind = {}));
        var W;
        (function(e) { e[e.Deprecated = 1] = "Deprecated" })(W = t.SymbolTag || (t.SymbolTag = {}));
        var Y;
        (function(e) { e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid" })(Y = t.TextEditorCursorBlinkingStyle || (t.TextEditorCursorBlinkingStyle = {}));
        var T;
        (function(e) { e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin" })(T = t.TextEditorCursorStyle || (t.TextEditorCursorStyle = {}));
        var F;
        (function(e) { e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter" })(F = t.TrackedRangeStickiness || (t.TrackedRangeStickiness = {}));
        var O;
        (function(e) { e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent" })(O = t.WrappingIndent || (t.WrappingIndent = {}))
    }), V(z[31], G([0, 1, 23, 7, 19, 11, 2, 5, 24, 25, 30]), function(I, t, E, M, p, o, h, u, s, f, S) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.createMonacoBaseAPI = t.KeyMod = void 0;
        class a { static chord(g, i) { return (0, p.KeyChord)(g, i) } }
        t.KeyMod = a, a.CtrlCmd = 2048, a.Shift = 1024, a.Alt = 512, a.WinCtrl = 256;

        function _() { return { editor: void 0, languages: void 0, CancellationTokenSource: E.CancellationTokenSource, Emitter: M.Emitter, KeyCode: S.KeyCode, KeyMod: a, Position: h.Position, Range: u.Range, Selection: s.Selection, SelectionDirection: S.SelectionDirection, MarkerSeverity: S.MarkerSeverity, MarkerTag: S.MarkerTag, Uri: o.URI, Token: f.Token } }
        t.createMonacoBaseAPI = _
    }), V(z[32], G([0, 1, 10]), function(I, t, E) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PrefixSumComputer = t.PrefixSumIndexOfResult = void 0;
        class M { constructor(h, u) { this.index = h, this.remainder = u } }
        t.PrefixSumIndexOfResult = M;
        class p {
            constructor(h) { this.values = h, this.prefixSum = new Uint32Array(h.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1 }
            insertValues(h, u) {
                h = (0, E.toUint32)(h);
                const s = this.values,
                    f = this.prefixSum,
                    S = u.length;
                return S === 0 ? !1 : (this.values = new Uint32Array(s.length + S), this.values.set(s.subarray(0, h), 0), this.values.set(s.subarray(h), h + S), this.values.set(u, h), h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(f.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
            }
            changeValue(h, u) { return h = (0, E.toUint32)(h), u = (0, E.toUint32)(u), this.values[h] === u ? !1 : (this.values[h] = u, h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1), !0) }
            removeValues(h, u) {
                h = (0, E.toUint32)(h), u = (0, E.toUint32)(u);
                const s = this.values,
                    f = this.prefixSum;
                if (h >= s.length) return !1;
                let S = s.length - h;
                return u >= S && (u = S), u === 0 ? !1 : (this.values = new Uint32Array(s.length - u), this.values.set(s.subarray(0, h), 0), this.values.set(s.subarray(h + u), h), this.prefixSum = new Uint32Array(this.values.length), h - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = h - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(f.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
            }
            getTotalValue() { return this.values.length === 0 ? 0 : this._getAccumulatedValue(this.values.length - 1) }
            getAccumulatedValue(h) { return h < 0 ? 0 : (h = (0, E.toUint32)(h), this._getAccumulatedValue(h)) }
            _getAccumulatedValue(h) {
                if (h <= this.prefixSumValidIndex[0]) return this.prefixSum[h];
                let u = this.prefixSumValidIndex[0] + 1;
                u === 0 && (this.prefixSum[0] = this.values[0], u++), h >= this.values.length && (h = this.values.length - 1);
                for (let s = u; s <= h; s++) this.prefixSum[s] = this.prefixSum[s - 1] + this.values[s];
                return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], h), this.prefixSum[h]
            }
            getIndexOf(h) {
                h = Math.floor(h), this.getTotalValue();
                let u = 0,
                    s = this.values.length - 1,
                    f = 0,
                    S = 0,
                    a = 0;
                for (; u <= s;)
                    if (f = u + (s - u) / 2 | 0, S = this.prefixSum[f], a = S - this.values[f], h < a) s = f - 1;
                    else if (h >= S) u = f + 1;
                else break;
                return new M(f, h - a)
            }
        }
        t.PrefixSumComputer = p
    }), V(z[20], G([0, 1, 4, 2, 32]), function(I, t, E, M, p) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.MirrorTextModel = void 0;
        class o {
            constructor(u, s, f, S) { this._uri = u, this._lines = s, this._eol = f, this._versionId = S, this._lineStarts = null, this._cachedTextValue = null }
            dispose() { this._lines.length = 0 }
            get version() { return this._versionId }
            getText() { return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue }
            onEvents(u) {
                u.eol && u.eol !== this._eol && (this._eol = u.eol, this._lineStarts = null);
                const s = u.changes;
                for (const f of s) this._acceptDeleteRange(f.range), this._acceptInsertText(new M.Position(f.range.startLineNumber, f.range.startColumn), f.text);
                this._versionId = u.versionId, this._cachedTextValue = null
            }
            _ensureLineStarts() {
                if (!this._lineStarts) {
                    const u = this._eol.length,
                        s = this._lines.length,
                        f = new Uint32Array(s);
                    for (let S = 0; S < s; S++) f[S] = this._lines[S].length + u;
                    this._lineStarts = new p.PrefixSumComputer(f)
                }
            }
            _setLineText(u, s) { this._lines[u] = s, this._lineStarts && this._lineStarts.changeValue(u, this._lines[u].length + this._eol.length) }
            _acceptDeleteRange(u) {
                if (u.startLineNumber === u.endLineNumber) {
                    if (u.startColumn === u.endColumn) return;
                    this._setLineText(u.startLineNumber - 1, this._lines[u.startLineNumber - 1].substring(0, u.startColumn - 1) + this._lines[u.startLineNumber - 1].substring(u.endColumn - 1));
                    return
                }
                this._setLineText(u.startLineNumber - 1, this._lines[u.startLineNumber - 1].substring(0, u.startColumn - 1) + this._lines[u.endLineNumber - 1].substring(u.endColumn - 1)), this._lines.splice(u.startLineNumber, u.endLineNumber - u.startLineNumber), this._lineStarts && this._lineStarts.removeValues(u.startLineNumber, u.endLineNumber - u.startLineNumber)
            }
            _acceptInsertText(u, s) {
                if (s.length !== 0) {
                    let f = (0, E.splitLines)(s);
                    if (f.length === 1) { this._setLineText(u.lineNumber - 1, this._lines[u.lineNumber - 1].substring(0, u.column - 1) + f[0] + this._lines[u.lineNumber - 1].substring(u.column - 1)); return }
                    f[f.length - 1] += this._lines[u.lineNumber - 1].substring(u.column - 1), this._setLineText(u.lineNumber - 1, this._lines[u.lineNumber - 1].substring(0, u.column - 1) + f[0]);
                    let S = new Uint32Array(f.length - 1);
                    for (let a = 1; a < f.length; a++) this._lines.splice(u.lineNumber + a - 1, 0, f[a]), S[a - 1] = f[a].length + this._eol.length;
                    this._lineStarts && this._lineStarts.insertValues(u.lineNumber, S)
                }
            }
        }
        t.MirrorTextModel = o
    });
    var ne = this && this.__awaiter || function(I, t, E, M) {
        function p(o) { return o instanceof E ? o : new E(function(h) { h(o) }) }
        return new(E || (E = Promise))(function(o, h) {
            function u(S) { try { f(M.next(S)) } catch (a) { h(a) } }

            function s(S) { try { f(M.throw(S)) } catch (a) { h(a) } }

            function f(S) { S.done ? o(S.value) : p(S.value).then(u, s) }
            f((M = M.apply(I, t || [])).next())
        })
    };
    V(z[34], G([0, 1, 8, 3, 11, 2, 5, 26, 20, 27, 28, 29, 31, 13, 9]), function(I, t, E, M, p, o, h, u, s, f, S, a, _, m, g) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.create = t.EditorSimpleWorker = void 0;
        class i extends s.MirrorTextModel {get uri() { return this._uri }
            get eol() { return this._eol }
            getValue() { return this.getText() }
            getLinesContent() { return this._lines.slice(0) }
            getLineCount() { return this._lines.length }
            getLineContent(n) { return this._lines[n - 1] }
            getWordAtPosition(n, l) { let c = (0, f.getWordAtText)(n.column, (0, f.ensureValidWordDefinition)(l), this._lines[n.lineNumber - 1], 0); return c ? new h.Range(n.lineNumber, c.startColumn, n.lineNumber, c.endColumn) : null }
            words(n) {
                const l = this._lines,
                    c = this._wordenize.bind(this);
                let b = 0,
                    L = "",
                    C = 0,
                    w = [];
                return {*[Symbol.iterator]() {
                        for (;;)
                            if (C < w.length) {
                                const N = L.substring(w[C].start, w[C].end);
                                C += 1, yield N
                            } else if (b < l.length) L = l[b], w = c(L, n), C = 0, b += 1;
                        else break
                    }
                }
            }
            getLineWords(n, l) {
                let c = this._lines[n - 1],
                    b = this._wordenize(c, l),
                    L = [];
                for (const C of b) L.push({ word: c.substring(C.start, C.end), startColumn: C.start + 1, endColumn: C.end + 1 });
                return L
            }
            _wordenize(n, l) {
                const c = [];
                let b;
                for (l.lastIndex = 0;
                    (b = l.exec(n)) && b[0].length !== 0;) c.push({ start: b.index, end: b.index + b[0].length });
                return c
            }
            getValueInRange(n) {
                if (n = this._validateRange(n), n.startLineNumber === n.endLineNumber) return this._lines[n.startLineNumber - 1].substring(n.startColumn - 1, n.endColumn - 1);
                let l = this._eol,
                    c = n.startLineNumber - 1,
                    b = n.endLineNumber - 1,
                    L = [];
                L.push(this._lines[c].substring(n.startColumn - 1));
                for (let C = c + 1; C < b; C++) L.push(this._lines[C]);
                return L.push(this._lines[b].substring(0, n.endColumn - 1)), L.join(l)
            }
            offsetAt(n) { return n = this._validatePosition(n), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(n.lineNumber - 2) + (n.column - 1) }
            positionAt(n) {
                n = Math.floor(n), n = Math.max(0, n), this._ensureLineStarts();
                let l = this._lineStarts.getIndexOf(n),
                    c = this._lines[l.index].length;
                return { lineNumber: 1 + l.index, column: 1 + Math.min(l.remainder, c) }
            }
            _validateRange(n) {
                const l = this._validatePosition({ lineNumber: n.startLineNumber, column: n.startColumn }),
                    c = this._validatePosition({ lineNumber: n.endLineNumber, column: n.endColumn });
                return l.lineNumber !== n.startLineNumber || l.column !== n.startColumn || c.lineNumber !== n.endLineNumber || c.column !== n.endColumn ? { startLineNumber: l.lineNumber, startColumn: l.column, endLineNumber: c.lineNumber, endColumn: c.column } : n
            }
            _validatePosition(n) {
                if (!o.Position.isIPosition(n)) throw new Error("bad position");
                let { lineNumber: l, column: c } = n, b = !1;
                if (l < 1) l = 1, c = 1, b = !0;
                else if (l > this._lines.length) l = this._lines.length, c = this._lines[l - 1].length + 1, b = !0;
                else {
                    let L = this._lines[l - 1].length + 1;
                    c < 1 ? (c = 1, b = !0) : c > L && (c = L, b = !0)
                }
                return b ? { lineNumber: l, column: c } : n
            }
        }
        class r {
            constructor(n, l) { this._host = n, this._models = Object.create(null), this._foreignModuleFactory = l, this._foreignModule = null }
            dispose() { this._models = Object.create(null) }
            _getModel(n) { return this._models[n] }
            _getModels() { let n = []; return Object.keys(this._models).forEach(l => n.push(this._models[l])), n }
            acceptNewModel(n) { this._models[n.url] = new i(p.URI.parse(n.url), n.lines, n.EOL, n.versionId) }
            acceptModelChanged(n, l) {!this._models[n] || this._models[n].onEvents(l) }
            acceptRemovedModel(n) {!this._models[n] || delete this._models[n] }
            computeDiff(n, l, c, b) {
                return ne(this, void 0, void 0, function*() {
                    const L = this._getModel(n),
                        C = this._getModel(l);
                    if (!L || !C) return null;
                    const w = L.getLinesContent(),
                        N = C.getLinesContent(),
                        R = new u.DiffComputer(w, N, { shouldComputeCharChanges: !0, shouldPostProcessCharChanges: !0, shouldIgnoreTrimWhitespace: c, shouldMakePrettyDiff: !0, maxComputationTime: b }).computeDiff(),
                        D = R.changes.length > 0 ? !1 : this._modelsAreIdentical(L, C);
                    return { quitEarly: R.quitEarly, identical: D, changes: R.changes }
                })
            }
            _modelsAreIdentical(n, l) {
                const c = n.getLineCount(),
                    b = l.getLineCount();
                if (c !== b) return !1;
                for (let L = 1; L <= c; L++) {
                    const C = n.getLineContent(L),
                        w = l.getLineContent(L);
                    if (C !== w) return !1
                }
                return !0
            }
            computeMoreMinimalEdits(n, l) {
                return ne(this, void 0, void 0, function*() {
                    const c = this._getModel(n);
                    if (!c) return l;
                    const b = [];
                    let L;
                    l = l.slice(0).sort((C, w) => {
                        if (C.range && w.range) return h.Range.compareRangesUsingStarts(C.range, w.range);
                        let N = C.range ? 0 : 1,
                            y = w.range ? 0 : 1;
                        return N - y
                    });
                    for (let { range: C, text: w, eol: N }
                        of l)
                        if (typeof N == "number" && (L = N), !(h.Range.isEmpty(C) && !w)) {
                            const y = c.getValueInRange(C);
                            if (w = w.replace(/\r\n|\n|\r/g, c.eol), y !== w) {
                                if (Math.max(w.length, y.length) > r._diffLimit) { b.push({ range: C, text: w }); continue }
                                const R = (0, E.stringDiff)(y, w, !1),
                                    D = c.offsetAt(h.Range.lift(C).getStartPosition());
                                for (const P of R) {
                                    const W = c.positionAt(D + P.originalStart),
                                        Y = c.positionAt(D + P.originalStart + P.originalLength),
                                        T = { text: w.substr(P.modifiedStart, P.modifiedLength), range: { startLineNumber: W.lineNumber, startColumn: W.column, endLineNumber: Y.lineNumber, endColumn: Y.column } };
                                    c.getValueInRange(T.range) !== T.text && b.push(T)
                                }
                            }
                        }
                    return typeof L == "number" && b.push({ eol: L, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), b
                })
            }
            computeLinks(n) { return ne(this, void 0, void 0, function*() { let l = this._getModel(n); return l ? (0, S.computeLinks)(l) : null }) }
            textualSuggest(n, l, c, b) {
                return ne(this, void 0, void 0, function*() {
                    const L = new g.StopWatch(!0),
                        C = new RegExp(c, b),
                        w = new Set;
                    e: for (let N of n) {
                        const y = this._getModel(N);
                        if (!!y) {
                            for (let R of y.words(C))
                                if (!(R === l || !isNaN(Number(R))) && (w.add(R), w.size > r._suggestionsLimit)) break e
                        }
                    }
                    return { words: Array.from(w), duration: L.elapsed() }
                })
            }
            computeWordRanges(n, l, c, b) {
                return ne(this, void 0, void 0, function*() {
                    let L = this._getModel(n);
                    if (!L) return Object.create(null);
                    const C = new RegExp(c, b),
                        w = Object.create(null);
                    for (let N = l.startLineNumber; N < l.endLineNumber; N++) {
                        let y = L.getLineWords(N, C);
                        for (const R of y)
                            if (!!isNaN(Number(R.word))) {
                                let D = w[R.word];
                                D || (D = [], w[R.word] = D), D.push({ startLineNumber: N, startColumn: R.startColumn, endLineNumber: N, endColumn: R.endColumn })
                            }
                    }
                    return w
                })
            }
            navigateValueSet(n, l, c, b, L) {
                return ne(this, void 0, void 0, function*() {
                    let C = this._getModel(n);
                    if (!C) return null;
                    let w = new RegExp(b, L);
                    l.startColumn === l.endColumn && (l = { startLineNumber: l.startLineNumber, startColumn: l.startColumn, endLineNumber: l.endLineNumber, endColumn: l.endColumn + 1 });
                    let N = C.getValueInRange(l),
                        y = C.getWordAtPosition({ lineNumber: l.startLineNumber, column: l.startColumn }, w);
                    if (!y) return null;
                    let R = C.getValueInRange(y);
                    return a.BasicInplaceReplace.INSTANCE.navigateValueSet(l, N, y, R, c)
                })
            }
            loadForeignModule(n, l, c) { const b = (w, N) => this._host.fhr(w, N); let C = { host: m.createProxyObject(c, b), getMirrorModels: () => this._getModels() }; return this._foreignModuleFactory ? (this._foreignModule = this._foreignModuleFactory(C, l), Promise.resolve(m.getAllMethodNames(this._foreignModule))) : new Promise((w, N) => { I([n], y => { this._foreignModule = y.create(C, l), w(m.getAllMethodNames(this._foreignModule)) }, N) }) }
            fmr(n, l) { if (!this._foreignModule || typeof this._foreignModule[n] != "function") return Promise.reject(new Error("Missing requestHandler or method: " + n)); try { return Promise.resolve(this._foreignModule[n].apply(this._foreignModule, l)) } catch (c) { return Promise.reject(c) } }
        }
        t.EditorSimpleWorker = r, r._diffLimit = 1e5, r._suggestionsLimit = 1e4;

        function d(v) { return new r(v, null) }
        t.create = d, typeof importScripts == "function" && (M.globals.monaco = (0, _.createMonacoBaseAPI)())
    });
    "use strict";
    (function() {
        var I, t;
        const E = self.MonacoEnvironment,
            M = E && E.baseUrl ? E.baseUrl : "../../../",
            p = typeof((I = self.trustedTypes) === null || I === void 0 ? void 0 : I.createPolicy) == "function" ? (t = self.trustedTypes) === null || t === void 0 ? void 0 : t.createPolicy("amdLoader", {
                createScriptURL: f => f,
                createScript: (f, ...S) => {
                    const a = S.slice(0, -1).join(","),
                        _ = S.pop().toString();
                    return `(function anonymous(${a}) {
${_}
})`
                }
            }) : void 0;

        function o() {
            return new Promise((f, S) => {
                if (typeof self.define == "function" && self.define.amd) return f();
                const a = M + "vs/loader.js";
                if (!(/^((http:)|(https:)|(file:))/.test(a) && a.substring(0, self.origin.length) !== self.origin)) { fetch(a).then(m => { if (m.status !== 200) throw new Error(m.statusText); return m.text() }).then(m => { m = `${m}
//# sourceURL=${a}`, (p ? self.eval(p.createScript("", m)) : new Function(m)).call(self), f() }).then(void 0, S); return }
                p ? importScripts(p.createScriptURL(a)) : importScripts(a), f()
            })
        }
        const h = function(f) { o().then(() => { require.config({ baseUrl: M, catchError: !0, trustedTypesPolicy: p }), require([f], function(S) { setTimeout(function() { let a = S.create((_, m) => { self.postMessage(_, m) }, null); for (self.onmessage = _ => a.onmessage(_.data); s.length > 0;) self.onmessage(s.shift()) }, 0) }) }) };
        let u = !0,
            s = [];
        self.onmessage = f => {
            if (!u) { s.push(f); return }
            u = !1, h(f.data)
        }
    })()
}).call(this);

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map