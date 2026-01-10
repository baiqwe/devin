
import SearchBar from '@/components/SearchBar'
import codesData from '@/data/codes.json'
import guidesData from '@/data/guides.json'

export default function NotFound() {
  const activeCodes = codesData.filter((code) => code.status === 'Active').slice(0, 3)
  const popularGuides = guidesData.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist in our database.
        </p>

        {/* 搜索栏 */}
        <div className="max-w-md mx-auto mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Search for what you need:</h3>
          <SearchBar />
        </div>

        <a
          href="/"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
        >
          Return Home
        </a>
      </div>

      {/* 热门链接 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 最新代码 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Latest Active Codes</h3>
          <ul className="space-y-3">
            {activeCodes.map((code, index) => (
              <li key={index}>
                <a
                  href="/codes"
                  className="block p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="font-mono font-bold text-gray-800">{code.code}</div>
                  <div className="text-sm text-gray-600 mt-1">{code.reward}</div>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/codes"
            className="mt-4 text-amber-600 hover:text-amber-700 font-semibold text-sm block"
          >
            View All Codes →
          </a>
        </div>

        {/* 热门指南 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Guides</h3>
          <ul className="space-y-3">
            {popularGuides.map((guide) => (
              <li key={guide.slug}>
                <a
                  href={`/wiki/${guide.slug}`}
                  className="block p-3 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <div className="font-semibold text-gray-800">{guide.title}</div>
                  <div className="text-sm text-gray-600 mt-1 line-clamp-2">{guide.description}</div>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/wiki"
            className="mt-4 text-amber-600 hover:text-amber-700 font-semibold text-sm block"
          >
            View All Guides →
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Looking for these?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/codes" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
            Codes
          </a>
          <a href="/wiki/tier-list" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
            Tier List (Meta)
          </a>
          <a href="/wiki/contracts" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
            Contracts
          </a>
          <a href="/wiki/fiends" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
            Fiends
          </a>
          <a href="/wiki/items" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
            Items (Surgery Kit)
          </a>
        </div>
      </div>
    </div>
  )
}

