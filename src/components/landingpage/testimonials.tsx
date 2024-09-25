import Image from "next/image";

const testimonials = [
  [
    {
      content:
        // write a testimonial here explainning how much you love the product and how it has helped Ananth to get students and colleges throughout India.
        "I have been using Quantech Origins for a while now and I must say that it has been a great experience. I have been able to get students and colleges throughout India. I am very happy with the product and I would recommend it to anyone who is looking for a great experience.",
      author: {
        name: "Ananth P Mallya",
        role: "Founder of Quantech Origins",
        image: "https://media.licdn.com/dms/image/v2/C5603AQEEXgxbKRiR6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662395631805?e=1732147200&v=beta&t=GPXdoOLp8pZ4p0bc2BQw0G5eKU20LFcIm4TMoX1mmUw",
      },
    },
    {
      content:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: "https://github.com/likithanagaraj.png",
      },
    },
  ],
  [
    {
      content:
        "This has helped my students so much. I can’t believe how much time I used to spend on this stuff. Many of our students have been able to get a satisfied job throughout India.",
      author: {
        name: "Padma Reddy",
        role: "Professor at Sai Vidya Institute of Technology",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFH6legTJmhIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517595077981?e=1732147200&v=beta&t=PjPI-1Xe9YELaSYl6_kcgbc7si5uP9aWRETJeXL5R08",
      },
    },
    {
      content:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image: "https://github.com/mehwish75.png",
      },
    },
  ],
  [
    {
      content:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image: "https://github.com/abdulrcs.png",
      },
    },
    {
      content:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: "https://github.com/mohdfaizan5.png",
      },
    },
  ],
];

function QuoteIcon(props: any) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function Testimonials3() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl text-balance">
            Loved by students, colleges throughout India.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Here are some of the things our students and colleges have to say about us.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
