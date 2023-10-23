import { CollectionConfig } from "payload/types";

const Iscritti: CollectionConfig = {
  slug: 'subscribers',
  auth: false,
  access: {
    create: () => true,
    delete: () => true
  },
  admin: {
    useAsTitle: 'nome'
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
    },
    {
      name: 'userid',
      type: 'text',
      required: true
    }
  ],
}

export default Iscritti