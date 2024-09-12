import { useEffect, useState } from "react";
import "./app.scss";
const Content = () => {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    name: string;
  }
  const tabs = ["posts", "comments", "albums"];

  const [posts, setPosts] = useState<Post[]>([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts: Post[]) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY >= 200
        ? setShowGoToTop(true)
        : setShowGoToTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("add");

    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("remove");
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((pre) => pre - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1 className="heading">{countdown}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  background: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      {posts.map((post: Post) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

export default Content;
