import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create an account, 
          make a purchase, or contact us for support.
        </p>

        <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Email address (when you sign up or make a purchase)</li>
          <li>Payment information (processed securely through Razorpay)</li>
          <li>Usage data and preferences</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>IP address and browser information</li>
          <li>Pages visited and time spent on our service</li>
          <li>Device information and operating system</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Personalize your experience</li>
          <li>Monitor and analyze usage patterns</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties except:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>With payment processors (Razorpay) for transaction processing</li>
          <li>When required by law or to protect our rights</li>
          <li>With your explicit consent</li>
          <li>In connection with a business transfer or acquisition</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your experience, analyze usage, 
          and provide personalized content.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Delete your account and data</li>
          <li>Opt-out of marketing communications</li>
          <li>Data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information for as long as necessary to provide our services 
          and fulfill the purposes outlined in this privacy policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
        <p className="mb-4">
          Our service is not intended for children under 13. We do not knowingly collect 
          personal information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes 
          by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this privacy policy, please contact us at:
        </p>
        <ul className="list-none pl-0 mb-6">
          <li>Email: support@guessmasters.in</li>
          <li>Website: https://guess-masters-in.vercel.app/</li>
        </ul>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
