import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <main className="flex h-screen  w-screen">
      <section className="flex m-auto w-4/6 md:px-20 h-2/6 mt-10">
        <div className="flex w-2/6">
          <CgProfile size={"full"} color="pink" />
        </div>
        <div className="ml-16 pt-12">
          <h1 className="text-4xl font-semibold">Full Name</h1>
        </div>
      </section>
    </main>
  );
}
