export class Signup{
    username! : string;
    password! : string;
    email! : string;
    houseno!: string;
    area! : string;
    city!: string;
    state!: string;
    pincode!:any;
    mobileNumber!: string;
    id: any;
    // userId!: number;
    // sellerId!: number;
    // shipperId!:number;
    role!: string;
}

export class Login{
    email!: string;
    password!: string;
}

export class Products{
    productName!:string;
    productPrice!:number;
    // productCategory!:string;
    productDescription!:string;
    productImage!:string;
    id!:number;
    quantity: undefined|number;
    productId:undefined|number;
}
export class Cart{
    productName!:string;
    productPrice!:number;
    // productCategory!:string;
    productDescription!:string;
    productImage!:string;
    id:number | undefined;
    quantity: undefined|number;
    productId!:number;
    userId!:number;
}

export class priceSummary{
    productPrice!:number;
    discount!:number;
    tax!:number;
    delivery!:number;
    total!:number;

}

export class Order{
    email!: string;
    username!:string;
    address!: string;
    pincode!:any;
    contact!: string;
    totalPrice!: number;
    userId!: string;
    id!:number|undefined;
    // orderDate!: Date;
    // orderStatus!: string;
    // cartId!: number;
}

export class CartItem {
    productId!: number;
    quantity!: number;
    // Include other relevant details if needed (e.g., selected size, color)
  }

  export class Tracking{
    id!: number;
    orderDate!: Date;
    orderStatus!: string;
    userId!: number;
    cartId!: number;
    orderId!: number;
  }