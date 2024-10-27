import {
  getAllPosts,
  getPostAndMorePosts,
  getPreviewPostBySlug,
} from "../lib/api";

// Mock da função fetch
global.fetch = jest.fn();

const mockPostData = {   // Simula um post em JSON da API Contentful
  data: {
    postCollection: {
      items: [
        {
          slug: "test-post",
          title: "Test Post",
          coverImage: { url: "https://example.com/cover.jpg" },
          date: "2023-10-01",
          author: {
            name: "Test Author",
            picture: { url: "https://example.com/author.jpg" },
          },
          excerpt: "This is an excerpt",
          content: {
            json: {},
            links: {
              assets: {
                block: [
                  {
                    sys: { id: "1" },
                    url: "https://example.com/asset.jpg",
                    description: "Test asset",
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
};

beforeEach(() => {
  fetch.mockClear();
  process.env.CONTENTFUL_SPACE_ID = "test-space-id";
  process.env.CONTENTFUL_ACCESS_TOKEN = "test-access-token";
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN = "test-preview-access-token";
});

describe("Contentful API", () => {
  it("fetches all posts", async () => {
    // Simular a resposta da API para getAllPosts
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPostData),
    });

    const posts = await getAllPosts(false);

    expect(posts).toHaveLength(1);    // verifica que só existe 1 post
    expect(posts[0].slug).toBe("test-post"); // verifica que se o slug está correto
    expect(fetch).toHaveBeenCalledTimes(1);  // asssegura que o fetch só foi feito 1 vez
  });

  it("fetches a post and more posts", async () => {
    // Simular a resposta da API para getPostAndMorePosts
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPostData),
    });
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPostData),
    });

    const { post, morePosts } = await getPostAndMorePosts("test-post", false);

    expect(post.slug).toBe("test-post");  // Testa o slug do post principal
    expect(morePosts).toHaveLength(1);    // Verifica se efetivamente existe +1 post
    expect(morePosts[0].slug).toBe("test-post"); // verifica se o slug está correto
    expect(fetch).toHaveBeenCalledTimes(2);      // verifica se foram feitas 2 chamadas à API (2 posts)
  });

  it("fetches a preview post by slug", async () => {
    // Simular a resposta da API para getPreviewPostBySlug
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPostData),
    });

    const post = await getPreviewPostBySlug("test-post");  //esta função vai buscar o post pelo slug

    expect(post.slug).toBe("test-post"); // verifica se o slug do post é o esperado
    expect(fetch).toHaveBeenCalledTimes(1); //verifica se só chamou a API 1 vez
  });
});
