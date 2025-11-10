"use client";
import * as React from "react";

type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  // ...any props you need
};

export function DatePicker({ value, onChange }: DatePickerProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Guard for SSR
    if (typeof window === "undefined") return;
    // Initialize duDatepicker here ONLY if it requires DOM
    // e.g., window.duDatepicker?.init(ref.current, options)
    // Attach event listeners and call onChange accordingly
    return () => {
      // cleanup listeners/instances
    };
  }, []);

  return (
    <div ref={ref} className="inline-block">
      {/* Your input/trigger UI rendered via React */}
      {/* For shadcn styling, apply classNames/tokens here */}
      {/* Use Tailwind classes only; avoid shipping heavy CSS if possible */}
      <input
        className="h-10 w-40 rounded-md border px-3 text-sm"
        defaultValue={value ? value.toISOString().slice(0, 10) : ""}
        onChange={(e) => {
          const v = e.currentTarget.value
            ? new Date(e.currentTarget.value)
            : null;
          onChange?.(v);
        }}
      />
    </div>
  );
}
