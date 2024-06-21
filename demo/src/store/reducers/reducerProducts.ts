// const products=[
//     {
//       id:1,
//       name:'Pizza',
//       img:'https://media.istockphoto.com/id/1447172966/photo/tasty-pizza-with-mushroom-cheese-tomatoes-pepper-becon-sausage-fresh-salad-and-pesto.webp?b=1&s=170667a&w=0&k=20&c=QRN2inC_XgtuAO3WWtAcSCTlIInlzmBDoCkRQDtzsPU=',
//       price:30,
//       quantity:10,
//       description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
//     },
//     {
//       id:2,
//       name:'Hamburger',
//       img:'https://media.istockphoto.com/id/1500141300/photo/bbq-classic-burger-against-fiery-flames-vibrant-food-black-background.webp?b=1&s=170667a&w=0&k=20&c=6cCdI32kPORZumfHMiPu_hr9YvtY1cWf5eCu8AFIqgc=',
//       price:25,
//       quantity:10,
//       description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
//     },
//     {
//       id:3,
//       name:'Bread',
//       img:'https://media.istockphoto.com/id/1432301803/photo/sliced-bread-pain-de-mie-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=V3kBvaZx57ZDU0LeivcN0DSAFLY2ISpVefmwS-sl8Wg=',
//       price:19,
//       quantity:10,
//       description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
//     },
//     {
//       id:4,
//       name:'Cake',
//       img:'https://media.istockphoto.com/id/1676097087/photo/pastel-de-tres-leches-three-milk-cake-latin-america-bakery-with-strawberries.webp?b=1&s=170667a&w=0&k=20&c=fafTp3QFmHBxk7OjEEhmAG3Q_4MQvAlwT2lk8lwcPIg=',
//       price:37,
//       quantity:10,
//       description:' Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitisquisquam magnam magni ut deleniti!'
//     },
// //   ]

// localStorage.setItem('products', JSON.stringify(products));
const storedCheckString = localStorage.getItem('products');
const initialProducts = storedCheckString ? JSON.parse(storedCheckString) : [];
const reducerProducts = (state = initialProducts, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "ADDPRODUCT":
            let ProudctsArray=state.map((element:any )=> {
                if(action.payload.id===element.id ){
                  if(element.quantity>0){
                    element.quantity--;
                  }else{
                    alert('HET MAT HANG NAY R');
                  }
                }
                return element;
            });
            localStorage.setItem('products',JSON.stringify(ProudctsArray));
            return ProudctsArray; 
        case "DELETEPRODUCT":
          let ProdductsArray=state.map((e:any)=>{
            if(action.payload.id===e.id){
              e.quantity=action.payload.quantity;
            }
          })
          localStorage.setItem('products',JSON.stringify(ProudctsArray));
          return ProudctsArray; 
        default:
            return state;
    }
};
export default reducerProducts;
