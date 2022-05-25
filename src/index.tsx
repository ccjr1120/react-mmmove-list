import { createRoot } from 'react-dom/client';

const Test = () => {
  return <div>test</div>;
};

const rootNode = document.getElementById('root');
const root = createRoot(rootNode as HTMLElement);
root.render(<Test />);
