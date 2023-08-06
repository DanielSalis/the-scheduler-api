import prismaClient from '../../prisma';
import { Prisma } from '@prisma/client';

interface ScheduleRquest {
  unity_id?: string,
  shift_id?: string,
  start_date?: string,
  end_date?: string
}


class ListSchedulesMeanWorkload {
  async execute (params: ScheduleRquest) {
    const filter = {
      where: {} as Prisma.SchedulesWhereInput,
      select: {} as Prisma.SchedulesSelect,
    };

    if(params.unity_id) filter.where.unity_id = params.unity_id;
    if(params.shift_id) filter.where.shift_id = params.shift_id;
    if(params.start_date && params.end_date) {
      filter.where.operational_day = {
        lte: params.end_date,
        gte: params.start_date
      };
    }

    filter.select = {
      workload: true,
      operational_day: true,
      unity: {
        select: {
          id: true,
          name: true
        }
      }
    };

    const schedules = await prismaClient.schedules.findMany(filter);

    const uniqueDates = Array.from(new Set(schedules.map(item => item.operational_day)));

    const resultArray = [] as any;

    schedules.forEach((item :any) => {
      const unityId = item.unity.id;
      const unityName = item.unity.name;
      const workload = item.cancelled ? 0 : item.workload;

      // Find existing unity entry in the resultArray
      const existingUnity = resultArray.find((unity:any) => unity.name === unityName);

      if (existingUnity) {
        // Unity entry exists, so add workload to the corresponding day
        const existingDataIndex = existingUnity.data.findIndex((entry:any) => entry.day === item.operational_day);
        if (existingDataIndex !== -1) {
          existingUnity.data[existingDataIndex].workload += workload;
        } else {
          existingUnity.data.push({ day: item.operational_day, workload: workload });
        }
      } else {
        // Unity entry doesn't exist, create a new one with the initial day data
        resultArray.push({
          name: unityName,
          data: [{ day: item.operational_day, workload: workload }]
        });
      }
    });

    // Reformat the data to match the desired structure
    const finalResult = resultArray.map((unity:any) => ({
      name: unity.name,
      data: unity.data.map((entry:any) => entry.workload)
    }));

    return {
      series: finalResult,
      xaxis: uniqueDates
    };
  }
}

export { ListSchedulesMeanWorkload };