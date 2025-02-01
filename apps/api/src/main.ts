import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-zod-openapi';

import { UserRouter } from '@sfto/routers';

const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// Routers.
app.register(UserRouter);

app.listen({ port: 3333 }).then(() => {
  console.log('Server started on port 3333');
});
