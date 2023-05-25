module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items:[
        'quickstart',
        'tut-deployment',
        {type:'doc', id:'uninstall'},
      ],
    },
    {
      type: 'category',
      label: 'Explanations',
      collapsed: false,
      items:[
        'architecture',
        'concepts',
        'ref-bundle-stages',
        'gitrepo-content',
        'namespaces',
        'ref-resources',
      ],
    },
    {
      type: 'category',
      label: 'How-tos for Operators',
      collapsed: false,
      items:[
        {type: 'doc', id: 'installation'},
        {type: 'doc', id: 'cluster-registration'},
        {type:'doc', id:'cluster-group'},
        'multi-user',
      ],
    },
    {
      type: 'category',
      label: 'How-tos for Users',
      collapsed: false,
      items:[
        {type:'doc', id:'gitrepo-add'},
        {type:'doc', id:'gitrepo-targets'},
        {type:'doc', id:'bundle-diffs'},
        {type:'doc', id:'webhook'},
        {type:'doc', id:'imagescan'},
        {type:'doc', id:'bundle-add'},
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items:[
        {
          'CLI':
          [
            {type: 'doc', id: 'cli/fleet-agent/fleet-agent'},
            {
              'fleet-gitjob-cli': [
                {type: 'doc', id: 'cli/fleet-cli/fleet'},
                {type: 'doc', id: 'cli/fleet-cli/fleet_apply'},
                {type: 'doc', id: 'cli/fleet-cli/fleet_test'},
              ],
            },
            {type: 'doc', id: 'cli/fleet-controller/fleet-manager'},
          ],
        },
        {type:'doc', id:'cluster-bundles-state'},
        'ref-registration',
        'ref-configuration',
        "ref-crds",
        'ref-fleet-yaml',
        'ref-gitrepo',
        'ref-bundle',
      ],
    },
    'troubleshooting',
  ],
};