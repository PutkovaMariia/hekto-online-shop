import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error('🚨 Route Error:', error);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700">We couldn't find the page you're looking for.</p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Home
      </a>
    </div>
  );
}
