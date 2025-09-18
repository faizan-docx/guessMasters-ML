import React from 'react';

// Cancellation & Refunds Policy
export const CancellationRefunds = () => (
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

// Terms and Conditions
export const TermsConditions = () => (
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

// Shipping Policy
export const ShippingPolicy = () => (
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

// Privacy Policy
export const PrivacyPolicy = () => (
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

// Contact Us
export const ContactUs = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    
    <div className="prose max-w-none">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6">
        We'd love to hear from you! Whether you have questions about our services, need technical support, 
        or want to provide feedback, we're here to help.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div>
              <strong>Email:</strong> support@guessmasters.in
            </div>
            <div>
              <strong>Response Time:</strong> Within 24 hours
            </div>
            <div>
              <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM IST
            </div>
            <div>
              <strong>Website:</strong> https://guess-masters-in.vercel.app/
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Support</h3>
          <div className="space-y-2">
            <div>• Technical issues</div>
            <div>• Payment queries</div>
            <div>• Account problems</div>
            <div>• Content access issues</div>
            <div>• General inquiries</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Subject *</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select a subject</option>
            <option value="technical">Technical Support</option>
            <option value="payment">Payment Issue</option>
            <option value="account">Account Problem</option>
            <option value="content">Content Access</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="5"
            placeholder="Please describe your issue or question in detail..."
            required
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">How do I access my purchased content?</h4>
          <p className="text-gray-600">After payment, you can access all unlocked content through your account dashboard on our website.</p>
        </div>
        <div>
          <h4 className="font-semibold">Is my payment information secure?</h4>
          <p className="text-gray-600">Yes, all payments are processed securely through Razorpay, and we don't store your payment details.</p>
        </div>
        <div>
          <h4 className="font-semibold">Can I get a refund?</h4>
          <p className="text-gray-600">Refunds are available within 7 days of purchase. Please contact us with your purchase details.</p>
        </div>
        <div>
          <h4 className="font-semibold">Do I need to create an account?</h4>
          <p className="text-gray-600">An email address is required for purchases, but you can try our free content without registration.</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  </div>
);
