import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Hecho por{" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/in/sergio-vidal-moreno-5462b8364/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Sergio
        </a>{" "}
        con
        <span className="text-gradient font-medium"> Amor</span> y
        <span className="text-gradient font-medium"> Cafe</span>
      </p>
    </footer>
  );
}
export default Footer;
