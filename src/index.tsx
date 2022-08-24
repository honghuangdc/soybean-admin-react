import { createRoot } from 'react-dom/client';
import App from './App';
import { setupAssets } from './plugins';

function setupApp() {
  setupAssets();

  const containerEl = document.getElementById('root');
  const root = createRoot(containerEl!);
  root.render(<App />);
}

setupApp();
