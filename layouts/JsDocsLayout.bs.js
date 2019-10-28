

import * as $$Text from "../components/Text.bs.js";
import * as Util from "../common/Util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Link from "next/link";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Router from "next/router";
import * as React$1 from "@mdx-js/react";
import * as Caml_chrome_debugger from "bs-platform/lib/es6/caml_chrome_debugger.js";

require('../styles/main.css')
;


let hljs = require('highlight.js/lib/highlight');
let reasonHighlightJs = require('reason-highlightjs');
hljs.registerLanguage('reason', reasonHighlightJs);

;

var indexData = (require('../index_data/js_api_index.json'));

function JsDocsLayout$Md$Anchor(Props) {
  var id = Props.id;
  var style = {
    position: "absolute",
    top: "-7rem"
  };
  return React.createElement("span", {
              className: "relative"
            }, React.createElement("a", {
                  className: "mr-2 text-main-lighten-65 hover:cursor-pointer",
                  href: "#" + id
                }, Util.ReactStuff.s("#")), React.createElement("a", {
                  id: id,
                  style: style
                }));
}

var Anchor = {
  make: JsDocsLayout$Md$Anchor
};

function JsDocsLayout$Md$InvisibleAnchor(Props) {
  var id = Props.id;
  var style = {
    position: "absolute",
    top: "-1rem"
  };
  return React.createElement("span", {
              "aria-hidden": true,
              className: "relative"
            }, React.createElement("a", {
                  id: id,
                  style: style
                }));
}

var InvisibleAnchor = {
  make: JsDocsLayout$Md$InvisibleAnchor
};

function JsDocsLayout$Md$H2(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement(JsDocsLayout$Md$InvisibleAnchor, {
                  id: children
                }), React.createElement("div", {
                  className: "border-b border-gray-200 my-20"
                }));
}

var H2 = {
  make: JsDocsLayout$Md$H2
};

function JsDocsLayout$Md$Pre(Props) {
  var children = Props.children;
  return React.createElement("pre", {
              className: "mt-2 mb-4 block"
            }, children);
}

var Pre = {
  make: JsDocsLayout$Md$Pre
};

function JsDocsLayout$Md$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mt-3 leading-4 text-main-lighten-15"
            }, children);
}

var P = {
  make: JsDocsLayout$Md$P
};

var components = {
  p: JsDocsLayout$Md$P,
  li: $$Text.Md.Li.make,
  h1: $$Text.H1.make,
  h2: JsDocsLayout$Md$H2,
  h3: $$Text.H3.make,
  h4: $$Text.H4.make,
  h5: $$Text.H5.make,
  ul: $$Text.Md.Ul.make,
  ol: $$Text.Md.Ol.make,
  inlineCode: $$Text.Md.InlineCode.make,
  code: $$Text.Md.Code.make,
  pre: JsDocsLayout$Md$Pre,
  a: $$Text.Md.A.make
};

var Md = {
  Anchor: Anchor,
  InvisibleAnchor: InvisibleAnchor,
  H2: H2,
  Pre: Pre,
  P: P,
  components: components
};

var $$package = (require('../package.json'));

var link = "no-underline text-inherit hover:text-white";

