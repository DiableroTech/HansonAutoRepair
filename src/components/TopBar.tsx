import { site } from '../content/site'

export default function TopBar() {
  return (
    <div className="top-bar text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-white/95">{site.address}</span>
        <span className="text-white/95">{site.hoursSummary}</span>
      </div>
    </div>
  )
}
