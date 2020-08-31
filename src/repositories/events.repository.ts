import Event from "../models/event";
import BaseRepository from "./base.repository";

export default class EventsRepository extends BaseRepository {
  protected readonly model = Event;
}