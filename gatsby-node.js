const crypto = require('crypto')
const { promises: fs } = require('fs')

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions

    //this is where your images will be fetched from. This can be replaced with API call
    const jsonData = await fs.readFile(
        __dirname + '/src/data/images.json',
        'utf-8'
    )

    const imagesData = JSON.parse(jsonData)

    imagesData.map((image, i) => {
        const imageNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `Images`,
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl
            title: image.title,
            url: image.url,
        }

        // Get content digest of node. (Required field)
        // add it to userNode
        imageNode.internal.contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(imageNode))
            .digest(`hex`)

        // Create node with the gatsby createNode() API
        createNode(imageNode)
    })

    return
}