function JsDocsLayout$Navigation(Props) {
  return React.createElement("nav", {
              className: "fixed z-10 top-0 p-2 w-full h-16 shadow flex items-center text-ghost-white text-sm bg-bs-purple",
              id: "header"
            }, React.createElement(Link.default, {
                  href: "/js_docs",
                  children: React.createElement("a", {
                        className: "flex items-center pl-10 w-1/5"
                      }, React.createElement("div", {
                            className: "h-6 w-6 bg-white rounded-full flex flex-col justify-center items-center"
                          }, React.createElement("div", {
                                className: "h-4 w-4 bg-bs-purple rounded-full"
                              })), React.createElement("span", {
                            className: "text-xl ml-2 font-black text-white"
                          }, Util.ReactStuff.s("Js")))
                }), React.createElement("div", {
                  className: "ml-6 flex w-3/5 px-3 h-10 max-w-sm rounded-lg text-white bg-light-grey-20 content-center items-center w-2/3"
                }, React.createElement("img", {
                      "aria-hidden": true,
                      className: "mr-3",
                      src: "/static/ic_search_small.svg"
                    }), React.createElement("input", {
                      className: "bg-transparent placeholder-ghost-white block focus:outline-none w-full ml-2",
                      placeholder: "Search not ready yet...",
                      type: "text"
                    })), React.createElement("div", {
                  className: "flex mx-4 text-ghost-white justify-between ml-auto"
                }, React.createElement(Link.default, {
                      href: "/",
                      children: React.createElement("a", {
                            className: link
                          }, Util.ReactStuff.s("ReasonML"))
                    }), React.createElement("a", {
                      className: "no-underline text-inherit hover:text-white align-middle ml-6",
                      href: "https://github.com/reason-association/reasonml.org",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, Util.ReactStuff.s("Github")), React.createElement("a", {
                      className: "bg-light-grey-20 leading-normal ml-6 px-1 rounded text-light-grey text-xs",
                      href: "https://github.com/BuckleScript/bucklescript/releases",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, Util.ReactStuff.s("v" + $$package.dependencies["bs-platform"]))));
}

var Navigation = {
  link: link,
  make: JsDocsLayout$Navigation
};

var overviewNavs = /* array */[/* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Introduction",
      "/js_docs"
    ])];

var apiNavs = /* array */[
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Array2",
      "/js_docs/array-2"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Array",
      "/js_docs/array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Console",
      "/js_docs/console"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Date",
      "/js_docs/date"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Dict",
      "/js_docs/dict"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Exn",
      "/js_docs/exn"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Float",
      "/js_docs/float"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Global",
      "/js_docs/global"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Int",
      "/js_docs/int"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Json",
      "/js_docs/json"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "List",
      "/js_docs/list"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Math",
      "/js_docs/math"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "NullUndefined",
      "/js_docs/null-undefined"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Null",
      "/js_docs/null"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Nullable",
      "/js_docs/nullable"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Obj",
      "/js_docs/obj"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Option",
      "/js_docs/option"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Promise",
      "/js_docs/promise"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Re",
      "/js_docs/re"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Result",
      "/js_docs/result"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "String2",
      "/js_docs/string-2"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "String",
      "/js_docs/string"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayArrayBuffer",
      "/js_docs/typed-array_array-buffer"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayDataView",
      "/js_docs/typed-array_data-view"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayFloat32Array",
      "/js_docs/typed-array_float-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayFloat64Array",
      "/js_docs/typed-array_float-64-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayInt8Array",
      "/js_docs/typed-array_int-8-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayInt16Array",
      "/js_docs/typed-array_int-16-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayInt32Array",
      "/js_docs/typed-array_int-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayTypeS",
      "/js_docs/typed-array_type-s"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayUint8Array",
      "/js_docs/typed-array_uint-8-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayUint8ClampedArray",
      "/js_docs/typed-array_uint-8-clamped-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayUint16Array",
      "/js_docs/typed-array_uint-16-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArrayUint32Array",
      "/js_docs/typed-array_uint-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2ArrayBuffer",
      "/js_docs/typed-array-2_array-buffer"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2DataView",
      "/js_docs/typed-array-2_data-view"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Float32Array",
      "/js_docs/typed-array-2_float-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Float64Array",
      "/js_docs/typed-array-2_float-64-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Int8Array",
      "/js_docs/typed-array-2_int-8-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Int16Array",
      "/js_docs/typed-array-2_int-16-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Int32Array",
      "/js_docs/typed-array-2_int-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2TypeS",
      "/js_docs/typed-array-2_type-s"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Uint8Array",
      "/js_docs/typed-array-2_uint-8-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Uint8ClampedArray",
      "/js_docs/typed-array-2_uint-8-clamped-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Uint16Array",
      "/js_docs/typed-array-2_uint-16-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2Uint32Array",
      "/js_docs/typed-array-2_uint-32-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray2",
      "/js_docs/typed-array-2"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "TypedArray",
      "/js_docs/typed-array"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Types",
      "/js_docs/types"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Undefined",
      "/js_docs/undefined"
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "href"
    ], [
      "Vector",
      "/js_docs/vector"
    ])
];

var categories = /* array */[
  /* record */Caml_chrome_debugger.record([
      "name",
      "items"
    ], [
      "Overview",
      overviewNavs
    ]),
  /* record */Caml_chrome_debugger.record([
      "name",
      "items"
    ], [
      "API",
      apiNavs
    ])
];

function JsDocsLayout$Sidebar$NavUl(Props) {
  var match = Props.isItemActive;
  var isItemActive = match !== undefined ? match : (function (_nav) {
        return false;
      });
  var match$1 = Props.isHidden;
  var isHidden = match$1 !== undefined ? match$1 : false;
  var items = Props.items;
  return React.createElement("ul", {
              className: "ml-2 mt-1 text-main-lighten-15"
            }, Util.ReactStuff.ate(Belt_Array.map(items, (function (m) {
                        var hidden = isHidden ? "hidden" : "block";
                        var match = Curry._1(isItemActive, m);
                        var active = match ? " bg-bs-purple-lighten-95 text-bs-pink rounded -ml-1 px-2 font-bold block " : "";
                        return React.createElement("li", {
                                    key: m[/* name */0],
                                    className: hidden + " leading-5 w-4/5",
                                    tabIndex: 0
                                  }, React.createElement("a", {
                                        className: "hover:text-bs-purple " + active,
                                        href: m[/* href */1]
                                      }, Util.ReactStuff.s(m[/* name */0])));
                      }))));
}

var NavUl = {
  make: JsDocsLayout$Sidebar$NavUl
};

function categoryToElement(isItemActive, category) {
  var tmp = {
    items: category[/* items */1]
  };
  if (isItemActive !== undefined) {
    tmp.isItemActive = Caml_option.valFromOption(isItemActive);
  }
  return React.createElement("div", {
              key: category[/* name */0],
              className: "my-12"
            }, React.createElement($$Text.Overline.make, {
                  children: Util.ReactStuff.s(category[/* name */0])
                }), React.createElement(JsDocsLayout$Sidebar$NavUl, tmp));
}

function JsDocsLayout$Sidebar$ModuleContent(Props) {
  var isItemActive = Props.isItemActive;
  var headers = Props.headers;
  var moduleName = Props.moduleName;
  var match = React.useState((function () {
          return false;
        }));
  var setCollapsed = match[1];
  var collapsed = match[0];
  var items = Belt_Array.map(headers, (function (header) {
          return /* record */Caml_chrome_debugger.record([
                    "name",
                    "href"
                  ], [
                    header,
                    "#" + header
                  ]);
        }));
  var tmp = {
    isHidden: collapsed,
    items: items
  };
  if (isItemActive !== undefined) {
    tmp.isItemActive = Caml_option.valFromOption(isItemActive);
  }
  return React.createElement("div", {
              className: "my-12"
            }, React.createElement($$Text.Overline.make, {
                  children: React.createElement("a", {
                        className: "cursor-pointer hover:text-bs-purple",
                        href: "#",
                        onClick: (function (evt) {
                            evt.preventDefault();
                            return Curry._1(setCollapsed, (function (isCollapsed) {
                                          return !isCollapsed;
                                        }));
                          })
                      }, React.createElement("span", {
                            className: "hidden hover:block"
                          }, Util.ReactStuff.s(collapsed ? "v" : "^")), Util.ReactStuff.s(moduleName))
                }), React.createElement(JsDocsLayout$Sidebar$NavUl, tmp));
}

var ModuleContent = {
  make: JsDocsLayout$Sidebar$ModuleContent
};

function JsDocsLayout$Sidebar(Props) {
  var route = Props.route;
  var headers = Belt_Option.getWithDefault(Belt_Option.map(Js_dict.get(indexData, route), (function (data) {
              return data.headers;
            })), /* array */[]);
  var moduleName = Belt_Option.getWithDefault(Belt_Option.map(Js_dict.get(indexData, route), (function (data) {
              return data.moduleName;
            })), "?");
  var isItemActive = function (navItem) {
    return navItem[/* href */1] === route;
  };
  var match = route !== "/js_docs";
  var partial_arg = isItemActive;
  return React.createElement("div", {
              className: "pl-2 flex w-full justify-center h-auto overflow-y-visible block bg-light-grey",
              style: {
                maxWidth: "17.5rem"
              }
            }, React.createElement("nav", {
                  className: "relative w-48 sticky h-screen block overflow-y-auto scrolling-touch pb-32",
                  style: {
                    top: "4rem"
                  }
                }, match ? React.createElement(JsDocsLayout$Sidebar$ModuleContent, {
                        headers: headers,
                        moduleName: moduleName
                      }) : null, React.createElement("div", undefined, Util.ReactStuff.ate(Belt_Array.map(categories, (function (param) {
                                return categoryToElement(partial_arg, param);
                              }))))));
}

var Sidebar = {
  overviewNavs: overviewNavs,
  apiNavs: apiNavs,
  categories: categories,
  NavUl: NavUl,
  categoryToElement: categoryToElement,
  ModuleContent: ModuleContent,
  make: JsDocsLayout$Sidebar
};

function JsDocsLayout(Props) {
  var match = Props.components;
  var components$1 = match !== undefined ? Caml_option.valFromOption(match) : components;
  var children = Props.children;
  var router = Router.useRouter();
  var minWidth = {
    minWidth: "20rem"
  };
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "max-w-4xl w-full",
                  style: minWidth
                }, React.createElement(JsDocsLayout$Navigation, { }), React.createElement("div", {
                      className: "flex mt-12"
                    }, React.createElement(JsDocsLayout$Sidebar, {
                          route: router.route
                        }), React.createElement("main", {
                          className: "pt-12 w-4/5 static min-h-screen overflow-visible"
                        }, React.createElement(React$1.MDXProvider, {
                              components: components$1,
                              children: React.createElement("div", {
                                    className: "pl-8 max-w-md mb-32 text-lg"
                                  }, children)
                            })))));
}

var Link$1 = 0;

var make = JsDocsLayout;

export {
  Link$1 as Link,
  indexData ,
  Md ,
  $$package ,
  Navigation ,
  Sidebar ,
  make ,
  
}
/*  Not a pure module */