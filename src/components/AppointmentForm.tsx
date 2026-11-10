import { type FormEvent, type ReactNode, useState } from 'react'
import { formServiceOptions, site } from '../content/site'

type FormState = {
  name: string
  phone: string
  email: string
  preferredDate: string
  vehicle: string
  service: string
  problem: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  preferredDate: '',
  vehicle: '',
  service: '',
  problem: '',
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.phone.trim()) errors.phone = 'Phone is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.problem.trim()) errors.problem = 'Please describe the problem or service needed.'
  return errors
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-blue"> *</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-blue-deep" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default function AppointmentForm() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    setSubmitted(false)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  const inputClass =
    'w-full border-0 border-b border-line bg-transparent py-2 text-ink focus:border-blue focus:outline-none'

  if (submitted) {
    return (
      <div
        className="border border-line bg-paper p-6 text-ink"
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold text-navy">Thank you—we received your details.</p>
        <p className="mt-2 text-sm text-mute">
          This form does not send email yet. To confirm an appointment, please call{' '}
          <a href={site.phoneTel} className="font-semibold text-blue hover:underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="appt-name" label="Name" required error={errors.name}>
          <input
            id="appt-name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'appt-name-error' : undefined}
          />
        </Field>
        <Field id="appt-phone" label="Phone" required error={errors.phone}>
          <input
            id="appt-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'appt-phone-error' : undefined}
          />
        </Field>
        <Field id="appt-email" label="Email" required error={errors.email}>
          <input
            id="appt-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'appt-email-error' : undefined}
          />
        </Field>
        <Field id="appt-date" label="Preferred date" error={errors.preferredDate}>
          <input
            id="appt-date"
            name="preferredDate"
            type="date"
            className={inputClass}
            value={values.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
          />
        </Field>
      </div>

      <Field id="appt-vehicle" label="Vehicle year, make, and model" error={errors.vehicle}>
        <input
          id="appt-vehicle"
          name="vehicle"
          type="text"
          className={inputClass}
          value={values.vehicle}
          onChange={(e) => update('vehicle', e.target.value)}
        />
      </Field>

      <Field id="appt-service" label="Service" error={errors.service}>
        <select
          id="appt-service"
          name="service"
          className={`${inputClass} cursor-pointer`}
          value={values.service}
          onChange={(e) => update('service', e.target.value)}
        >
          <option value="">Select a service area</option>
          {formServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="appt-problem" label="Problem or comments" required error={errors.problem}>
        <textarea
          id="appt-problem"
          name="problem"
          rows={4}
          className="w-full border border-line bg-card px-3 py-2 text-ink focus:border-blue focus:outline-none"
          value={values.problem}
          onChange={(e) => update('problem', e.target.value)}
          aria-invalid={Boolean(errors.problem)}
          aria-describedby={errors.problem ? 'appt-problem-error' : undefined}
        />
      </Field>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Submit request
      </button>

      <p className="text-xs text-mute">
        {site.name} uses this information only to confirm your appointment request.
      </p>
    </form>
  )
}
