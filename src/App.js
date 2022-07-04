import './App.scss';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Weather />
      </ErrorBoundary>
    </div>
  );
}

export default App;
