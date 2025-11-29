function Nh(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default")
    ? c.default
    : c;
}
var xf = { exports: {} },
  Ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function Uh() {
  if (jd) return Ou;
  jd = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function r(s, x, A) {
    var j = null;
    if (
      (A !== void 0 && (j = "" + A),
      x.key !== void 0 && (j = "" + x.key),
      "key" in x)
    ) {
      A = {};
      for (var R in x) R !== "key" && (A[R] = x[R]);
    } else A = x;
    return (
      (x = A.ref),
      { $$typeof: c, type: s, key: j, ref: x !== void 0 ? x : null, props: A }
    );
  }
  return (Ou.Fragment = o), (Ou.jsx = r), (Ou.jsxs = r), Ou;
}
var Nd;
function wh() {
  return Nd || ((Nd = 1), (xf.exports = Uh())), xf.exports;
}
var m = wh(),
  Sf = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function Hh() {
  if (Ud) return V;
  Ud = 1;
  var c = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    x = Symbol.for("react.profiler"),
    A = Symbol.for("react.consumer"),
    j = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    N = Symbol.for("react.lazy"),
    L = Symbol.iterator;
  function K(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (L && p[L]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var st = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ht = Object.assign,
    yl = {};
  function Gt(p, D, H) {
    (this.props = p),
      (this.context = D),
      (this.refs = yl),
      (this.updater = H || st);
  }
  (Gt.prototype.isReactComponent = {}),
    (Gt.prototype.setState = function (p, D) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, p, D, "setState");
    }),
    (Gt.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function ge() {}
  ge.prototype = Gt.prototype;
  function Dl(p, D, H) {
    (this.props = p),
      (this.context = D),
      (this.refs = yl),
      (this.updater = H || st);
  }
  var Ut = (Dl.prototype = new ge());
  (Ut.constructor = Dl), ht(Ut, Gt.prototype), (Ut.isPureReactComponent = !0);
  var ml = Array.isArray,
    I = { H: null, A: null, T: null, S: null, V: null },
    Kt = Object.prototype.hasOwnProperty;
  function kt(p, D, H, U, B, P) {
    return (
      (H = P.ref),
      { $$typeof: c, type: p, key: D, ref: H !== void 0 ? H : null, props: P }
    );
  }
  function Jt(p, D) {
    return kt(p.type, D, void 0, void 0, void 0, p.props);
  }
  function Sl(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function Qe(p) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (H) {
        return D[H];
      })
    );
  }
  var Rl = /\/+/g;
  function wt(p, D) {
    return typeof p == "object" && p !== null && p.key != null
      ? Qe("" + p.key)
      : D.toString(36);
  }
  function be() {}
  function xe(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(be, be)
            : ((p.status = "pending"),
              p.then(
                function (D) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = D));
                },
                function (D) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = D));
                }
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function Ht(p, D, H, U, B) {
    var P = typeof p;
    (P === "undefined" || P === "boolean") && (p = null);
    var Z = !1;
    if (p === null) Z = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case o:
              Z = !0;
              break;
            case N:
              return (Z = p._init), Ht(Z(p._payload), D, H, U, B);
          }
      }
    if (Z)
      return (
        (B = B(p)),
        (Z = U === "" ? "." + wt(p, 0) : U),
        ml(B)
          ? ((H = ""),
            Z != null && (H = Z.replace(Rl, "$&/") + "/"),
            Ht(B, D, H, "", function (Kl) {
              return Kl;
            }))
          : B != null &&
            (Sl(B) &&
              (B = Jt(
                B,
                H +
                  (B.key == null || (p && p.key === B.key)
                    ? ""
                    : ("" + B.key).replace(Rl, "$&/") + "/") +
                  Z
              )),
            D.push(B)),
        1
      );
    Z = 0;
    var Wt = U === "" ? "." : U + ":";
    if (ml(p))
      for (var rt = 0; rt < p.length; rt++)
        (U = p[rt]), (P = Wt + wt(U, rt)), (Z += Ht(U, D, H, P, B));
    else if (((rt = K(p)), typeof rt == "function"))
      for (p = rt.call(p), rt = 0; !(U = p.next()).done; )
        (U = U.value), (P = Wt + wt(U, rt++)), (Z += Ht(U, D, H, P, B));
    else if (P === "object") {
      if (typeof p.then == "function") return Ht(xe(p), D, H, U, B);
      throw (
        ((D = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Z;
  }
  function z(p, D, H) {
    if (p == null) return p;
    var U = [],
      B = 0;
    return (
      Ht(p, U, "", "", function (P) {
        return D.call(H, P, B++);
      }),
      U
    );
  }
  function w(p) {
    if (p._status === -1) {
      var D = p._result;
      (D = D()),
        D.then(
          function (H) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = H));
          },
          function (H) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = H));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = D));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var X =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var D = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(D)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function ct() {}
  return (
    (V.Children = {
      map: z,
      forEach: function (p, D, H) {
        z(
          p,
          function () {
            D.apply(this, arguments);
          },
          H
        );
      },
      count: function (p) {
        var D = 0;
        return (
          z(p, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (p) {
        return (
          z(p, function (D) {
            return D;
          }) || []
        );
      },
      only: function (p) {
        if (!Sl(p))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return p;
      },
    }),
    (V.Component = Gt),
    (V.Fragment = r),
    (V.Profiler = x),
    (V.PureComponent = Dl),
    (V.StrictMode = s),
    (V.Suspense = M),
    (V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (V.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return I.H.useMemoCache(p);
      },
    }),
    (V.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (V.cloneElement = function (p, D, H) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + "."
        );
      var U = ht({}, p.props),
        B = p.key,
        P = void 0;
      if (D != null)
        for (Z in (D.ref !== void 0 && (P = void 0),
        D.key !== void 0 && (B = "" + D.key),
        D))
          !Kt.call(D, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && D.ref === void 0) ||
            (U[Z] = D[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) U.children = H;
      else if (1 < Z) {
        for (var Wt = Array(Z), rt = 0; rt < Z; rt++)
          Wt[rt] = arguments[rt + 2];
        U.children = Wt;
      }
      return kt(p.type, B, void 0, void 0, P, U);
    }),
    (V.createContext = function (p) {
      return (
        (p = {
          $$typeof: j,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: A, _context: p }),
        p
      );
    }),
    (V.createElement = function (p, D, H) {
      var U,
        B = {},
        P = null;
      if (D != null)
        for (U in (D.key !== void 0 && (P = "" + D.key), D))
          Kt.call(D, U) &&
            U !== "key" &&
            U !== "__self" &&
            U !== "__source" &&
            (B[U] = D[U]);
      var Z = arguments.length - 2;
      if (Z === 1) B.children = H;
      else if (1 < Z) {
        for (var Wt = Array(Z), rt = 0; rt < Z; rt++)
          Wt[rt] = arguments[rt + 2];
        B.children = Wt;
      }
      if (p && p.defaultProps)
        for (U in ((Z = p.defaultProps), Z)) B[U] === void 0 && (B[U] = Z[U]);
      return kt(p, P, void 0, void 0, null, B);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (p) {
      return { $$typeof: R, render: p };
    }),
    (V.isValidElement = Sl),
    (V.lazy = function (p) {
      return { $$typeof: N, _payload: { _status: -1, _result: p }, _init: w };
    }),
    (V.memo = function (p, D) {
      return { $$typeof: g, type: p, compare: D === void 0 ? null : D };
    }),
    (V.startTransition = function (p) {
      var D = I.T,
        H = {};
      I.T = H;
      try {
        var U = p(),
          B = I.S;
        B !== null && B(H, U),
          typeof U == "object" &&
            U !== null &&
            typeof U.then == "function" &&
            U.then(ct, X);
      } catch (P) {
        X(P);
      } finally {
        I.T = D;
      }
    }),
    (V.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (V.use = function (p) {
      return I.H.use(p);
    }),
    (V.useActionState = function (p, D, H) {
      return I.H.useActionState(p, D, H);
    }),
    (V.useCallback = function (p, D) {
      return I.H.useCallback(p, D);
    }),
    (V.useContext = function (p) {
      return I.H.useContext(p);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (p, D) {
      return I.H.useDeferredValue(p, D);
    }),
    (V.useEffect = function (p, D, H) {
      var U = I.H;
      if (typeof H == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return U.useEffect(p, D);
    }),
    (V.useId = function () {
      return I.H.useId();
    }),
    (V.useImperativeHandle = function (p, D, H) {
      return I.H.useImperativeHandle(p, D, H);
    }),
    (V.useInsertionEffect = function (p, D) {
      return I.H.useInsertionEffect(p, D);
    }),
    (V.useLayoutEffect = function (p, D) {
      return I.H.useLayoutEffect(p, D);
    }),
    (V.useMemo = function (p, D) {
      return I.H.useMemo(p, D);
    }),
    (V.useOptimistic = function (p, D) {
      return I.H.useOptimistic(p, D);
    }),
    (V.useReducer = function (p, D, H) {
      return I.H.useReducer(p, D, H);
    }),
    (V.useRef = function (p) {
      return I.H.useRef(p);
    }),
    (V.useState = function (p) {
      return I.H.useState(p);
    }),
    (V.useSyncExternalStore = function (p, D, H) {
      return I.H.useSyncExternalStore(p, D, H);
    }),
    (V.useTransition = function () {
      return I.H.useTransition();
    }),
    (V.version = "19.1.1"),
    V
  );
}
var wd;
function wf() {
  return wd || ((wd = 1), (Sf.exports = Hh())), Sf.exports;
}
var Mt = wf();
const Wn = Nh(Mt),
  Hd = (c) => {
    let o;
    const r = new Set(),
      s = (g, N) => {
        const L = typeof g == "function" ? g(o) : g;
        if (!Object.is(L, o)) {
          const K = o;
          (o =
            N ?? (typeof L != "object" || L === null)
              ? L
              : Object.assign({}, o, L)),
            r.forEach((st) => st(o, K));
        }
      },
      x = () => o,
      R = {
        setState: s,
        getState: x,
        getInitialState: () => M,
        subscribe: (g) => (r.add(g), () => r.delete(g)),
      },
      M = (o = c(s, x, R));
    return R;
  },
  Ch = (c) => (c ? Hd(c) : Hd),
  qh = (c) => c;
function Bh(c, o = qh) {
  const r = Wn.useSyncExternalStore(
    c.subscribe,
    Wn.useCallback(() => o(c.getState()), [c, o]),
    Wn.useCallback(() => o(c.getInitialState()), [c, o])
  );
  return Wn.useDebugValue(r), r;
}
const Cd = (c) => {
    const o = Ch(c),
      r = (s) => Bh(o, s);
    return Object.assign(r, o), r;
  },
  Yh = (c) => (c ? Cd(c) : Cd);
var $d = Symbol.for("immer-nothing"),
  qd = Symbol.for("immer-draftable"),
  nl = Symbol.for("immer-state");
function xl(c, ...o) {
  throw new Error(
    `[Immer] minified error nr: ${c}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Du = Object.getPrototypeOf;
function Ma(c) {
  return !!c && !!c[nl];
}
function Ge(c) {
  return c
    ? Fd(c) ||
        Array.isArray(c) ||
        !!c[qd] ||
        !!c.constructor?.[qd] ||
        Nu(c) ||
        ei(c)
    : !1;
}
var Gh = Object.prototype.constructor.toString(),
  Bd = new WeakMap();
function Fd(c) {
  if (!c || typeof c != "object") return !1;
  const o = Object.getPrototypeOf(c);
  if (o === null || o === Object.prototype) return !0;
  const r = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
  if (r === Object) return !0;
  if (typeof r != "function") return !1;
  let s = Bd.get(r);
  return (
    s === void 0 && ((s = Function.toString.call(r)), Bd.set(r, s)), s === Gh
  );
}
function In(c, o, r = !0) {
  li(c) === 0
    ? (r ? Reflect.ownKeys(c) : Object.keys(c)).forEach((x) => {
        o(x, c[x], c);
      })
    : c.forEach((s, x) => o(x, s, c));
}
function li(c) {
  const o = c[nl];
  return o ? o.type_ : Array.isArray(c) ? 1 : Nu(c) ? 2 : ei(c) ? 3 : 0;
}
function Mf(c, o) {
  return li(c) === 2 ? c.has(o) : Object.prototype.hasOwnProperty.call(c, o);
}
function Id(c, o, r) {
  const s = li(c);
  s === 2 ? c.set(o, r) : s === 3 ? c.add(r) : (c[o] = r);
}
function Xh(c, o) {
  return c === o ? c !== 0 || 1 / c === 1 / o : c !== c && o !== o;
}
function Nu(c) {
  return c instanceof Map;
}
function ei(c) {
  return c instanceof Set;
}
function Ye(c) {
  return c.copy_ || c.base_;
}
function Df(c, o) {
  if (Nu(c)) return new Map(c);
  if (ei(c)) return new Set(c);
  if (Array.isArray(c)) return Array.prototype.slice.call(c);
  const r = Fd(c);
  if (o === !0 || (o === "class_only" && !r)) {
    const s = Object.getOwnPropertyDescriptors(c);
    delete s[nl];
    let x = Reflect.ownKeys(s);
    for (let A = 0; A < x.length; A++) {
      const j = x[A],
        R = s[j];
      R.writable === !1 && ((R.writable = !0), (R.configurable = !0)),
        (R.get || R.set) &&
          (s[j] = {
            configurable: !0,
            writable: !0,
            enumerable: R.enumerable,
            value: c[j],
          });
    }
    return Object.create(Du(c), s);
  } else {
    const s = Du(c);
    if (s !== null && r) return { ...c };
    const x = Object.create(s);
    return Object.assign(x, c);
  }
}
function Hf(c, o = !1) {
  return (
    ai(c) ||
      Ma(c) ||
      !Ge(c) ||
      (li(c) > 1 &&
        Object.defineProperties(c, { set: $n, add: $n, clear: $n, delete: $n }),
      Object.freeze(c),
      o && Object.values(c).forEach((r) => Hf(r, !0))),
    c
  );
}
function Qh() {
  xl(2);
}
var $n = { value: Qh };
function ai(c) {
  return c === null || typeof c != "object" ? !0 : Object.isFrozen(c);
}
var Zh = {};
function Xe(c) {
  const o = Zh[c];
  return o || xl(0, c), o;
}
var Ru;
function Pd() {
  return Ru;
}
function Lh(c, o) {
  return {
    drafts_: [],
    parent_: c,
    immer_: o,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Yd(c, o) {
  o &&
    (Xe("Patches"),
    (c.patches_ = []),
    (c.inversePatches_ = []),
    (c.patchListener_ = o));
}
function Rf(c) {
  jf(c), c.drafts_.forEach(Vh), (c.drafts_ = null);
}
function jf(c) {
  c === Ru && (Ru = c.parent_);
}
function Gd(c) {
  return (Ru = Lh(Ru, c));
}
function Vh(c) {
  const o = c[nl];
  o.type_ === 0 || o.type_ === 1 ? o.revoke_() : (o.revoked_ = !0);
}
function Xd(c, o) {
  o.unfinalizedDrafts_ = o.drafts_.length;
  const r = o.drafts_[0];
  return (
    c !== void 0 && c !== r
      ? (r[nl].modified_ && (Rf(o), xl(4)),
        Ge(c) && ((c = Pn(o, c)), o.parent_ || ti(o, c)),
        o.patches_ &&
          Xe("Patches").generateReplacementPatches_(
            r[nl].base_,
            c,
            o.patches_,
            o.inversePatches_
          ))
      : (c = Pn(o, r, [])),
    Rf(o),
    o.patches_ && o.patchListener_(o.patches_, o.inversePatches_),
    c !== $d ? c : void 0
  );
}
function Pn(c, o, r) {
  if (ai(o)) return o;
  const s = c.immer_.shouldUseStrictIteration(),
    x = o[nl];
  if (!x) return In(o, (A, j) => Qd(c, x, o, A, j, r), s), o;
  if (x.scope_ !== c) return o;
  if (!x.modified_) return ti(c, x.base_, !0), x.base_;
  if (!x.finalized_) {
    (x.finalized_ = !0), x.scope_.unfinalizedDrafts_--;
    const A = x.copy_;
    let j = A,
      R = !1;
    x.type_ === 3 && ((j = new Set(A)), A.clear(), (R = !0)),
      In(j, (M, g) => Qd(c, x, A, M, g, r, R), s),
      ti(c, A, !1),
      r &&
        c.patches_ &&
        Xe("Patches").generatePatches_(x, r, c.patches_, c.inversePatches_);
  }
  return x.copy_;
}
function Qd(c, o, r, s, x, A, j) {
  if (x == null || (typeof x != "object" && !j)) return;
  const R = ai(x);
  if (!(R && !j)) {
    if (Ma(x)) {
      const M =
          A && o && o.type_ !== 3 && !Mf(o.assigned_, s) ? A.concat(s) : void 0,
        g = Pn(c, x, M);
      if ((Id(r, s, g), Ma(g))) c.canAutoFreeze_ = !1;
      else return;
    } else j && r.add(x);
    if (Ge(x) && !R) {
      if (
        (!c.immer_.autoFreeze_ && c.unfinalizedDrafts_ < 1) ||
        (o && o.base_ && o.base_[s] === x && R)
      )
        return;
      Pn(c, x),
        (!o || !o.scope_.parent_) &&
          typeof s != "symbol" &&
          (Nu(r)
            ? r.has(s)
            : Object.prototype.propertyIsEnumerable.call(r, s)) &&
          ti(c, x);
    }
  }
}
function ti(c, o, r = !1) {
  !c.parent_ && c.immer_.autoFreeze_ && c.canAutoFreeze_ && Hf(o, r);
}
function Kh(c, o) {
  const r = Array.isArray(c),
    s = {
      type_: r ? 1 : 0,
      scope_: o ? o.scope_ : Pd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: o,
      base_: c,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let x = s,
    A = Cf;
  r && ((x = [s]), (A = ju));
  const { revoke: j, proxy: R } = Proxy.revocable(x, A);
  return (s.draft_ = R), (s.revoke_ = j), R;
}
var Cf = {
    get(c, o) {
      if (o === nl) return c;
      const r = Ye(c);
      if (!Mf(r, o)) return kh(c, r, o);
      const s = r[o];
      return c.finalized_ || !Ge(s)
        ? s
        : s === _f(c.base_, o)
        ? (Tf(c), (c.copy_[o] = Uf(s, c)))
        : s;
    },
    has(c, o) {
      return o in Ye(c);
    },
    ownKeys(c) {
      return Reflect.ownKeys(Ye(c));
    },
    set(c, o, r) {
      const s = tp(Ye(c), o);
      if (s?.set) return s.set.call(c.draft_, r), !0;
      if (!c.modified_) {
        const x = _f(Ye(c), o),
          A = x?.[nl];
        if (A && A.base_ === r)
          return (c.copy_[o] = r), (c.assigned_[o] = !1), !0;
        if (Xh(r, x) && (r !== void 0 || Mf(c.base_, o))) return !0;
        Tf(c), Nf(c);
      }
      return (
        (c.copy_[o] === r && (r !== void 0 || o in c.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(c.copy_[o])) ||
          ((c.copy_[o] = r), (c.assigned_[o] = !0)),
        !0
      );
    },
    deleteProperty(c, o) {
      return (
        _f(c.base_, o) !== void 0 || o in c.base_
          ? ((c.assigned_[o] = !1), Tf(c), Nf(c))
          : delete c.assigned_[o],
        c.copy_ && delete c.copy_[o],
        !0
      );
    },
    getOwnPropertyDescriptor(c, o) {
      const r = Ye(c),
        s = Reflect.getOwnPropertyDescriptor(r, o);
      return (
        s && {
          writable: !0,
          configurable: c.type_ !== 1 || o !== "length",
          enumerable: s.enumerable,
          value: r[o],
        }
      );
    },
    defineProperty() {
      xl(11);
    },
    getPrototypeOf(c) {
      return Du(c.base_);
    },
    setPrototypeOf() {
      xl(12);
    },
  },
  ju = {};
In(Cf, (c, o) => {
  ju[c] = function () {
    return (arguments[0] = arguments[0][0]), o.apply(this, arguments);
  };
});
ju.deleteProperty = function (c, o) {
  return ju.set.call(this, c, o, void 0);
};
ju.set = function (c, o, r) {
  return Cf.set.call(this, c[0], o, r, c[0]);
};
function _f(c, o) {
  const r = c[nl];
  return (r ? Ye(r) : c)[o];
}
function kh(c, o, r) {
  const s = tp(o, r);
  return s ? ("value" in s ? s.value : s.get?.call(c.draft_)) : void 0;
}
function tp(c, o) {
  if (!(o in c)) return;
  let r = Du(c);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, o);
    if (s) return s;
    r = Du(r);
  }
}
function Nf(c) {
  c.modified_ || ((c.modified_ = !0), c.parent_ && Nf(c.parent_));
}
function Tf(c) {
  c.copy_ || (c.copy_ = Df(c.base_, c.scope_.immer_.useStrictShallowCopy_));
}
var Jh = class {
  constructor(c) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (o, r, s) => {
        if (typeof o == "function" && typeof r != "function") {
          const A = r;
          r = o;
          const j = this;
          return function (M = A, ...g) {
            return j.produce(M, (N) => r.call(this, N, ...g));
          };
        }
        typeof r != "function" && xl(6),
          s !== void 0 && typeof s != "function" && xl(7);
        let x;
        if (Ge(o)) {
          const A = Gd(this),
            j = Uf(o, void 0);
          let R = !0;
          try {
            (x = r(j)), (R = !1);
          } finally {
            R ? Rf(A) : jf(A);
          }
          return Yd(A, s), Xd(x, A);
        } else if (!o || typeof o != "object") {
          if (
            ((x = r(o)),
            x === void 0 && (x = o),
            x === $d && (x = void 0),
            this.autoFreeze_ && Hf(x, !0),
            s)
          ) {
            const A = [],
              j = [];
            Xe("Patches").generateReplacementPatches_(o, x, A, j), s(A, j);
          }
          return x;
        } else xl(1, o);
      }),
      (this.produceWithPatches = (o, r) => {
        if (typeof o == "function")
          return (j, ...R) => this.produceWithPatches(j, (M) => o(M, ...R));
        let s, x;
        return [
          this.produce(o, r, (j, R) => {
            (s = j), (x = R);
          }),
          s,
          x,
        ];
      }),
      typeof c?.autoFreeze == "boolean" && this.setAutoFreeze(c.autoFreeze),
      typeof c?.useStrictShallowCopy == "boolean" &&
        this.setUseStrictShallowCopy(c.useStrictShallowCopy),
      typeof c?.useStrictIteration == "boolean" &&
        this.setUseStrictIteration(c.useStrictIteration);
  }
  createDraft(c) {
    Ge(c) || xl(8), Ma(c) && (c = Wh(c));
    const o = Gd(this),
      r = Uf(c, void 0);
    return (r[nl].isManual_ = !0), jf(o), r;
  }
  finishDraft(c, o) {
    const r = c && c[nl];
    (!r || !r.isManual_) && xl(9);
    const { scope_: s } = r;
    return Yd(s, o), Xd(void 0, s);
  }
  setAutoFreeze(c) {
    this.autoFreeze_ = c;
  }
  setUseStrictShallowCopy(c) {
    this.useStrictShallowCopy_ = c;
  }
  setUseStrictIteration(c) {
    this.useStrictIteration_ = c;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(c, o) {
    let r;
    for (r = o.length - 1; r >= 0; r--) {
      const x = o[r];
      if (x.path.length === 0 && x.op === "replace") {
        c = x.value;
        break;
      }
    }
    r > -1 && (o = o.slice(r + 1));
    const s = Xe("Patches").applyPatches_;
    return Ma(c) ? s(c, o) : this.produce(c, (x) => s(x, o));
  }
};
function Uf(c, o) {
  const r = Nu(c)
    ? Xe("MapSet").proxyMap_(c, o)
    : ei(c)
    ? Xe("MapSet").proxySet_(c, o)
    : Kh(c, o);
  return (o ? o.scope_ : Pd()).drafts_.push(r), r;
}
function Wh(c) {
  return Ma(c) || xl(10, c), lp(c);
}
function lp(c) {
  if (!Ge(c) || ai(c)) return c;
  const o = c[nl];
  let r,
    s = !0;
  if (o) {
    if (!o.modified_) return o.base_;
    (o.finalized_ = !0),
      (r = Df(c, o.scope_.immer_.useStrictShallowCopy_)),
      (s = o.scope_.immer_.shouldUseStrictIteration());
  } else r = Df(c, !0);
  return (
    In(
      r,
      (x, A) => {
        Id(r, x, lp(A));
      },
      s
    ),
    o && (o.finalized_ = !1),
    r
  );
}
var $h = new Jh(),
  Fh = $h.produce;
const Ih = (c) => (o, r, s) => (
    (s.setState = (x, A, ...j) => {
      const R = typeof x == "function" ? Fh(x) : x;
      return o(R, A, ...j);
    }),
    c(s.setState, r, s)
  ),
  Ph = Ih,
  ep = [
    "None",
    "Time",
    "Date",
    "Day",
    "Time Frame",
    "Symbol",
    "Risk/Reward",
    "Pnl",
    "Result",
  ],
  ty = {
    number: "Number",
    time: "Time",
    date: "Date",
    text: "Text",
    dropdown: "Dropdown",
  },
  ly = [
    { label: "Time", type: "time", value: "06:02:50", mappedWith: "Time" },
    { label: "Date", type: "date", value: "2025-09-16", mappedWith: "Date" },
    { label: "Day", type: "text", value: "Monday", mappedWith: "Day" },
    {
      label: "Trade",
      type: "text",
      value: "Trade 1",
      mappedWith: "Trade Number",
    },
    { label: "Result", type: "text", value: "Target", mappedWith: "Result" },
    {
      label: "Risk/Reward",
      type: "text",
      value: "1:2",
      mappedWith: "Risk/Reward",
    },
    {
      label: "Time Frame",
      type: "text",
      value: "3 minutes",
      mappedWith: "Time Frame",
    },
    {
      label: "Entry Candle",
      type: "dropdown",
      options: ["Engulfing", "Spinning Top", "Pin Bar"],
      value: "Engulfing",
    },
    { label: "Pnl", type: "number", value: 1e3, mappedWith: "Pnl" },
    {
      label: "Pullbacks",
      type: "dropdown",
      options: ["1st Pullback", "2nd Pullback", "3rd Pullback"],
      value: "2nd Pullback",
    },
    {
      label: "Entry Area",
      type: "dropdown",
      options: [
        "Near Support",
        "Near Resistance",
        "Middle",
        "Against Support",
        "Resistance Support",
      ],
      value: "Near Resistance",
    },
  ],
  vt = Yh(
    Ph((c) => ({
      isPopupOpen: !1,
      activeTabIndex: 0,
      accountSize: 0,
      riskPercent: 0,
      riskAmount: 300,
      showInputGenerator: !1,
      captureMap: ly,
      inputLabel: "",
      inputType: "Input",
      inputOptions: [""],
      updatingIndex: null,
      tradeRecords: [],
      editingIndex: null,
      allCapturesUpdatingIdx: 0,
      isEdit: !1,
      isAutoSaveEnabled: !1,
      isSaved: !1,
      tradeCountByDate: {},
      userLoggedIn: !0,
      updateStore: (o) => {
        c((r) => {
          o(r);
        });
      },
    }))
  );
let ap = 0,
  up = 0;
const ey = (c, o) => {
    if (c.target.closest(".backtesting-popup-close-btn")) return;
    const r = o.current,
      s = r.getBoundingClientRect();
    (ap = c.clientX - s.left),
      (up = c.clientY - s.top),
      (document.onmousemove = (x) => ay(x, r)),
      (document.onmouseup = uy);
  },
  ay = (c, o) => {
    c.preventDefault();
    let r = c.clientX - ap,
      s = c.clientY - up;
    const A = -(o.getBoundingClientRect().width - 40),
      j = window.innerWidth - 40,
      R = 0,
      M = window.innerHeight - 40;
    (r = Math.max(A, Math.min(r, j))),
      (s = Math.max(R, Math.min(s, M))),
      (o.style.left = r + "px"),
      (o.style.top = s + "px");
  },
  uy = () => {
    (document.onmousemove = null), (document.onmouseup = null);
  };
function ny({ updateStore: c, popupRef: o }) {
  return m.jsx("div", {
    className: "backtesting-popup-header-wrapper",
    children: m.jsxs("div", {
      className: "backtesting-popup-header",
      onMouseDown: (r) => ey(r, o),
      children: [
        m.jsx("div", {
          className: "backtesting-popup-header-title",
          children: m.jsx("span", { children: "Strategy Capture" }),
        }),
        m.jsx("div", {
          className: "backtesting-popup-close-btn-wrapper",
          children: m.jsx("button", {
            className: "backtesting-popup-close-btn",
            onClick: () => {
              c((r) => {
                r.isPopupOpen = !1;
              });
            },
            children: m.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 18 18",
              width: "18",
              height: "18",
              children: m.jsx("path", {
                stroke: "currentColor",
                strokeWidth: "1.2",
                d: "m1.5 1.5 15 15m0-15-15 15",
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function Nt({
  text: c,
  type: o = "fill",
  size: r = "medium",
  onClick: s = () => null,
  disable: x = !1,
  title: A,
  toggle: j = !1,
  submit: R = !1,
}) {
  return m.jsxs("div", {
    className: "btn-wrapper",
    children: [
      o === "toggle" &&
        m.jsx("span", { className: "toggle-label", children: c }),
      m.jsx("button", {
        type: R ? "submit" : "",
        className: `${o}-btn ${j ? "enabled" : ""} ${r} ${
          x ? "btn-disable" : ""
        }`,
        onClick: s,
        title: A || "",
        disabled: x,
        children: o !== "toggle" ? c : m.jsx("div", { className: "circle" }),
      }),
    ],
  });
}
function Da({
  label: c,
  type: o,
  options: r,
  selector: s,
  onChange: x,
  placeholder: A,
}) {
  const j = typeof s == "function" ? vt(s) : s;
  return m.jsx(m.Fragment, {
    children: m.jsxs("div", {
      className: "backtesting-popup-input-wrapper",
      children: [
        c &&
          m.jsx("div", {
            className: "input-label-wrapper",
            children: m.jsx("div", {
              children: m.jsx("span", { children: c }),
            }),
          }),
        m.jsx("div", {
          className: "backtesting-popup-input-div",
          children:
            o === "dropdown"
              ? m.jsx("select", {
                  className: "backtesting-popup-input",
                  onChange: (R) => {
                    x && x(R.target.value);
                  },
                  value: j,
                  children: r?.map((R, M) =>
                    m.jsx("option", { children: R }, M)
                  ),
                })
              : m.jsx("input", {
                  className: "backtesting-popup-input",
                  type: o ?? "text",
                  step: o === "time" ? 1 : "",
                  placeholder: A,
                  value: j,
                  onChange: (R) => (x ? x(R.target.value) : null),
                  required: !0,
                }),
        }),
      ],
    }),
  });
}
function Fn({ text: c, type: o = "" }) {
  return m.jsx("div", {
    className: `backtesting-popup-label-wrapper ${o}`,
    children: m.jsx("span", { children: c }),
  });
}
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iy = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  cy = (c) =>
    c.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, r, s) =>
      s ? s.toUpperCase() : r.toLowerCase()
    ),
  Zd = (c) => {
    const o = cy(c);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  np = (...c) =>
    c
      .filter((o, r, s) => !!o && o.trim() !== "" && s.indexOf(o) === r)
      .join(" ")
      .trim(),
  fy = (c) => {
    for (const o in c)
      if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  };
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var oy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = Mt.forwardRef(
  (
    {
      color: c = "currentColor",
      size: o = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: x = "",
      children: A,
      iconNode: j,
      ...R
    },
    M
  ) =>
    Mt.createElement(
      "svg",
      {
        ref: M,
        ...oy,
        width: o,
        height: o,
        stroke: c,
        strokeWidth: s ? (Number(r) * 24) / Number(o) : r,
        className: np("lucide", x),
        ...(!A && !fy(R) && { "aria-hidden": "true" }),
        ...R,
      },
      [
        ...j.map(([g, N]) => Mt.createElement(g, N)),
        ...(Array.isArray(A) ? A : [A]),
      ]
    )
);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ml = (c, o) => {
  const r = Mt.forwardRef(({ className: s, ...x }, A) =>
    Mt.createElement(sy, {
      ref: A,
      iconNode: o,
      className: np(`lucide-${iy(Zd(c))}`, `lucide-${c}`, s),
      ...x,
    })
  );
  return (r.displayName = Zd(c)), r;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  dy = Ml("chevron-down", ry);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const py = [
    ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  hy = Ml("copy-check", py);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  my = Ml("copy", yy);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vy = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  gy = Ml("download", vy);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  xy = Ml("loader-circle", by);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = [
    [
      "path",
      {
        d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
        key: "re6nr2",
      },
    ],
    ["path", { d: "M2 6h4", key: "aawbzj" }],
    ["path", { d: "M2 10h4", key: "l0bgd4" }],
    ["path", { d: "M2 14h4", key: "1gsvsf" }],
    ["path", { d: "M2 18h4", key: "1bu2t1" }],
    [
      "path",
      {
        d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
        key: "pqwjuv",
      },
    ],
  ],
  _y = Ml("notebook-pen", Sy);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  ip = Ml("pencil", Ty);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  cp = Ml("trash-2", zy);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ey = [
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  Ay = Ml("trash", Ey);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oy = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  My = Ml("x", Oy);
function Dy({ children: c, title: o, value: r, onClick: s = () => null }) {
  const x = r ? vt(r) : !1;
  return m.jsxs("div", {
    className: "top-down-slider",
    children: [
      m.jsxs("div", {
        className: "title-wrapper",
        onClick: s,
        children: [
          m.jsx("div", {
            children: m.jsx("div", { className: "title", children: o }),
          }),
          m.jsx("div", {
            className: x ? "rotate" : "",
            children: m.jsx(dy, { size: 16 }),
          }),
        ],
      }),
      m.jsx("div", {
        className: `top-down-slider-content-wrapper ${x ? "expand" : ""}`,
        children: c,
      }),
    ],
  });
}
function fp({ size: c, button: o = !1 }) {
  return m.jsx("div", {
    className: `loader${o ? "" : " popup"}`,
    children: m.jsx(xy, { size: c || 18 }),
  });
}
function Ry({ tabs: c, updateStore: o }) {
  const [r, s] = Mt.useState({ width: 52, translateX: 0 }),
    x = vt((j) => j.activeTabIndex),
    A = Mt.useRef([]);
  return (
    Mt.useEffect(() => {
      const j = A.current[x];
      j &&
        s((R) => ({
          width: j?.offsetWidth || R.width,
          translateX: j.offsetLeft || 0,
        }));
    }, [x]),
    m.jsx("div", {
      className: "tab-selector",
      children: m.jsx("div", {
        className: "tab-track-container",
        children: m.jsxs("div", {
          className: "tab-container",
          children: [
            c.map((j, R) =>
              m.jsx(
                "button",
                {
                  ref: (M) => {
                    A.current[R] = M;
                  },
                  className: `tab${x === R ? " active" : ""}`,
                  onClick: () =>
                    o((M) => {
                      M.activeTabIndex = R;
                    }),
                  disabled: x === R,
                  children: j,
                },
                R
              )
            ),
            m.jsx("div", {
              className: "active-tab-indicator",
              style: {
                width: `${r.width}px`,
                transform: `translateX(${r.translateX}px)`,
              },
            }),
          ],
        }),
      }),
    })
  );
}
const jy = (c) => {
  const o = new Date(),
    r = {
      time: o.toLocaleTimeString("en-IN", { hour12: !1 }),
      date: o,
      weekday: o.toLocaleDateString("en-IN", { weekday: "long" }),
    };
  return r[c] ?? r.weekday;
};
function Ny({ updateStore: c }) {
  const o = vt((M) => M.inputType === "Dropdown"),
    r = vt((M) => M.inputOptions.length === 0 && o),
    s = vt((M) => M.inputOptions.includes("") && o),
    x = vt((M) => M.inputLabel === ""),
    A = vt((M) => M.updatingIndex),
    j = (M) => {
      Object.assign(M, {
        updatingIndex: null,
        inputOptions: [],
        inputLabel: "",
        inputType: "",
      });
    },
    R = (M) => {
      const g = M.inputLabel,
        N = M.inputType.toLowerCase(),
        L = ep.includes(g) ? g : "None",
        K = {
          label: g,
          type: N,
          ...(N === "dropdown" && { options: M.inputOptions }),
          ...(A === null && {
            value: ["date", "time", "day"].includes(N) ? jy(N) : 0,
            mappedWith: L,
          }),
        };
      A !== null
        ? (Object.assign(M.captureMap[A], K), j(M))
        : (M.captureMap.push(K),
          setTimeout(() => {
            const st = document.getElementById("extension-popup-content"),
              ht =
                st ||
                document
                  .getElementById("extension-shadow-root-wrapper")
                  .shadowRoot.getElementById("extension-popup-content");
            (ht.scrollTop = ht.scrollHeight + 100),
              ht.lastChild.lastChild.classList.add("drag-over"),
              setTimeout(() => {
                ht.lastChild.lastChild.classList.remove("drag-over");
              }, 500);
          }, 100));
    };
  return m.jsx(m.Fragment, {
    children: m.jsxs("div", {
      className: "add-button-wrapper",
      children: [
        m.jsx(Nt, {
          text: A !== null ? "Update" : "Add",
          type: "fill",
          size: "medium",
          title: r
            ? "Please add at least one option"
            : x
            ? "Label is required"
            : s
            ? "Please fill out all options"
            : "",
          disable: r || x || s,
          onClick: () => c(R),
        }),
        A !== null &&
          m.jsx(Nt, {
            text: m.jsx(My, { size: 18 }),
            type: "fill",
            size: "medium",
            onClick: () => c(j),
          }),
      ],
    }),
  });
}
function Uy({ updateStore: c }) {
  const o = vt((s) => s.inputOptions);
  return vt((s) => s.inputType === "Dropdown")
    ? m.jsxs("div", {
        className: "dropdowns-section",
        children: [
          m.jsx("div", {
            children: m.jsx(Nt, {
              text: "+ Add Option",
              type: "hollow",
              size: "small",
              onClick: () => c((s) => s.inputOptions.push("")),
            }),
          }),
          m.jsx("div", {
            className: "dropdowns-wrapper",
            children:
              o.length === 0
                ? m.jsx("div", {
                    className: "empty-options-wrapper",
                    children: m.jsx("span", { children: "No Options Created" }),
                  })
                : o.map((s, x) =>
                    m.jsxs(
                      "div",
                      {
                        className: "dropdowns",
                        children: [
                          m.jsx(Da, {
                            type: "input",
                            placeholder: `Option ${x + 1}`,
                            selector: s,
                            onChange: (A) =>
                              c((j) => {
                                j.inputOptions[x] = A;
                              }),
                          }),
                          m.jsx(Nt, {
                            text: m.jsx(Ay, { size: 16 }),
                            size: "small",
                            type: "hollow",
                            onClick: () =>
                              c((A) => A.inputOptions.splice(x, 1)),
                          }),
                        ],
                      },
                      x
                    )
                  ),
          }),
        ],
      })
    : null;
}
function wy({ updateStore: c }) {
  return m.jsxs(Dy, {
    title: "Create Capture Inputs",
    value: (o) => o.showInputGenerator,
    onClick: () =>
      c((o) => {
        o.showInputGenerator = !o.showInputGenerator;
      }),
    children: [
      m.jsxs("div", {
        className: "inputs-generator-wrapper",
        children: [
          m.jsxs("div", {
            className: "inputs-section",
            children: [
              m.jsx(Da, {
                label: "Label",
                type: "text",
                placeholder: "Enter Label",
                selector: (o) => o.inputLabel,
                onChange: (o) =>
                  c((r) => {
                    r.inputLabel = o;
                  }),
              }),
              m.jsx(Da, {
                label: "Type",
                type: "dropdown",
                selector: (o) => o.inputType,
                options: ["Number", "Text", "Dropdown", "Time", "Date"],
                onChange: (o) =>
                  c((r) => {
                    r.inputType = o;
                  }),
              }),
            ],
          }),
          m.jsx(Uy, { updateStore: c }),
        ],
      }),
      m.jsx("div", { children: m.jsx(Ny, { updateStore: c }) }),
    ],
  });
}
var zf = { exports: {} },
  Mu = {},
  Ef = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function Hy() {
  return (
    Ld ||
      ((Ld = 1),
      (function (c) {
        function o(z, w) {
          var X = z.length;
          z.push(w);
          t: for (; 0 < X; ) {
            var ct = (X - 1) >>> 1,
              p = z[ct];
            if (0 < x(p, w)) (z[ct] = w), (z[X] = p), (X = ct);
            else break t;
          }
        }
        function r(z) {
          return z.length === 0 ? null : z[0];
        }
        function s(z) {
          if (z.length === 0) return null;
          var w = z[0],
            X = z.pop();
          if (X !== w) {
            z[0] = X;
            t: for (var ct = 0, p = z.length, D = p >>> 1; ct < D; ) {
              var H = 2 * (ct + 1) - 1,
                U = z[H],
                B = H + 1,
                P = z[B];
              if (0 > x(U, X))
                B < p && 0 > x(P, U)
                  ? ((z[ct] = P), (z[B] = X), (ct = B))
                  : ((z[ct] = U), (z[H] = X), (ct = H));
              else if (B < p && 0 > x(P, X)) (z[ct] = P), (z[B] = X), (ct = B);
              else break t;
            }
          }
          return w;
        }
        function x(z, w) {
          var X = z.sortIndex - w.sortIndex;
          return X !== 0 ? X : z.id - w.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var A = performance;
          c.unstable_now = function () {
            return A.now();
          };
        } else {
          var j = Date,
            R = j.now();
          c.unstable_now = function () {
            return j.now() - R;
          };
        }
        var M = [],
          g = [],
          N = 1,
          L = null,
          K = 3,
          st = !1,
          ht = !1,
          yl = !1,
          Gt = !1,
          ge = typeof setTimeout == "function" ? setTimeout : null,
          Dl = typeof clearTimeout == "function" ? clearTimeout : null,
          Ut = typeof setImmediate < "u" ? setImmediate : null;
        function ml(z) {
          for (var w = r(g); w !== null; ) {
            if (w.callback === null) s(g);
            else if (w.startTime <= z)
              s(g), (w.sortIndex = w.expirationTime), o(M, w);
            else break;
            w = r(g);
          }
        }
        function I(z) {
          if (((yl = !1), ml(z), !ht))
            if (r(M) !== null) (ht = !0), Kt || ((Kt = !0), wt());
            else {
              var w = r(g);
              w !== null && Ht(I, w.startTime - z);
            }
        }
        var Kt = !1,
          kt = -1,
          Jt = 5,
          Sl = -1;
        function Qe() {
          return Gt ? !0 : !(c.unstable_now() - Sl < Jt);
        }
        function Rl() {
          if (((Gt = !1), Kt)) {
            var z = c.unstable_now();
            Sl = z;
            var w = !0;
            try {
              t: {
                (ht = !1), yl && ((yl = !1), Dl(kt), (kt = -1)), (st = !0);
                var X = K;
                try {
                  l: {
                    for (
                      ml(z), L = r(M);
                      L !== null && !(L.expirationTime > z && Qe());

                    ) {
                      var ct = L.callback;
                      if (typeof ct == "function") {
                        (L.callback = null), (K = L.priorityLevel);
                        var p = ct(L.expirationTime <= z);
                        if (((z = c.unstable_now()), typeof p == "function")) {
                          (L.callback = p), ml(z), (w = !0);
                          break l;
                        }
                        L === r(M) && s(M), ml(z);
                      } else s(M);
                      L = r(M);
                    }
                    if (L !== null) w = !0;
                    else {
                      var D = r(g);
                      D !== null && Ht(I, D.startTime - z), (w = !1);
                    }
                  }
                  break t;
                } finally {
                  (L = null), (K = X), (st = !1);
                }
                w = void 0;
              }
            } finally {
              w ? wt() : (Kt = !1);
            }
          }
        }
        var wt;
        if (typeof Ut == "function")
          wt = function () {
            Ut(Rl);
          };
        else if (typeof MessageChannel < "u") {
          var be = new MessageChannel(),
            xe = be.port2;
          (be.port1.onmessage = Rl),
            (wt = function () {
              xe.postMessage(null);
            });
        } else
          wt = function () {
            ge(Rl, 0);
          };
        function Ht(z, w) {
          kt = ge(function () {
            z(c.unstable_now());
          }, w);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (c.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Jt = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return K;
          }),
          (c.unstable_next = function (z) {
            switch (K) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = K;
            }
            var X = K;
            K = w;
            try {
              return z();
            } finally {
              K = X;
            }
          }),
          (c.unstable_requestPaint = function () {
            Gt = !0;
          }),
          (c.unstable_runWithPriority = function (z, w) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var X = K;
            K = z;
            try {
              return w();
            } finally {
              K = X;
            }
          }),
          (c.unstable_scheduleCallback = function (z, w, X) {
            var ct = c.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? ct + X : ct))
                : (X = ct),
              z)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = X + p),
              (z = {
                id: N++,
                callback: w,
                priorityLevel: z,
                startTime: X,
                expirationTime: p,
                sortIndex: -1,
              }),
              X > ct
                ? ((z.sortIndex = X),
                  o(g, z),
                  r(M) === null &&
                    z === r(g) &&
                    (yl ? (Dl(kt), (kt = -1)) : (yl = !0), Ht(I, X - ct)))
                : ((z.sortIndex = p),
                  o(M, z),
                  ht || st || ((ht = !0), Kt || ((Kt = !0), wt()))),
              z
            );
          }),
          (c.unstable_shouldYield = Qe),
          (c.unstable_wrapCallback = function (z) {
            var w = K;
            return function () {
              var X = K;
              K = w;
              try {
                return z.apply(this, arguments);
              } finally {
                K = X;
              }
            };
          });
      })(Af)),
    Af
  );
}
var Vd;
function Cy() {
  return Vd || ((Vd = 1), (Ef.exports = Hy())), Ef.exports;
}
var Of = { exports: {} },
  Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd;
function qy() {
  if (Kd) return Bt;
  Kd = 1;
  var c = wf();
  function o(M) {
    var g = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        g += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(o(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for("react.portal");
  function A(M, g, N) {
    var L =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: L == null ? null : "" + L,
      children: M,
      containerInfo: g,
      implementation: N,
    };
  }
  var j = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(M, g) {
    if (M === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Bt.createPortal = function (M, g) {
      var N =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(o(299));
      return A(M, g, null, N);
    }),
    (Bt.flushSync = function (M) {
      var g = j.T,
        N = s.p;
      try {
        if (((j.T = null), (s.p = 2), M)) return M();
      } finally {
        (j.T = g), (s.p = N), s.d.f();
      }
    }),
    (Bt.preconnect = function (M, g) {
      typeof M == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(M, g));
    }),
    (Bt.prefetchDNS = function (M) {
      typeof M == "string" && s.d.D(M);
    }),
    (Bt.preinit = function (M, g) {
      if (typeof M == "string" && g && typeof g.as == "string") {
        var N = g.as,
          L = R(N, g.crossOrigin),
          K = typeof g.integrity == "string" ? g.integrity : void 0,
          st = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        N === "style"
          ? s.d.S(M, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: L,
              integrity: K,
              fetchPriority: st,
            })
          : N === "script" &&
            s.d.X(M, {
              crossOrigin: L,
              integrity: K,
              fetchPriority: st,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Bt.preinitModule = function (M, g) {
      if (typeof M == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var N = R(g.as, g.crossOrigin);
            s.d.M(M, {
              crossOrigin: N,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(M);
    }),
    (Bt.preload = function (M, g) {
      if (
        typeof M == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var N = g.as,
          L = R(N, g.crossOrigin);
        s.d.L(M, N, {
          crossOrigin: L,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Bt.preloadModule = function (M, g) {
      if (typeof M == "string")
        if (g) {
          var N = R(g.as, g.crossOrigin);
          s.d.m(M, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: N,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(M);
    }),
    (Bt.requestFormReset = function (M) {
      s.d.r(M);
    }),
    (Bt.unstable_batchedUpdates = function (M, g) {
      return M(g);
    }),
    (Bt.useFormState = function (M, g, N) {
      return j.H.useFormState(M, g, N);
    }),
    (Bt.useFormStatus = function () {
      return j.H.useHostTransitionStatus();
    }),
    (Bt.version = "19.1.1"),
    Bt
  );
}
var kd;
function By() {
  if (kd) return Of.exports;
  kd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (Of.exports = qy()), Of.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function Yy() {
  if (Jd) return Mu;
  Jd = 1;
  var c = Cy(),
    o = wf(),
    r = By();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function A(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return);
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function j(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function R(t) {
    if (A(t) !== t) throw Error(s(188));
  }
  function M(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = A(t)), l === null)) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return R(u), t;
          if (n === a) return R(u), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = u), (a = n);
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === e) {
            (i = !0), (e = u), (a = n);
            break;
          }
          if (f === a) {
            (i = !0), (a = u), (e = n);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === e) {
              (i = !0), (e = n), (a = u);
              break;
            }
            if (f === a) {
              (i = !0), (a = n), (e = u);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function g(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = g(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var N = Object.assign,
    L = Symbol.for("react.element"),
    K = Symbol.for("react.transitional.element"),
    st = Symbol.for("react.portal"),
    ht = Symbol.for("react.fragment"),
    yl = Symbol.for("react.strict_mode"),
    Gt = Symbol.for("react.profiler"),
    ge = Symbol.for("react.provider"),
    Dl = Symbol.for("react.consumer"),
    Ut = Symbol.for("react.context"),
    ml = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    Kt = Symbol.for("react.suspense_list"),
    kt = Symbol.for("react.memo"),
    Jt = Symbol.for("react.lazy"),
    Sl = Symbol.for("react.activity"),
    Qe = Symbol.for("react.memo_cache_sentinel"),
    Rl = Symbol.iterator;
  function wt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Rl && t[Rl]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var be = Symbol.for("react.client.reference");
  function xe(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === be ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ht:
        return "Fragment";
      case Gt:
        return "Profiler";
      case yl:
        return "StrictMode";
      case I:
        return "Suspense";
      case Kt:
        return "SuspenseList";
      case Sl:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case st:
          return "Portal";
        case Ut:
          return (t.displayName || "Context") + ".Provider";
        case Dl:
          return (t._context.displayName || "Context") + ".Consumer";
        case ml:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case kt:
          return (
            (l = t.displayName || null), l !== null ? l : xe(t.type) || "Memo"
          );
        case Jt:
          (l = t._payload), (t = t._init);
          try {
            return xe(t(l));
          } catch {}
      }
    return null;
  }
  var Ht = Array.isArray,
    z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    ct = [],
    p = -1;
  function D(t) {
    return { current: t };
  }
  function H(t) {
    0 > p || ((t.current = ct[p]), (ct[p] = null), p--);
  }
  function U(t, l) {
    p++, (ct[p] = t.current), (t.current = l);
  }
  var B = D(null),
    P = D(null),
    Z = D(null),
    Wt = D(null);
  function rt(t, l) {
    switch ((U(Z, l), U(P, t), U(B, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? nd(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          (l = nd(l)), (t = id(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    H(B), U(B, t);
  }
  function Kl() {
    H(B), H(P), H(Z);
  }
  function ui(t) {
    t.memoizedState !== null && U(Wt, t);
    var l = B.current,
      e = id(l, t.type);
    l !== e && (U(P, t), U(B, e));
  }
  function Uu(t) {
    P.current === t && (H(B), H(P)),
      Wt.current === t && (H(Wt), (_u._currentValue = X));
  }
  var ni = Object.prototype.hasOwnProperty,
    ii = c.unstable_scheduleCallback,
    ci = c.unstable_cancelCallback,
    sp = c.unstable_shouldYield,
    rp = c.unstable_requestPaint,
    _l = c.unstable_now,
    dp = c.unstable_getCurrentPriorityLevel,
    Bf = c.unstable_ImmediatePriority,
    Yf = c.unstable_UserBlockingPriority,
    wu = c.unstable_NormalPriority,
    pp = c.unstable_LowPriority,
    Gf = c.unstable_IdlePriority,
    hp = c.log,
    yp = c.unstable_setDisableYieldValue,
    Ra = null,
    $t = null;
  function kl(t) {
    if (
      (typeof hp == "function" && yp(t),
      $t && typeof $t.setStrictMode == "function")
    )
      try {
        $t.setStrictMode(Ra, t);
      } catch {}
  }
  var Ft = Math.clz32 ? Math.clz32 : gp,
    mp = Math.log,
    vp = Math.LN2;
  function gp(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((mp(t) / vp) | 0)) | 0;
  }
  var Hu = 256,
    Cu = 4194304;
  function Se(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function qu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~n),
          a !== 0
            ? (u = Se(a))
            : ((i &= f),
              i !== 0
                ? (u = Se(i))
                : e || ((e = f & ~t), e !== 0 && (u = Se(e)))))
        : ((f = a & ~n),
          f !== 0
            ? (u = Se(f))
            : i !== 0
            ? (u = Se(i))
            : e || ((e = a & ~t), e !== 0 && (u = Se(e)))),
      u === 0
        ? 0
        : l !== 0 &&
          l !== u &&
          (l & n) === 0 &&
          ((n = u & -u),
          (e = l & -l),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? l
        : u
    );
  }
  function ja(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function bp(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xf() {
    var t = Hu;
    return (Hu <<= 1), (Hu & 4194048) === 0 && (Hu = 256), t;
  }
  function Qf() {
    var t = Cu;
    return (Cu <<= 1), (Cu & 62914560) === 0 && (Cu = 4194304), t;
  }
  function fi(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Na(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function xp(t, l, e, a, u, n) {
    var i = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var f = t.entanglements,
      d = t.expirationTimes,
      b = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - Ft(e),
        O = 1 << T;
      (f[T] = 0), (d[T] = -1);
      var S = b[T];
      if (S !== null)
        for (b[T] = null, T = 0; T < S.length; T++) {
          var _ = S[T];
          _ !== null && (_.lane &= -536870913);
        }
      e &= ~O;
    }
    a !== 0 && Zf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function Zf(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var a = 31 - Ft(l);
    (t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function Lf(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var a = 31 - Ft(e),
        u = 1 << a;
      (u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u);
    }
  }
  function oi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function si(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vf() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Ed(t.type));
  }
  function Sp(t, l) {
    var e = w.p;
    try {
      return (w.p = t), l();
    } finally {
      w.p = e;
    }
  }
  var Jl = Math.random().toString(36).slice(2),
    Ct = "__reactFiber$" + Jl,
    Xt = "__reactProps$" + Jl,
    Ze = "__reactContainer$" + Jl,
    ri = "__reactEvents$" + Jl,
    _p = "__reactListeners$" + Jl,
    Tp = "__reactHandles$" + Jl,
    Kf = "__reactResources$" + Jl,
    Ua = "__reactMarker$" + Jl;
  function di(t) {
    delete t[Ct], delete t[Xt], delete t[ri], delete t[_p], delete t[Tp];
  }
  function Le(t) {
    var l = t[Ct];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[Ze] || e[Ct])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = sd(t); t !== null; ) {
            if ((e = t[Ct])) return e;
            t = sd(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function Ve(t) {
    if ((t = t[Ct] || t[Ze])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function wa(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ke(t) {
    var l = t[Kf];
    return (
      l ||
        (l = t[Kf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function zt(t) {
    t[Ua] = !0;
  }
  var kf = new Set(),
    Jf = {};
  function _e(t, l) {
    ke(t, l), ke(t + "Capture", l);
  }
  function ke(t, l) {
    for (Jf[t] = l, t = 0; t < l.length; t++) kf.add(l[t]);
  }
  var zp = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Wf = {},
    $f = {};
  function Ep(t) {
    return ni.call($f, t)
      ? !0
      : ni.call(Wf, t)
      ? !1
      : zp.test(t)
      ? ($f[t] = !0)
      : ((Wf[t] = !0), !1);
  }
  function Bu(t, l, e) {
    if (Ep(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Yu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function jl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  var pi, Ff;
  function Je(t) {
    if (pi === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        (pi = (l && l[1]) || ""),
          (Ff =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      pi +
      t +
      Ff
    );
  }
  var hi = !1;
  function yi(t, l) {
    if (!t || hi) return "";
    hi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var O = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(O.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(O, []);
                } catch (_) {
                  var S = _;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (_) {
                  S = _;
                }
                t.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                S = _;
              }
              (O = t()) &&
                typeof O.catch == "function" &&
                O.catch(function () {});
            }
          } catch (_) {
            if (_ && S && typeof _.stack == "string") return [_.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var d = i.split(`
`),
          b = f.split(`
`);
        for (
          u = a = 0;
          a < d.length && !d[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < b.length && !b[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === d.length || u === b.length)
          for (
            a = d.length - 1, u = b.length - 1;
            1 <= a && 0 <= u && d[a] !== b[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (d[a] !== b[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || d[a] !== b[u])) {
                  var T =
                    `
` + d[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", t.displayName)),
                    T
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (hi = !1), (Error.prepareStackTrace = e);
    }
    return (e = t ? t.displayName || t.name : "") ? Je(e) : "";
  }
  function Ap(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Je(t.type);
      case 16:
        return Je("Lazy");
      case 13:
        return Je("Suspense");
      case 19:
        return Je("SuspenseList");
      case 0:
      case 15:
        return yi(t.type, !1);
      case 11:
        return yi(t.type.render, !1);
      case 1:
        return yi(t.type, !0);
      case 31:
        return Je("Activity");
      default:
        return "";
    }
  }
  function If(t) {
    try {
      var l = "";
      do (l += Ap(t)), (t = t.return);
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function il(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Pf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Op(t) {
    var l = Pf(t) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      a = "" + t[l];
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            (a = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function Gu(t) {
    t._valueTracker || (t._valueTracker = Op(t));
  }
  function to(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Pf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Xu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Mp = /[\n"\\]/g;
  function cl(t) {
    return t.replace(Mp, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function mi(t, l, e, a, u, n, i, f) {
    (t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + il(l))
          : t.value !== "" + il(l) && (t.value = "" + il(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? vi(t, i, il(l))
        : e != null
        ? vi(t, i, il(e))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + il(f))
        : t.removeAttribute("name");
  }
  function lo(t, l, e, a, u, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (e = e != null ? "" + il(e) : ""),
        (l = l != null ? "" + il(l) : e),
        f || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i);
  }
  function vi(t, l, e) {
    (l === "number" && Xu(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function We(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        (u = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + il(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function eo(t, l, e) {
    if (
      l != null &&
      ((l = "" + il(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + il(e) : "";
  }
  function ao(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Ht(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (l = e);
    }
    (e = il(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a);
  }
  function $e(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Dp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uo(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
        ? (t.cssFloat = "")
        : (t[l] = "")
      : a
      ? t.setProperty(l, e)
      : typeof e != "number" || e === 0 || Dp.has(l)
      ? l === "float"
        ? (t.cssFloat = e)
        : (t[l] = ("" + e).trim())
      : (t[l] = e + "px");
  }
  function no(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in l)
        (a = l[u]), l.hasOwnProperty(u) && e[u] !== a && uo(t, u, a);
    } else for (var n in l) l.hasOwnProperty(n) && uo(t, n, l[n]);
  }
  function gi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rp = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qu(t) {
    return jp.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var bi = null;
  function xi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Fe = null,
    Ie = null;
  function io(t) {
    var l = Ve(t);
    if (l && (t = l.stateNode)) {
      var e = t[Xt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (mi(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + cl("" + l) + '"][type="radio"]'
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[Xt] || null;
                if (!u) throw Error(s(90));
                mi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              (a = e[l]), a.form === t.form && to(a);
          }
          break t;
        case "textarea":
          eo(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && We(t, !!e.multiple, l, !1);
      }
    }
  }
  var Si = !1;
  function co(t, l, e) {
    if (Si) return t(l, e);
    Si = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((Si = !1),
        (Fe !== null || Ie !== null) &&
          (Mn(), Fe && ((l = Fe), (t = Ie), (Ie = Fe = null), io(l), t)))
      )
        for (l = 0; l < t.length; l++) io(t[l]);
    }
  }
  function Ha(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Xt] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var Nl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _i = !1;
  if (Nl)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function () {
          _i = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca);
    } catch {
      _i = !1;
    }
  var Wl = null,
    Ti = null,
    Zu = null;
  function fo() {
    if (Zu) return Zu;
    var t,
      l = Ti,
      e = l.length,
      a,
      u = "value" in Wl ? Wl.value : Wl.textContent,
      n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++);
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
    return (Zu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Lu(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Vu() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function Qt(t) {
    function l(e, a, u, n, i) {
      (this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in t)
        t.hasOwnProperty(f) && ((e = t[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Vu
          : oo),
        (this.isPropagationStopped = oo),
        this
      );
    }
    return (
      N(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Vu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Vu));
        },
        persist: function () {},
        isPersistent: Vu,
      }),
      l
    );
  }
  var Te = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ku = Qt(Te),
    qa = N({}, Te, { view: 0, detail: 0 }),
    Np = Qt(qa),
    zi,
    Ei,
    Ba,
    ku = N({}, qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ba &&
              (Ba && t.type === "mousemove"
                ? ((zi = t.screenX - Ba.screenX), (Ei = t.screenY - Ba.screenY))
                : (Ei = zi = 0),
              (Ba = t)),
            zi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ei;
      },
    }),
    so = Qt(ku),
    Up = N({}, ku, { dataTransfer: 0 }),
    wp = Qt(Up),
    Hp = N({}, qa, { relatedTarget: 0 }),
    Ai = Qt(Hp),
    Cp = N({}, Te, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qp = Qt(Cp),
    Bp = N({}, Te, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Yp = Qt(Bp),
    Gp = N({}, Te, { data: 0 }),
    ro = Qt(Gp),
    Xp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Zp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Lp(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = Zp[t])
      ? !!l[t]
      : !1;
  }
  function Oi() {
    return Lp;
  }
  var Vp = N({}, qa, {
      key: function (t) {
        if (t.key) {
          var l = Xp[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Lu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Qp[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oi,
      charCode: function (t) {
        return t.type === "keypress" ? Lu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Lu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Kp = Qt(Vp),
    kp = N({}, ku, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    po = Qt(kp),
    Jp = N({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oi,
    }),
    Wp = Qt(Jp),
    $p = N({}, Te, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fp = Qt($p),
    Ip = N({}, ku, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Pp = Qt(Ip),
    t0 = N({}, Te, { newState: 0, oldState: 0 }),
    l0 = Qt(t0),
    e0 = [9, 13, 27, 32],
    Mi = Nl && "CompositionEvent" in window,
    Ya = null;
  Nl && "documentMode" in document && (Ya = document.documentMode);
  var a0 = Nl && "TextEvent" in window && !Ya,
    ho = Nl && (!Mi || (Ya && 8 < Ya && 11 >= Ya)),
    yo = " ",
    mo = !1;
  function vo(t, l) {
    switch (t) {
      case "keyup":
        return e0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function go(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Pe = !1;
  function u0(t, l) {
    switch (t) {
      case "compositionend":
        return go(l);
      case "keypress":
        return l.which !== 32 ? null : ((mo = !0), yo);
      case "textInput":
        return (t = l.data), t === yo && mo ? null : t;
      default:
        return null;
    }
  }
  function n0(t, l) {
    if (Pe)
      return t === "compositionend" || (!Mi && vo(t, l))
        ? ((t = fo()), (Zu = Ti = Wl = null), (Pe = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return ho && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var i0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function bo(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!i0[t.type] : l === "textarea";
  }
  function xo(t, l, e, a) {
    Fe ? (Ie ? Ie.push(a) : (Ie = [a])) : (Fe = a),
      (l = wn(l, "onChange")),
      0 < l.length &&
        ((e = new Ku("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l }));
  }
  var Ga = null,
    Xa = null;
  function c0(t) {
    td(t, 0);
  }
  function Ju(t) {
    var l = wa(t);
    if (to(l)) return t;
  }
  function So(t, l) {
    if (t === "change") return l;
  }
  var _o = !1;
  if (Nl) {
    var Di;
    if (Nl) {
      var Ri = "oninput" in document;
      if (!Ri) {
        var To = document.createElement("div");
        To.setAttribute("oninput", "return;"),
          (Ri = typeof To.oninput == "function");
      }
      Di = Ri;
    } else Di = !1;
    _o = Di && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Ga && (Ga.detachEvent("onpropertychange", Eo), (Xa = Ga = null));
  }
  function Eo(t) {
    if (t.propertyName === "value" && Ju(Xa)) {
      var l = [];
      xo(l, Xa, t, xi(t)), co(c0, l);
    }
  }
  function f0(t, l, e) {
    t === "focusin"
      ? (zo(), (Ga = l), (Xa = e), Ga.attachEvent("onpropertychange", Eo))
      : t === "focusout" && zo();
  }
  function o0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ju(Xa);
  }
  function s0(t, l) {
    if (t === "click") return Ju(l);
  }
  function r0(t, l) {
    if (t === "input" || t === "change") return Ju(l);
  }
  function d0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var It = typeof Object.is == "function" ? Object.is : d0;
  function Qa(t, l) {
    if (It(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!ni.call(l, u) || !It(t[u], l[u])) return !1;
    }
    return !0;
  }
  function Ao(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Oo(t, l) {
    var e = Ao(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Ao(e);
    }
  }
  function Mo(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
        ? !1
        : l && l.nodeType === 3
        ? Mo(t, l.parentNode)
        : "contains" in t
        ? t.contains(l)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(l) & 16)
        : !1
      : !1;
  }
  function Do(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Xu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Xu(t.document);
    }
    return l;
  }
  function ji(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var p0 = Nl && "documentMode" in document && 11 >= document.documentMode,
    ta = null,
    Ni = null,
    Za = null,
    Ui = !1;
  function Ro(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ui ||
      ta == null ||
      ta !== Xu(a) ||
      ((a = ta),
      "selectionStart" in a && ji(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Qa(Za, a)) ||
        ((Za = a),
        (a = wn(Ni, "onSelect")),
        0 < a.length &&
          ((l = new Ku("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = ta))));
  }
  function ze(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var la = {
      animationend: ze("Animation", "AnimationEnd"),
      animationiteration: ze("Animation", "AnimationIteration"),
      animationstart: ze("Animation", "AnimationStart"),
      transitionrun: ze("Transition", "TransitionRun"),
      transitionstart: ze("Transition", "TransitionStart"),
      transitioncancel: ze("Transition", "TransitionCancel"),
      transitionend: ze("Transition", "TransitionEnd"),
    },
    wi = {},
    jo = {};
  Nl &&
    ((jo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete la.animationend.animation,
      delete la.animationiteration.animation,
      delete la.animationstart.animation),
    "TransitionEvent" in window || delete la.transitionend.transition);
  function Ee(t) {
    if (wi[t]) return wi[t];
    if (!la[t]) return t;
    var l = la[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in jo) return (wi[t] = l[e]);
    return t;
  }
  var No = Ee("animationend"),
    Uo = Ee("animationiteration"),
    wo = Ee("animationstart"),
    h0 = Ee("transitionrun"),
    y0 = Ee("transitionstart"),
    m0 = Ee("transitioncancel"),
    Ho = Ee("transitionend"),
    Co = new Map(),
    Hi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Hi.push("scrollEnd");
  function vl(t, l) {
    Co.set(t, l), _e(l, [t]);
  }
  var qo = new WeakMap();
  function fl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = qo.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: If(l) }), qo.set(t, l), l);
    }
    return { value: t, source: l, stack: If(l) };
  }
  var ol = [],
    ea = 0,
    Ci = 0;
  function Wu() {
    for (var t = ea, l = (Ci = ea = 0); l < t; ) {
      var e = ol[l];
      ol[l++] = null;
      var a = ol[l];
      ol[l++] = null;
      var u = ol[l];
      ol[l++] = null;
      var n = ol[l];
      if (((ol[l++] = null), a !== null && u !== null)) {
        var i = a.pending;
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u);
      }
      n !== 0 && Bo(e, u, n);
    }
  }
  function $u(t, l, e, a) {
    (ol[ea++] = t),
      (ol[ea++] = l),
      (ol[ea++] = e),
      (ol[ea++] = a),
      (Ci |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function qi(t, l, e, a) {
    return $u(t, l, e, a), Fu(t);
  }
  function aa(t, l) {
    return $u(t, null, null, l), Fu(t);
  }
  function Bo(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - Ft(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null;
  }
  function Fu(t) {
    if (50 < hu) throw ((hu = 0), (Zc = null), Error(s(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ua = {};
  function v0(t, l, e, a) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Pt(t, l, e, a) {
    return new v0(t, l, e, a);
  }
  function Bi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Ul(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = Pt(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function Yo(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function Iu(t, l, e, a, u, n) {
    var i = 0;
    if (((a = t), typeof t == "function")) Bi(t) && (i = 1);
    else if (typeof t == "string")
      i = bh(t, e, B.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Sl:
          return (t = Pt(31, e, l, u)), (t.elementType = Sl), (t.lanes = n), t;
        case ht:
          return Ae(e.children, u, n, l);
        case yl:
          (i = 8), (u |= 24);
          break;
        case Gt:
          return (
            (t = Pt(12, e, l, u | 2)), (t.elementType = Gt), (t.lanes = n), t
          );
        case I:
          return (t = Pt(13, e, l, u)), (t.elementType = I), (t.lanes = n), t;
        case Kt:
          return (t = Pt(19, e, l, u)), (t.elementType = Kt), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ge:
              case Ut:
                i = 10;
                break t;
              case Dl:
                i = 9;
                break t;
              case ml:
                i = 11;
                break t;
              case kt:
                i = 14;
                break t;
              case Jt:
                (i = 16), (a = null);
                break t;
            }
          (i = 29),
            (e = Error(s(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (l = Pt(i, e, l, u)), (l.elementType = t), (l.type = a), (l.lanes = n), l
    );
  }
  function Ae(t, l, e, a) {
    return (t = Pt(7, t, a, l)), (t.lanes = e), t;
  }
  function Yi(t, l, e) {
    return (t = Pt(6, t, null, l)), (t.lanes = e), t;
  }
  function Gi(t, l, e) {
    return (
      (l = Pt(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var na = [],
    ia = 0,
    Pu = null,
    tn = 0,
    sl = [],
    rl = 0,
    Oe = null,
    wl = 1,
    Hl = "";
  function Me(t, l) {
    (na[ia++] = tn), (na[ia++] = Pu), (Pu = t), (tn = l);
  }
  function Go(t, l, e) {
    (sl[rl++] = wl), (sl[rl++] = Hl), (sl[rl++] = Oe), (Oe = t);
    var a = wl;
    t = Hl;
    var u = 32 - Ft(a) - 1;
    (a &= ~(1 << u)), (e += 1);
    var n = 32 - Ft(l) + u;
    if (30 < n) {
      var i = u - (u % 5);
      (n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (wl = (1 << (32 - Ft(l) + u)) | (e << u) | a),
        (Hl = n + t);
    } else (wl = (1 << n) | (e << u) | a), (Hl = t);
  }
  function Xi(t) {
    t.return !== null && (Me(t, 1), Go(t, 1, 0));
  }
  function Qi(t) {
    for (; t === Pu; )
      (Pu = na[--ia]), (na[ia] = null), (tn = na[--ia]), (na[ia] = null);
    for (; t === Oe; )
      (Oe = sl[--rl]),
        (sl[rl] = null),
        (Hl = sl[--rl]),
        (sl[rl] = null),
        (wl = sl[--rl]),
        (sl[rl] = null);
  }
  var Yt = null,
    yt = null,
    lt = !1,
    De = null,
    Tl = !1,
    Zi = Error(s(519));
  function Re(t) {
    var l = Error(s(418, ""));
    throw (Ka(fl(l, t)), Zi);
  }
  function Xo(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[Ct] = t), (l[Xt] = a), e)) {
      case "dialog":
        $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) $(mu[e], l);
        break;
      case "source":
        $("error", l);
        break;
      case "img":
      case "image":
      case "link":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "input":
        $("invalid", l),
          lo(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Gu(l);
        break;
      case "select":
        $("invalid", l);
        break;
      case "textarea":
        $("invalid", l), ao(l, a.value, a.defaultValue, a.children), Gu(l);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      ud(l.textContent, e)
        ? (a.popover != null && ($("beforetoggle", l), $("toggle", l)),
          a.onScroll != null && $("scroll", l),
          a.onScrollEnd != null && $("scrollend", l),
          a.onClick != null && (l.onclick = Hn),
          (l = !0))
        : (l = !1),
      l || Re(t);
  }
  function Qo(t) {
    for (Yt = t.return; Yt; )
      switch (Yt.tag) {
        case 5:
        case 13:
          Tl = !1;
          return;
        case 27:
        case 3:
          Tl = !0;
          return;
        default:
          Yt = Yt.return;
      }
  }
  function La(t) {
    if (t !== Yt) return !1;
    if (!lt) return Qo(t), (lt = !0), !1;
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || nf(t.type, t.memoizedProps))),
        (e = !e)),
      e && yt && Re(t),
      Qo(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                yt = bl(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        yt = null;
      }
    } else
      l === 27
        ? ((l = yt), re(t.type) ? ((t = sf), (sf = null), (yt = t)) : (yt = l))
        : (yt = Yt ? bl(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Va() {
    (yt = Yt = null), (lt = !1);
  }
  function Zo() {
    var t = De;
    return (
      t !== null &&
        (Vt === null ? (Vt = t) : Vt.push.apply(Vt, t), (De = null)),
      t
    );
  }
  function Ka(t) {
    De === null ? (De = [t]) : De.push(t);
  }
  var Li = D(null),
    je = null,
    Cl = null;
  function $l(t, l, e) {
    U(Li, l._currentValue), (l._currentValue = e);
  }
  function ql(t) {
    (t._currentValue = Li.current), H(Li);
  }
  function Vi(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function Ki(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var d = 0; d < l.length; d++)
            if (f.context === l[d]) {
              (n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                Vi(n.return, e, t),
                a || (i = null);
              break t;
            }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        (i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Vi(i, e, t),
          (i = null);
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            (u.return = i.return), (i = u);
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ka(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type;
          It(u.pendingProps.value, i.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (u === Wt.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(_u) : (t = [_u]));
      }
      u = u.return;
    }
    t !== null && Ki(l, t, e, a), (l.flags |= 262144);
  }
  function ln(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!It(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ne(t) {
    (je = t),
      (Cl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function qt(t) {
    return Lo(je, t);
  }
  function en(t, l) {
    return je === null && Ne(t), Lo(t, l);
  }
  function Lo(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Cl === null)) {
      if (t === null) throw Error(s(308));
      (Cl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Cl = Cl.next = l;
    return e;
  }
  var g0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                });
            };
          },
    b0 = c.unstable_scheduleCallback,
    x0 = c.unstable_NormalPriority,
    _t = {
      $$typeof: Ut,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ki() {
    return { controller: new g0(), data: new Map(), refCount: 0 };
  }
  function Ja(t) {
    t.refCount--,
      t.refCount === 0 &&
        b0(x0, function () {
          t.controller.abort();
        });
  }
  var Wa = null,
    Ji = 0,
    ca = 0,
    fa = null;
  function S0(t, l) {
    if (Wa === null) {
      var e = (Wa = []);
      (Ji = 0),
        (ca = $c()),
        (fa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Ji++, l.then(Vo, Vo), l;
  }
  function Vo() {
    if (--Ji === 0 && Wa !== null) {
      fa !== null && (fa.status = "fulfilled");
      var t = Wa;
      (Wa = null), (ca = 0), (fa = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function _0(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = l);
          for (var u = 0; u < e.length; u++) (0, e[u])(l);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        }
      ),
      a
    );
  }
  var Ko = z.S;
  z.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      S0(t, l),
      Ko !== null && Ko(t, l);
  };
  var Ue = D(null);
  function Wi() {
    var t = Ue.current;
    return t !== null ? t : ot.pooledCache;
  }
  function an(t, l) {
    l === null ? U(Ue, Ue.current) : U(Ue, l.pool);
  }
  function ko() {
    var t = Wi();
    return t === null ? null : { parent: _t._currentValue, pool: t };
  }
  var $a = Error(s(460)),
    Jo = Error(s(474)),
    un = Error(s(542)),
    $i = { then: function () {} };
  function Wo(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function nn() {}
  function $o(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(nn, nn), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), Io(t), t);
      default:
        if (typeof l.status == "string") l.then(nn, nn);
        else {
          if (((t = ot), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var u = l;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), Io(t), t);
        }
        throw ((Fa = l), $a);
    }
  }
  var Fa = null;
  function Fo() {
    if (Fa === null) throw Error(s(459));
    var t = Fa;
    return (Fa = null), t;
  }
  function Io(t) {
    if (t === $a || t === un) throw Error(s(483));
  }
  var Fl = !1;
  function Fi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ii(t, l) {
    (t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Il(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pl(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (et & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Fu(t)),
        Bo(t, null, e),
        l
      );
    }
    return $u(t, a, l, e), Fu(t);
  }
  function Ia(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Lf(t, e);
    }
  }
  function Pi(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next);
        } while (e !== null);
        n === null ? (u = n = l) : (n = n.next = l);
      } else u = n = l;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e);
      return;
    }
    (t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l);
  }
  var tc = !1;
  function Pa() {
    if (tc) {
      var t = fa;
      if (t !== null) throw t;
    }
  }
  function tu(t, l, e, a) {
    tc = !1;
    var u = t.updateQueue;
    Fl = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var d = f,
        b = d.next;
      (d.next = null), i === null ? (n = b) : (i.next = b), (i = d);
      var T = t.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (f = T.lastBaseUpdate),
        f !== i &&
          (f === null ? (T.firstBaseUpdate = b) : (f.next = b),
          (T.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var O = u.baseState;
      (i = 0), (T = b = d = null), (f = n);
      do {
        var S = f.lane & -536870913,
          _ = S !== f.lane;
        if (_ ? (F & S) === S : (a & S) === S) {
          S !== 0 && S === ca && (tc = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Q = t,
              Y = f;
            S = l;
            var it = e;
            switch (Y.tag) {
              case 1:
                if (((Q = Y.payload), typeof Q == "function")) {
                  O = Q.call(it, O, S);
                  break t;
                }
                O = Q;
                break t;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = Y.payload),
                  (S = typeof Q == "function" ? Q.call(it, O, S) : Q),
                  S == null)
                )
                  break t;
                O = N({}, O, S);
                break t;
              case 2:
                Fl = !0;
            }
          }
          (S = f.callback),
            S !== null &&
              ((t.flags |= 64),
              _ && (t.flags |= 8192),
              (_ = u.callbacks),
              _ === null ? (u.callbacks = [S]) : _.push(S));
        } else
          (_ = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            T === null ? ((b = T = _), (d = O)) : (T = T.next = _),
            (i |= S);
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break;
          (_ = f),
            (f = _.next),
            (_.next = null),
            (u.lastBaseUpdate = _),
            (u.shared.pending = null);
        }
      } while (!0);
      T === null && (d = O),
        (u.baseState = d),
        (u.firstBaseUpdate = b),
        (u.lastBaseUpdate = T),
        n === null && (u.shared.lanes = 0),
        (ce |= i),
        (t.lanes = i),
        (t.memoizedState = O);
    }
  }
  function Po(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(l);
  }
  function ts(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) Po(e[t], l);
  }
  var oa = D(null),
    cn = D(0);
  function ls(t, l) {
    (t = Ll), U(cn, t), U(oa, l), (Ll = t | l.baseLanes);
  }
  function lc() {
    U(cn, Ll), U(oa, oa.current);
  }
  function ec() {
    (Ll = cn.current), H(oa), H(cn);
  }
  var te = 0,
    k = null,
    ut = null,
    xt = null,
    fn = !1,
    sa = !1,
    we = !1,
    on = 0,
    lu = 0,
    ra = null,
    T0 = 0;
  function gt() {
    throw Error(s(321));
  }
  function ac(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!It(t[e], l[e])) return !1;
    return !0;
  }
  function uc(t, l, e, a, u, n) {
    return (
      (te = n),
      (k = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Bs : Ys),
      (we = !1),
      (n = e(a, u)),
      (we = !1),
      sa && (n = as(l, e, a, u)),
      es(t),
      n
    );
  }
  function es(t) {
    z.H = yn;
    var l = ut !== null && ut.next !== null;
    if (((te = 0), (xt = ut = k = null), (fn = !1), (lu = 0), (ra = null), l))
      throw Error(s(300));
    t === null ||
      Et ||
      ((t = t.dependencies), t !== null && ln(t) && (Et = !0));
  }
  function as(t, l, e, a) {
    k = t;
    var u = 0;
    do {
      if ((sa && (ra = null), (lu = 0), (sa = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (xt = ut = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (z.H = R0), (n = l(e, a));
    } while (sa);
    return n;
  }
  function z0() {
    var t = z.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? eu(l) : l),
      (t = t.useState()[0]),
      (ut !== null ? ut.memoizedState : null) !== t && (k.flags |= 1024),
      l
    );
  }
  function nc() {
    var t = on !== 0;
    return (on = 0), t;
  }
  function ic(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function cc(t) {
    if (fn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      fn = !1;
    }
    (te = 0), (xt = ut = k = null), (sa = !1), (lu = on = 0), (ra = null);
  }
  function Zt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return xt === null ? (k.memoizedState = xt = t) : (xt = xt.next = t), xt;
  }
  function St() {
    if (ut === null) {
      var t = k.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ut.next;
    var l = xt === null ? k.memoizedState : xt.next;
    if (l !== null) (xt = l), (ut = t);
    else {
      if (t === null)
        throw k.alternate === null ? Error(s(467)) : Error(s(310));
      (ut = t),
        (t = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        xt === null ? (k.memoizedState = xt = t) : (xt = xt.next = t);
    }
    return xt;
  }
  function fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function eu(t) {
    var l = lu;
    return (
      (lu += 1),
      ra === null && (ra = []),
      (t = $o(ra, t, l)),
      (l = k),
      (xt === null ? l.memoizedState : xt.next) === null &&
        ((l = l.alternate),
        (z.H = l === null || l.memoizedState === null ? Bs : Ys)),
      t
    );
  }
  function sn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return eu(t);
      if (t.$$typeof === Ut) return qt(t);
    }
    throw Error(s(438, String(t)));
  }
  function oc(t) {
    var l = null,
      e = k.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = k.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = fc()), (k.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Qe;
    return l.index++, e;
  }
  function Bl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function rn(t) {
    var l = St();
    return sc(l, ut, t);
  }
  function sc(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        (u.next = n.next), (n.next = i);
      }
      (l.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      l = u.next;
      var f = (i = null),
        d = null,
        b = l,
        T = !1;
      do {
        var O = b.lane & -536870913;
        if (O !== b.lane ? (F & O) === O : (te & O) === O) {
          var S = b.revertLane;
          if (S === 0)
            d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              O === ca && (T = !0);
          else if ((te & S) === S) {
            (b = b.next), S === ca && (T = !0);
            continue;
          } else
            (O = {
              lane: 0,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              d === null ? ((f = d = O), (i = n)) : (d = d.next = O),
              (k.lanes |= S),
              (ce |= S);
          (O = b.action),
            we && e(n, O),
            (n = b.hasEagerState ? b.eagerState : e(n, O));
        } else
          (S = {
            lane: O,
            revertLane: b.revertLane,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            d === null ? ((f = d = S), (i = n)) : (d = d.next = S),
            (k.lanes |= O),
            (ce |= O);
        b = b.next;
      } while (b !== null && b !== l);
      if (
        (d === null ? (i = n) : (d.next = f),
        !It(n, t.memoizedState) && ((Et = !0), T && ((e = fa), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = i),
        (t.baseQueue = d),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function rc(t) {
    var l = St(),
      e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do (n = t(n, i.action)), (i = i.next);
      while (i !== u);
      It(n, l.memoizedState) || (Et = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, a];
  }
  function us(t, l, e) {
    var a = k,
      u = St(),
      n = lt;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var i = !It((ut || u).memoizedState, e);
    i && ((u.memoizedState = e), (Et = !0)), (u = u.queue);
    var f = cs.bind(null, a, u, t);
    if (
      (au(2048, 8, f, [t]),
      u.getSnapshot !== l || i || (xt !== null && xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        da(9, dn(), is.bind(null, a, u, e, l), null),
        ot === null)
      )
        throw Error(s(349));
      n || (te & 124) !== 0 || ns(a, l, e);
    }
    return e;
  }
  function ns(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = k.updateQueue),
      l === null
        ? ((l = fc()), (k.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function is(t, l, e, a) {
    (l.value = e), (l.getSnapshot = a), fs(l) && os(t);
  }
  function cs(t, l, e) {
    return e(function () {
      fs(l) && os(t);
    });
  }
  function fs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !It(t, e);
    } catch {
      return !0;
    }
  }
  function os(t) {
    var l = aa(t, 2);
    l !== null && ul(l, t, 2);
  }
  function dc(t) {
    var l = Zt();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), we)) {
        kl(!0);
        try {
          e();
        } finally {
          kl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function ss(t, l, e, a) {
    return (t.baseState = e), sc(t, ut, typeof a == "function" ? a : Bl);
  }
  function E0(t, l, e, a, u) {
    if (hn(t)) throw Error(s(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      z.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), rs(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function rs(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state;
    if (l.isTransition) {
      var n = z.T,
        i = {};
      z.T = i;
      try {
        var f = e(u, a),
          d = z.S;
        d !== null && d(i, f), ds(t, l, f);
      } catch (b) {
        pc(t, l, b);
      } finally {
        z.T = n;
      }
    } else
      try {
        (n = e(u, a)), ds(t, l, n);
      } catch (b) {
        pc(t, l, b);
      }
  }
  function ds(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            ps(t, l, a);
          },
          function (a) {
            return pc(t, l, a);
          }
        )
      : ps(t, l, e);
  }
  function ps(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      hs(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), rs(t, e)));
  }
  function pc(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (l.status = "rejected"), (l.reason = e), hs(l), (l = l.next);
      while (l !== a);
    }
    t.action = null;
  }
  function hs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ys(t, l) {
    return l;
  }
  function ms(t, l) {
    if (lt) {
      var e = ot.formState;
      if (e !== null) {
        t: {
          var a = k;
          if (lt) {
            if (yt) {
              l: {
                for (var u = yt, n = Tl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (((u = bl(u.nextSibling)), u === null)) {
                    u = null;
                    break l;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (yt = bl(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Re(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = Zt()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ys,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = Hs.bind(null, k, a)),
      (a.dispatch = e),
      (a = dc(!1)),
      (n = gc.bind(null, k, !1, a.queue)),
      (a = Zt()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = E0.bind(null, k, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function vs(t) {
    var l = St();
    return gs(l, ut, t);
  }
  function gs(t, l, e) {
    if (
      ((l = sc(t, l, ys)[0]),
      (t = rn(Bl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = eu(l);
      } catch (i) {
        throw i === $a ? un : i;
      }
    else a = l;
    l = St();
    var u = l.queue,
      n = u.dispatch;
    return (
      e !== l.memoizedState &&
        ((k.flags |= 2048), da(9, dn(), A0.bind(null, u, e), null)),
      [a, n, t]
    );
  }
  function A0(t, l) {
    t.action = l;
  }
  function bs(t) {
    var l = St(),
      e = ut;
    if (e !== null) return gs(l, e, t);
    St(), (l = l.memoizedState), (e = St());
    var a = e.queue.dispatch;
    return (e.memoizedState = t), [l, a, !1];
  }
  function da(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = k.updateQueue),
      l === null && ((l = fc()), (k.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function dn() {
    return { destroy: void 0, resource: void 0 };
  }
  function xs() {
    return St().memoizedState;
  }
  function pn(t, l, e, a) {
    var u = Zt();
    (a = a === void 0 ? null : a),
      (k.flags |= t),
      (u.memoizedState = da(1 | l, dn(), e, a));
  }
  function au(t, l, e, a) {
    var u = St();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ut !== null && a !== null && ac(a, ut.memoizedState.deps)
      ? (u.memoizedState = da(l, n, e, a))
      : ((k.flags |= t), (u.memoizedState = da(1 | l, n, e, a)));
  }
  function Ss(t, l) {
    pn(8390656, 8, t, l);
  }
  function _s(t, l) {
    au(2048, 8, t, l);
  }
  function Ts(t, l) {
    return au(4, 2, t, l);
  }
  function zs(t, l) {
    return au(4, 4, t, l);
  }
  function Es(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function As(t, l, e) {
    (e = e != null ? e.concat([t]) : null), au(4, 4, Es.bind(null, l, t), e);
  }
  function hc() {}
  function Os(t, l) {
    var e = St();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && ac(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function Ms(t, l) {
    var e = St();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && ac(l, a[1])) return a[0];
    if (((a = t()), we)) {
      kl(!0);
      try {
        t();
      } finally {
        kl(!1);
      }
    }
    return (e.memoizedState = [a, l]), a;
  }
  function yc(t, l, e) {
    return e === void 0 || (te & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = jr()), (k.lanes |= t), (ce |= t), e);
  }
  function Ds(t, l, e, a) {
    return It(e, l)
      ? e
      : oa.current !== null
      ? ((t = yc(t, e, a)), It(t, l) || (Et = !0), t)
      : (te & 42) === 0
      ? ((Et = !0), (t.memoizedState = e))
      : ((t = jr()), (k.lanes |= t), (ce |= t), l);
  }
  function Rs(t, l, e, a, u) {
    var n = w.p;
    w.p = n !== 0 && 8 > n ? n : 8;
    var i = z.T,
      f = {};
    (z.T = f), gc(t, !1, l, e);
    try {
      var d = u(),
        b = z.S;
      if (
        (b !== null && b(f, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var T = _0(d, a);
        uu(t, l, T, al(t));
      } else uu(t, l, a, al(t));
    } catch (O) {
      uu(t, l, { then: function () {}, status: "rejected", reason: O }, al());
    } finally {
      (w.p = n), (z.T = i);
    }
  }
  function O0() {}
  function mc(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476));
    var u = js(t).queue;
    Rs(
      t,
      u,
      l,
      X,
      e === null
        ? O0
        : function () {
            return Ns(t), e(a);
          }
    );
  }
  function js(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bl,
        lastRenderedState: X,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bl,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function Ns(t) {
    var l = js(t).next.queue;
    uu(t, l, {}, al());
  }
  function vc() {
    return qt(_u);
  }
  function Us() {
    return St().memoizedState;
  }
  function ws() {
    return St().memoizedState;
  }
  function M0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = al();
          t = Il(e);
          var a = Pl(l, t, e);
          a !== null && (ul(a, l, e), Ia(a, l, e)),
            (l = { cache: ki() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function D0(t, l, e) {
    var a = al();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hn(t)
        ? Cs(l, e)
        : ((e = qi(t, l, e, a)), e !== null && (ul(e, t, a), qs(e, l, a)));
  }
  function Hs(t, l, e) {
    var a = al();
    uu(t, l, e, a);
  }
  function uu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hn(t)) Cs(l, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            f = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = f), It(f, i)))
            return $u(t, l, u, 0), ot === null && Wu(), !1;
        } catch {
        } finally {
        }
      if (((e = qi(t, l, u, a)), e !== null))
        return ul(e, t, a), qs(e, l, a), !0;
    }
    return !1;
  }
  function gc(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: $c(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hn(t))
    ) {
      if (l) throw Error(s(479));
    } else (l = qi(t, e, a, 2)), l !== null && ul(l, t, 2);
  }
  function hn(t) {
    var l = t.alternate;
    return t === k || (l !== null && l === k);
  }
  function Cs(t, l) {
    sa = fn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function qs(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      (a &= t.pendingLanes), (e |= a), (l.lanes = e), Lf(t, e);
    }
  }
  var yn = {
      readContext: qt,
      use: sn,
      useCallback: gt,
      useContext: gt,
      useEffect: gt,
      useImperativeHandle: gt,
      useLayoutEffect: gt,
      useInsertionEffect: gt,
      useMemo: gt,
      useReducer: gt,
      useRef: gt,
      useState: gt,
      useDebugValue: gt,
      useDeferredValue: gt,
      useTransition: gt,
      useSyncExternalStore: gt,
      useId: gt,
      useHostTransitionStatus: gt,
      useFormState: gt,
      useActionState: gt,
      useOptimistic: gt,
      useMemoCache: gt,
      useCacheRefresh: gt,
    },
    Bs = {
      readContext: qt,
      use: sn,
      useCallback: function (t, l) {
        return (Zt().memoizedState = [t, l === void 0 ? null : l]), t;
      },
      useContext: qt,
      useEffect: Ss,
      useImperativeHandle: function (t, l, e) {
        (e = e != null ? e.concat([t]) : null),
          pn(4194308, 4, Es.bind(null, l, t), e);
      },
      useLayoutEffect: function (t, l) {
        return pn(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        pn(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = Zt();
        l = l === void 0 ? null : l;
        var a = t();
        if (we) {
          kl(!0);
          try {
            t();
          } finally {
            kl(!1);
          }
        }
        return (e.memoizedState = [a, l]), a;
      },
      useReducer: function (t, l, e) {
        var a = Zt();
        if (e !== void 0) {
          var u = e(l);
          if (we) {
            kl(!0);
            try {
              e(l);
            } finally {
              kl(!1);
            }
          }
        } else u = l;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = D0.bind(null, k, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = Zt();
        return (t = { current: t }), (l.memoizedState = t);
      },
      useState: function (t) {
        t = dc(t);
        var l = t.queue,
          e = Hs.bind(null, k, l);
        return (l.dispatch = e), [t.memoizedState, e];
      },
      useDebugValue: hc,
      useDeferredValue: function (t, l) {
        var e = Zt();
        return yc(e, t, l);
      },
      useTransition: function () {
        var t = dc(!1);
        return (
          (t = Rs.bind(null, k, t.queue, !0, !1)),
          (Zt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = k,
          u = Zt();
        if (lt) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = l()), ot === null)) throw Error(s(349));
          (F & 124) !== 0 || ns(a, l, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: l };
        return (
          (u.queue = n),
          Ss(cs.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          da(9, dn(), is.bind(null, a, n, e, l), null),
          e
        );
      },
      useId: function () {
        var t = Zt(),
          l = ot.identifierPrefix;
        if (lt) {
          var e = Hl,
            a = wl;
          (e = (a & ~(1 << (32 - Ft(a) - 1))).toString(32) + e),
            (l = "«" + l + "R" + e),
            (e = on++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "»");
        } else (e = T0++), (l = "«" + l + "r" + e.toString(32) + "»");
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: vc,
      useFormState: ms,
      useActionState: ms,
      useOptimistic: function (t) {
        var l = Zt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e), (l = gc.bind(null, k, !0, e)), (e.dispatch = l), [t, l]
        );
      },
      useMemoCache: oc,
      useCacheRefresh: function () {
        return (Zt().memoizedState = M0.bind(null, k));
      },
    },
    Ys = {
      readContext: qt,
      use: sn,
      useCallback: Os,
      useContext: qt,
      useEffect: _s,
      useImperativeHandle: As,
      useInsertionEffect: Ts,
      useLayoutEffect: zs,
      useMemo: Ms,
      useReducer: rn,
      useRef: xs,
      useState: function () {
        return rn(Bl);
      },
      useDebugValue: hc,
      useDeferredValue: function (t, l) {
        var e = St();
        return Ds(e, ut.memoizedState, t, l);
      },
      useTransition: function () {
        var t = rn(Bl)[0],
          l = St().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), l];
      },
      useSyncExternalStore: us,
      useId: Us,
      useHostTransitionStatus: vc,
      useFormState: vs,
      useActionState: vs,
      useOptimistic: function (t, l) {
        var e = St();
        return ss(e, ut, t, l);
      },
      useMemoCache: oc,
      useCacheRefresh: ws,
    },
    R0 = {
      readContext: qt,
      use: sn,
      useCallback: Os,
      useContext: qt,
      useEffect: _s,
      useImperativeHandle: As,
      useInsertionEffect: Ts,
      useLayoutEffect: zs,
      useMemo: Ms,
      useReducer: rc,
      useRef: xs,
      useState: function () {
        return rc(Bl);
      },
      useDebugValue: hc,
      useDeferredValue: function (t, l) {
        var e = St();
        return ut === null ? yc(e, t, l) : Ds(e, ut.memoizedState, t, l);
      },
      useTransition: function () {
        var t = rc(Bl)[0],
          l = St().memoizedState;
        return [typeof t == "boolean" ? t : eu(t), l];
      },
      useSyncExternalStore: us,
      useId: Us,
      useHostTransitionStatus: vc,
      useFormState: bs,
      useActionState: bs,
      useOptimistic: function (t, l) {
        var e = St();
        return ut !== null
          ? ss(e, ut, t, l)
          : ((e.baseState = t), [t, e.queue.dispatch]);
      },
      useMemoCache: oc,
      useCacheRefresh: ws,
    },
    pa = null,
    nu = 0;
  function mn(t) {
    var l = nu;
    return (nu += 1), pa === null && (pa = []), $o(pa, t, l);
  }
  function iu(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function vn(t, l) {
    throw l.$$typeof === L
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t
          )
        ));
  }
  function Gs(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Xs(t) {
    function l(y, h) {
      if (t) {
        var v = y.deletions;
        v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
      }
    }
    function e(y, h) {
      if (!t) return null;
      for (; h !== null; ) l(y, h), (h = h.sibling);
      return null;
    }
    function a(y) {
      for (var h = new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), (y = y.sibling);
      return h;
    }
    function u(y, h) {
      return (y = Ul(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, h, v) {
      return (
        (y.index = v),
        t
          ? ((v = y.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((y.flags |= 67108866), h) : v)
              : ((y.flags |= 67108866), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function i(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function f(y, h, v, E) {
      return h === null || h.tag !== 6
        ? ((h = Yi(v, y.mode, E)), (h.return = y), h)
        : ((h = u(h, v)), (h.return = y), h);
    }
    function d(y, h, v, E) {
      var C = v.type;
      return C === ht
        ? T(y, h, v.props.children, E, v.key)
        : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Jt &&
              Gs(C) === h.type))
        ? ((h = u(h, v.props)), iu(h, v), (h.return = y), h)
        : ((h = Iu(v.type, v.key, v.props, null, y.mode, E)),
          iu(h, v),
          (h.return = y),
          h);
    }
    function b(y, h, v, E) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = Gi(v, y.mode, E)), (h.return = y), h)
        : ((h = u(h, v.children || [])), (h.return = y), h);
    }
    function T(y, h, v, E, C) {
      return h === null || h.tag !== 7
        ? ((h = Ae(v, y.mode, E, C)), (h.return = y), h)
        : ((h = u(h, v)), (h.return = y), h);
    }
    function O(y, h, v) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = Yi("" + h, y.mode, v)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case K:
            return (
              (v = Iu(h.type, h.key, h.props, null, y.mode, v)),
              iu(v, h),
              (v.return = y),
              v
            );
          case st:
            return (h = Gi(h, y.mode, v)), (h.return = y), h;
          case Jt:
            var E = h._init;
            return (h = E(h._payload)), O(y, h, v);
        }
        if (Ht(h) || wt(h))
          return (h = Ae(h, y.mode, v, null)), (h.return = y), h;
        if (typeof h.then == "function") return O(y, mn(h), v);
        if (h.$$typeof === Ut) return O(y, en(y, h), v);
        vn(y, h);
      }
      return null;
    }
    function S(y, h, v, E) {
      var C = h !== null ? h.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return C !== null ? null : f(y, h, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case K:
            return v.key === C ? d(y, h, v, E) : null;
          case st:
            return v.key === C ? b(y, h, v, E) : null;
          case Jt:
            return (C = v._init), (v = C(v._payload)), S(y, h, v, E);
        }
        if (Ht(v) || wt(v)) return C !== null ? null : T(y, h, v, E, null);
        if (typeof v.then == "function") return S(y, h, mn(v), E);
        if (v.$$typeof === Ut) return S(y, h, en(y, v), E);
        vn(y, v);
      }
      return null;
    }
    function _(y, h, v, E, C) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (y = y.get(v) || null), f(h, y, "" + E, C);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case K:
            return (
              (y = y.get(E.key === null ? v : E.key) || null), d(h, y, E, C)
            );
          case st:
            return (
              (y = y.get(E.key === null ? v : E.key) || null), b(h, y, E, C)
            );
          case Jt:
            var J = E._init;
            return (E = J(E._payload)), _(y, h, v, E, C);
        }
        if (Ht(E) || wt(E)) return (y = y.get(v) || null), T(h, y, E, C, null);
        if (typeof E.then == "function") return _(y, h, v, mn(E), C);
        if (E.$$typeof === Ut) return _(y, h, v, en(h, E), C);
        vn(h, E);
      }
      return null;
    }
    function Q(y, h, v, E) {
      for (
        var C = null, J = null, q = h, G = (h = 0), Ot = null;
        q !== null && G < v.length;
        G++
      ) {
        q.index > G ? ((Ot = q), (q = null)) : (Ot = q.sibling);
        var tt = S(y, q, v[G], E);
        if (tt === null) {
          q === null && (q = Ot);
          break;
        }
        t && q && tt.alternate === null && l(y, q),
          (h = n(tt, h, G)),
          J === null ? (C = tt) : (J.sibling = tt),
          (J = tt),
          (q = Ot);
      }
      if (G === v.length) return e(y, q), lt && Me(y, G), C;
      if (q === null) {
        for (; G < v.length; G++)
          (q = O(y, v[G], E)),
            q !== null &&
              ((h = n(q, h, G)),
              J === null ? (C = q) : (J.sibling = q),
              (J = q));
        return lt && Me(y, G), C;
      }
      for (q = a(q); G < v.length; G++)
        (Ot = _(q, y, G, v[G], E)),
          Ot !== null &&
            (t &&
              Ot.alternate !== null &&
              q.delete(Ot.key === null ? G : Ot.key),
            (h = n(Ot, h, G)),
            J === null ? (C = Ot) : (J.sibling = Ot),
            (J = Ot));
      return (
        t &&
          q.forEach(function (me) {
            return l(y, me);
          }),
        lt && Me(y, G),
        C
      );
    }
    function Y(y, h, v, E) {
      if (v == null) throw Error(s(151));
      for (
        var C = null, J = null, q = h, G = (h = 0), Ot = null, tt = v.next();
        q !== null && !tt.done;
        G++, tt = v.next()
      ) {
        q.index > G ? ((Ot = q), (q = null)) : (Ot = q.sibling);
        var me = S(y, q, tt.value, E);
        if (me === null) {
          q === null && (q = Ot);
          break;
        }
        t && q && me.alternate === null && l(y, q),
          (h = n(me, h, G)),
          J === null ? (C = me) : (J.sibling = me),
          (J = me),
          (q = Ot);
      }
      if (tt.done) return e(y, q), lt && Me(y, G), C;
      if (q === null) {
        for (; !tt.done; G++, tt = v.next())
          (tt = O(y, tt.value, E)),
            tt !== null &&
              ((h = n(tt, h, G)),
              J === null ? (C = tt) : (J.sibling = tt),
              (J = tt));
        return lt && Me(y, G), C;
      }
      for (q = a(q); !tt.done; G++, tt = v.next())
        (tt = _(q, y, G, tt.value, E)),
          tt !== null &&
            (t &&
              tt.alternate !== null &&
              q.delete(tt.key === null ? G : tt.key),
            (h = n(tt, h, G)),
            J === null ? (C = tt) : (J.sibling = tt),
            (J = tt));
      return (
        t &&
          q.forEach(function (jh) {
            return l(y, jh);
          }),
        lt && Me(y, G),
        C
      );
    }
    function it(y, h, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === ht &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case K:
            t: {
              for (var C = v.key; h !== null; ) {
                if (h.key === C) {
                  if (((C = v.type), C === ht)) {
                    if (h.tag === 7) {
                      e(y, h.sibling),
                        (E = u(h, v.props.children)),
                        (E.return = y),
                        (y = E);
                      break t;
                    }
                  } else if (
                    h.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Jt &&
                      Gs(C) === h.type)
                  ) {
                    e(y, h.sibling),
                      (E = u(h, v.props)),
                      iu(E, v),
                      (E.return = y),
                      (y = E);
                    break t;
                  }
                  e(y, h);
                  break;
                } else l(y, h);
                h = h.sibling;
              }
              v.type === ht
                ? ((E = Ae(v.props.children, y.mode, E, v.key)),
                  (E.return = y),
                  (y = E))
                : ((E = Iu(v.type, v.key, v.props, null, y.mode, E)),
                  iu(E, v),
                  (E.return = y),
                  (y = E));
            }
            return i(y);
          case st:
            t: {
              for (C = v.key; h !== null; ) {
                if (h.key === C)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    e(y, h.sibling),
                      (E = u(h, v.children || [])),
                      (E.return = y),
                      (y = E);
                    break t;
                  } else {
                    e(y, h);
                    break;
                  }
                else l(y, h);
                h = h.sibling;
              }
              (E = Gi(v, y.mode, E)), (E.return = y), (y = E);
            }
            return i(y);
          case Jt:
            return (C = v._init), (v = C(v._payload)), it(y, h, v, E);
        }
        if (Ht(v)) return Q(y, h, v, E);
        if (wt(v)) {
          if (((C = wt(v)), typeof C != "function")) throw Error(s(150));
          return (v = C.call(v)), Y(y, h, v, E);
        }
        if (typeof v.then == "function") return it(y, h, mn(v), E);
        if (v.$$typeof === Ut) return it(y, h, en(y, v), E);
        vn(y, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          h !== null && h.tag === 6
            ? (e(y, h.sibling), (E = u(h, v)), (E.return = y), (y = E))
            : (e(y, h), (E = Yi(v, y.mode, E)), (E.return = y), (y = E)),
          i(y))
        : e(y, h);
    }
    return function (y, h, v, E) {
      try {
        nu = 0;
        var C = it(y, h, v, E);
        return (pa = null), C;
      } catch (q) {
        if (q === $a || q === un) throw q;
        var J = Pt(29, q, null, y.mode);
        return (J.lanes = E), (J.return = y), J;
      } finally {
      }
    };
  }
  var ha = Xs(!0),
    Qs = Xs(!1),
    dl = D(null),
    zl = null;
  function le(t) {
    var l = t.alternate;
    U(Tt, Tt.current & 1),
      U(dl, t),
      zl === null &&
        (l === null || oa.current !== null || l.memoizedState !== null) &&
        (zl = t);
  }
  function Zs(t) {
    if (t.tag === 22) {
      if ((U(Tt, Tt.current), U(dl, t), zl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (zl = t);
      }
    } else ee();
  }
  function ee() {
    U(Tt, Tt.current), U(dl, dl.current);
  }
  function Yl(t) {
    H(dl), zl === t && (zl = null), H(Tt);
  }
  var Tt = D(0);
  function gn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || of(e))
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  function bc(t, l, e, a) {
    (l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : N({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var xc = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = al(),
        u = Il(a);
      (u.payload = l),
        e != null && (u.callback = e),
        (l = Pl(t, u, a)),
        l !== null && (ul(l, t, a), Ia(l, t, a));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = al(),
        u = Il(a);
      (u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = Pl(t, u, a)),
        l !== null && (ul(l, t, a), Ia(l, t, a));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = al(),
        a = Il(e);
      (a.tag = 2),
        l != null && (a.callback = l),
        (l = Pl(t, a, e)),
        l !== null && (ul(l, t, e), Ia(l, t, e));
    },
  };
  function Ls(t, l, e, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, i)
        : l.prototype && l.prototype.isPureReactComponent
        ? !Qa(e, a) || !Qa(u, n)
        : !0
    );
  }
  function Vs(t, l, e, a) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && xc.enqueueReplaceState(l, l.state, null);
  }
  function He(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = N({}, e));
      for (var u in t) e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  var bn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Ks(t) {
    bn(t);
  }
  function ks(t) {
    console.error(t);
  }
  function Js(t) {
    bn(t);
  }
  function xn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ws(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Sc(t, l, e) {
    return (
      (e = Il(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        xn(t, l);
      }),
      e
    );
  }
  function $s(t) {
    return (t = Il(t)), (t.tag = 3), t;
  }
  function Fs(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          Ws(l, e, a);
        });
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Ws(l, e, a),
          typeof u != "function" &&
            (fe === null ? (fe = new Set([this])) : fe.add(this));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function j0(t, l, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && ka(l, e, u, !0),
        (e = dl.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              zl === null ? Vc() : e.alternate === null && mt === 0 && (mt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === $i
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  kc(t, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === $i
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  kc(t, a, u)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return kc(t, a, u), Vc(), !1;
    }
    if (lt)
      return (
        (l = dl.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== Zi && ((t = Error(s(422), { cause: a })), Ka(fl(t, e))))
          : (a !== Zi && ((l = Error(s(423), { cause: a })), Ka(fl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = fl(a, e)),
            (u = Sc(t.stateNode, a, u)),
            Pi(t, u),
            mt !== 4 && (mt = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (
      ((n = fl(n, e)),
      pu === null ? (pu = [n]) : pu.push(n),
      mt !== 4 && (mt = 2),
      l === null)
    )
      return !0;
    (a = fl(a, e)), (e = l);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = Sc(e.stateNode, a, t)),
            Pi(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (fe === null || !fe.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = $s(u)),
              Fs(u, t, e, a),
              Pi(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Is = Error(s(461)),
    Et = !1;
  function Dt(t, l, e, a) {
    l.child = t === null ? Qs(l, null, e, a) : ha(l, t.child, e, a);
  }
  function Ps(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      Ne(l),
      (a = uc(t, l, e, i, n, u)),
      (f = nc()),
      t !== null && !Et
        ? (ic(t, l, u), Gl(t, l, u))
        : (lt && f && Xi(l), (l.flags |= 1), Dt(t, l, a, u), l.child)
    );
  }
  function tr(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Bi(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), lr(t, l, n, a, u))
        : ((t = Iu(e.type, null, a, l, l.mode, u)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !Dc(t, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Qa), e(i, a) && t.ref === l.ref)
      )
        return Gl(t, l, u);
    }
    return (
      (l.flags |= 1),
      (t = Ul(n, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function lr(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Qa(n, a) && t.ref === l.ref)
        if (((Et = !1), (l.pendingProps = a = n), Dc(t, u)))
          (t.flags & 131072) !== 0 && (Et = !0);
        else return (l.lanes = t.lanes), Gl(t, l, u);
    }
    return _c(t, l, e, a, u);
  }
  function er(t, l, e) {
    var a = l.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (u = l.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          l.childLanes = n & ~a;
        } else (l.childLanes = 0), (l.child = null);
        return ar(t, l, a, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && an(l, n !== null ? n.cachePool : null),
          n !== null ? ls(l, n) : lc(),
          Zs(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          ar(t, l, n !== null ? n.baseLanes | e : e, e)
        );
    } else
      n !== null
        ? (an(l, n.cachePool), ls(l, n), ee(), (l.memoizedState = null))
        : (t !== null && an(l, null), lc(), ee());
    return Dt(t, l, u, e), l.child;
  }
  function ar(t, l, e, a) {
    var u = Wi();
    return (
      (u = u === null ? null : { parent: _t._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && an(l, null),
      lc(),
      Zs(l),
      t !== null && ka(t, l, a, !0),
      null
    );
  }
  function Sn(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function _c(t, l, e, a, u) {
    return (
      Ne(l),
      (e = uc(t, l, e, a, void 0, u)),
      (a = nc()),
      t !== null && !Et
        ? (ic(t, l, u), Gl(t, l, u))
        : (lt && a && Xi(l), (l.flags |= 1), Dt(t, l, e, u), l.child)
    );
  }
  function ur(t, l, e, a, u, n) {
    return (
      Ne(l),
      (l.updateQueue = null),
      (e = as(l, a, e, u)),
      es(t),
      (a = nc()),
      t !== null && !Et
        ? (ic(t, l, n), Gl(t, l, n))
        : (lt && a && Xi(l), (l.flags |= 1), Dt(t, l, e, n), l.child)
    );
  }
  function nr(t, l, e, a, u) {
    if ((Ne(l), l.stateNode === null)) {
      var n = ua,
        i = e.contextType;
      typeof i == "object" && i !== null && (n = qt(i)),
        (n = new e(a, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = xc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Fi(l),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? qt(i) : ua),
        (n.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (bc(l, e, i, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && xc.enqueueReplaceState(n, n.state, null),
          tu(l, a, n, u),
          Pa(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps,
        d = He(e, f);
      n.props = d;
      var b = n.context,
        T = e.contextType;
      (i = ua), typeof T == "object" && T !== null && (i = qt(T));
      var O = e.getDerivedStateFromProps;
      (T =
        typeof O == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = l.pendingProps !== f),
        T ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || b !== i) && Vs(l, n, a, i)),
        (Fl = !1);
      var S = l.memoizedState;
      (n.state = S),
        tu(l, a, n, u),
        Pa(),
        (b = l.memoizedState),
        f || S !== b || Fl
          ? (typeof O == "function" && (bc(l, e, O, a), (b = l.memoizedState)),
            (d = Fl || Ls(l, e, d, a, S, b, i))
              ? (T ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = b)),
            (n.props = a),
            (n.state = b),
            (n.context = i),
            (a = d))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1));
    } else {
      (n = l.stateNode),
        Ii(t, l),
        (i = l.memoizedProps),
        (T = He(e, i)),
        (n.props = T),
        (O = l.pendingProps),
        (S = n.context),
        (b = e.contextType),
        (d = ua),
        typeof b == "object" && b !== null && (d = qt(b)),
        (f = e.getDerivedStateFromProps),
        (b =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== O || S !== d) && Vs(l, n, a, d)),
        (Fl = !1),
        (S = l.memoizedState),
        (n.state = S),
        tu(l, a, n, u),
        Pa();
      var _ = l.memoizedState;
      i !== O ||
      S !== _ ||
      Fl ||
      (t !== null && t.dependencies !== null && ln(t.dependencies))
        ? (typeof f == "function" && (bc(l, e, f, a), (_ = l.memoizedState)),
          (T =
            Fl ||
            Ls(l, e, T, a, S, _, d) ||
            (t !== null && t.dependencies !== null && ln(t.dependencies)))
            ? (b ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, _, d),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, _, d)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = _)),
          (n.props = a),
          (n.state = _),
          (n.context = d),
          (a = T))
        : (typeof n.componentDidUpdate != "function" ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      Sn(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = ha(l, t.child, null, u)),
              (l.child = ha(l, null, e, u)))
            : Dt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Gl(t, l, u)),
      t
    );
  }
  function ir(t, l, e, a) {
    return Va(), (l.flags |= 256), Dt(t, l, e, a), l.child;
  }
  var Tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function zc(t) {
    return { baseLanes: t, cachePool: ko() };
  }
  function Ec(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= pl), t;
  }
  function cr(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Tt.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (lt) {
        if ((u ? le(l) : ee(), lt)) {
          var f = yt,
            d;
          if ((d = f)) {
            t: {
              for (d = f, f = Tl; d.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (((d = bl(d.nextSibling)), d === null)) {
                  f = null;
                  break t;
                }
              }
              f = d;
            }
            f !== null
              ? ((l.memoizedState = {
                  dehydrated: f,
                  treeContext: Oe !== null ? { id: wl, overflow: Hl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (d = Pt(18, null, null, 0)),
                (d.stateNode = f),
                (d.return = l),
                (l.child = d),
                (Yt = l),
                (yt = null),
                (d = !0))
              : (d = !1);
          }
          d || Re(l);
        }
        if (
          ((f = l.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return of(f) ? (l.lanes = 32) : (l.lanes = 536870912), null;
        Yl(l);
      }
      return (
        (f = a.children),
        (a = a.fallback),
        u
          ? (ee(),
            (u = l.mode),
            (f = _n({ mode: "hidden", children: f }, u)),
            (a = Ae(a, u, e, null)),
            (f.return = l),
            (a.return = l),
            (f.sibling = a),
            (l.child = f),
            (u = l.child),
            (u.memoizedState = zc(e)),
            (u.childLanes = Ec(t, i, e)),
            (l.memoizedState = Tc),
            a)
          : (le(l), Ac(l, f))
      );
    }
    if (
      ((d = t.memoizedState), d !== null && ((f = d.dehydrated), f !== null))
    ) {
      if (n)
        l.flags & 256
          ? (le(l), (l.flags &= -257), (l = Oc(t, l, e)))
          : l.memoizedState !== null
          ? (ee(), (l.child = t.child), (l.flags |= 128), (l = null))
          : (ee(),
            (u = a.fallback),
            (f = l.mode),
            (a = _n({ mode: "visible", children: a.children }, f)),
            (u = Ae(u, f, e, null)),
            (u.flags |= 2),
            (a.return = l),
            (u.return = l),
            (a.sibling = u),
            (l.child = a),
            ha(l, t.child, null, e),
            (a = l.child),
            (a.memoizedState = zc(e)),
            (a.childLanes = Ec(t, i, e)),
            (l.memoizedState = Tc),
            (l = u));
      else if ((le(l), of(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var b = i.dgst;
        (i = b),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = i),
          Ka({ value: a, source: null, stack: null }),
          (l = Oc(t, l, e));
      } else if (
        (Et || ka(t, l, e, !1), (i = (e & t.childLanes) !== 0), Et || i)
      ) {
        if (
          ((i = ot),
          i !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : oi(a)),
            (a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== d.retryLane))
        )
          throw ((d.retryLane = a), aa(t, a), ul(i, t, a), Is);
        f.data === "$?" || Vc(), (l = Oc(t, l, e));
      } else
        f.data === "$?"
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = d.treeContext),
            (yt = bl(f.nextSibling)),
            (Yt = l),
            (lt = !0),
            (De = null),
            (Tl = !1),
            t !== null &&
              ((sl[rl++] = wl),
              (sl[rl++] = Hl),
              (sl[rl++] = Oe),
              (wl = t.id),
              (Hl = t.overflow),
              (Oe = l)),
            (l = Ac(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return u
      ? (ee(),
        (u = a.fallback),
        (f = l.mode),
        (d = t.child),
        (b = d.sibling),
        (a = Ul(d, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 65011712),
        b !== null ? (u = Ul(b, u)) : ((u = Ae(u, f, e, null)), (u.flags |= 2)),
        (u.return = l),
        (a.return = l),
        (a.sibling = u),
        (l.child = a),
        (a = u),
        (u = l.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = zc(e))
          : ((d = f.cachePool),
            d !== null
              ? ((b = _t._currentValue),
                (d = d.parent !== b ? { parent: b, pool: b } : d))
              : (d = ko()),
            (f = { baseLanes: f.baseLanes | e, cachePool: d })),
        (u.memoizedState = f),
        (u.childLanes = Ec(t, i, e)),
        (l.memoizedState = Tc),
        a)
      : (le(l),
        (e = t.child),
        (t = e.sibling),
        (e = Ul(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function Ac(t, l) {
    return (
      (l = _n({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function _n(t, l) {
    return (
      (t = Pt(22, t, null, l)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Oc(t, l, e) {
    return (
      ha(l, t.child, null, e),
      (t = Ac(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function fr(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Vi(t.return, l, e);
  }
  function Mc(t, l, e, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u));
  }
  function or(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Dt(t, l, a.children, e), (a = Tt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && fr(t, e, l);
          else if (t.tag === 19) fr(t, e, l);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((U(Tt, a), u)) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          (t = e.alternate),
            t !== null && gn(t) === null && (u = e),
            (e = e.sibling);
        (e = u),
          e === null
            ? ((u = l.child), (l.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          Mc(l, !1, u, e, n);
        break;
      case "backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && gn(t) === null)) {
            l.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = e), (e = u), (u = t);
        }
        Mc(l, !0, e, null, n);
        break;
      case "together":
        Mc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Gl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (ce |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((ka(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Ul(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = Ul(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function Dc(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ln(t)));
  }
  function N0(t, l, e) {
    switch (l.tag) {
      case 3:
        rt(l, l.stateNode.containerInfo),
          $l(l, _t, t.memoizedState.cache),
          Va();
        break;
      case 27:
      case 5:
        ui(l);
        break;
      case 4:
        rt(l, l.stateNode.containerInfo);
        break;
      case 10:
        $l(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (le(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
            ? cr(t, l, e)
            : (le(l), (t = Gl(t, l, e)), t !== null ? t.sibling : null);
        le(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (ka(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return or(t, l, e);
          l.flags |= 128;
        }
        if (
          ((u = l.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          U(Tt, Tt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), er(t, l, e);
      case 24:
        $l(l, _t, t.memoizedState.cache);
    }
    return Gl(t, l, e);
  }
  function sr(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) Et = !0;
      else {
        if (!Dc(t, e) && (l.flags & 128) === 0) return (Et = !1), N0(t, l, e);
        Et = (t.flags & 131072) !== 0;
      }
    else (Et = !1), lt && (l.flags & 1048576) !== 0 && Go(l, tn, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var a = l.elementType,
            u = a._init;
          if (((a = u(a._payload)), (l.type = a), typeof a == "function"))
            Bi(a)
              ? ((t = He(a, t)), (l.tag = 1), (l = nr(null, l, a, t, e)))
              : ((l.tag = 0), (l = _c(null, l, a, t, e)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === ml)) {
                (l.tag = 11), (l = Ps(null, l, a, t, e));
                break t;
              } else if (u === kt) {
                (l.tag = 14), (l = tr(null, l, a, t, e));
                break t;
              }
            }
            throw ((l = xe(a) || a), Error(s(306, l, "")));
          }
        }
        return l;
      case 0:
        return _c(t, l, l.type, l.pendingProps, e);
      case 1:
        return (a = l.type), (u = He(a, l.pendingProps)), nr(t, l, a, u, e);
      case 3:
        t: {
          if ((rt(l, l.stateNode.containerInfo), t === null))
            throw Error(s(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          (u = n.element), Ii(t, l), tu(l, a, null, e);
          var i = l.memoizedState;
          if (
            ((a = i.cache),
            $l(l, _t, a),
            a !== n.cache && Ki(l, [_t], e, !0),
            Pa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = ir(t, l, a, e);
              break t;
            } else if (a !== u) {
              (u = fl(Error(s(424)), l)), Ka(u), (l = ir(t, l, a, e));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                yt = bl(t.firstChild),
                  Yt = l,
                  lt = !0,
                  De = null,
                  Tl = !0,
                  e = Qs(l, null, a, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Va(), a === u)) {
              l = Gl(t, l, e);
              break t;
            }
            Dt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          Sn(t, l),
          t === null
            ? (e = hd(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : lt ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = Cn(Z.current).createElement(e)),
                (a[Ct] = l),
                (a[Xt] = t),
                jt(a, e, t),
                zt(a),
                (l.stateNode = a))
            : (l.memoizedState = hd(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ui(l),
          t === null &&
            lt &&
            ((a = l.stateNode = rd(l.type, l.pendingProps, Z.current)),
            (Yt = l),
            (Tl = !0),
            (u = yt),
            re(l.type) ? ((sf = u), (yt = bl(a.firstChild))) : (yt = u)),
          Dt(t, l, l.pendingProps.children, e),
          Sn(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            lt &&
            ((u = a = yt) &&
              ((a = ih(a, l.type, l.pendingProps, Tl)),
              a !== null
                ? ((l.stateNode = a),
                  (Yt = l),
                  (yt = bl(a.firstChild)),
                  (Tl = !1),
                  (u = !0))
                : (u = !1)),
            u || Re(l)),
          ui(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          nf(u, n) ? (a = null) : i !== null && nf(u, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((u = uc(t, l, z0, null, null, e)), (_u._currentValue = u)),
          Sn(t, l),
          Dt(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            lt &&
            ((t = e = yt) &&
              ((e = ch(e, l.pendingProps, Tl)),
              e !== null
                ? ((l.stateNode = e), (Yt = l), (yt = null), (t = !0))
                : (t = !1)),
            t || Re(l)),
          null
        );
      case 13:
        return cr(t, l, e);
      case 4:
        return (
          rt(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = ha(l, null, a, e)) : Dt(t, l, a, e),
          l.child
        );
      case 11:
        return Ps(t, l, l.type, l.pendingProps, e);
      case 7:
        return Dt(t, l, l.pendingProps, e), l.child;
      case 8:
        return Dt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Dt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (a = l.pendingProps),
          $l(l, l.type, a.value),
          Dt(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          Ne(l),
          (u = qt(u)),
          (a = a(u)),
          (l.flags |= 1),
          Dt(t, l, a, e),
          l.child
        );
      case 14:
        return tr(t, l, l.type, l.pendingProps, e);
      case 15:
        return lr(t, l, l.type, l.pendingProps, e);
      case 19:
        return or(t, l, e);
      case 31:
        return (
          (a = l.pendingProps),
          (e = l.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((e = _n(a, e)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e))
            : ((e = Ul(t.child, a)),
              (e.ref = l.ref),
              (l.child = e),
              (e.return = l),
              (l = e)),
          l
        );
      case 22:
        return er(t, l, e);
      case 24:
        return (
          Ne(l),
          (a = qt(_t)),
          t === null
            ? ((u = Wi()),
              u === null &&
                ((u = ot),
                (n = ki()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              Fi(l),
              $l(l, _t, u))
            : ((t.lanes & e) !== 0 && (Ii(t, l), tu(l, null, null, e), Pa()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = u),
                  $l(l, _t, a))
                : ((a = n.cache),
                  $l(l, _t, a),
                  a !== u.cache && Ki(l, [_t], e, !0))),
          Dt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Xl(t) {
    t.flags |= 4;
  }
  function rr(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !bd(l))) {
      if (
        ((l = dl.current),
        l !== null &&
          ((F & 4194048) === F
            ? zl !== null
            : ((F & 62914560) !== F && (F & 536870912) === 0) || l !== zl))
      )
        throw ((Fa = $i), Jo);
      t.flags |= 8192;
    }
  }
  function Tn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? Qf() : 536870912), (t.lanes |= l), (ga |= l));
  }
  function cu(t, l) {
    if (!lt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), (l = l.sibling);
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function pt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = e), l;
  }
  function U0(t, l, e) {
    var a = l.pendingProps;
    switch ((Qi(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pt(l), null;
      case 1:
        return pt(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          ql(_t),
          Kl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (La(l)
              ? Xl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Zo())),
          pt(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (Xl(l),
              e !== null ? (pt(l), rr(l, e)) : (pt(l), (l.flags &= -16777217)))
            : e
            ? e !== t.memoizedState
              ? (Xl(l), pt(l), rr(l, e))
              : (pt(l), (l.flags &= -16777217))
            : (t.memoizedProps !== a && Xl(l), pt(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Uu(l), (e = Z.current);
        var u = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return pt(l), null;
          }
          (t = B.current),
            La(l) ? Xo(l) : ((t = rd(u, a, e)), (l.stateNode = t), Xl(l));
        }
        return pt(l), null;
      case 5:
        if ((Uu(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166));
            return pt(l), null;
          }
          if (((t = B.current), La(l))) Xo(l);
          else {
            switch (((u = Cn(Z.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e);
                }
            }
            (t[Ct] = l), (t[Xt] = a);
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === l) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            l.stateNode = t;
            t: switch ((jt(t, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Xl(l);
          }
        }
        return pt(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Xl(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(s(166));
          if (((t = Z.current), La(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (u = Yt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Ct] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ud(t.nodeValue, e)
              )),
              t || Re(l);
          } else (t = Cn(t).createTextNode(a)), (t[Ct] = l), (l.stateNode = t);
        }
        return pt(l), null;
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = La(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = l.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[Ct] = l;
            } else
              Va(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            pt(l), (u = !1);
          } else
            (u = Zo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return l.flags & 256 ? (Yl(l), l) : (Yl(l), null);
        }
        if ((Yl(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
        if (
          ((e = a !== null), (t = t !== null && t.memoizedState !== null), e)
        ) {
          (a = l.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          e !== t && e && (l.child.flags |= 8192),
          Tn(l, l.updateQueue),
          pt(l),
          null
        );
      case 4:
        return Kl(), t === null && tf(l.stateNode.containerInfo), pt(l), null;
      case 10:
        return ql(l.type), pt(l), null;
      case 19:
        if ((H(Tt), (u = l.memoizedState), u === null)) return pt(l), null;
        if (((a = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) cu(u, !1);
          else {
            if (mt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = gn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      cu(u, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      Tn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    Yo(e, t), (e = e.sibling);
                  return U(Tt, (Tt.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              _l() > An &&
              ((l.flags |= 128), (a = !0), cu(u, !1), (l.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = gn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                Tn(l, t),
                cu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !lt)
              )
                return pt(l), null;
            } else
              2 * _l() - u.renderingStartTime > An &&
                e !== 536870912 &&
                ((l.flags |= 128), (a = !0), cu(u, !1), (l.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = _l()),
            (l.sibling = null),
            (t = Tt.current),
            U(Tt, a ? (t & 1) | 2 : t & 1),
            l)
          : (pt(l), null);
      case 22:
      case 23:
        return (
          Yl(l),
          ec(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (pt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : pt(l),
          (e = l.updateQueue),
          e !== null && Tn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && H(Ue),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          ql(_t),
          pt(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function w0(t, l) {
    switch ((Qi(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          ql(_t),
          Kl(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Uu(l), null;
      case 13:
        if (
          (Yl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(s(340));
          Va();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return H(Tt), null;
      case 4:
        return Kl(), null;
      case 10:
        return ql(l.type), null;
      case 22:
      case 23:
        return (
          Yl(l),
          ec(),
          t !== null && H(Ue),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return ql(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dr(t, l) {
    switch ((Qi(l), l.tag)) {
      case 3:
        ql(_t), Kl();
        break;
      case 26:
      case 27:
      case 5:
        Uu(l);
        break;
      case 4:
        Kl();
        break;
      case 13:
        Yl(l);
        break;
      case 19:
        H(Tt);
        break;
      case 10:
        ql(l.type);
        break;
      case 22:
      case 23:
        Yl(l), ec(), t !== null && H(Ue);
        break;
      case 24:
        ql(_t);
    }
  }
  function fu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            (a = n()), (i.destroy = a);
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      ft(l, l.return, f);
    }
  }
  function ae(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (u = l);
              var d = e,
                b = f;
              try {
                b();
              } catch (T) {
                ft(u, d, T);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (T) {
      ft(l, l.return, T);
    }
  }
  function pr(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        ts(l, e);
      } catch (a) {
        ft(t, t.return, a);
      }
    }
  }
  function hr(t, l, e) {
    (e.props = He(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      ft(t, l, a);
    }
  }
  function ou(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      ft(t, l, u);
    }
  }
  function El(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          ft(t, l, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          ft(t, l, u);
        }
      else e.current = null;
  }
  function yr(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      ft(t, t.return, u);
    }
  }
  function Rc(t, l, e) {
    try {
      var a = t.stateNode;
      lh(a, t.type, e, l), (a[Xt] = l);
    } catch (u) {
      ft(t, t.return, u);
    }
  }
  function mr(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && re(t.type)) ||
      t.tag === 4
    );
  }
  function jc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || mr(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && re(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Nc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Hn));
    else if (
      a !== 4 &&
      (a === 27 && re(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (Nc(t, l, e), t = t.sibling; t !== null; )
        Nc(t, l, e), (t = t.sibling);
  }
  function zn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && re(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (zn(t, l, e), t = t.sibling; t !== null; )
        zn(t, l, e), (t = t.sibling);
  }
  function vr(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      jt(l, a, e), (l[Ct] = t), (l[Xt] = e);
    } catch (n) {
      ft(t, t.return, n);
    }
  }
  var Ql = !1,
    bt = !1,
    Uc = !1,
    gr = typeof WeakSet == "function" ? WeakSet : Set,
    At = null;
  function H0(t, l) {
    if (((t = t.containerInfo), (af = Qn), (t = Do(t)), ji(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0,
              f = -1,
              d = -1,
              b = 0,
              T = 0,
              O = t,
              S = null;
            l: for (;;) {
              for (
                var _;
                O !== e || (u !== 0 && O.nodeType !== 3) || (f = i + u),
                  O !== n || (a !== 0 && O.nodeType !== 3) || (d = i + a),
                  O.nodeType === 3 && (i += O.nodeValue.length),
                  (_ = O.firstChild) !== null;

              )
                (S = O), (O = _);
              for (;;) {
                if (O === t) break l;
                if (
                  (S === e && ++b === u && (f = i),
                  S === n && ++T === a && (d = i),
                  (_ = O.nextSibling) !== null)
                )
                  break;
                (O = S), (S = O.parentNode);
              }
              O = _;
            }
            e = f === -1 || d === -1 ? null : { start: f, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      uf = { focusedElem: t, selectionRange: e }, Qn = !1, At = l;
      At !== null;

    )
      if (
        ((l = At), (t = l.child), (l.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = l), (At = t);
      else
        for (; At !== null; ) {
          switch (((l = At), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode);
                try {
                  var Q = He(e.type, u, e.elementType === e.type);
                  (t = a.getSnapshotBeforeUpdate(Q, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (Y) {
                  ft(e, e.return, Y);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  ff(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (At = t);
            break;
          }
          At = l.return;
        }
  }
  function br(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ue(t, e), a & 4 && fu(5, e);
        break;
      case 1:
        if ((ue(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              ft(e, e.return, i);
            }
          else {
            var u = He(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ft(e, e.return, i);
            }
          }
        a & 64 && pr(e), a & 512 && ou(e, e.return);
        break;
      case 3:
        if ((ue(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            ts(t, l);
          } catch (i) {
            ft(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && vr(e);
      case 26:
      case 5:
        ue(t, e), l === null && a & 4 && yr(e), a & 512 && ou(e, e.return);
        break;
      case 12:
        ue(t, e);
        break;
      case 13:
        ue(t, e),
          a & 4 && _r(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = L0.bind(null, e)), fh(t, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Ql), !a)) {
          (l = (l !== null && l.memoizedState !== null) || bt), (u = Ql);
          var n = bt;
          (Ql = a),
            (bt = l) && !n ? ne(t, e, (e.subtreeFlags & 8772) !== 0) : ue(t, e),
            (Ql = u),
            (bt = n);
        }
        break;
      case 30:
        break;
      default:
        ue(t, e);
    }
  }
  function xr(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), xr(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && di(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var dt = null,
    Lt = !1;
  function Zl(t, l, e) {
    for (e = e.child; e !== null; ) Sr(t, l, e), (e = e.sibling);
  }
  function Sr(t, l, e) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
      try {
        $t.onCommitFiberUnmount(Ra, e);
      } catch {}
    switch (e.tag) {
      case 26:
        bt || El(e, l),
          Zl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        bt || El(e, l);
        var a = dt,
          u = Lt;
        re(e.type) && ((dt = e.stateNode), (Lt = !1)),
          Zl(t, l, e),
          gu(e.stateNode),
          (dt = a),
          (Lt = u);
        break;
      case 5:
        bt || El(e, l);
      case 6:
        if (
          ((a = dt),
          (u = Lt),
          (dt = null),
          Zl(t, l, e),
          (dt = a),
          (Lt = u),
          dt !== null)
        )
          if (Lt)
            try {
              (dt.nodeType === 9
                ? dt.body
                : dt.nodeName === "HTML"
                ? dt.ownerDocument.body
                : dt
              ).removeChild(e.stateNode);
            } catch (n) {
              ft(e, l, n);
            }
          else
            try {
              dt.removeChild(e.stateNode);
            } catch (n) {
              ft(e, l, n);
            }
        break;
      case 18:
        dt !== null &&
          (Lt
            ? ((t = dt),
              od(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                e.stateNode
              ),
              Au(t))
            : od(dt, e.stateNode));
        break;
      case 4:
        (a = dt),
          (u = Lt),
          (dt = e.stateNode.containerInfo),
          (Lt = !0),
          Zl(t, l, e),
          (dt = a),
          (Lt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || ae(2, e, l), bt || ae(4, e, l), Zl(t, l, e);
        break;
      case 1:
        bt ||
          (El(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && hr(e, l, a)),
          Zl(t, l, e);
        break;
      case 21:
        Zl(t, l, e);
        break;
      case 22:
        (bt = (a = bt) || e.memoizedState !== null), Zl(t, l, e), (bt = a);
        break;
      default:
        Zl(t, l, e);
    }
  }
  function _r(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Au(t);
      } catch (e) {
        ft(l, l.return, e);
      }
  }
  function C0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new gr()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new gr()),
          l
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function wc(t, l) {
    var e = C0(t);
    l.forEach(function (a) {
      var u = V0.bind(null, t, a);
      e.has(a) || (e.add(a), a.then(u, u));
    });
  }
  function tl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          i = l,
          f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (re(f.type)) {
                (dt = f.stateNode), (Lt = !1);
                break t;
              }
              break;
            case 5:
              (dt = f.stateNode), (Lt = !1);
              break t;
            case 3:
            case 4:
              (dt = f.stateNode.containerInfo), (Lt = !0);
              break t;
          }
          f = f.return;
        }
        if (dt === null) throw Error(s(160));
        Sr(n, i, u),
          (dt = null),
          (Lt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) Tr(l, t), (l = l.sibling);
  }
  var gl = null;
  function Tr(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tl(l, t),
          ll(t),
          a & 4 && (ae(3, t, t.return), fu(3, t), ae(5, t, t.return));
        break;
      case 1:
        tl(l, t),
          ll(t),
          a & 512 && (bt || e === null || El(e, e.return)),
          a & 64 &&
            Ql &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var u = gl;
        if (
          (tl(l, t),
          ll(t),
          a & 512 && (bt || e === null || El(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (e = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  l: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ua] ||
                          n[Ct] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        jt(n, a, e),
                        (n[Ct] = t),
                        zt(n),
                        (a = n);
                      break t;
                    case "link":
                      var i = vd("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        jt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = vd("meta", "content", u).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      (n = u.createElement(a)),
                        jt(n, a, e),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (n[Ct] = t), zt(n), (a = n);
                }
                t.stateNode = a;
              } else gd(u, t.type, t.stateNode);
            else t.stateNode = md(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? gd(u, t.type, t.stateNode)
                  : md(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Rc(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        tl(l, t),
          ll(t),
          a & 512 && (bt || e === null || El(e, e.return)),
          e !== null && a & 4 && Rc(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (tl(l, t),
          ll(t),
          a & 512 && (bt || e === null || El(e, e.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            $e(u, "");
          } catch (_) {
            ft(t, t.return, _);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Rc(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (Uc = !0);
        break;
      case 6:
        if ((tl(l, t), ll(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (a = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = a;
          } catch (_) {
            ft(t, t.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Yn = null),
          (u = gl),
          (gl = qn(l.containerInfo)),
          tl(l, t),
          (gl = u),
          ll(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Au(l.containerInfo);
          } catch (_) {
            ft(t, t.return, _);
          }
        Uc && ((Uc = !1), zr(t));
        break;
      case 4:
        (a = gl),
          (gl = qn(t.stateNode.containerInfo)),
          tl(l, t),
          ll(t),
          (gl = a);
        break;
      case 12:
        tl(l, t), ll(t);
        break;
      case 13:
        tl(l, t),
          ll(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Gc = _l()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), wc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var d = e !== null && e.memoizedState !== null,
          b = Ql,
          T = bt;
        if (
          ((Ql = b || u),
          (bt = T || d),
          tl(l, t),
          (bt = T),
          (Ql = b),
          ll(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || d || Ql || bt || Ce(t)),
              e = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                d = e = l;
                try {
                  if (((n = d.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    f = d.stateNode;
                    var O = d.memoizedProps.style,
                      S =
                        O != null && O.hasOwnProperty("display")
                          ? O.display
                          : null;
                    f.style.display =
                      S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (_) {
                  ft(d, d.return, _);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (_) {
                  ft(d, d.return, _);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), (l = l.return);
            }
            e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), wc(t, e))));
        break;
      case 19:
        tl(l, t),
          ll(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), wc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tl(l, t), ll(t);
    }
  }
  function ll(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (mr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = jc(t);
            zn(t, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && ($e(i, ""), (e.flags &= -33));
            var f = jc(t);
            zn(t, f, i);
            break;
          case 3:
          case 4:
            var d = e.stateNode.containerInfo,
              b = jc(t);
            Nc(t, b, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (T) {
        ft(t, t.return, T);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function zr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        zr(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ue(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) br(t, l.alternate, l), (l = l.sibling);
  }
  function Ce(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ae(4, l, l.return), Ce(l);
          break;
        case 1:
          El(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && hr(l, l.return, e),
            Ce(l);
          break;
        case 27:
          gu(l.stateNode);
        case 26:
        case 5:
          El(l, l.return), Ce(l);
          break;
        case 22:
          l.memoizedState === null && Ce(l);
          break;
        case 30:
          Ce(l);
          break;
        default:
          Ce(l);
      }
      t = t.sibling;
    }
  }
  function ne(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ne(u, n, e), fu(4, n);
          break;
        case 1:
          if (
            (ne(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (b) {
              ft(a, a.return, b);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  Po(d[u], f);
            } catch (b) {
              ft(a, a.return, b);
            }
          }
          e && i & 64 && pr(n), ou(n, n.return);
          break;
        case 27:
          vr(n);
        case 26:
        case 5:
          ne(u, n, e), e && a === null && i & 4 && yr(n), ou(n, n.return);
          break;
        case 12:
          ne(u, n, e);
          break;
        case 13:
          ne(u, n, e), e && i & 4 && _r(u, n);
          break;
        case 22:
          n.memoizedState === null && ne(u, n, e), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          ne(u, n, e);
      }
      l = l.sibling;
    }
  }
  function Hc(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Ja(e));
  }
  function Cc(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Ja(t));
  }
  function Al(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Er(t, l, e, a), (l = l.sibling);
  }
  function Er(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(t, l, e, a), u & 2048 && fu(9, l);
        break;
      case 1:
        Al(t, l, e, a);
        break;
      case 3:
        Al(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Ja(t)));
        break;
      case 12:
        if (u & 2048) {
          Al(t, l, e, a), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (d) {
            ft(l, l.return, d);
          }
        } else Al(t, l, e, a);
        break;
      case 13:
        Al(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? Al(t, l, e, a)
              : su(t, l)
            : n._visibility & 2
            ? Al(t, l, e, a)
            : ((n._visibility |= 2),
              ya(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && Hc(i, l);
        break;
      case 24:
        Al(t, l, e, a), u & 2048 && Cc(l.alternate, l);
        break;
      default:
        Al(t, l, e, a);
    }
  }
  function ya(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        i = l,
        f = e,
        d = a,
        b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ya(n, i, f, d, u), fu(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null
            ? T._visibility & 2
              ? ya(n, i, f, d, u)
              : su(n, i)
            : ((T._visibility |= 2), ya(n, i, f, d, u)),
            u && b & 2048 && Hc(i.alternate, i);
          break;
        case 24:
          ya(n, i, f, d, u), u && b & 2048 && Cc(i.alternate, i);
          break;
        default:
          ya(n, i, f, d, u);
      }
      l = l.sibling;
    }
  }
  function su(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags;
        switch (a.tag) {
          case 22:
            su(e, a), u & 2048 && Hc(a.alternate, a);
            break;
          case 24:
            su(e, a), u & 2048 && Cc(a.alternate, a);
            break;
          default:
            su(e, a);
        }
        l = l.sibling;
      }
  }
  var ru = 8192;
  function ma(t) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; ) Ar(t), (t = t.sibling);
  }
  function Ar(t) {
    switch (t.tag) {
      case 26:
        ma(t),
          t.flags & ru &&
            t.memoizedState !== null &&
            Sh(gl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ma(t);
        break;
      case 3:
      case 4:
        var l = gl;
        (gl = qn(t.stateNode.containerInfo)), ma(t), (gl = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ru), (ru = 16777216), ma(t), (ru = l))
            : ma(t));
        break;
      default:
        ma(t);
    }
  }
  function Or(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function du(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (At = a), Dr(a, t);
        }
      Or(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Mr(t), (t = t.sibling);
  }
  function Mr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        du(t), t.flags & 2048 && ae(9, t, t.return);
        break;
      case 3:
        du(t);
        break;
      case 12:
        du(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), En(t))
          : du(t);
        break;
      default:
        du(t);
    }
  }
  function En(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          (At = a), Dr(a, t);
        }
      Or(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          ae(8, l, l.return), En(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), En(l));
          break;
        default:
          En(l);
      }
      t = t.sibling;
    }
  }
  function Dr(t, l) {
    for (; At !== null; ) {
      var e = At;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ae(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ja(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (At = a);
      else
        t: for (e = t; At !== null; ) {
          a = At;
          var u = a.sibling,
            n = a.return;
          if ((xr(a), a === e)) {
            At = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (At = u);
            break t;
          }
          At = n;
        }
    }
  }
  var q0 = {
      getCacheForType: function (t) {
        var l = qt(_t),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    B0 = typeof WeakMap == "function" ? WeakMap : Map,
    et = 0,
    ot = null,
    W = null,
    F = 0,
    at = 0,
    el = null,
    ie = !1,
    va = !1,
    qc = !1,
    Ll = 0,
    mt = 0,
    ce = 0,
    qe = 0,
    Bc = 0,
    pl = 0,
    ga = 0,
    pu = null,
    Vt = null,
    Yc = !1,
    Gc = 0,
    An = 1 / 0,
    On = null,
    fe = null,
    Rt = 0,
    oe = null,
    ba = null,
    xa = 0,
    Xc = 0,
    Qc = null,
    Rr = null,
    hu = 0,
    Zc = null;
  function al() {
    if ((et & 2) !== 0 && F !== 0) return F & -F;
    if (z.T !== null) {
      var t = ca;
      return t !== 0 ? t : $c();
    }
    return Vf();
  }
  function jr() {
    pl === 0 && (pl = (F & 536870912) === 0 || lt ? Xf() : 536870912);
    var t = dl.current;
    return t !== null && (t.flags |= 32), pl;
  }
  function ul(t, l, e) {
    ((t === ot && (at === 2 || at === 9)) || t.cancelPendingCommit !== null) &&
      (Sa(t, 0), se(t, F, pl, !1)),
      Na(t, e),
      ((et & 2) === 0 || t !== ot) &&
        (t === ot &&
          ((et & 2) === 0 && (qe |= e), mt === 4 && se(t, F, pl, !1)),
        Ol(t));
  }
  function Nr(t, l, e) {
    if ((et & 6) !== 0) throw Error(s(327));
    var a = (!e && (l & 124) === 0 && (l & t.expiredLanes) === 0) || ja(t, l),
      u = a ? X0(t, l) : Kc(t, l, !0),
      n = a;
    do {
      if (u === 0) {
        va && !a && se(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), n && !Y0(e))) {
          (u = Kc(t, l, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              u = pu;
              var d = f.current.memoizedState.isDehydrated;
              if ((d && (Sa(f, i).flags |= 256), (i = Kc(f, i, !1)), i !== 2)) {
                if (qc && !d) {
                  (f.errorRecoveryDisabledLanes |= n), (qe |= n), (u = 4);
                  break t;
                }
                (n = Vt),
                  (Vt = u),
                  n !== null && (Vt === null ? (Vt = n) : Vt.push.apply(Vt, n));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Sa(t, 0), se(t, l, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              se(a, l, pl, !ie);
              break t;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && ((u = Gc + 300 - _l()), 10 < u)) {
            if ((se(a, l, pl, !ie), qu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = cd(
              Ur.bind(null, a, e, Vt, On, Yc, l, pl, qe, ga, ie, n, 2, -0, 0),
              u
            );
            break t;
          }
          Ur(a, e, Vt, On, Yc, l, pl, qe, ga, ie, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ol(t);
  }
  function Ur(t, l, e, a, u, n, i, f, d, b, T, O, S, _) {
    if (
      ((t.timeoutHandle = -1),
      (O = l.subtreeFlags),
      (O & 8192 || (O & 16785408) === 16785408) &&
        ((Su = { stylesheets: null, count: 0, unsuspend: xh }),
        Ar(l),
        (O = _h()),
        O !== null))
    ) {
      (t.cancelPendingCommit = O(
        Gr.bind(null, t, l, n, e, a, u, i, f, d, T, 1, S, _)
      )),
        se(t, n, i, !b);
      return;
    }
    Gr(t, l, n, e, a, u, i, f, d);
  }
  function Y0(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!It(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        (e.return = l), (l = e);
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function se(t, l, e, a) {
    (l &= ~Bc),
      (l &= ~qe),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes);
    for (var u = l; 0 < u; ) {
      var n = 31 - Ft(u),
        i = 1 << n;
      (a[n] = -1), (u &= ~i);
    }
    e !== 0 && Zf(t, e, l);
  }
  function Mn() {
    return (et & 6) === 0 ? (yu(0), !1) : !0;
  }
  function Lc() {
    if (W !== null) {
      if (at === 0) var t = W.return;
      else (t = W), (Cl = je = null), cc(t), (pa = null), (nu = 0), (t = W);
      for (; t !== null; ) dr(t.alternate, t), (t = t.return);
      W = null;
    }
  }
  function Sa(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), ah(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Lc(),
      (ot = t),
      (W = e = Ul(t.current, null)),
      (F = l),
      (at = 0),
      (el = null),
      (ie = !1),
      (va = ja(t, l)),
      (qc = !1),
      (ga = pl = Bc = qe = ce = mt = 0),
      (Vt = pu = null),
      (Yc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - Ft(a),
          n = 1 << u;
        (l |= t[u]), (a &= ~n);
      }
    return (Ll = l), Wu(), e;
  }
  function wr(t, l) {
    (k = null),
      (z.H = yn),
      l === $a || l === un
        ? ((l = Fo()), (at = 3))
        : l === Jo
        ? ((l = Fo()), (at = 4))
        : (at =
            l === Is
              ? 8
              : l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ? 6
              : 1),
      (el = l),
      W === null && ((mt = 1), xn(t, fl(l, t.current)));
  }
  function Hr() {
    var t = z.H;
    return (z.H = yn), t === null ? yn : t;
  }
  function Cr() {
    var t = z.A;
    return (z.A = q0), t;
  }
  function Vc() {
    (mt = 4),
      ie || ((F & 4194048) !== F && dl.current !== null) || (va = !0),
      ((ce & 134217727) === 0 && (qe & 134217727) === 0) ||
        ot === null ||
        se(ot, F, pl, !1);
  }
  function Kc(t, l, e) {
    var a = et;
    et |= 2;
    var u = Hr(),
      n = Cr();
    (ot !== t || F !== l) && ((On = null), Sa(t, l)), (l = !1);
    var i = mt;
    t: do
      try {
        if (at !== 0 && W !== null) {
          var f = W,
            d = el;
          switch (at) {
            case 8:
              Lc(), (i = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              dl.current === null && (l = !0);
              var b = at;
              if (((at = 0), (el = null), _a(t, f, d, b), e && va)) {
                i = 0;
                break t;
              }
              break;
            default:
              (b = at), (at = 0), (el = null), _a(t, f, d, b);
          }
        }
        G0(), (i = mt);
        break;
      } catch (T) {
        wr(t, T);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Cl = je = null),
      (et = a),
      (z.H = u),
      (z.A = n),
      W === null && ((ot = null), (F = 0), Wu()),
      i
    );
  }
  function G0() {
    for (; W !== null; ) qr(W);
  }
  function X0(t, l) {
    var e = et;
    et |= 2;
    var a = Hr(),
      u = Cr();
    ot !== t || F !== l
      ? ((On = null), (An = _l() + 500), Sa(t, l))
      : (va = ja(t, l));
    t: do
      try {
        if (at !== 0 && W !== null) {
          l = W;
          var n = el;
          l: switch (at) {
            case 1:
              (at = 0), (el = null), _a(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Wo(n)) {
                (at = 0), (el = null), Br(l);
                break;
              }
              (l = function () {
                (at !== 2 && at !== 9) || ot !== t || (at = 7), Ol(t);
              }),
                n.then(l, l);
              break t;
            case 3:
              at = 7;
              break t;
            case 4:
              at = 5;
              break t;
            case 7:
              Wo(n)
                ? ((at = 0), (el = null), Br(l))
                : ((at = 0), (el = null), _a(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (W.tag) {
                case 26:
                  i = W.memoizedState;
                case 5:
                case 27:
                  var f = W;
                  if (!i || bd(i)) {
                    (at = 0), (el = null);
                    var d = f.sibling;
                    if (d !== null) W = d;
                    else {
                      var b = f.return;
                      b !== null ? ((W = b), Dn(b)) : (W = null);
                    }
                    break l;
                  }
              }
              (at = 0), (el = null), _a(t, l, n, 5);
              break;
            case 6:
              (at = 0), (el = null), _a(t, l, n, 6);
              break;
            case 8:
              Lc(), (mt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        Q0();
        break;
      } catch (T) {
        wr(t, T);
      }
    while (!0);
    return (
      (Cl = je = null),
      (z.H = a),
      (z.A = u),
      (et = e),
      W !== null ? 0 : ((ot = null), (F = 0), Wu(), mt)
    );
  }
  function Q0() {
    for (; W !== null && !sp(); ) qr(W);
  }
  function qr(t) {
    var l = sr(t.alternate, t, Ll);
    (t.memoizedProps = t.pendingProps), l === null ? Dn(t) : (W = l);
  }
  function Br(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = ur(e, l, l.pendingProps, l.type, void 0, F);
        break;
      case 11:
        l = ur(e, l, l.pendingProps, l.type.render, l.ref, F);
        break;
      case 5:
        cc(l);
      default:
        dr(e, l), (l = W = Yo(l, Ll)), (l = sr(e, l, Ll));
    }
    (t.memoizedProps = t.pendingProps), l === null ? Dn(t) : (W = l);
  }
  function _a(t, l, e, a) {
    (Cl = je = null), cc(l), (pa = null), (nu = 0);
    var u = l.return;
    try {
      if (j0(t, u, l, e, F)) {
        (mt = 1), xn(t, fl(e, t.current)), (W = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((W = u), n);
      (mt = 1), xn(t, fl(e, t.current)), (W = null);
      return;
    }
    l.flags & 32768
      ? (lt || a === 1
          ? (t = !0)
          : va || (F & 536870912) !== 0
          ? (t = !1)
          : ((ie = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = dl.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Yr(l, t))
      : Dn(l);
  }
  function Dn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Yr(l, ie);
        return;
      }
      t = l.return;
      var e = U0(l.alternate, l, Ll);
      if (e !== null) {
        W = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        W = l;
        return;
      }
      W = l = t;
    } while (l !== null);
    mt === 0 && (mt = 5);
  }
  function Yr(t, l) {
    do {
      var e = w0(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (W = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        W = t;
        return;
      }
      W = t = e;
    } while (t !== null);
    (mt = 6), (W = null);
  }
  function Gr(t, l, e, a, u, n, i, f, d) {
    t.cancelPendingCommit = null;
    do Rn();
    while (Rt !== 0);
    if ((et & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Ci),
        xp(t, e, n, i, f, d),
        t === ot && ((W = ot = null), (F = 0)),
        (ba = l),
        (oe = t),
        (xa = e),
        (Xc = n),
        (Qc = u),
        (Rr = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            K0(wu, function () {
              return Vr(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = z.T), (z.T = null), (u = w.p), (w.p = 2), (i = et), (et |= 4);
        try {
          H0(t, l, e);
        } finally {
          (et = i), (w.p = u), (z.T = a);
        }
      }
      (Rt = 1), Xr(), Qr(), Zr();
    }
  }
  function Xr() {
    if (Rt === 1) {
      Rt = 0;
      var t = oe,
        l = ba,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        (e = z.T), (z.T = null);
        var a = w.p;
        w.p = 2;
        var u = et;
        et |= 4;
        try {
          Tr(l, t);
          var n = uf,
            i = Do(t.containerInfo),
            f = n.focusedElem,
            d = n.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            Mo(f.ownerDocument.documentElement, f)
          ) {
            if (d !== null && ji(f)) {
              var b = d.start,
                T = d.end;
              if ((T === void 0 && (T = b), "selectionStart" in f))
                (f.selectionStart = b),
                  (f.selectionEnd = Math.min(T, f.value.length));
              else {
                var O = f.ownerDocument || document,
                  S = (O && O.defaultView) || window;
                if (S.getSelection) {
                  var _ = S.getSelection(),
                    Q = f.textContent.length,
                    Y = Math.min(d.start, Q),
                    it = d.end === void 0 ? Y : Math.min(d.end, Q);
                  !_.extend && Y > it && ((i = it), (it = Y), (Y = i));
                  var y = Oo(f, Y),
                    h = Oo(f, it);
                  if (
                    y &&
                    h &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== y.node ||
                      _.anchorOffset !== y.offset ||
                      _.focusNode !== h.node ||
                      _.focusOffset !== h.offset)
                  ) {
                    var v = O.createRange();
                    v.setStart(y.node, y.offset),
                      _.removeAllRanges(),
                      Y > it
                        ? (_.addRange(v), _.extend(h.node, h.offset))
                        : (v.setEnd(h.node, h.offset), _.addRange(v));
                  }
                }
              }
            }
            for (O = [], _ = f; (_ = _.parentNode); )
              _.nodeType === 1 &&
                O.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < O.length;
              f++
            ) {
              var E = O[f];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (Qn = !!af), (uf = af = null);
        } finally {
          (et = u), (w.p = a), (z.T = e);
        }
      }
      (t.current = l), (Rt = 2);
    }
  }
  function Qr() {
    if (Rt === 2) {
      Rt = 0;
      var t = oe,
        l = ba,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        (e = z.T), (z.T = null);
        var a = w.p;
        w.p = 2;
        var u = et;
        et |= 4;
        try {
          br(t, l.alternate, l);
        } finally {
          (et = u), (w.p = a), (z.T = e);
        }
      }
      Rt = 3;
    }
  }
  function Zr() {
    if (Rt === 4 || Rt === 3) {
      (Rt = 0), rp();
      var t = oe,
        l = ba,
        e = xa,
        a = Rr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Rt = 5)
        : ((Rt = 0), (ba = oe = null), Lr(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (fe = null),
        si(e),
        (l = l.stateNode),
        $t && typeof $t.onCommitFiberRoot == "function")
      )
        try {
          $t.onCommitFiberRoot(Ra, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (l = z.T), (u = w.p), (w.p = 2), (z.T = null);
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          (z.T = l), (w.p = u);
        }
      }
      (xa & 3) !== 0 && Rn(),
        Ol(t),
        (u = t.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0
          ? t === Zc
            ? hu++
            : ((hu = 0), (Zc = t))
          : (hu = 0),
        yu(0);
    }
  }
  function Lr(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Ja(l)));
  }
  function Rn(t) {
    return Xr(), Qr(), Zr(), Vr();
  }
  function Vr() {
    if (Rt !== 5) return !1;
    var t = oe,
      l = Xc;
    Xc = 0;
    var e = si(xa),
      a = z.T,
      u = w.p;
    try {
      (w.p = 32 > e ? 32 : e), (z.T = null), (e = Qc), (Qc = null);
      var n = oe,
        i = xa;
      if (((Rt = 0), (ba = oe = null), (xa = 0), (et & 6) !== 0))
        throw Error(s(331));
      var f = et;
      if (
        ((et |= 4),
        Mr(n.current),
        Er(n, n.current, i, e),
        (et = f),
        yu(0, !1),
        $t && typeof $t.onPostCommitFiberRoot == "function")
      )
        try {
          $t.onPostCommitFiberRoot(Ra, n);
        } catch {}
      return !0;
    } finally {
      (w.p = u), (z.T = a), Lr(t, l);
    }
  }
  function Kr(t, l, e) {
    (l = fl(e, l)),
      (l = Sc(t.stateNode, l, 2)),
      (t = Pl(t, l, 2)),
      t !== null && (Na(t, 2), Ol(t));
  }
  function ft(t, l, e) {
    if (t.tag === 3) Kr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Kr(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (fe === null || !fe.has(a)))
          ) {
            (t = fl(e, t)),
              (e = $s(2)),
              (a = Pl(l, e, 2)),
              a !== null && (Fs(e, a, l, t), Na(a, 2), Ol(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function kc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new B0();
      var u = new Set();
      a.set(l, u);
    } else (u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u));
    u.has(e) ||
      ((qc = !0), u.add(e), (t = Z0.bind(null, t, l, e)), l.then(t, t));
  }
  function Z0(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      ot === t &&
        (F & e) === e &&
        (mt === 4 || (mt === 3 && (F & 62914560) === F && 300 > _l() - Gc)
          ? (et & 2) === 0 && Sa(t, 0)
          : (Bc |= e),
        ga === F && (ga = 0)),
      Ol(t);
  }
  function kr(t, l) {
    l === 0 && (l = Qf()), (t = aa(t, l)), t !== null && (Na(t, l), Ol(t));
  }
  function L0(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), kr(t, e);
  }
  function V0(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(l), kr(t, e);
  }
  function K0(t, l) {
    return ii(t, l);
  }
  var jn = null,
    Ta = null,
    Jc = !1,
    Nn = !1,
    Wc = !1,
    Be = 0;
  function Ol(t) {
    t !== Ta &&
      t.next === null &&
      (Ta === null ? (jn = Ta = t) : (Ta = Ta.next = t)),
      (Nn = !0),
      Jc || ((Jc = !0), J0());
  }
  function yu(t, l) {
    if (!Wc && Nn) {
      Wc = !0;
      do
        for (var e = !1, a = jn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              (n = (1 << (31 - Ft(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), Fr(a, n));
          } else
            (n = F),
              (n = qu(
                a,
                a === ot ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || ja(a, n) || ((e = !0), Fr(a, n));
          a = a.next;
        }
      while (e);
      Wc = !1;
    }
  }
  function k0() {
    Jr();
  }
  function Jr() {
    Nn = Jc = !1;
    var t = 0;
    Be !== 0 && (eh() && (t = Be), (Be = 0));
    for (var l = _l(), e = null, a = jn; a !== null; ) {
      var u = a.next,
        n = Wr(a, l);
      n === 0
        ? ((a.next = null),
          e === null ? (jn = u) : (e.next = u),
          u === null && (Ta = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (Nn = !0)),
        (a = u);
    }
    yu(t);
  }
  function Wr(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - Ft(n),
        f = 1 << i,
        d = u[i];
      d === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (u[i] = bp(f, l))
        : d <= l && (t.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((l = ot),
      (e = F),
      (e = qu(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (at === 2 || at === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ci(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || ja(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && ci(a), si(e))) {
        case 2:
        case 8:
          e = Yf;
          break;
        case 32:
          e = wu;
          break;
        case 268435456:
          e = Gf;
          break;
        default:
          e = wu;
      }
      return (
        (a = $r.bind(null, t)),
        (e = ii(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && ci(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function $r(t, l) {
    if (Rt !== 0 && Rt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var e = t.callbackNode;
    if (Rn() && t.callbackNode !== e) return null;
    var a = F;
    return (
      (a = qu(
        t,
        t === ot ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Nr(t, a, l),
          Wr(t, _l()),
          t.callbackNode != null && t.callbackNode === e
            ? $r.bind(null, t)
            : null)
    );
  }
  function Fr(t, l) {
    if (Rn()) return null;
    Nr(t, l, !0);
  }
  function J0() {
    uh(function () {
      (et & 6) !== 0 ? ii(Bf, k0) : Jr();
    });
  }
  function $c() {
    return Be === 0 && (Be = Xf()), Be;
  }
  function Ir(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Qu("" + t);
  }
  function Pr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function W0(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = Ir((u[Xt] || null).action),
        i = a.submitter;
      i &&
        ((l = (l = i[Xt] || null)
          ? Ir(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((n = l), (i = null)));
      var f = new Ku("action", "action", null, a, u);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Be !== 0) {
                  var d = i ? Pr(u, i) : new FormData(u);
                  mc(
                    e,
                    { pending: !0, data: d, method: u.method, action: n },
                    null,
                    d
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (d = i ? Pr(u, i) : new FormData(u)),
                  mc(
                    e,
                    { pending: !0, data: d, method: u.method, action: n },
                    n,
                    d
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Fc = 0; Fc < Hi.length; Fc++) {
    var Ic = Hi[Fc],
      $0 = Ic.toLowerCase(),
      F0 = Ic[0].toUpperCase() + Ic.slice(1);
    vl($0, "on" + F0);
  }
  vl(No, "onAnimationEnd"),
    vl(Uo, "onAnimationIteration"),
    vl(wo, "onAnimationStart"),
    vl("dblclick", "onDoubleClick"),
    vl("focusin", "onFocus"),
    vl("focusout", "onBlur"),
    vl(h0, "onTransitionRun"),
    vl(y0, "onTransitionStart"),
    vl(m0, "onTransitionCancel"),
    vl(Ho, "onTransitionEnd"),
    ke("onMouseEnter", ["mouseout", "mouseover"]),
    ke("onMouseLeave", ["mouseout", "mouseover"]),
    ke("onPointerEnter", ["pointerout", "pointerover"]),
    ke("onPointerLeave", ["pointerout", "pointerover"]),
    _e(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    _e(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _e(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    _e(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    _e(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var mu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    I0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mu)
    );
  function td(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              d = f.instance,
              b = f.currentTarget;
            if (((f = f.listener), d !== n && u.isPropagationStopped()))
              break t;
            (n = f), (u.currentTarget = b);
            try {
              n(u);
            } catch (T) {
              bn(T);
            }
            (u.currentTarget = null), (n = d);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (d = f.instance),
              (b = f.currentTarget),
              (f = f.listener),
              d !== n && u.isPropagationStopped())
            )
              break t;
            (n = f), (u.currentTarget = b);
            try {
              n(u);
            } catch (T) {
              bn(T);
            }
            (u.currentTarget = null), (n = d);
          }
      }
    }
  }
  function $(t, l) {
    var e = l[ri];
    e === void 0 && (e = l[ri] = new Set());
    var a = t + "__bubble";
    e.has(a) || (ld(l, t, 2, !1), e.add(a));
  }
  function Pc(t, l, e) {
    var a = 0;
    l && (a |= 4), ld(e, t, a, l);
  }
  var Un = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(t) {
    if (!t[Un]) {
      (t[Un] = !0),
        kf.forEach(function (e) {
          e !== "selectionchange" && (I0.has(e) || Pc(e, !1, t), Pc(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Un] || ((l[Un] = !0), Pc("selectionchange", !1, l));
    }
  }
  function ld(t, l, e, a) {
    switch (Ed(l)) {
      case 2:
        var u = Eh;
        break;
      case 8:
        u = Ah;
        break;
      default:
        u = yf;
    }
    (e = u.bind(null, l, e, t)),
      (u = void 0),
      !_i ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
        ? t.addEventListener(l, e, { passive: u })
        : t.addEventListener(l, e, !1);
  }
  function lf(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Le(f)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    co(function () {
      var b = n,
        T = xi(e),
        O = [];
      t: {
        var S = Co.get(t);
        if (S !== void 0) {
          var _ = Ku,
            Q = t;
          switch (t) {
            case "keypress":
              if (Lu(e) === 0) break t;
            case "keydown":
            case "keyup":
              _ = Kp;
              break;
            case "focusin":
              (Q = "focus"), (_ = Ai);
              break;
            case "focusout":
              (Q = "blur"), (_ = Ai);
              break;
            case "beforeblur":
            case "afterblur":
              _ = Ai;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = so;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Wp;
              break;
            case No:
            case Uo:
            case wo:
              _ = qp;
              break;
            case Ho:
              _ = Fp;
              break;
            case "scroll":
            case "scrollend":
              _ = Np;
              break;
            case "wheel":
              _ = Pp;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Yp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = po;
              break;
            case "toggle":
            case "beforetoggle":
              _ = l0;
          }
          var Y = (l & 4) !== 0,
            it = !Y && (t === "scroll" || t === "scrollend"),
            y = Y ? (S !== null ? S + "Capture" : null) : S;
          Y = [];
          for (var h = b, v; h !== null; ) {
            var E = h;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                y === null ||
                ((E = Ha(h, y)), E != null && Y.push(vu(h, E, v))),
              it)
            )
              break;
            h = h.return;
          }
          0 < Y.length &&
            ((S = new _(S, Q, null, e, T)), O.push({ event: S, listeners: Y }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((S = t === "mouseover" || t === "pointerover"),
            (_ = t === "mouseout" || t === "pointerout"),
            S &&
              e !== bi &&
              (Q = e.relatedTarget || e.fromElement) &&
              (Le(Q) || Q[Ze]))
          )
            break t;
          if (
            (_ || S) &&
            ((S =
              T.window === T
                ? T
                : (S = T.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            _
              ? ((Q = e.relatedTarget || e.toElement),
                (_ = b),
                (Q = Q ? Le(Q) : null),
                Q !== null &&
                  ((it = A(Q)),
                  (Y = Q.tag),
                  Q !== it || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (Q = null))
              : ((_ = null), (Q = b)),
            _ !== Q)
          ) {
            if (
              ((Y = so),
              (E = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((Y = po),
                (E = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (it = _ == null ? S : wa(_)),
              (v = Q == null ? S : wa(Q)),
              (S = new Y(E, h + "leave", _, e, T)),
              (S.target = it),
              (S.relatedTarget = v),
              (E = null),
              Le(T) === b &&
                ((Y = new Y(y, h + "enter", Q, e, T)),
                (Y.target = v),
                (Y.relatedTarget = it),
                (E = Y)),
              (it = E),
              _ && Q)
            )
              l: {
                for (Y = _, y = Q, h = 0, v = Y; v; v = za(v)) h++;
                for (v = 0, E = y; E; E = za(E)) v++;
                for (; 0 < h - v; ) (Y = za(Y)), h--;
                for (; 0 < v - h; ) (y = za(y)), v--;
                for (; h--; ) {
                  if (Y === y || (y !== null && Y === y.alternate)) break l;
                  (Y = za(Y)), (y = za(y));
                }
                Y = null;
              }
            else Y = null;
            _ !== null && ed(O, S, _, Y, !1),
              Q !== null && it !== null && ed(O, it, Q, Y, !0);
          }
        }
        t: {
          if (
            ((S = b ? wa(b) : window),
            (_ = S.nodeName && S.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && S.type === "file"))
          )
            var C = So;
          else if (bo(S))
            if (_o) C = r0;
            else {
              C = o0;
              var J = f0;
            }
          else
            (_ = S.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? b && gi(b.elementType) && (C = So)
                : (C = s0);
          if (C && (C = C(t, b))) {
            xo(O, C, e, T);
            break t;
          }
          J && J(t, S, b),
            t === "focusout" &&
              b &&
              S.type === "number" &&
              b.memoizedProps.value != null &&
              vi(S, "number", S.value);
        }
        switch (((J = b ? wa(b) : window), t)) {
          case "focusin":
            (bo(J) || J.contentEditable === "true") &&
              ((ta = J), (Ni = b), (Za = null));
            break;
          case "focusout":
            Za = Ni = ta = null;
            break;
          case "mousedown":
            Ui = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ui = !1), Ro(O, e, T);
            break;
          case "selectionchange":
            if (p0) break;
          case "keydown":
          case "keyup":
            Ro(O, e, T);
        }
        var q;
        if (Mi)
          t: {
            switch (t) {
              case "compositionstart":
                var G = "onCompositionStart";
                break t;
              case "compositionend":
                G = "onCompositionEnd";
                break t;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break t;
            }
            G = void 0;
          }
        else
          Pe
            ? vo(t, e) && (G = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (G = "onCompositionStart");
        G &&
          (ho &&
            e.locale !== "ko" &&
            (Pe || G !== "onCompositionStart"
              ? G === "onCompositionEnd" && Pe && (q = fo())
              : ((Wl = T),
                (Ti = "value" in Wl ? Wl.value : Wl.textContent),
                (Pe = !0))),
          (J = wn(b, G)),
          0 < J.length &&
            ((G = new ro(G, t, null, e, T)),
            O.push({ event: G, listeners: J }),
            q ? (G.data = q) : ((q = go(e)), q !== null && (G.data = q)))),
          (q = a0 ? u0(t, e) : n0(t, e)) &&
            ((G = wn(b, "onBeforeInput")),
            0 < G.length &&
              ((J = new ro("onBeforeInput", "beforeinput", null, e, T)),
              O.push({ event: J, listeners: G }),
              (J.data = q))),
          W0(O, t, b, e, T);
      }
      td(O, l);
    });
  }
  function vu(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function wn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ha(t, e)),
          u != null && a.unshift(vu(t, u, n)),
          (u = Ha(t, l)),
          u != null && a.push(vu(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function za(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ed(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var f = e,
        d = f.alternate,
        b = f.stateNode;
      if (((f = f.tag), d !== null && d === a)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        b === null ||
        ((d = b),
        u
          ? ((b = Ha(e, n)), b != null && i.unshift(vu(e, b, d)))
          : u || ((b = Ha(e, n)), b != null && i.push(vu(e, b, d)))),
        (e = e.return);
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var P0 = /\r\n?/g,
    th = /\u0000|\uFFFD/g;
  function ad(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        P0,
        `
`
      )
      .replace(th, "");
  }
  function ud(t, l) {
    return (l = ad(l)), ad(t) === l;
  }
  function Hn() {}
  function nt(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || $e(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            $e(t, "" + a);
        break;
      case "className":
        Yu(t, "class", a);
        break;
      case "tabIndex":
        Yu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(t, e, a);
        break;
      case "style":
        no(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Yu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        (a = Qu("" + a)), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && nt(t, l, "name", u.name, u, null),
                nt(t, l, "formEncType", u.formEncType, u, null),
                nt(t, l, "formMethod", u.formMethod, u, null),
                nt(t, l, "formTarget", u.formTarget, u, null))
              : (nt(t, l, "encType", u.encType, u, null),
                nt(t, l, "method", u.method, u, null),
                nt(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        (a = Qu("" + a)), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Hn);
        break;
      case "onScroll":
        a != null && $("scroll", t);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (e = Qu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        $("beforetoggle", t), $("toggle", t), Bu(t, "popover", a);
        break;
      case "xlinkActuate":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        jl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        jl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Bu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Rp.get(e) || e), Bu(t, e, a));
    }
  }
  function ef(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        no(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? $e(t, a)
          : (typeof a == "number" || typeof a == "bigint") && $e(t, "" + a);
        break;
      case "onScroll":
        a != null && $("scroll", t);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Jf.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[Xt] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u);
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
              ? t.setAttribute(e, "")
              : Bu(t, e, a);
          }
    }
  }
  function jt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        $("error", t), $("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  nt(t, l, n, i, e, null);
              }
          }
        u && nt(t, l, "srcSet", e.srcSet, e, null),
          a && nt(t, l, "src", e.src, e, null);
        return;
      case "input":
        $("invalid", t);
        var f = (n = i = u = null),
          d = null,
          b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  u = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  d = T;
                  break;
                case "defaultChecked":
                  b = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  f = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(s(137, l));
                  break;
                default:
                  nt(t, l, a, T, e, null);
              }
          }
        lo(t, n, f, d, b, i, u, !1), Gu(t);
        return;
      case "select":
        $("invalid", t), (a = i = n = null);
        for (u in e)
          if (e.hasOwnProperty(u) && ((f = e[u]), f != null))
            switch (u) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                nt(t, l, u, f, e, null);
            }
        (l = n),
          (e = i),
          (t.multiple = !!a),
          l != null ? We(t, !!a, l, !1) : e != null && We(t, !!a, e, !0);
        return;
      case "textarea":
        $("invalid", t), (n = u = a = null);
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                u = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                nt(t, l, i, f, e, null);
            }
        ao(t, a, u, n), Gu(t);
        return;
      case "option":
        for (d in e)
          if (e.hasOwnProperty(d) && ((a = e[d]), a != null))
            switch (d) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                nt(t, l, d, a, e, null);
            }
        return;
      case "dialog":
        $("beforetoggle", t), $("toggle", t), $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) $(mu[a], t);
        break;
      case "image":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", t), $("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in e)
          if (e.hasOwnProperty(b) && ((a = e[b]), a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                nt(t, l, b, a, e, null);
            }
        return;
      default:
        if (gi(l)) {
          for (T in e)
            e.hasOwnProperty(T) &&
              ((a = e[T]), a !== void 0 && ef(t, l, T, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && nt(t, l, f, a, e, null));
  }
  function lh(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          f = null,
          d = null,
          b = null,
          T = null;
        for (_ in e) {
          var O = e[_];
          if (e.hasOwnProperty(_) && O != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = O;
              default:
                a.hasOwnProperty(_) || nt(t, l, _, null, a, O);
            }
        }
        for (var S in a) {
          var _ = a[S];
          if (((O = e[S]), a.hasOwnProperty(S) && (_ != null || O != null)))
            switch (S) {
              case "type":
                n = _;
                break;
              case "name":
                u = _;
                break;
              case "checked":
                b = _;
                break;
              case "defaultChecked":
                T = _;
                break;
              case "value":
                i = _;
                break;
              case "defaultValue":
                f = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(s(137, l));
                break;
              default:
                _ !== O && nt(t, l, S, _, a, O);
            }
        }
        mi(t, i, f, d, b, T, n, u);
        return;
      case "select":
        _ = i = f = S = null;
        for (n in e)
          if (((d = e[n]), e.hasOwnProperty(n) && d != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                _ = d;
              default:
                a.hasOwnProperty(n) || nt(t, l, n, null, a, d);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (d = e[u]),
            a.hasOwnProperty(u) && (n != null || d != null))
          )
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== d && nt(t, l, u, n, a, d);
            }
        (l = f),
          (e = i),
          (a = _),
          S != null
            ? We(t, !!e, S, !1)
            : !!a != !!e &&
              (l != null ? We(t, !!e, l, !0) : We(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        _ = S = null;
        for (f in e)
          if (
            ((u = e[f]),
            e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(t, l, f, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                _ = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && nt(t, l, i, u, a, n);
            }
        eo(t, S, _);
        return;
      case "option":
        for (var Q in e)
          if (
            ((S = e[Q]),
            e.hasOwnProperty(Q) && S != null && !a.hasOwnProperty(Q))
          )
            switch (Q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                nt(t, l, Q, null, a, S);
            }
        for (d in a)
          if (
            ((S = a[d]),
            (_ = e[d]),
            a.hasOwnProperty(d) && S !== _ && (S != null || _ != null))
          )
            switch (d) {
              case "selected":
                t.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                nt(t, l, d, S, a, _);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in e)
          (S = e[Y]),
            e.hasOwnProperty(Y) &&
              S != null &&
              !a.hasOwnProperty(Y) &&
              nt(t, l, Y, null, a, S);
        for (b in a)
          if (
            ((S = a[b]),
            (_ = e[b]),
            a.hasOwnProperty(b) && S !== _ && (S != null || _ != null))
          )
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(137, l));
                break;
              default:
                nt(t, l, b, S, a, _);
            }
        return;
      default:
        if (gi(l)) {
          for (var it in e)
            (S = e[it]),
              e.hasOwnProperty(it) &&
                S !== void 0 &&
                !a.hasOwnProperty(it) &&
                ef(t, l, it, void 0, a, S);
          for (T in a)
            (S = a[T]),
              (_ = e[T]),
              !a.hasOwnProperty(T) ||
                S === _ ||
                (S === void 0 && _ === void 0) ||
                ef(t, l, T, S, a, _);
          return;
        }
    }
    for (var y in e)
      (S = e[y]),
        e.hasOwnProperty(y) &&
          S != null &&
          !a.hasOwnProperty(y) &&
          nt(t, l, y, null, a, S);
    for (O in a)
      (S = a[O]),
        (_ = e[O]),
        !a.hasOwnProperty(O) ||
          S === _ ||
          (S == null && _ == null) ||
          nt(t, l, O, S, a, _);
  }
  var af = null,
    uf = null;
  function Cn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function id(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function nf(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function eh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === cf
        ? !1
        : ((cf = t), !0)
      : ((cf = null), !1);
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0,
    ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fd = typeof Promise == "function" ? Promise : void 0,
    uh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fd < "u"
        ? function (t) {
            return fd.resolve(null).then(t).catch(nh);
          }
        : cd;
  function nh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function re(t) {
    return t === "head";
  }
  function od(t, l) {
    var e = l,
      a = 0,
      u = 0;
    do {
      var n = e.nextSibling;
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var i = t.ownerDocument;
            if ((e & 1 && gu(i.documentElement), e & 2 && gu(i.body), e & 4))
              for (e = i.head, gu(e), i = e.firstChild; i; ) {
                var f = i.nextSibling,
                  d = i.nodeName;
                i[Ua] ||
                  d === "SCRIPT" ||
                  d === "STYLE" ||
                  (d === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(i),
                  (i = f);
              }
          }
          if (u === 0) {
            t.removeChild(n), Au(l);
            return;
          }
          u--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? u++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = n;
    } while (e);
    Au(l);
  }
  function ff(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ff(e), di(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function ih(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ua])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = bl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ch(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = bl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function of(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function fh(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete") l();
    else {
      var a = function () {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function bl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var sf = null;
  function sd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function rd(t, l, e) {
    switch (((l = Cn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function gu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    di(t);
  }
  var hl = new Map(),
    dd = new Set();
  function qn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Vl = w.d;
  w.d = { f: oh, r: sh, D: rh, C: dh, L: ph, m: hh, X: mh, S: yh, M: vh };
  function oh() {
    var t = Vl.f(),
      l = Mn();
    return t || l;
  }
  function sh(t) {
    var l = Ve(t);
    l !== null && l.tag === 5 && l.type === "form" ? Ns(l) : Vl.r(t);
  }
  var Ea = typeof document > "u" ? null : document;
  function pd(t, l, e) {
    var a = Ea;
    if (a && typeof l == "string" && l) {
      var u = cl(l);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        dd.has(u) ||
          (dd.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement("link")),
            jt(l, "link", t),
            zt(l),
            a.head.appendChild(l)));
    }
  }
  function rh(t) {
    Vl.D(t), pd("dns-prefetch", t, null);
  }
  function dh(t, l) {
    Vl.C(t, l), pd("preconnect", t, l);
  }
  function ph(t, l, e) {
    Vl.L(t, l, e);
    var a = Ea;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + cl(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + cl(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + cl(e.imageSizes) + '"]'))
        : (u += '[href="' + cl(t) + '"]');
      var n = u;
      switch (l) {
        case "style":
          n = Aa(t);
          break;
        case "script":
          n = Oa(t);
      }
      hl.has(n) ||
        ((t = N(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e
        )),
        hl.set(n, t),
        a.querySelector(u) !== null ||
          (l === "style" && a.querySelector(bu(n))) ||
          (l === "script" && a.querySelector(xu(n))) ||
          ((l = a.createElement("link")),
          jt(l, "link", t),
          zt(l),
          a.head.appendChild(l)));
    }
  }
  function hh(t, l) {
    Vl.m(t, l);
    var e = Ea;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        u =
          'link[rel="modulepreload"][as="' + cl(a) + '"][href="' + cl(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oa(t);
      }
      if (
        !hl.has(n) &&
        ((t = N({ rel: "modulepreload", href: t }, l)),
        hl.set(n, t),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xu(n))) return;
        }
        (a = e.createElement("link")),
          jt(a, "link", t),
          zt(a),
          e.head.appendChild(a);
      }
    }
  }
  function yh(t, l, e) {
    Vl.S(t, l, e);
    var a = Ea;
    if (a && t) {
      var u = Ke(a).hoistableStyles,
        n = Aa(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(bu(n)))) f.loading = 5;
        else {
          (t = N({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = hl.get(n)) && rf(t, e);
          var d = (i = a.createElement("link"));
          zt(d),
            jt(d, "link", t),
            (d._p = new Promise(function (b, T) {
              (d.onload = b), (d.onerror = T);
            })),
            d.addEventListener("load", function () {
              f.loading |= 1;
            }),
            d.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Bn(i, l, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          u.set(n, i);
      }
    }
  }
  function mh(t, l) {
    Vl.X(t, l);
    var e = Ea;
    if (e && t) {
      var a = Ke(e).hoistableScripts,
        u = Oa(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(xu(u))),
        n ||
          ((t = N({ src: t, async: !0 }, l)),
          (l = hl.get(u)) && df(t, l),
          (n = e.createElement("script")),
          zt(n),
          jt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function vh(t, l) {
    Vl.M(t, l);
    var e = Ea;
    if (e && t) {
      var a = Ke(e).hoistableScripts,
        u = Oa(t),
        n = a.get(u);
      n ||
        ((n = e.querySelector(xu(u))),
        n ||
          ((t = N({ src: t, async: !0, type: "module" }, l)),
          (l = hl.get(u)) && df(t, l),
          (n = e.createElement("script")),
          zt(n),
          jt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function hd(t, l, e, a) {
    var u = (u = Z.current) ? qn(u) : null;
    if (!u) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Aa(e.href)),
            (e = Ke(u).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Aa(e.href);
          var n = Ke(u).hoistableStyles,
            i = n.get(t);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, i),
              (n = u.querySelector(bu(t))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              hl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                hl.set(t, e),
                n || gh(u, t, e, i.state))),
            l && a === null)
          )
            throw Error(s(528, ""));
          return i;
        }
        if (l && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Oa(e)),
              (e = Ke(u).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Aa(t) {
    return 'href="' + cl(t) + '"';
  }
  function bu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yd(t) {
    return N({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function gh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        jt(l, "link", e),
        zt(l),
        t.head.appendChild(l));
  }
  function Oa(t) {
    return '[src="' + cl(t) + '"]';
  }
  function xu(t) {
    return "script[async]" + t;
  }
  function md(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + cl(e.href) + '"]');
          if (a) return (l.instance = a), zt(a), a;
          var u = N({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            zt(a),
            jt(a, "style", u),
            Bn(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          u = Aa(e.href);
          var n = t.querySelector(bu(u));
          if (n) return (l.state.loading |= 4), (l.instance = n), zt(n), n;
          (a = yd(e)),
            (u = hl.get(u)) && rf(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            zt(n);
          var i = n;
          return (
            (i._p = new Promise(function (f, d) {
              (i.onload = f), (i.onerror = d);
            })),
            jt(n, "link", a),
            (l.state.loading |= 4),
            Bn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = Oa(e.src)),
            (u = t.querySelector(xu(n)))
              ? ((l.instance = u), zt(u), u)
              : ((a = e),
                (u = hl.get(n)) && ((a = N({}, e)), df(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                zt(u),
                jt(u, "link", a),
                t.head.appendChild(u),
                (l.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), Bn(a, e.precedence, t));
    return l.instance;
  }
  function Bn(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === l) n = f;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function rf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function df(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Yn = null;
  function vd(t, l, e) {
    if (Yn === null) {
      var a = new Map(),
        u = (Yn = new Map());
      u.set(e, a);
    } else (u = Yn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ua] ||
          n[Ct] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function gd(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null
      );
  }
  function bh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled), typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function bd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Su = null;
  function xh() {}
  function Sh(t, l, e) {
    if (Su === null) throw Error(s(475));
    var a = Su;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = Aa(e.href),
          n = t.querySelector(bu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Gn.bind(a)), t.then(a, a)),
            (l.state.loading |= 4),
            (l.instance = n),
            zt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = yd(e)),
          (u = hl.get(u)) && rf(e, u),
          (n = n.createElement("link")),
          zt(n);
        var i = n;
        (i._p = new Promise(function (f, d) {
          (i.onload = f), (i.onerror = d);
        })),
          jt(n, "link", e),
          (l.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (a.count++,
          (l = Gn.bind(a)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function _h() {
    if (Su === null) throw Error(s(475));
    var t = Su;
    return (
      t.stylesheets && t.count === 0 && pf(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && pf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Gn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) pf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Xn = null;
  function pf(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Xn = new Map()),
        l.forEach(Th, t),
        (Xn = null),
        Gn.call(t));
  }
  function Th(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Xn.get(t);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Xn.set(t, e);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      (u = l.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Gn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var _u = {
    $$typeof: Ut,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function zh(t, l, e, a, u, n, i, f) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = fi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fi(0)),
      (this.hiddenUpdates = fi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function xd(t, l, e, a, u, n, i, f, d, b, T, O) {
    return (
      (t = new zh(t, l, e, i, f, d, b, O)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = Pt(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = ki()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      Fi(n),
      t
    );
  }
  function Sd(t) {
    return t ? ((t = ua), t) : ua;
  }
  function _d(t, l, e, a, u, n) {
    (u = Sd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Il(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = Pl(t, a, l)),
      e !== null && (ul(e, t, l), Ia(e, t, l));
  }
  function Td(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function hf(t, l) {
    Td(t, l), (t = t.alternate) && Td(t, l);
  }
  function zd(t) {
    if (t.tag === 13) {
      var l = aa(t, 67108864);
      l !== null && ul(l, t, 67108864), hf(t, 67108864);
    }
  }
  var Qn = !0;
  function Eh(t, l, e, a) {
    var u = z.T;
    z.T = null;
    var n = w.p;
    try {
      (w.p = 2), yf(t, l, e, a);
    } finally {
      (w.p = n), (z.T = u);
    }
  }
  function Ah(t, l, e, a) {
    var u = z.T;
    z.T = null;
    var n = w.p;
    try {
      (w.p = 8), yf(t, l, e, a);
    } finally {
      (w.p = n), (z.T = u);
    }
  }
  function yf(t, l, e, a) {
    if (Qn) {
      var u = mf(a);
      if (u === null) lf(t, l, a, Zn, e), Ad(t, a);
      else if (Mh(u, t, l, e, a)) a.stopPropagation();
      else if ((Ad(t, a), l & 4 && -1 < Oh.indexOf(t))) {
        for (; u !== null; ) {
          var n = Ve(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Se(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var d = 1 << (31 - Ft(i));
                      (f.entanglements[1] |= d), (i &= ~d);
                    }
                    Ol(n), (et & 6) === 0 && ((An = _l() + 500), yu(0));
                  }
                }
                break;
              case 13:
                (f = aa(n, 2)), f !== null && ul(f, n, 2), Mn(), hf(n, 2);
            }
          if (((n = mf(a)), n === null && lf(t, l, a, Zn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else lf(t, l, a, null, e);
    }
  }
  function mf(t) {
    return (t = xi(t)), vf(t);
  }
  var Zn = null;
  function vf(t) {
    if (((Zn = null), (t = Le(t)), t !== null)) {
      var l = A(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = j(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return (Zn = t), null;
  }
  function Ed(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dp()) {
          case Bf:
            return 2;
          case Yf:
            return 8;
          case wu:
          case pp:
            return 32;
          case Gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1,
    de = null,
    pe = null,
    he = null,
    Tu = new Map(),
    zu = new Map(),
    ye = [],
    Oh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Ad(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        de = null;
        break;
      case "dragenter":
      case "dragleave":
        pe = null;
        break;
      case "mouseover":
      case "mouseout":
        he = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zu.delete(l.pointerId);
    }
  }
  function Eu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        l !== null && ((l = Ve(l)), l !== null && zd(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t);
  }
  function Mh(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return (de = Eu(de, t, l, e, a, u)), !0;
      case "dragenter":
        return (pe = Eu(pe, t, l, e, a, u)), !0;
      case "mouseover":
        return (he = Eu(he, t, l, e, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(n, Eu(Tu.get(n) || null, t, l, e, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), zu.set(n, Eu(zu.get(n) || null, t, l, e, a, u)), !0
        );
    }
    return !1;
  }
  function Od(t) {
    var l = Le(t.target);
    if (l !== null) {
      var e = A(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = j(e)), l !== null)) {
            (t.blockedOn = l),
              Sp(t.priority, function () {
                if (e.tag === 13) {
                  var a = al();
                  a = oi(a);
                  var u = aa(e, a);
                  u !== null && ul(u, e, a), hf(e, a);
                }
              });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ln(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = mf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        (bi = a), e.target.dispatchEvent(a), (bi = null);
      } else return (l = Ve(e)), l !== null && zd(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function Md(t, l, e) {
    Ln(t) && e.delete(l);
  }
  function Dh() {
    (gf = !1),
      de !== null && Ln(de) && (de = null),
      pe !== null && Ln(pe) && (pe = null),
      he !== null && Ln(he) && (he = null),
      Tu.forEach(Md),
      zu.forEach(Md);
  }
  function Vn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      gf ||
        ((gf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Dh)));
  }
  var Kn = null;
  function Dd(t) {
    Kn !== t &&
      ((Kn = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Kn === t && (Kn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2];
          if (typeof a != "function") {
            if (vf(a || e) === null) continue;
            break;
          }
          var n = Ve(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            mc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Au(t) {
    function l(d) {
      return Vn(d, t);
    }
    de !== null && Vn(de, t),
      pe !== null && Vn(pe, t),
      he !== null && Vn(he, t),
      Tu.forEach(l),
      zu.forEach(l);
    for (var e = 0; e < ye.length; e++) {
      var a = ye[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ye.length && ((e = ye[0]), e.blockedOn === null); )
      Od(e), e.blockedOn === null && ye.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Xt] || null;
        if (typeof n == "function") i || Dd(e);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Xt] || null))) f = i.formAction;
            else if (vf(u) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            Dd(e);
        }
      }
  }
  function bf(t) {
    this._internalRoot = t;
  }
  (kn.prototype.render = bf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(s(409));
      var e = l.current,
        a = al();
      _d(e, a, t, l, null, null);
    }),
    (kn.prototype.unmount = bf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          _d(t.current, 2, null, t, null, null), Mn(), (l[Ze] = null);
        }
      });
  function kn(t) {
    this._internalRoot = t;
  }
  kn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = Vf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < ye.length && l !== 0 && l < ye[e].priority; e++);
      ye.splice(e, 0, t), e === 0 && Od(t);
    }
  };
  var Rd = o.version;
  if (Rd !== "19.1.1") throw Error(s(527, Rd, "19.1.1"));
  w.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = M(l)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Rh = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Ra = Jn.inject(Rh)), ($t = Jn);
      } catch {}
  }
  return (
    (Mu.createRoot = function (t, l) {
      if (!x(t)) throw Error(s(299));
      var e = !1,
        a = "",
        u = Ks,
        n = ks,
        i = Js,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (f = l.unstable_transitionCallbacks)),
        (l = xd(t, 1, !1, null, null, e, a, u, n, i, f, null)),
        (t[Ze] = l.current),
        tf(t),
        new bf(l)
      );
    }),
    (Mu.hydrateRoot = function (t, l, e) {
      if (!x(t)) throw Error(s(299));
      var a = !1,
        u = "",
        n = Ks,
        i = ks,
        f = Js,
        d = null,
        b = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (b = e.formState)),
        (l = xd(t, 1, !0, l, e ?? null, a, u, n, i, f, d, b)),
        (l.context = Sd(null)),
        (e = l.current),
        (a = al()),
        (a = oi(a)),
        (u = Il(a)),
        (u.callback = null),
        Pl(e, u, a),
        (e = a),
        (l.current.lanes = e),
        Na(l, e),
        Ol(l),
        (t[Ze] = l.current),
        tf(t),
        new kn(l)
      );
    }),
    (Mu.version = "19.1.1"),
    Mu
  );
}
var Wd;
function Gy() {
  if (Wd) return zf.exports;
  Wd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), (zf.exports = Yy()), zf.exports;
}
var Xy = Gy();
function op(c, o, r = !1, s = !1, x) {
  const A = document.createElement("div");
  A.id = c;
  let j = A;
  if (s) {
    const M = A.attachShadow({ mode: "open" }),
      g = document.createElement("style");
    g.textContent = x;
    const N = document.createElement("div");
    M.appendChild(g), M.appendChild(N), (j = N);
  }
  if (r) {
    const M = setInterval(() => {
      document.body && (document.body.appendChild(A), clearInterval(M));
    }, 200);
  }
  return Xy.createRoot(j).render(o), A;
}
const Qy =
    ".toggle-popup-button{all:unset;align-items:center;color:var(--tv-color-toolbar-button-text, #131722);cursor:default;display:flex;justify-content:center;position:relative;-webkit-user-select:none;user-select:none;height:36px;width:52px}.toggle-popup-button span{background-color:inherit;padding:5px;border-radius:4px;box-sizing:border-box}.toggle-popup-button svg{height:24px;width:24px}html.theme-dark .toggle-popup-button{color:var(--tv-color-toolbar-button-text, #d1d4dc)}.toggle-popup-button.active svg{color:#2962ff}.toggle-popup-button:hover span{background-color:#f0f4f9}html.theme-dark .toggle-popup-button:hover span{background-color:inherit}.web-app{left:90%;width:40px;height:40px;top:181px}",
  Zy = (c) => {
    const o = document.createElement("script");
    (o.src = c),
      (o.onload = () => o.remove()),
      document.documentElement.appendChild(o);
  };
function Ly(c) {
  let o = 0,
    r = !1;
  const s = op("extension-button-root", c);
  setTimeout(() => {
    const x = setInterval(() => {
      o++;
      const j = document.body.querySelector("iframe")?.contentDocument;
      if (o > 70) {
        clearInterval(x),
          alert(
            "Strategy Capture Extensions: The extension is taking longer than expected to load. Please refresh the page and try again."
          );
        return;
      }
      if (j) {
        r || (console.log("Iframe loaded"), (r = !0));
        const R = j.getElementById("drawing-toolbar");
        console.log("Searching for toolbar..."),
          R &&
            (console.log("Toolbar found, injecting button"),
            clearInterval(x),
            injectStyles(j, Qy),
            window.addEventListener("message", (g) => {
              if (
                g.data.sender === "FIND_MY_EDGE" &&
                g.data.type === "TOOL_DATA"
              ) {
                console.log("message recieved..");
                const N = g.data.payload,
                  L = vt.getState().updateStore;
                L((K) => {
                  (N.Pnl = K.riskAmount * N["Risk/Reward"]),
                    K.captureMap.forEach(({ mappedWith: st }, ht) => {
                      N?.[st] && qf(st, N[st], K, ht);
                    }),
                    (K.isPopupOpen = !0);
                });
              }
            }),
            R.querySelector('[class*="group-"]').prepend(s),
            console.log("Button injected"));
      }
    }, 200);
  }, 1500);
}
const ve = (c) => {
    const o = +parseFloat(c).toFixed(2);
    return !isFinite(o) || isNaN(o) ? 0 : o;
  },
  qf = (c, o, r, s = void 0) => {
    const x = r.accountSize,
      A = r.riskAmount,
      R = ve(c === "Risk/Reward" ? o.substring(2) : o),
      M = {
        accountSize: (g) => {
          (g.riskPercent = ve((A / R) * 100)), (g.accountSize = o);
        },
        riskAmount: (g) => {
          (g.riskPercent = ve((R / x) * 100)), (g.riskAmount = o);
          const N = g.captureMap.find(
            (L) => L.mappedWith === "Risk/Reward"
          ).value;
          g.captureMap.find((L) => L.mappedWith === "Pnl").value = ve(
            Number(N.substring(2)) * o
          );
        },
        riskPercent: (g) => {
          const N = ve((x * R) / 100);
          (g.riskAmount = N), (g.riskPercent = o);
          const L = g.captureMap.find(
            (K) => K.mappedWith === "Risk/Reward"
          ).value;
          g.captureMap.find((K) => K.mappedWith === "Pnl").value = ve(
            Number(L.substring(2)) * N
          );
        },
        "Risk/Reward": (g) => {
          g.captureMap.forEach((N) => {
            N.mappedWith === "Risk/Reward" && (N.value = `1:${R}`),
              N.mappedWith === "Pnl" && (N.value = ve(A * R));
          });
        },
        Pnl: (g) => {
          g.captureMap.forEach((N) => {
            N.mappedWith === "Risk/Reward" && (N.value = `1:${ve(R / A)}`),
              N.mappedWith === "Pnl" && (N.value = o);
          });
        },
        default: (g) => {
          s !== void 0 ? (g.captureMap[s].value = o) : (g[c] = o);
        },
      };
    (M[c] || M.default)(r);
  };
function Vy({ updateStore: c }) {
  return vt((r) => r.captureMap.currentLength === 0)
    ? m.jsx("div", {
        className: "no-input-found",
        children: m.jsx("span", { children: "No Capture Input Found" }),
      })
    : m.jsxs("div", {
        className: "backtesting-popup-inputs-flex",
        children: [
          m.jsxs("div", {
            className: "input-row header-row",
            children: [
              m.jsx(Fn, { text: "Labels", type: "header" }),
              m.jsx(Fn, { text: "Inputs", type: "header" }),
              m.jsx(Fn, { text: "Mappings", type: "header" }),
              m.jsx("div", { className: "filler" }),
            ],
          }),
          m.jsx(Ky, { updateStore: c }),
        ],
      });
}
function Ky({ updateStore: c }) {
  const [o, r] = Mt.useState({ start: null, over: null }),
    s = vt((A) => A.captureMap),
    x = (A, j) => {
      (o.start === null && o.over === null) ||
        (c((R) => {
          const M = R.captureMap,
            g = M.splice(A, 1)[0];
          M.splice(j, 0, g);
        }),
        r({ start: null, over: null }));
    };
  return s.map((A, j) =>
    m.jsxs(
      "div",
      {
        className: `input-row ${j === o.over ? "drag-over" : ""} ${
          A.type !== "dropdown" ? "dropdown-row" : ""
        }`,
        draggable: !0,
        onDragStart: () => r({ start: j, over: j }),
        onDragEnter: () => r((R) => ({ ...R, over: j })),
        onDragEnd: () => x(o.start, o.over),
        children: [
          m.jsx(Fn, { text: A.label }),
          m.jsx(Da, {
            type: A.type,
            options: A.options,
            selector: A.value,
            onChange: (R) => c((M) => qf(A.mappedWith, R, M, j)),
          }),
          A.type !== "dropdown"
            ? m.jsx(Da, {
                type: "dropdown",
                options: ep,
                selector: (R) => R.captureMap[j].mappedWith,
                onChange: (R) => {
                  c((M) => {
                    const g = M.captureMap[j];
                    Object.assign(g, { mappedWith: R });
                  });
                },
              })
            : m.jsx("div", { className: "filler" }),
          m.jsxs("div", {
            className: "edit-trash-btn-wrapper",
            children: [
              m.jsx(Nt, {
                text: m.jsx(ip, { size: 16 }),
                size: "small",
                type: "hollow",
                onClick: () => {
                  c((g) => {
                    Object.assign(g, {
                      ...(A?.options && { inputOptions: A.options }),
                      inputLabel: A.label,
                      inputType: ty[A.type],
                      updatingIndex: j,
                      showInputGenerator: !0,
                    });
                  });
                  const R = document.getElementById("extension-popup-content"),
                    M =
                      R ||
                      document
                        .getElementById("extension-shadow-root-wrapper")
                        .shadowRoot.getElementById("extension-popup-content");
                  M.scrollTop = 70;
                },
              }),
              m.jsx(Nt, {
                text: m.jsx(cp, { size: 16 }),
                size: "small",
                type: "fill",
                onClick: () =>
                  c((R) => {
                    R.captureMap.splice(j, 1);
                  }),
              }),
            ],
          }),
        ],
      },
      j
    )
  );
}
function ky({ updateStore: c }) {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("div", {
        className: "inputs-and-generator-wrapper",
        children: [
          m.jsx("div", {
            className: "account-size-and-risk-wrapper",
            children: [
              {
                label: "Account Size",
                placeHolder: "Enter Capital",
                field: "accountSize",
              },
              {
                label: "Risk (%)",
                placeHolder: "Enter risk (%)",
                field: "riskPercent",
              },
              {
                label: "Risk (₹)",
                placeHolder: "Enter risk (₹)",
                field: "riskAmount",
              },
            ].map((o, r) =>
              m.jsx(
                Da,
                {
                  label: o.label,
                  type: "number",
                  placeholder: o.placeHolder,
                  selector: (s) => s[o.field],
                  onChange: (s) => c((x) => qf(o.field, s, x)),
                },
                `input_${r}`
              )
            ),
          }),
          m.jsx(wy, { updateStore: c }),
        ],
      }),
      m.jsx(Vy, { updateStore: c }),
    ],
  });
}
const Jy = (c) => {
    Math.max(...c.map((x) => x.length));
    const o = c.map((x) => x.map(({ value: A }) => A).join(",")).join(`
`),
      r = new Blob([o], { type: "text/csv;chartset=utf-8;" }),
      s = document.createElement("a");
    (s.href = URL.createObjectURL(r)), (s.download = "captures.csv"), s.click();
  },
  Wy = async (c, o, r) => {
    o ||
      (r(!0),
      await navigator.clipboard.writeText(c),
      setTimeout(() => r(!1), 2e3));
  };
function $y({ capture: c, index: o, updateStore: r }) {
  return m.jsxs("div", {
    className: "tool-header",
    children: [
      m.jsxs("div", {
        children: [
          m.jsx(Fy, {
            text: c.map(({ label: s, value: x }) => `${s}: ${x}`).join(`
`),
          }),
          m.jsxs("div", {
            className: "entries",
            children: [
              m.jsx("span", { children: "Columns " }),
              m.jsx("span", { children: c.length }),
            ],
          }),
        ],
      }),
      m.jsxs("div", {
        children: [
          m.jsx(Nt, {
            text: m.jsx(ip, { size: 15 }),
            type: "hollow",
            size: "very-small",
            onClick: () =>
              r((s) => {
                (s.activeTabIndex = 0),
                  (s.captureMap = s.tradeRecords[o]),
                  (s.editingIndex = o);
              }),
          }),
          m.jsx(Nt, {
            text: m.jsx(cp, { size: 15 }),
            size: "very-small",
            onClick: () =>
              r((s) => {
                s.tradeRecords.splice(o, 1);
              }),
          }),
        ],
      }),
    ],
  });
}
function Fy({ text: c }) {
  const [o, r] = Mt.useState(!1);
  return m.jsx(Nt, {
    text: o ? m.jsx(hy, { size: 15 }) : m.jsx(my, { size: 15 }),
    type: o ? "fill" : "hollow",
    size: "very-small",
    onClick: () => Wy(c, o, r),
  });
}
function Iy({ updateStore: c }) {
  const o = vt((r) => r.tradeRecords);
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs("div", {
        className: "all-captures-toolbar",
        children: [
          m.jsxs("div", {
            className: "entries",
            children: [
              m.jsx("span", { children: "Total Captures " }),
              m.jsx("span", { children: o.length }),
            ],
          }),
          o.length !== 0 &&
            m.jsx(Nt, {
              text: m.jsx(gy, { size: 15 }),
              type: "hollow",
              size: "very-small",
              title: "Download All",
              onClick: () => Jy(o),
            }),
        ],
      }),
      m.jsx("div", {
        className: "all-captures-content-wrapper",
        children:
          o.length === 0
            ? m.jsx("div", {
                className: "no-input-found",
                children: m.jsx("span", { children: "No Captures Found" }),
              })
            : o.map((r, s) =>
                m.jsxs(
                  "div",
                  {
                    className: "all-captures-row-wrapper",
                    children: [
                      m.jsx($y, { capture: r, index: s, updateStore: c }),
                      m.jsx("div", {
                        className: "all-captures-row",
                        children: r.map(({ label: x, value: A }, j) =>
                          m.jsxs(
                            "div",
                            {
                              className: "column",
                              children: [
                                m.jsx("div", { className: "key", children: x }),
                                m.jsx("div", {
                                  className: "value",
                                  children: A,
                                }),
                              ],
                            },
                            j
                          )
                        ),
                      }),
                    ],
                  },
                  s
                )
              ),
      }),
    ],
  });
}
function Py({ updateStore: c }) {
  const o = vt((r) => r.activeTabIndex);
  return m.jsxs("div", {
    id: "extension-popup-content",
    className: o === 1 ? "tab-2-padding" : "",
    children: [
      o === 0 && m.jsx(ky, { updateStore: c }),
      o === 1 && m.jsx(Iy, { updateStore: c }),
    ],
  });
}
function t1({ updateStore: c }) {
  const o = vt((s) => s.activeTabIndex),
    r = vt((s) => s.editingIndex !== null);
  return m.jsx("div", {
    className: "backtesting-popup-footer-wrapper",
    children: m.jsx("div", {
      className: "backtesting-popup-footer",
      children: m.jsx("div", {
        className: "backtesting-popup-footer-btn-wrapper space",
        children:
          o === 0 ? m.jsx(l1, { updateStore: c, isEditing: r }) : m.jsx(e1, {}),
      }),
    }),
  });
}
function l1({ updateStore: c, isEditing: o }) {
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(Nt, {
        text: "Logout",
        type: "hollow",
        onClick: () =>
          c((r) => {
            r.userLoggedIn = !1;
          }),
      }),
      m.jsxs("div", {
        className: "footer-right-side-btn",
        children: [
          o &&
            m.jsx(Nt, {
              text: "Cancel",
              type: "hollow",
              onClick: () =>
                c((r) => {
                  r.editingIndex = null;
                }),
            }),
          m.jsx(Nt, {
            text: o ? "Update" : "Add",
            type: "fill",
            onClick: () =>
              c((r) => {
                const s = r.tradeRecords;
                r.editingIndex !== null && s?.[r.editingIndex]
                  ? Object.assign(s[r.editingIndex], r.captureMap)
                  : s.push(r.captureMap),
                  (r.editingIndex = null),
                  (r.activeTabIndex = 1);
              }),
          }),
        ],
      }),
    ],
  });
}
function e1() {
  const [c, o] = Mt.useState(!1);
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx(Nt, {
        type: "toggle",
        text: "Auto-Save",
        toggle: c,
        onClick: () => o((r) => !r),
      }),
      m.jsx(Nt, { text: "Save", type: "hollow", onClick: () => null }),
    ],
  });
}
function a1({ updateStore: c }) {
  const [o, r] = Mt.useState(""),
    [s, x] = Mt.useState(""),
    [A, j] = Mt.useState(!1),
    R = () => {
      r(""), x("");
    },
    M = (g) => {
      g.preventDefault(),
        j(!0),
        setTimeout(() => {
          j(!1),
            c((N) => {
              N.userLoggedIn = !0;
            });
        }, 2e3);
    };
  return m.jsxs("div", {
    className: "popup-card",
    children: [
      m.jsx("div", {
        className: "popup-header",
        children: m.jsx("h2", { children: "Find My Edge Login" }),
      }),
      m.jsxs("form", {
        className: "popup-body",
        onSubmit: M,
        children: [
          m.jsx("label", { children: "Email" }),
          m.jsx("input", {
            type: "email",
            placeholder: "Enter your email",
            value: o,
            onChange: (g) => r(g.target.value),
            required: !0,
          }),
          m.jsx("label", { children: "Password" }),
          m.jsx("input", {
            type: "password",
            placeholder: "Enter your password",
            value: s,
            onChange: (g) => x(g.target.value),
            required: !0,
          }),
          m.jsxs("div", {
            className: "popup-actions",
            children: [
              m.jsx(Nt, { text: "Clear", type: "hollow", onClick: R }),
              m.jsx(Nt, {
                text: A ? m.jsx(fp, { size: 18.5, button: !0 }) : "Login",
                type: "fill",
                disable: A,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function u1() {
  const c = Mt.useRef(null),
    o = vt((x) => x.isPopupOpen),
    r = vt((x) => x.userLoggedIn),
    s = vt((x) => x.updateStore);
  return m.jsxs("div", {
    ref: c,
    id: "find-my-edge-capture-popup",
    className: "backtesting-popup",
    style: { display: o ? "block" : "none" },
    children: [
      m.jsx(ny, { updateStore: s, popupRef: c }),
      r
        ? m.jsxs(m.Fragment, {
            children: [
              m.jsx(Ry, { tabs: ["Recent", "All Captures"], updateStore: s }),
              m.jsx(n1, { updateStore: s }),
            ],
          })
        : m.jsx(a1, { updateStore: s }),
    ],
  });
}
function n1({ updateStore: c }) {
  const [o, r] = Mt.useState(!0);
  return (
    Mt.useEffect(() => {
      setTimeout(() => r(!1), 1e3);
    }, []),
    o
      ? m.jsx(fp, { size: 30, color: "blue" })
      : m.jsxs(m.Fragment, {
          children: [
            m.jsx(Py, { updateStore: c }),
            m.jsx(t1, { updateStore: c }),
          ],
        })
  );
}
function i1({ _IS_EXTENSION_BUILD_: c = !1 }) {
  const o = vt((s) => s.isPopupOpen),
    r = vt((s) => s.updateStore);
  return m.jsx("button", {
    "data-tooltip": "Capture your Strategies",
    className: `toggle-popup-button apply-common-tooltip common-tooltip-vertical ${
      o ? "active" : ""
    } ${c ? "" : "web-app"}`,
    onClick: () =>
      r((s) => {
        s.isPopupOpen = !s.isPopupOpen;
      }),
    children: m.jsx("span", { children: m.jsx(_y, { strokeWidth: 1 }) }),
  });
}
const c1 =
    '.btn-wrapper{display:flex}.btn-wrapper.x-center{justify-content:center}.btn-wrapper.x-left{justify-content:flex-start}.btn-wrapper.x-right{justify-content:flex-end}.btn-wrapper.y-center{align-items:center}.btn-wrapper.y-top{align-items:flex-start}.btn-wrapper.y-bottom{align-items:flex-end}.fill-btn,.hollow-btn{background-color:#fff;color:#1e53e5;border:none;cursor:pointer;font-weight:500;border:1px solid #1e53e5;display:flex;align-items:center;gap:5px}.fill-btn:hover,.hollow-btn:hover{color:#fff;background-color:#1e53e5;border:1px solid #1e53e5}.fill-btn{background-color:#2962ff;color:#fff;border:none;border:1px solid #2962ff}.fill-btn.medium,.hollow-btn.medium{padding:4px 10px;font-size:16px;border-radius:6px}.fill-btn.small,.hollow-btn.small{padding:2px 8px;font-size:14px;border-radius:4px}.fill-btn.very-small,.hollow-btn.very-small{padding:2px 6px;font-size:11px;border-radius:4px}.btn-disable:hover,.btn-disable{background-color:#dadada;border:1px solid #ccc;color:#818181;cursor:default}.toggle-btn{all:unset;height:13px!important;width:32px!important;background-color:#e1e1e1;border-radius:50px;display:flex!important;align-items:center!important;cursor:pointer;transition:background-color ease-in-out .1s}.toggle-btn.enabled{background-color:#2962ff}.toggle-btn .circle{background-color:#fff;height:16px!important;width:16px!important;border-radius:50%;transform:translate(0);transition:transform ease-in-out .2s,background-color ease-in-out .2s,transform ease-in-out .2s;border:1px solid #cfcfcf}.toggle-btn.enabled .circle{transform:translate(100%);background-color:#fff;border:1px solid #2962ff}.toggle-label{color:#383838}.input-label-wrapper{width:100%;margin-bottom:4px;display:flex;align-items:center;justify-content:flex-start;color:#242424;font-size:13px}.backtesting-popup-input-wrapper{padding:8px 0;max-width:150px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;box-sizing:border-box}.backtesting-popup-input-div{border:1px solid #ccc;border-radius:7px}.backtesting-popup-input-div select{padding:7.8px 4px;width:fit-content;max-width:240px;min-width:100px}.backtesting-popup-input-div:hover{border:1px solid #a0a0a0}.backtesting-popup-input-div:focus-within{border:1px solid #ffffff}.backtesting-popup-input{width:120px;height:38px;box-sizing:border-box;background-color:#fff;color:#000;font-size:14px;font-weight:400;border-radius:7px;outline:none;border:2px solid #ffffff}.backtesting-popup-input:focus{border:2px solid #0b5ef9}input,input[type=number],input[type=date],input[type=time]{color-scheme:light;padding:8px 2px 8px 8px}input[type=time],input[type=date]{font-size:13px;width:120px}input[type=date]::-webkit-calendar-picker-indicator,input[type=time]::-webkit-calendar-picker-indicator{padding:0;margin-left:2px;cursor:pointer}.backtesting-popup-label-wrapper{display:flex;align-items:center!important;min-width:40px;font-weight:400;font-size:13px;text-align:left;color:#000;box-sizing:border-box}.backtesting-popup-label-wrapper span{display:flex;padding:8px 0;font-weight:400;align-items:center;font-size:13px;text-align:left;color:#000;box-sizing:border-box}.backtesting-popup-label-wrapper.header span{margin-bottom:0;margin-top:10px;font-size:13px;color:#959595;box-sizing:border-box}.loader{display:flex;justify-content:center;align-items:center}.loader.popup{min-height:300px}.loader.popup svg,.loader svg{animation:spin infinite linear 1.5s;color:#4160ff}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.top-down-slider{flex:1;padding:3px 10px;border-radius:4px;display:flex;flex-direction:column;justify-content:space-between;background-color:#f2faffe5;border:1px solid #d3eeffe5}.title-wrapper{flex:1;display:flex;justify-content:space-between;cursor:pointer}.title-wrapper div:last-child{display:flex;align-items:center}.top-down-slider .title{display:flex;align-items:center;justify-content:center;gap:10px}.top-down-slider-content-wrapper{overflow:hidden;max-height:0;transition:max-height .3s ease-in-out}.top-down-slider-content-wrapper.expand{overflow-y:scroll;scrollbar-width:none;max-height:280px}.title-wrapper div:last-child svg{transition:rotate ease-in-out .2s}.title-wrapper .rotate svg{rotate:180deg}.popup-card{width:100%;justify-self:center;background:#fff;border-radius:8px;font-family:Segoe UI,sans-serif;overflow:hidden;padding:20px;box-sizing:border-box;background-color:#f4f9ff}.popup-header{display:flex;justify-content:center;align-items:center;padding:14px 18px;border-bottom:1px solid #eee}.popup-header h2{font-size:20px;font-weight:600;color:#007bff;margin:0}.popup-close{background:none;border:none;font-size:18px;cursor:pointer;color:#555}.popup-body{padding:16px 18px;display:flex;flex-direction:column;gap:12px;align-items:flex-start}.popup-body label{font-size:14px;font-weight:500;color:#333;margin-bottom:4px}.popup-body input{width:100%;padding:10px;font-size:14px;border:1px solid #ddd;border-radius:4px;outline:none;box-sizing:border-box;transition:border-color .2s ease}.popup-body input:focus{border-color:#007bff}.popup-actions{flex:1;display:flex;justify-content:flex-end;gap:10px;margin-top:14px}.tab-selector{width:100%;font-size:13px;font-weight:600;padding:0 20px;box-sizing:border-box;background:#fff}.tab-track-container{position:relative;display:flex}.tab-track-container:before{content:"";position:absolute;bottom:0;width:100%;background-color:#e0e5f57e;height:4px;border-radius:5px}.tab-container{display:flex;position:relative;gap:24px}.tab-track-container .tab{outline:none;background:#fff;position:relative;font-size:16px;margin-bottom:8px;padding:0;text-align:center;font-weight:700;color:#000;border:none}.tab-track-container .tab:hover{color:#5b5b5b}.active-tab-indicator{position:absolute;background:#000;height:4px;border-radius:3px;bottom:0;transition:transform .1s ease,width .1s ease}::-webkit-scrollbar-track{background:#f0f0f0!important;border-radius:5px!important}::-webkit-scrollbar-thumb{background-color:#cdcdcd!important;border-radius:5px!important;border:1px solid #f0f0f0!important}::-webkit-scrollbar-thumb:hover{background-color:#a9a9a9!important}::-webkit-scrollbar-button{display:none!important}#extension-popup-content{display:flex;flex-direction:column;padding:16px 0;max-height:330px;min-height:100px;overflow-y:auto;overflow-x:hidden}#extension-popup-content::-webkit-scrollbar{width:5px!important;height:5px!important}.inputs-and-generator-wrapper{padding:0 20px}.account-size-and-risk-wrapper{display:grid;grid-template-columns:1fr 1fr 1fr;gap:15px;margin-bottom:10px}.account-size-and-risk-wrapper input{width:100%}.no-input-found{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:14px;color:#5b5b5b}.btn-wrapper{display:flex;align-items:center;justify-content:center;gap:10px}.add-button-wrapper{display:flex;gap:10px;justify-content:flex-end;padding:0 0 10px}.inputs-generator-wrapper{display:flex;gap:5px;justify-content:space-between;padding:10px;box-sizing:border-box}.inputs-generator-wrapper input{width:100%}.inputs-generator-wrapper select{width:150px}.inputs-section{flex:2;display:flex;flex-direction:column}.dropdowns-section{display:flex;flex-direction:column;overflow:auto;justify-content:flex-end;flex:3}.dropdowns-section>div:first-child{display:flex;justify-content:flex-end;margin-bottom:5px}.dropdowns-wrapper{display:flex;flex-direction:column;align-items:center;overflow:auto;border-left:1px solid #cccc;height:180px;padding:0 20px;box-sizing:border-box}.dropdowns-wrapper .empty-options-wrapper{flex:1;display:flex;align-items:center;color:#8c8c8ccc}.dropdowns-wrapper::-webkit-scrollbar{width:5px;height:5px}.dropdowns-section .add-options-btn-wrapper{display:flex;justify-content:flex-end;position:sticky;top:0}.dropdowns-section .dropdowns{display:flex;gap:20px}.backtesting-popup-inputs-flex{display:flex;flex-direction:column;gap:5px}.input-row{display:grid;grid-template-columns:80px 120px 125px 80px;align-items:center;gap:15px;padding:0 20px;cursor:move}.dropdown-row select{width:125px}.input-row.drag-over{background-color:#edfaff}.header-row>*{font-weight:600;margin-bottom:-15px;cursor:default}.edit-trash-btn-wrapper{display:flex;gap:10px;justify-content:flex-start}.input-row>.filler{width:125px}.all-captures-toolbar{display:flex;justify-content:space-between;background-color:#f8fbff;padding:10px;margin:0 16px 20px;border-radius:5px}.all-captures-content-wrapper{padding:0 16px;border-radius:5px;display:flex;flex-direction:column-reverse;justify-content:flex-start}.all-captures-row::-webkit-scrollbar{width:5px!important;height:5px!important}.entries span:first-child{font-size:15px;color:#8da9c0}.entries span:last-child{font-size:15px;font-weight:700;color:#747474}.all-captures-row-wrapper{border:1px solid #cfe2ff;border-radius:3px 3px 0 0;margin-bottom:20px}.all-captures-row-wrapper .tool-header{display:flex;flex-direction:row;justify-content:space-between;position:sticky;left:0;padding:5px}.all-captures-row-wrapper .tool-header div:first-child{display:flex;justify-content:flex-end;align-items:center;gap:10px}.all-captures-row-wrapper .tool-header div:last-child{display:flex;justify-content:flex-end;gap:10px}.all-captures-row{display:flex;height:fit-content;box-sizing:border-box;background-color:#f8fbff;border-top:1px solid #cfe2ff;overflow-x:scroll}.all-captures-row .column{display:flex;flex-direction:column;font-size:14px;color:#8da9c0}.all-captures-row .column div{padding:0 10px;text-align:left;border-right:1px solid #d6eaff;border-bottom:1px solid #d6eaff;white-space:nowrap}.all-captures-row .key{border-bottom:1px solid #d6eaff}.all-captures-row .value{color:#747474;font-weight:700}.calculators-tab-and-calculator-wrapper{padding:10px;background-color:#f5f6f8cf;margin-top:20px;border-radius:5px}.calculator-wrapper{padding:10px 20px 15px;box-sizing:border-box;border:1px solid #d3e6ff;background-color:#f8fbff;border-radius:8px;margin-bottom:10px;margin-top:10px;box-shadow:0 0 6px #0000001a}.calculator-wrapper .title{display:flex;align-self:flex-start;color:gray}.calculator{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0px 15px}.calculator input{width:100%}button{font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;box-sizing:border-box}.backtesting-popup{position:fixed;width:500px;background:#fff;border-radius:6px;box-shadow:0 2px 10px #0000001a;z-index:999999;-webkit-user-select:none;user-select:none;pointer-events:auto;top:45px;left:380px;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}.backtesting-popup-header-wrapper{padding:0 20px}.backtesting-popup-header{display:flex}.backtesting-popup-header-title{background:#fff;color:#0b0b0b;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;align-items:center;padding:17px 0;font-size:20px;width:100%;box-sizing:border-box;font-weight:600;cursor:grab}.backtesting-popup-close-btn-wrapper{padding:17px 0}.backtesting-popup-close-btn{background:inherit;border:none;border-radius:8px;height:34px;width:34px;font-size:36px;font-weight:100;cursor:pointer;color:#000;line-height:0}.backtesting-popup-close-btn:hover{background:#e2ebf38b}.backtesting-popup-footer-wrapper{padding:16px 20px;border-top:1px solid #e3e3e3}.backtesting-popup-footer{display:flex;justify-content:space-between;justify-content:flex-end}.backtesting-popup-footer-btn-wrapper,.backtesting-popup-footer-btn-wrapper .footer-right-side-btn{display:flex;gap:15px}.backtesting-popup-footer-btn-wrapper.space{flex:1;justify-content:space-between}.filler{flex:1;z-index:-1}',
  f1 = [
    "https://tv.dhan.co",
    "https://www.angelone.in/trade/pro-trader",
    "https://groww.in/charts",
    "https://tv.upstox.com/trading-terminal/charts",
    "https://pro.upstox.com",
  ],
  o1 = f1.some((c) => location.href.includes(c));
o1 &&
  (op("extension-shadow-root-wrapper", m.jsx(u1, {}), !0, !0, c1),
  Ly(m.jsx(i1, { _IS_EXTENSION_BUILD_: !0 })),
  Zy(chrome.runtime.getURL("injected.js")));
