"use client";
import { useState } from "react";
import Script from "next/script";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { AfterSuccessPayment } from "@/actions/payments.action";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface VerificationData {
  orderCreationId: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
}

const CheckoutWithRazorpay: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const createOrderId = async (amount: number): Promise<string> => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Razorpay order ID");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("Error creating order ID:", error);
      toast.error("Failed to initiate checkout. Please try again.");
      throw error;
    }
  };

  const verifyPayment = async (data: VerificationData): Promise<boolean> => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Payment verification failed");
      }

      const result = await response.json();
      return result.isOk;
    } catch (error) {
      console.error("Error verifying payment:", error);
      toast.error("Payment verification failed. Please contact support.");
      return false;
    }
  };

  const handlePayment = async ({ amount }: { amount: number }) => {
    setLoading(true);


    try {
      const orderId = await createOrderId(amount);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Quantech",
        description: "Product Purchase",
        order_id: orderId,
        handler: async (response: RazorpayResponse) => {
          const verificationData: VerificationData = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const isVerified = await verifyPayment(verificationData);

          if (isVerified) {
            await AfterSuccessPayment()
            toast.success("Payment successful!");
            router.push("/login")
          } else {
            toast.error("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "User paying🔥",
          email: "customer@example.com",
          address: ""
        },
        notes: {
          address: "lafl;jsdflkj",
          addres2: "lafl;jsdflkj"
        },
        theme: {
          color: "#FAFAF1",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", (response: any) => {
        toast.error(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />


      <Button onClick={async () => {
        await handlePayment({ amount: 100 });
      }}>
        Subscribe
      </Button>
    </>
  );
};

export default CheckoutWithRazorpay;