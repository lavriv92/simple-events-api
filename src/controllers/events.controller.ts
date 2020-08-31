import Controller from "../shared/decorators/controller";
import { Get, Post } from "../shared/decorators/actions";
import EventsService from "../services/events.service";
import { Response } from "../interfaces/responses";

@Controller("/events")
export default class EventsController {

  constructor(
    private readonly eventsService: EventsService
  ){}

  @Get()
  async getAppEvents(request): Promise<Response<Array<any>>> {
    const events = await this.eventsService.getAllEvents({});

    return {
      events
    }
  }

  @Get("/{eventId}")
  async getEvent(request) {
    const event = await this.eventsService.findEvent(request.params.eventId);

    return { event };
  }

  @Post()
  async persistEvent(request) {
    const event = await this.eventsService.persist(request.payload);

    return { event };
  }
}