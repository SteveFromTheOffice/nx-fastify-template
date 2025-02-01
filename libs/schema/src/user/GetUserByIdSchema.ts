import { FastifyZodOpenApiSchema } from 'fastify-zod-openapi';
import { z } from 'zod';

export const GetUserByIdSchema = {
  params: z.object({
    userGuid: z.string().uuid().openapi({
      description: 'The ID of the user to retrieve',
      example: '123e4567-e89b-12d3-a456-426614174000',
    }),
  }),
  response: {
    200: z
      .object({
        userGuid: z.string().uuid(),
        name: z.string(),
        email: z.string().email(),
      })
      .required(),
  },
} satisfies FastifyZodOpenApiSchema;
