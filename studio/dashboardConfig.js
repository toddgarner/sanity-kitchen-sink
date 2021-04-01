export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60661cf7d49cae4515791f28',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vj28pgzp',
                  apiId: 'e71d3ddf-5eaf-4d9b-ab71-91c4ca61c403'
                },
                {
                  buildHookId: '60661cf70b9a5e3996a472b9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bfgntwop',
                  apiId: '9b73cd0a-6561-4bc2-92f9-bbf3b020f82e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toddgarner/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bfgntwop.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
