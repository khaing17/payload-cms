import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      description:
        "Get your assets delivered to your email in seconds and download them right away.",
      Icon: ArrowDownToLine,
    },
    {
      name: "Guaranteed Quality",
      description:
        "Every asset in our platform is verified by our team to ensure our highest quality standards. Not happy? We offer 30-days refund guarantee.",
      Icon: CheckCircle,
    },
    {
      name: "For the Planet",
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
      Icon: Leaf,
    },
  ];

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
            Your market place for high-quality{" "}
            <span className="text-rose-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome from DigitalHippo. Every asset on our platform is verified
            by our team to ensure high-quality standards.
          </p>
          <div className="flex flex-col sm:flex-grow gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* ToDo Product List */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="md:flex md:items-start text-center md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-6 md:mt:0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
