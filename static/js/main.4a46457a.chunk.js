(this.webpackJsonppharmacy=this.webpackJsonppharmacy||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(20),r=a.n(c),d=(a(34),a(4)),i=a(5),l=a(7),o=a(6),u=a(14),h=a(2),p=(a(22),a(12)),j=a(11),b=a.n(j),m=a(0),O={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"30%",height:"55vh",background:"aquamarine"}},x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleCancel=function(){n.setState({userName:"",pass:"",fullName:""})},n.handleSignUp=function(){var e=n.state,t=e.userName,a=e.pass,s=e.fullName;if(!t||!a||!s)return alert("all fields are required");if("test-admin"===t.toLowerCase()){for(var c=null===JSON.parse(localStorage.getItem("User"))?[]:JSON.parse(localStorage.getItem("User")),r=-1,d=0;d<c.length;d++)c[d].name===s&&c[d].userName===t&&(r=d);return r>-1?(n.setState({userName:"",pass:"",fullName:"",loginModelIsOpen:!0}),alert("user already exist, please Login")):(c.push({name:s,userName:t.toLowerCase(),password:a}),localStorage.setItem("User",JSON.stringify(c)),n.setState({userName:"",pass:"",fullName:"",loginModelIsOpen:!0}),alert("account created sucessfully"))}return"test-sales"===t.toLowerCase()?(n.setState({userName:"",pass:"",fullName:""}),n.props.history.push("/Executive"),alert("sales Executives login directly")):alert("UserName Should be test-admin or test-sales")},n.handleSignInSignUp=function(){n.setState({loginModelIsOpen:!0})},n.handlelogincancel=function(){n.setState({userName:"",pass:"",loginModelIsOpen:!1})},n.handleSignIn=function(){var e=n.state,t=e.userName,a=e.pass;if(!t||!a)return alert("all fields are required");for(var s=null===JSON.parse(localStorage.getItem("User"))?[]:JSON.parse(localStorage.getItem("User")),c=-1,r=0;r<s.length;r++)s[r].userName===t.toLowerCase()&&s[r].password===a&&(c=r);return c>-1?("test-admin"===t.toLowerCase()&&n.props.history.push("/Manager"),n.setState({userName:"",pass:"",loginModelIsOpen:!1}),alert("Loged in successfully")):alert("Account doesnot exist, please create account then login or check password")},n.state={fullName:"",userName:"",pass:"",loginModelIsOpen:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.userName,n=t.pass,s=t.fullName,c=t.loginModelIsOpen;return Object(m.jsxs)("div",{id:"background",children:[Object(m.jsxs)("div",{id:"signUp",children:[Object(m.jsx)("h2",{children:"SignUp"}),Object(m.jsxs)("label",{id:"username",children:["Fullname :",Object(m.jsx)("input",{type:"text",required:!0,value:s,onChange:function(t){return e.handlechange(t,"fullName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{id:"user",children:["Username :",Object(m.jsx)("input",{type:"text",required:!0,value:a,onChange:function(t){return e.handlechange(t,"userName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{id:"pass",children:["Password :",Object(m.jsx)("input",{type:"text",required:!0,value:n,onChange:function(t){return e.handlechange(t,"pass")},className:"input-field"})]}),Object(m.jsx)("button",{id:"cancel-bth",onClick:this.handleCancel,children:"Cancel"}),Object(m.jsx)("button",{id:"signin-btn",onClick:this.handleSignUp,children:"SignUp"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{id:"msg",children:"If account is already created then Login below"}),Object(m.jsx)("button",{id:"login-signup",onClick:this.handleSignInSignUp,children:"SignIn"})]}),Object(m.jsx)(b.a,{isOpen:c,style:O,children:Object(m.jsxs)("div",{id:"signIn",children:[Object(m.jsx)("h2",{children:"SignIn"}),Object(m.jsxs)("label",{id:"loguser",children:["Username :",Object(m.jsx)("input",{type:"text",required:!0,value:a,onChange:function(t){return e.handlechange(t,"userName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{id:"logpass",children:["Password :",Object(m.jsx)("input",{type:"text",required:!0,value:n,onChange:function(t){return e.handlechange(t,"pass")},className:"input-field"})]}),Object(m.jsx)("button",{id:"log-cancel-bth",onClick:this.handlelogincancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleSignIn,children:"Signin"})]})})]})}}]),a}(n.Component),g=Object(h.e)(x),f=(a(50),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.userName;return Object(m.jsx)("div",{id:"topbar-navigation",children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light topbar",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(u.b,{className:"navbar-brand",to:"/Manager",children:"Pharmacy"}),Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)("i",{className:"fas fa-user-circle user-logo",children:e}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button",onClick:this.sidebar,id:"menu-bar","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})})]})]})})})}}]),a}(n.Component)),N=(a(27),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleAddtoOrders=function(e){for(var t=n.props,a=t.Firstname,s=t.password,c=null===JSON.parse(localStorage.getItem("order"))?[]:JSON.parse(localStorage.getItem("order")),r=-1,d=0;d<c.length;d++)c[d].name==e.name&&c[d].Manuname==e.Manuname&&(r=d);r>-1?c[r].count+=1:(e.orderId=new Date,e.count=1,e.Executivename=a,e.password=s,c.push(e),localStorage.setItem("order",JSON.stringify(c)))},n.handleShowdetails=function(){n.props.history.push("/display")},n.state={product:[],cart:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({product:JSON.parse(localStorage.getItem("products"))})}},{key:"render",value:function(){var e=this,t=this.state.product;return Object(m.jsxs)("div",{id:"order",children:[Object(m.jsx)("button",{style:{marginLeft:"6%"},onClick:this.handleShowdetails,children:"Show Orders"}),Object(m.jsx)("h2",{style:{marginLeft:"6%"},children:"create Order"}),Object(m.jsx)("div",{className:"d-flex flex-wrap justify-content-center card-wrapper",children:t.length&&t.map((function(t,a){return Object(m.jsx)("div",{className:"card m-2",style:{width:"18rem"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["Name: ",t.name]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Manufactured by: ",t.Manuname]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Stock: ",!0===t.stock?"Stock In":"Stock Out"]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Discount: ",t.Discount,"%"]}),Object(m.jsxs)("p",{className:"card-text prouct-card-cost",children:["Price: ",t.price," Rs"]}),Object(m.jsx)("button",{onClick:function(){return e.handleAddtoOrders(t)},id:"add-order",children:"Add"})]})},a)}))})]})}}]),a}(n.Component)),v=Object(h.e)(N),S={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",height:"40vh",background:"Black"}},k=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handledetailscancel=function(){n.setState({optionModelOpen:!1})},n.handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleCheck=function(){var e=n.state,t=e.addFirstName,a=e.addPassword,s=JSON.parse(localStorage.getItem("salesExecutive")),c=-1;if(s.map((function(e,n){e.FirstName.toLowerCase()===t.toLowerCase()&&e.PassWord.toLowerCase()===a.toLowerCase()&&(c=n)})),!(c>-1))return alert("Your details are not exist in Executive team, contact Manager");n.setState({optionModelOpen:!1})},n.state={optionModelOpen:!1,addFirstName:"",addPassword:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({optionModelOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.addFirstName,n=t.addPassword,s=t.optionModelOpen;return Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{isOpen:s,style:S,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("h2",{children:"Sales Executive Details"}),Object(m.jsxs)("label",{id:"userName",children:["FirstName: :",Object(m.jsx)("input",{type:"text",required:!0,value:a,onChange:function(t){return e.handlechange(t,"addFirstName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["PassWord :",Object(m.jsx)("input",{type:"text",required:!0,value:n,onChange:function(t){return e.handlechange(t,"addPassword")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"btn-cancel",onClick:this.handledetailscancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleCheck,children:"check"})]})}),Object(m.jsx)(v,{Firstname:a,password:n})]})}}]),a}(n.Component),y=(a(19),[{name:"Mirbeg 25 Tablet ER-10",Manuname:"Ipca Laboratories Ltd",price:158,stock:!0,Discount:10},{name:"Obimet GX 1 Tablet PR",Manuname:"Corona Remedies Pvt Ltd",price:107,stock:!1,Discount:5},{name:"Rosycap 20 Tablet-10",Manuname:"AKUMENTIS HEALTHCARE LTD",price:117,stock:!0,Discount:15},{name:"CC 74 Tablet-30",Manuname:"Wockhardt Ltd",price:452,stock:!1,Discount:3},{name:"Eios Fe Tablet-10",Manuname:"Medsol India Overseas Pvt Ltd",price:120,stock:!0,Discount:5}]),C=[{FirstName:"Hari",LastName:"Dodda",DOB:"1993-09-20",Gender:"Male",YOE:2,PassWord:"hari2dodda"},{FirstName:"Hamsi",LastName:"Devarapu",DOB:"1994-02-14",Gender:"Female",YOE:5,PassWord:"hamsi5devarapu"},{FirstName:"Vamsi",LastName:"Yadav",DOB:"1992-01-20",Gender:"Male",YOE:5,PassWord:"vamsi5devarapu"},{FirstName:"Rashmi",LastName:"Gowda",DOB:"1991-02-02",Gender:"Female",YOE:7,PassWord:"rashmi7gowda"},{FirstName:"Arjun",LastName:"Gowda",DOB:"1992-10-25",Gender:"Male",YOE:5,PassWord:"arjun5gowda"}],M=(new Date,{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",height:"40vh",background:"aliceblue"}}),P=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleMadicine=function(){n.setState({optionModelOpen:!1}),n.props.history.push("/Medicine")},n.handleExecutive=function(){n.setState({optionModelOpen:!1}),n.props.history.push("/salesExe")},n.handleSignup=function(){n.setState({optionModelOpen:!1}),n.props.history.push("/")},n.state={optionModelOpen:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("products",JSON.stringify(y)),localStorage.setItem("salesExecutive",JSON.stringify(C)),this.setState({optionModelOpen:!0})}},{key:"render",value:function(){var e=this.state.optionModelOpen;return Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{isOpen:e,style:M,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("button",{onClick:this.handleSignup,className:"btn-med",children:"Signup"}),Object(m.jsx)("button",{onClick:this.handleMadicine,className:"btn-med",children:"Medicine"}),Object(m.jsx)("button",{onClick:this.handleExecutive,id:"btn-exe",children:"Executive"})]})})})}}]),a}(n.Component),D=Object(h.e)(P),w={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",height:"70vh",background:"black"}},E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleEdit=function(e){n.setState({editModelOpen:!0,tempObj:e,updateName:e.name,updatemanu:e.Manuname,updateStock:!0===e.stock?"Stock In":"Stock Out",updateDiscount:e.Discount,updatePrice:e.price})},n.handleUpdatecancel=function(){n.setState({editModelOpen:!1})},n.handleUpdate=function(){var e=n.state,t=e.tempObj,a=e.updateName,s=e.updatemanu,c=e.updateStock,r=e.updateDiscount,d=e.updatePrice,i=-1,l=JSON.parse(localStorage.getItem("products"));l.map((function(e,a){e.name===t.name&&e.Manuname===t.Manuname&&e.price===t.price&&e.stock===t.stock&&e.Discount===t.Discount&&(i=a)}));var o={name:a,Manuname:s,price:d,stock:c,Discount:r};l.splice(i,1,o);n.setState({products:l,editModelOpen:!1,searchProduct:l}),localStorage.setItem("products",JSON.stringify(l))},n.handleDelete=function(e){var t=JSON.parse(localStorage.getItem("products")),a=-1;t.map((function(t,n){t.name===e.name&&t.Manuname===e.Manuname&&t.price===e.price&&t.stock===e.stock&&t.Discount===e.Discount&&(a=n)})),a>-1&&(t.splice(a,1),n.setState({products:t}),localStorage.setItem("products",JSON.stringify(t)))},n.handleSearchValue=function(e){n.setState({searchValue:e.target.value})},n.handleAddProducts=function(){n.setState({addProductsModelOpen:!0})},n.handledetailscancel=function(){n.setState({addProductsModelOpen:!1})},n.handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleStockChange=function(e){"false"===e?n.setState({addStock:!1}):n.setState({addStock:!0})},n.handleAdd=function(){var e=n.state,t=e.addName,a=e.addmanu,s=e.addStock,c=e.addDiscount,r=e.addPrice,d=JSON.parse(localStorage.getItem("products")),i=-1;if(!t||!a||!s||!c||!r)return alert("all fields required");for(var l=0;l<d.length;l++)console.log(d[l].name,t,d[l].Manuname,a,d[l].stock,s,d[l].price,Number(r),d[l].Discount,Number(c)),d[l].name===t&&d[l].Manuname===a&&Number(d[l].price)===Number(r)&&d[l].stock===s&&Number(d[l].Discount)===Number(c)&&(i=l);return i>-1?(n.setState({addProductsModelOpen:!1,addName:"",addmanu:"",addPrice:"",addStock:"",addDiscount:""}),alert("Product is  already exist")):(d.push({name:t,Manuname:a,price:r,stock:s,Discount:c}),localStorage.setItem("products",JSON.stringify(d)),n.setState({products:JSON.parse(localStorage.getItem("products")),addProductsModelOpen:!1,addName:"",addmanu:"",addPrice:"",addStock:"",addDiscount:""}),alert("Product Added"))},n.handleSearchValue=function(e){n.setState({searchValue:e.target.value},n.handleSearchValueChange)},n.handleSearchValueChange=function(){var e=n.state.searchValue,t=JSON.parse(localStorage.getItem("products")).filter((function(t){var a;if(a=t.Manuname.toLowerCase().includes(e.toLowerCase()))return a}));n.setState({products:t})},n.state={length:0,editModelOpen:!1,updateName:"",updatemanu:"",updateStock:"",updateDiscount:"",updatePrice:"",tempObj:{},products:[],addProductsModelOpen:!1,addName:"",addmanu:"",addDiscount:"",addPrice:"",addStock:"",searchValue:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({products:JSON.parse(localStorage.getItem("products"))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,n=t.searchValue,s=t.addProductsModelOpen,c=t.addName,r=t.addmanu,d=t.addDiscount,i=t.addPrice,l=t.editModelOpen,o=t.updateName,u=t.updatemanu,h=t.updateStock,p=t.updateDiscount,j=t.updatePrice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{userName:"Admin"}),Object(m.jsxs)("div",{id:"search-div",children:[Object(m.jsx)("input",{type:"text",onChange:function(t){return e.handleSearchValue(t)},value:n,placeholder:"Search By name"}),Object(m.jsx)("i",{className:"fas fa-search",id:"search-icon"})]}),Object(m.jsxs)("div",{id:"product-wraper",children:[Object(m.jsx)("div",{id:"headding",children:"Products"}),Object(m.jsx)("button",{id:"add-products",onClick:this.handleAddProducts,children:"Add Products"})]}),Object(m.jsx)("div",{className:"d-flex flex-wrap justify-content-center card-wrapper",children:0!==a.length?a.map((function(t,a){return Object(m.jsx)("div",{className:"card m-2",style:{width:"18rem"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["Name: ",t.name]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Manufactured by: ",t.Manuname]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Stock: ",!0===t.stock?"Stock In":"Stock Out"]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Discount: ",t.Discount,"%"]}),Object(m.jsxs)("p",{className:"card-text prouct-card-cost",children:["Price: ",t.price," Rs"]}),Object(m.jsx)("i",{className:"fas fa-edit",style:{marginLeft:"190px"},onClick:function(){return e.handleEdit(t)}}),Object(m.jsx)("i",{className:"fas fa-trash",style:{marginLeft:"20px"},onClick:function(){return e.handleDelete(t)}})]})},a)})):Object(m.jsx)("h6",{style:{color:"red"},children:"Product Not Found"})}),Object(m.jsx)(b.a,{isOpen:s,style:w,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("h2",{children:"Product Details"}),Object(m.jsxs)("label",{id:"userName",children:["Name :",Object(m.jsx)("input",{type:"text",required:!0,value:c,onChange:function(t){return e.handlechange(t,"addName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate move",children:["Manufactured by :",Object(m.jsx)("input",{type:"text",required:!0,value:r,onChange:function(t){return e.handlechange(t,"addmanu")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate movestock",children:["Stock :",Object(m.jsxs)("label",{for:"stockin",children:[Object(m.jsx)("input",{type:"radio",id:"stockin",name:"stock",required:!0,onChange:function(){return e.handleStockChange("true")},className:"input-field"}),"True"]}),Object(m.jsxs)("label",{for:"stockout",children:[Object(m.jsx)("input",{type:"radio",id:"stockout",name:"stock",required:!0,onChange:function(){return e.handleStockChange("false")},className:"input-field"}),"False",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Discount :",Object(m.jsx)("input",{type:"Number",required:!0,value:d,onChange:function(t){return e.handlechange(t,"addDiscount")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Price :",Object(m.jsx)("input",{type:"Number",required:!0,value:i,onChange:function(t){return e.handlechange(t,"addPrice")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"btn-cancel",onClick:this.handledetailscancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleAdd,children:"Add"})]})}),Object(m.jsx)(b.a,{isOpen:l,style:w,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("h2",{children:"Update"}),Object(m.jsxs)("label",{id:"userName",children:["Name :",Object(m.jsx)("input",{type:"text",required:!0,value:o,onChange:function(t){return e.handlechange(t,"updateName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate move",children:["Manufactured by :",Object(m.jsx)("input",{type:"text",required:!0,value:u,onChange:function(t){return e.handlechange(t,"updatemanu")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Stock :",Object(m.jsx)("input",{type:"text",required:!0,value:h,onChange:function(t){return e.handlechange(t,"updateStock")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Discount :",Object(m.jsx)("input",{type:"text",required:!0,value:p+"%",onChange:function(t){return e.handlechange(t,"updateDiscount")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Price :",Object(m.jsx)("input",{type:"text",required:!0,value:j,onChange:function(t){return e.handlechange(t,"updatePrice")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"btn-cancel",onClick:this.handleUpdatecancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleUpdate,children:"Update"})]})})]})}}]),a}(n.Component),L={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"50%",height:"70vh",background:"black"}},I=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleEdit=function(e){n.setState({editModelOpen:!0,tempObj:e,updateFirstName:e.FirstName,updateLastName:e.LastName,updateDOB:e.DOB,updateGender:e.Gender,updateYOE:e.YOE,updatePassword:e.PassWord})},n.handleUpdatecancel=function(){n.setState({editModelOpen:!1})},n.handleUpdate=function(){var e=n.state,t=e.tempObj,a=e.updateFirstName,s=e.updateLastName,c=e.updateDOB,r=e.updateGender,d=e.updateYOE,i=e.updatePassword,l=-1,o=JSON.parse(localStorage.getItem("salesExecutive"));o.map((function(e,a){e.FirstName===t.FirstName&&e.LastName===t.LastName&&e.DOB===t.DOB&&e.Gender===t.Gender&&e.YOE===t.YOE&&e.PassWord===t.PassWord&&(l=a)}));var u={FirstName:a,LastName:s,DOB:c,Gender:r,YOE:d,PassWord:i};o.splice(l,1,u);n.setState({products:o,editModelOpen:!1,searchProduct:o}),localStorage.setItem("salesExecutive",JSON.stringify(o))},n.handleDelete=function(e){var t=JSON.parse(localStorage.getItem("salesExecutive")),a=-1;t.map((function(t,n){t.FirstName===e.FirstName&&t.LastName===e.LastName&&t.DOB===e.DOB&&t.Gender===e.Gender&&t.YOE===e.YOE&&e.PassWord===e.PassWord&&(a=n)})),a>-1&&(t.splice(a,1),n.setState({products:t}),localStorage.setItem("salesExecutive",JSON.stringify(t)))},n.handleSearchValue=function(e){n.setState({searchValue:e.target.value})},n.handleAddProducts=function(){n.setState({addProductsModelOpen:!0})},n.handledetailscancel=function(){n.setState({addProductsModelOpen:!1})},n.handlechange=function(e,t){n.setState(Object(p.a)({},t,e.target.value))},n.handleStockChange=function(e){n.setState({addGender:e})},n.handleAdd=function(){var e=n.state,t=e.addFirstName,a=e.addLastName,s=e.addDOB,c=e.addYOE,r=e.addGender,d=e.addPassword;if(!t||!a||!s||!c||!r||!d)return alert("all fields required");for(var i=JSON.parse(localStorage.getItem("salesExecutive")),l=-1,o=0;o<i.length;o++)i[o].FirstName===t&&i[o].LastName===a&&i[o].DOB===s&&i[o].Gender===r&&i[o].YOE===Number(c)&&i[o].PassWord===d&&(l=o);return l>-1?(n.setState({addProductsModelOpen:!1,addFirstName:"",addLastName:"",addDOB:"",addGender:"",addYOE:"",addPassword:""}),alert("sales Executive details is  already exist")):(i.push({FirstName:t,LastName:a,DOB:s,Gender:r,YOE:Number(c),PassWord:d}),localStorage.setItem("salesExecutive",JSON.stringify(i)),n.setState({products:JSON.parse(localStorage.getItem("salesExecutive")),addProductsModelOpen:!1,addFirstName:"",addLastName:"",addDOB:"",addGender:"",addYOE:"",addPassword:""}),alert("sales Executive details added"))},n.handleSearchValue=function(e){n.setState({searchValue:e.target.value},n.handleSearchValueChange)},n.handleSearchValueChange=function(){var e=n.state.searchValue,t=JSON.parse(localStorage.getItem("salesExecutive")).filter((function(t){var a,n=t.FirstName,s=t.LastName;if(a=n.toLowerCase().includes(e.toLowerCase())||s.toLowerCase().includes(e.toLowerCase()))return a}));n.setState({products:t})},n.state={length:0,editModelOpen:!1,updateFirstName:"",updateLastName:"",updateDOB:"",updateGender:"",updateYOE:"",updatePassword:"",tempObj:{},products:[],addProductsModelOpen:!1,addFirstName:"",addLastName:"",addDOB:"",addGender:"",addYOE:"",addPassword:"",searchValue:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({products:JSON.parse(localStorage.getItem("salesExecutive"))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,n=t.searchValue,s=t.addProductsModelOpen,c=t.addFirstName,r=t.addLastName,d=t.addDOB,i=t.addYOE,l=t.addPassword,o=t.editModelOpen,u=t.updateFirstName,h=t.updateLastName,p=t.updateDOB,j=t.updateGender,O=t.updateYOE,x=t.updatePassword;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{userName:"Admin"}),Object(m.jsxs)("div",{id:"search-div",children:[Object(m.jsx)("input",{type:"text",onChange:function(t){return e.handleSearchValue(t)},value:n,placeholder:"Search By name"}),Object(m.jsx)("i",{className:"fas fa-search",id:"search-icon"})]}),Object(m.jsxs)("div",{id:"product-wraper",children:[Object(m.jsx)("div",{id:"headding",children:"Sales Executive Team"}),Object(m.jsx)("button",{id:"add-products",onClick:this.handleAddProducts,children:"Add Products"})]}),Object(m.jsx)("div",{className:"d-flex flex-wrap justify-content-center card-wrapper",children:0!==a.length?a.map((function(t,a){return Object(m.jsx)("div",{className:"card m-2",style:{width:"18rem"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title product-card-brand",children:["FirstName: ",t.FirstName]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["LastName: ",t.LastName]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["DOB: ",t.DOB]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Gender: ",t.Gender]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Experience: ",t.YOE,"Y"]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["PassWord: ",t.PassWord]}),Object(m.jsx)("i",{className:"fas fa-edit",style:{marginLeft:"190px"},onClick:function(){return e.handleEdit(t)}}),Object(m.jsx)("i",{className:"fas fa-trash",style:{marginLeft:"20px"},onClick:function(){return e.handleDelete(t)}})]})},a)})):Object(m.jsx)("h6",{style:{color:"red"},children:"Product Not Found"})}),Object(m.jsx)(b.a,{isOpen:s,style:L,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("h2",{children:"Sales Executive Details"}),Object(m.jsxs)("label",{id:"userName",children:["FirstName: :",Object(m.jsx)("input",{type:"text",required:!0,value:c,onChange:function(t){return e.handlechange(t,"addFirstName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate move",children:["LastName :",Object(m.jsx)("input",{type:"text",required:!0,value:r,onChange:function(t){return e.handlechange(t,"addLastName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate movestock",children:["Gender :",Object(m.jsxs)("label",{for:"Male",children:[Object(m.jsx)("input",{type:"radio",id:"Male",name:"gender",required:!0,onChange:function(){return e.handleStockChange("Male")},className:"input-field"}),"Male"]}),Object(m.jsxs)("label",{for:"Female",children:[Object(m.jsx)("input",{type:"radio",id:"Female",name:"gender",required:!0,onChange:function(){return e.handleStockChange("Female")},className:"input-field"}),"Female",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["DOB :",Object(m.jsx)("input",{type:"date",required:!0,value:d,onChange:function(t){return e.handlechange(t,"addDOB")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Experience :",Object(m.jsx)("input",{type:"Number",required:!0,value:i,onChange:function(t){return e.handlechange(t,"addYOE")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["PassWord :",Object(m.jsx)("input",{type:"text",required:!0,value:l,onChange:function(t){return e.handlechange(t,"addPassword")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"btn-cancel",onClick:this.handledetailscancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleAdd,children:"Add"})]})}),Object(m.jsx)(b.a,{isOpen:o,style:L,children:Object(m.jsxs)("div",{id:"Update",children:[Object(m.jsx)("h2",{children:"Update"}),Object(m.jsxs)("label",{id:"userName",children:["FirstName :",Object(m.jsx)("input",{type:"text",required:!0,value:u,onChange:function(t){return e.handlechange(t,"updateFirstName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate ",children:["LastName :",Object(m.jsx)("input",{type:"text",required:!0,value:h,onChange:function(t){return e.handlechange(t,"updateLastName")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["DOB :",Object(m.jsx)("input",{type:"text",required:!0,value:p,onChange:function(t){return e.handlechange(t,"updateDOB")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Gender :",Object(m.jsx)("input",{type:"text",required:!0,value:j,onChange:function(t){return e.handlechange(t,"updateGender")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["Experience :",Object(m.jsx)("input",{type:"text",required:!0,value:O,onChange:function(t){return e.handlechange(t,"updateYOE")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{className:"userupdate",children:["PassWord :",Object(m.jsx)("input",{type:"text",required:!0,value:x,onChange:function(t){return e.handlechange(t,"updatePassword")},className:"input-field"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"btn-cancel",onClick:this.handleUpdatecancel,children:"Cancel"}),Object(m.jsx)("button",{id:"log-signin-btn",onClick:this.handleUpdate,children:"Update"})]})})]})}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleBack=function(){n.props.history.push("/order")},n.handleBacktosignup=function(){n.props.history.push("/")},n.state={cart:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({cart:JSON.parse(localStorage.getItem("order"))})}},{key:"render",value:function(){var e=this.state.cart;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{style:{marginLeft:"6%",marginTop:"5%"},onClick:this.handleBack,children:"Back"}),Object(m.jsx)("button",{style:{marginLeft:"6%"},onClick:this.handleBacktosignup,children:"Back to signUp"}),Object(m.jsx)("h2",{style:{marginLeft:"45%"},children:"Order Details"}),Object(m.jsx)("div",{className:"d-flex flex-wrap justify-content-center card-wrapper",children:e.length&&e.map((function(e,t){return Object(m.jsx)("div",{className:"card-order m-2",style:{width:"30rem"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["Executive Name: ",e.Executivename]}),Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["PassWord: ",e.password]}),Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["OrderId: ",e.orderId]}),Object(m.jsxs)("div",{children:["Product Details:",Object(m.jsxs)("h5",{className:"card-title product-card-title",children:["Name: ",e.name]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Manufactured by: ",e.Manuname]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Stock: ",!0===e.stock?"Stock In":"Stock Out"]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Discount: ",e.Discount,"%"]}),Object(m.jsxs)("p",{className:"card-text prouct-card-cost",children:["Price: ",e.price," Rs"]}),Object(m.jsxs)("p",{className:"card-text product-card-brand",children:["Quantity: ",e.count]})]})]})},t)}))})]})}}]),a}(n.Component),B=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(u.a,{basename:"/",children:[Object(m.jsx)(h.a,{exact:!0,path:"/",component:g}),Object(m.jsx)(h.a,{exact:!0,path:"/Manager",component:D}),Object(m.jsx)(h.a,{exact:!0,path:"/Medicine",component:E}),Object(m.jsx)(h.a,{exact:!0,path:"/salesExe",component:I}),Object(m.jsx)(h.a,{exact:!0,path:"/Executive",component:k}),Object(m.jsx)(h.a,{exact:!0,path:"/order",component:v}),Object(m.jsx)(h.a,{exact:!0,path:"/display",component:F})]})}}]),a}(n.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),q()}},[[51,1,2]]]);
//# sourceMappingURL=main.4a46457a.chunk.js.map