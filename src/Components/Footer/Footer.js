import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p style={{ fontSize: "15px" }}>All rights are reserved © Powered by Masar 2024</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpOutlined />
        </button>
      </div>
    </footer>
  );
}
