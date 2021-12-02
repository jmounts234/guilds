import { Model, Modifiers } from 'objection';
import Guildie from './Guildie';
// examples: https://github.com/Vincit/objection.js/tree/master/examples/koa-ts/models
// https://www.thisdot.co/blog/reducing-mental-fatigue-nestjs-objectionjs
export default class Guild extends Model {
  id!: number;
  name!: string;
  owner!: string;
  address!: string;
  email!: string;
  created_at!: Date;

  guildies?: Guildie[];

  // Table name is the only required property.
  static tableName = 'Guilds';

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      owner: { type: 'string', minLength: 1, maxLength: 255 },
      address: { type: 'string', minLength: 1, maxLength: 255 },
      email: { type: 'string', minLength: 1, maxLength: 255 },
    },
  };

  // Modifiers are reusable query snippets that can be used in various places.
  static modifiers: Modifiers = {
    searchByName(query, name) {
      query.where((query) => {
        for (const namePart of name.trim().split(/\s+/)) {
          for (const column of ['name']) {
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
    guildies: {
      relation: Model.ManyToManyRelation,
      modelClass: Guildie,
      join: {
        from: 'guild.id',
        // ManyToMany relation needs the `through` object to describe the join table.
        through: {
          from: 'guilds_guildies.guildId',
          to: 'guilds_guildies.guildieId',
        },
        to: 'guildies.id',
      },
    },
  });
}
