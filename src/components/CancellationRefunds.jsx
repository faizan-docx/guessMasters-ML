import React from 'react';

const CancellationRefunds = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Cancellation & Refunds Policy</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <p className="mb-4">
          At Guess Master, we strive to provide high-quality educational content. However, we understand that circumstances may arise where you need to request a refund.
        </p>
        
        <h3 className="text-xl font-semibold mb-3">Eligibility for Refunds</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Refund requests must be made within 7 days of purchase</li>
          <li>Refunds are only available for the one-time payment of ₹9</li>
          <li>Free content is not eligible for refunds</li>
          <li>Refunds will be processed within 5-7 business days</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Refund Process</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li>Contact us at support@guessmasters.in with your purchase details</li>
          <li>Provide your email address used for the purchase</li>
          <li>State the reason for your refund request</li>
          <li>We will review your request and process the refund if eligible</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">Non-Refundable Items</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Free content and services</li>
          <li>Content accessed after 7 days of purchase</li>
          <li>Refund requests made after the specified time limit</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
        <p className="mb-4">
          Since our service is a one-time payment model, there are no recurring subscriptions to cancel. 
          Once you make a payment, you get lifetime access to the unlocked content.
        </p>

        <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
        <p className="mb-2">
          For any refund or cancellation queries, please contact us at:
        </p>
        <ul className="list-none pl-0 mb-6">
          <li>Email: support@guessmasters.in</li>
          <li>Response time: Within 24 hours</li>
        </ul>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CancellationRefunds;
