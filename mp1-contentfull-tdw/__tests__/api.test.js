import {
  getAllPosts,
  getPostAndMorePosts,
  getPreviewPostBySlug,
} from "../lib/api";

// Mock da função fetch
global.fetch = jest.fn();

const mockPostData = {
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

    expect(posts).toHaveLength(1);
    expect(posts[0].slug).toBe("test-post");
    expect(fetch).toHaveBeenCalledTimes(1);
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

    expect(post.slug).toBe("test-post");
    expect(morePosts).toHaveLength(1);
    expect(morePosts[0].slug).toBe("test-post");
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("fetches a preview post by slug", async () => {
    // Simular a resposta da API para getPreviewPostBySlug
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockPostData),
    });

    const post = await getPreviewPostBySlug("test-post");

    expect(post.slug).toBe("test-post");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
