import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import hero9 from "/public/hero9.png";
import FAQ from "@/components/Faq";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
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
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center pt-12 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center pb-20 px-4 sm:mt20  ">
        <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-6xl text-slate-800 font-extrabold tracking-normal ">
          Professionele Portetfoto's maken met AI✨
        </h1>
        <h2 className="mx-auto mt-6 mb-6 max-w-xl text-lg sm:text-gray-800  text-gray-800 leading-7">
          Vergeet studios en fotosessies! Genereer professionele Portetfoto's in
          HD studio kwaliteit makkelijk vanaf thuis of je werk.
        </h2>
        <Link href="/login">
          {" "}
          <Button className="border rounded-full h-14 px-10 m-2 text-xl text-white hover:bg-sky-600 bg-sky-600">
            Begin jouw AI fotosessie
          </Button>
        </Link>

        <div className="flex justify-between items-center pt-20 w-full flex-col sm:mt-10 mt-6">
          <div></div>
          <ExplainerSection />

          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col"></div>
          </div>
        </div>
      </main>
      <FAQ />
      <div>
        {" "}
        <PricingSection />
      </div>
    </div>
  );
}
