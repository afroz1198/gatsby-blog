module.exports = {
	pathPrefix: `/gatsby-blog`,
	siteMetadata: {
		title: `Afroz Mohammad`,
		subtitle: `Web Developer`,
		description: `I write about JavaScript,Typescript,Node.Js,Rust,Python`,
		author: `Afroz Mohammad`,
		twitterUsername: `afroz1198`,
		baseUrl: `http://afroz1198.github.io/`,
		image: `https://i.imgur.com/iXKTb3im.jpg`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		`gatsby-remark-images`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/mdx`
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`
					}
				]
			}
		},

		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Afroz Mohammad`,
				short_name: `Afroz's app`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/me.jpeg`,
				icon_options: {
					purpose: `any maskable`
				},
				crossOrigin: `use-credentials`
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [ `/projects`, `/about`, `/articles` ]
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Fira Sans`,
						variants: [
							'300',
							'300i',
							'400',
							'400i',
							'700',
							'700i'
						]
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /static/
				}
			}
		}
	]
};
