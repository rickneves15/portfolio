type QuoteProps = {
  text: string
  by: string
}

export function Quote({ text, by }: QuoteProps) {
  return (
    <div className="flex flex-col gap-y-4 text-right">
      <q className="font-quote text-6xl font-normal">{text}</q>
      <p className="text-sm font-medium">- {by}</p>
    </div>
  )
}
