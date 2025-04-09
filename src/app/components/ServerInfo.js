// This is a Server Component
export default function ServerInfo() {
  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">Server Component</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        This component is rendered on the server. It can:
      </p>
      <ul className="list-disc list-inside mt-2 text-sm text-gray-600 dark:text-gray-300">
        <li>Access backend resources directly</li>
        <li>Keep sensitive data and logic on the server</li>
        <li>Reduce client-side JavaScript</li>
      </ul>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Rendered at: {new Date().toLocaleString()}
      </p>
    </div>
  );
} 