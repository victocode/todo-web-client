import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostCard from "./components/TodoCard";

function App() {
  const [filterBy, setFilterBy] = useState("");// key completed or not-completed 
  const [todos, setTodos] = useState([]); // total todo 
  const [filtedTodos, setFiterdTodos] = useState([]); // alll todo, completed tod, not completed

  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setTodos(json);
          setFiterdTodos(json);
        });
    };
    fetchPosts();
  }, []);  // this execute only once 

  useEffect(() => {
    if (filterBy == "completed") {
  
      setFiterdTodos(todos.filter((item) => item.completed == true));
    } else {
      setFiterdTodos(todos.filter((item) => item.completed == false));
    }
  }, [filterBy]);

  return (
    <section className="mx-16 my-8">
      <div className="flex justify-around items-center">
        <button
          className="border-2  border-green-300 px-4 py-2"
          onClick={() => setFilterBy("completed")}
        >
          Completed{" "}
        </button>
        <button
          className="border-2  border-red-300 px-4 py-2"
          onClick={() => setFilterBy("not-completed")}
        >
          Not Completed{" "}
        </button>
      </div>
      {filtedTodos ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtedTodos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => setSelectedTods((prev) => [...prev, todo])}
            >
              <PostCard
                title={todo.title}
                completed={todo.completed}
                id={todo.id}
                userId={todo.userId}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </section>
  );
}

export default App;
