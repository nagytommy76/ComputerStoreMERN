export type UserOrders = {
   deliveryPrice: number
   deliveryType: string
   orderedAt: string
   payedAt: number
   paymentMethod: string
   totalPrice: number
   products: Products[]
   _id: string
}

type Products = {
   productID: string
   productName: string
   productQty: number
   _id: string
}
