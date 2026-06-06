"use client";

import { accordionItems } from "@/story/treetma";
import { useState } from "react";

export default function Home() {
  // Accordion active state: null = all closed, 0, 1, 2, 3 = that index open
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-linear-to-br from-emerald-50 via-teal-50 to-amber-50 py-12 px-4 font-sans text-slate-800 md:py-20 md:px-8">
      {/* Background Animated Blobs - Clay-like blurry spheres */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl animate-glow-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 -right-20 h-120 w-120 rounded-full bg-purple-200/30 blur-3xl animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl animate-glow-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Navigation / Header Brand */}
        <header className="mb-12 flex justify-center">
          <div className="clay-card-white flex items-center gap-3 px-6 py-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 shadow-inner animate-pulse">
              <span className="h-2 w-2 rounded-full bg-white animate-ping"></span>
            </span>
            <span className="font-sans text-lg font-bold tracking-wider text-emerald-800">
              TREEATMA CHRONICLES
            </span>
          </div>
        </header>

        {/* Section 1: Hero Section */}
        <section className="mb-12 text-center">
          <div className="mx-auto mb-4 max-w-max rounded-full bg-emerald-100/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 shadow-inner">
            Kailash&apos;s Final Story
          </div>

          <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Treeatma: The Awakening of Nature
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            On the final day of a humble kindergarten threatened by concrete
            giants, the elderly teacher Kailash shares one last legendary story.
            It tells of the Treeatmas—immortal nature spirits bound to trees—who
            have watched over the forests for generations, and who are forced to
            rise when humanity&apos;s greed threatens the earth itself.
          </p>
        </section>

        {/* Section: Key Elements of the Saga */}
        <section className="mb-16">
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-lg text-center font-bold uppercase tracking-wider text-emerald-800">
              Core Elements of the Legend
            </h3>
            <p className="text-xs text-center text-slate-500">
              Understand the forces that shaped the history of humans and
              spirits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Element 1: Kailash's Sanctuary */}
            <div className="clay-card-white p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-xl shadow-inner">
                🏡
              </div>
              <h4 className="mb-1 font-display font-extrabold text-slate-800">
                The Kindergarten Sanctuary
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                A green oasis of flowers, stone paths, and laughter, preserved
                for decades by Kailash. Its impending demolition by developers
                inspires the telling of the Treeatma legend.
              </p>
            </div>

            {/* Element 2: The Treeatma Souls */}
            <div className="clay-card-green p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-xl shadow-inner">
                🌿
              </div>
              <h4 className="mb-1 font-display font-extrabold text-emerald-800">
                The Treeatma Spirits
              </h4>
              <p className="text-xs leading-relaxed text-slate-700">
                Immortal guardians who dwell within trees and control the
                natural elements. To survive, they swap between neighboring
                trees when danger strikes.
              </p>
            </div>

            {/* Element 3: The Expanding World */}
            <div className="clay-card-amber p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl shadow-inner">
                🪵
              </div>
              <h4 className="mb-1 font-display font-extrabold text-amber-800">
                The Human Conquest
              </h4>
              <p className="text-xs leading-relaxed text-slate-700">
                From basic tools to tribal wars, colonization, and modern
                industrialization, humans slowly cleared forests, leaving
                spirits homeless and nature fragile.
              </p>
            </div>

            {/* Element 4: Nature's Last Stand */}
            <div className="clay-card-blue p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl shadow-inner">
                ⚡
              </div>
              <h4 className="mb-1 font-display font-extrabold text-blue-800">
                The Great Awakening
              </h4>
              <p className="text-xs leading-relaxed text-slate-700">
                Faced with final extinction, the spirits strike back. Massive
                storms, rising waters, and moving trees bring humanity to its
                knees, leading to a new pact of peace.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 4 Accordions */}
        <section className="space-y-6">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl text-center font-bold tracking-tight text-slate-900 md:text-3xl">
              Chronicles of the Treeatma
            </h2>
            <p className="text-sm text-center text-slate-500">
              Select a chapter below to read Kailash&apos;s story of how the
              spirits interacted with humans across the ages.
            </p>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, idx) => {
              const isOpen = openAccordion === idx;

              // Map index to a specific claymorphism class to vary designs
              const clayCards = [
                "clay-card-green",
                "clay-card-amber",
                "clay-card-purple",
                "clay-card-blue",
              ];
              const currentClayCard = clayCards[idx % 4];

              const textColors = [
                "text-emerald-700",
                "text-amber-700",
                "text-purple-700",
                "text-blue-700",
              ];
              const currentTextColor = textColors[idx % 4];

              const hoverBgColors = [
                "hover:bg-emerald-50/50",
                "hover:bg-amber-50/50",
                "hover:bg-purple-50/50",
                "hover:bg-blue-50/50",
              ];
              const currentHoverBg = hoverBgColors[idx % 4];

              return (
                <div
                  key={item.id}
                  className={`${currentClayCard} transition-all duration-300 overflow-hidden ${
                    isOpen ? "translate-y-0.5" : "hover:-translate-y-0.5"
                  }`}
                >
                  {/* Accordion Trigger (Large Text) */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className={`flex w-full items-center justify-between p-6 text-left focus:outline-none transition-colors duration-200 ${currentHoverBg} rounded-t-3xl`}
                    id={`accordion-trigger-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${item.id}`}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                      {/* Big Number */}
                      <span
                        className={`font-mono text-3xl font-extrabold tracking-tighter opacity-80 ${currentTextColor} md:text-4xl`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`font-mono text-3xl font-extrabold tracking-tighter opacity-80 ${currentTextColor} md:text-4xl`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Clay Expand/Collapse Indicator */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full clay-inset-white font-mono text-lg font-bold text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </div>
                  </button>

                  {/* Accordion Panel Content - Animated with CSS Grid for Auto Height */}
                  <div
                    id={`accordion-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`accordion-trigger-${item.id}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100/50 p-6 pt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                        <p className="clay-inset-white p-5 text-slate-700 bg-white/40">
                          <pre className="whitespace-pre-line font-sans text-xl font-normal">
                            {item.content}
                          </pre>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: YouTube Videos & Audio Podcasts */}
        <section className="mt-20 space-y-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Treetma Media Library
            </h2>
            <p className="text-sm text-slate-500">
              Explore the story through a visual infographic explanation and
              immersive audio podcasts in multiple languages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Featured Infographic - Spans full width on medium/large screens */}
            <div className="md:col-span-3">
              <div className="clay-card-green overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
                    {/* Video Embed */}
                    <div className="lg:col-span-7">
                      <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-white/60 bg-slate-950 shadow-inner">
                        <iframe
                          className="h-full w-full"
                          src="https://www.youtube.com/embed/W3p6RYzzK1E?si=CfPzwQHP6hO4-g4l"
                          title="The Legend of Treetma: Infographic Explanation"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Text description */}
                    <div className="flex flex-col justify-between lg:col-span-5">
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <span className="rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-inner">
                            Featured
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 shadow-inner">
                            Infographic Video
                          </span>
                        </div>
                        <h3 className="mb-3 font-display text-xl font-extrabold text-slate-900 md:text-2xl">
                          The Legend of Treetma: Infographic Explanation
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          Dive deep into a visual infographic breakdown
                          explaining the origins of the Treeatmas, their
                          branch-to-branch swapping mechanisms, and
                          nature&apos;s ultimate stand against urban expansion.
                          Perfect for a quick, engaging summary of the entire
                          saga.
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                        <span>🎬 Animation & Visual Guide</span>
                        <span>•</span>
                        <span>English</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast Languages */}
            <div className="grid grid-cols-1 gap-6 md:col-span-3 sm:grid-cols-2 lg:grid-cols-3">
              {/* English Podcast */}
              <div className="clay-card-blue flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100/80 px-2.5 py-0.5 text-xs font-semibold text-blue-800 shadow-inner">
                      Audio Podcast
                    </span>
                    <span className="text-xs font-medium text-blue-600">
                      English
                    </span>
                  </div>
                  <h4 className="mb-2 font-display text-base font-extrabold text-slate-900">
                    Audio Podcast: English Edition
                  </h4>
                  <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    Listen to the complete saga of Kailash and the Treeatmas
                    told in English with relaxing background forest melodies and
                    premium narrative voiceover.
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border-2 border-white/60 bg-slate-950 shadow-inner">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/zB713pfMtkI?si=uKaGmDvGEqYsRMdq"
                      title="Audio Podcast: English Edition"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Hindi Podcast */}
              <div className="clay-card-amber flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-amber-100/80 px-2.5 py-0.5 text-xs font-semibold text-amber-800 shadow-inner">
                      ऑडियो पॉडकास्ट
                    </span>
                    <span className="text-xs font-medium text-amber-600">
                      हिंदी
                    </span>
                  </div>
                  <h4 className="mb-2 font-display text-base font-extrabold text-slate-900">
                    ऑडियो पॉडकास्ट: हिंदी संस्करण
                  </h4>
                  <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    कैलाश और ट्रीआत्मा की कहानी को हिंदी भाषा में सुनें, जो
                    प्रकृति की असीम शक्ति और उसके संरक्षकों का वर्णन अत्यंत
                    मनमोहक शैली में करती है।
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border-2 border-white/60 bg-slate-950 shadow-inner">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/UpCSI2svhCM?si=XSpQt-eqaR61a1S8"
                      title="Audio Podcast: Hindi Edition"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Marathi Podcast */}
              <div className="clay-card-purple flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-purple-100/80 px-2.5 py-0.5 text-xs font-semibold text-purple-800 shadow-inner">
                      ऑडिओ पॉडकास्ट
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      मराठी
                    </span>
                  </div>
                  <h4 className="mb-2 font-display text-base font-extrabold text-slate-900">
                    ऑडिओ पॉडकास्ट: मराठी आवृत्ती
                  </h4>
                  <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    कैलास आणि ट्रीआत्माची ही जादुई कथा मराठीत अनुभवा, जिथे
                    निसर्गाचा संघर्ष आणि मानवी जागृती स्पष्ट आणि प्रभावी आवाजात
                    मांडली आहे.
                  </p>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border-2 border-white/60 bg-slate-950 shadow-inner">
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/g7DVZBJNYHI?si=mPAbzyJUDlkv13yb"
                      title="Audio Podcast: Marathi Edition"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-emerald-100/50 pt-8 text-center text-xs text-slate-400">
          <p>
            © 2026 Treeatma Chronicles. Inspired by Kailash&apos;s story. Styled
            with Claymorphism.
          </p>
        </footer>
      </div>
    </div>
  );
}
