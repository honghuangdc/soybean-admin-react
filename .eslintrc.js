module.exports = {
  extends: 'soybeanjs-react',
  settings: {
    'import/core-modules': ['uno.css']
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/config',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/settings',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/enum',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/plugins',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/layouts',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/views',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/components',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/router',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/service',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/store',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/utils',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/assets',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react']
      }
    ]
  }
};
