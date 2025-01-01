"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const page = () => {
  return (
      <div className='absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
          <Navbar language={"any"} tab={"Privacy"} />
      <div className=" mt-2 ">
    <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-2">
            This privacy policy sets out how our website uses and protects any information that you give us when you use
            this
            website.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

        <p className="mb-4">
            We may collect the following information:
        </p>

        <ul className="list-disc list-inside mb-4">
            <li>Your name and contact information</li>
            <li>Demographic information</li>
            <li>Other information relevant to customer surveys and/or offers</li>
        </ul>


        <h2 className="text-2xl font-bold mb-2">Security</h2>

        <p className="mb-4">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or
            disclosure,
            we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the
            information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>

        <p className="mb-4">
            Our website may contain links to other websites of interest. However, once you have used these links to
            leave
            our
            site, you should note that we do not have any control over that other website. Therefore, we cannot be
            responsible
            for the protection and privacy of any information which you provide whilst visiting such sites and such
            sites
            are
            not governed by this privacy statement. You should exercise caution and look at the privacy statement
            applicable
            to
            the website in question.
        </p>



        <p className="mb-6">
            This privacy policy is subject to change without notice.
                  </p>
                  <Footer />
    </div>
</div>
    </div>
  )
}

export default page
