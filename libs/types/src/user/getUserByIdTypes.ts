import { FastifyReply, FastifyRequest, RouteGenericInterface } from 'fastify';
import { z } from 'zod';
import { GetUserByIdSchema } from '@sfto/schema';

export type GetUserByIdApiRequest = FastifyRequest<{
  Params: z.infer<typeof GetUserByIdSchema.params>;
}>;
export type GetUserByIdApiResponse = FastifyReply<
  z.infer<(typeof GetUserByIdSchema.response)[200]> & RouteGenericInterface
>;
export type GetUserByIdApiResponsePayload = z.infer<
  (typeof GetUserByIdSchema.response)[200]
>;
