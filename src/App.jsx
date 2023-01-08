import { useState } from 'react';
import  RoutesComponent  from './routers/routers';

import GlobalStyles from './globalStyles';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyles/>
       <RoutesComponent/> 
    </div>
  )
}


export default App
