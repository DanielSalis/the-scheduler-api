import prismaClient from '../../prisma';

// users= [
//   {
//     id:"",
//     estimated_time: 000,
//     beds: [
//       {
//         id:"",

//       }
//     ]
//   }
// ]

interface Bed {
  id: string
}

interface User {
  id: string,
  estimated_time: number,
  beds: Array<Bed>
}

interface ScheduleUserBedRequest {
  users_beds: Array<User>,
  schedule_id: string,
}


class CreateScheduleUserBedService {
  async execute({ users_beds, schedule_id }: ScheduleUserBedRequest) {
    if (!users_beds) {
      throw new Error('Missing schedule params');
    }

    const schedule = await prismaClient.schedule.findFirst({
      where: {
        id: schedule_id
      },
    });

    if (!schedule) {
      throw new Error('No schedule was found');
    }

    const usersBeds:Array<object> = [];
    users_beds.forEach(async (user: User) => {
      user.beds.forEach(async (bed: Bed) => {
        const newUserBed = await prismaClient.scheduleUserBed.create({
          data:{
            schedule_id: schedule_id,
            user_id: user.id,
            bed_id: bed.id,
            estimated_time: user.estimated_time
          }
        });
        usersBeds.push(newUserBed);
      });
    });

    return usersBeds;
  }
}

export { CreateScheduleUserBedService };