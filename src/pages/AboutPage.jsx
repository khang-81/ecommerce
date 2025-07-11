import React from "react";

function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About Shoppies</h1>
                <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Welcome to <span className="font-bold text-indigo-600">Shoppies</span> – where fashion meets passion. We are a modern
                        ecommerce brand specializing in sustainable, stylish, and affordable fashion products.
                        From handcrafted shoes and elegant bags to timeless hats, our mission is to empower
                        individuals to express themselves through style.
                    </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Commitment</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Founded in 2023, we are committed to eco-conscious design, ethical manufacturing, and
                        exceptional customer service. Thank you for being part of our journey.
                    </p>
                </div>

                <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-600">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        To revolutionize the fashion industry by providing sustainable, high-quality products
                        that don't compromise on style or ethics. We believe fashion should be both beautiful
                        and responsible.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
                    Meet Our Team
                </button>
            </div>
        </div>
    );
}

export default AboutPage;