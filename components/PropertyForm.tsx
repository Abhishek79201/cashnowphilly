'use client'

import React, { useState } from 'react'

export default function PropertyForm() {
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setMessage('')
// console.log(address, phoneNumber)
   
  }

  return (
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
          pattern="^\+?1?[ \-]?[\(]?[2-9][0-9][0-9][\)]?[ \-]?[2-9][0-9][0-9][ \-]?[0-9]{4}$"
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
  )
}