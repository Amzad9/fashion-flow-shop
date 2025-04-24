
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/firok-logo.png"
        alt="Firok Fashion"
        className="h-8 w-auto"
      />
      <span className="font-medium text-xl text-fashion-primary hidden sm:inline-block">
        Firok Fashion
      </span>
    </div>
  )
}
