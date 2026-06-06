'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-transparent border-b border-earth-dark/40 pb-3 pt-2 text-earth-light placeholder-earth-light/20 text-sm font-display tracking-wide focus:outline-none focus:border-sky-bright transition-colors duration-300'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div>
        <input
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className={cn(
          'text-xs tracking-[0.25em] uppercase font-display font-medium px-8 py-4 transition-all duration-300 self-start',
          status === 'sent'
            ? 'text-sky-bright border border-sky-bright/30 bg-sky-bright/5'
            : 'text-earth-light border border-earth-warm/30 hover:bg-earth-warm/10 hover:border-earth-warm'
        )}
      >
        {status === 'idle' && 'Send Message'}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && 'Message Sent ✓'}
        {status === 'error' && 'Try Again'}
      </button>
    </form>
  )
}
