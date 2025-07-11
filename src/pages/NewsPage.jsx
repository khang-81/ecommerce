import React from "react";

function NewsPage() {
    const articles = [
        {
            id: 1,
            title: "Summer Collection 2025 is here!",
            date: "July 5, 2025",
            summary: "Explore our new arrivals with vibrant colors, light materials, and sustainable production for your summer wardrobe.",
            category: "New Arrivals",
            readTime: "2 min read"
        },
        {
            id: 2,
            title: "Bella Fashion wins EcoStyle Award",
            date: "June 20, 2025",
            summary: "We're proud to be recognized as a leader in eco-conscious fashion. Read more about our sustainable journey.",
            category: "Awards",
            readTime: "3 min read"
        },
        {
            id: 3,
            title: "Upcoming Flash Sale - Up to 50% Off",
            date: "June 10, 2025",
            summary: "Mark your calendar! Our biggest sale of the year is coming. Huge discounts on all categories.",
            category: "Promotions",
            readTime: "1 min read"
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Shoppies News</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Stay updated with our latest collections, events, and fashion trends
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div 
                        key={article.id} 
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full">
                                    {article.category}
                                </span>
                                <span className="text-gray-500 text-sm">{article.readTime}</span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition duration-200">
                                {article.title}
                            </h2>
                            <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                            <p className="text-gray-600 mb-4">{article.summary}</p>
                            
                            <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition duration-200">
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl">
                    View All News
                </button>
            </div>
        </div>
    );
}

export default NewsPage;