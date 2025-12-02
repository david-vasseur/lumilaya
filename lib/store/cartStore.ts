import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    deleteItem: (id: number) => void;
    clearCart: () => void;
    total: () => number;
}


export const useCartStore = create(
    persist<CartState>(
        (set, get) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === item.id);

                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id
                                    ? { ...i, qty: i.qty + item.qty }
                                    : i
                            ),
                        };
                    }

                    return { items: [...state.items, item] };
                }),

            deleteItem: (id) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === id);
                    if (!existing) return state;

                    if (existing.qty > 1) {
                        return {
                            items: state.items.map((i) =>
                                i.id === id ? { ...i, qty: i.qty - 1 } : i
                            ),
                        };
                    }

                    return {
                        items: state.items.filter((i) => i.id !== id),
                    };
                }),

            clearCart: () => set({ items: [] }),

            total: () => {
                const items = get().items;
                return items.reduce(
                    (acc, item) => acc + item.price * item.qty,
                    0
                );
            },
        }),
        {
            name: "cart",
        }
    )
);
