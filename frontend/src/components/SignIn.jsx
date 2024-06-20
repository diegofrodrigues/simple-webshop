import React,{ useContext, useState } from "react";
import Context from "../context/Context";
import signIn from "../api/signIn";

function SignIn() {
  
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const {showSignIn, setShowSignIn, setShowSignUp, userInfo, setUserInfo} = useContext(Context);
  
   const submitSignIn = (e) => {
    e.preventDefault();
      const userData = {
          "email": emailLogin,
          "password": passwordLogin,
        };
        signIn(userData)
        setShowSignIn(false)
        setUserInfo(localStorage.userInfo)
  };

  return (
    <>
      {showSignIn ? (
        <div tabIndex="-1" aria-hidden="true" className="absolute flex overflow-y-auto z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Entra no Sistema
                </h3>
                <button 
                  type="button" 
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                  onClick={() => setShowSignIn(false)}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Fechar</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={submitSignIn}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input 
                      onChange={(e)=>setEmailLogin(e.target.value)} 
                      value={emailLogin} 
                      type="email" 
                      name="email" 
                      id="email" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="name@company.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                    <input 
                      onChange={(e)=>setPasswordLogin(e.target.value)} 
                      value={passwordLogin}
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                      required 
                    />
                  </div>
                  <div className="flex justify-between">
                    
                  </div>
                  <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Entrar</button>
                  <div className="flex text-sm font-medium text-gray-500 dark:text-gray-300">
                   <p className="px-4">Ainda não é registrado? </p>  
                    <a 
                      onClick={() => {
                        setShowSignUp(true);
                        setShowSignIn(false);
                        }
                      } 
                      className="text-red-700 hover:underline dark:text-red-500"
                    > Criar sua conta</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      ) : null }
    </>
  );
}

export default SignIn;