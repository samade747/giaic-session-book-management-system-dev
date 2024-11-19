import { books } from "@/data";
import { NextRequest } from "next/server";
export const GET = async () => {
  const data = JSON.stringify(books);
  return new Response(data, { status: 200 });
};
export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const newBook = await request.json();
    newBook.id = books.length + 1
    books.push(newBook)
    return new Response(JSON.stringify({ newBook: newBook }), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ message: "INvalide data" }), {
      status: 400,
    });
  }
};
