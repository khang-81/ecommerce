import React from "react";

function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            <p className="text-gray-700 text-lg text-center mb-8">
                We'd love to hear from you! Please reach out using the form or contact details below.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-gray-600 font-medium">Name</label>
                    <input type="text" className="w-full mt-1 border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Email</label>
                    <input type="email" className="w-full mt-1 border border-gray-300 p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Message</label>
                    <textarea className="w-full mt-1 border border-gray-300 p-2 rounded" rows="5"></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-10 text-gray-600">
                <p><strong>Email:</strong> khang08012k4@gmail.com</p>
                <p><strong>Phone:</strong> +84 32 924 8087</p>
                <p><strong>Address:</strong> Ngoc Hoi, Ha Noi, Viet Nam</p>
            </div>
        </div>
    );
}

export default ContactPage;
