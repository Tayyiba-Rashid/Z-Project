import React from "react";
import styles from "../styles/Header.module.css";


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
      <h1  className={styles.h1} >Welcome to Zimo</h1>
      </div>
      <div className={styles.postContainer}>
      <h2 className={styles.postHeading}>Posts Details</h2> 
          {posts.map((post) => (
              <div key={post.id} className={styles.postDetails}>
                <p>
                Post No. {post.id}</p>
                <p>
                User Id. {post.userId}</p>
                <p>
                Post Description:   {post.title}</p>
                </div>
          ))}
      </div>
      
    </div>
  );
}

export default Home;
