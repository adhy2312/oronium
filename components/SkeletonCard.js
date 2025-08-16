export default function SkeletonCard() {
  return (
    <div className="card animate-pulse overflow-hidden">
      <div className="bg-gray-100 aspect-[16/9]" />
      <div className="p-5 sm:p-6">
        <div className="h-6 bg-gray-100 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-100 rounded w-full mb-2" />
        <div className="h-4 bg-gray-100 rounded w-5/6 mb-4" />
        <div className="h-3 bg-gray-100 rounded w-1/3" />
      </div>
    </div>
  );
}
