import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 Welcome to Your Project Dashboard</h1>
        <p style={styles.text}>
          This project is a <b>React + ASP.NET Core (Web API)</b> application.
          <br />
          You just logged in successfully using a secure <b>JWT token</b>.
        </p>
        <ul style={styles.list}>
          <li>🔐 Login system connected to backend API</li>
          <li>📦 Frontend built with <b>React + Vite</b></li>
          <li>⚙️ Backend built with <b>ASP.NET Core</b></li>
          <li>☁ Ready to publish on <b>Azure App Service</b></li>
        </ul>
        <p style={styles.text}>
          Next step: we’ll publish this app to Azure 
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #00b09b, #96c93d)", // green gradient
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    width: "600px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    marginBottom: "15px",
  },
  list: {
    textAlign: "left",
    margin: "0 auto 20px",
    maxWidth: "400px",
    fontSize: "15px",
    lineHeight: "1.6",
  },
};

export default Dashboard;
