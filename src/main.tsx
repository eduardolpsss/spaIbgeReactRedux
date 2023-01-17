import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

(async () => {
  const root = createRoot(document.getElementById('root') as HTMLElement);
	root.render(
		<React.Fragment>
			<App />
		</React.Fragment>
	);
})();