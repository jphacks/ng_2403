import { RotateCw } from "lucide-react";

export default function Loader() {
  return (
    <div>
      <div className="space-x-2 flex justify-center mt-48">
        <RotateCw className="w-24 h-24 darkgreen animate-spin-slow" />
      </div>
      <p className="text-lg font-semibold text-gray-700 text-center">
        Loading...
      </p>
    </div>
  );
}
