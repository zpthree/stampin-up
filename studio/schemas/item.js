export default {
  type: 'document',
  name: 'item',
  title: 'Item',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the item.',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The text shown just below the item title.',
      validation: null,
    },
    {
      type: 'date',
      name: 'date',
      title: 'Date',
      validation: Rule => Rule.required(),
    },
    {
      type: 'image',
      name: 'thumb_img_path',
      title: 'Featured Image',
      description: 'The image shown in the blog feed.',
      validation: null,
    },
    {
      type: 'image',
      name: 'content_img_path',
      title: 'Alternative Featured Image',
      description: 'The image shown in the single item.',
      validation: null,
    },
    {
      type: 'string',
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The excerpt of the item displayed in the blog feed.',
      validation: null,
    },
    {
      type: 'page_menus',
      name: 'menus',
      title: 'Item Menus',
      description: 'Which menus should this page show up in',
      validation: null,
    },
    {
      type: 'string',
      name: 'template',
      title: 'Template',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        list: ['item'],
      },
    },
    {
      type: 'string',
      name: 'stackbit_url_path',
      title: 'Item URL Path',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and item page would be "items/new-item/"',
      validation: Rule => Rule.required(),
    },
    {
      type: 'markdown',
      name: 'content',
      title: 'Content',
      description: 'Page content',
      validation: null,
    },
    {
      type: 'string',
      name: 'stackbit_model_type',
      title: 'Stackbit Model Type',
      description: 'Stackbit model type',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        list: ['page'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
