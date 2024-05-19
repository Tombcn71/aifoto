import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Keen from "@/components/Keen";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Image from "next/image";
import FAQ from "@/components/Faq";

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
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center  min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center  sm:mt-20  background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-normal text-black sm:text-6xl">
          Professionele Portetfoto's{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative"> met behulp van AI✨</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-4 max-w-xl text-lg sm:text-gray-800  text-gray-800 leading-7">
          Vergeet studio's en fotosessies! Genereer professionele Portetfoto's
          in HD studio kwaliteit makkelijk vanaf thuis of je werk.
        </h2>
        <Link
          className="bg-sky-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream">
          Begin fotosessie{" "}
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 ">
          <div className="flex flex-col space-y-10 mt-4 ">
            <div className="flex sm:space-x-8 sm:flex-row flex-col"></div>
          </div>{" "}
          <Image
            alt="Original photo of a room with roomGPT.io"
            src="/hero.png"
            className="pt-0 "
            width={900}
            height={200}
            priority
          />
        </div>{" "}
      </main>
      <div className="mt-20 https://www.tailwindcss-animated.com/configurator.html?animation=bounce&count=once">
        {" "}
        <ExplainerSection />
      </div>
      <PricingSection /> <FAQ />
    </div>
  );
}
