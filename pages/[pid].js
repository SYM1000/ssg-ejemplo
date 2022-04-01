import React from 'react'
import fs from 'fs';
import path from 'path';

function Post({ contenido }) {
    return (
        <div>
            {contenido}
        </div>
    )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync('posts')
    console.log("files: ", files)
    const paths = files.map(filename => ({
        params: {
            pid: filename.replace(".md", "")
        }
    }))
    console.log('paths: ', paths)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { pid } }) => {

    const contenido = fs.readFileSync(path.join('posts', pid + ".md")).toString();


    return {
        props: {
            contenido
        }
    }
}

export default Post