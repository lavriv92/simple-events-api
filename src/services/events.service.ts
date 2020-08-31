import Service from "../shared/decorators/service";
import EventsRepository from "../repositories/events.repository";

@Service()
export default class EventsService {
  constructor(
    private readonly eventsRepository: EventsRepository
  ){}

  public getAllEvents(params) {
    return this.eventsRepository.findAll({});
  }

  public findEvent(id: string): Promise<any> {
    return this.eventsRepository.findById(id);
  }

  public async persist(eventData: any) {
    return this.eventsRepository.persist(eventData);
  }
}