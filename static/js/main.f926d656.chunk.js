(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=(a(15),a(1)),l=a(4),s=a(5),h=a(7),u=a(6),m=a(8),d=(a(16),a(17),function(e){return r.a.createElement("div",{className:"Input-field"},e.label&&r.a.createElement("label",{htmlFor:e.id},e.label),r.a.createElement("input",{checked:e.checked,type:e.type,id:e.id,name:e.name,minLength:"4",maxLength:"20",placeholder:e.placeholder,value:e.value,onChange:e.onChange,onBlur:e.onBlur,onSubmit:e.onSubmit}))}),p=(a(18),function(e){return r.a.createElement("form",{onSubmit:e.onSubmit,className:e.className},e.children)}),f=(a(19),function(e){return r.a.createElement("button",{disabled:e.disabled,type:e.type,className:e.className,onClick:e.onClick},e.children)}),g=(a(20),function(e){return r.a.createElement("div",{className:"Weather"},r.a.createElement("ul",null,r.a.createElement("li",null,"Temperature in ".concat(e.city,":")),r.a.createElement("li",null,"".concat(e.data.main.temp.toFixed(2),"\xb0C"))),r.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png"),alt:"".concat(e.data.weather[0].description," in ").concat(e.city),className:"weather-icon"}))}),b="847c4dda05c3a22fb02d777556a5510f",y=(a(21),a(22),function(e){return r.a.createElement("div",{className:"weather-card"},r.a.createElement("p",null,e.weather.main.pressure))}),E=function(e){return r.a.createElement("div",{className:"ForecastWeather"},r.a.createElement("ul",null,r.a.createElement("li",null,"".concat(e.city,":"))),e.data.list.map(function(e){return r.a.createElement(y,{weather:e})}))},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",loading:!1,error:null,weatherData:null,units:"metric",currentWeather:!0,forecastWeather:!0},a.onChange=function(e){var t;a.setState((t={},Object(o.a)(t,e.target.name||e.target.id,e.target.value),Object(o.a)(t,"error",null),t))},a.onChangeCheckbox=function(e){a.setState(Object(o.a)({},e.target.id,!a.state[e.target.id]))},a.onSubmit=function(e){e.preventDefault(),a.setState({loading:!0,currentCity:a.state.city}),a.state.currentWeather&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.city,"&appid=").concat(b,"&units=").concat(a.state.units)).then(function(e){return e.ok?e.json():e.json().then(function(e){return a.setState({error:e,loading:!1})})}).then(function(e){a.setState({weatherData:e,loading:!1})}),a.state.forecastWeather&&fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(a.state.city,"&appid=").concat(b,"&units=").concat(a.state.units)).then(function(e){return e.ok?e.json():e.json().then(function(e){return a.setState({error:e,loading:!1})})}).then(function(e){a.setState({forecastData:e,loading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Check today's weather"),r.a.createElement("img",{src:"https://bit.ly/2UhPg06",alt:"sunny",className:"logo"})),r.a.createElement(p,{className:"input-form",onSubmit:this.onSubmit},r.a.createElement("label",null,"City:"),r.a.createElement(d,{placeholder:"Enter city",type:"text",id:"city",value:this.state.city,onChange:this.onChange}),r.a.createElement(d,{label:"Current Weather",id:"currentWeather",checked:this.state.currentWeather,type:"checkbox",onChange:this.onChangeCheckbox}),r.a.createElement(d,{label:"Weather Forecast",id:"forecastWeather",checked:this.state.forecastWeather,type:"checkbox",onChange:this.onChangeCheckbox}),r.a.createElement(d,{label:"Metric units",name:"units",value:"metric",id:"metric",checked:"metric"===this.state.units,type:"radio",onChange:this.onChange}),r.a.createElement(d,{label:"Imperial units",name:"units",value:"imperial",id:"imperial",checked:"imperial"===this.state.units,type:"radio",onChange:this.onChange}),r.a.createElement(f,{disabled:this.state.loading||!this.state.city||!this.state.currentWeather&&!this.state.forecastWeather,type:"submit",className:"submit-button"},this.state.loading?"Loading...":"Submit")),this.state.error&&r.a.createElement("p",null,"Oops! Something's wrong!"),this.state.weatherData&&r.a.createElement(g,{city:this.state.currentCity,data:this.state.weatherData}),this.state.forecastData&&r.a.createElement(E,{city:this.state.currentCity,data:this.state.forecastData}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.f926d656.chunk.js.map