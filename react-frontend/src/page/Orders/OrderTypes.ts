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

export type Products = {
   productID: string
   productImage: string
   productName: string
   productQty: number
   productPrice: number
   productType: string
   _id: string
}
