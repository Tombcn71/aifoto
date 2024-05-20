import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import hero2 from "/public/hero2.png";
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
    <div className="flex flex-col px-6 items-center ">
      <div className="flex flex-col lg:flex-row items-center  max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-6xl font-bold">
            Zakelijke Portetfoto's met behulp van AI✨
          </h1>
          <p className="text-gray-600 text-lg">
            Vergeet studio's en fotosessies! Genereer professionele Portetfoto's
            in HD studio kwaliteit makkelijk vanaf thuis of je werk.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="border rounded-full  h-12 px-6 m-2 text-lg text-white bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                Begin AI fotosessie{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2  sm:pb8 pb-16 w-full ">
          <Image
            src="/hero.png"
            width={600}
            height={1000}
            alt="Picture of the author"
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection />
      <FAQ />
    </div>
  );
}
