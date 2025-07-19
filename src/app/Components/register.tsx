import React from "react";
import Image from "next/image";
const Register =()=>{
    return(
        <div>
            <div className="flex flex-col justify-center sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)"><Image
            src="/images/logo.png" alt="logo" className="w-40 inline-block" />
          </a>
        </div>

        <form>
          <div className="space-y-6">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Student Name</label>
              <input name="email" type="text" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Admission required in class</label>
              <input name="password" type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">Contact No</label>
              <input name="cpassword" type="password" className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="text-slate-600 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-6 text-center">Send<a href="javascript:void(0);" className="text-blue-600 font-medium hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
                
            
        </div>
    )
}
export default Register;