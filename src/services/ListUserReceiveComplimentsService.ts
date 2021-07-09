import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = await getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
