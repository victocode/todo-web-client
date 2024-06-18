import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostCard from "./components/TodoCard";
import Hero from "./components/Hero";

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
   <div>
   {/* new change */}
    <Hero />
    <h1>Footer</h1>
   </div>
  );
}

export default App;
