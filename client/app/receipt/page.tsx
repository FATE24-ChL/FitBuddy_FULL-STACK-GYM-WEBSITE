"use client";

import { useEffect, useState } from "react";

export default function Receipt() {

    const [payment, setPayment] = useState<any>(null);

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("paymentData") || "{}"
        );

        setPayment(data);

    }, []);

    if (!payment)
        return <p>Loading...</p>;

    return (

        <main className="min-h-screen bg-gray-100 flex justify-center items-center">

            <div
                id="receipt"
                className="bg-white p-10 rounded-xl shadow-lg w-125"
            >

                <h1 className="text-3xl font-bold text-center text-red-600">
                    FitBuddy
                </h1>

                <h2 className="text-center text-xl mb-6">
                    Payment Receipt
                </h2>

                <hr className="mb-6"/>

                <p><b>Receipt No:</b> FB-{Date.now()}</p>

                <p><b>Date:</b> {new Date().toLocaleString()}</p>

                <p><b>Email:</b> {payment.email}</p>

                <p><b>Course:</b> {payment.course}</p>

                <p><b>Amount:</b> ₹{payment.amount}</p>

                <p><b>Payment ID:</b> {payment.paymentId}</p>

                <p><b>Order ID:</b> {payment.orderId}</p>

                <p className="text-green-600 font-bold mt-5">
                    Payment Successful
                </p>

                <button

                    onClick={() => window.print()}

                    className="mt-8 w-full bg-red-600 text-white py-3 rounded-lg"

                >

                    Print Receipt

                </button>

            </div>

        </main>

    );

}