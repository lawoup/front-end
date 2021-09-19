import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
