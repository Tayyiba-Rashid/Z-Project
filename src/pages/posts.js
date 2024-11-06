import React from 'react'

export async function getServerSideProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return{
        props:{
            posts,
        },
    };
}

const Posts = ({ posts }) => {
        return (
            <div className="bg-gray-100 flex flex-col items-center justify-center">
                <h1 className="font-extrabold text-5xl  m-6"><span className='text-gray-800'>POSTS</span> <span className='text-cyan-500'>DETAILS</span> </h1>
            {posts.map((post) => (
                <div
                className="w-full overflow-hidden shadow-xl rounded-3xl bg-white p-8 flex flex-col border border-gray-200 my-2 mx-4"
                key={post.id}>
                    <p className="text-gray-700"><span className="font-bold text-md text-gray-700 mb-8">Id: </span> {post.id}</p>
                    <p className="text-gray-700"><span className="font-bold text-md text-gray-700 mb-8">Title: </span> {post.title}</p>
                    <p className="text-gray-700"><span className="font-bold text-md text-gray-700 mb-8">Description: </span> {post.body}</p>
                </div>

           ))}
            </div>
        )
}

export default Posts;


// export async function getStaticProps() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const posts = await response.json();
//         return {
//             props:{
//                 posts,
//             },
//         }; 
// }

// const Posts = ({posts}) => {
//         return(
//             <div>
//             <h1>Posts Details</h1>
//             {posts.map((post) => (
//                     <div key={post.id}>
//                         <p>Id: {post.id}</p>
//                         <p>Title: {post.title}</p>
//                         <p>Description: {post.body}</p>
//                     </div>
//                 ))}
//         </div>        
//         );
// }

// export default Posts;