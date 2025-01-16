
'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ProductCard from "./Productcard";
import { Product } from "@/pages/types";

const MenuItems = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch products from API
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    // Load cart from local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Checkout logic without navigation to another page
  const goToCheckout = () => {
    setIsCheckout(true);
    alert("Your burger will be at your doorsteps in a few minutes!");
  };

  // Calculate total cart amount
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9IbH4bYpshBfGpZPEBTz5MJaVVCp7xHAcQ&s')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Burgers In Our Menu</h1>
          <p className="text-xl text-white">Explore And Order Now!</p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-green-600">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={toggleCart}
            className="bg-green-500 text-white px-4 py-2 rounded shadow-lg"
          >
            {showCart ? "Hide Cart" : "Show Cart"} ({cart.length})
          </button>
          {showCart && (
            <div className="bg-white p-4 rounded shadow-lg mt-2">
              <h2 className="text-xl font-bold mb-2">Your Cart</h2>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}

              {/* Total Amount */}
              <div className="flex justify-between mt-2 font-bold">
                <span>Total Amount</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              <button
                onClick={goToCheckout}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
