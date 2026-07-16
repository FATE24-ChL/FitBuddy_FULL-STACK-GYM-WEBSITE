"use client";
import { useState,useEffect } from "react";
import Script from "next/script";
export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [userEmail, setuserEmail] = useState("");
  const [course, setCourse] = useState("");
const [amount, setAmount] = useState(0);
useEffect(() => {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  setuserEmail(user.email || "");

  const selectedCourse = JSON.parse(
    localStorage.getItem("selectedCourse") || "{}"
  );

  setCourse(selectedCourse.course || "");
  setAmount(selectedCourse.amount || 0);

}, []);
 const handlePayment = async () => {
  setLoading(true);

  try {
    const response = await fetch(
      "https://fitbuddy-full-stack-gym-website.onrender.com/routes/payment/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
        }),
      }
    );

    const order = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "FitBuddy",

      description: course,

      order_id: order.id,

      handler: async function (response: any) {

  const verify = await fetch(
    "https://fitbuddy-full-stack-gym-website.onrender.com/routes/payment/verify-payment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    }
  );

  const data = await verify.json();

 if (data.success) {

  localStorage.setItem(
    "paymentData",
    JSON.stringify({
      email: userEmail,
      course: course,
      amount: amount,
      paymentId: response.razorpay_payment_id,
      orderId: response.razorpay_order_id,
    })
  );

  window.location.href = "/receipt";

} else {

  alert("Payment Verification Failed!");

}
},

      prefill: {
        email: userEmail,
      },

      theme: {
        color: "#dc2626",
      },
    };

    const razorpay = new (window as any).Razorpay(options);

    razorpay.open();
  } catch (err) {
    console.log(err);

    alert("Payment failed");
  }

  setLoading(false);
};
  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-4">
          Complete Payment
        </h1>


<p className="mb-2">
  Email: {userEmail}
</p>

<p className="mb-4">
  Course: {course}
</p>

<p className="text-red-500 text-2xl mb-6">
  ₹{amount}
</p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="bg-green-500 px-6 py-3 rounded-lg"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </main>
    </>
  );
}