import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'lg' | 'sm'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          
          // Variant styles
          {
            'bg-teal-400 text-black hover:bg-teal-500 active:bg-teal-600': variant === 'default',
            'border border-gray-600 bg-transparent hover:bg-gray-800 hover:text-white': variant === 'outline',
            'hover:bg-gray-800 hover:text-white': variant === 'ghost',
          },
          
          // Size styles
          {
            'h-10 px-4 py-2 text-sm': size === 'default',
            'h-12 px-8 py-3 text-base': size === 'lg',
            'h-8 px-3 text-xs': size === 'sm',
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, type ButtonProps }