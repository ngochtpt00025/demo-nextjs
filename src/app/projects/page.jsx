const projects = [
    {
        id: 1,
        name: "Project 1",
        description: "Description of Project 1"
    },
    {
        id: 2,
        name: "Project 2",
        description: "Description of Project 2"
    }
]
const ProjectsPage = () => {
    return (
        <>
            <div>
                <h1>my projdct</h1>
                <ul>
                    {projects.map(project => {
                        <>
                            <li>{project.name}</li>
                            <Link href={'/projects/$project.id'}>detail</Link>
                        </>
                    })}
                </ul>    
            </div> 
        </>
    )
}