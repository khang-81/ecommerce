import React from "react";

function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We'd love to hear from you! Reach out through the form or our contact details below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send us a message</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300" 
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300" 
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Message</label>
                            <textarea 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300" 
                                rows="5"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                                <p className="text-gray-600">khang08012k4@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                                <p className="text-gray-600">+84 32 924 8087</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Address</h3>
                                <p className="text-gray-600">Ngoc Hoi, Ha Noi, Viet Nam</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Business Hours</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;