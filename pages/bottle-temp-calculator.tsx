import { useMemo, useState } from 'react'
import { PageSEO } from '@/components/SEO'

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))
const round5 = (n: number) => Math.round(n / 5) * 5

type Result = {
  error: string | null
  hotMl: number
  coldMl: number
}

function calculate(hot: number, cold: number, target: number, volume: number): Result {
  const empty = { hotMl: 0, coldMl: 0 }

  if (hot <= cold) {
    return { error: 'Hot water must be warmer than cold water.', ...empty }
  }
  if (hot <= target) {
    return {
      error: `Hot water (${hot}°C) isn't hot enough to reach ${target}°C even undiluted.`,
      ...empty,
    }
  }
  if (cold >= target) {
    return {
      error: `Cold water (${cold}°C) is already at or above ${target}°C.`,
      ...empty,
    }
  }

  const hotMl = round5(clamp((volume * (target - cold)) / (hot - cold), 0, volume))

  return {
    error: null,
    hotMl,
    coldMl: volume - hotMl,
  }
}

function Stepper({
  label,
  value,
  onChange,
  step,
  min,
  max,
  suffix,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  step: number
  min: number
  max: number
  suffix: string
}) {
  const set = (v: number) => onChange(clamp(v, min, max))
  const a11yLabel = label || 'volume'
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <div className="stepper">
        <button
          type="button"
          aria-label={`Decrease ${a11yLabel}`}
          onClick={() => set(value - step)}
        >
          −
        </button>
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value)
            if (!Number.isNaN(v)) set(v)
          }}
        />
        <span className="suffix">{suffix}</span>
        <button
          type="button"
          aria-label={`Increase ${a11yLabel}`}
          onClick={() => set(value + step)}
        >
          +
        </button>
      </div>

      <style jsx>{`
        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        label {
          font-size: 13px;
          color: var(--text-muted);
        }
        .stepper {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-2);
        }
        button {
          width: 44px;
          height: 44px;
          flex: none;
          border: none;
          background: transparent;
          color: var(--text);
          font-size: 20px;
          cursor: pointer;
        }
        button:active {
          background: var(--border);
        }
        input {
          flex: 1;
          width: 100%;
          min-width: 0;
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          color: var(--text);
          background: transparent;
          border: none;
          padding: 0;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .suffix {
          color: var(--text-faint);
          font-size: 14px;
          padding-right: 4px;
        }
      `}</style>
    </div>
  )
}

export default function BottleTempCalculator() {
  const [hot, setHot] = useState(70)
  const [cold, setCold] = useState(7)
  const [target, setTarget] = useState(38)
  const [volume, setVolume] = useState(200)

  const result = useMemo<Result>(
    () => calculate(hot, cold, target, volume),
    [hot, cold, target, volume]
  )

  const presets = [60, 90, 120, 150, 180, 210]

  return (
    <>
      <PageSEO
        title="Bottle Temp Calculator"
        description="Mix hot and cold water to the right bottle temperature."
      />
      <div className="wrap">
        <div className="card">
          <h1>Bottle Temp Calculator</h1>
          <p className="lede">
            Enter the current temp of your hot and cold water to get the mix that lands in range.
          </p>

          <div className="row">
            <Stepper
              label="Hot water"
              value={hot}
              onChange={setHot}
              step={1}
              min={1}
              max={100}
              suffix="°C"
            />
            <Stepper
              label="Cold water"
              value={cold}
              onChange={setCold}
              step={1}
              min={0}
              max={99}
              suffix="°C"
            />
          </div>

          <Stepper
            label="Target"
            value={target}
            onChange={setTarget}
            step={1}
            min={36}
            max={43}
            suffix="°C"
          />

          <div className="field">
            <span className="field-label">Total volume</span>
            <div className="presets">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`chip ${volume === p ? 'is-active' : ''}`}
                  onClick={() => setVolume(p)}
                >
                  {p}ml
                </button>
              ))}
            </div>
            <Stepper
              label=""
              value={volume}
              onChange={setVolume}
              step={10}
              min={10}
              max={1000}
              suffix="ml"
            />
          </div>

          {!result.error ? (
            <div className="result">
              <div className="split">
                <div className="part">
                  <span className="amount">{result.hotMl}ml</span>
                  <span className="tag">hot</span>
                </div>
                <span className="plus">+</span>
                <div className="part">
                  <span className="amount">{result.coldMl}ml</span>
                  <span className="tag">cold</span>
                </div>
              </div>
              <p className="note">Aiming for {target}°C.</p>
            </div>
          ) : (
            <div className="warning">{result.error}</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .wrap {
          min-height: 100dvh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 32px 16px 64px;
          background: var(--bg);
        }
        .card {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        h1 {
          font-size: 26px;
          font-weight: 600;
          color: var(--text);
          margin: 0;
        }
        .lede {
          margin: -12px 0 0;
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .field > label,
        .field > .field-label {
          font-size: 13px;
          color: var(--text-muted);
        }
        .presets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .chip {
          cursor: pointer;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          padding: 6px 14px;
          background: var(--bg-2);
          color: var(--text-muted);
          font-size: 13px;
        }
        .chip.is-active {
          border-color: var(--accent);
          color: var(--text);
          background: var(--border);
        }
        .result {
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 24px;
          background: var(--bg-2);
          text-align: center;
        }
        .split {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 14px;
        }
        .part {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .amount {
          font-size: 32px;
          font-weight: 600;
          color: var(--accent);
        }
        .tag {
          font-size: 12px;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .plus {
          font-size: 20px;
          color: var(--text-faint);
        }
        .note {
          margin: 16px 0 0;
          font-size: 13px;
          color: var(--text-muted);
        }
        .warning {
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 20px;
          background: var(--bg-2);
          color: var(--accent-2);
          font-size: 14px;
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}
