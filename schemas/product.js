import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Product description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
    }),
  ],
})
