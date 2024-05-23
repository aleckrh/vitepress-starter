export default {
    lang: "en",
    title: "VitePress Starter",
    description: "",

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/aleckrh' },
        ],
        sidebar: [
            {
                text: "VitePress",
                collapsible: true,
                collapsed: false,
                items: [
                    { text: "Introduction", link: "/index.md" },
                    { text: "About", link: "/about.md" },
                ],
            },
        ],
    },
};