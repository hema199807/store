export const medicine=[
    {
    name:"Mirbeg 25 Tablet ER-10",
    Manuname:"Ipca Laboratories Ltd",
    price:158,
    stock:true,
    Discount:10
    },
    {
        name:"Obimet GX 1 Tablet PR",
        Manuname:"Corona Remedies Pvt Ltd",
        price:107,
        stock:false,
        Discount:5
    },{
        name:"Rosycap 20 Tablet-10",
        Manuname:"AKUMENTIS HEALTHCARE LTD",
        price:117,
        stock:true,
        Discount:15
    },{
        name:"CC 74 Tablet-30",
        Manuname:"Wockhardt Ltd",
        price:452,
        stock:false,
        Discount:3
    },{
        name:"Eios Fe Tablet-10",
        Manuname:"Medsol India Overseas Pvt Ltd",
        price:120,
        stock:true,
        Discount:5
    }
]
export const salesTeam=[
    {
        FirstName:"Hari",
        LastName:"Dodda",
        DOB:"1993-09-20",
        Gender:"Male",
        YOE:2,
        PassWord:"hari2dodda"
    },
    {
        FirstName:"Hamsi",
        LastName:"Devarapu",
        DOB:"1994-02-14",
        Gender:"Female",
        YOE:5,
        PassWord:"hamsi5devarapu"
    },
    {
        FirstName:"Vamsi",
        LastName:"Yadav",
        DOB:"1992-01-20",
        Gender:"Male",
        YOE:5,
        PassWord:"vamsi5devarapu"
    },
    {
        FirstName:"Rashmi",
        LastName:"Gowda",
        DOB:"1991-02-02",
        Gender:"Female",
        YOE:7,
        PassWord:"rashmi7gowda"
    },
    {
        FirstName:"Arjun",
        LastName:"Gowda",
        DOB:"1992-10-25",
        Gender:"Male",
        YOE:5,
        PassWord:"arjun5gowda"
    }
]
export const orders=[
    {
        ExecutiveName:"Arjun Gowda",
        orderId:new Date(),
        customerName:"Ravi",
        customerContactNo:"123456789",
        product:[{
            name:"Eios Fe Tablet-10",
            Manuname:"Medsol India Overseas Pvt Ltd",
            price:120,
            stock:true,
            Discount:5
        }],
        quantity:1,
        total:120
    }
] 