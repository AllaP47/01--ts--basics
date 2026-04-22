function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));
import axios from "axios";

interface Post {
  id: number,
  title: string,
  body: string,
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
