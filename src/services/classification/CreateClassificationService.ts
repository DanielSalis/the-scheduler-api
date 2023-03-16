import prismaClient from '../../prisma';

interface ClassificationRequest {
  name:           string,
  color:          string,
  estimated_time: number
}

class CreateClassificationService {
  async execute({ name, color, estimated_time }: ClassificationRequest) {
    if (!name || !color || !estimated_time) {
      throw new Error('Missing classification params');
    }

    const classification = await prismaClient.classification.findFirst({
      where: {
        name: name
      }
    });

    if (classification) {
      throw new Error('Classification already exists');
    }

    const newClassification = await prismaClient.classification.create({
      data: {
        name: name,
        color: color,
        estimated_time: estimated_time
      }
    });

    return newClassification;
  }
}

export { CreateClassificationService };