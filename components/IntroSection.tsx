"use client";

export function IntroSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <h2 id="intro-heading" className="sr-only">
            About NWI Fun Ball
          </h2>
          <p className="text-lg sm:text-xl text-nwi-navy leading-relaxed">
            There&apos;s a new adventure in the Region.{" "}
            <strong className="font-bold">Sportainment! Playform! Teamcast!</strong>{" "}
            Yes, a &quot;Savanna Bananas&quot;-like experience just raring to go.
          </p>
          <p className="text-base sm:text-lg text-nwi-navy/90 leading-relaxed">
            7 &quot;Innings&quot; of non-stop fun! Girls and guys compete, perform, and
            include you in the antics. Baseball/Softball, Singing, Dodgeball,
            Dancing, Soccer and <strong>FREE popcorn!</strong>
          </p>
          <p className="text-base sm:text-lg text-nwi-navy font-medium">
            Thursday nights at Oil City Stadium in Whiting, Indiana right on
            Lake Michigan—June, July, August!
          </p>
        </div>
      </div>
    </section>
  );
}
