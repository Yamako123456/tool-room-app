import React from "react";
import toolRoomPic from "./toolRoom_dexHound2.png";

export const AboutComponent = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              About DexHound
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Professional Toolroom Management Software
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              DexHound helps companies manage toolroom operations with a
              simple, organized, and efficient software system. It supports both
              administrative setup and daily toolroom activities, helping teams
              reduce manual work and improve accuracy.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <img
              src={toolRoomPic}
              alt="DexHound toolroom workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <section id="features" className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              What DexHound Does
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              DexHound is designed to support the complete workflow of a modern
              toolroom, from setup and inventory management to issuing and
              returning items.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Administration
              </h3>
              <p className="text-slate-600">
                Create and manage employees, departments, suppliers, items,
                bins, and other key records. Each module supports listing,
                adding, editing, and deleting records.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Toolroom Operations
              </h3>
              <p className="text-slate-600">
                Support daily toolroom tasks such as restocking, physical
                counts, issuing items to employees, and accepting returned
                durable items.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Barcode Assistance
              </h3>
              <p className="text-slate-600">
                For office and cleaning supplies, users can scan a barcode and
                retrieve basic product information from a UPC database API to
                prefill the new item form.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-3xl bg-slate-900 px-6 py-12 text-center text-white shadow-xl">
          <h2 className="mb-4 text-3xl font-bold">
            Built for Accuracy and Efficiency
          </h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            DexHound helps toolroom attendants work faster, keeps inventory
            records organized, and gives administrators a reliable way to manage
            daily operations.
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src="/img/thumbUpHelmet.jpg"
              alt="Worker giving thumbs up"
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
            />
          </div>
        </section>
      </section>
    </main>
  );
};