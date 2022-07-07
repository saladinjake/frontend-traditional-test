import React, { useState, useContext, useEffect, useReducer } from 'react'

let AppContext = React.createContext(
  {
   
    user:{
        name:"",
        role:"",
        profileImage:""
      },
    welcomeMsg: `Welcome to your daily event calendar. 
                 Here you can see all the upcoming events, 
                 meeting and create new events.`,
    
    dispatch:()=>{}
  })

const initialState = {
      user:{
        name:"",
        role:"",
        profileImage:""
      },
      welcomeMsg: `Welcome to your daily event calendar. 
                 Here you can see all the upcoming events, 
                 meeting and create new events.`
}

function reducerAuth(state=initialState, action){
   switch(action.type){
      case 'GET_AUTHENTICATED_USER':
        return {
          ...state,
          user : action.payload.user
        }
      default:
        return state
   }

}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerAuth, initialState);
  const { user } = state;

  const [userAuthenticated,setUser] = useState({
    name:"",
    role:"",
    profileImage:""
  })

  function getUser(){
     return new Promise( (resolve, reject) =>{
        const user = {
           name:"Eleanor Pena",
           role:"admin",
           profileImage:"images/saladin.jpg"
        }

        return resolve(user)
     }).catch(error => reject(error))
  }

  useEffect(() =>{
    async function fetchDummyUser(){
      try{
         const userData = await getUser();
         setUser(userData)
         const payload = {
           user: userData
         }
         dispatch("GET_AUTHENTICATED_USER", payload);
      }catch(error){
        console.log("demo error")
      }
    }
    fetchDummyUser()
  },[])
  
  return (
    <AppContext.Provider
      value={{
        user:userAuthenticated ,
        welcomeMsg: state.welcomeMsg,
        dispatch: dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
