import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://reactapp2server20250921160511-beauebgsfybfeehb.eastasia-01.azurewebsites.net/api/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (response.ok) {
                const data = await response.json();

                // Save token in localStorage
                localStorage.setItem("token", data.token);

                setMessage("✅ " + (data.message || "Login successful"));

                // Redirect to Dashboard
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000);
            } else {
                const errorData = await response.json();
                setMessage("❌ " + (errorData.message || "Invalid login"));
            }
        } catch (err) {
            console.error("Login error:", err);
            setMessage("⚠️ Cannot connect to server.");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>
                {message && <p style={styles.message}>{message}</p>}
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #6a11cb, #2575fc)", // purple-blue gradient
    },
    card: {
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        width: "100%",
        maxWidth: "400px", // stays centered and not too wide
        textAlign: "center",
    },
    title: {
        marginBottom: "20px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "14px",
    },
    button: {
        width: "100%",
        padding: "12px",
        background: "#6a11cb",
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "10px",
        fontSize: "15px",
    },
    message: {
        marginTop: "15px",
        fontWeight: "bold",
        fontSize: "14px",
    },
};

export default Login;
