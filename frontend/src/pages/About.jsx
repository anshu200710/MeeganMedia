import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6eefc] text-[#0f172a]">
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[5vw] m-0 font-bold">I'm Kamal Bhatt</h1>
          <h2 className="text-[3vw] text-gray-600 mt-2">Digital Marketing Expert</h2>
          <p className="text-[1.4rem] leading-[1.6] text-gray-700 max-w-[60ch] mt-4">
            I’m a results-driven digital marketing expert from Dehradun, India. I offer tailored digital marketing services globally to help businesses grow online. With 10+ years of experience in SEO, Google Ads, Meta Ads, and content strategy, I help startups, local brands, and institutes increase visibility, generate leads, and boost ROI. Whether you're just starting or scaling up, I'll craft a strategy that delivers measurable success.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/contact" className="text-[1.4rem] leading-[1.6] inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">Work with me</a>
            <a href="#projects" className="text-[1.4rem] leading-[1.6] inline-block border border-blue-400 hover:border-blue-600 text-blue-600 px-6 py-3 rounded-full">See my work</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-[1.4rem] font-semibold text-white">Kamal</span>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto px-6 py-12 border-t border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-[3vw] leading-[1.6] text-gray-700">My Mission</h3>
            <p className="text-[1.4rem] leading-[1.6] text-gray-700">To help businesses tell their story through data-driven marketing that converts casual visitors into loyal customers.</p>
          </div>

          <div className="bg-white/50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-[3vw] leading-[1.6] text-gray-700">My Values</h3>
            <ul className="text-[1.4rem] text-gray-700 list-disc list-inside">
              <li>Measurable results.</li>
              <li>Sustainable Growth.</li>
              <li>Privacy-first, ethical practices.</li>
            </ul>
          </div>

          <div className="bg-white/50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-[3vw] leading-[1.6] text-gray-700">Who I Work With</h3>
            <p className="text-[1.4rem] leading-[1.6] text-gray-700">Startups, SMBs, local brands, and educational institutes looking for scalable digital growth.</p>
          </div>
        </div>
      </div>

      {/* Skills & Stats (Skills removed) */}
      <div className="container mx-auto px-6 py-12">
        <div className="md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-[3vw] leading-[1.6] text-gray-700 mb-4">Impact in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/50 p-6 rounded-lg text-center border border-blue-100">
                <div className="text-[2rem] font-bold text-gray-800">100+</div>
                <div className="text-[1.4rem] text-gray-700">Clients</div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg text-center border border-blue-100">
                <div className="text-[2rem] font-bold text-gray-800">7x</div>
                <div className="text-[1.4rem] text-gray-700">Avg. ROI Increase</div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg text-center border border-blue-100">
                <div className="text-[2rem] font-bold text-gray-800">10+</div>
                <div className="text-[1.4rem] text-gray-700">Years Experience</div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg text-center border border-blue-100">
                <div className="text-[2rem] font-bold text-gray-800">300+</div>
                <div className="text-[1.4rem] text-gray-700">Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="container mx-auto px-6 py-12 border-t border-blue-200">
        <h3 className="text-[3vw] leading-[1.6] text-gray-700 mb-6">Experience</h3>
        <div className="space-y-6">
          <div className="bg-white/50 p-6 rounded-lg border border-blue-100">
            <h4 className="text-[1.4rem] font-semibold text-gray-800">Lead Digital Strategist — XYZ Agency</h4>
            <p className="text-gray-700">2018 - Present — Built growth programs for SaaS and e-commerce clients, focusing on full-funnel acquisition and retention.</p>
          </div>

          <div className="bg-white/50 p-6 rounded-lg border border-blue-100">
            <h4 className="text-[1.4rem] font-semibold text-gray-800">Performance Marketing Manager — Local Brands</h4>
            <p className="text-gray-700">2015 - 2018 — Managed paid media programs, optimizing for conversions and scalable growth.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="container mx-auto px-6 py-12">
        <h3 className="text-[3vw] leading-[1.6] text-gray-500 mb-6">What clients say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/40 p-6 rounded-lg">
            <p className="text-[1.4rem] leading-[1.6] text-gray-300 mb-4">“Kamal transformed our online presence and helped us triple our lead flow within 6 months. Highly strategic and hands-on.”</p>
            <div className="text-sm text-gray-400">— Amandeep Singh, Founder</div>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-lg">
            <p className="text-[1.4rem] leading-[1.6] text-gray-300 mb-4">“Excellent ROI and transparent reporting. Campaigns were consistently improved and scaled.”</p>
            <div className="text-sm text-gray-400">— Priya Sharma, Marketing Head</div>
          </div>
        </div>
      </div> */}

      {/* CTA */}
      <div className="container mx-auto px-6 py-12 border-t border-blue-200">
        <div className="text-center">
          <h3 className="text-[3vw] leading-[1.6] text-gray-700 mb-4">Ready to grow?</h3>
          <p className="text-[1.4rem] leading-[1.6] text-gray-700 mb-6">Let's design a growth plan that fits your business and budget.</p>
          <a href="/contact" className="inline-block text-[1.4rem] leading-[1.6] bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">Get in touch</a>
        </div>
      </div>
    </div>
  )
}

export default About
