import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository()
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };
