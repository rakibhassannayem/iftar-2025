import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopyNumber = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-y-auto py-12 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-white hover:text-gray-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Personal Information
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-white">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <label htmlFor="nickName" className="text-white" aria-placeholder='fdjhkdjf'>Nickname of the hole group</label>
              <input
                type="name"
                id="nickName"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bkash"
                      name="paymentMethod"
                      value="bkash"
                      className="w-4 h-4"
                    />
                    <label htmlFor="bkash" className="ml-2 text-white">Bkash</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="nagad"
                      name="paymentMethod"
                      value="nagad"
                      className="w-4 h-4"
                    />
                    <label htmlFor="nagad" className="ml-2 text-white">Nagad</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="paymentNumber" className="text-white">Send Money to</label>
                  <div className="mt-1 flex items-center space-x-2">
                    <div className="flex-1 p-2 font-semibold text-white">
                      01712-345678
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyNumber('01712345678')}
                      className={`px-4 py-2 rounded-md text-white transition-colors ${
                        copied ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="transactionId" className="text-white">Transaction ID</label>
                  <input
                    type="text"
                    id="transactionId"
                    required
                    placeholder="Enter your payment transaction ID"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
