import React, { useEffect } from 'react';

const PaymentPage = ({ amount }) => {
    // Set the amount dynamically based on props
    const paymentData = {
        key_id: null,
        is_test_mode: false,
        merchant: {
            id: "OanWRAywMeSQSI",
            name: "ecommerce",
            image: null,
            brand_color: "rgb(35,113,236)",
            brand_text_color: "#ffffff",
            branding_variant: "control",
            optimised_web_vitals: "on",
            contact_optional: false,
            email_optional: false,
            support_email: "",
            support_mobile: "",
            tnc_link: "https://tnc.razorpay.com/tnc/OanWUUO0wJoiI6",
            merchant_country_code: "IN",
            policy_url: "https://merchant.razorpay.com/policy/OanWUUO0wJoiI6",
        },
        payment_link: {
            id: "pl_Oanw8rEweOSQxB",
            amount: amount * 100, // Convert to paise
            currency: "INR",
            currency_symbol: "₹",
            min_amount: 100,
            amount_formatted: amount.toFixed(2),
            settings: {
                udf_schema: "[{\"name\":\"comment\",\"title\":\"Comment\",\"required\":true,\"type\":\"string\",\"options\":[],\"settings\":{\"position\":1}}]",
                version: "V2",
                theme: "light",
            },
            handle_url: "https://razorpay.me/@ecommerce9429",
        },
        org: {
            branding: {
                show_rzp_logo: true,
                branding_logo: "",
                security_branding_logo: ""
            },
            custom_code: "rzp"
        },
        base_url: "https://api.razorpay.com",
        environment: "production"
    };

    useEffect(() => {
        // Initialize Razorpay app
        const renderApp = () => {
            window.RZP.renderApp('root', {
                key_id: paymentData.key_id,
                base_url: paymentData.base_url,
                merchant: paymentData.merchant,
                org: paymentData.org,
                view_preferences: {},
                paymentData: paymentData.payment_link,
                environment: paymentData.environment,
                payment_handle_amount: null,
                is_preview: paymentData.is_test_mode,
                keyless_header: null,
                order_id: null,
            });
        };

        // Load the Razorpay scripts
        const script = document.createElement('script');
        script.src = "https://cdn.razorpay.com/static/payment-handle/bundle.js";
        script.defer = true;
        script.onload = renderApp;
        document.body.appendChild(script);

        return () => {
            // Clean up script from the document
            document.body.removeChild(script);
        };
    }, [amount]);

    return (
        <div id="root">
            {/* Placeholder for Razorpay payment app */}
        </div>
    );
};

export default PaymentPage;
