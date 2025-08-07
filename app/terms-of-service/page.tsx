'use client'

import { useEffect } from 'react'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-24 max-w-[1200px]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </span>
        </h1>
        <div className="prose prose-invert max-w-3xl mx-auto text-gray-300">
          <p>Welcome to Devan Yudistira Sugiharta's Portfolio!</p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Devan Yudistira Sugiharta's Website, located at <a href="https://devansugiharta.my.id" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">devansugiharta.my.id</a>.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Devan Yudistira Sugiharta's Portfolio if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Devan Yudistira Sugiharta's Portfolio, you agreed to use cookies in agreement with the Devan Yudistira Sugiharta's Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">License</h2>
          <p>
            Unless otherwise stated, Devan Yudistira Sugiharta and/or its licensors own the intellectual property rights for all material on Devan Yudistira Sugiharta's Portfolio. All intellectual property rights are reserved. You may access this from Devan Yudistira Sugiharta's Portfolio for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Devan Yudistira Sugiharta's Portfolio</li>
            <li>Sell, rent or sub-license material from Devan Yudistira Sugiharta's Portfolio</li>
            <li>Reproduce, duplicate or copy material from Devan Yudistira Sugiharta's Portfolio</li>
            <li>Redistribute content from Devan Yudistira Sugiharta's Portfolio</li>
          </ul>
          <p>This Agreement shall begin on the date hereof.</p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Hyperlinking to our Content</h2>
          <p>The following organizations may link to our Website without prior written approval:</p>
          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
          </ul>
          <p>
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p>
            We may consider and approve other link requests from the following types of organizations:
          </p>
          <ul>
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Devan Yudistira Sugiharta; and (d) the link is in the context of general resource information.
          </p>
          <p>
            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Devan Yudistira Sugiharta. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Content Liability</h2>
          <p>
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Removal of links from our website</h2>
          <p>
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
          </p>
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
