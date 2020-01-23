const initState = {
    items:[
        {id:1,carName:'Renault KWID', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",type:"suv", color:'Blue', noOfSeats:4, price:110,img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg?tr=w-456,e-sharpen'},
        {id:2,carName:'Maruti Swift', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", type:"mini", color:'Red', noOfSeats:6, price:800,img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/6964/1570257038808/front-left-side-47.jpg?tr=w-456,e-sharpen'},
        {id:3,carName:'Hyundai Elite i20', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", type:"suv",color:'Yellow', noOfSeats:4, price:1200,img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber/6207/1568880294543/front-left-side-47.jpg?tr=w-456,e-sharpen'},
        {id:4,carName:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",type:"sedan", color:'Blue', noOfSeats:6, price:260,img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/7184/1569922480163/front-left-side-47.jpg?tr=w-456,e-sharpen'},
        {id:5,carName:'Maruti Baleno', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",type:"mini", color:'white', noOfSeats:4, price:160,img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Datsun/Datsun-RediGO/4035/front-left-side-47.jpg?tr=w-456,e-sharpen'},
        {id:6,carName:'Maruti Wagon R', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", type:"sedan",color:'Blue', noOfSeats:4, price:900,img: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/BMW-Z4/6873/1554784181731/front-left-side-47.jpg?tr=w-456,e-sharpen'}
    ]
}

const carReducer = (state = initState,action) => {
    return state;
}
export default carReducer;