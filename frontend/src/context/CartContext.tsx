import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Product } from '../types/product';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addItem: (item: Product) => void;
    clearCart: () => void;
    decrementItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item: Product) => {
        setCart(prev => {
            const exists = prev.find(ci => ci.id === item.id);
            if (exists) {
                return prev.map(ci =>
                    ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const decrementItem = (id: string) => {
        setCart(prev =>
            prev
                .map(item => {
                    if (item.id === id) {
                        if (item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return null;
                    }
                    return item;
                })
                .filter((item): item is CartItem => Boolean(item))
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, clearCart, decrementItem }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
}
