import {useCart} from "../../../context/CartContext.tsx";
import ButtonIcon from "../ButtonIcon.tsx";
import {Product} from "../../../types/product.ts";

interface HoverIconsProps {
    product: Product;
}

export default function HoverIcons({ product }: HoverIconsProps) {
    const { addItem } = useCart();

    const handleCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem(product);
    };


    return (
        <>
            <ButtonIcon icon="cart" onClick={handleCartClick} />
            <ButtonIcon icon="heart" />
            <ButtonIcon icon="zoom" />
        </>
    );
}
