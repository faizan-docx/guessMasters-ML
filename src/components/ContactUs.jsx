import React from 'react';

const ContactUs = () => {
  return (
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
};

export default ContactUs;
