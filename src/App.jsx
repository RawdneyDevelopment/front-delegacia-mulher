import { useState } from 'react';

import GlobalStyles from './globalStyles';

import Login from './Pages/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyles/>
      <Login/>
    
    </div>
  )
}


export default App
