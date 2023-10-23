import NextUiTable from '@/components/NextUiTable';

export default function Home() {
  return (
    <div className="max-w-4xl mt-14 mx-auto space-y-10">
      <div className="font-mono text-xl font-bold tracking-wider text-center  bg-black text-slate-100">
        <h1 className="inline-block px-4 py-1 rounded-md border border-slate-100 cursor-default hover:text-black hover:bg-slate-100 transition-colors">
          Table Next-UI
        </h1>
      </div>
      <NextUiTable />
    </div>
  );
}
