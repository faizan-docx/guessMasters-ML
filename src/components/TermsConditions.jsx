import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using Guess Master ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="mb-4">
          Guess Master provides AI-powered guess papers and practice materials for government exam preparation. 
          Our service includes predictive mock papers, practice tests, and educational content.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          To access certain features of the Service, you may be required to provide an email address. 
          You are responsible for maintaining the confidentiality of your account information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>First paper is provided free of charge</li>
          <li>Additional papers can be unlocked for a one-time payment of ₹9</li>
          <li>All payments are processed securely through Razorpay</li>
          <li>No recurring charges or subscriptions</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, including but not limited to text, graphics, logos, and software, is the property of Guess Master 
          and is protected by copyright and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
        <p className="mb-4">You may not use our Service:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
          <li>To submit false or misleading information</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
        <p className="mb-4">
          The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, 
          Guess Master excludes all representations, warranties, conditions and terms relating to our Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Guess Master, nor its directors, employees, partners, agents, suppliers, or affiliates, 
          be liable for any indirect, incidental, special, consequential, or punitive damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these terms 
          will be subject to the exclusive jurisdiction of the courts in India.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. We will notify users of any material changes 
          via email or through the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
        <p className="mb-2">
          If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsConditions;
