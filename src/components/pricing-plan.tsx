import clsx from 'clsx'
import { Check } from 'lucide-react'
import { Button } from './ui/button'


type PlanProps = {
  name: string,
  price: string, description: string, href: string, features: string[], featured?: boolean
  action?: any
}


export default function PricingPlan({ name, price, description, href, features, featured = false, action }: PlanProps) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first border border-primary py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3 className="mt-5 font-display text-lg ">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? '' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight ">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? '' : ''
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-1 items-center">
            <Check className={featured ? '' : 'opacity-90'} />
            <span className="">{feature}</span>
          </li>
        ))}
      </ul>
      {action ? action : <Button>hi</Button>}

    </section>
  )
}
