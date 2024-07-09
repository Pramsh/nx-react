import { useState, useEffect } from 'react';
import { PageTitle } from '@learn/ui-header'
import { ApiResponse, API_URL } from '@learn/api-interface'
export function App() {

  const [res, setRes] = useState<ApiResponse>({message:"loading"})
  useEffect(() => {
    fetch(API_URL).then((r) => r.json()).then(setRes)
  }, [])
  return (
    <div>
    <PageTitle></PageTitle>
    <div>
      {res.message}
    </div>
    </div>
  );
}

export default App;
