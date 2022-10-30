import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [totalCarrito, setTotalCarrito] = useState(0)

    const addToCart = (item) => {
        setCartList([...cartList, item])
        
    }
    const removeList = () => {
        setCartList([])
        
    }
    const deleteItem = (id) => {
        const removeItem =  cartList.filter((basketItem => basketItem.id !== id))
        setCartList(removeItem)
        
    }
    const  totalCart =async () => {
        let importeTotal = 0

       cartList.map(item => {
       return  importeTotal += (item.precio * item.cantidad)
        })
      setTotalCarrito(importeTotal)
        return importeTotal
    }

    return (
        <CartContext.Provider value={{ cartList, totalCarrito, addToCart, removeList, deleteItem, totalCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;
