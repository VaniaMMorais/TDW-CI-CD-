import React from "react";
import { render, screen } from "@testing-library/react";
import MoreStories from "../app/more-stories";

test("renders MoreStories with posts", () => {  //Mock de um post
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

  render(<MoreStories morePosts={mockPosts} />);   //Renderiza o componente MoreStories

  const titleLink = screen.getByText("Sample Post"); //Verifica se o título aparece no ecrã
  expect(titleLink).toBeInTheDocument();
  expect(titleLink).toHaveAttribute("href", "/posts/sample-post"); //Verifica que o link direciona para o slug correto

  // Check if the excerpt is rendered
  const excerpt = screen.getByText("This is a sample excerpt of the post.");  //Verifica se o excerpt do post é renderizado corretamente
  expect(excerpt).toBeInTheDocument();

  // Check if the author's avatar is rendered
  const authorAvatar = screen.getByAltText("John Doe"); //Verifica se a imagem do autor é exibida juntamente com o nome dele
  expect(authorAvatar).toBeInTheDocument();
});
