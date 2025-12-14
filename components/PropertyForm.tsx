'use client'

import React, { useState, useEffect } from 'react'

export default function PropertyForm() {
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showModal])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          phoneNumber,
        }),
      })

      if (response.ok) {
        setShowModal(true)
        setAddress('')
        setPhoneNumber('')
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="w-full">
        <form 
          onSubmit={handleSubmit} 
          className="p-0 rounded-md flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start w-full"
        >
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Property Address"
            required
            className="input-field w-full sm:w-auto sm:flex-1 sm:max-w-[195px] px-4 py-3 text-[15px] sm:text-[16px]"
          />
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
            className="input-field w-full sm:w-auto sm:flex-1 sm:max-w-[195px] px-4 py-3 text-[15px] sm:text-[16px]"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full sm:w-auto text-[18px] sm:text-[20px] px-6 py-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Get a Cash Offer'}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center text-[14px] sm:text-[16px] ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4 transform transition-all animate-fadeIn">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We&apos;ve received your inquiry and will contact you soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}