import prismaClient from '../../prisma';

class ListAllShiftsService {
  async execute() {
    const allShifts = await prismaClient.shift.findMany();

    if(!allShifts){
      throw('The are no shifts available');
    }

    return allShifts;
  }
}

export { ListAllShiftsService };