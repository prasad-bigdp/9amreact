import type { NextApiRequest, NextApiResponse } from "next"
const books = [
	{
		name: "secret",
	},
	{
		name: "monk who sold his ferrari",
	},
]
let a: number | string = 20
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == "GET") {
		res.status(200).json(books)
	}
}
