function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-zinc-900 mt-10 border-t border-gray-200 dark:border-gray-700 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 uppercase tracking-wide">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                            <li><a href="/" className="hover:text-blue-500 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 uppercase tracking-wide">Categories</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="/shoes" className="hover:text-blue-500 transition">Shoes</a></li>
                            <li><a href="/bags" className="hover:text-blue-500 transition">Bags</a></li>
                            <li><a href="/hats" className="hover:text-blue-500 transition">Hats</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 uppercase tracking-wide">Follow Us</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-800 dark:text-white font-semibold mb-4 uppercase tracking-wide">Legal</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-8 border-gray-300 dark:border-gray-600" />

                <div className="text-center text-gray-500 dark:text-gray-400">
                    © 2025 <span className="font-medium text-gray-800 dark:text-white">Shoppies</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
