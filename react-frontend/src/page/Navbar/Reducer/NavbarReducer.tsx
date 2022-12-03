export enum NavbarActionTypes {
   SET_IS_NAVBAR_OPEN = 'SET_IS_NAVBAR_OPEN',
   SET_IS_SHOP_DROP_OPEN = 'SET_IS_SHOP_DROP_OPEN',
   SET_IS_USER_DROP_OPEN = 'SET_IS_USER_DROP_OPEN',
   SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
   SET_SHOP_ANCHOR_EL = 'SET_SHOP_ANCHOR_EL',
   SET_USER_ANCHOR_EL = 'SET_USER_ANCHOR_EL',
}

type ProductPayload = {
   [NavbarActionTypes.SET_IS_NAVBAR_OPEN]: boolean
   [NavbarActionTypes.SET_IS_SHOP_DROP_OPEN]: boolean
   [NavbarActionTypes.SET_IS_USER_DROP_OPEN]: boolean
   [NavbarActionTypes.SET_IS_CART_OPEN]: boolean
   [NavbarActionTypes.SET_SHOP_ANCHOR_EL]: null | HTMLElement
   [NavbarActionTypes.SET_USER_ANCHOR_EL]: null | HTMLElement
}

export interface Action {
   type: NavbarActionTypes
   //    payload: ProductPayload
   payload: null | HTMLElement | boolean
}

export interface InitialState {
   isNavbarOpen: boolean
   isShopDropOpen: boolean
   isUserDropOpen: boolean
   isCartOpen: boolean
   shopAnchorEl: null | HTMLElement
   userAnchorEl: null | HTMLElement
}

export const initialNavbarState: InitialState = {
   isNavbarOpen: false,
   isShopDropOpen: false,
   isUserDropOpen: false,
   isCartOpen: false,
   shopAnchorEl: null,
   userAnchorEl: null,
}

// Később folytatni ANY....
const navbarReducer = (state: InitialState, action: any): InitialState => {
   const { payload, type } = action
   switch (type) {
      case NavbarActionTypes.SET_IS_NAVBAR_OPEN:
         return {
            ...state,
            isNavbarOpen: payload,
         }
      case NavbarActionTypes.SET_IS_SHOP_DROP_OPEN:
         return {
            ...state,
            isShopDropOpen: payload,
         }
      case NavbarActionTypes.SET_IS_USER_DROP_OPEN:
         return {
            ...state,
            isUserDropOpen: payload,
         }
      case NavbarActionTypes.SET_IS_CART_OPEN:
         return {
            ...state,
            isCartOpen: payload,
         }
      case NavbarActionTypes.SET_SHOP_ANCHOR_EL:
         return {
            ...state,
            shopAnchorEl: payload,
         }
      case NavbarActionTypes.SET_USER_ANCHOR_EL:
         return {
            ...state,
            userAnchorEl: payload,
         }
      default:
         return state
   }
   // switch (type) {
   //    case NavbarActionTypes.SET_IS_NAVBAR_OPEN:
   //       return {
   //          ...state,
   //          isNavbarOpen: payload.isNavbarOpen,
   //       }
   //    case NavbarActionTypes.SET_IS_SHOP_DROP_OPEN:
   //       return {
   //          ...state,
   //          isShopDropOpen: payload.isShopDropOpen,
   //       }
   //    case NavbarActionTypes.SET_IS_USER_DROP_OPEN:
   //       return {
   //          ...state,
   //          isUserDropOpen: payload.isUserDropOpen,
   //       }
   //    case NavbarActionTypes.SET_IS_CART_OPEN:
   //       return {
   //          ...state,
   //          isCartOpen: payload.isCartOpen,
   //       }
   //    case NavbarActionTypes.SET_SHOP_ANCHOR_EL:
   //       return {
   //          ...state,
   //          shopAnchorEl: payload.shopAnchorEl,
   //       }
   //    case NavbarActionTypes.SET_USER_ANCHOR_EL:
   //       return {
   //          ...state,
   //          userAnchorEl: payload.userAnchorEl,
   //       }
   //    default:
   //       return state
   // }
}

export default navbarReducer
