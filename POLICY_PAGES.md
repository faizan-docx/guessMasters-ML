# Policy Pages for Razorpay Verification

This document lists the policy pages that have been added to the Guess Master website to meet Razorpay's verification requirements.

## Added Policy Pages

### 1. Cancellation & Refunds Policy
- **URL**: `/cancellation-refunds`
- **Component**: `CancellationRefunds`
- **Content**: Comprehensive refund policy with 7-day refund window, eligibility criteria, and process details

### 2. Terms and Conditions
- **URL**: `/terms-conditions`
- **Component**: `TermsConditions`
- **Content**: Complete terms of service including user agreements, payment terms, intellectual property, and legal disclaimers

### 3. Shipping Policy
- **URL**: `/shipping`
- **Component**: `ShippingPolicy`
- **Content**: Digital delivery policy explaining instant access to content, system requirements, and technical support

### 4. Privacy Policy
- **URL**: `/privacy`
- **Component**: `PrivacyPolicy`
- **Content**: Comprehensive privacy policy covering data collection, usage, sharing, security, and user rights

### 5. Contact Us
- **URL**: `/contact-us`
- **Component**: `ContactUs`
- **Content**: Contact information, support form, FAQ section, and business hours

## Navigation

All policy pages are accessible through:
- Footer links in the "Legal" section
- Direct navigation via the main navigation menu
- Programmatic routing using the `navigateToPage()` function

## Implementation Details

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: Client-side routing with state management
- **Components**: Individual component files in `src/components/`:
  - `CancellationRefunds.jsx`
  - `TermsConditions.jsx`
  - `ShippingPolicy.jsx`
  - `PrivacyPolicy.jsx`
  - `ContactUs.jsx`
- **Integration**: Seamlessly integrated with existing App.jsx structure

## Razorpay Compliance

These pages meet Razorpay's requirements for:
- ✅ Cancellation & Refunds policy
- ✅ Terms and Conditions
- ✅ Shipping policy (adapted for digital services)
- ✅ Privacy policy
- ✅ Contact information

## URLs for Razorpay Verification

When submitting to Razorpay, use these URLs:
- https://guess-masters-in.vercel.app/cancellation-refunds
- https://guess-masters-in.vercel.app/terms-conditions
- https://guess-masters-in.vercel.app/shipping
- https://guess-masters-in.vercel.app/privacy
- https://guess-masters-in.vercel.app/contact-us

## 📁 Files Created/Modified

- **New**: `src/components/CancellationRefunds.jsx` - Cancellation & Refunds policy component
- **New**: `src/components/TermsConditions.jsx` - Terms and Conditions component
- **New**: `src/components/ShippingPolicy.jsx` - Shipping policy component
- **New**: `src/components/PrivacyPolicy.jsx` - Privacy policy component
- **New**: `src/components/ContactUs.jsx` - Contact Us page component
- **Modified**: `src/App.jsx` - Added routing and navigation
- **New**: `POLICY_PAGES.md` - Documentation for the policy pages

## Maintenance

- All pages include "Last updated" dates that automatically reflect the current date
- Content is tailored specifically for Guess Master's digital education platform
- Policies are written in compliance with Indian laws and regulations
- Contact information uses the support@guessmasters.in email address
