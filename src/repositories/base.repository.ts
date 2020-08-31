import mongoose from "mongoose";

export default class BaseRepository {
  protected readonly model: mongoose.Model<any, any>

  public findAll(params: any, options: any = {}) {
    return this.model.find(params, options);
  }

  public async persist(params: any) {
    const data = new this.model(params).save();

    return data;
  }

  public findById(id: string) {
    return this.model.findById(id);
  }
}