import {
  GetUserByIdApiRequest,
  GetUserByIdApiResponse,
  GetUserByIdApiResponsePayload,
} from '@sfto/types';
import 'zod-openapi/extend';

export const GetUserByIdController = (
  req: GetUserByIdApiRequest,
  res: GetUserByIdApiResponse
) => {
  const userGuid = req.params.userGuid;

  return res.send({
    userGuid: userGuid,
    name: 'John Doe',
    email: 'example@email.com',
  } satisfies GetUserByIdApiResponsePayload);
};
