import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/Context/Context.jsx'
import Context from '../src/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context>
        <App/>
    </Context>
)
