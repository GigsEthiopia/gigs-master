
import User from '../../types/user.type';
import { create, deleteOne, getOne } from '../api/UserDataSource';


interface Result<T> {
  result?: T;
  error?: string | undefined | null;
}

export async function createUser(data: User): Promise<Result<boolean>> {
  const { result, error } = await create(data);
  return { result, error };
}

export async function deleteUser(id: string): Promise<Result<boolean>> {
  const { result, error } = await deleteOne(id);
  return { result, error };
}


// // Should only update some parts of the JSON not all
// export async function updateUser(id: string, data: User): Promise<Result<boolean>> {
//   const { result, error } = await update(id, data);
//   return { result, error };
// }

export async function getUser(id: string): Promise<Result<User | null>> {
  const { result, error } = await getOne(id);
  return { result, error };
}
