'use client';

import { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-2">Client Component</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        This component is rendered on the client. It can:
      </p>
      <ul className="list-disc list-inside mb-4 text-sm text-gray-600 dark:text-gray-300">
        <li>Use browser APIs</li>
        <li>Add interactivity</li>
        <li>Use React hooks</li>
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  );
} 