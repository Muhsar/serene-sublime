const API_URL = "https://serene-sublime.herokuapp.com/api";
const WISH = `${API_URL}/wish`
const AUTH = `${API_URL}/auth`
const CART = `${API_URL}/cart`
export const LOGIN = `${AUTH}/login`
export const REGISTER = `${AUTH}/signup`
export const Add_TO_Cart = `${CART}/add`
export const Add_TO_Wish = `${WISH}/add`
export const Get_All_Wish = `${WISH}/all`
export const Get_All_Cart = `${CART}/all`
export const Get_Wish = (id: any) => `${WISH}/item/${id}`
export const Get_Cart = (id: any) => `${CART}/item/${id}`