// pages/404.js
import Link from 'next/link';
import Image from 'next/image';
import Err from "@/components/component/error"

const NotFound = () => {
  return (
    <>
    <Err />
    {/*<div className="flex flex-col items-center justify-center h-screen">
      <Image src="https://images.unsplash.com/photo-1708873776992-d78034cec91c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Not Found Image" width={500} height={400} />

      <h1 className="text-4xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you're looking for does not exist.</p>

      <Link href="/" className="text-blue-500 hover:underline mt-4" style={{ "color": "red" }}>
        Go back to home
      </Link>
    </div>*/}
    </>
  );
};

export default NotFound;
