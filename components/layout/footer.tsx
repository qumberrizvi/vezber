export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
          ©{` ${new Date().getFullYear()} `}
          Vezber Technology Private Limited. All rights reserved.
      </p>
    </div>
  );
}
