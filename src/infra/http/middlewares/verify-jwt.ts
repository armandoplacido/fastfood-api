import { FastifyReply, FastifyRequest } from 'fastify'

export async function veriftJWT(request: FastifyRequest, replay: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    return replay.status(401).send({ message: 'Unauthorized' })
  }
}
