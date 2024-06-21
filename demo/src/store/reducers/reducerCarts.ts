const storedCheckString = localStorage.getItem('carts');
const initialCarts = storedCheckString ? JSON.parse(storedCheckString) : [];
const reducerCarts = (state = initialCarts, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "ADDPRODUCT":
            let find:number=state.findIndex((e:any)=>{
                return e.id===action.payload.id;
            })
            if(find!=-1){
                console.log(state[find].number);
                state[find].number+=1;
                localStorage.setItem('carts',JSON.stringify([...state]));
                return [...state];
            }
            localStorage.setItem('carts',JSON.stringify([...state,{...action.payload,number:1,idCart:Math.ceil(Math.random()*100000)}]));
            return [...state,{...action.payload,number:1,idCart:Math.ceil(Math.random()*100000)}];
        case "DELETEPRODUCT":
            let newArr=state.filter(function(e:any){
                return e.id!=action.payload.id;
            })
            localStorage.setItem('carts',JSON.stringify(newArr));
            return newArr;
        default:
            return state;
    }
};
export default reducerCarts;
