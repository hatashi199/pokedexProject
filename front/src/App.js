import './css/App.css';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.label} path={route.path} exact>
                        <route.page />
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
