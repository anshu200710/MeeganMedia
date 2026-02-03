import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', mobile: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6eefc] text-[#0f172a] py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-[5vw] m-0 font-bold">Get in Touch</h1>
          <h2 className="text-[3vw] text-gray-600 mt-2">Let's discuss your growth strategy</h2>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center">
            ✓ Thank you! I'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-blue-200 shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-[1.2rem] font-semibold text-gray-800 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 text-[1rem] border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            {errors.name && <p className="text-red-500 text-[0.9rem] mt-1">{errors.name}</p>}
          </div>

          {/* Mobile Field */}
          <div className="mb-6">
            <label htmlFor="mobile" className="block text-[1.2rem] font-semibold text-gray-800 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-3 text-[1rem] border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            {errors.mobile && <p className="text-red-500 text-[0.9rem] mt-1">{errors.mobile}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-[1.2rem] font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 text-[1rem] border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-[1.2rem] font-semibold text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="5"
              className="w-full px-4 py-3 text-[1rem] border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-[1.1rem] transition duration-200"
          >
            Send Message
          </button>

          <p className="text-gray-600 text-[0.9rem] mt-4 text-center">
            <span className="text-red-500">*</span> Indicates required fields
          </p>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-[1.2rem] mb-4">
            Or reach out directly at <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-700 font-semibold">contact@example.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact