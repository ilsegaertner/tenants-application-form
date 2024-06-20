import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "src/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "norelative noh-4 now-full nooverflow-hidden norounded-full nobg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="noh-full now-full noflex-1 nobg-primary notransition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
