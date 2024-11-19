"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, author: author, imgUrl: imgUrl }),
      });
      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error creating books", error);
    }
  };
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Creat new book</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} className="m-7">
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => {
                console.log(e);
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="author">author</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => {
                console.log(e);
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="imgUrl">Image Url</Label>
            <Input
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => {
                console.log(e);
                setImgUrl(e.target.value);
              }}
            />
          </div>
        </CardContent>
        <CardFooter >
          <Button type={"submit"}>Create book</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BookForm;
