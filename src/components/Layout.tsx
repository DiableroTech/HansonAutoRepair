import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import TopBar from './TopBar'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <ScrollToTop />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
