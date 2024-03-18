import React from 'react'

const Sucsess = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(75, 85, 99, 0.6)' }}
    >
      <div className="bg-white rounded-lg p-4 flex flex-col items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            fill="green"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248M227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001"
          />
        </svg>
      </div>
    </div>
  )
}

export default Sucsess
