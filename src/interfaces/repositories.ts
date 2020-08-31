export interface IRepository {
  findAll?: (params: any) => Promise<any>;

  persist? :(params: any) => Promise<any>
}