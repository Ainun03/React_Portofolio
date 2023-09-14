import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from "react-snapshot";
import { App } from "./app/App";
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
render(<App />, document.getElementById("root"));
