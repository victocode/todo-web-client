import React, { useEffect, useState } from "react";

const PostCard = ({ id, userId, title, completed }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => setUser(json));
    };
    fetchUser();
  }, []);

  return (
    <div className="border-2 border-black rounded-lg py-4">
      <div  >
        {user ? (
          <>

            <h1 className="text-red-400 text-center">{user.username}</h1>
          </>
        ) : (
          <></>
        )}
       <div className="flex flex-col items-center justify-center space-y-2">
    
        <h1 className="text-2xl font-bold text-center ">{title}</h1>
        {
          completed ? <h1 className="text-2xl text-center bg-green-400 rounded-md px-2 py-2">Completed</h1> : <h1 className="text-2xl px-2 py-2 bg-red-400 rounded-md ">Not Completed</h1>}

       </div>
      </div>
    </div>
  );
};

export default PostCard;
