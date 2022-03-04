import { KubeFastifyInstance } from '../../../types';
import { FastifyReply, FastifyRequest } from 'fastify';
import { DEV_MODE } from '../../../utils/constants';
import { addCORSHeader } from '../../../utils/responseUtils';
import { postNotebook } from '../../../utils/resourceUtils';

module.exports = async (fastify: KubeFastifyInstance) => {
  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    if (DEV_MODE) {
      addCORSHeader(request, reply);
    }
    let body = request.body
    reply.send((postNotebook));
  });
};
