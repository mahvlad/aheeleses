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
                  buildHookId: '5f5021dcebcc7c1401c4d662',
                  title: 'Sanity Studio',
                  name: 'aheeleses-studio',
                  apiId: 'f870ff70-da64-4671-96e0-bbdf1335540e'
                },
                {
                  buildHookId: '5f5021dc7651f110fd54657c',
                  title: 'Blog Website',
                  name: 'aheeleses',
                  apiId: 'fc283f37-e7ca-42a8-9453-66d363816083'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mahvlad/aheeleses',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://aheeleses.netlify.app', category: 'apps'}
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
