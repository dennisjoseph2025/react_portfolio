import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx is running');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  const root = createRoot(rootElement);
  console.log('Root created, rendering App...');

  root.render(<App />);
  console.log('Render called');
} catch (e) {
  console.error('Error in main.jsx:', e);
}
