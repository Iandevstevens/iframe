// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ IP: req.headers["x-forwarded-for"]?.split(",").shift() || req.socket?.remoteAddress, IP2: req.socket.localAddress });
}
