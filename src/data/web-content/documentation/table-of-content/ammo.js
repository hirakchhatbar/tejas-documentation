const data = [
  {
    title: 'Ammo',
    link: '#ammo'
  },
  {
    title: 'Basics',
    link: '#basics',
    subItems: [
      {
        title: 'Body and Params (Payload)',
        value: 'body-and-params',
        link: '#body-and-params'
      },
      {
        title: 'Headers',
        value: 'headers',
        link: '#headers'
      },
      {
        title: 'Send Response',
        value: 'send-response',
        link: '#send-response',
        subItems: [
          {
            title: 'Text Response',
            value: 'text-response',
            link: '#text-response'
          },
          {
            title: 'JSON Response',
            value: 'json-response',
            link: '#json-response'
          },
          {
            title: 'Only Status Code',
            value: 'only-status-code',
            link: '#only-status-code'
          },
          {
            title: 'Status Code And Data',
            value: 'status-code-and-data',
            link: '#status-code-and-data'
          },
          {
            title: 'Empty Response',
            value: 'empty-response',
            link: '#empty-response'
          }
        ]
      }
    ]
  },
  {
    title: 'Advanced',
    link: '#advanced',
    subItems: [
      {
        title: 'req and res',
        value: 'req-and-res',
        link: '#req-and-res'
      },
      {
        title: 'Properties',
        value: 'properties',
        link: '#properties',
        subItems: [
          {
            title: 'IP Address',
            value: 'ip-address',
            link: '#ip-address'
          },
          {
            title: 'Request Method',
            value: 'request-method',
            link: '#request-method'
          },
          {
            title: "Others",
            value: 'others',
            link: '#others'
          }
        ]
      },
      {
        title: 'Functions',
        value: 'functions',
        link: '#functions',
        subItems: [
          {
            title: 'unauthorized()',
            value: 'unauthorized',
            link: '#unauthorized'
          },
          {
            title: 'notFound()',
            value: 'not-found',
            link: '#not-found'
          },
          {
            title: 'notAllowed()',
            value: 'not-allowed',
            link: '#not-allowed'
          }
        ]
      }
    ]
  }
]

export default data
