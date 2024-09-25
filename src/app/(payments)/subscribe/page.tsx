// @ts-nocheck
// TODO: check why its there's some error in the types
"use client"
import React from 'react'

import { AssetSvgs } from "@/components/asset-svgs"
import PricingPlan from '@/components/pricing-plan'
import CheckoutWithRazorpay from '@/components/checkout-razorpay'

const page = () => {

  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className=" py-20 sm:py-32"
    >
      <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight  sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <AssetSvgs.SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-primary/90" />
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <PricingPlan
            name="Starter"
            price="$9"
            description="Good for anyone who is self-employed and just getting started."
            href="/register"
            features={[
              'Send 10 quotes and invoices',
              'Connect up to 2 bank accounts',
              'Track up to 15 expenses per month',
              'Manual payroll support',
              'Export up to 3 reports',
            ]}
            action={<CheckoutWithRazorpay />}

          />

        </div>
      </section>
    </section>
  )
}

export default page


