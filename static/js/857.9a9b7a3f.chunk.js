"use strict";(self.webpackChunkApp_Alib=self.webpackChunkApp_Alib||[]).push([[857],{76857:function(a,d,t){t.r(d);var r=t(4942),n=t(1413),o=t(15671),e=t(43144),i=t(60136),c=t(48347),l=t(72791),s=(t(77632),t(57307)),u=t(80184),h=[{Id:1,Producto:"Jitomate",Cantidad:0},{Id:2,Producto:"Cebolla",Cantidad:0},{Id:3,Producto:"Nailo",Cantidad:0},{Id:4,Producto:"Perejil",Cantidad:0},{Id:5,Producto:"Hierbabuena",Cantidad:0},{Id:6,Producto:"Pepino",Cantidad:0},{Id:7,Producto:"Cebolla morada",Cantidad:0},{Id:8,Producto:"Franelas",Cantidad:0},{Id:9,Producto:"Aluminio",Cantidad:0},{Id:10,Producto:"Comino",Cantidad:0},{Id:11,Producto:"Curry",Cantidad:0},{Id:12,Producto:"Consome",Cantidad:0},{Id:13,Producto:"Ajo",Cantidad:0},{Id:14,Producto:"Semilla de cilantro",Cantidad:0},{Id:15,Producto:"Sal",Cantidad:0},{Id:16,Producto:"Vinagre",Cantidad:0},{Id:17,Producto:"Aceite",Cantidad:0},{Id:18,Producto:"Pimienta negra",Cantidad:0},{Id:19,Producto:"Oregano",Cantidad:0},{Id:20,Producto:"Crema",Cantidad:0},{Id:21,Producto:"Mayonesa",Cantidad:0},{Id:22,Producto:"Aceite de oliva",Cantidad:0},{Id:23,Producto:"Pan pita",Cantidad:0},{Id:24,Producto:"Coca sin azucar",Cantidad:0},{Id:25,Producto:"Coca original",Cantidad:0},{Id:26,Producto:"Jocoque",Cantidad:0},{Id:27,Producto:"Queso provolone",Cantidad:0},{Id:28,Producto:"Queso fundidor",Cantidad:0},{Id:29,Producto:"Jamaica",Cantidad:0},{Id:30,Producto:"Jabon",Cantidad:0},{Id:31,Producto:"Jocoque",Cantidad:0},{Id:32,Producto:"Fabuloso",Cantidad:0},{Id:33,Producto:"Papel",Cantidad:0},{Id:34,Producto:"Jabon",Cantidad:0},{Id:35,Producto:"Cloro",Cantidad:0},{Id:36,Producto:"Limon",Cantidad:0},{Id:37,Producto:"Chile Morita",Cantidad:0},{Id:38,Producto:"Chile Serrano",Cantidad:0},{Id:39,Producto:"Chile Habanero",Cantidad:0},{Id:40,Producto:"Chile Chipotle",Cantidad:0},{Id:41,Producto:"Mantequilla",Cantidad:0},{Id:42,Producto:"Bolillo",Cantidad:0},{Id:43,Producto:"Tortilla",Cantidad:0},{Id:44,Producto:"Yogurt",Cantidad:0}],C=function(a){(0,i.Z)(t,a);var d=(0,c.Z)(t);function t(){var a;(0,o.Z)(this,t);for(var e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];return(a=d.call.apply(d,[this].concat(i))).state={data:h,modalActualizar:!1,modalInsertar:!1,form:{Id:"",Producto:"",Cantidad:""}},a.mostrarModalActualizar=function(d){a.setState({form:d,modalActualizar:!0})},a.cerrarModalActualizar=function(){a.setState({modalActualizar:!1})},a.mostrarModalInsertar=function(){a.setState({modalInsertar:!0})},a.cerrarModalInsertar=function(){a.setState({modalInsertar:!1})},a.editar=function(d){var t=0,r=a.state.data;r.map((function(a){d.Id==a.Id&&(r[t].Producto=d.Producto,r[t].Cantidad=d.Cantidad),t++})),a.setState({data:r,modalActualizar:!1})},a.eliminar=function(d){if(1==window.confirm("Est\xe1s Seguro que deseas Eliminar el elemento "+d.Id)){var t=0,r=a.state.data;r.map((function(a){d.Id==a.Id&&r.splice(t,1),t++})),a.setState({data:r,modalActualizar:!1})}},a.insertar=function(){var d=(0,n.Z)({},a.state.form);d.Id=a.state.data.length+1;var t=a.state.data;t.push(d),a.setState({modalInsertar:!1,data:t})},a.handleChange=function(d){a.setState({form:(0,n.Z)((0,n.Z)({},a.state.form),{},(0,r.Z)({},d.target.name,d.target.value))})},a}return(0,e.Z)(t,[{key:"render",value:function(){var a=this;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s.W2,{children:[(0,u.jsx)("center",{children:(0,u.jsx)("h1",{children:"Compras del diario"})}),(0,u.jsx)("br",{}),(0,u.jsx)(s.zx,{color:"success",onClick:function(){return a.mostrarModalInsertar()},children:"Crear"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(s.iA,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"ID"}),(0,u.jsx)("th",{children:"Producto"}),(0,u.jsx)("th",{children:"Cantidad"}),(0,u.jsx)("th",{children:"Acci\xf3n"})]})}),(0,u.jsx)("tbody",{children:this.state.data.map((function(d){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:d.Id}),(0,u.jsx)("td",{children:d.Producto}),(0,u.jsx)("td",{children:d.Cantidad}),(0,u.jsxs)("td",{children:[(0,u.jsx)(s.zx,{color:"primary",onClick:function(){return a.mostrarModalActualizar(d)},children:"Editar"})," ",(0,u.jsx)(s.zx,{color:"danger",onClick:function(){return a.eliminar(d)},children:"Eliminar"})]})]},d.Id)}))})]})]}),(0,u.jsxs)(s.u_,{isOpen:this.state.modalActualizar,children:[(0,u.jsx)(s.xB,{children:(0,u.jsx)("div",{children:(0,u.jsx)("h3",{children:"Editar Registro"})})}),(0,u.jsxs)(s.fe,{children:[(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Id:"}),(0,u.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.Id})]}),(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Producto:"}),(0,u.jsx)("input",{className:"form-control",name:"Producto",type:"text",onChange:this.handleChange,value:this.state.form.Producto})]}),(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Cantidad:"}),(0,u.jsx)("input",{className:"form-control",name:"Cantidad",type:"number",onChange:this.handleChange,value:this.state.form.Cantidad})]})]}),(0,u.jsxs)(s.mz,{children:[(0,u.jsx)(s.zx,{color:"primary",onClick:function(){return a.editar(a.state.form)},children:"Editar"}),(0,u.jsx)(s.zx,{color:"danger",onClick:function(){return a.cerrarModalActualizar()},children:"Cancelar"})]})]}),(0,u.jsxs)(s.u_,{isOpen:this.state.modalInsertar,children:[(0,u.jsx)(s.xB,{children:(0,u.jsx)("div",{children:(0,u.jsx)("h3",{children:"Insertar Producto"})})}),(0,u.jsxs)(s.fe,{children:[(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Id:"}),(0,u.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.data.length+1})]}),(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Producto:"}),(0,u.jsx)("input",{className:"form-control",name:"Producto",type:"text",onChange:this.handleChange})]}),(0,u.jsxs)(s.cw,{children:[(0,u.jsx)("label",{children:"Cantidad:"}),(0,u.jsx)("input",{className:"form-control",name:"Cantidad",type:"number",onChange:this.handleChange})]})]}),(0,u.jsxs)(s.mz,{children:[(0,u.jsx)(s.zx,{color:"primary",onClick:function(){return a.insertar()},children:"Insertar"}),(0,u.jsx)(s.zx,{className:"btn btn-danger",onClick:function(){return a.cerrarModalInsertar()},children:"Cancelar"})]})]})]})}}]),t}(l.Component);d.default=C}}]);
//# sourceMappingURL=857.9a9b7a3f.chunk.js.map