import { parseISO, format } from "date-fns"
import { FC } from "react"

const DateFormatter: FC<{
  dateString: string
}> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
}

export default DateFormatter
