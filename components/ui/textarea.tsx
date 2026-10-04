import * as React from "react";

import { cn } from "../../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-md border border-[#cfcfcf] bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
