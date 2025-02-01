import { GetUserByIdController } from '@sfto/controllers';
import { GetUserByIdSchema } from '@sfto/schema';
import { FastifyInstance } from 'fastify';
import { FastifyZodOpenApiTypeProvider } from 'fastify-zod-openapi';

export const UserRouter = (fastify: FastifyInstance) => {
  fastify.withTypeProvider<FastifyZodOpenApiTypeProvider>().route({
    method: 'GET',
    url: '/user/:userGuid',
    schema: GetUserByIdSchema,
    handler: GetUserByIdController,
  });

  // fastify.withTypeProvider<FastifyZodOpenApiTypeProvider>().route({
  //   method: 'GET',
  //   url: '/users',
  //   ...AnotherSchema,
  //   handler: AnotherController,
  // });
};
