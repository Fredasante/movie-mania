import Button from "@/components/Button";
import Link from "next/link";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="text-gray-50 flex flex-col justify-center items-center container mx-auto h-[70vh]">
      <div className="flex justify-center items-center gap-3">
        <h2 className="h2">Not Found</h2>
        <FaTriangleExclamation className="text-5xl text-red-700 mt-6" />
      </div>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button label="Return Home" className="mt-4" />
      </Link>
    </section>
  );
}
