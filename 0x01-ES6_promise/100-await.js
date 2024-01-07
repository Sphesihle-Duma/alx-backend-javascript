import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (err) {
    console.log(err);
    return {
      photo: null,
      user: null,
    };
  }
}
