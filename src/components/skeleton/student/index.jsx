export function StudentCardSkeleton() {
  return (
    <>
      <div className="w-full h-[250px] rounded-xl bg-white shadow-xl hover:shadow-sm cursor-pointer flex justify-center items-center gap-2 flex-col">
        <div className="w-[60px] h-[60px] rounded-full bg-gray-300 animate-pulse"></div>
        <div className="w-[100px] h-[10px] bg-gray-300 animate-pulse rounded-xl"></div>
        <div className="w-[30px] h-[10px] bg-gray-300 animate-pulse rounded-xl"></div>
      </div>
    </>
  );
}

export function StudentCardListSkeleton() {
  return (
    <>
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
      <StudentCardSkeleton />
    </>
  );
}
