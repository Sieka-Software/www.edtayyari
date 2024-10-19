import { Suspense } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useAppSelector } from '../store';
import { AnimatePresence } from "framer-motion";
import * as Layout from './layout';
import * as Footer from './footer';
import * as Error from './error';
import * as Page from './Page';

export const Main = () => {
  const location = useLocation();
  const { isError } = useAppSelector(state => state.master);

  return (
    <>
      {!isError && <Layout.Navbar />}
      <AnimatePresence>
        <Suspense fallback={<Layout.Preloader />}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Page.HomePage />} />
            <Route path='/about-us/*' element={<Page.AboutPage />} />
            <Route path='/courses/*' element={<Page.CoursesPage />} />
            <Route path='/course/:id' element={<Page.CoursePage />} />
            <Route path='/checkout/:id' element={<Page.OrderPage />} />
            <Route path='/instructors/*' element={<Page.InstructorsPage />} />
            <Route path='/contact-us/*' element={<Page.ContactPage />} />
            <Route path='/hyperlink-policy/*' element={<Page.HyperlinkPolicyPage />} />
            <Route path='/privacy-policy/*' element={<Page.PrivacyPolicyPage />} />
            <Route path='/refund-policy/*' element={<Page.RefundPolicyPage />} />
            <Route path='/security-policy/*' element={<Page.SecurityPolicyPage />} />
            <Route path='/terms-and-conditions/*' element={<Page.TermsAndConditionsPage />} />
            <Route path='/*' element={<Error.Error404 />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      {!isError && <Footer.Footer />}
      {!isError && <Footer.ScrollToTop />}
      {!isError && <Footer.FloatingWhatsapp />}
      {!isError && <Footer.CookieConsentAlert />}
    </>
  )
}