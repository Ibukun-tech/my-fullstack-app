export  interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

export  interface User {
    id: string;
    name: string;
    email: string;
}

 interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface AppState{
    user:User|null;
    cart:CartItem[];
}

export type Action={type:'LOGIN';payload:User} |{type:'LOGOUT'}|{type:'ADD_TO_CART';payload:CartItem}|{type:'REMOVE_FROM_CART';payload:number;}|{type:'UPDATE_CART_ITEM_QUANTITY';payload:{id:number;quantity:number}};
