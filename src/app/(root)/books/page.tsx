import React from "react";
import { BookType } from "@/app/api/db";

export const metadata = {
  title: "Books 📖 | Nextjs",
  description: "List of all available books",
};

const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();

  return (
    <div>
      {data.map((book: BookType) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
};

export default Books;
