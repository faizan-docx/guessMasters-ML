import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Digital Delivery</h2>
        <p className="mb-4">
          Guess Master is a digital service that provides online access to educational content. 
          Since our products are digital, there is no physical shipping involved.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Instant Access</h2>
        <p className="mb-4">
          Upon successful payment, you will receive immediate access to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>All unlocked guess papers</li>
          <li>Practice test materials</li>
          <li>Educational resources</li>
          <li>Any future updates to purchased content</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Access Method</h2>
        <p className="mb-4">
          Content is delivered through:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Direct access through your account on our website</li>
          <li>No downloads required - content is accessible online</li>
          <li>Compatible with all modern web browsers</li>
          <li>Mobile-friendly interface for on-the-go access</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
        <p className="mb-4">
          To access our digital content, you need:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Internet connection</li>
          <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
          <li>JavaScript enabled</li>
          <li>No additional software installation required</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Delivery Confirmation</h2>
        <p className="mb-4">
          After successful payment, you will receive:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Immediate access to purchased content</li>
          <li>Confirmation email (if email is provided)</li>
          <li>Access through your account dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
        <p className="mb-4">
          If you experience any issues accessing your content:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Check your internet connection</li>
          <li>Clear your browser cache and cookies</li>
          <li>Try accessing from a different browser</li>
          <li>Contact our support team at support@guessmasters.in</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          For any shipping or access-related queries, please contact us at:
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

export default ShippingPolicy;
