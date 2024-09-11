import { create } from "zustand";

interface CartItem {
  name: string;
  image: string;
  price: string;
}

interface CartState {
  cart: CartItem[];
  setCart: (newCart: CartItem[]) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  setCart: (newCart: CartItem[]) => set({ cart: newCart }),
}));

export default useCartStore;
