/*
jquery.tmpl.min.js
*/
(function (a) { var r = a.fn.domManip, d = "_tmplitem", q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, b = {}, f = {}, e, p = { key: 0, data: {} }, h = 0, c = 0, l = []; function g(e, d, g, i) { var c = { data: i || (d ? d.data : {}), _wrap: d ? d._wrap : null, tmpl: null, parent: d || null, nodes: [], calls: u, nest: w, wrap: x, html: v, update: t }; e && a.extend(c, e, { nodes: [], parent: d }); if (g) { c.tmpl = g; c._ctnt = c._ctnt || c.tmpl(a, c); c.key = ++h; (l.length ? f : b)[h] = c } return c } a.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (f, d) { a.fn[f] = function (n) { var g = [], i = a(n), k, h, m, l, j = this.length === 1 && this[0].parentNode; e = b || {}; if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) { i[d](this[0]); g = this } else { for (h = 0, m = i.length; h < m; h++) { c = h; k = (h > 0 ? this.clone(true) : this).get(); a.fn[d].apply(a(i[h]), k); g = g.concat(k) } c = 0; g = this.pushStack(g, f, i.selector) } l = e; e = null; a.tmpl.complete(l); return g } }); a.fn.extend({ tmpl: function (d, c, b) { return a.tmpl(this[0], d, c, b) }, tmplItem: function () { return a.tmplItem(this[0]) }, template: function (b) { return a.template(b, this[0]) }, domManip: function (d, l, j) { if (d[0] && d[0].nodeType) { var f = a.makeArray(arguments), g = d.length, i = 0, h; while (i < g && !(h = a.data(d[i++], "tmplItem"))); if (g > 1) f[0] = [a.makeArray(d)]; if (h && c) f[2] = function (b) { a.tmpl.afterManip(this, b, j) }; r.apply(this, f) } else r.apply(this, arguments); c = 0; !e && a.tmpl.complete(b); return this } }); a.extend({ tmpl: function (d, h, e, c) { var j, k = !c; if (k) { c = p; d = a.template[d] || a.template(null, d); f = {} } else if (!d) { d = c.tmpl; b[c.key] = c; c.nodes = []; c.wrapped && n(c, c.wrapped); return a(i(c, null, c.tmpl(a, c))) } if (!d) return []; if (typeof h === "function") h = h.call(c || {}); e && e.wrapped && n(e, e.wrapped); j = a.isArray(h) ? a.map(h, function (a) { return a ? g(e, c, d, a) : null }) : [g(e, c, d, h)]; return k ? a(i(c, null, j)) : j }, tmplItem: function (b) { var c; if (b instanceof a) b = b[0]; while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode)); return c || p }, template: function (c, b) { if (b) { if (typeof b === "string") b = o(b); else if (b instanceof a) b = b[0] || {}; if (b.nodeType) b = a.data(b, "tmpl") || a.data(b, "tmpl", o(b.innerHTML)); return typeof c === "string" ? (a.template[c] = b) : b } return c ? typeof c !== "string" ? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c : a(c)) : null }, encode: function (a) { return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;") } }); a.extend(a.tmpl, { tag: { tmpl: { _default: { $2: "null" }, open: "if($notnull_1){_=_.concat($item.nest($1,$2));}" }, wrap: { _default: { $2: "null" }, open: "$item.calls(_,$1,$2);_=[];", close: "call=$item.calls();_=call._.concat($item.wrap(call,_));" }, each: { _default: { $2: "$index, $value" }, open: "if($notnull_1){$.each($1a,function($2){with(this){", close: "}});}" }, "if": { open: "if(($notnull_1) && $1a){", close: "}" }, "else": { _default: { $1: "true" }, open: "}else if(($notnull_1) && $1a){" }, html: { open: "if($notnull_1){_.push($1a);}" }, "=": { _default: { $1: "$data" }, open: "if($notnull_1){_.push($.encode($1a));}" }, "!": { open: ""} }, complete: function () { b = {} }, afterManip: function (f, b, d) { var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : []; d.call(f, b); m(e); c++ } }); function i(e, g, f) { var b, c = f ? a.map(f, function (a) { return typeof a === "string" ? e.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + d + '="' + e.key + '" $2') : a : i(a, e, a._ctnt) }) : e; if (g) return c; c = c.join(""); c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (f, c, e, d) { b = a(e).get(); m(b); if (c) b = j(c).concat(b); if (d) b = b.concat(j(d)) }); return b ? b : j(c) } function j(c) { var b = document.createElement("div"); b.innerHTML = c; return a.makeArray(b.childNodes) } function o(b) { return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (m, l, j, d, b, c, e) { var i = a.tmpl.tag[j], h, f, g; if (!i) throw "Template command not found: " + j; h = i._default || []; if (c && !/\w$/.test(b)) { b += c; c = "" } if (b) { b = k(b); e = e ? "," + k(e) + ")" : c ? ")" : ""; f = c ? b.indexOf(".") > -1 ? b + c : "(" + b + ").call($item" + e : b; g = c ? f : "(typeof(" + b + ")==='function'?(" + b + ").call($item):(" + b + "))" } else g = f = h.$1 || "null"; d = k(d); return "');" + i[l ? "close" : "open"].split("$notnull_1").join(b ? "typeof(" + b + ")!=='undefined' && (" + b + ")!=null" : "true").split("$1a").join(g).split("$1").join(f).split("$2").join(d ? d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function (d, c, b, a) { a = a ? "," + a + ")" : b ? ")" : ""; return a ? "(" + c + ").call($item" + a : d }) : h.$2 || "") + "_.push('" }) + "');}return _;") } function n(c, b) { c._wrap = i(c, true, a.isArray(b) ? b : [q.test(b) ? b : a(b).html()]).join("") } function k(a) { return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null } function s(b) { var a = document.createElement("div"); a.appendChild(b.cloneNode(true)); return a.innerHTML } function m(o) { var n = "_" + c, k, j, l = {}, e, p, i; for (e = 0, p = o.length; e < p; e++) { if ((k = o[e]).nodeType !== 1) continue; j = k.getElementsByTagName("*"); for (i = j.length - 1; i >= 0; i--) m(j[i]); m(k) } function m(j) { var p, i = j, k, e, m; if (m = j.getAttribute(d)) { while (i.parentNode && (i = i.parentNode).nodeType === 1 && !(p = i.getAttribute(d))); if (p !== m) { i = i.parentNode ? i.nodeType === 11 ? 0 : i.getAttribute(d) || 0 : 0; if (!(e = b[m])) { e = f[m]; e = g(e, b[i] || f[i], null, true); e.key = ++h; b[h] = e } c && o(m) } j.removeAttribute(d) } else if (c && (e = a.data(j, "tmplItem"))) { o(e.key); b[e.key] = e; i = a.data(j.parentNode, "tmplItem"); i = i ? i.key : 0 } if (e) { k = e; while (k && k.key != i) { k.nodes.push(j); k = k.parent } delete e._ctnt; delete e._wrap; a.data(j, "tmplItem", e) } function o(a) { a = a + n; e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent, null, true) } } } function u(a, d, c, b) { if (!a) return l.pop(); l.push({ _: a, tmpl: d, item: this, data: c, options: b }) } function w(d, c, b) { return a.tmpl(a.template(d), c, b, this) } function x(b, d) { var c = b.options || {}; c.wrapped = d; return a.tmpl(a.template(b.tmpl), b.data, c, b.item) } function v(d, c) { var b = this._wrap; return a.map(a(a.isArray(b) ? b.join("") : b).filter(d || "*"), function (a) { return c ? a.innerText || a.textContent : a.outerHTML || s(a) }) } function t() { var b = this.nodes; a.tmpl(null, null, null, this).insertBefore(b[0]); a(b).remove() } })(jQuery)

$(window).load(function () {

  var start = new Date();

  var hasLocalStorage = function () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  };

  var getTiming = function (performanceTiming, eventName, previousEventName) {
    return (performanceTiming[eventName] == 0 || performanceTiming[previousEventName] == 0) ? "n/a" : performanceTiming[eventName] - performanceTiming[previousEventName];
  };

  var getParam = function (key, url) {
    if (arguments.length < 2) url = location.href;
    var lowerCaseKey = key.toLowerCase();
    var lowerCaseUrl = url.toLowerCase();
    if (arguments.length > 0 && lowerCaseKey != "") {
      if (lowerCaseKey == "#") {
        var regex = new RegExp("[#]([^$]*)");
      } else if (lowerCaseKey == "?") {
        var regex = new RegExp("[?]([^#$]*)");
      } else {
        var regex = new RegExp("[?&]" + lowerCaseKey + "=([^&#]*)");
      }
      var results = regex.exec(lowerCaseUrl);
      return (results == null) ? "" : results[1];
    } else {
      lowerCaseUrl = lowerCaseUrl.split("?");
      var results = {};
      if (lowerCaseUrl.length > 1) {
        lowerCaseUrl = lowerCaseUrl[1].split("#");
        if (lowerCaseUrl.length > 1) {
          results["hash"] = lowerCaseUrl[1];
        }
        $.each(lowerCaseUrl[0].split("&"), function (index, item) {
          item = item.split("=");
          results[item[0]] = item[1];
        });
      }
      return results;
    }
  };

  var enableCst = function () {
    localStorage['client-side-timing-enabled'] = 'true';
  };

  var disableCst = function () {
    localStorage['client-side-timing-enabled'] = 'false';
  };

  var isEnabledByDefault = function () {
    var enabledByDefault = (localStorage['client-side-timing-enabled-by-default'] || '');
    return (enabledByDefault.length > 0 && enabledByDefault != '0' && enabledByDefault != 'false');
  };

  var isEnabled = function () {
    var enableCstParam = getParam("enableCST");
    if (enableCstParam.length > 0) {
      if (enableCstParam == '0' || enableCstParam == 'false') {
        disableCst();
        return false;
      }
      enableCst();
      return true;
    }

    var enableCstFromStorage = (localStorage['client-side-timing-enabled'] || '');
    if (enableCstFromStorage.length > 0) {
      return (enableCstFromStorage != '0' && enableCstFromStorage != 'false');
    }

    return isEnabledByDefault();
  };

  var loadDefaults = function () {
    var enabledByDefault = ($('script[cst_enabledbydefault]').length == 1) ? 'true' : 'false';
    var enabledByDefaultStorage = (localStorage['client-side-timing-enabled-by-default'] || '');

    if (enabledByDefaultStorage.length > 0 && enabledByDefaultStorage != enabledByDefault) {
      localStorage.removeItem('client-side-timing-enabled');
    }
    localStorage['client-side-timing-enabled-by-default'] = enabledByDefault;
  }

  setTimeout(function () {

    if (!hasLocalStorage) {
      return;
    }

    var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
    if (performance.timing) {
      loadDefaults();

      if (!isEnabled()) {
        return;
      }

      var timing = performance.timing || {};
      var timingNames = [
        'navigationStart',
        'unloadEventStart',
        'unloadEventEnd',
        'redirectStart',
        'redirectEnd',
        'fetchStart',
        'domainLookupStart',
        'domainLookupEnd',
        'connectStart',
        'connectEnd',
        'secureConnectionStart',
        'requestStart',
        'responseStart',
        'responseEnd',
        'domLoading',
        'domInteractive',
        'domContentLoadedEventStart',
        'domContentLoadedEventEnd',
        'domComplete',
        'loadEventStart',
        'loadEventEnd',
      ];

      var json = {
        'Total': getTiming(timing, 'loadEventEnd', 'navigationStart'),
        'LoadedDateTime': new Date().toString(),
        'Timings': []
      };

      $.each(timingNames, function (i, value) {
        if (i == 0) {
          json.Timings.push({ 'Name': value, 'Duration': 0, 'FromStart': getTiming(timing, value, 'navigationStart'), 'ClassName': 'label' });
        } else {
          if (i == 5) {
            json.Timings.push({ 'Name': 'Network Latency', 'Duration': getTiming(timing, 'responseEnd', 'fetchStart'), 'FromStart': getTiming(timing, value, "navigationStart"), 'ClassName': 'label' });
          }
          if (i >= 5 && i <= 13) { //Network Latency
            json.Timings.push({ 'Name': value, 'Duration': getTiming(timing, value, timingNames[i - 1]), 'FromStart': getTiming(timing, value, 'navigationStart'), 'ClassName': 'labelIndent' });
          } else {
            json.Timings.push({ 'Name': value, 'Duration': getTiming(timing, value, timingNames[i - 1]), 'FromStart': getTiming(timing, value, 'navigationStart'), 'ClassName': 'label' });
          }
        }
      });

      var clientSideTimingMarkup = "<div id='client-side-timing' class='client-side-timing'><div class='client-side-timing-result'><div class='client-side-timing-button' style='display: block;'><span class='number'>${Total}</span><span class='unit'> ms</span></div><div id='client-details' class='client-side-timing-popup'><div class='info'><span class='name'>Client-Side</span><br/><span class='server-time'>${LoadedDateTime}</span></div><div class='client-side-timing-output'><table class='client-side-timing-values'><thead><tr><th></th><th>duration (ms)</th><th class='time-from-start'>from start (ms)</th></tr></thead><tbody><tr><td class='label'>Loading this script</td><td id='time-to-load-script'></td><td></td></tr>{{tmpl($data) 'clientSideTimingResultsTemplate'}}</tbody></table></div></div></div></div>";
      var clientSideTimingResultsMarkup = "{{each Timings}}<tr><td class='${ClassName}'>${Name}</td><td>${Duration}</td><td>${FromStart}</td></tr>{{/each}}";

      $.template(
        "clientSideTimingTemplate",
        clientSideTimingMarkup
      );
      $.template(
        "clientSideTimingResultsTemplate",
        clientSideTimingResultsMarkup
      );
      $.tmpl('clientSideTimingTemplate', json).appendTo('body');

      var styles = $('<style type="text/css"/>');
      styles.append('.client-side-timing div { display: block; }');
      styles.append('.client-side-timing thead { display: table-header-group; }');
      styles.append('.client-side-timing tbody { display: table-row-group; }');
      styles.append('.client-side-timing tr { display: table-row; }');
      styles.append('.client-side-timing td { display: table-cell; }');

      styles.append('.client-side-timing-button { -webkit-border-bottom-right-radius: 10px; -moz-border-radius-bottomright: 10px; border-bottom-right-radius: 10px; border-right: 1px solid #888; z-index: 2147483640; border-bottom: 1px solid #888; background-color: white; padding: 4px 7px; text-align: right; cursor: pointer; }');
      styles.append('.client-side-timing-result .number, .client-side-timing-result .unit { font-family: Consolas, monospace, serif; }');
      styles.append('.client-side-timing-result .number { color: #111; }');
      styles.append('.client-side-timing-result .unit { color: #AAA; }');
      styles.append('.client-side-timing-button-active { background-color: maroon;  }');
      styles.append('.client-side-timing-button-active .number { color: white; font-weight: bold; }');
      styles.append('.client-side-timing-button-active .unit { color: white; font-weight: normal; }');

      if (typeof yepnope == 'undefined') {
        styles.append('.client-side-timing { position: fixed; top: 0px; left: 0px;}');
      } else {
        styles.append('.client-side-timing { position: fixed; top: 22px; left: 0px;}');
      }
      styles.append('.client-side-timing-result { font-family: Helvetica, Arial, sans-serif; color: #555; line-height: 1; font-size: 12px; }');
      styles.append('.client-side-timing .client-side-timing-popup { text-align: left; line-height: 18px; }');
      styles.append('.client-side-timing-result .client-side-timing-popup { top: -1px; max-height: 860px; display: none; z-index: 2147483641; position: absolute; background-color: white; border: 1px solid #AAA; padding: 5px 10px; text-align: left; line-height: 18px; overflow: auto; -moz-box-shadow: 0px 1px 15px #555555; -webkit-box-shadow: 0px 1px 15px #555555; box-shadow: 0px 1px 15px #555555; }');
      styles.append('.client-side-timing .client-side-timing-popup .info { margin-bottom: 3px; padding-bottom: 2px; border-bottom: 1px solid #DDD; text-align: right; }');
      styles.append('.client-side-timing .client-side-timing-popup .info .name { font-size: 110%; font-weight: bold; float: left; }');
      styles.append('.client-side-timing .client-side-timing-popup .info .server-time { font-size: 95%; white-space: nowrap; }');

      styles.append('.client-side-timing-result table, .client-side-timing-result tbody, .client-side-timing-result thead, .client-side-timing-result tr, .client-side-timing-result th, .client-side-timing-result td { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; background-color: transparent; overflow: visible; max-height: none; }');
      styles.append('.client-side-timing-result table { border-collapse: collapse; border-spacing: 0; }');
      styles.append('.client-side-timing-values th { font-size: 95%; padding-bottom: 3px; background-color: white; color: #AAA; text-align: right;}');
      styles.append('.client-side-timing-values th, .client-side-timing-values td { padding-left: 6px; padding-right: 6px; white-space: nowrap; }');

      styles.append('.client-side-timing-values .label { max-width: 275px; color: #555; overflow: hidden; text-overflow: ellipsis; }');
      styles.append('.client-side-timing-values .labelIndent { padding-left: 15px !important; }');
      styles.appendTo('head');

      $('div.client-side-timing-button').click(function () {
        $(this).toggleClass('client-side-timing-button-active');
        $('#client-details').toggle();
        $('#client-details').css("left", $("#client-side-timing").width());
      });

      $('#time-to-load-script').html((new Date() - start));
    }

  }, 0);
});