import { useState } from 'react'

interface FormValues {
  name: string
  email: string
  dogName: string
  package: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  dogName?: string
  package?: string
  message?: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  dogName: '',
  package: '',
  message: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.dogName.trim()) errors.dogName = "Please enter your dog's name."
  if (!values.package) errors.package = 'Please select a package interest.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

const inputBase =
  'w-full bg-surface-container border border-surface-container-high rounded px-4 py-3 font-sans text-[16px] leading-[24px] text-on-surface placeholder-on-surface-variant/40 transition-colors duration-200 focus:outline-none focus:border-primary focus-visible:border-primary'

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name as keyof FormValues]) {
      setErrors(validate({ ...values, [name]: value }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.keys(values).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormValues, boolean>,
    )
    setTouched(allTouched)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* Page heading */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-10 lg:px-[80px] text-center border-b border-outline-variant">
        <div className="max-w-container mx-auto">
          <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-[clamp(36px,6vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-on-surface mb-6">
            Contact Us
          </h1>
        </div>
      </div>

      <section className="py-[80px] md:py-[120px] px-5 md:px-10 lg:px-[80px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20">

            {/* LEFT — Form */}
            <div>
              <p className="font-sans text-[14px] leading-[20px] text-on-surface-variant mb-8">
                For Custom package arrangements, please use this form and tell us about your dog's specific requirements.
              </p>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-surface-container border border-[rgba(212,175,55,0.3)] rounded p-8 text-center"
                >
                  <p className="font-serif text-2xl font-medium text-on-surface mb-3">
                    Thank you.
                  </p>
                  <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                    We will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Enquiry form">
                  <div className="flex flex-col gap-6">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                        className={inputBase}
                        placeholder="Jane Smith"
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" role="alert" className="mt-1.5 font-sans text-[13px] text-error">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        className={inputBase}
                        placeholder="jane@example.com"
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" role="alert" className="mt-1.5 font-sans text-[13px] text-error">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Dog name */}
                    <div>
                      <label
                        htmlFor="dogName"
                        className="block text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-2"
                      >
                        Dog's Name
                      </label>
                      <input
                        type="text"
                        id="dogName"
                        name="dogName"
                        value={values.dogName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-describedby={errors.dogName ? 'dogName-error' : undefined}
                        aria-invalid={!!errors.dogName}
                        className={inputBase}
                        placeholder="Biscuit"
                      />
                      {errors.dogName && touched.dogName && (
                        <p id="dogName-error" role="alert" className="mt-1.5 font-sans text-[13px] text-error">
                          {errors.dogName}
                        </p>
                      )}
                    </div>

                    {/* Package */}
                    <div>
                      <label
                        htmlFor="package"
                        className="block text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-2"
                      >
                        Package Interest
                      </label>
                      <select
                        id="package"
                        name="package"
                        value={values.package}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-describedby={errors.package ? 'package-error' : undefined}
                        aria-invalid={!!errors.package}
                        className={`${inputBase} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>Select a package…</option>
                        <option value="Premium">Premium</option>
                        <option value="Classic">Classic</option>
                        <option value="Day">Day</option>
                        <option value="Custom">Custom</option>
                        <option value="General enquiry">General enquiry</option>
                      </select>
                      {errors.package && touched.package && (
                        <p id="package-error" role="alert" className="mt-1.5 font-sans text-[13px] text-error">
                          {errors.package}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-on-surface-variant mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={!!errors.message}
                        rows={5}
                        className={`${inputBase} resize-vertical`}
                        placeholder="Tell us about your dog and any special requirements…"
                      />
                      {errors.message && touched.message && (
                        <p id="message-error" role="alert" className="mt-1.5 font-sans text-[13px] text-error">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-on-primary text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans rounded hover:brightness-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT — Contact details */}
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-medium leading-[1.25] text-on-surface mb-8">
                Visit Us
              </h2>

              <address className="not-italic flex flex-col gap-6 mb-8">
                <a
                  href="tel:+85221234567"
                  className="flex items-center gap-4 font-sans text-[16px] leading-[24px] text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-[rgba(242,202,80,0.3)] shrink-0">
                    <PhoneIcon />
                  </span>
                  +852 2123 4567
                </a>

                <a
                  href="mailto:hello@lovinghomes.hk"
                  className="flex items-center gap-4 font-sans text-[16px] leading-[24px] text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-[rgba(242,202,80,0.3)] shrink-0">
                    <EmailIcon />
                  </span>
                  hello@lovinghomes.hk
                </a>

                <div className="flex items-start gap-4 font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-[rgba(242,202,80,0.3)] shrink-0 mt-0.5">
                    <LocationIcon />
                  </span>
                  <span>
                    8 Repulse Bay Road<br />
                    Repulse Bay<br />
                    Hong Kong
                  </span>
                </div>
              </address>

              <div className="w-full h-px bg-outline-variant my-8" role="separator" />

              <div>
                <p className="text-[12px] font-bold leading-[16px] tracking-[0.15em] uppercase font-sans text-primary mb-3">
                  Custom Packages
                </p>
                <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
                  For longer stays or dogs with specific requirements, we'd love to design a bespoke experience. Use the enquiry form and select "Custom" to begin the conversation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
