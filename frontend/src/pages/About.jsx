import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[5vw] m-0 font-bold">I’m Kamal Bhatt</h1>
          <h2 className="text-[3vw] text-gray-500 mt-2">Digital Marketing Expert</h2>
          <p className="text-[1.4rem] leading-[1.6] text-gray-300 max-w-[60ch] mt-4">
            I’m a results-driven digital marketing expert from Dehradun, India. I offer tailored digital marketing services globally to help businesses grow online. With 10+ years of experience in SEO, Google Ads, Meta Ads, and content strategy, I help startups, local brands, and institutes increase visibility, generate leads, and boost ROI. Whether you're just starting or scaling up, I'll craft a strategy that delivers measurable success.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/contact" className=" text-[1.4rem] leading-[1.6] text-gray-300 max-w-[60ch] mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full">Work with me</a>
            <a href="#projects" className="text-[1.4rem] leading-[1.6] text-gray-300 max-w-[60ch] mt-4 inline-block border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full">See my work</a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-[1.4rem] font-semibold">Kamal</span>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/40 p-6 rounded-lg">
            <h3 className="text-[3vw] leading-[1.6] text-gray-500">My Mission</h3>
            <p className="text-[1.4rem] leading-[1.6] text-gray-300">To help businesses tell their story through data-driven marketing that converts casual visitors into loyal customers.</p>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-lg">
            <h3 className="text-[3vw] leading-[1.6] text-gray-500">My Values</h3>
            <ul className="text-[1.4rem] text-gray-300 list-disc list-inside">
              <li>Transparency & measurable results</li>
              <li>Long-term growth over short-term wins</li>
              <li>Continuous learning and optimization</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-lg">
            <h3 className="text-[3vw] leading-[1.6] text-gray-500">Who I Work With</h3>
            <p className="text-[1.4rem] leading-[1.6] text-gray-300">Startups, SMBs, local brands, and educational institutes looking for scalable digital growth.</p>
          </div>
        </div>
      </div>

      {/* Skills & Stats (Skills removed) */}
      <div className="container mx-auto px-6 py-12">
        <div className="md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-[3vw] leading-[1.6] text-gray-500 mb-4">Impact in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900/40 p-6 rounded-lg text-center">
                <div className="text-[2rem] font-bold">150+</div>
                <div className="text-[1.4rem] text-gray-300">Clients</div>
              </div>

              <div className="bg-gray-900/40 p-6 rounded-lg text-center">
                <div className="text-[2rem] font-bold">1200%</div>
                <div className="text-[1.4rem] text-gray-300">Avg. ROI Increase</div>
              </div>

              <div className="bg-gray-900/40 p-6 rounded-lg text-center">
                <div className="text-[2rem] font-bold">10+</div>
                <div className="text-[1.4rem] text-gray-300">Years Experience</div>
              </div>

              <div className="bg-gray-900/40 p-6 rounded-lg text-center">
                <div className="text-[2rem] font-bold">300+</div>
                <div className="text-[1.4rem] text-gray-300">Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="container mx-auto px-6 py-12 border-t border-gray-800">
        <h3 className="text-[3vw] leading-[1.6] text-gray-500 mb-6">Experience</h3>
        <div className="space-y-6">
          <div className="bg-gray-900/40 p-6 rounded-lg">
            <h4 className="text-[1.4rem] font-semibold text-gray-100">Lead Digital Strategist — XYZ Agency</h4>
            <p className="text-gray-400">2018 - Present — Built growth programs for SaaS and e-commerce clients, focusing on full-funnel acquisition and retention.</p>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-lg">
            <h4 className="text-[1.4rem] font-semibold text-gray-100">Performance Marketing Manager — Local Brands</h4>
            <p className="text-gray-400">2015 - 2018 — Managed paid media programs, optimizing for conversions and scalable growth.</p>
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
      <div className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="text-center">
          <h3 className="text-[3vw] leading-[1.6] text-gray-500 mb-4">Ready to grow?</h3>
          <p className="text-[1.4rem] leading-[1.6] text-gray-300 mb-6">Let's design a growth plan that fits your business and budget.</p>
          <a href="/contact" className="inline-block text-[1.4rem] leading-[1.6] bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full">Get in touch</a>
        </div>
      </div>
    </div>
  )
}

export default About
