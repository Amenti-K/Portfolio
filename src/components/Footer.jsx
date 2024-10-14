import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 dark:bg-zinc-200 text-white dark:text-gray-700 py-6 pb-4 px-32 flex items-center justify-between">
      {/* Logo */}
      <div className="text-3xl font-bold mb-2">Amenti</div>

      {/* Copyright statement */}
      <p className="text-sm">
        &copy; 2024 by <span className="font-bold">Amenti</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
