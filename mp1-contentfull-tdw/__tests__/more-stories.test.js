import React from "react";
import { render, screen } from "@testing-library/react";
import MoreStories from "../app/more-stories"; // O componente que contém PostPreview

test("renders MoreStories with posts", () => {
  const mockPosts = [
    {
      title: "Sample Post",
      coverImage: { url: "http://example.com/sample.jpg" },
      date: "2024-10-16",
      excerpt: "This is a sample excerpt of the post.",
      author: {
        name: "John Doe",
        picture: { url: "http://example.com/avatar.jpg" },
      },
      slug: "sample-post",
    },
  ];

  // Render the MoreStories component with mock posts
  render(<MoreStories morePosts={mockPosts} />);

  // Check if the title is rendered
  const titleLink = screen.getByText("Sample Post");
  expect(titleLink).toBeInTheDocument();
  expect(titleLink).toHaveAttribute("href", "/posts/sample-post");

  // Check if the excerpt is rendered
  const excerpt = screen.getByText("This is a sample excerpt of the post.");
  expect(excerpt).toBeInTheDocument();

  // Check if the author's avatar is rendered
  const authorAvatar = screen.getByAltText("John Doe");
  expect(authorAvatar).toBeInTheDocument();
});
