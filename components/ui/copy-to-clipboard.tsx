"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CopyToClipboardProps {
  value: string | null
  className?: string
  showValue?: boolean
  label?: string
}

export function CopyToClipboard({
  value,
  className,
  showValue = true,
  label,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!value) return

    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
      )}
      <div className="font-mono text-sm bg-muted/50 px-3 py-1.5 rounded-md text-muted-foreground truncate flex items-center justify-between group">
        {showValue && <span>{value || "N/A"}</span>}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity",
            copied && "opacity-100"
          )}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-3 w-3 text-success" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      </div>
    </div>
  )
}
