export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to My App
        </h1>
        <p className="text-gray-600 mb-6">
          A modern application featuring an equation generator and more.
        </p>
        <div className="space-x-4">
          <a
            href="/equation-generator"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Try Equation Generator
          </a>
        </div>
      </div>
    </div>
  )
} 