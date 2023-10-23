import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'username',
  },
  fields: [
    {
      name: 'email',
      required: true,
      type: 'text'
    },
    {
      name: 'nome',
      required: true,
      type: 'text'
    },
    {
      name: 'crediti',
      type: 'number',
      defaultValue: 0
    }
  ],
}

export default Users
