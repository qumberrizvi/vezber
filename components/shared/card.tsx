import { ReactNode } from "react";

export default function Card({
    children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md w-auto`}
    >
      <div className="flex min-h-[15rem] h-auto">{children}</div>
    </div>
  );
}
