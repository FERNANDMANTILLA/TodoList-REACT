
import ReactDOM from 'react-dom/client'
import {TodoApp} from './useReducer/TodoApp'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <TodoApp />
    </BrowserRouter>
)
