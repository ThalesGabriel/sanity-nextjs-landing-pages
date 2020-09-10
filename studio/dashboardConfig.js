export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f5a55aee7147b1c9368c9f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3tme7qjy',
                  apiId: 'c21fc5c6-fa63-4300-80ac-1f4ba5513b34'
                },
                {
                  buildHookId: '5f5a55ae0397f51b52a84082',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8rck9fin',
                  apiId: '77325206-9275-48a9-a047-2cc86211554c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ThalesGabriel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8rck9fin.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
