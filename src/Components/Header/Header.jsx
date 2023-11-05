import React from 'react'

const Header = ({ children }) => {
    return(
        <div className="bg-purple-600 flex items-center py-7">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-1xl font-bold mb-">
          AN IMAGE WEBSITE THAT GENERATE IMAGES BASED ON YOUR INPUTS
          </h1>
        {children}
        
      </div>
    </div>
    )
}

export default Header;