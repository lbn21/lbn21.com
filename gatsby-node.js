const axios = require('axios')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions

    const fetchImages = () =>
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
    const res = await fetchImages()

    res.data.map((image, i) => {
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
            thumbnailUrl: image.thumbnailUrl,
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
