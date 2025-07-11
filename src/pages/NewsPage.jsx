import React from "react";

function NewsPage() {
    const articles = [
        {
            id: 1,
            title: "Summer Collection 2025 is here!",
            date: "July 5, 2025",
            summary:
                "Explore our new arrivals with vibrant colors, light materials, and sustainable production for your summer wardrobe.",
        },
        {
            id: 2,
            title: "Bella Fashion wins EcoStyle Award",
            date: "June 20, 2025",
            summary:
                "We’re proud to be recognized as a leader in eco-conscious fashion. Read more about our sustainable journey.",
        },
        {
            id: 3,
            title: "Upcoming Flash Sale - Up to 50% Off",
            date: "June 10, 2025",
            summary:
                "Mark your calendar! Our biggest sale of the year is coming. Huge discounts on all categories.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Latest News</h1>
            <div className="space-y-6">
                {articles.map((article) => (
                    <div key={article.id} className="border-b pb-6">
                        <h2 className="text-xl font-semibold text-blue-600">{article.title}</h2>
                        <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                        <p className="text-gray-700">{article.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsPage;
