import React from 'react'

const NewsletterSection = () => {
  return (
    <div className="bg-[#807E7E] py-12 px-4 my-10 text-white text-center">
        <div className="text-start p-10">
            <h2 className="text-3xl font-bold mb-2">Stay Updated with Our Newsletter</h2>
            <p className="text-lg mb-6">
                Subscribe now for the latest blog posts and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-row  items-center gap-2">
                <input 
                    type="text" 
                    placeholder="Enter Your Email" 
                    className="w-[400px] h-12 p-2 border border-white bg-transparent text-black placeholder-white placeholder:text-base placeholder:leading-10 text-base focus:text-lg not-placeholder-shown:text-lg outline-none"
                />
                <button className="bg-white text-black text-xl px-4 py-2.5 hover:bg-gray-200">
                    Join Us
                </button>
            </div>
            <p className="text-sm pt-4">
                By clicking Join Us, you accept our Terms and Conditions.
            </p>
        </div>
    </div>
  )
}

export default NewsletterSection