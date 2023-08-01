import prismaClient from '../../prisma';
import { Prisma } from '@prisma/client';

interface ScheduleRquest {
  unity_id: string,
  shift_id: string,
  start_date: string,
  end_date: string
}


class ListSchedulesMeanWorkload {
  async execute (params: ScheduleRquest) {
    const filter = {
      where: {} as Prisma.SchedulesWhereInput,
      _count: {} as Prisma.SchedulesCountAggregateInputType | true,
      by: {} as Prisma.SchedulesScalarFieldEnum[],
      orderBy: {} as Prisma.Enumerable<Prisma.SchedulesOrderByWithAggregationInput>
    };

    if(params.unity_id) filter.where.unity_id = params.unity_id;
    if(params.shift_id) filter.where.shift_id = params.shift_id;
    if(params.start_date && params.end_date) {
      filter.where.operational_day = {
        lte: params.end_date,
        gte: params.start_date
      };
    }
    filter.by = ['unity_id'];
    filter._count = {
      user_creator_id: true
    };

    const schedules = await prismaClient.schedules.groupBy(filter);

    return schedules;
  }
}

export { ListSchedulesMeanWorkload };