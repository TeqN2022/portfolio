export default async(req, res) => { 
    const project = [
        {
            "name": "teqn.xyz",
            "link": "https://cdn.discordapp.com/attachments/1075180794471010315/1089677960132436118/image.png",
            "description": "A personal website built with Next.js and Tailwind CSS",
            "html_url": "https://teqn.xyz/"
        
        },
        {
            "name": "tr2a.xyz",
            "link": "https://cdn.discordapp.com/attachments/1075180794471010315/1089678842844676209/image.png",
            "description": "",
            "html_url": "https://tr2a.xyz/"
        },
        {
            "name": "mybomb.store",
            "link": "https://cdn.discordapp.com/attachments/1075180794471010315/1089679104204361778/image.png",
            "description": "",
            "html_url": "https://mybomb.store/"
        },

        

    ]
    res.status(200).json(project)
}
