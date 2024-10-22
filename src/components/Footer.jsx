import React from "react";

export default function Footer() {
  return (
    <footer className="md:py-6 pb-4 px-8 md:px-32 flex items-center justify-center w-full">
      {/* Copyright statement */}
      <p className="text-sm w-max md:text-xl">
        &copy; 2024 by <span className="md:text-2xl">Amenti</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
