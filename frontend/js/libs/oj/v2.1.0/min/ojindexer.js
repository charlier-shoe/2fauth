/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,c){(function(){a.Na("oj.ojIndexer",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",version:"1.2",widgetEventPrefix:"oj",options:{data:null},_ComponentCreate:function(){this._super();this.$a()},Lh:function(){var a;this._super();this.U4();this.oz();this.vqa();a=this.qs()[0];this.mn(a);this.sAa(a)},_destroy:function(){var b,c;this._super();this.Dz();this.element.removeClass("oj-component-initnode");
b=this.qs()[0];this.Uo(b);this.DDa(b);c=this.$I();null!=c&&this.cZ&&c.off(a.ug.Q.CHANGE,this.cZ);a.A.unwrap(this.element,g(b))},_setOption:function(a,c){this._superApply(arguments);"data"==a&&this.refresh()},widget:function(){return this.qs()},refresh:function(){this._super();this.element.empty();this.U4();this.oz();this.Bt=null},getNodeBySubId:function(a){var c,e,f,h,k;if(null==a)return this.element?this.element[0]:null;if("oj-indexer-prefix"===a.subId)for(a=a.prefix,c=this.element.children("li"),
e=0;e<c.length;e++){h=c.get(e);if(g(h).attr("data-range")==a)return h;k=g(h).attr("data-includes");if(null!=k)for(k=k.split("|"),f=0;f<k.length;f++)if(k[f]==a)return h}return null},getSubIdByNode:function(a){return null!=a&&(a=g(a).attr("data-range"),null!=a)?{subId:"oj-indexer-prefix",prefix:a}:null},oz:function(){this.element.attr("role","slider").attr("aria-orientation","vertical").attr("aria-describedby",this.element.prop("id")+":desc").attr("aria-valuemin",0).attr("aria-valuemax",Math.max(0,
this.element.children().length-1))},Dz:function(){this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")},vqa:function(){var b,c;b=a.A.Ke()?"ariaTouchInstructionText":"ariaKeyboardInstructionText";c=g(document.createElement("div"));c.prop("id",this.element.prop("id")+":desc");c.addClass("oj-helper-hidden-accessible").text(this.F(b));this.qs().append(c)},qs:function(){null==this.tF&&
(this.tF=this.sqa());return this.tF},sqa:function(){var a;this.oe?a=g(this.oe):(a=g(document.createElement("div")),this.element.parent()[0].replaceChild(a[0],this.element[0]));a.addClass("oj-indexer oj-component");a.prepend(this.element);return a},U4:function(){var a,c,e,f,g,k,l;a=this.$I();if(null!=a){c=this.element;e=a.getIndexablePrefixes();f=a.getPrefixes();a=this.F("indexerOthers");g=this.widget().outerHeight();k=this.eI(e[0],f);c.append(k);k=k.outerHeight();g=Math.floor(g/k);this.qs().removeClass("oj-indexer-abbr");
g=Math.floor((e.length+1)/g)+1;1<g&&this.qs().addClass("oj-indexer-abbr");for(k=1+g;k<e.length;k=k+g+1)1<g?(l=this.Qqa(e,k-g,k-1),c.append(l)):k--,l=e[k],l=this.eI(l,f),c.append(l);e=this.eI(e[e.length-1],f);c.append(e);e=this.eI(a);e.attr("data-others","true");c.append(e)}},eI:function(a,c){var e=g(document.createElement("li"));e.attr("data-range",a).text(a);null!=c&&-1==c.indexOf(a)&&e.addClass("oj-disabled");return e},Qqa:function(a,c,e){var f,h="";f=g(document.createElement("li"));for(f.addClass("oj-indexer-ellipsis").attr("data-range",
a[c+Math.round((e-c)/2)]);c<e;c++)h=h+a[c]+"|";h+=a[e];f.attr("data-includes",h);return f},$a:function(){var b=this,c;this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex",0);this._on(this.element,{click:function(a){b.Kua(a)},keydown:function(a){b.qv(a)},focus:function(a){b.mva(a)},blur:function(a){b.Cua(a)}});c=this.$I();null!=c&&(this.cZ=function(){b.refresh()},c.on(a.ug.Q.CHANGE,this.cZ));this._focusable({applyHighlight:!0,setupHandlers:function(a,c){b.vy=a;b.fv=c}})},Kua:function(a){0===
a.button&&(a=g(a.target),this.SV(a))},mva:function(){this.qs().addClass("oj-focus-ancestor");null==this.Bt?this.Qj(this.element.children("li").first()):this.Qj(this.Bt)},Cua:function(){this.qs().removeClass("oj-focus-ancestor")},qv:function(a){var c,e=!1;switch(a.keyCode){case 38:c=this.Bt.prev();break;case 40:c=this.Bt.next();break;case 13:this.SV(this.Bt),e=!0}null!=c&&0<c.length&&(e=!0,this.Qj(c));e&&a.preventDefault()},Qj:function(a){null!=this.Bt&&this.fv(this.Bt);this.vy(a);this.HDa(a);this.Bt=
a},$I:function(){var a=this.option("data");if(null!=a&&(void 0==a.setPrefix||void 0==a.getIndexablePrefixes||void 0==a.getPrefixes))throw"Invalid IndexerModel";return a},SV:function(b){var c=b.attr("data-range");b.attr("data-others")&&(c=a.ug.PREFIX_OTHERS);this.TV(c)},TV:function(a){var c=this,e;this.$I().setPrefix(a).then(function(a){null!=a&&(e=c.bg(a),null!=e&&c.Qj(e))})},HDa:function(b){var c,e="";c=b.attr("data-includes");null!=c?(c=c.split("|"),0<c.length&&(e=this.F("ariaInBetweenText",{first:c[0],
second:c[c.length-1]}))):(c=b.attr("data-range"),e=c===a.ug.PREFIX_OTHERS?this.F("ariaOthersLabel"):c);b.hasClass("oj-disabled")&&(e=e+". "+this.F("ariaDisabledLabel"));this.element.attr("aria-valuetext",e);this.element.attr("aria-valuenow",b.index())},bg:function(a){var c,e,f,h,k;c=this.element.children();for(e=0;e<c.length;e++)if(f=c.get(e),h=g(f).attr("data-range"),k=g(f).attr("data-includes"),null!=h&&h==a||null!=k&&-1<k.indexOf(a))return g(f);return null},Uo:function(b){b&&this.Ig&&a.A.om(b,
this.Ig)},mn:function(b){b&&(null==this.Ig&&(this.Ig=this.Gg.bind(this)),a.A.Pk(b,this.Ig))},DDa:function(a){g(a).off("panstart panmove panend")},sAa:function(a){var d=this,e,f,h,k,l,m,r,t,s,n,p,q;e={recognizers:[[c.Pan,{direction:c.DIRECTION_VERTICAL}]]};g(a).hj(e).on("panstart",function(a){f=a.gesture.target;h=d.element[0].getBoundingClientRect().left+5;k=f.getBoundingClientRect().top;d.SV(g(f));l=f;m=f.getAttribute("data-range");r=k}).on("panmove",function(a){t=r;r=k+a.gesture.deltaY;f=document.elementFromPoint(h,
r);null!=f&&(s=r-t,l==f?(n=f.getAttribute("data-includes"),null!=n&&(n=n.split("|"),p=n.indexOf(m),q=null,0<s&&p<n.length-1?q=n[p+1]:0>s&&0<p&&(q=n[p-1]),null!=q&&(m=q,d.TV(q)))):f.hasAttribute("data-range")&&(n=f.getAttribute("data-includes"),q=null,null!=n&&(0<s&&f==l.nextElementSibling?q=n[0]:0>s&&f==l.previousElementSibling&&(q=n[n.length-1])),null==q&&(q=f.getAttribute("data-range")),l=f,m=q,d.TV(m)))}).on("panend",function(){q=r=m=l=null})},Gg:function(a,c){0<a&&0<c&&this.refresh()}})})();a.Gi=
function(a){this.Ga=a;this.Init()};o_("ListViewIndexerModel",a.Gi,a);a.b.ta(a.Gi,a.pj,"oj.ListViewIndexerModel");a.Gi.prototype.getIndexablePrefixes=function(){return this.Ga.Y.F("indexerCharacters").split("|")};a.b.g("ListViewIndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Gi.prototype.getIndexablePrefixes});a.Gi.prototype.getPrefixes=function(){null==this.jX&&(this.jX=this.Hsa());return this.jX};a.b.g("ListViewIndexerModel.prototype.getPrefixes",{getPrefixes:a.Gi.prototype.getPrefixes});
a.Gi.prototype.Hsa=function(){var a=[],c=this.Ga.RC();if(null!=c)for(var e=this.getIndexablePrefixes(),f=0;f<e.length;f++){var h=e[f];c.each(function(){if(0==g(this).text().indexOf(h))return a.push(h),!1})}return a};a.Gi.prototype.setPrefix=function(b){return b==a.ug.PREFIX_OTHERS?this.nCa():this.pCa(b)};a.b.g("ListViewIndexerModel.prototype.setPrefix",{setPrefix:a.Gi.prototype.setPrefix});a.Gi.prototype.nCa=function(){var b,c=this,e,f,h,k,l;b=this.getIndexablePrefixes();return new Promise(function(m){e=
null;f=c.Ga.RC();null!=f&&f.each(function(){h=g(this).text();for(k=0;k<b.length;k++)if(l=b[k],0==h.indexOf(l))return!0;e=this;return!1});e?(c.Ga.Aba(e),m(a.ug.PREFIX_OTHERS)):m(null)})};a.Gi.prototype.pCa=function(a){var c,e,f=this,g=null,k;c=this.getIndexablePrefixes();e=c.indexOf(a);return new Promise(function(l){if(-1==e)l(null);else{for(;e<c.length;){a=c[e];k=f.qsa(a);if(null!=k){f.Ga.Aba(k);g=a;break}e++}l(g)}})};a.Gi.prototype.qsa=function(a){var c,e,f;e=this.Ga.RC();null!=e&&e.each(function(){f=
g(this).text();if(0==f.indexOf(a))return c=this,!1});return c};a.Gi.prototype.Dea=function(){this.jX=null;this.handleEvent(a.ug.Q.CHANGE,{})};a.ug=function(){};o_("IndexerModel",a.ug,a);a.ug.PREFIX_OTHERS="__others__";o_("IndexerModel.PREFIX_OTHERS",a.ug.PREFIX_OTHERS,a);a.ug.Q={CHANGE:"change"};o_("IndexerModel.EventType",a.ug.Q,a);a.ug.prototype.setPrefix=function(){};a.b.g("IndexerModel.prototype.setPrefix",{setPrefix:a.ug.prototype.setPrefix});a.ug.prototype.getIndexablePrefixes=function(){};
a.b.g("IndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.ug.prototype.getIndexablePrefixes});a.ug.prototype.getPrefixes=function(){};a.b.g("IndexerModel.prototype.getPrefixes",{getPrefixes:a.ug.prototype.getPrefixes});a.Components.Ua("ojIndexer","baseComponent",{properties:{data:{}},methods:{getNodeBySubId:{},getSubIdByNode:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojIndexer"}});a.Components.register("oj-indexer",a.Components.getMetadata("ojIndexer"))});