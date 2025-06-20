
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Black Tee",
    price: 24.99,
    image: "/black-tee.jpg",
  },
  {
    id: 2,
    name: "Street Hoodie",
    price: 39.99,
    image: "/hoodie.jpg",
  },
];

export default function Storefront() {
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    const order = {
      cart,
      customer: customerInfo,
    };

    await fetch("/api/submit-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    // Placeholder PayPal redirect (replace with your PayPal checkout link)
    window.location.href = "https://paypal.com";
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center">Mzresellsz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-xl p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-white text-black py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-800 p-6 rounded-xl max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Checkout</h2>
        <div className="space-y-4">
          <input
            placeholder="Full Name"
            name="name"
            value={customerInfo.name}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          <input
            placeholder="Email"
            name="email"
            value={customerInfo.email}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          <input
            placeholder="Shipping Address"
            name="address"
            value={customerInfo.address}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <button
          onClick={handleCheckout}
          className="mt-4 bg-white text-black py-2 px-4 rounded w-full"
        >
          Checkout with PayPal
        </button>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main>
      <h1>Hello from pages router</h1>
      <Link href="/contact">Go to Contact Page</Link>
    </main>
  );
}
export default function Home() {
  return (
    <main style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Hello from pages router</h1>
      <Link href="/contact">
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Contact Us
        </button>
      </Link>
    </main>
  );
}
