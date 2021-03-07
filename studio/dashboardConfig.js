export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '60450d665caa14e2bf9822f3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-new-studio',
                  apiId: '9f85bc9d-8e0c-4933-bf60-6cbf2529d3ae'
                },
                {
                  buildHookId: '60450d66ad3d945ade0fc368',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-new',
                  apiId: '82477a5b-3880-4578-b0b7-319c5ca7b5c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sivertbjo/sanity-gridsome-blog-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-new.netlify.app', category: 'apps'}
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
