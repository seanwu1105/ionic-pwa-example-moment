(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/T4s":function(t,i,e){"use strict";e.d(i,"a",function(){return h});var a=e("mrSG"),n=e("2Vo4"),o=e("JX91"),p=e("/uUt"),s=e("vkgz"),c=e("1Bn7"),l=e("KJy6"),r=e("fXoL"),m=e("ofXK"),d=e("TEn/"),x=e("9A8T");function f(t,i){1&t&&r.Rb(0,"ion-icon",3)}function u(t,i){if(1&t){const t=r.Wb();r.Vb(0,"ion-img",4),r.dc("ionImgDidLoad",function(i){return r.qc(t),r.fc().onImageLoaded(i)})("ionError",function(){return r.qc(t),r.fc().onImageError()}),r.gc(1,"ngrxPush"),r.Ub()}if(2&t){const t=r.fc();r.Gb("src",r.hc(1,1,t.src$))}}function g(t,i){1&t&&r.jc(0,0,["*ngIf","!isImageError"])}const b=["*"];let h=(()=>{class t{constructor(){this._src$=new n.a(void 0),this.src$=this._src$.pipe(Object(o.a)(v),Object(l.c)(),Object(p.a)(),Object(s.a)(()=>this.isImageError=!1)),this.isImageError=!1}set src(t){this._src$.next(t)}onImageLoaded(t){return Object(a.a)(this,void 0,void 0,function*(){const i=t.target;return((t=300)=>Object(c.i)().duration(t).iterations(1).fromTo("opacity","0","1"))().addElement(i).play()})}onImageError(){this.isImageError=!0}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Kb({type:t,selectors:[["app-image"]],inputs:{src:"src"},ngContentSelectors:b,decls:3,vars:3,consts:[["src","/assets/icons/broken-image.svg","color","danger","size","large",4,"ngIf"],[3,"ionImgDidLoad","ionError",4,"ngIf"],[4,"ngIf"],["src","/assets/icons/broken-image.svg","color","danger","size","large"],[3,"ionImgDidLoad","ionError"]],template:function(t,i){1&t&&(r.kc(),r.xc(0,f,1,0,"ion-icon",0),r.xc(1,u,2,3,"ion-img",1),r.xc(2,g,1,0,"ng-content",2)),2&t&&(r.lc("ngIf",i.isImageError),r.Fb(1),r.lc("ngIf",!i.isImageError),r.Fb(1),r.lc("ngIf",!i.isImageError))},directives:[m.l,d.n,d.o],pipes:[x.b],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;-o-object-fit:cover;object-fit:cover;position:relative;-webkit-animation:loading 2.5s ease-in-out infinite alternate;animation:loading 2.5s ease-in-out infinite alternate}ion-img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit;opacity:0}ion-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%)}"]}),t})();const v="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},"9A8T":function(t,i,e){"use strict";e.d(i,"a",function(){return u}),e.d(i,"b",function(){return f}),e.d(i,"c",function(){return g});var a=e("fXoL"),n=e("XNiG"),o=e("EY2u"),p=e("HDdC"),s=e("Cfvw"),c=e("/uUt"),l=e("eIep"),r=e("vkgz"),m=e("JIr8");function d(t){const i=new n.a,e=i.pipe(Object(c.a)()).pipe(Object(l.a)(i=>{if(null==i)return t.updateViewContextObserver.next(i),t.render(),o.a;const e=(a=i)&&(a instanceof p.a||"function"==typeof a.lift&&"function"==typeof a.subscribe)?i:Object(s.a)(i);var a;return t.resetContextObserver.next(),t.render(),e.pipe(Object(c.a)(),Object(r.a)(t.updateViewContextObserver),Object(r.a)(()=>t.render()),Object(m.a)(t=>o.a))}));return{nextPotentialObservable(t){i.next(t)},subscribe:()=>e.subscribe()}}function x(t){return function(){t.ngZone instanceof a.E?t.cdRef.markForCheck():t.cdRef.detectChanges()}}let f=(()=>{class t{constructor(t,i){this.resetContextObserver={next:()=>this.renderedValue=void 0},this.updateViewContextObserver={next:t=>this.renderedValue=t},this.cdAware=d({render:x({cdRef:t,ngZone:i}),updateViewContextObserver:this.updateViewContextObserver,resetContextObserver:this.resetContextObserver}),this.subscription=this.cdAware.subscribe()}transform(t){return this.cdAware.nextPotentialObservable(t),this.renderedValue}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(a.bc(),a.Qb(a.E))},t.\u0275pipe=a.Pb({name:"ngrxPush",type:t,pure:!1}),t})(),u=(()=>{class t{constructor(t,i,e,a){this.templateRef=e,this.viewContainerRef=a,this.ViewContext={$implicit:void 0,ngrxLet:void 0,$error:!1,$complete:!1},this.resetContextObserver={next:()=>{this.embeddedView&&(this.ViewContext.$implicit=void 0,this.ViewContext.ngrxLet=void 0,this.ViewContext.$error=!1,this.ViewContext.$complete=!1)}},this.updateViewContextObserver={next:t=>{this.embeddedView||this.createEmbeddedView(),this.ViewContext.$implicit=t,this.ViewContext.ngrxLet=t},error:t=>{this.embeddedView||this.createEmbeddedView(),this.ViewContext.$error=!0},complete:()=>{this.embeddedView||this.createEmbeddedView(),this.ViewContext.$complete=!0}},this.cdAware=d({render:x({cdRef:t,ngZone:i}),resetContextObserver:this.resetContextObserver,updateViewContextObserver:this.updateViewContextObserver}),this.subscription=this.cdAware.subscribe()}static ngTemplateContextGuard(t,i){return!0}set ngrxLet(t){this.cdAware.nextPotentialObservable(t)}createEmbeddedView(){this.embeddedView=this.viewContainerRef.createEmbeddedView(this.templateRef,this.ViewContext)}ngOnDestroy(){this.subscription.unsubscribe(),this.viewContainerRef.clear()}}return t.\u0275fac=function(i){return new(i||t)(a.Qb(a.i),a.Qb(a.E),a.Qb(a.P),a.Qb(a.T))},t.\u0275dir=a.Lb({type:t,selectors:[["","ngrxLet",""]],inputs:{ngrxLet:"ngrxLet"}}),t})(),g=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({}),t})()},GREk:function(t,i,e){"use strict";e.d(i,"a",function(){return x});var a=e("mrSG"),n=e("VfN6"),o=e("jtHE"),p=e("SxV6"),s=e("bOdf"),c=e("vkgz"),l=e("q7zd"),r=e("fXoL"),m=e("TEn/"),d=e("QPBi");let x=(()=>{let t=class{constructor(t,i){this.toastController=t,this.translocoService=i,this.text$=new o.a(1),this.presentToast$=this.translocoService.selectTranslate("message.copiedToClipboard").pipe(Object(p.a)(),Object(s.a)(t=>this.toastController.create({message:t,duration:2e3})),Object(s.a)(t=>t.present()))}set text(t){t&&this.text$.next(t)}copy(){return this.text$.pipe(Object(c.a)(t=>{const i=i=>{var e;null===(e=i.clipboardData)||void 0===e||e.setData("text",t),i.preventDefault()};document.addEventListener("copy",i,!1),document.execCommand("copy"),document.removeEventListener("copy",i,!1)}),Object(l.a)(this.presentToast$),Object(n.b)(this)).subscribe()}};return t.\u0275fac=function(i){return new(i||t)(r.Qb(m.J),r.Qb(d.e))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-copy-clipboard"]],inputs:{text:"text"},decls:2,vars:0,consts:[["fill","clear",3,"click"],["name","copy-outline","slot","icon-only"]],template:function(t,i){1&t&&(r.Vb(0,"ion-button",0),r.dc("click",function(){return i.copy()}),r.Rb(1,"ion-icon",1),r.Ub())},directives:[m.d,m.n],styles:[""]}),t=Object(a.b)([Object(n.a)()],t),t})()},M57b:function(t,i,e){"use strict";let a=e("nEjF");t.exports=new a(e("NBjG"))},NBjG:function(t,i){t.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}},PCNd:function(t,i,e){"use strict";e.d(i,"a",function(){return d});var a=e("ofXK"),n=e("tk/3"),o=e("3Pt+"),p=e("TEn/"),s=e("QPBi"),c=e("pNjf"),l=e("9A8T"),r=(e("zXXW"),e("GREk"),e("j86x"),e("/T4s"),e("fXoL"));const m=[a.c,o.a,o.d,p.D,n.b,l.c,s.d,c.b];let d=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({imports:[m,a.c,o.a,o.d,p.D,n.b,l.c,s.d,c.b]}),t})()},j86x:function(t,i,e){"use strict";e.d(i,"a",function(){return p});var a=e("M57b"),n=e.n(a),o=e("fXoL");let p=(()=>{class t{transform(t){return n.a.getExtension(t)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=o.Pb({name:"extension",type:t,pure:!0}),t})()},nEjF:function(t,i,e){"use strict";function a(){this._types=Object.create(null),this._extensions=Object.create(null);for(let t=0;t<arguments.length;t++)this.define(arguments[t]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}a.prototype.define=function(t,i){for(let e in t){let a=t[e].map(function(t){return t.toLowerCase()});e=e.toLowerCase();for(let t=0;t<a.length;t++){const n=a[t];if("*"!==n[0]){if(!i&&n in this._types)throw new Error('Attempt to change mapping for "'+n+'" extension from "'+this._types[n]+'" to "'+e+'". Pass `force=true` to allow this, otherwise remove "'+n+'" from the list of extensions for "'+e+'".');this._types[n]=e}}if(i||!this._extensions[e]){const t=a[0];this._extensions[e]="*"!==t[0]?t:t.substr(1)}}},a.prototype.getType=function(t){let i=(t=String(t)).replace(/^.*[/\\]/,"").toLowerCase(),e=i.replace(/^.*\./,"").toLowerCase();return(e.length<i.length-1||!(i.length<t.length))&&this._types[e]||null},a.prototype.getExtension=function(t){return(t=/^\s*([^;\s]*)/.test(t)&&RegExp.$1)&&this._extensions[t.toLowerCase()]||null},t.exports=a},q7zd:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var a=e("bOdf");function n(t,i){return Object(a.a)(()=>t,i)}},zXXW:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var a=e("fXoL"),n=e("TEn/");let o=(()=>{class t{constructor(t){this.navController=t}back(){this.navController.back()}}return t.\u0275fac=function(i){return new(i||t)(a.Qb(n.F))},t.\u0275cmp=a.Kb({type:t,selectors:[["app-back-button"]],inputs:{color:"color",standalone:"standalone"},decls:2,vars:4,consts:[[3,"color","fill","click"],["name","arrow-back-outline","slot","icon-only"]],template:function(t,i){1&t&&(a.Vb(0,"ion-button",0),a.dc("click",function(){return i.back()}),a.Rb(1,"ion-icon",1),a.Ub()),2&t&&(a.Ib("standalone",i.standalone),a.lc("color",i.color)("fill",i.standalone?"clear":void 0))},directives:[n.d,n.n],styles:[".standalone[_ngcontent-%COMP%]{width:48px;height:48px;--border-radius:50%;--padding-end:0;--padding-start:0}"]}),t})()}}]);