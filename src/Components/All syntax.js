// 📁 React Concepts Guide - All in One

// 1. JSX & Functional Component
import React, { useState, useEffect, useContext, useReducer, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

// 2. Nav Component (Routing Links)
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

// 3. useState & useEffect
function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data.slice(0, 5)));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

// 4. useParams & useNavigate
function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product ID: {id}</h2>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

// 5. useContext
const ThemeContext = React.createContext();
function About() {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme }}>About Page</div>;
}

// 6. useReducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

// 7. useRef
function InputFocus() {
  const inputRef = useRef();
  const handleClick = () => inputRef.current.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}

// 8. useCallback & useMemo
const ExpensiveComponent = React.memo(({ compute }) => {
  console.log("Rendering ExpensiveComponent");
  return <div>{compute(5)}</div>;
});
function MemoExample() {
  const compute = useCallback((num) => num * 10, []);
  const value = useMemo(() => compute(5), [compute]);

  return <ExpensiveComponent compute={compute} />;
}

// 9. Lazy Loading
const LazyPage = lazy(() => import('./LazyPage'));
function LazyWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyPage />
    </Suspense>
  );
}

// 10. Form Handling
function FormExample() {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
