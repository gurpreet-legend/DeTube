import './App.css';
import DeTubeProvider from '../context/DeTubeContext';
import AuthContextProvider from '../context/AuthContext';

function App() {
  document.title = 'DeTube'
  return (
    <AuthContextProvider>
      <DeTubeProvider>
        <>DeTube</>
      </DeTubeProvider>
    </AuthContextProvider>
  );
}

export default App;
