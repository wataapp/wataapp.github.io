webpackJsonp([4],[,,function(a,n,e){"use strict";function t(){return l.a}function o(){var a=[];return u.a.forEach(function(n){var e=a.find(function(a){return a.name===n.category});e?e.words.push(n):a.push({name:n.category,words:[n]})}),a}function s(){return u.a.length}function i(a){return u.a.reduce(function(n,e){return e.translations[a]?n+=1:n},0)}e.d(n,"b",function(){return t}),e.d(n,"a",function(){return o}),e.d(n,"d",function(){return s}),e.d(n,"c",function(){return i});var r=e(12),l=e.n(r),m=e(13),u=e.n(m)},function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(1),o=e(5),s=e.n(o),i=e(6),r=(e.n(i),e(8)),l=(e.n(r),e(9)),m=e(14);t.a.use(s.a),t.a.config.productionTip=!1,new t.a({el:"#app",template:"<App/>",components:{App:m.a},router:l.a})},,,function(a,n){},,function(a,n){},function(a,n,e){"use strict";var t=e(1),o=e(10),s=e(11);t.a.use(o.a);var i=new o.a({routes:s.a});n.a=i},,function(a,n,e){"use strict";var t=function(){return e.e(3).then(e.bind(null,37))},o=function(){return e.e(0).then(e.bind(null,38))},s=function(){return e.e(1).then(e.bind(null,39))},i=function(){return e.e(2).then(e.bind(null,40))},r=[{path:"*",name:"index",component:t},{path:"/languages",name:"languages",component:s},{path:"/languages/:name",name:"language",component:o},{path:"/languages/:name/quiz",name:"quiz",component:i}];n.a=r},function(a,n){a.exports=[{name:"Afrikaans",slug:"af"},{name:"Albanian",slug:"sq"},{name:"Amharic",slug:"am"},{name:"Arabic",slug:"ar"},{name:"Armenian",slug:"hy"},{name:"Azeerbaijani",slug:"az"},{name:"Basque",slug:"eu"},{name:"Belarusian",slug:"be"},{name:"Bengali",slug:"bn"},{name:"Bosnian",slug:"bs"},{name:"Bulgarian",slug:"bg"},{name:"Catalan",slug:"ca"},{name:"Cebuano",slug:"ceb"},{name:"Chinese(Simplified)",slug:"zh-CN"},{name:"Chinese(Traditional)",slug:"zh-TW"},{name:"Corsican",slug:"co"},{name:"Croatian",slug:"hr"},{name:"Czech",slug:"cs"},{name:"Danish",slug:"da"},{name:"Dutch",slug:"nl"},{name:"English",slug:"en",countries:["🇦🇺","🇬🇧","🇺🇸","🇳🇿"]},{name:"Esperanto",slug:"eo"},{name:"Estonian",slug:"et"},{name:"Finnish",slug:"fi"},{name:"French",slug:"fr",countries:["🇫🇷","🇨🇦","🇲🇬","🇨🇲"]},{name:"Frisian",slug:"fy"},{name:"Galician",slug:"gl"},{name:"Georgian",slug:"ka"},{name:"German",slug:"de",countries:["🇦🇹","🇧🇪","🇨🇭","🇩🇪","🇱🇺","🇱🇮"]},{name:"Greek",slug:"el"},{name:"Gujarati",slug:"gu"},{name:"Haitian Creole",slug:"ht"},{name:"Hausa",slug:"ha"},{name:"Hawaiian",slug:"haw"},{name:"Hebrew",slug:"iw"},{name:"Hindi",slug:"hi"},{name:"Hmong",slug:"hmn"},{name:"Hungarian",slug:"hu"},{name:"Icelandic",slug:"is"},{name:"Igbo",slug:"ig"},{name:"Indonesian",slug:"id"},{name:"Irish",slug:"ga"},{name:"Italian",slug:"it",countries:["🇮🇹","🇨🇭","🇸🇲","🇻🇦"]},{name:"Japanese",slug:"ja"},{name:"Javanese",slug:"jw"},{name:"Kannada",slug:"kn"},{name:"Kazakh",slug:"kk"},{name:"Khmer",slug:"km"},{name:"Korean",slug:"ko"},{name:"Kurdish",slug:"ku"},{name:"Kyrgyz",slug:"ky"},{name:"Lao",slug:"lo"},{name:"Latin",slug:"la"},{name:"Latvian",slug:"lv"},{name:"Lithuanian",slug:"lt"},{name:"Luxembourgish",slug:"lb"},{name:"Macedonian",slug:"mk"},{name:"Malagasy",slug:"mg"},{name:"Malay",slug:"ms"},{name:"Malayalam",slug:"ml"},{name:"Maltese",slug:"mt"},{name:"Maori",slug:"mi"},{name:"Marathi",slug:"mr"},{name:"Mongolian",slug:"mn"},{name:"Myanmar(Burmese)",slug:"my"},{name:"Nepali",slug:"ne"},{name:"Norwegian",slug:"no"},{name:"Nyanja(Chichewa)",slug:"ny"},{name:"Pashto",slug:"ps"},{name:"Persian",slug:"fa"},{name:"Polish",slug:"pl",countries:["🇵🇱"]},{name:"Portuguese",slug:"pt"},{name:"Punjabi",slug:"pa"},{name:"Romanian",slug:"ro"},{name:"Russian",slug:"ru"},{name:"Samoan",slug:"sm"},{name:"ScotsGaelic",slug:"gd"},{name:"Serbian",slug:"sr"},{name:"Sesotho",slug:"st"},{name:"Shona",slug:"sn"},{name:"Sindhi",slug:"sd"},{name:"Sinhala(Sinhalese)",slug:"si"},{name:"Slovak",slug:"sk"},{name:"Slovenian",slug:"sl"},{name:"Somali",slug:"so"},{name:"Spanish",slug:"es",countries:["🇦🇷","🇨🇱","🇪🇨","🇪🇸","🇬🇹","🇭🇳","🇲🇽","🇵🇪","🇻🇪"]},{name:"Sundanese",slug:"su"},{name:"Swahili",slug:"sw"},{name:"Swedish",slug:"sv"},{name:"Tagalog(Filipino)",slug:"tl"},{name:"Tajik",slug:"tg"},{name:"Tamil",slug:"ta"},{name:"Telugu",slug:"te"},{name:"Thai",slug:"th"},{name:"Turkish",slug:"tr"},{name:"Ukrainian",slug:"uk"},{name:"Urdu",slug:"ur"},{name:"Uzbek",slug:"uz"},{name:"Vietnamese",slug:"vi"},{name:"Welsh",slug:"cy"},{name:"Xhosa",slug:"xh"},{name:"Yiddish",slug:"yi"},{name:"Yoruba",slug:"yo"},{name:"Zulu",slug:"zu"}]},function(a,n){a.exports=[{name:"dog",category:"animals",emoji:"🐕",translations:{en:"dog",pl:"pies"}},{name:"monkey",category:"animals",emoji:"🐒",translations:{en:"monkey",pl:"małpa"}},{name:"gorilla",category:"animals",emoji:"🦍",translations:{en:"gorilla",pl:"goryl"}},{name:"cat",category:"animals",emoji:"🐈",translations:{en:"cat",pl:"kot"}},{name:"tiger",category:"animals",emoji:"🐅",translations:{en:"tiger",pl:"tygrys"}},{name:"horse",category:"animals",emoji:"🐎",translations:{en:"horse",pl:"koń"}},{name:"leopard",category:"animals",emoji:"🐆",translations:{en:"leopard",pl:"leopard"}},{name:"dove",category:"animals",emoji:"🕊️",translations:{en:"dove",pl:"gołąb"}},{name:"sheep",category:"animals",emoji:"🐑",translations:{en:"sheep",pl:"owca"}},{name:"cow",category:"animals",emoji:"🐄",translations:{en:"cow",pl:"krowa"}},{name:"camel",category:"animals",emoji:"🐪",translations:{en:"camel",pl:"wielbłąd"}},{name:"snake",category:"animals",emoji:"🐍",translations:{en:"snake",pl:"wąż"}},{name:"pig",category:"animals",emoji:"🐖",translations:{en:"pig",pl:"świnia"}},{name:"turtle",category:"animals",emoji:"🐢",translations:{en:"turtle",pl:"zółw"}},{name:"ox",category:"animals",emoji:"🐂",translations:{en:"ox",pl:"wół"}},{name:"rat",category:"animals",emoji:"🐀",translations:{en:"rat",pl:"szczur"}},{name:"dolphin",category:"animals",emoji:"🐬",translations:{en:"dolphin",pl:"delfin"}},{name:"whale",category:"animals",emoji:"🐋",translations:{en:"whale",pl:"wieloryb"}},{name:"owl",category:"animals",emoji:"🦉",translations:{en:"owl",pl:"sowa"}},{name:"bear",category:"animals",emoji:"🐻",translations:{en:"bear",pl:"niedźwiedź"}},{name:"elephant",category:"animals",emoji:"🐘",translations:{en:"elephant",pl:"słoń"}},{name:"goat",category:"animals",emoji:"🐐",translations:{en:"goat",pl:"koza"}},{name:"ram",category:"animals",emoji:"🐏",translations:{en:"ram",pl:"baran"}},{name:"duck",category:"animals",emoji:"🦆",translations:{en:"duck",pl:"kaczka"}},{name:"chicken",category:"animals",emoji:"🐔",translations:{en:"chicken",pl:"kurczak"}},{name:"chipmunk",category:"animals",emoji:"🐿️",translations:{en:"chipmunk",pl:"wiewiórka"}},{name:"rhinoceros",category:"animals",emoji:"🦏",translations:{en:"rhinoceros",pl:"nosorożec"}},{name:"mouse",category:"animals",emoji:"🐁",translations:{en:"mouse",pl:"mysz"}},{name:"poodle",category:"animals",emoji:"🐩",translations:{en:"poodle",pl:"pudel"}},{name:"snail",category:"animals",emoji:"🐌",translations:{en:"snail",pl:"ślimak"}},{name:"bat",category:"animals",emoji:"🦇",translations:{en:"bat",pl:"nietoperz"}},{name:"turkey",category:"animals",emoji:"🦃",translations:{en:"turkey",pl:"indyk"}},{name:"waterbuffalo",category:"animals",emoji:"🐃",translations:{en:"water buffalo",pl:"wół domowy"}},{name:"eagle",category:"animals",emoji:"🦅",translations:{en:"eagle",pl:"orzeł"}},{name:"crocodile",category:"animals",emoji:"🐊",translations:{en:"crocodile",pl:"krokodyl"}},{name:"octopus",category:"animals",emoji:"🐙",translations:{en:"octopus",pl:"ośmiornica"}},{name:"crab",category:"animals",emoji:"🦀",translations:{en:"crab",pl:"krab"}},{name:"scorpion",category:"animals",emoji:"🦂",translations:{en:"scorpion",pl:"skorpion"}},{name:"butterfly",category:"animals",emoji:"🦋",translations:{en:"butterfly",pl:"motyl"}},{name:"penguin",category:"animals",emoji:"🐧",translations:{en:"penguin",pl:"pingwin"}},{name:"rabbit",category:"animals",emoji:"🐇",translations:{en:"rabbit",pl:"królik"}},{name:"fish",category:"animals",emoji:"🐟",translations:{en:"fish",pl:"ryba"}},{name:"shark",category:"animals",emoji:"🦈",translations:{en:"shark",pl:"rekin"}},{name:"grapes",category:"food",emoji:"🍇",translations:{en:"grapes",pl:"winogrona"}},{name:"strawberry",category:"food",emoji:"🍓",translations:{en:"strawberry",pl:"truskawka"}},{name:"lemon",category:"food",emoji:"🍋",translations:{en:"lemon",pl:"cytryna"}},{name:"melon",category:"food",emoji:"🍈",translations:{en:"melon",pl:"melon"}},{name:"kiwifruit",category:"food",emoji:"🥝",translations:{en:"kiwi food",pl:"kiwi"}},{name:"banana",category:"food",emoji:"🍌",translations:{en:"banana",pl:"banan"}},{name:"apple",category:"food",emoji:"🍎",translations:{en:"apple",pl:"jabłko"}},{name:"pineapple",category:"food",emoji:"🍍",translations:{en:"pineapple",pl:"ananas"}},{name:"pear",category:"food",emoji:"🍐",translations:{en:"pear",pl:"gruszka"}},{name:"peach",category:"food",emoji:"🍑",translations:{en:"peach",pl:"brzoskwinia"}},{name:"avocado",category:"food",emoji:"🥑",translations:{en:"avocado",pl:"awokado"}},{name:"tangerine",category:"food",emoji:"🍊",translations:{en:"tangerine",pl:"mandarynka"}},{name:"tomato",category:"food",emoji:"🍅",translations:{en:"tomato",pl:"pomidor"}},{name:"watermelon",category:"food",emoji:"🍉",translations:{en:"watermelon",pl:"arbuz"}},{name:"cherries",category:"food",emoji:"🍒",translations:{en:"cherries",pl:"czereśnie"}},{name:"hotpepper",category:"food",emoji:"🌶️",translations:{en:"hot pepper",pl:"papryka chili"}},{name:"carrot",category:"food",emoji:"🥕",translations:{en:"carrot",pl:"marchewka"}},{name:"eggplant",category:"food",emoji:"🍆",translations:{en:"eggplant",pl:"bakłażan"}},{name:"potato",category:"food",emoji:"🥔",translations:{en:"potato",pl:"ziemniak"}},{name:"cucumber",category:"food",emoji:"🥒",translations:{en:"cucumber",pl:"ogórek"}},{name:"corn",category:"food",emoji:"🌽",translations:{en:"corn",pl:"kukurydza"}},{name:"peanuts",category:"food",emoji:"🥜",translations:{en:"peanuts",pl:"orzechy"}},{name:"bread",category:"food",emoji:"🍞",translations:{en:"bread",pl:"chleb"}},{name:"cheese",category:"food",emoji:"🧀",translations:{en:"cheese",pl:"ser"}},{name:"croissant",category:"food",emoji:"🥐",translations:{en:"croissant",pl:"croissant"}},{name:"frenchfries",category:"food",emoji:"🍟",translations:{en:"french fries",pl:"frytki"}},{name:"cookie",category:"food",emoji:"🍪",translations:{en:"cookie",pl:"ciastko"}},{name:"candy",category:"food",emoji:"🍬",translations:{en:"candy",pl:"cukierek"}},{name:"snowboarding",category:"sports",emoji:"🏂",translations:{en:"snowboarding",pl:"snowboard"}},{name:"swimming",category:"sports",emoji:"🏊",translations:{en:"swimming",pl:"pływanie"}},{name:"biking",category:"sports",emoji:"🚴",translations:{en:"biking",pl:"kolarstwo"}},{name:"surfing",category:"sports",emoji:"🏄",translations:{en:"surfing",pl:"surfing"}},{name:"handball",category:"sports",emoji:"🤾",translations:{en:"handball",pl:"piłka ręczna"}},{name:"baseball",category:"sports",emoji:"🏀",translations:{en:"baseball",pl:"koszykówka"}}]},function(a,n,e){"use strict";function t(a){e(15)}var o=e(16),s=e(34),i=e(0),r=t,l=i(o.a,s.a,r,null,null);n.a=l.exports},function(a,n){},function(a,n,e){"use strict";var t=e(17),o=e(21),s=e(29),i=e(33);e.n(i);n.a={name:"app",components:{AppHeader:t.a,AppMain:o.a,AppFooter:s.a}}},function(a,n,e){"use strict";function t(a){e(18)}var o=e(19),s=e(20),i=e(0),r=t,l=i(o.a,s.a,r,"data-v-5f1aa93a",null);n.a=l.exports},function(a,n){},function(a,n,e){"use strict";n.a={name:"app-header"}},function(a,n,e){"use strict";var t=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("header",[e("router-link",{attrs:{to:"/"}},[e("h1",{staticClass:"title is-1"},[a._v("WATA")])])],1)},o=[],s={render:t,staticRenderFns:o};n.a=s},function(a,n,e){"use strict";function t(a){e(22)}var o=e(23),s=e(28),i=e(0),r=t,l=i(o.a,s.a,r,"data-v-ad4610b4",null);n.a=l.exports},function(a,n){},function(a,n,e){"use strict";var t=e(2),o=e(24);n.a={name:"app-main",components:{LanguagePicker:o.a},data:function(){return{language:"",languages:[]}},created:function(){this.languages=Object(t.b)()},watch:{language:function(){var a=this.language?"/languages/"+this.language:"";this.$router.push(a)}}}},function(a,n,e){"use strict";function t(a){e(25)}var o=e(26),s=e(27),i=e(0),r=t,l=i(o.a,s.a,r,"data-v-6704feec",null);n.a=l.exports},function(a,n){},function(a,n,e){"use strict";n.a={name:"language-picker",props:{language:String,languages:Array,placeholder:String},data:function(){return{choosed:""}},created:function(){this.choosed=this.$route.params.name||this.placeholder},watch:{choosed:function(){this.choosed!==this.placeholder&&this.$emit("input",this.choosed)}}}},function(a,n,e){"use strict";var t=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"select is-large is-fullwidth"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.choosed,expression:"choosed"}],attrs:{autofocus:""},on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.choosed=n.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",hidden:""}},[a._v("Select language")]),a._v(" "),a._l(a.languages,function(n){var t=n.slug,o=n.name;return e("option",{key:t,domProps:{value:t}},[a._v("\n      "+a._s(o)+"\n    ")])})],2),a._v(" "),e("div",{staticClass:"browse"},[e("router-link",{staticClass:"has-text-centered",attrs:{to:{name:"languages"}}},[a._v("Browse all languages")])],1)])},o=[],s={render:t,staticRenderFns:o};n.a=s},function(a,n,e){"use strict";var t=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("main",{staticClass:"container"},[e("language-picker",{attrs:{languages:a.languages,placeholder:"Select language"},model:{value:a.language,callback:function(n){a.language=n},expression:"language"}}),a._v(" "),e("router-view")],1)},o=[],s={render:t,staticRenderFns:o};n.a=s},function(a,n,e){"use strict";function t(a){e(30)}var o=e(31),s=e(32),i=e(0),r=t,l=i(o.a,s.a,r,"data-v-3de84548",null);n.a=l.exports},function(a,n){},function(a,n,e){"use strict";n.a={name:"app-footer"}},function(a,n,e){"use strict";var t=function(){var a=this,n=a.$createElement;a._self._c;return a._m(0)},o=[function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[a._v("Made by "),e("a",{attrs:{href:"https://michalczmiel.github.io",target:"_blank"}},[a._v("Michał Czmiel")])]),a._v(" "),e("p",[a._v("The "),e("a",{attrs:{href:"https://github.com/michalczmiel/wata"}},[a._v("source code")]),a._v(" is licensed under "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[a._v("MIT")])])])])])}],s={render:t,staticRenderFns:o};n.a=s},function(a,n){},function(a,n,e){"use strict";var t=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{attrs:{id:"app"}},[e("app-header"),a._v(" "),e("app-main"),a._v(" "),e("app-footer")],1)},o=[],s={render:t,staticRenderFns:o};n.a=s}],[3]);
//# sourceMappingURL=app.59a8eeb0b69da05207ac.js.map