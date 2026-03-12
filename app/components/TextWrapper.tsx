export default function TextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <main className="w-full py-20 px-8 lg:px-16 flex flex-col items-center">
        <div className="max-w-2xl w-full bg-white p-6 md:p-12 relative rounded-lg shadow-lg flex flex-col items-start">
          {children}
        </div>
      </main>
    </div>
  );
}
