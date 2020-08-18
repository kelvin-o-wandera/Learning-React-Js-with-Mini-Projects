import React, { useState } from "react";
import Modal from "./Modal";
import ourTodos from "./todosData";
import TodoItem from "./todoItem";

// function App(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hello World {props.name}</h1>
//     </div>
//   );
// }

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       todo: ourTodos,
//     };
//     this.handleOnClick = this.handleOnClick.bind(this);
//   }

//   handleOnClick(id) {
//     this.setState((prevState) => {
//       const updatedTodos = prevState.todo.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       return {
//         todos: updatedTodos,
//       };
//     });
//   }

//   render() {
//     const todoItems = this.state.todo.map((item) => (
//       <TodoItem key={item.id} item={item} handleOnClick={this.handleOnClick} />
//     ));
//     return <div className="todo-list"> {todoItems} </div>;
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       todo: 0,
//     };
//     this.handleOnClick = this.handleOnClick.bind(this);
//   }

//   handleOnClick() {
//     this.setState((prevState) => {
//       return {
//         todo: prevState.todo + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World {this.state.todo}</h1>
//         <button onClick={this.handleOnClick}>Click Me</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: false,
//       gender: "",
//       favColor: "blue",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     //     this.setState({
//     //       [event.target.name]: event.target.value,
//     //     });
//     //   }
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [name]: checked })
//       : this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="First Name"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="Last Name"
//           onChange={this.handleChange}
//         />

//         {/**
//          * Other useful form elements:
//          *
//          *  <textarea /> element
//          *  <input type="checkbox" />
//          *  <input type="radio" />
//          *  <select> and <option> elements
//          */}

//         <textarea value={"Some default value"} onChange={this.handleChange} />

//         <br />

//         <label>
//           <input
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           />{" "}
//           Is friendly?
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           />{" "}
//           Male
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           />{" "}
//           Female
//         </label>
//         {/* Formik - react form api for making form handling easier */}
//         <br />

//         <label>Favorite Color:</label>
//         <select
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor"
//         >
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//         </select>

//         <h1>
//           {this.state.firstName} {this.state.lastName}
//         </h1>
//         <h2>You are a {this.state.gender}</h2>
//         <h2>Your favorite color is {this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       age: "",
//       gender: "",
//       destination: "",
//       isVegan: false,
//       isKosher: false,
//       isLactoseFree: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({
//           [name]: checked,
//         })
//       : this.setState({
//           [name]: value,
//         });
//   }

//   render() {
//     return (
//       <main>
//         <form>
//           <input
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handleChange}
//             placeholder="First Name"
//           />
//           <br />

//           <input
//             name="lastName"
//             value={this.state.lastName}
//             onChange={this.handleChange}
//             placeholder="Last Name"
//           />
//           <br />

//           <input
//             name="age"
//             value={this.state.age}
//             onChange={this.handleChange}
//             placeholder="Age"
//           />
//           <br />

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={this.state.gender === "male"}
//               onChange={this.handleChange}
//             />{" "}
//             Male
//           </label>

//           <br />

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={this.state.gender === "female"}
//               onChange={this.handleChange}
//             />{" "}
//             Female
//           </label>

//           <br />

//           <select
//             value={this.state.destination}
//             name="destination"
//             onChange={this.handleChange}
//           >
//             <option value="">-- Please Choose a destination --</option>
//             <option value="germany">Germany</option>
//             <option value="norway">Norway</option>
//             <option value="north pole">North Pole</option>
//             <option value="south pole">South Pole</option>
//           </select>

//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="isVegan"
//               onChange={this.handleChange}
//               checked={this.state.isVegan}
//             />{" "}
//             Vegan?
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="isKosher"
//               onChange={this.handleChange}
//               checked={this.state.isKosher}
//             />{" "}
//             Kosher?
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="isLactoseFree"
//               onChange={this.handleChange}
//               checked={this.state.isLactoseFree}
//             />{" "}
//             Lactose Free?
//           </label>
//           <br />

//           <button>Submit</button>
//         </form>
//         <hr />
//         <h2>Entered information:</h2>
//         <p>
//           Your name: {this.state.firstName} {this.state.lastName}
//         </p>
//         <p>Your age: {this.state.age}</p>
//         <p>Your gender: {this.state.gender}</p>
//         <p>Your destination: {this.state.destination}</p>
//         <p>Your dietary restrictions:</p>

//         <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
//         <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
//         <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
//       </main>
//     );
//   }
// }
export default App;
