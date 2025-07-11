import React, { useState } from "react";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await res.json();
            if (res.ok) {
                alert("Registration successful");
                console.log(data);
                // Có thể chuyển sang trang login
            } else {
                alert(data.error || "Registration failed");
            }
        } catch (err) {
            alert("Server error");
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
