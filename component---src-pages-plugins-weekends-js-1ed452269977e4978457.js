(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[8783],{2331:function(e,t){"use strict";t.Z=function(e){var t={gregorian:[0,6],persian:[6],arabic:[0,6],indian:[0]};return{type:"mapDays",fn:function(){return function(n){var l=n.date,r=l.calendar,a=l.weekDay;if((Array.isArray(e)?e:t[r.name]).includes(a.index))return{className:"highlight highlight-red"}}}}}},6450:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var l=n(7294),r=n(5361),a=n(7821),i=n(5875),c=n(8650),u=n(2331);function d(e){var t=e.translate,n=e.language,r=e.otherProps,d=e.localeImport,s="en"===n?".\n.\n.\n":d;return[{title:"Props",description:l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,t("Prop")),l.createElement("th",null,t("Type")),l.createElement("th",null,t("Default")))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"weekends"),l.createElement("td",null,"Array"),l.createElement("td",null,"en"===n?"*see default weekends":"مطابق با جدول پایین"))))},{title:"Default Weekends",description:l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,t("Calendar")),l.createElement("th",null,t("Default Weekends")))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"gregorian"),l.createElement("td",null,"[0, 6]")),l.createElement("tr",null,l.createElement("td",null,"persian"),l.createElement("td",null,"[6]")),l.createElement("tr",null,l.createElement("td",null,"arabic"),l.createElement("td",null,"[0, 6]")),l.createElement("tr",null,l.createElement("td",null,"indian"),l.createElement("td",null,"[0]"))))},{title:"Weekends: gregorian",code:'import DatePicker from "react-multi-date-picker"\nimport weekends from "react-multi-date-picker/plugins/highlight_weekends"\n.\n.\n.\n<DatePicker\n  plugins={[weekends()]}\n'+("en"===n?"/>":'  calendarPosition="bottom-right"\n/>')+" ",jsx:l.createElement(a.ZP,{plugins:[(0,u.Z)()],calendarPosition:r.calendarPosition})},{title:"Weekends: persian",code:'import DatePicker from "react-multi-date-picker"\nimport weekends from "react-multi-date-picker/plugins/highlight_weekends"\n'+s+"<DatePicker\n  plugins={[weekends()]}\n  calendar={persian}\n  locale={persian_fa}\n"+("en"===n?"/>":'  calendarPosition="bottom-right"\n/> ')+" ",jsx:l.createElement(a.ZP,{plugins:[(0,u.Z)()],calendar:i.Z,locale:c.Z,calendarPosition:r.calendarPosition})},{title:"Weekends: custom",code:'import DatePicker from "react-multi-date-picker"\nimport weekends from "react-multi-date-picker/plugins/highlight_weekends"\n'+s+"<DatePicker \n  plugins={[weekends([5, 6])]} \n/>",jsx:l.createElement(a.ZP,Object.assign({plugins:[(0,u.Z)([5,6])]},r))}]}function s(e){var t=e.pageContext.language||"en";return l.createElement(r.Z,{language:t,doc:d,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-weekends-js-1ed452269977e4978457.js.map