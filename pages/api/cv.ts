import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"

// endpoint to download CV
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-disposition", "attachment; filename=erhan-tezcan-cv.pdf")
  res.setHeader("Content-type", "application/pdf")

  const filestream = fs.createReadStream("/assets/cv.pdf")
  filestream.pipe(res)
  res.status(200).json({})
  filestream.close()
}
