import prismaClient from '../../prisma';
import { Prisma, PrismaClient } from '@prisma/client';

interface Request {
  start_date?: string,
  end_date?: string
}

interface filter {
  where: Prisma.SchedulesWhereInput,
  select: Prisma.SchedulesSelect,
  orderBy: Prisma.Enumerable<Prisma.SchedulesOrderByWithRelationInput>
}

class ListMeanWorkloadByUsers {
  async execute (params: Request) {
    let result: any = [];
    const filter: filter = {
      where: {} as Prisma.SchedulesWhereInput,
      select: {} as Prisma.SchedulesSelect,
      orderBy: {} as Prisma.Enumerable<Prisma.SchedulesOrderByWithRelationInput>
    };
    if(params.start_date && params.end_date) {
      filter.where.operational_day = {
        lte: params.end_date,
        gte: params.start_date
      };
    }
    else if(params.start_date && !params.end_date) {
      filter.where.operational_day = {
        equals: params.start_date
      };
    }
    else if(!params.start_date && params.end_date){
      filter.where.operational_day = {
        equals: params.end_date
      };
    }

    await this.getUsersWorkloads(filter)
      .then(usersWorkloads => {
        result = usersWorkloads;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(async () => {
        await prismaClient.$disconnect();
      });

      return result;
  }

  async getUsersWorkloads(filter :filter) {
    const schedules = await prismaClient.schedules.findMany({
      where: filter.where,
    });

    const schedulesUsers = await prismaClient.scheduleUserBed.findMany({
      where:{
        schedule_id: {
          in: schedules.map(schedule=> schedule.id),
        }
      },
      select: {
        id:true,
        estimated_time: true,
        schedule: true,
        user:true
      }
    });

    console.log(schedulesUsers);

    const usersMap = new Map<string, any>();
    schedulesUsers.forEach((item) => {
      const { user, schedule } = item;
      const existingUser = usersMap.get(user.id);
      if (existingUser) {
        const existingDateWork = existingUser.dateWork.find((dw: any) => dw.date === schedule.operational_day);
        if (existingDateWork) {
          existingDateWork.workload += item.estimated_time;
        } else {
          existingUser.dateWork.push({ date: schedule.operational_day, workload: item.estimated_time });
        }
      } else {
        usersMap.set(user.id, {
          id: user.id,
          name: user.name,
          email: user.email,
          dateWork: [
            {
              date: schedule.operational_day,
              workload: item.estimated_time
            }
          ],
        });
      }
    });

    const result: any = [];
    usersMap.forEach((user) => {
      const total_period_time = user.dateWork.reduce((acc: any, curr:any) => acc + curr.workload, 0);
      result.push({ user: {
        id: user.id,
        name: user.name,
        email: user.email,
        dateWork: {
          xAxis: user.dateWork.map((prop:any) => prop.date),
          data: user.dateWork.map((prop:any) => prop.workload)
        }
      }, total_period_time });
    });


    return result;
  }
}

export { ListMeanWorkloadByUsers };