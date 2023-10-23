import { CollectionConfig } from 'payload/types'

const Partite: CollectionConfig = {
  slug: 'partite',
  auth: false,
  access: {
    create: ({ req }) => {
      console.log(req.baseUrl)
      return true
    },
    read: () => true,
    update: ({ req: { user } }) => {
      if(user) return true
    },
    delete: ({ req: { user } }) => {
      if(user) return true
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'Giocatore_1',
          type: 'select',
          hasMany: false,
          required: true, 
          unique: true,
          options: [
            'Francesco',
            'Roberto',
            'Luca',
            'Lorenzo',
            'Nicola',
            'Giovanni',
            'Diego'
          ]
        },
        {
          name: 'Pts1',
          type: 'number',
          max: 3,
          min: 0
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Giocatore_2',
          type: 'select',
          hasMany: false,
          required: true, 
          unique: true,
          options: [
            'Francesco',
            'Roberto',
            'Luca',
            'Lorenzo',
            'Nicola',
            'Giovanni',
            'Diego'
          ]
        },
        {
          name: 'Pts2',
          type: 'number',
          max: 3,
          min: 0
        }
      ]
    }
  ]
}

export default Partite