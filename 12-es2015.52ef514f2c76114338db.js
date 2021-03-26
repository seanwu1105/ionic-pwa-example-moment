(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{BJdS:function(e,i,t){"use strict";t.d(i,"a",function(){return k});var o=t("NXyV"),r=t("cp0P"),n=t("bOdf"),s=t("wO+i"),a=t("UXun"),c=t("lJxs"),l=t("SxV6"),d=t("mrSG");function u(e){return Object(d.a)(this,void 0,void 0,function*(){const i=yield crypto.subtle.digest("SHA-256",yield e.arrayBuffer());return[...new Uint8Array(i)].map(e=>e.toString(16).padStart(2,"0")).join("")})}function b(){return Object(d.a)(this,void 0,void 0,function*(){try{return yield function(){return Object(d.a)(this,void 0,void 0,function*(){return new Promise((e,i)=>{navigator.geolocation.getCurrentPosition(i=>e(i),e=>i(e),{enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4})})})}()}catch(e){return}})}var m=t("K4CH"),h=t.n(m);class p extends Error{constructor(){super(...arguments),this.name=p.name}}var w=t("KJy6"),f=t("fI17"),g=t.n(f);const v={version:0,type:"object",properties:{id:{type:"string",primary:!0},timestamp:{type:"number"},geolocationPosition:{type:"object",properties:{latitude:{type:"number"},longitude:{type:"number"}},required:["latitude","longitude"]},userAgent:{type:"string"}},indexes:["timestamp"],required:["timestamp","userAgent"],attachments:{encrypted:!1}};let y=(()=>{class e{constructor(i){this.document=i,this.id=this.document.id,this.mimeType$=Object(o.a)(()=>Object(d.a)(this,void 0,void 0,function*(){return this.getAttachment(e.PHOTO_ATTACHMENT_ID)})).pipe(Object(w.c)(p),Object(s.a)("type")),this.timestamp=this.document.timestamp,this.geolocationPosition=this.document.geolocationPosition,this.photo$=Object(o.a)(()=>this.getAttachment(e.PHOTO_ATTACHMENT_ID).getData()).pipe(Object(w.c)(p)),this.photoUrl$=this.photo$.pipe(Object(c.a)(e=>URL.createObjectURL(e)),Object(a.a)({bufferSize:1,refCount:!0})),this.thumbnailUrl$=this.mimeType$.pipe(Object(n.a)(i=>Object(d.a)(this,void 0,void 0,function*(){const t=this.document.getAttachment(e.THUMBNAIL_ATTACHMENT_ID);if(t)return t.getData();const o=yield function({image:e,width:i}){return Object(d.a)(this,void 0,void 0,function*(){return new Promise((t,o)=>{new g.a(e,{quality:.6,width:i,success(e){t(e)},error(e){o(e)}})})})}({image:yield this.getAttachment(e.PHOTO_ATTACHMENT_ID).getData(),width:300});return yield this.document.putAttachment({id:e.THUMBNAIL_ATTACHMENT_ID,data:o,type:i},!0),o})),Object(c.a)(e=>URL.createObjectURL(e)),Object(w.c)(p),Object(a.a)({bufferSize:1,refCount:!0})),this.userAgent=new h.a(this.document.userAgent).getResult(),this.metaJson=JSON.stringify(this.document.toJSON())}getAttachment(e){const i=this.document.getAttachment(e);if(i)return i;throw new p(`Cannot get the attachment with ID: ${e}`)}}return e.PHOTO_ATTACHMENT_ID="original",e.THUMBNAIL_ATTACHMENT_ID="thumbnail",e})();var O=t("fXoL"),x=t("aNgo");let k=(()=>{class e{constructor(e){this.database=e,this.collection$=this.database.main$.pipe(Object(n.a)(e=>e.addCollections({[T]:{schema:v}})),Object(s.a)(T),Object(a.a)({bufferSize:1,refCount:!0})),this.all$=this.collection$.pipe(Object(n.a)(e=>e.find().sort({timestamp:"desc"}).$),Object(c.a)(e=>e.map(e=>new y(e))))}add$(e){return Object(o.a)(()=>Object(r.a)([this.collection$.pipe(Object(l.a)()),u(e),b()])).pipe(Object(n.a)(([e,i,t])=>e.atomicUpsert({id:i,timestamp:Date.now(),geolocationPosition:t?{latitude:t.coords.latitude,longitude:t.coords.longitude}:void 0,userAgent:navigator.userAgent})),Object(n.a)(i=>i.putAttachment({id:y.PHOTO_ATTACHMENT_ID,data:e,type:e.type},!0)),Object(c.a)(e=>e.doc))}remove$(e){return this.collection$.pipe(Object(n.a)(i=>i.bulkRemove([e])))}}return e.\u0275fac=function(i){return new(i||e)(O.Zb(x.a))},e.\u0275prov=O.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const T="moments"},K4CH:function(e,i,t){var o;!function(r,n){"use strict";var s="model",a="name",c="type",l="vendor",d="version",u="mobile",b="tablet",m="smarttv",h={extend:function(e,i){var t={};for(var o in e)t[o]=i[o]&&i[o].length%2==0?i[o].concat(e[o]):e[o];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},p={rgx:function(e,i){for(var t,o,r,n,s,a,c=0;c<i.length&&!s;){var l=i[c],d=i[c+1];for(t=o=0;t<l.length&&!s;)if(s=l[t++].exec(e))for(r=0;r<d.length;r++)a=s[++o],"object"==typeof(n=d[r])&&n.length>0?2==n.length?this[n[0]]="function"==typeof n[1]?n[1].call(this,a):n[1]:3==n.length?this[n[0]]="function"!=typeof n[1]||n[1].exec&&n[1].test?a?a.replace(n[1],n[2]):void 0:a?n[1].call(this,a,n[2]):void 0:4==n.length&&(this[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):void 0):this[n]=a||void 0;c+=2}},str:function(e,i){for(var t in i)if("object"==typeof i[t]&&i[t].length>0){for(var o=0;o<i[t].length;o++)if(h.has(i[t][o],e))return"?"===t?void 0:t}else if(h.has(i[t],e))return"?"===t?void 0:t;return e}},w={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,d],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,d],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],d],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[a,"IE"],d],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],d],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],d],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],d],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],d],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],d],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],d],[/(whale)\/([\w\.]+)/i],[[a,"Whale"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[a,d],[/(QQ)\/([\d\.]+)/i],[a,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[a,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[a,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[a,"Coc Coc"],d],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,d],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],d],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[a,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[d,[a,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[d,a],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[d,p.str,w.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",h.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",h.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",h.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,l,[c,b]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[l,"Apple"],[c,b]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[l,"Apple"],[c,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,s,[c,b]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[s,[l,"Amazon"],[c,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[s,p.str,w.device.amazon.model],[l,"Amazon"],[c,u]],[/android.+aft([\w])(\sbuild\/|\))/i],[s,[l,"Amazon"],[c,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,l,[c,u]],[/\((ip[honed|\s\w*]+);/i],[s,[l,"Apple"],[c,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,s,[c,u]],[/\(bb10;\s(\w+)/i],[s,[l,"BlackBerry"],[c,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[l,"Asus"],[c,b]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[s,"Xperia Tablet"],[c,b]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[l,"Sony"],[c,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,s,[c,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[l,"Nvidia"],[c,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[l,"Sony"],[c,"console"]],[/(sprint\s(\w+))/i],[[l,p.str,w.device.sprint.vendor],[s,p.str,w.device.sprint.model],[c,u]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[s,/_/g," "],[c,u]],[/(nexus\s9)/i],[s,[l,"HTC"],[c,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[s,[l,"Huawei"],[c,u]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[l,"Huawei"],[c,b]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,s,[c,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[l,"Microsoft"],[c,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[l,"Microsoft"],[c,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[l,"Motorola"],[c,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[l,"Motorola"],[c,b]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,h.trim],[s,h.trim],[c,m]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[l,"Samsung"],[c,m]],[/\(dtv[\);].+(aquos)/i],[s,[l,"Sharp"],[c,m]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],s,[c,b]],[/smart-tv.+(samsung)/i],[l,[c,m],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],s,[c,u]],[/sie-(\w*)/i],[s,[l,"Siemens"],[c,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],s,[c,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[l,"Acer"],[c,b]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[l,"LG"],[c,b]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],s,[c,b]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[l,"LG"],s,[c,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[l,"LG"],[c,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[l,s,[c,b]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[l,"Lenovo"],[c,b]],[/(lenovo)[_\s-]?([\w-]+)/i],[l,s,[c,u]],[/linux;.+((jolla));/i],[l,s,[c,u]],[/((pebble))app\/[\d\.]+\s/i],[l,s,[c,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,s,[c,u]],[/crkey/i],[[s,"Chromecast"],[l,"Google"],[c,m]],[/android.+;\s(glass)\s\d/i],[s,[l,"Google"],[c,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[l,"Google"],[c,b]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[s,[l,"Google"],[c,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[s,/_/g," "],[l,"Xiaomi"],[c,u]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[s,/_/g," "],[l,"Xiaomi"],[c,b]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[l,"Meizu"],[c,u]],[/(mz)-([\w-]{2,})/i],[[l,"Meizu"],s,[c,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[l,"OnePlus"],[c,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[l,"RCA"],[c,b]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[s,[l,"Dell"],[c,b]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[l,"Verizon"],[c,b]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[l,"Barnes & Noble"],s,[c,b]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[l,"NuVision"],[c,b]],[/android.+;\s(k88)\sbuild/i],[s,[l,"ZTE"],[c,b]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[l,"Swiss"],[c,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[l,"Swiss"],[c,b]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[l,"Zeki"],[c,b]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],s,[c,b]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[l,"Insignia"],[c,b]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[l,"NextBook"],[c,b]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],s,[c,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],s,[c,u]],[/android.+;\s(PH-1)\s/i],[s,[l,"Essential"],[c,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[l,"Envizen"],[c,b]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,s,[c,b]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[s,[l,"MachSpeed"],[c,b]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,s,[c,b]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[l,"Rotor"],[c,b]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,s,[c,b]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[s,[c,u]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[s,[c,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,h.lowerize],l,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[l,"Generic"]],[/(phone)/i],[[c,u]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,a]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[a,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[d,p.str,w.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[d,p.str,w.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],d],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],d],[/crkey\/([\d\.]+)/i],[d,[a,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,d],[/(haiku)\s(\w+)/i],[a,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,d]]},g=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof g))return new g(e,i).getResult();var t=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=i?h.extend(f,i):f;return this.getBrowser=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.browser),e.major=h.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return p.rgx.call(e,t,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return p.rgx.call(e,t,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};g.VERSION="0.7.24",g.BROWSER={NAME:a,MAJOR:"major",VERSION:d},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:l,TYPE:c,CONSOLE:"console",MOBILE:u,SMARTTV:m,TABLET:b,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:d},g.OS={NAME:a,VERSION:d},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=g),i.UAParser=g):void 0===(o=(function(){return g}).call(i,t,i,e))||(e.exports=o);var v=r&&(r.jQuery||r.Zepto);if(v&&!v.ua){var y=new g;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var t in i)v.ua[t]=i[t]}}}("object"==typeof window?window:this)},fI17:function(e,i,t){e.exports=function(){"use strict";function e(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function t(){return(t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}var n=function(e,i,t){return function(e){"undefined"!=typeof window&&function(i){var t=i.HTMLCanvasElement&&i.HTMLCanvasElement.prototype,o=i.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),r=o&&i.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),n=i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,s=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,a=(o||n)&&i.atob&&i.ArrayBuffer&&i.Uint8Array&&function(e){var i,t,a,c,l,d,u,b,m;if(!(i=e.match(s)))throw new Error("invalid data URI");for(t=i[2]?i[1]:"text/plain"+(i[3]||";charset=US-ASCII"),a=!!i[4],c=e.slice(i[0].length),l=a?atob(c):decodeURIComponent(c),d=new ArrayBuffer(l.length),u=new Uint8Array(d),b=0;b<l.length;b+=1)u[b]=l.charCodeAt(b);return o?new Blob([r?u:d],{type:t}):((m=new n).append(d),m.getBlob(t))};i.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(e,i,o){var r=this;setTimeout(function(){e(o&&t.toDataURL&&a?a(r.toDataURL(i,o)):r.mozGetAsFile("blob",i))})}:t.toDataURL&&a&&(t.toBlob=t.msToBlob?function(e,i,o){var r=this;setTimeout(function(){e((i&&"image/png"!==i||o)&&t.toDataURL&&a?a(r.toDataURL(i,o)):r.msToBlob(i))})}:function(e,i,t){var o=this;setTimeout(function(){e(a(o.toDataURL(i,t)))})})),e.exports?e.exports=a:i.dataURLtoBlob=a}(window)}(t={path:void 0,exports:{},require:function(e,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),t.exports}(),s={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},a="undefined"!=typeof window&&void 0!==window.document?window:{},c=Array.prototype.slice,l=/^image\/.+$/;function d(e){return l.test(e)}var u=String.fromCharCode,b=a.btoa;var m=/\.\d*(?:0|9){12}\d*$/;function h(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return m.test(e)?Math.round(e*i)/i:e}var p=a.ArrayBuffer,w=a.FileReader,f=a.URL||a.webkitURL,g=/\.\w+$/,v=a.Compressor;return function(){function i(e,t){(function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")})(this,i),this.file=e,this.image=new Image,this.options=r(r({},s),t),this.aborted=!1,this.result=null,this.init()}return o=i,m=[{key:"noConflict",value:function(){return window.Compressor=v,i}},{key:"setDefaults",value:function(e){t(s,e)}}],(l=[{key:"init",value:function(){var e,i=this,o=this.file,r=this.options;if(e=o,"undefined"!=typeof Blob&&(e instanceof Blob||"[object Blob]"===Object.prototype.toString.call(e))){var n=o.type;if(d(n))if(f&&w)if(p||(r.checkOrientation=!1),f&&!r.checkOrientation)this.load({url:f.createObjectURL(o)});else{var s=new w,a=r.checkOrientation&&"image/jpeg"===n;this.reader=s,s.onload=function(e){var r=e.target.result,s={};if(a){var l=function(e){var i,t=new DataView(e);try{var o,r,n;if(255===t.getUint8(0)&&216===t.getUint8(1))for(var s=t.byteLength,a=2;a+1<s;){if(255===t.getUint8(a)&&225===t.getUint8(a+1)){r=a;break}a+=1}if(r){var c=r+10;if("Exif"===function(e,i,t){var o,r="";for(t+=i,o=i;o<t;o+=1)r+=u(e.getUint8(o));return r}(t,r+4,4)){var l=t.getUint16(c);if(((o=18761===l)||19789===l)&&42===t.getUint16(c+2,o)){var d=t.getUint32(c+4,o);d>=8&&(n=c+d)}}}if(n){var b,m,h=t.getUint16(n,o);for(m=0;m<h;m+=1)if(274===t.getUint16(b=n+12*m+2,o)){i=t.getUint16(b+=8,o),t.setUint16(b,1,o);break}}}catch(p){i=1}return i}(r);l>1||!f?(s.url=function(e,i){for(var t=[],o=new Uint8Array(e);o.length>0;)t.push(u.apply(null,(r=o.subarray(0,8192),Array.from?Array.from(r):c.call(r)))),o=o.subarray(8192);var r;return"data:".concat(i,";base64,").concat(b(t.join("")))}(r,n),l>1&&t(s,function(e){var i=0,t=1,o=1;switch(e){case 2:t=-1;break;case 3:i=-180;break;case 4:o=-1;break;case 5:i=90,o=-1;break;case 6:i=90;break;case 7:i=90,t=-1;break;case 8:i=-90}return{rotate:i,scaleX:t,scaleY:o}}(l))):s.url=f.createObjectURL(o)}else s.url=r;i.load(s)},s.onabort=function(){i.fail(new Error("Aborted to read the image with FileReader."))},s.onerror=function(){i.fail(new Error("Failed to read the image with FileReader."))},s.onloadend=function(){i.reader=null},a?s.readAsArrayBuffer(o):s.readAsDataURL(o)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var i=this,t=this.file,o=this.image;o.onload=function(){i.draw(r(r({},e),{},{naturalWidth:o.naturalWidth,naturalHeight:o.naturalHeight}))},o.onabort=function(){i.fail(new Error("Aborted to load the image."))},o.onerror=function(){i.fail(new Error("Failed to load the image."))},a.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(a.navigator.userAgent)&&(o.crossOrigin="anonymous"),o.alt=t.name,o.src=e.url}},{key:"draw",value:function(e){var i=this,t=e.naturalWidth,o=e.naturalHeight,r=e.rotate,s=void 0===r?0:r,a=e.scaleX,c=void 0===a?1:a,l=e.scaleY,u=void 0===l?1:l,b=this.file,m=this.image,p=this.options,w=document.createElement("canvas"),f=w.getContext("2d"),g=t/o,v=Math.abs(s)%180==90,y=Math.max(p.maxWidth,0)||1/0,O=Math.max(p.maxHeight,0)||1/0,x=Math.max(p.minWidth,0)||0,k=Math.max(p.minHeight,0)||0,T=Math.max(p.width,0)||t,A=Math.max(p.height,0)||o;if(v){var j=[O,y];y=j[0],O=j[1];var S=[k,x];x=S[0],k=S[1];var M=[A,T];T=M[0],A=M[1]}y<1/0&&O<1/0?O*g>y?O=y/g:y=O*g:y<1/0?O=y/g:O<1/0&&(y=O*g),x>0&&k>0?k*g>x?k=x/g:x=k*g:x>0?k=x/g:k>0&&(x=k*g),A*g>T?A=T/g:T=A*g;var B=-(T=Math.floor(h(Math.min(Math.max(T,x),y))))/2,E=-(A=Math.floor(h(Math.min(Math.max(A,k),O))))/2,U=T,C=A;if(v){var P=[A,T];T=P[0],A=P[1]}w.width=T,w.height=A,d(p.mimeType)||(p.mimeType=b.type);var N="transparent";if(b.size>p.convertSize&&"image/png"===p.mimeType&&(N="#fff",p.mimeType="image/jpeg"),f.fillStyle=N,f.fillRect(0,0,T,A),p.beforeDraw&&p.beforeDraw.call(this,f,w),!this.aborted&&(f.save(),f.translate(T/2,A/2),f.rotate(s*Math.PI/180),f.scale(c,u),f.drawImage(m,B,E,U,C),f.restore(),p.drew&&p.drew.call(this,f,w),!this.aborted)){var R=function(e){i.aborted||i.done({naturalWidth:t,naturalHeight:o,result:e})};w.toBlob?w.toBlob(R,p.mimeType,p.quality):R(n(w.toDataURL(p.mimeType,p.quality)))}}},{key:"done",value:function(e){var i,t,o=e.naturalWidth,r=e.naturalHeight,n=e.result,s=this.file,a=this.options;if(f&&!a.checkOrientation&&f.revokeObjectURL(this.image.src),n)if(a.strict&&n.size>s.size&&a.mimeType===s.type&&!(a.width>o||a.height>r||a.minWidth>o||a.minHeight>r))n=s;else{var c=new Date;n.lastModified=c.getTime(),n.lastModifiedDate=c,n.name=s.name,n.name&&n.type!==s.type&&(n.name=n.name.replace(g,("jpeg"===(t=d(i=n.type)?i.substr(6):"")&&(t="jpg"),".".concat(t))))}else n=s;this.result=n,a.success&&a.success.call(this,n)}},{key:"fail",value:function(e){var i=this.options;if(!i.error)throw e;i.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}])&&e(o.prototype,l),m&&e(o,m),i;var o,l,m}()}()},fOOd:function(e,i,t){"use strict";t.r(i),t.d(i,"HomePageModule",function(){return R});var o=t("PCNd"),r=t("tyNb"),n=t("mrSG"),s=t("VfN6"),a=t("XNiG"),c=t("r0o6"),l=t("/uUt"),d=t("eIep"),u=t("q7zd"),b=t("fXoL"),m=t("BJdS"),h=t("sneX"),p=t("8/ti");let w=(()=>{class e extends h.a{constructor(i){super(i,e.name),this.hasOnboarded$=this.getBoolean$("hasOnboarded",!1),this.onboard$=this.setBoolean$("hasOnboarded",!0)}}return e.\u0275fac=function(i){return new(i||e)(b.Zb(p.a))},e.\u0275prov=b.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=t("QPBi"),g=t("mHUz"),v=t("TEn/"),y=t("ofXK"),O=t("2Vo4"),x=t("KJy6"),k=t("9A8T"),T=t("/T4s");const A=function(e){return{id:e}};function j(e,i){if(1&e&&(b.Vb(0,"app-image",2),b.Rb(1,"ion-ripple-effect"),b.Ub()),2&e){const e=i.ngrxLet,t=b.fc().ngrxLet;b.lc("queryParams",b.nc(2,A,t.id))("src",e)}}function S(e,i){if(1&e&&(b.Tb(0),b.xc(1,j,2,4,"app-image",1),b.Sb()),2&e){const e=i.ngrxLet;b.Fb(1),b.lc("ngrxLet",e.thumbnailUrl$)}}let M=(()=>{class e{constructor(){this._moment$=new O.a(void 0),this.moment$=this._moment$.pipe(Object(x.d)(),Object(l.a)((e,i)=>e.id===i.id))}set moment(e){this._moment$.next(e)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=b.Kb({type:e,selectors:[["app-moment-thumbnail"]],inputs:{moment:"moment"},decls:1,vars:1,consts:[[4,"ngrxLet"],["routerLink","photo","class","ion-activatable",3,"queryParams","src",4,"ngrxLet"],["routerLink","photo",1,"ion-activatable",3,"queryParams","src"]],template:function(e,i){1&e&&b.xc(0,S,2,1,"ng-container",0),2&e&&b.lc("ngrxLet",i.moment$)},directives:[k.a,T.a,v.K,r.i,v.v],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}app-image[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}"]}),e})();function B(e,i){if(1&e&&(b.Vb(0,"ion-col",9,10),b.Rb(2,"app-moment-thumbnail",11),b.Ub()),2&e){const e=i.$implicit;b.Fb(2),b.lc("moment",e)}}function E(e,i){if(1&e&&(b.Vb(0,"h3"),b.zc(1),b.Ub()),2&e){const e=i.$implicit;b.Fb(1),b.Ac(e("nothingInAlbum"))}}function U(e,i){if(1&e&&(b.Vb(0,"p"),b.zc(1),b.Ub()),2&e){const e=i.$implicit;b.Fb(1),b.Bc(" ",e("message.emptyAlbum")+"\n"+e("message.storedLocally")," ")}}function C(e,i){1&e&&(b.Vb(0,"div",12),b.Rb(1,"ion-img",13),b.xc(2,E,2,1,"h3",14),b.xc(3,U,2,1,"p",14),b.Ub())}const P=[{path:"",component:(()=>{let e=class{constructor(e,i,t,o){this.momentRepository=e,this.onboardingService=i,this.translocoService=t,this.errorReportService=o,this.moments$=this.momentRepository.all$,this._scrollEvent$=new a.a,this.scrollEvent$=this._scrollEvent$.pipe(Object(l.a)()),this.noFooterBorder$=this.scrollEvent$.pipe(Object(d.a)(e=>this.detectBottom(e))),this.onboardIfNecessary$=this.onboardingService.hasOnboarded$.pipe(Object(d.a)(e=>Object(c.a)(()=>!e,this.translocoService.selectTranslateObject([]).pipe(Object(u.a)(this.errorReportService.showUserAgreeDialog$)))),Object(u.a)(this.onboardingService.onboard$))}ngAfterViewInit(){this.onboardIfNecessary$.pipe(Object(s.b)(this)).subscribe()}onScroll(e){this._scrollEvent$.next(e)}detectBottom(e){return Object(n.a)(this,void 0,void 0,function*(){const i=e.target,t=yield i.getScrollElement();return t.scrollTop===t.scrollHeight-t.clientHeight})}trackMoment(e,i){return i.id}};return e.\u0275fac=function(i){return new(i||e)(b.Qb(m.a),b.Qb(w),b.Qb(f.e),b.Qb(g.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-home"]],decls:16,vars:11,consts:[["scrollEvents","",3,"ionScroll"],["size","6","size-sm","4","size-md","3","size-lg","2",4,"ngFor","ngForOf","ngForTrackBy"],["class","empty-illustration",4,"ngIf"],["vertical","bottom","horizontal","center","slot","fixed","edge",""],["routerLink","camera"],["name","camera-outline"],["slot","primary"],["routerLink","settings","slot","primary"],["slot","icon-only","name","settings-outline"],["size","6","size-sm","4","size-md","3","size-lg","2"],["col",""],[3,"moment"],[1,"empty-illustration"],["src","./assets/icons/undraw-blank-canvas.svg"],[4,"transloco"]],template:function(e,i){if(1&e&&(b.Vb(0,"ion-content",0),b.dc("ionScroll",function(e){return i.onScroll(e)}),b.Vb(1,"ion-grid"),b.Vb(2,"ion-row"),b.xc(3,B,3,1,"ion-col",1),b.gc(4,"ngrxPush"),b.Ub(),b.Ub(),b.xc(5,C,4,0,"div",2),b.gc(6,"ngrxPush"),b.Vb(7,"ion-fab",3),b.Vb(8,"ion-fab-button",4),b.Rb(9,"ion-icon",5),b.Ub(),b.Ub(),b.Ub(),b.Vb(10,"ion-footer"),b.gc(11,"ngrxPush"),b.Vb(12,"ion-toolbar"),b.Vb(13,"ion-buttons",6),b.Vb(14,"ion-button",7),b.Rb(15,"ion-icon",8),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e){let e=null;b.Fb(3),b.lc("ngForOf",b.hc(4,5,i.moments$))("ngForTrackBy",i.trackMoment),b.Fb(2),b.lc("ngIf",0===(null==(e=b.hc(6,7,i.moments$))?null:e.length)),b.Fb(5),b.Ib("ion-no-border",b.hc(11,9,i.noFooterBorder$))}},directives:[v.h,v.l,v.x,y.k,y.l,v.i,v.j,v.K,r.i,v.n,v.k,v.E,v.e,v.d,v.g,M,v.o,f.c],pipes:[k.b],styles:["app-moment-thumbnail[_ngcontent-%COMP%]{height:150px;border-radius:4px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2)}.empty-illustration[_ngcontent-%COMP%]{width:70%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.empty-illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin:auto;max-width:400px}.empty-illustration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line}"]}),e=Object(n.b)([Object(s.a)()],e),e})()},{path:"photo",loadChildren:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"MTLF")).then(e=>e.PhotoPageModule)},{path:"settings",loadChildren:()=>t.e(13).then(t.bind(null,"VJEY")).then(e=>e.SettingsPageModule)},{path:"camera",loadChildren:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"QDOj")).then(e=>e.CameraPageModule)}];let N=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({imports:[[r.j.forChild(P)],r.j]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({imports:[[o.a,N]]}),e})()},q7zd:function(e,i,t){"use strict";t.d(i,"a",function(){return r});var o=t("bOdf");function r(e,i){return Object(o.a)(()=>e,i)}}}]);