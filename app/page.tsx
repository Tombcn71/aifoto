import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Keen from "@/components/Keen";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="flex max-w-6xl mx-auto mt-0 flex-col items-center justify-center  min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center  sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black sm:text-7xl">
          Zakelijke Portetfoto's{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative"> met behulp van AI✨</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-4 max-w-xl text-lg sm:text-gray-800  text-gray-800 leading-7">
          Vergeet dure studio's en ongemakkelijke fotosessies! Genereer
          professionele zakelijke Portetfoto's in HD studio kwaliteit die veel
          goedkoper zijn makkelijk vanaf thuis of je werk.
        </h2>
        <Link
          className="bg-sky-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream">
          Meer weten{" "}
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 ">
            <div className="flex sm:space-x-8 sm:flex-row flex-col"></div>
          </div>{" "}
          <Keen />
        </div>{" "}
      </main>

      <ExplainerSection />
      <PricingSection />
    </div>
  );
}
