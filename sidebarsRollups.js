module.exports = {
  rollups: [
    {
      type: "category",
      label: "Cartesi Rollups",
      link: {
        type: "generated-index",
        slug: "/",
      },
      collapsed: true,
      items: [
        "overview",
        "main-concepts",
        "sending-requests",
        "reading-outputs",
        "assets-handling",
        "dapp-architecture",
        {
          type: "category",
          label: "Rollups HTTP APIs",
          link: {
            type: "generated-index",
            slug: "api",
            description:
              "APIs available for DApp developers to interact with the Cartesi Rollups framework.",
          },
          collapsed: true,
          items: [
            "http-api",
            {
              type: "category",
              label: "Front-end APIs",
              link: {
                type: "generated-index",
                slug: "api/front-end",
                description:
                  "APIs used by front-end clients to interact with the Cartesi Rollups framework.",
              },
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Smart contracts API",
                  link: {
                    type: "generated-index",
                    slug: "api/json-rpc",
                  },
                  collapsed: true,
                  items: [
                    "api/json-rpc/basics",
                    "api/json-rpc/sol-input",
                    "api/json-rpc/sol-output",
                    {
                      type: "category",
                      label: "Portals",
                      link: {
                        type: "generated-index",
                        slug: "api/json-rpc/portals",
                      },
                      collapsed: true,
                      items: [
                        "api/json-rpc/portals/ERC20Portal",
                        "api/json-rpc/portals/ERC721Portal",
                        "api/json-rpc/portals/ERC1155BatchPortal",
                        "api/json-rpc/portals/ERC1155SinglePortal",
                        "api/json-rpc/portals/EtherPortal",
                      ],
                    },
                    {
                      type: "category",
                      label: "Relays",
                      link: {
                        type: "generated-index",
                        slug: "api/json-rpc/relays",
                      },
                      collapsed: true,
                      items: [
                        "api/json-rpc/relays/DAppAddressRelay",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Rollups state GraphQL API",
                  link: {
                    type: "generated-index",
                    slug: "api/graphql/index",
                  },
                  collapsed: true,
                  items: [
                    "api/graphql/basics",
                    {
                      type: "category",
                      label: "Queries",
                      link: {
                        type: "generated-index",
                        slug: "api/graphql/queries",
                      },
                      collapsed: true,
                      items: [
                        {
                          type: "autogenerated",
                          dirName: "api/graphql/queries",
                        },
                      ],
                    },
                    {
                      type: "category",
                      label: "Objects",
                      link: {
                        type: "generated-index",
                        slug: "api/graphql/objects",
                      },
                      collapsed: true,
                      items: [
                        {
                          type: "autogenerated",
                          dirName: "api/graphql/objects",
                        },
                      ],
                    },
                    {
                      type: "category",
                      label: "Filters",
                      link: {
                        type: "generated-index",
                        slug: "api/graphql/filters",
                      },
                      collapsed: true,
                      items: [
                        {
                          type: "autogenerated",
                          dirName: "api/graphql/inputs",
                        },
                      ],
                    },
                  ],
                },
                "api/inspect/inspect",
              ],
            },
            {
              type: "category",
              label: "Back-end API",
              link: {
                type: "generated-index",
                slug: "api/back-end",
                description:
                  "API used by DApp back-ends (running inside Cartesi Nodes) to interact with the Cartesi Rollups framework.",
              },
              collapsed: true,
              items: [
                "api/rollup/cartesi-rollup-http-api",
                "api/rollup/add-notice",
                "api/rollup/add-report",
                "api/rollup/add-voucher",
                "api/rollup/finish",
                "api/rollup/register-exception",
              ],
            },
          ],
        },
        "dapp-life-cycle",
      ],
    },
    {
      type: "category",
      label: "Build DApps",
      link: {
        type: "generated-index",
        slug: "/build-dapps",
      },
      collapsed: true,
      items: [
        "build-dapps/overview",
        "build-dapps/requirements",
        "build-dapps/run-dapp",
        "build-dapps/create-dapp",
        "build-dapps/dapp-host-mode",
        "build-dapps/deploying-dapps",
        "build-dapps/guidelines",
      ],
    },

    {
      type: "category",
      label: "References",
      link: {
        type: "generated-index",
        slug: "/references",
      },
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Code samples",
          href: "https://github.com/cartesi/rollups-examples",
        },
        {
          type: "link",
          label: "Deployment samples",
          href: "https://github.com/cartesi/rollups-deployment",
        },
        {
          type: "link",
          label: "Changelog",
          href: "https://github.com/cartesi/rollups/blob/main/CHANGELOG.md",
        },
        {
          type: "link",
          label: "Releases",
          href: "https://github.com/cartesi/rollups/releases",
        },
        {
          type: "category",
          label: "Migration guides",
          link: {
            type: "generated-index",
            slug: "/migration-guides",
          },
          collapsed: true,
          items: ["migration-guides/from-09-to-10"],
        },
      ],
    },
    {
      type: "category",
      label: "Future Developments",
      link: {
        type: "generated-index",
        slug: "/challenges",
      },
      collapsed: true,
      items: [
        "challenges/overview",
      ],
    },
  ],
};
