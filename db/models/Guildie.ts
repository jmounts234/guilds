import { Model, Modifiers } from 'objection';
import Guild from './Guild';

export default class Guildie extends Model {
  id!: number;
  username!: string;
  name!: string;
  email!: string;
  created_at!: Date;

  // Table name is the only required property.
  static tableName = 'Guildies';

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['username'],

    properties: {
      id: { type: 'integer' },
      username: { type: 'string', minLength: 1, maxLength: 255 },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };

  // Modifiers are reusable query snippets that can be used in various places.
  static modifiers: Modifiers = {
    searchByUserName(query, username) {
      query.where((query) => {
        for (const namePart of username.trim().split(/\s+/)) {
          for (const column of ['username']) {
            query.orWhereRaw('lower(??) like ?', [
              column,
              namePart.toLowerCase() + '%',
            ]);
          }
        }
      });
    },
  };

  // This object defines the relations to other models. The relationMappings property can be a thunk to prevent circular dependencies.
  static relationMappings = () => ({
    guilds: {
      relation: Model.ManyToManyRelation,
      modelClass: Guild,
      join: {
        from: 'guildies.id',
        // ManyToMany relation needs the `through` object to describe the join table.
        through: {
          from: 'guilds_guildies.guildId',
          to: 'guilds_guildies.guildieId',
        },
        to: 'guild.id',
      },
    },
  });
}
