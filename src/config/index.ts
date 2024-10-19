const config = {
    NODE_ENV: import.meta.env.VITE_NODE_ENV,
    APP_ID: import.meta.env.VITE_APP_ID,
    APP_KEY: import.meta.env.VITE_APP_KEY,
    API_URL: import.meta.env.VITE_API_URL,
    RAZORPAY_KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID,
}

export default config;