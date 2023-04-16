

import { useCallback, useState } from "react"


export default function Login() {
  
       const[variant, setVariant] = useState('login')

      const toggleVariant = useCallback(() => {
        setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login')
        }, [])

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-sans "> 
        <div className="container  hidden bg-slate-100  h-full w-full bg-gradient-to-b from-dark-blue to-light-blue text-white sm:flex sm:flex-col sm:justify-center  ">
        <img className="w-screen h-screen" src="/picture.png"/>
        </div>

        <div className=" flex flex-col  justify-center  gap-y-2">
            
           <div  className="flex flex-col justify-between max-w-[400px] w-full mx-auto p-8 px-10 h-[800px] rounded-lg">
          <div >
           <div className="flex justify-center items-center  mt-10 mb-10">
                <img className='w-[70px] h-full' src="/logo.png"/>
            </div>
            
            <div>
                <div className=' flex flex-col justify-center  h-[180px]'>
                    {variant === 'login' ? (
                        <>
                         <h2 className="text-lg text-slate-600 mb-1 ">Welcome back!</h2>
                         <p className="text-xl font-medium tracking-wide ">Login to your account</p>
                         </>
                    ) : (
                        <>
                        <h2 className="text-lg text-slate-600 mb-1 ">Welcome!</h2>
                        <p className="text-xl font-medium tracking-wide ">Create your account</p>
                        </>
                    )

                    
                    }
              
               </div>
               </div>
               <div>
               <form className="max-w-md mx-auto">
                    <div className="mb-6">
{variant === 'register' ? (
                        <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-1 text-sm" >
                        Name
                        </label>
                        <input className="appearance-none border border-my-slate rounded w-full py-2 px-3 text-gray-700  bg-my-slate leading-tight focus:outline-none focus:shadow-outline" />
                    </div>):null
                        
                        }

                        <label className="block text-gray-700 font-medium text-sm mb-1" >
                        E-mail
                        </label>
                        <input className="appearance-none border border-my-slate rounded w-full py-2 px-3 text-gray-700 bg-my-slate leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700 font-medium mb-1 text-sm" >
                        Password
                        </label>
                        <input className="appearance-none border border-my-slate rounded w-full py-2 px-3 text-gray-700  bg-my-slate leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label className="inline-flex items-center">
                       
                        
                        {variant === "login" ? (
                            <>
                             <input type="checkbox" className="form-checkbox h-3 w-3 text-indigo-500"/>
                            <span className="ml-1 text-my-purple text-xs font-medium">Remember me</span>
                            </>
                            )
                            : null
                        }
                        
                        </label>
                    </div>
                   
                </form>
                </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-y-2  ">
                        <button className="w-full bg-my-orange hover:bg-orange-600 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                      
                        <button onClick={toggleVariant} className="w-full border border-my-purple hover:bg-slate-50 text-my-purple  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        {variant === 'login' ? 'Register' : 'Login'}
                        </button>
                        
                   
                </div>
                   
            </div>
   
         </div>
          </div>
    )}