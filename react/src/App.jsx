import React, { Suspense, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import Dashboard from React.lazy(() => import("./components/Dashboard"));
// import Landing from React.lazy(() => import("./components/Landing"));
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import("./components/Landing"))


function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     title: "Go to gym",f
  //     description: "From 7 - 9",
  //     completed: false
  //   },
  //   {
  //     title: "study dsa",
  //     description: "From 9 - 11",
  //     completed: true
  //   }
  // ])

  // function addNewTodo() {
  //   setTodos([...todos, {
  //     title: "Go to gym",
  //     description: "From 7 - 9",
  //     completed: false
  //   }])
  // }

  // function Todo(props) {
  //   return (
  //     <div>
  //       <h1>{props.title}</h1>
  //       <h2>{props.description}</h2>
  //     </div>
  //   )
  // }
  // return (

  // <div>
  //   <button onClick={addNewTodo}>Add todo</button>
  //   {todos.map(todo => {
  //     return (
  //       <Todo title={todo.title} description={todo.description}></Todo>
  //     )
  //   })}

  // </div >
  // )







  ///React.memo

  //   const [title, setTitle] = useState("deepak")

  //   function updateTitle() {
  //     setTitle("My name is" + Math.random())
  //   }
  //   return (
  //     <div>
  //       <button onClick={updateTitle}>Click me to change the title</button>
  //       <Header title={title}></Header>
  //       <Header title="deepak3"></Header>
  //       <Header title="deepak5"></Header>
  //       <Header title="deepak6"></Header>

  //     </div>
  //   )
  // }




  // const Header = React.memo(function ({ title }) {
  //   return (
  //     <div>{title}</div>
  //   )
  // })



  //   return (
  //     <div>
  //       <HeaderWithFuntion></HeaderWithFuntion>
  //       <Header title="deepak2"></Header>
  //       <Header title="deepak3"></Header>
  //       <Header title="deepak5"></Header>
  //       <Header title="deepak6"></Header>

  //     </div>
  //   )
  // }




  // function HeaderWithFuntion() {
  //   const [title, setTitle] = useState("deepak")

  //   function updateTitle() {
  //     setTitle("My name is" + Math.random())
  //   }

  //   return (
  //     <div>
  //       
  //       <div>{title}</div>
  //     </div>
  //   )
  // }



  // function Header({ title }) {
  //   return (
  //     <div>{title}</div>
  //   )
  // }


  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       title: "title1",
  //       description: "description1"
  //     },
  //     {
  //       id: 2,
  //       title: "title2",
  //       description: "description2"
  //     },
  //     {
  //       id: 3,
  //       title: "title3",
  //       description: "description3"
  //     },
  //   ])

  //   function addTodo() {
  //     setTodos([...todos, {
  //       id: 4,
  //       title:Math.random(),
  //       description: Math.random()

  //     }])
  //   }

  //   return (
  //     <div>
  //       <button onClick={addTodo}>Add todo</button>
  //       {todos.map((todo) => <Todo title={todo.title} description={todo.description}></Todo>)}
  //     </div>
  //   )

  // }


  // function Todo({ title, description }) {
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h1>{description}</h1>
  //     </div>
  //   )
  // }










  //   return (
  //     <div>
  //         <CardWrapper>
  //           <TextComponet />
  //         </CardWrapper>
  //     </div>
  //   )


  // }



  // function TextComponet() {
  //   return (
  //     <div>
  //       hi theredfgdfg
  //     </div>
  //   )
  // }





  // function CardWrapper({ children }) {
  //   return (
  //     <div style={{ border: "1px solid black", padding: "5px" }}>
  //       {children}
  //     </div>
  //   )
  // }



  //   const [todos, setTodos] = useState([])

  //   useState(() => {
  //     fetch("https://sum-server.100xdevs.com/todos").then((response) => {
  //       response.json().then(val => {
  //         console.log(val.todos)
  //         setTodos(val.todos)
  //       })
  //     })
  //   }, [])

  //   return (
  //     <div>
  //       {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
  //     </div>
  //   )
  // }


  // function Todo({ title, description }) {
  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h2>{description}</h2>
  //       <br />
  //     </div>
  //   )
  // }





  //   const [countId, setCountId] = useState(2)







  //   return (
  //     <div>
  //       <button onClick={() => { setCountId(1) }}>1</button>
  //       <button onClick={() => { setCountId(2) }}>2</button>
  //       <button onClick={() => { setCountId(3) }}>3</button>
  //       <button onClick={() => { setCountId(4) }}>4</button>
  //       <Todo id={countId} />
  //     </div>
  //   )
  // }


  // function Todo({ id }) {

  //   const [todo, setTodo] = useState({})

  //   useEffect(() => {
  //     fetch("https://sum-server.100xdevs.com/todo?id=" + id).then((response) => {
  //       response.json().then(val => {
  //         console.log(val.todo)
  //         setTodo(val.todo)
  //       })
  //     })
  //   }, [id])


  //   return (
  //     <div>

  //       {id}
  //       <h1>{todo.title}</h1>
  //       <h2>{todo.description}</h2>
  //       <br />
  //     </div>
  //   )

  // const [counter, setCounter] = useState(0);
  // const [inputvalue, changeInputValue] = useState(1);
  // // const [count, setCount] = useState(0); 


  // let count = useMemo(() => {
  //   console.log("sdfsf")
  //   let finalCount = 0;
  //   for (let i = 1; i <= inputvalue; i++) {
  //     finalCount = finalCount + i;
  //   }
  //   return finalCount;
  // }, [inputvalue])  



  //   useEffect(() => {
  //     let finalCount = 0;
  //     for (let i = 1; i <= inputvalue; i++) {
  //       finalCount = finalCount + i;
  //     }
  //     setCounter(finalCount)

  // })



  // return (
  //   <div>
  //     <input onChange={(e) => { changeInputValue(e.target.value) }} type="text" id="Enter value" />
  //     <br />
  //     some from 1 to {count}
  //     <br />

  //     <button onClick={() => setCounter(counter + 1)}> Counter {counter}</button>
  //   </div>
  // )

  // const [counter, setCounter] = useState(0);

  // const inputFuntion = useCallback(() => {
  //   console.log("input fun")
  // }, [])


  //   return (
  //     <div>
  //       <button onClick={() => setCounter(counter + 1)}> Counter {counter}</button>
  //       {/* <ButtonComponent inputFuntion={inputFuntion} /> */}
  //     </div>
  //   )

  // }


  // const ButtonComponent = memo((inputFuntion) => {
  //   console.log("rendered");
  //   return <div>
  //     <button> Button Clicked</button>
  //   </div>
  // })



  // function useTodo() {
  //   const [todos, setTodos] = useState()

  //   useEffect(() => { 

  //   }, [])
  //   return todos;
  // }









  /// Recoil



  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}



function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  )
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      <b>
        {count}
      </b>

    </div>
  )
}

function EvenCountRenderer(){
   const isEven = useRecoilValue(evenSelector)
   return (
    <div>
      {isEven ? "It is even" : null}
    </div>
   ) 
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}> Increase</button>
      <button onClick={() => setCount(count => count - 1)}> Decrease</button>
      <EvenCountRenderer/>
    </div>
  )
}















/// Routing



//   return (
//     <div>

//       <BrowserRouter>
//         <AppBar />

//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback="loading..."> <Dashboard /> </Suspense>} />
//           <Route path="/" element={<Suspense fallback="loading..."><Landing /></Suspense>} />
//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// function AppBar() {
//   const navigate = useNavigate()

//   return (
//     <div style={{ background: "red" }}>

//       <button onClick={() => navigate("/")}>Home</button>
//       <button onClick={() => navigate("/dashboard")}>dashboard</button>

//     </div>
//   )
// }
export default App
