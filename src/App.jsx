import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import './app.scss'
import { check } from "./http/userApi";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        if(data){
          user.setIsAuth(true)
          user.setIsUser(true)
          user.setIsAdmin(true)
        }
      }).finally(() => {
        setLoading(false)
        return
      })
    }, 1000)
  }, [])

  if (loading) {
    return <div className="spin-wrapper">
      <div className="spinner">
      </div>
    </div>
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
