import CartCounter from "@/components/shopping-cart/cart-counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppint Cart",
  description: "A simpleist counter"
}

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full space-y-6">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={20} />
    </div>
  )
}