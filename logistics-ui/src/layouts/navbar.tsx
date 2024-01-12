import { Pages } from "@/contexts/app-layout-context";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isSticky ? "sticky" : ""}`}
      style={{
        background: "black",
        borderRadius: "7px",
        margin: "15px auto",
        maxWidth: "1150px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link className="navbar-links-logo" href={Pages.home}>
          <p
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              marginRight: "15rem",
            }}
          >
            TruckSAM
          </p>
        </Link>
        <Link className="navbar-links" href={Pages.home}>
          <p>Home</p>
        </Link>
        <Link className="navbar-links" href="/about">
          <p>About Us</p>
        </Link>
        <Link className="navbar-links" href="/services">
          <p>Services</p>
        </Link>
        <Link className="navbar-links" href="/blog">
          <p>Blog</p>
        </Link>
        <Link className="navbar-links" href="/faq">
          <p>FAQ</p>
        </Link>
        <Link className="navbar-links" href="/contact">
          <p>Contact Us</p>
        </Link>
        <span className="p-input-icon-right">
          <InputText 
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ outline: "none", padding: "0.4rem", borderRadius: "50px"}}
          />
          <i className="pi pi-search" />
        </span>
      </div>
    </nav>
  );
};

export { Navbar };
